importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDi5SmmGYkvAFbCXZrYNwefh9RmNwQuzj0",
  authDomain: "idtrabajadores.firebaseapp.com",
  projectId: "idtrabajadores",
  storageBucket: "idtrabajadores.firebasestorage.app",
  messagingSenderId: "476040391869",
  appId: "1:476040391869:web:342d794edaaf54ce49bd4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'Nueva notificación';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/icon-192x192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});