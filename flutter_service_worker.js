'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "26fb48b13c0f5136eceb84be0d583919",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"CNAME": "65b421ee228333b6c5cddda981a98e74",
"main.dart.js": "b2f20753cc46f434428b1a3d6feb1cb3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "d539051fa3c1b3f9cfc9a21785d1786c",
".git/config": "390091a58bda7e0704d862316e8de873",
".git/objects/61/a9173b1097b5c6f485804bd52785e5770d65ca": "6eba9d70055e4204eab1119741af1476",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/83e39b2d16cede76ff8d58be71d8e3bdeea754": "4042d13dbfb7d5bbff1ab70e0dcea277",
".git/objects/6a/24395822dd2e9eee116863ad951af4877ea0ca": "96ce61f44141183d99d025d503423bb4",
".git/objects/35/b043ec687719e171ba972589cc23af79790edf": "8bc493a53885448e945275bd74318c98",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/6b7346787d7f97f7fa54c931e11829a77665b2": "768080931b1822dd80f8f44e547e1f34",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9c/82e3c5bcf6793c9eafd6862f02366f90ec209d": "11eeca62efb3a45f67614d9413da8beb",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/2a1f6dd2f92bc86e22644af40a988bf1d375c7": "9a427893f47b6767b99e4536af64394a",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/678355663913ec34c1a5a371cf92469e28e777": "86809441e4ba11e5255d783cea74a8b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/93e82216cd9b62f025c441fb65b7b7ccf2f96e": "9605e075088d634aafdfa3a6e73dda6c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/0c3e463c1f610ad2eb4401f3c42268dcc3b0ba": "4bba0c679a79d628428be9b57b82afc6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/77243fc7ae5f860243c768fc7bc659839988a5": "3b1c75299f25f48fcfed8983e7d8b1d4",
".git/objects/c6/f0f377a1ab944e2591f1d68b41034d9b68862f": "50daa0351e0be27f07f2b4ff13aee32f",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/02babff73f054f1b3b432b9d288d2a53e23b2b": "dc79c49c416bb0e4ade89a2f76aeb135",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/3d12c9db4e2d973d7ee3bccc867c26511b663f": "8f00b9cce1898269f21fc9067c834865",
".git/objects/73/2be99e1bec5b4476b852ad6737de4ac5d29e75": "111b1d46cfa797ec3bcfea4495ec4734",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/de954b2f988e2d904c26e401563fb60472951f": "bd91c3368f2118ba95bf62f237977200",
".git/objects/5c/951270bf5897c2b28c302876b927b966220eae": "87a697eab613dea895da2f22316c0e59",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/5142b580e262c8a39b034989e13e73685f3852": "19dd08414cad2ce8f0e7a57f3740d120",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/97/ea29cc86bc36fd04643e6a66db1121046394cb": "d93baf2633b99caf4d50aaf32bd63076",
".git/objects/63/e6eac606a70aa72f857ff493c30a5928b1de63": "8e86b6b38dd47b929e5f7e382e35d6b6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/094271b8de97d37078ca171a717dbc4dc91eff": "d941c1a2a3341c171ab169cc9d803630",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/dd/a40d68ce5fb48886036b28c27cc27a55bb3e75": "9e3a04f4d2a038de6fd6218c7f730429",
".git/objects/dc/0ace50973ae99cf5805a3edb233e5eab7438b9": "1f2e1499d8c630220ece1a143ddf953f",
".git/objects/dc/8ca15916722447237f5c978360909e3f747a99": "5fab764af2760d081689f38264d49ee1",
".git/objects/d2/7050bafb5270a9fcc236144bc817da5ca679a0": "b1b64b84caa32cf9ad09ed4a7db12fcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/d3c78b2c17803bc411dadbe6fa53d2a9705106": "40dced88e94b74f714ae57b6e9981117",
".git/objects/ea/8140bbdeee09c0f2c653f11ed8a2045ed39152": "9641da506d3dc084e85a6cf3d3937c4f",
".git/objects/e6/b3d16df5d4bdf800b48e6d91953e4f14be4060": "2a0421c849c0047f19caa561033a62c2",
".git/objects/f7/0e796526d0e3719dc8dec391ecb78de31c1950": "fd73cc5800ea8fc15ffc5f48dcd7efa8",
".git/objects/fa/9c542d0ff34546845a8ad9e8b855affc292057": "59a76531a5c1a64eddafa92754017bd1",
".git/objects/c5/88a4dc4252cb0df42f804435f0a926bc1a0330": "31a6ca93e098582ea0e863b6b6ee60df",
".git/objects/c2/80508b348c696f367e581b2b093d03e06a45c7": "2f24f68bb61d05bd7961aa44078e23a8",
".git/objects/f1/2799d745e58d90b4da1ac8bc37b73c8f24bb3b": "89ab8c23593fd022f9656479040f7cff",
".git/objects/83/f7494fd0ba1c00c1f7591cb789972ac37c9648": "9a5923019e03f394fbb5bbc238ba4e63",
".git/objects/24/22cd50319ee3ef2995a929f63d7d1da39b8d69": "68f7160c8053f4e6a4fb62c983857120",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/91573f59ffb364fa403361453b8c1f82178d6b": "6c44841fce6964c570f04489e46ca474",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/c15e7d4bca4ac9e51094cc40e5de928ca093b8": "d5e0729b6df6bbff22c3b0a39982ded2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/67ec514eb68532d9ba77f9e42ab538f771fd4a": "6237b27d0f773f420e2a0e083e72fc74",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/8b/2168f92d250832c555b9ebad029f0ad4a3035c": "b8a762d88da4a28b86f50e810119363e",
".git/objects/8e/6affd16f11d7a0bde8710a7a7e426ec374cac9": "d9dff87cfdebbac2d90ba08ee320fbf5",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0c16451e2f25858c4ae5b21540d7d7c",
".git/logs/refs/heads/main": "f6dce7925cd588ea3618fceea7accdf6",
".git/logs/refs/remotes/origin/main": "88a6f2ac2a99253930c51f11b0ba2ef4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5979bb7f569a545ee0dfee322ac460d7",
".git/refs/remotes/origin/main": "5979bb7f569a545ee0dfee322ac460d7",
".git/index": "c55a9d92c3eaef2ba4cad4941d276105",
".git/COMMIT_EDITMSG": "0c1e4a1928b11d8a8f5ca27a01d3bc03",
".git/FETCH_HEAD": "b909d34db9cb0e5757ebc8d644f64663",
"assets/AssetManifest.json": "eced1b5d77e468974011db5c0e3f2860",
"assets/NOTICES": "415f79ca221594f396710ee0a1bc9c94",
"assets/FontManifest.json": "b6619edc365f06e478f90aba649acd5d",
"assets/AssetManifest.bin.json": "58882436567220c2d730af01414c6418",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "794b524a506faf803ba781c819f93a86",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/fonts/Inter/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
