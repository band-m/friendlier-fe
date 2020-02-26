import urlBase64ToUint8Array from './urlBase64ToUint8Array';
import { postSubscription } from '../services/subscribe';
const publicVapidKey = 'BBDk-M7Qx45gAgYzwp3epWc_PK7Iv4cF9kehNJ0YWbdLinh8JFVUhPgvoq2fQfQYLkqKISqc55D1z5Shnqk6M8A';

if('serviceWorker' in navigator) {
  console.log('Registering service worker');

  run().catch(error => console.error(error));
}
else {
  console.log('service workers not supported');
}

async function run() {
  console.log('Registering service worker');
  const registration = await navigator.serviceWorker.register('/workers/worker.js', { scope: '/' })
    .then(registration);
  console.log('Registered service worker');

  console.log('Registering push');
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log('Registered push');

  console.log('Sending push');
  postSubscription(subscription);
  console.log('Sent push');
}
