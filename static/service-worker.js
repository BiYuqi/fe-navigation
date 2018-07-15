/* eslint-disable */
const CacheName = 'loadingmore'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CacheName)
      .then(cache => {
        console.log('Content is cached for offline use.')
        return cache.addAll([
          '/static/data/basedata.json',
          '/static/img/logo.png'
        ])
      })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true})
      .then((response) => {
        if (response) {
          return response
        }
        const requestTocache = event.request.clone()

        return fetch(requestTocache).then((response) => {
          if (!response || response.status !== 200) {
            return response
          }
          const responseToCache = response.clone()
          caches.open(CacheName)
            .then((cache) => {
              cache.put(requestTocache, responseToCache)
            })
          return response
        })
      })
  )
})
