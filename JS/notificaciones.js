// ============================================
// SISTEMA DE NOTIFICACIONES PUSH - FIREBASE
// Archivo: notificaciones.js
// ============================================

// Configuración de Firebase (usa la oficial de tu consola Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyD7s5mmGYkvAFbCXZrYNwefh9RmNwQuzi0",
  authDomain: "idtrabajadores.firebaseapp.com",
  projectId: "idtrabajadores",
  storageBucket: "idtrabajadores.appspot.com",
  messagingSenderId: "476040391869",
  appId: "1:476040391869:web:342d794ed1aaf54ce49bd4",
  measurementId: "G-G9XR5E02Z2"
};

// VAPID Key (Clave pública para notificaciones web)
const VAPID_KEY = "BGli88jYJSuzrmtIkhour3HUlFcxuVXDNGnSVTrZOOq1LGrmdgZWs291b1PsboET03OhZm864TYzh6FRiI1Jqxg";

let messaging = null;
let isInitialized = false;

// ============================================
// INICIALIZAR FIREBASE
// ============================================

function initFirebase() {
  try {
    if (typeof firebase === 'undefined') {
      console.error('❌ Firebase SDK no está cargado. Asegúrate de incluir los scripts en tu HTML.');
      return false;
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      console.log('✅ Firebase inicializado');
    }

    if (!firebase.messaging.isSupported()) {
      console.warn('⚠️ Este navegador no soporta notificaciones push');
      mostrarMensaje('Tu navegador no soporta notificaciones', 'warning');
      return false;
    }

    messaging = firebase.messaging();
    isInitialized = true;
    setupForegroundListener();
    console.log('✅ Sistema de notificaciones listo');
    return true;

  } catch (error) {
    console.error('❌ Error al inicializar Firebase:', error);
    mostrarMensaje('Error al inicializar notificaciones', 'error');
    return false;
  }
}

// ============================================
// ACTIVAR NOTIFICACIONES
// ============================================

async function activarNotificaciones() {
  try {
    if (!isInitialized) {
      const initialized = initFirebase();
      if (!initialized) return null;
    }

    if (!('Notification' in window)) {
      alert('❌ Tu navegador no soporta notificaciones');
      return null;
    }

    console.log('📢 Solicitando permiso de notificaciones...');
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('✅ Permiso concedido');
      
      const token = await messaging.getToken({ 
        vapidKey: VAPID_KEY,
        // 🔧 corregido: ruta absoluta para GitHub Pages
        serviceWorkerRegistration: await navigator.serviceWorker.register('/WebJJJ-s/firebase-messaging-sw.js')
      });
      
      if (token) {
        console.log('🔑 Token FCM obtenido:', token);
        
        try {
          localStorage.setItem('fcm_token', token);
          localStorage.setItem('fcm_token_date', new Date().toISOString());
        } catch (e) {
          console.warn('No se pudo guardar en localStorage');
        }
        
        await suscribirATema(token, 'todos');
        mostrarMensaje('¡Notificaciones activadas correctamente! 🎉', 'success');
        actualizarBotonNotificaciones(true);
        return token;
      } else {
        console.error('❌ No se pudo obtener el token');
        mostrarMensaje('No se pudo obtener el token de notificación', 'error');
        return null;
      }
      
    } else if (permission === 'denied') {
      console.warn('❌ Permiso denegado');
      alert('❌ Has denegado las notificaciones.\n\nPara activarlas:\n1. Haz clic en el candado 🔒 en la barra de direcciones\n2. Busca "Notificaciones"\n3. Cambia a "Permitir"');
      return null;
    } else {
      console.log('⚠️ Permiso ignorado');
      return null;
    }
    
  } catch (error) {
    console.error('❌ Error al activar notificaciones:', error);
    
    if (error.code === 'messaging/permission-blocked') {
      alert('❌ Las notificaciones están bloqueadas.\n\nPara activarlas, ve a la configuración de tu navegador.');
    } else {
      mostrarMensaje('Error al activar notificaciones: ' + error.message, 'error');
    }
    return null;
  }
}

// ============================================
// SUSCRIBIR A TEMA
// ============================================

async function suscribirATema(token, tema) {
  try {
    console.log(`📌 Suscrito al tema: ${tema}`);
    try {
      localStorage.setItem('fcm_topic', tema);
    } catch (e) {
      console.warn('No se pudo guardar el tema');
    }
    return true;
  } catch (error) {
    console.error('Error al suscribir al tema:', error);
    return false;
  }
}

// ============================================
// ESCUCHAR NOTIFICACIONES EN PRIMER PLANO
// ============================================

function setupForegroundListener() {
  if (!messaging) return;
  
  messaging.onMessage((payload) => {
    console.log('📬 Notificación recibida (app abierta):', payload);
    
    const title = payload.notification?.title || 'Nueva notificación';
    const body = payload.notification?.body || '';
    const icon = payload.notification?.icon || '/icon-192x192.png';
    
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: icon,
        badge: '/badge-72x72.png',
        tag: 'notification-' + Date.now(),
        vibrate: [200, 100, 200]
      });
    }
    
    mostrarNotificacionEnPagina(title, body);
  });
}


// ============================================
// MOSTRAR NOTIFICACIÓN EN LA PÁGINA
// ============================================

