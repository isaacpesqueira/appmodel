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
'../assets/img/online-store.png',
'../assets/img/responsive-1622825_640.png',
'../assets/js/script.min.js',

'../precios.html',
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
        return cache.addAll(urlToCache)
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



