

console.log("I am Service Worker");

///Asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_appmodel_pwa';
var doCache=false;

//ficheros a cachear en la app
var urltoCache = [
'/',
'/images/btn_whatsapp.png',
'/images/pizza.png',
'/assets/bootstrap/css/bootstrap.min.css',
'/assets/css/styles.min.css',
'/assets/img/glass.jpg',
'/assets/img/landing-free-landing-page-website-template.jpg',
'/assets/img/login.PNG',
'/assets/img/negocio.PNG',
'/assets/img/office.jpg',
'/assets/img/online-store.png',
'/assets/img/responsive-1622825_640.png',
'/assets/js/script.min.js',

'/catalogo.html',
'/contact.html',
'/negocios.html',
'/precios.html'


];

//Evento install
//instalacion del service worket y guardar en el cache recuros
//estaticos


self.addEventListener('install', (event) => {
    console.info('Event: Install');
if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then((cache) => {
        //[] of files to cache & if any of the file not present `addAll` will fail
        return cache.addAll(urltoCache)
        .then(() => {
          console.info('All files are cached');
          return self.skipWaiting(); //To forces the waiting service worker to become the active service worker
        })
        .catch((error) =>  {
          console.error('Failed to cache', error);
        })
      })
    );
  }});



self.addEventListener("activate", event => {
      console.log("Event:Activate");
  
 console.log("Tengo el Poder Hello, service worker");
    

                       
   
 });










// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
// saveSubscription saves the subscription to the backend
const saveSubscription = async subscription => {
  const SERVER_URL = 'https://appmodel.ml/'
  const response = await fetch(SERVER_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscription),
  })
  return response.json()
}
self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.
  try {
    const applicationServerKey = urlB64ToUint8Array(
      'BJ5IxJBWdeqFDJTvrZ4wNRu7UY2XigDXjgiUBYEYVXDudxhEs0ReOJRBcBHsPYgZ5dyV8VjyqzbQKS8V7bUAglk'
    )
    const options = { applicationServerKey, userVisibleOnly: true }
    const subscription = await self.registration.pushManager.subscribe(options)
    const response = await saveSubscription(subscription)
    console.log(response)
  } catch (err) {
    console.log('Error', err)
  }
})


self.addEventListener('push', function(event) {
  if (event.data) {
    console.log('Push event!! ', event.data.text())
  } else {
    console.log('Push event but no data')
  }
})








  //const cacheWhitelist = [CACHE_NAME];
  //event.waitUntil(
    //caches.keys()
     // .then(keyList =>
      //  Promise.all(keyList.map(key => {
         // if (!cacheWhitelist.includes(key)) {
           // console.log('Deleting cache: ' + key)
           // return caches.delete(key);
         // }
          //else
         //  {
             //  console.log("power");
           //  self.clients.claim();

         //  } 
      ///  }))
    //  )
  //);
///});


// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
    console.log(event);
 
    
    var myVar = setInterval(myTimer,90000);

function myTimer() {

var text = "AppModel";


console.log(text+" "+Math.random());


  
  
}
    
    
    
});








