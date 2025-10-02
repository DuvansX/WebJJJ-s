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
// (resto del código igual que tenías)
// ============================================
