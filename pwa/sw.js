console.log("I am Service Worker");
///Asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_appmodel_pwa';

//ficheros a cachear en la app
var urltoCache = [
'../',
'../images/btn_whatsapp.png',
'../images/pizza.png',
'../assets/bootstrap/css/bootstrap.min.css',
'../assets/css/styles.min.css',
'../assets/img/glass.jpg',
'../assets/img/landing-free-landing-page-website-template.jpg',
'../assets/img/login.PNG',
'../assets/img/negocio.PNG',
'../assets/img/office.jpg',
'../assets/img/online-store.png',
'../assets/img/responsive-1622825_640.png',
'../assets/js/script.min.js',

'../catalogo.html',
'../contact.html',
'../negocios.html',
'../precios.html'


];

//Evento install
//instalacion del service worket y guardar en el cache recuros
//estaticos


self.addEventListener('install', (event) => {
    console.info('Event: Install');

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
  });




 self.addEventListener('fetch', event => {
  

 	event.respondWith(
 	caches.match(event.request)
 		.then(res=> {
 		if(res) {
			///devuelvo los datos del cache
 			return res;
 		}
		return fetch(event.request);
 		})
  );
});

/*
  ACTIVATE EVENT: triggered once after registering, also used to clean up caches.
*/
//Adding `activate` event listener
 

    self.addEventListener('activate', event => {
      console.info('Event: Activate');
  const cacheWhitelist = [CACHE_NAME];
    
      event.waitUntil(
      	caches.keys()
      		.then(cacheName => {
      			return Promise.all(
      			cacheNames.map(cacheName => 
      			{

	      			if(cacheWhitelist.indexOf(cacheName) === -1)
	      			{
	      				return caches.delete(cacheName);
	      			}
      			})
      			);
      		})
      		.then(()=>{ self.clients.claim(); 
    })
      		);
 });


