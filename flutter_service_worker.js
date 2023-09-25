'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a8ddbb827741d7783234fd3253a4ea52",
"assets/AssetManifest.json": "2657dc63b1824513151196023b9a0256",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/BYekan+_Bold.ttf": "7cceaa19cfb427713f1893d749613e95",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/animation_lmdnp9mv_small.gif": "cffc393a61df487cb436d9ce33ab71a5",
"assets/assets/images/Comp-1-1-1-unscreen.gif": "4fe97e4dc48616c3e22040396328993b",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/globe_(1)_2.png": "d6edf4a543883747d0e1aed67a238f56",
"assets/assets/images/Group_1.svg": "cfa26e54f68128f4cdad657ae6ff72ee",
"assets/assets/images/Group_113_(1).png": "60725c3a054e87dd2e790e558f3a0fd9",
"assets/assets/images/Group_115.png": "c3b497951558c922371da3a4444a414f",
"assets/assets/images/Group_2.svg": "9bf9274154560a03bb255554619526ab",
"assets/assets/images/Group_23_(2).png": "0d78cb252e6e37c686107bcb9e630a8a",
"assets/assets/images/Group_24.svg": "aca03cd1709af5818bca7679a1820b18",
"assets/assets/images/Group_32_(1).png": "9f3cac25798da2d13481f032fe2a3cb2",
"assets/assets/images/Group_40_(2).png": "3e9e7da9853f39d544bdedb5c2e5ee2f",
"assets/assets/images/Group_42.png": "565284fb0f2a1da17b8470e75e0637e6",
"assets/assets/images/Group_42_(1).png": "a402ab29c27c16d2074db15507558029",
"assets/assets/images/Group_50.svg": "f9254b1abb0e4f0f8c2f5890c99a63ef",
"assets/assets/images/Group_53_(2).png": "5c6610430992bae598bb8810c362511b",
"assets/assets/images/Group_53_(3).png": "056e105e54eec1050771e493df287eef",
"assets/assets/images/Group_54.png": "d7e2d208cf35b1ac456c34c3a5746528",
"assets/assets/images/Group_55.png": "0bfff1e93acc4ad3a684b1d80a12f15e",
"assets/assets/images/Group_56.png": "f3bac33ea20abda35e78f1703c325c52",
"assets/assets/images/Group_57.png": "5aa3e957ede6fbcc52397ec743865a39",
"assets/assets/images/Group_58.png": "6300677e1fd7cee3ea5e80eb551dd7cf",
"assets/assets/images/Group_7.png": "63c31e838d92bf521ccf4c11b4cd6bae",
"assets/assets/images/Group_76.png": "98a635215c491359badca4c103f04123",
"assets/assets/images/Group_83_(1).png": "aec694cfcd24eff7ef6e702995fd3652",
"assets/assets/images/Group_83_(2).png": "722f4cebd58969aada277c8ac7c380db",
"assets/assets/images/money.png": "3b88193bce98bff843cab6626f0d11c6",
"assets/assets/images/PEDARET_POWER_PLAY1_1.png": "98e62317ca0d6d554c6026be94907007",
"assets/assets/images/PEDARET_POWER_PLAY1_1_(1).png": "6c88965bb73f9e79fe224aacee07ae00",
"assets/assets/images/Polygon_3.svg": "22fcff0f5b1ed455adc05f94a1aa852d",
"assets/assets/images/PRESTIGE_BANNER_UPDATE-01.png": "34dbda48a713964291a6515ead098ad9",
"assets/assets/images/Rank_+_Profile.png": "d1ae4c2aee709f46cae2fc606ded7573",
"assets/assets/images/Rectangle_2.svg": "a9bc799fc7049eb61df56d2026905d3d",
"assets/assets/images/Rectangle_3.png": "3c2990b78d947b97b003ef117a4213d0",
"assets/assets/images/Rectangle_3_(1).png": "2791a273b9afbf0a57930ac38c152d4a",
"assets/assets/images/Rectangle_4.png": "22dfe47ac5e60a752779d8557106ce67",
"assets/assets/images/Rectangle_57.png": "77245037c1efadc8c517896a1445ba73",
"assets/assets/images/Vector_2.svg": "7f538819392eeffe9d6844a4a8112e7b",
"assets/assets/lottie_animations/animation_lke725ft.json": "48bc94577da18d2160e715af1f52d845",
"assets/assets/lottie_animations/animation_lke7gwc5.json": "dd4b98d094ffa6db187c002524781a44",
"assets/assets/lottie_animations/animation_lkel63p7.json": "491cd3f687b90cc91c33b6472c745700",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "bc7985102e11894e5be7ee478d69c392",
"assets/fonts/MaterialIcons-Regular.otf": "a0ce321a1ab95a6b04dffe4362075b00",
"assets/NOTICES": "98e71794cfbf87e1fb8965cb2149fc4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3643b9643d767adb9704f517d412524",
"/": "b3643b9643d767adb9704f517d412524",
"main.dart.js": "14bdb2706c565d0ec386a6b215f233c0",
"manifest.json": "5d9703be9113d9476bb449219c22cda5",
"persian_power_plays.png": "26adb75b1ae2f5a65263c3785953c14d",
"PRESTIGE_BANNER_UPDATE-01.png": "34dbda48a713964291a6515ead098ad9",
"version.json": "9ad37dc5ebb7392ce775a17b39e3f522"};
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
