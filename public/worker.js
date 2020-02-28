console.log('Loaded service worker!');

self.addEventListener('push', ev => {
  const message = ev.data.text();
  self.registration.showNotification('Kit Reminder:', {
    body: message,
    // icon: 'url to our icon goes here'
  });
});
