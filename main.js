// Service Worket

// Scroll suavizado

if('serviceWorker' in navigator)
{
console.log('YES !! SERVICE WORKER EXISTS');	
 
navigator.serviceWorker.register('sw.js')
					.then(res => console.log('Service Worker Cargado Correctamente',res))
					.catch(err=> console.log("No se logro",err));
}
else
{
console.log('No WORKER , SERVICE WORKER');		
}

//Scroll suavizado


const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}


Notification.requestPermission(function(permission){
var notification = new Notification("Bienvenido a AppModel ");
});



const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register('service.js')
  return swRegistration
}
const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification')
  }
}
const main = async () => {
  check()
  const swRegistration = await registerServiceWorker()
  const permission = await requestNotificationPermission()
}
// main(); we will not call main in the beginning.
