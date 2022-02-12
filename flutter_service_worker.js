'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "b50ba862d825697769f520d50d2eff56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "63fc9d163eebf6daff8c8cb8b47819de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d48dee966647751f1f71394dc6ba0e40",
".git/logs/refs/heads/main": "d48dee966647751f1f71394dc6ba0e40",
".git/logs/refs/remotes/origin/HEAD": "d48dee966647751f1f71394dc6ba0e40",
".git/objects/pack/pack-f4d9058e75f23179513fa1f98802eb69e559d19d.idx": "38b8871cce3d20a4123554d13a0b66e5",
".git/objects/pack/pack-f4d9058e75f23179513fa1f98802eb69e559d19d.pack": "fcf794b7b6c31afbb4dddbc975415953",
".git/packed-refs": "d699ead8c480a722823862ea6a305aed",
".git/refs/heads/main": "3380721c0bb00515851de4548f96614f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.json": "55927f141ddbf2a34b5e67460ad8a994",
"assets/assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "6b78c7ec468eb0e13c6c5c4c39203986",
"assets/assets/fonts/Poppins-Light.ttf": "2a47a29ceb33c966c8d79f8d5a5ea448",
"assets/assets/fonts/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/images/avatar.png": "1ee966d656f02e2e41912d7622009854",
"assets/assets/images/background-4.png": "bdd6181f9a9fccf326de81610357305d",
"assets/assets/images/pyclub.png": "7d8b00025f1ae344b9744ceafc0177cd",
"assets/assets/images/pyclub_logo.png": "817c6dad518a74021264103e96f76b2f",
"assets/assets/images/py_icon.png": "219567126e223735b6b85a6174b8a06a",
"assets/assets/images/py_logo.png": "6c7162443ec21cfd4d47d33370dd3e70",
"assets/assets/svg/avator1.svg": "2ee73e68a5c18db0612f86eb7336d62f",
"assets/assets/svg/avator10.svg": "51eecd1d66c3c0f309afb0edb06aa18c",
"assets/assets/svg/avator11.svg": "8f9c88ade9362418d8d523c6482492b7",
"assets/assets/svg/avator12.svg": "0d6490dc67d22be38a368404e1e32d56",
"assets/assets/svg/avator13.svg": "d6a2b9e6ae15c35fc12db52c695e2819",
"assets/assets/svg/avator14.svg": "1ce19ae8abc97fbab0eda58ee9091c1d",
"assets/assets/svg/avator15.svg": "b661f8120984505c23196f4dc1d5b383",
"assets/assets/svg/avator16.svg": "d3ea76db47c921c21ec6a4c67c9a6daa",
"assets/assets/svg/avator17.svg": "91f7e377a719661a9ef3e6398f9c76ea",
"assets/assets/svg/avator2.svg": "d15741624c2fe58d5eac64f4400598c7",
"assets/assets/svg/avator3.svg": "61da33e84148955313679ee8aef250e0",
"assets/assets/svg/avator4.svg": "6815b089a27852653c425b1d18607238",
"assets/assets/svg/avator5.svg": "0f2a3f509aed0b43f21a38c5e1d0f174",
"assets/assets/svg/avator6.svg": "6062431b1bdb01e411c2e4060b4b90df",
"assets/assets/svg/avator7.svg": "564fb17c1333601b2b8f2236b08c6ca6",
"assets/assets/svg/avator8.svg": "605b06bea88e41754cb136c12300b98e",
"assets/assets/svg/avator9.svg": "fbbc4a875855efff7a4780df745d8d2b",
"assets/assets/svg/bg_home.svg": "e6d54a8ed634d1087d036616dc1b6f1a",
"assets/assets/svg/cashback.svg": "2205da6d5eb067c088bc8233bb4c61bf",
"assets/assets/svg/cloud.svg": "00df3da57e30263a699ba3d21d888ba7",
"assets/assets/svg/cross.svg": "1259b5078ced753aa20c9b2a1ea5fdae",
"assets/assets/svg/electricity.svg": "6e04525a31bbecec017b088e862c5828",
"assets/assets/svg/filter.svg": "1dbdda7bde3e7ace120a40e8ca0edc3c",
"assets/assets/svg/flight.svg": "2bb12a3315381f306cca471812e7c7ba",
"assets/assets/svg/logo.svg": "e75ddb1619468eab2acd25cdbaaf4062",
"assets/assets/svg/logout.svg": "90bd6d3d04c424bf2cbb576b62be7720",
"assets/assets/svg/menu.svg": "dbf1dfd14593c7cfb35376cfaf8d2a74",
"assets/assets/svg/mobile.svg": "7a4eb976eb869c73279af06d2c8b0427",
"assets/assets/svg/more.svg": "7d7fdf56b8918b6ecc5ba1e421a90f5c",
"assets/assets/svg/movie.svg": "e6c162f7340ede91862980d09cb57a35",
"assets/assets/svg/receive.svg": "98ae3dcdf4779dfcde6628eca0ee9bda",
"assets/assets/svg/scan.svg": "c1254ec41344e02b8fc6f649bfc01692",
"assets/assets/svg/send.svg": "3522cd628260324d789f06a114b56c94",
"assets/FontManifest.json": "fece6143a431645c48ec8dbf110331db",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a465034ab19e885133eb657c5816a171",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "93f6af1a234e946944becad54b723816",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "daba794ffef91b893dab6698e838cdb0",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d1e5d12ea039aff84648c114e4d02c98",
"/": "d1e5d12ea039aff84648c114e4d02c98",
"main.dart.js": "4673ea79fa45a7e6cd89cd25d1561829",
"manifest.json": "61f27a4d629ac082185421cc6ab2e4c6",
"version.json": "c54b2e5ca9d0891b57520c9ca46abcce",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
