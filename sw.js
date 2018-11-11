/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2ce62b9304d90fa0d360.js"
  },
  {
    "url": "app-57406d9b6884f25b90da.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7e3fe4cd0eea93ee6331.js"
  },
  {
    "url": "index.html",
    "revision": "2a5a5c012a078f79a8730a56d77f22f3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f0c72a39d392f7ab1c00ece62e28ff81"
  },
  {
    "url": "1.e5eae35e0b3f112bac84.css"
  },
  {
    "url": "component---src-pages-index-js.c4c8787f9e1010a60911.css"
  },
  {
    "url": "component---src-pages-index-js-a507c9a797b27cbc61ff.js"
  },
  {
    "url": "1-e86a195235b3fbb0d3e9.js"
  },
  {
    "url": "0-ed93330132c4c6765459.js"
  },
  {
    "url": "static/d/760/path---index-6a9-AUmGmmHaF7yircw6f9PlgO07oCY.json",
    "revision": "fc1606d360c3783d573dfb02c8527a0d"
  },
  {
    "url": "component---src-pages-404-js-f3f71058035c13b275cc.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/skillshare-personal-gatsby-blog/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});