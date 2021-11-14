const CACHE_STATIC = 'static-v1';
const CACHE_INMUTABLE = 'inmutable-v1';
const url = '/FGA-20213-PWA-U2-P7/'


self.addEventListener('install',(event)=>{
    console.log('SW instalado :D');

    const cacheStatic = caches.open(CACHE_STATIC)
    .then(cache=>{
        cache.addAll([
            `${url}`,
            `${url}index.html`,
            `${url}manifest.json`,
            `${url}images/user.png`,
            `${url}js/camera.js`,
            `${url}js/app.js`,
            `${url}images/icons/android-launchericon-48-48.png`,
            `${url}images/icons/android-launchericon-72-72.png`,
            `${url}images/icons/android-launchericon-96-96.png`,
            `${url}images/icons/android-launchericon-144-144.png`,
            `${url}images/icons/android-launchericon-192-192.png`,
            `${url}images/icons/android-launchericon-512-512.png`
        ]);
    });

    const cacheInmutable = caches.open(CACHE_INMUTABLE)
    .then(cache=>{
        cache.addAll([
            'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js'
        ]);
    });

    event.waitUntil(Promise.all([cacheStatic,cacheInmutable]));

});

self.addEventListener('fetch',(event)=>{
    event.respondWith(caches.match(event.request));
})