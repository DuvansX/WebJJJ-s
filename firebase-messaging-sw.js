// =====================================================
// Service Worker para Firebase Cloud Messaging (Web)
// =====================================================

// Importar Firebase (modo compatibilidad)
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Configuración de Firebase (la misma que en tu notificaciones.js)
firebase.initializeApp({
  apiKey: "AIzaSyD7s5mmGYkvAFbCXZrYNwefh9RmNwQuzi0",
  authDomain: "idtrabajadores.firebaseapp.com",
  projectId: "idtrabajadores",
  storageBucket: "idtrabajadores.appspot.com",
  messagingSenderId: "476040391869",
  appId: "1:476040391869:web:342d794ed1aaf54ce49bd4",
  measurementId: "G-G9XR5E02Z2"
});

// Inicializar Messaging
const messaging = firebase.messaging();

// =====================================================
// Escuchar mensajes en background
// =====================================================
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Notificación recibida en background:', payload);

  const notificationTitle = payload.notification?.title || 'Nueva notificación';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/WebJJJ-s/Imagenes/Logo%20Restaurante.PNG',   // Logo principal
    badge: '/WebJJJ-s/Imagenes/badge-72.png'             // Ícono monocromo pequeño (evita la "D")
  };

  // Mostrar la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});
