'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1fbdc5ff35d45564c885d871e059a24c",
"assets/assets/icons/back.png": "277ad47e63e375b839cde35af0a55b22",
"assets/assets/icons/user3.png": "e99bb831a5df4b568cd44740df53b079",
"assets/assets/images/al%25C4%25B1sveris.jpg": "6549f6ae166bdf4b98fe8ec7ab215d7f",
"assets/assets/images/bilim.jpg": "f1fab2570c2bf77904dbd8805b8d6c21",
"assets/assets/images/e%25C4%259Flence.jpg": "39de120564157d682fe283f3aacf9f1f",
"assets/assets/images/egitim.jpg": "5375861cef6f88e59c3527b4e46eb29f",
"assets/assets/images/hayvanlar.jpg": "bc820be04c79b2d16a044dcf937f7722",
"assets/assets/images/sagl%25C4%25B1k.jpg": "6a6c763935fabdeb988f112e24772066",
"assets/assets/images/sanat.jpg": "d79e1cc9c49f6855281545db1aa4a3d3",
"assets/assets/images/seyahat.jpg": "9341bf461dd6a4cd0466f3f76bbe3f78",
"assets/assets/images2/al%25C4%25B1%25C5%259Fveri%25C5%259F2.jpg": "e09bdd1ad500bc7f710a1717b0c100c3",
"assets/assets/images2/bilim2.jpg": "37aea1ba1ee90fec2de0a69787c773f9",
"assets/assets/images2/e%25C4%259Fitim2.jpg": "b6d316b3299906b8362d012c6f82c82b",
"assets/assets/images2/e%25C4%259Flence2.jpg": "d0ff2645ebbfdefb6cdc412589fa2c6b",
"assets/assets/images2/hayvanlar3.jpg": "2cc11356cadb3b7cf3df94e9a30270e0",
"assets/assets/images2/sa%25C4%259Fl%25C4%25B1k2.jpg": "a9adff3c95936844a5033290bb5c4757",
"assets/assets/images2/sanat2.jpg": "fa70fc2cec65a4e15684d7d402aabd40",
"assets/assets/images2/seyahat2.jpg": "cbfe46cd48e7b7da7d24575e61a0b995",
"assets/assets/images3/al%25C4%25B1%25C5%259Fveri%25C5%259F3.jpg": "99b87367ee78c6ee30aad3af66c5745d",
"assets/assets/images3/al%25C4%25B1%25C5%259Fveri%25C5%259F4.jpg": "0b2d967b11f8915ea4a6c36e75e68217",
"assets/assets/images3/bilim3.jpg": "d77f15dacf63ab47dfacadeb244f8310",
"assets/assets/images3/bilim4.jpg": "838767f6bd5f3fa7c1f51f94b4af6eb1",
"assets/assets/images3/e%25C4%259Fitim3.jpg": "33e7c2d300188f73138c83431cc36c2f",
"assets/assets/images3/e%25C4%259Flence3.jpg": "181c86c37050c62a4c1dbe3136436907",
"assets/assets/images3/hayvanlar1.jpg": "6f55bd7b1a612fcf7bbc9e8beaaf99d4",
"assets/assets/images3/sa%25C4%259Fl%25C4%25B1k3.jpg": "6179980751744bd1094379edffbd721e",
"assets/assets/images3/sanat3.jpg": "c565912e9d9bce357ed51da3e68ed318",
"assets/assets/images3/sanat5.jpg": "285a1ed97f70e50b807dc35f4c3386fd",
"assets/assets/images3/seyahat3.jpg": "d07d02bce13088fb554b323f18151b6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "402ebbe3f431de3b803dc2eac6967f5a",
"/": "402ebbe3f431de3b803dc2eac6967f5a",
"main.dart.js": "386a80fcd31ef60f5c016a9201c71f2d",
"manifest.json": "efcdd0bc6b1d2c1c42381ee8386f13c1",
"version.json": "2f31089cb922386cb2c97fb953d4f176"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
