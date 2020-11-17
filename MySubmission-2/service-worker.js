const CACHE_NAME = 'CACHE';
var urlsToCache = [
	'/',
	'/nav.html',
	'/index.html',
	'/push.js',
	'/sw.js',
	'/image1.jpg',
	'/barcelona.jpg',
	'/icon.png',
	'/pages/home.html',
	'/pages/about.html',
	'/pages/saved.html',
	'/liga/LigaBelanda.html',
	'/liga/LigaInggris.html',
	'/liga/LigaJerman.html',
	'/liga/LigaPrancis.html',
	'/liga/LigaSpanyol.html',
	'/liga/uefa.html',
	'/nav.html',
	'/navContent.html',
	'/DetailTeams.html',
	'/css/materialize.min.css',
	'/css/materialize.css',
	'/css/navcolor.css',
	'/manifest.json',
	'/js/conectDb.js',
	'/js/db.js',
	'/js/idb.js',
	'/js/listLiga',
	'/js/materialize.js',
	'/js/materialize.min.js',
	'js/nav.js', 
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/fontawesome.min.css',
	'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
	
];

self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
})

self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != CACHE_NAME){	
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener("fetch", function(event) {
    var base_url = "https://api.football-data.org/v2/";
    if (event.request.url.indexOf(base_url) > -1) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function(cache) {
                return fetch(event.request).then(function(response) {
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        )
    }
});
self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: '/icon.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });

