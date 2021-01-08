let cacheName = 'cache-v1'
// files to precache
let toPrecache = [
    '/',
    'index.html',
    '/style.css',
    '/main.js',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg'
]

/*
inside a service worker self refers to service worker
outiside self refers to the window object
*/
self.addEventListener("install", event => {
    /*
    waitUntil method holds the install event util
    all the files added to the caches 
    */
    event.waitUntil( 
        caches.open(cacheName)
        .then(cache => cache.addAll(toPrecache))
    )
})

/*
this enables the offline support
we are using cache-first startegey - in other words
if the requested files are in cache return that 
or got to the server

note: this is static cache
*/
self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
    .then(response => response || fetch(event.request))
    )
})


// liten to the notificationclick event;
self.addEventListener("notificationclick", event => {
    if(event.action === 'stop') {
        event.notifcation.close()
    } else {
        clients.openWindow("https://www.example.com")
    }
})

