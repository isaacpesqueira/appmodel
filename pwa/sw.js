

console.log("I am Service Worker");

///Asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_appmodel_pwa';
var doCache=false;

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
 for (var i = 0; i < 1000; i++) {
   setTimeout(function(){ console.log("Tengo el Poder Hello, service worker"); }, 1000);
   i++;
 }
 

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
});


// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
    console.log("Event:Fetch Otravez Tu");
 
});


self.addEventListener('push', function(event) {
  console.log(event.data.text());
  
    var data = objJSON;
    $.ajax({
        url : 'https://www.evstest.com/G3v1LastVersion/portal/portal_action.php',
        data : data,
        method : 'post', //en este caso
        dataType : 'json',
        success : function(response){
            alert("funciona bien");
        },
        error: function(error){
          const promiseChain = self.registration.showNotification("No funciona");

  event.waitUntil(promiseChain);
          
        }
    });



  
});


