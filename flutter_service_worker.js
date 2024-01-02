'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fccb32c486833f2da1fc785f4ebd4793",
"assets/AssetManifest.json": "ad23564e6cd17e79e682da4e6931a32c",
"assets/assets/fonts/GOTHIC.ttf": "cfce6abbbff0099b15691345d8b94dcc",
"assets/assets/fonts/GOTHICI.ttf": "89d1d828dd7407e8e5ff6aa83cc5b294",
"assets/assets/images/a1.jpg": "768e759bc4d71a3ce5602f356a1b7e6f",
"assets/assets/images/Addy1.JPG": "b8e8af77b47f99bd03e891d973ff91d9",
"assets/assets/images/Addy2.JPG": "9d2bf121806d1395320d46c2df8bb538",
"assets/assets/images/check.png": "af3572773e2f7b1529a69bccc01d6f38",
"assets/assets/images/dia.png": "afeaa0bc968054bd1e170a327fd60e97",
"assets/assets/images/dia2.png": "494bd7bfd07154bd02598bd22af90853",
"assets/assets/images/dia3.png": "76c17a8baf969cd46861d7515cc4f44f",
"assets/assets/images/dia5.png": "855b5da56c63ab0fb7842962ad8ac10c",
"assets/assets/images/Diamond.png": "32ab44604c47c44a3c630a51dcfd924c",
"assets/assets/images/Diamond_logo.png": "925eb6f41567a82672a1aa4f93f706f5",
"assets/assets/images/Front.JPG": "19c3ad40d4a1ca0b78fdda14f05700e8",
"assets/assets/images/Furn1.jpg": "b8a5d286fede009073bc670575a90571",
"assets/assets/images/Furn2.jpg": "72fb5bc78a05a06281b6058c7da1bea6",
"assets/assets/images/grey_black1.jpg": "21e239db18662c66a75928781784cd52",
"assets/assets/images/logo.JPG": "c1c7f2a0b937d8cb8f6d35a02aecf5a2",
"assets/assets/images/Maite_Christmas.jpg": "7719a0f0ae3c968acfbb082fa1a86f6e",
"assets/assets/images/pexels-andrea-piacquadio-3757055.jpg": "e3beccc19ac20d384eaf306f19b4f326",
"assets/assets/images/pexels-engin-akyurt-1647662.jpg": "8984e2c39119bf72bee80a70f32c18b5",
"assets/assets/images/pexels-max-rahubovskiy-6980665.jpg": "72c5fce76ddadc9c1fceafc0c69da7cb",
"assets/assets/images/pexels-max-rahubovskiy-6980711.jpg": "154ef6a786823b46f9a30210d483aa78",
"assets/assets/images/pexels-max-rahubovskiy-7535044.jpg": "de466e3661b4db010e5e2acba05a26f5",
"assets/assets/images/pexels-max-rahubovskiy-8135266.jpg": "64b1806e0ba2c0545bbcecafc22fe115",
"assets/assets/images/pexels-olena-bohovyk-18468859.jpg": "3b797b20f40f9572045602239c1af9c5",
"assets/assets/images/pexels-pixabay-276528.jpg": "170c38557a19ea9638109d610bdbff2d",
"assets/assets/images/test1.jpg": "1fe64b5ead1bb326bd6f0b3f85edf530",
"assets/FontManifest.json": "2b2c8ac2135a1753f10d85125bdbd0fb",
"assets/fonts/MaterialIcons-Regular.otf": "83008ff73c6a8c3d2593a19fc700b841",
"assets/NOTICES": "17ab0b08371b4aad75d19725f7a79bbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "fac3a6ae0484397ac763192aa14b39a8",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0eafe1ee378b04ead4ac601661f38927",
"/": "0eafe1ee378b04ead4ac601661f38927",
"main.dart.js": "debe5b5db16e8b242b2bc6020478d9e0",
"manifest.json": "f4926f6e67daec07b4115b1348c3dac4",
"version.json": "a4ff762358a925c63083de17b7a70691"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
