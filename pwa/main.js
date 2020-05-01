// Service Worket

// Scroll suavizado

if('serviceWorker' in navigator)
{
console.log('YES !! SERVICE WORKER EXISTS');	
 
navigator.serviceWorker.register('pwa/sw.js')
					.then(res => console.log('Service Worker Cargado Correctamente',res))
					.catch(err=> console.log("No se logro",err));
}
else
{
console.log('No WORKER , SERVICE WORKER');		
}

//Scroll suavizado
