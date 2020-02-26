import urlBase64ToUint8Array from './urlBase64ToUint8Array';
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
  const registration = await navigator.serviceWorker.register('/src/workers/worker.js', { scope: '/src/workers/' })
    .then(registration);
  console.log('Registered service worker');
}
