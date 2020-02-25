import urlBase64ToUint8Array from './urlBase64ToUint8Array';
const publicVapidKey = 'BBDk-M7Qx45gAgYzwp3epWc_PK7Iv4cF9kehNJ0YWbdLinh8JFVUhPgvoq2fQfQYLkqKISqc55D1z5Shnqk6M8A';

if('serviceWorker' in navigator) {
  console.log('Registering service worker');

  run().catch(error => console.error(error));
}

async function run() {
  console.log('Registering service worker');
  const registration = await navigator.serviceWorker.register('/worker.js', { scope: '/' });
  console.log('Registered service worker');

  console.log('Registering push');
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log('Registered push');

  console.log('Sending push');
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  });
  console.log('Sent push');
}
