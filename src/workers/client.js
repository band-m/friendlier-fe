if('serviceWorker' in navigator) {
  console.log('Registering service worker');

  run().catch(error => console.error(error));
}
else {
  console.log('service workers not supported');
}

async function run() {
  console.log('Registering service worker');
  const registration = await navigator.serviceWorker.register('/public/worker.js', { scope: '/public/' })
    .then(registration);
  console.log('Registered service worker');
}