function mostrarNotificacionEnPagina(titulo, mensaje) {
  let container = document.getElementById('notification-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-toast-container';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '99999';
    container.style.maxWidth = '400px';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.backgroundColor = '#2196F3';
  toast.style.color = 'white';
  toast.style.padding = '16px 20px';
  toast.style.marginBottom = '10px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  toast.style.display = 'flex';
  toast.style.flexDirection = 'column';
  toast.style.gap = '8px';
  toast.style.animation = 'slideInRight 0.3s ease-out';

  const titleEl = document.createElement('strong');
  titleEl.textContent = '🔔 ' + titulo;
  titleEl.style.fontSize = '16px';

  const messageEl = document.createElement('div');
  messageEl.textContent = mensaje;
  messageEl.style.fontSize = '14px';

  toast.appendChild(titleEl);
  toast.appendChild(messageEl);
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 6000);
}

// ============================================
// DESACTIVAR NOTIFICACIONES
// ============================================

async function desactivarNotificaciones() {
  try {
    if (!messaging) {
      console.warn('Messaging no inicializado');
      return;
    }

    await messaging.deleteToken();
    console.log('✅ Token eliminado');

    try {
      localStorage.removeItem('fcm_token');
      localStorage.removeItem('fcm_token_date');
      localStorage.removeItem('fcm_topic');
    } catch (e) {
      console.warn('No se pudo limpiar localStorage');
    }

    mostrarMensaje('Notificaciones desactivadas', 'info');
    actualizarBotonNotificaciones(false);

  } catch (error) {
    console.error('Error al desactivar notificaciones:', error);
    mostrarMensaje('Error al desactivar notificaciones', 'error');
  }
}

// ============================================
// VERIFICAR ESTADO
// ============================================

function verificarEstadoNotificaciones() {
  if (!('Notification' in window)) {
    return { 
      soportado: false, 
      permiso: 'not-supported',
      token: null
    };
  }

  let token = null;
  try {
    token = localStorage.getItem('fcm_token');
  } catch (e) {
    // Ignorar
  }

  return {
    soportado: true,
    permiso: Notification.permission,
    token: token,
    activo: Notification.permission === 'granted' && token !== null
  };
}

// ============================================
// UI - ACTUALIZAR BOTÓN
// ============================================

function actualizarBotonNotificaciones(activo) {
  const btn = document.getElementById('btn-activar-notificaciones');
  if (!btn) return;

  if (activo) {
    btn.textContent = '🔔 Notificaciones Activas';
    btn.style.backgroundColor = '#4CAF50';
    btn.onclick = desactivarNotificaciones;
  } else {
    btn.textContent = '🔔 Activar Notificaciones';
    btn.style.backgroundColor = '#2196F3';
    btn.onclick = activarNotificaciones;
  }
}

function crearBotonNotificaciones() {
  if (document.getElementById('btn-activar-notificaciones')) return;

  const btn = document.createElement('button');
  btn.id = 'btn-activar-notificaciones';
  btn.textContent = '🔔 Activar Notificaciones';
  btn.style.position = 'fixed';
  btn.style.bottom = '80px';
  btn.style.right = '20px';
  btn.style.padding = '12px 24px';
  btn.style.backgroundColor = '#2196F3';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '16px';
  btn.style.fontWeight = 'bold';
  btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  btn.style.zIndex = '9998';
  btn.onclick = activarNotificaciones;

  document.body.appendChild(btn);

  const estado = verificarEstadoNotificaciones();
  actualizarBotonNotificaciones(estado.activo);
}

// ============================================
// MENSAJES DE SISTEMA
// ============================================

function mostrarMensaje(mensaje, tipo = 'info') {
  const colores = {
    success: '#4CAF50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196F3'
  };

  const container = document.getElementById('notification-toast-container') || (() => {
    const c = document.createElement('div');
    c.id = 'notification-toast-container';
    c.style.position = 'fixed';
    c.style.top = '20px';
    c.style.right = '20px';
    c.style.zIndex = '99999';
    c.style.maxWidth = '400px';
    document.body.appendChild(c);
    return c;
  })();

  const toast = document.createElement('div');
  toast.style.backgroundColor = colores[tipo] || colores.info;
  toast.style.color = 'white';
  toast.style.padding = '16px 20px';
  toast.style.marginBottom = '10px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  toast.textContent = mensaje;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initFirebase();
    verificarYSolicitarPermisoAutomatico();
  });
} else {
  initFirebase();
  verificarYSolicitarPermisoAutomatico();
}

// Solicitar permiso automáticamente si no está activado
async function verificarYSolicitarPermisoAutomatico() {
  const estado = verificarEstadoNotificaciones();
  
  // Si las notificaciones ya están activas, no hacer nada
  if (estado.activo) {
    console.log('Las notificaciones ya están activas');
    return;
  }
  
  // Si el permiso es 'default' (nunca se ha preguntado), solicitar automáticamente
  if (estado.permiso === 'default') {
    console.log('Solicitando permisos de notificación automáticamente...');
    setTimeout(() => {
      activarNotificaciones();
    }, 2000); // Esperar 2 segundos después de cargar la página
  }
}

// ============================================
// EXPORTAR FUNCIONES
// ============================================

window.notificationsFunctions = {
  activar: activarNotificaciones,
  desactivar: desactivarNotificaciones,
  verificarEstado: verificarEstadoNotificaciones,
  mostrarMensaje: mostrarMensaje
};