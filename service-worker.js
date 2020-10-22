const staticCacheName = 'luisjg-site-static-v1';
const dynamicCacheName = 'luisjg-site-dynamic-v1';
const assets = [
    '/',
    '/index.html',
    '/json/education.json',
    '/json/experience.json',
    '/json/work.json',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432443/luisjg/profile.jpg',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432623/luisjg/made-with-bulma.e0eab74.png',
    'https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547608037/luisjg/site.jpg',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547608037/luisjg/csp.jpg',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547608037/luisjg/web-services.jpg',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547608037/luisjg/faculty.jpg',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547608037/luisjg/scholarship.jpg',
    'https://res.cloudinary.com/dfhliq7vp/image/upload/v1547608037/luisjg/metalab-website.jpg',
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css',
    'https://cdn.jsdelivr.net/npm/bulma-timeline@3.0.4/dist/css/bulma-timeline.min.css',
    'https://cdn.jsdelivr.net/npm/bulma-divider@0.2.0/dist/css/bulma-divider.min.css',
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap',
    'https://pro.fontawesome.com/releases/v5.12.0/js/all.js',
    'https://www.googletagmanager.com/gtag/js?id=UA-108163478-1'
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

// install event
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    //console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// fetch event
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    // check cached items size
                    limitCacheSize(dynamicCacheName, 35);
                    return fetchRes;
                })
            });
        }).catch(() => {
            return evt.request;
        })
    );
});
