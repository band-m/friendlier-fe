import urlBase64ToUint8Array from './urlBase64ToUint8Array';
const publicVapidKey = 'BBDk-M7Qx45gAgYzwp3epWc_PK7Iv4cF9kehNJ0YWbdLinh8JFVUhPgvoq2fQfQYLkqKISqc55D1z5Shnqk6M8A';

export default async() => {
  const registration = await navigator.serviceWorker.getRegistration();
  console.log('Registering push');
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log('Registered push');
};
