export default async() => {
  console.log('unsubscribing');
  const registration = await navigator.serviceWorker.getRegistration('/src/workers/worker.js');
  const subscription = await registration.pushManager.getSubscription();
  await subscription?.unsubscribe();
  console.log('unsubscribed');

};
