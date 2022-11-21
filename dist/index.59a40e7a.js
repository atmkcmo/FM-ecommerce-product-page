// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bootstrap = require("bootstrap");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
(0, _vueDefault.default).component("carousel", {
    props: [
        "id"
    ],
    data: function() {
        return {
            count: 0,
            img1: require("../images/image-product-1.jpg"),
            img2: require("../images/image-product-2.jpg"),
            img3: require("../images/image-product-3.jpg"),
            img4: require("../images/image-product-4.jpg"),
            thumb1: require("../images/image-product-1-thumbnail.jpg"),
            thumb2: require("../images/image-product-2-thumbnail.jpg"),
            thumb3: require("../images/image-product-3-thumbnail.jpg"),
            thumb4: require("../images/image-product-4-thumbnail.jpg")
        };
    },
    methods: {
        getMainImg (path) {
            return require(`../images/image-product-${path}.jpg`);
        },
        getThumbNail (path) {
            return require(`../images/image-product-${path}-thumbnail.jpg`);
        }
    },
    template: "#carousel-template"
});
var app = new (0, _vueDefault.default)({
    el: "#app",
    data: {
        mounted: false,
        lightBoxOpen: false,
        cartItems: 0,
        itemQuantity: 0,
        discount: 50,
        itemPrice: 125.0,
        itemName: "Fall Limited Edition Sneakers",
        itemDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring adurable rubber outer sole, they'll withstand everything the weather can offer."
    },
    computed: {
        truncateTitle () {
            if (window.innerWidth < 700) return `${this.itemName.substring(0, 30)}...`;
            return this.itemName;
        }
    },
    mounted () {
        this.mounted = true;
    },
    methods: {
        addItem () {
            this.itemQuantity++;
        },
        removeItem () {
            if (this.itemQuantity > 0) this.itemQuantity--;
        },
        addToCart () {
            if (this.itemQuantity == 0) return;
            this.cartItems = this.cartItems + this.itemQuantity;
            this.itemQuantity = 0;
        },
        emptyCart () {
            this.cartItems = 0;
            const emptyCartModal = document.querySelector("#cartModal");
            const modal = _bootstrap.Modal.getInstance(emptyCartModal);
            modal.hide();
        },
        openLightBox () {
            // console.log("B00B5")
            let that = this;
            that.lightBoxOpen = true;
            var myModal = new _bootstrap.Modal(document.getElementById("lightBoxModal"));
            myModal.show();
            const myModalEl = document.getElementById("lightBoxModal");
            myModalEl.addEventListener("hidden.bs.modal", (event)=>{
                that.lightBoxOpen = false;
            });
        }
    }
});

},{"bootstrap":"h36JB","vue":"g28pQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../images/image-product-1.jpg":"5IhlW","../images/image-product-2.jpg":"tldVd","../images/image-product-3.jpg":"hWdlO","../images/image-product-4.jpg":"a3K30","../images/image-product-1-thumbnail.jpg":"hDlT0","../images/image-product-2-thumbnail.jpg":"csqC0","../images/image-product-3-thumbnail.jpg":"5toFf","../images/image-product-4-thumbnail.jpg":"aEsNp"}],"h36JB":[function(require,module,exports) {
/*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alert", ()=>Alert);
parcelHelpers.export(exports, "Button", ()=>Button);
parcelHelpers.export(exports, "Carousel", ()=>Carousel);
parcelHelpers.export(exports, "Collapse", ()=>Collapse);
parcelHelpers.export(exports, "Dropdown", ()=>Dropdown);
parcelHelpers.export(exports, "Modal", ()=>Modal);
parcelHelpers.export(exports, "Offcanvas", ()=>Offcanvas);
parcelHelpers.export(exports, "Popover", ()=>Popover);
parcelHelpers.export(exports, "ScrollSpy", ()=>ScrollSpy);
parcelHelpers.export(exports, "Tab", ()=>Tab);
parcelHelpers.export(exports, "Toast", ()=>Toast);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip);
var _core = require("@popperjs/core");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = "transitionend"; // Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = (object)=>{
    if (object === null || object === undefined) return `${object}`;
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */ const getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const getSelector = (element)=>{
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
        let hrefAttribute = element.getAttribute("href"); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
         // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
        selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector;
};
const getSelectorFromElement = (element)=>{
    const selector = getSelector(element);
    if (selector) return document.querySelector(selector) ? selector : null;
    return null;
};
const getElementFromSelector = (element)=>{
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
};
const getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
     // Get transition-duration of the element
    let { transitionDuration , transitionDelay  } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
     // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (object)=>{
    if (!object || typeof object !== "object") return false;
    if (typeof object.jquery !== "undefined") object = object[0];
    return typeof object.nodeType !== "undefined";
};
const getElement = (object)=>{
    // it's a jQuery object or a node element
    if (isElement(object)) return object.jquery ? object[0] : object;
    if (typeof object === "string" && object.length > 0) return document.querySelector(object);
    return null;
};
const isVisible = (element)=>{
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible"; // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) return elementIsVisible;
    if (closedDetails !== element) {
        const summary = element.closest("summary");
        if (summary && summary.parentNode !== closedDetails) return false;
        if (summary === null) return false;
    }
    return elementIsVisible;
};
const isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains("disabled")) return true;
    if (typeof element.disabled !== "undefined") return element.disabled;
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
     // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === "function") {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
     // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
const noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const reflow = (element)=>{
    element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const getjQuery = ()=>{
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
    return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            for (const callback of DOMContentLoadedCallbacks)callback();
        });
        DOMContentLoadedCallbacks.push(callback);
    } else callback();
};
const isRTL = ()=>document.documentElement.dir === "rtl";
const defineJQueryPlugin = (plugin)=>{
    onDOMContentLoaded(()=>{
        const $ = getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const execute = (callback)=>{
    if (typeof callback === "function") callback();
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target  })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
const nativeEvents = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
]);
/**
 * Private methods
 */ function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        hydrateObj(event, {
            delegateTarget: element
        });
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target  } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
            if (domElement !== target) continue;
            hydrateObj(event, {
                delegateTarget: target
            });
            if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
            return fn.apply(target, [
                event
            ]);
        }
    };
}
function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string"; // todo: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
    return [
        isDelegated,
        callable,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
        const wrapFunction = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
        previousFunction.oneOff = previousFunction.oneOff && oneOff;
        return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const handlerKey of Object.keys(storeElementEvent))if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
}
const EventHandler = {
    on (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, false);
    },
    one (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, true);
    },
    off (element, originalTypeEvent, handler, delegationFunction) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getElementEvents(element);
        const storeElementEvent = events[typeEvent] || {};
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof callable !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!Object.keys(storeElementEvent).length) return;
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
        }
        if (isNamespace) for (const elementEvent of Object.keys(events))removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        for (const keyHandlers of Object.keys(storeElementEvent)){
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
        }
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        let jQueryEvent = null;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        let evt = new Event(event, {
            bubbles,
            cancelable: true
        });
        evt = hydrateObj(evt, args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {}))try {
        obj[key] = value;
    } catch (_unused) {
        Object.defineProperty(obj, key, {
            configurable: true,
            get () {
                return value;
            }
        });
    }
    return obj;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const elementMap = new Map();
const Data = {
    set (element, key, instance) {
        if (!elementMap.has(element)) elementMap.set(element, new Map());
        const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!elementMap.has(element)) return;
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key); // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === Number(value).toString()) return Number(value);
    if (value === "" || value === "null") return null;
    if (typeof value !== "string") return value;
    try {
        return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
        return value;
    }
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith("bs") && !key.startsWith("bsConfig"));
        for (const key of bsKeys){
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        }
        return attributes;
    },
    getDataAttribute (element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Class definition
 */ class Config {
    // Getters
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        return config;
    }
    _mergeConfigObj(config, element) {
        const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {}; // try to parse
        return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
        };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
        for (const property of Object.keys(configTypes)){
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const VERSION = "5.2.2";
/**
 * Class definition
 */ class BaseComponent extends Config {
    constructor(element, config){
        super();
        element = getElement(element);
        if (!element) return;
        this._element = element;
        this._config = this._getConfig(config);
        Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
    }
    _queueCallback(callback, element, isAnimated = true) {
        executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    static getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return VERSION;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
        return `${name}${this.EVENT_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const enableDismissTrigger = (component, method = "hide")=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        const target = getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$f = "alert";
const DATA_KEY$a = "bs.alert";
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = "fade";
const CLASS_NAME_SHOW$8 = "show";
/**
 * Class definition
 */ class Alert extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$f;
    }
    close() {
        const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove(CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement(), this._element, isAnimated);
    }
    _destroyElement() {
        this._element.remove();
        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Alert.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Alert, "close");
/**
 * jQuery
 */ defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$e = "button";
const DATA_KEY$9 = "bs.button";
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = ".data-api";
const CLASS_NAME_ACTIVE$3 = "active";
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
/**
 * Class definition
 */ class Button extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$e;
    }
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Button.getOrCreateInstance(this);
            if (config === "toggle") data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector));
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode.closest(selector);
        while(ancestor){
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(",");
        return this.find(focusables, element).filter((el)=>!isDisabled(el) && isVisible(el));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$d = "swipe";
const EVENT_KEY$9 = ".bs.swipe";
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = "touch";
const POINTER_TYPE_PEN = "pen";
const CLASS_NAME_POINTER_EVENT = "pointer-event";
const SWIPE_THRESHOLD = 40;
const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
};
const DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
};
/**
 * Class definition
 */ class Swipe extends Config {
    constructor(element, config){
        super();
        this._element = element;
        if (!element || !Swipe.isSupported()) return;
        this._config = this._getConfig(config);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
    }
    static get Default() {
        return Default$c;
    }
    static get DefaultType() {
        return DefaultType$c;
    }
    static get NAME() {
        return NAME$d;
    }
    dispose() {
        EventHandler.off(this._element, EVENT_KEY$9);
    }
    _start(event) {
        if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
        }
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
    }
    _end(event) {
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
        this._handleSwipe();
        execute(this._config.endCallback);
    }
    _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= SWIPE_THRESHOLD) return;
        const direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) return;
        execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
            EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>this._move(event));
            EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>this._end(event));
        }
    }
    _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$c = "carousel";
const DATA_KEY$8 = "bs.carousel";
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = ".data-api";
const ARROW_LEFT_KEY$1 = "ArrowLeft";
const ARROW_RIGHT_KEY$1 = "ArrowRight";
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const ORDER_NEXT = "next";
const ORDER_PREV = "prev";
const DIRECTION_LEFT = "left";
const DIRECTION_RIGHT = "right";
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = "carousel";
const CLASS_NAME_ACTIVE$2 = "active";
const CLASS_NAME_SLIDE = "slide";
const CLASS_NAME_END = "carousel-item-end";
const CLASS_NAME_START = "carousel-item-start";
const CLASS_NAME_NEXT = "carousel-item-next";
const CLASS_NAME_PREV = "carousel-item-prev";
const SELECTOR_ACTIVE = ".active";
const SELECTOR_ITEM = ".carousel-item";
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = ".carousel-item img";
const SELECTOR_INDICATORS = ".carousel-indicators";
const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
};
const DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
};
/**
 * Class definition
 */ class Carousel extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
        this._addEventListeners();
        if (this._config.ride === CLASS_NAME_CAROUSEL) this.cycle();
    }
    static get Default() {
        return Default$b;
    }
    static get DefaultType() {
        return DefaultType$b;
    }
    static get NAME() {
        return NAME$c;
    }
    next() {
        this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) this.next();
    }
    prev() {
        this._slide(ORDER_PREV);
    }
    pause() {
        if (this._isSliding) triggerTransitionEnd(this._element);
        this._clearInterval();
    }
    cycle() {
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
        if (!this._config.ride) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index));
            return;
        }
        const activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) return;
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, items[index]);
    }
    dispose() {
        if (this._swipeHelper) this._swipeHelper.dispose();
        super.dispose();
    }
    _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
    }
    _addEventListeners() {
        if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN$1, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            EventHandler.on(this._element, EVENT_MOUSEENTER$1, ()=>this.pause());
            EventHandler.on(this._element, EVENT_MOUSELEAVE$1, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && Swipe.isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element))EventHandler.on(img, EVENT_DRAG_START, (event)=>event.preventDefault());
        const endCallBack = ()=>{
            if (this._config.pause !== "hover") return;
             // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
            if (this.touchTimeout) clearTimeout(this.touchTimeout);
            this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        };
        const swipeConfig = {
            leftCallback: ()=>this._slide(this._directionToOrder(DIRECTION_LEFT)),
            rightCallback: ()=>this._slide(this._directionToOrder(DIRECTION_RIGHT)),
            endCallback: endCallBack
        };
        this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
        }
    }
    _getItemIndex(element) {
        return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) return;
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute("aria-current");
        const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
        if (newActiveIndicator) {
            newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
            newActiveIndicator.setAttribute("aria-current", "true");
        }
    }
    _updateInterval() {
        const element = this._activeElement || this._getActive();
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
        if (this._isSliding) return;
        const activeElement = this._getActive();
        const isNext = order === ORDER_NEXT;
        const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return EventHandler.trigger(this._element, eventName, {
                relatedTarget: nextElement,
                direction: this._orderToDirection(order),
                from: this._getItemIndex(activeElement),
                to: nextElementIndex
            });
        };
        const slideEvent = triggerEvent(EVENT_SLIDE);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        // todo: change tests that use empty divs to avoid this check
        return;
        const isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const completeCallBack = ()=>{
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent(EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
        return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
        if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Carousel.getOrCreateInstance(this, config);
            if (typeof config === "number") {
                data.to(config);
                return;
            }
            if (typeof config === "string") {
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, ()=>{
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels)Carousel.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$b = "collapse";
const DATA_KEY$7 = "bs.collapse";
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = ".data-api";
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = "show";
const CLASS_NAME_COLLAPSE = "collapse";
const CLASS_NAME_COLLAPSING = "collapsing";
const CLASS_NAME_COLLAPSED = "collapsed";
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
const WIDTH = "width";
const HEIGHT = "height";
const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
    parent: null,
    toggle: true
};
const DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
};
/**
 * Class definition
 */ class Collapse extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
        for (const elem of toggleList){
            const selector = getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElement)=>foundElement === this._element);
            if (selector !== null && filterElement.length) this._triggerArray.push(elem);
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    static get Default() {
        return Default$a;
    }
    static get DefaultType() {
        return DefaultType$a;
    }
    static get NAME() {
        return NAME$b;
    }
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let activeChildren = []; // find active children
        if (this._config.parent) activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>Collapse.getOrCreateInstance(element, {
                toggle: false
            }));
        if (activeChildren.length && activeChildren[0]._isTransitioning) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
        if (startEvent.defaultPrevented) return;
        for (const activeInstance of activeChildren)activeInstance.hide();
        const dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            this._element.style[dimension] = "";
            EventHandler.trigger(this._element, EVENT_SHOWN$6);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        for (const trigger of this._triggerArray){
            const element = getElementFromSelector(trigger);
            if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN$6);
        };
        this._element.style[dimension] = "";
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = getElement(config.parent);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
        for (const element of children){
            const selected = getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        }
    }
    _getFirstLevelChildren(selector) {
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth
        return SelectorEngine.find(selector, this._config.parent).filter((element)=>!children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        for (const element of triggerArray){
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
        }
    }
    static jQueryInterface(config) {
        const _config = {};
        if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
        return this.each(function() {
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    for (const element of selectorElements)Collapse.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$a = "dropdown";
const DATA_KEY$6 = "bs.dropdown";
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = ".data-api";
const ESCAPE_KEY$2 = "Escape";
const TAB_KEY$1 = "Tab";
const ARROW_UP_KEY$1 = "ArrowUp";
const ARROW_DOWN_KEY$1 = "ArrowDown";
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = "show";
const CLASS_NAME_DROPUP = "dropup";
const CLASS_NAME_DROPEND = "dropend";
const CLASS_NAME_DROPSTART = "dropstart";
const CLASS_NAME_DROPUP_CENTER = "dropup-center";
const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = ".dropdown-menu";
const SELECTOR_NAVBAR = ".navbar";
const SELECTOR_NAVBAR_NAV = ".navbar-nav";
const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
const PLACEMENT_TOPCENTER = "top";
const PLACEMENT_BOTTOMCENTER = "bottom";
const Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
        0,
        2
    ],
    popperConfig: null,
    reference: "toggle"
};
const DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
};
/**
 * Class definition
 */ class Dropdown extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._popper = null;
        this._parent = this._element.parentNode; // dropdown wrapper
        // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/
        this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
        this._inNavbar = this._detectNavbar();
    }
    static get Default() {
        return Default$9;
    }
    static get DefaultType() {
        return DefaultType$9;
    }
    static get NAME() {
        return NAME$a;
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (isDisabled(this._element) || this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
        if (showEvent.defaultPrevented) return;
        this._createPopper(); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        this._menu.classList.add(CLASS_NAME_SHOW$6);
        this._element.classList.add(CLASS_NAME_SHOW$6);
        EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
        if (isDisabled(this._element) || !this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    _completeHide(relatedTarget) {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
        if (hideEvent.defaultPrevented) return;
         // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove(CLASS_NAME_SHOW$6);
        this._element.classList.remove(CLASS_NAME_SHOW$6);
        this._element.setAttribute("aria-expanded", "false");
        Manipulator.removeDataAttribute(this._menu, "popper");
        EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
        config = super._getConfig(config);
        if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper() {
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let referenceElement = this._element;
        if (this._config.reference === "parent") referenceElement = this._parent;
        else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
        else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        this._popper = _core.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
        const parentDropdown = this._parent;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) return PLACEMENT_TOPCENTER;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) return PLACEMENT_BOTTOMCENTER;
         // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
        const { offset  } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        }; // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === "static") {
            Manipulator.setDataAttribute(this._menu, "popper", "static"); // todo:v6 remove
            defaultBsPopperConfig.modifiers = [
                {
                    name: "applyStyles",
                    enabled: false
                }
            ];
        }
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _selectMenuItem({ key , target  }) {
        const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>isVisible(element));
        if (!items.length) return;
         // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Dropdown.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) return;
        const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
        for (const toggle of openToggles){
            const context = Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) continue;
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
             // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event.type === "click") relatedTarget.clickEvent = event;
            context._completeHide(relatedTarget);
        }
    }
    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        const isInput = /input|textarea/i.test(event.target.tagName);
        const isEscapeEvent = event.key === ESCAPE_KEY$2;
        const isUpOrDownEvent = [
            ARROW_UP_KEY$1,
            ARROW_DOWN_KEY$1
        ].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) return;
        if (isInput && !isEscapeEvent) return;
        event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/
        const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
        const instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (instance._isShown()) {
            // else is escape and we check if it is shown
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
        }
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const SELECTOR_STICKY_CONTENT = ".sticky-top";
const PROPERTY_PADDING = "padding-right";
const PROPERTY_MARGIN = "margin-right";
/**
 * Class definition
 */ class ScrollBarHelper {
    constructor(){
        this._element = document.body;
    }
    getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
        const width = this.getWidth();
        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue)=>calculatedValue - width);
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow");
        this._resetElementAttributes(this._element, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow");
        this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
        const actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
    _resetElementAttributes(selector, styleProperty) {
        const manipulationCallBack = (element)=>{
            const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero
            if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
            }
            Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
        if (isElement(selector)) {
            callBack(selector);
            return;
        }
        for (const sel of SelectorEngine.find(selector, this._element))callBack(sel);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$9 = "backdrop";
const CLASS_NAME_FADE$4 = "fade";
const CLASS_NAME_SHOW$5 = "show";
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body" // give the choice to place backdrop under different elements
};
const DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
};
/**
 * Class definition
 */ class Backdrop extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    static get Default() {
        return Default$8;
    }
    static get DefaultType() {
        return DefaultType$8;
    }
    static get NAME() {
        return NAME$9;
    }
    show(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._append();
        const element = this._getElement();
        if (this._config.isAnimated) reflow(element);
        element.classList.add(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            execute(callback);
        });
    }
    hide(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            execute(callback);
        });
    }
    dispose() {
        if (!this._isAppended) return;
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement("div");
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = getElement(config.rootElement);
        return config;
    }
    _append() {
        if (this._isAppended) return;
        const element = this._getElement();
        this._config.rootElement.append(element);
        EventHandler.on(element, EVENT_MOUSEDOWN, ()=>{
            execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$8 = "focustrap";
const DATA_KEY$5 = "bs.focustrap";
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = "Tab";
const TAB_NAV_FORWARD = "forward";
const TAB_NAV_BACKWARD = "backward";
const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
};
const DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
};
/**
 * Class definition
 */ class FocusTrap extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    static get Default() {
        return Default$7;
    }
    static get DefaultType() {
        return DefaultType$7;
    }
    static get NAME() {
        return NAME$8;
    }
    activate() {
        if (this._isActive) return;
        if (this._config.autofocus) this._config.trapElement.focus();
        EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
        EventHandler.on(document, EVENT_FOCUSIN$2, (event)=>this._handleFocusin(event));
        EventHandler.on(document, EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event));
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$5);
    }
    _handleFocusin(event) {
        const { trapElement  } = this._config;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
        const elements = SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event) {
        if (event.key !== TAB_KEY) return;
        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$7 = "modal";
const DATA_KEY$4 = "bs.modal";
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = ".data-api";
const ESCAPE_KEY$1 = "Escape";
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = "modal-open";
const CLASS_NAME_FADE$3 = "fade";
const CLASS_NAME_SHOW$4 = "show";
const CLASS_NAME_STATIC = "modal-static";
const OPEN_SELECTOR$1 = ".modal.show";
const SELECTOR_DIALOG = ".modal-dialog";
const SELECTOR_MODAL_BODY = ".modal-body";
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
};
const DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
};
/**
 * Class definition
 */ class Modal extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
        this._addEventListeners();
    }
    static get Default() {
        return Default$6;
    }
    static get DefaultType() {
        return DefaultType$6;
    }
    static get NAME() {
        return NAME$7;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(()=>this._showElement(relatedTarget));
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW$4);
        this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
        for (const htmlElement of [
            window,
            this._dialog
        ])EventHandler.off(htmlElement, EVENT_KEY$4);
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    _initializeBackDrop() {
        return new Backdrop({
            isVisible: Boolean(this._config.backdrop),
            // 'static' option will be translated to true, and booleans will keep their value,
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _showElement(relatedTarget) {
        // try to append dynamic modal
        if (!document.body.contains(this._element)) document.body.append(this._element);
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.scrollTop = 0;
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) modalBody.scrollTop = 0;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            EventHandler.trigger(this._element, EVENT_SHOWN$4, {
                relatedTarget
            });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (event.key !== ESCAPE_KEY$1) return;
            if (this._config.keyboard) {
                event.preventDefault();
                this.hide();
                return;
            }
            this._triggerBackdropTransition();
        });
        EventHandler.on(window, EVENT_RESIZE$1, ()=>{
            if (this._isShown && !this._isTransitioning) this._adjustDialog();
        });
        EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event)=>{
            // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
            EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2)=>{
                if (this._element !== event.target || this._element !== event2.target) return;
                if (this._config.backdrop === "static") {
                    this._triggerBackdropTransition();
                    return;
                }
                if (this._config.backdrop) this.hide();
            });
        });
    }
    _hideModal() {
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove(CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$4);
        });
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
        if (hideEvent.defaultPrevented) return;
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed
        if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) this._element.style.overflowY = "hidden";
        this._element.classList.add(CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            this._element.classList.remove(CLASS_NAME_STATIC);
            this._queueCallback(()=>{
                this._element.style.overflowY = initialOverflowY;
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    /**
   * The following methods are used to handle overflowing modals
   */ _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
            const property = isRTL() ? "paddingLeft" : "paddingRight";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
        if (!isBodyOverflowing && isModalOverflowing) {
            const property1 = isRTL() ? "paddingRight" : "paddingLeft";
            this._element.style[property1] = `${scrollbarWidth}px`;
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
    }
    static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
            const data = Modal.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config](relatedTarget);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    EventHandler.one(target, EVENT_SHOW$4, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        EventHandler.one(target, EVENT_HIDDEN$4, ()=>{
            if (isVisible(this)) this.focus();
        });
    }); // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) Modal.getInstance(alreadyOpen).hide();
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * jQuery
 */ defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$6 = "offcanvas";
const DATA_KEY$3 = "bs.offcanvas";
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = ".data-api";
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = "Escape";
const CLASS_NAME_SHOW$3 = "show";
const CLASS_NAME_SHOWING$1 = "showing";
const CLASS_NAME_HIDING = "hiding";
const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
const OPEN_SELECTOR = ".offcanvas.show";
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
};
/**
 * Class definition
 */ class Offcanvas extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    static get Default() {
        return Default$5;
    }
    static get DefaultType() {
        return DefaultType$5;
    }
    static get NAME() {
        return NAME$6;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) new ScrollBarHelper().hide();
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.classList.add(CLASS_NAME_SHOWING$1);
        const completeCallBack = ()=>{
            if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
            this._element.classList.add(CLASS_NAME_SHOW$3);
            this._element.classList.remove(CLASS_NAME_SHOWING$1);
            EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                relatedTarget
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.add(CLASS_NAME_HIDING);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            if (!this._config.scroll) new ScrollBarHelper().reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$3);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    _initializeBackDrop() {
        const clickCallback = ()=>{
            if (this._config.backdrop === "static") {
                EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        }; // 'static' option will be translated to true, and booleans will keep their value
        const isVisible = Boolean(this._config.backdrop);
        return new Backdrop({
            className: CLASS_NAME_BACKDROP,
            isVisible,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: isVisible ? clickCallback : null
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
            if (event.key !== ESCAPE_KEY) return;
            if (!this._config.keyboard) {
                EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        });
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Offcanvas.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
        // focus on trigger when it is closed
        if (isVisible(this)) this.focus();
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) Offcanvas.getInstance(alreadyOpen).hide();
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
    for (const selector of SelectorEngine.find(OPEN_SELECTOR))Offcanvas.getOrCreateInstance(selector).show();
});
EventHandler.on(window, EVENT_RESIZE, ()=>{
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]"))if (getComputedStyle(element).position !== "fixed") Offcanvas.getOrCreateInstance(element).hide();
});
enableDismissTrigger(Offcanvas);
/**
 * jQuery
 */ defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
]);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
const allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
        return true;
    } // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
};
const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": [
        "class",
        "dir",
        "id",
        "lang",
        "role",
        ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        "target",
        "href",
        "title",
        "rel"
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        "src",
        "srcset",
        "alt",
        "title",
        "width",
        "height"
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements){
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
        for (const attribute of attributeList)if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$5 = "TemplateFactory";
const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
};
const DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
};
const DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
};
/**
 * Class definition
 */ class TemplateFactory extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
    }
    static get Default() {
        return Default$4;
    }
    static get DefaultType() {
        return DefaultType$4;
    }
    static get NAME() {
        return NAME$5;
    }
    getContent() {
        return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(content) {
        this._checkContent(content);
        this._config.content = {
            ...this._config.content,
            ...content
        };
        return this;
    }
    toHtml() {
        const templateWrapper = document.createElement("div");
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
        const template = templateWrapper.children[0];
        const extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) template.classList.add(...extraClass.split(" "));
        return template;
    }
    _typeCheckConfig(config) {
        super._typeCheckConfig(config);
        this._checkContent(config.content);
    }
    _checkContent(arg) {
        for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
            selector,
            entry: content
        }, DefaultContentType);
    }
    _setContent(template, content, selector) {
        const templateElement = SelectorEngine.findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if (isElement(content)) {
            this._putElementInTemplate(getElement(content), templateElement);
            return;
        }
        if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
        }
        templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
        return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
        return typeof arg === "function" ? arg(this) : arg;
    }
    _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
        }
        templateElement.textContent = element.textContent;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$4 = "tooltip";
const DISALLOWED_ATTRIBUTES = new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
]);
const CLASS_NAME_FADE$2 = "fade";
const CLASS_NAME_MODAL = "modal";
const CLASS_NAME_SHOW$2 = "show";
const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = "hide.bs.modal";
const TRIGGER_HOVER = "hover";
const TRIGGER_FOCUS = "focus";
const TRIGGER_CLICK = "click";
const TRIGGER_MANUAL = "manual";
const EVENT_HIDE$2 = "hide";
const EVENT_HIDDEN$2 = "hidden";
const EVENT_SHOW$2 = "show";
const EVENT_SHOWN$2 = "shown";
const EVENT_INSERTED = "inserted";
const EVENT_CLICK$1 = "click";
const EVENT_FOCUSIN$1 = "focusin";
const EVENT_FOCUSOUT$1 = "focusout";
const EVENT_MOUSEENTER = "mouseenter";
const EVENT_MOUSELEAVE = "mouseleave";
const AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
};
const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: [
        "top",
        "right",
        "bottom",
        "left"
    ],
    html: false,
    offset: [
        0,
        0
    ],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
};
const DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
};
/**
 * Class definition
 */ class Tooltip extends BaseComponent {
    constructor(element, config){
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(element, config); // Private
        this._isEnabled = true;
        this._timeout = 0;
        this._isHovered = null;
        this._activeTrigger = {};
        this._popper = null;
        this._templateFactory = null;
        this._newContent = null; // Protected
        this.tip = null;
        this._setListeners();
        if (!this._config.selector) this._fixTitle();
    }
    static get Default() {
        return Default$3;
    }
    static get DefaultType() {
        return DefaultType$3;
    }
    static get NAME() {
        return NAME$4;
    }
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (!this._isEnabled) return;
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
            this._leave();
            return;
        }
        this._enter();
    }
    dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this.tip) this.tip.remove();
        if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
        const shadowRoot = findShadowRoot(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
         // todo v6 remove this OR make it optional
        if (this.tip) {
            this.tip.remove();
            this.tip = null;
        }
        const tip = this._getTipElement();
        this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
        const { container  } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
        }
        if (this._popper) this._popper.update();
        else this._popper = this._createPopper(tip);
        tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        const complete = ()=>{
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) tip.remove();
            this._element.removeAttribute("aria-describedby");
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
            this._disposePopper();
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
        if (this._popper) this._popper.update();
    }
    _isWithContent() {
        return Boolean(this._getTitle());
    }
    _getTipElement() {
        if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        return this.tip;
    }
    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6
        if (!tip) return null;
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`);
        const tipId = getUID(this.constructor.NAME).toString();
        tip.setAttribute("id", tipId);
        if (this._isAnimated()) tip.classList.add(CLASS_NAME_FADE$2);
        return tip;
    }
    setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
            this._disposePopper();
            this.show();
        }
    }
    _getTemplateFactory(content) {
        if (this._templateFactory) this._templateFactory.changeContent(content);
        else this._templateFactory = new TemplateFactory({
            ...this._config,
            // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
        return this._templateFactory;
    }
    _getContentForTemplate() {
        return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
        };
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
        const placement = typeof this._config.placement === "function" ? this._config.placement.call(this, tip, this._element) : this._config.placement;
        const attachment = AttachmentMap[placement.toUpperCase()];
        return _core.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset  } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return typeof arg === "function" ? arg.call(this._element) : arg;
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: "preSetPlacement",
                    enabled: true,
                    phase: "beforeMain",
                    fn: (data)=>{
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                    }
                }
            ]
        };
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(" ");
        for (const trigger of triggers){
            if (trigger === "click") EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
            });
            else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                EventHandler.on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                    context._enter();
                });
                EventHandler.on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
        const title = this._element.getAttribute("title");
        if (!title) return;
        if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
        this._element.setAttribute("data-bs-original-title", title); // DO NOT USE IT. Is only for backwards compatibility
        this._element.removeAttribute("title");
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
        }
        this._isHovered = true;
        this._setTimeout(()=>{
            if (this._isHovered) this.show();
        }, this._config.delay.show);
    }
    _leave() {
        if (this._isWithActiveTrigger()) return;
        this._isHovered = false;
        this._setTimeout(()=>{
            if (!this._isHovered) this.hide();
        }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
        const dataAttributes = Manipulator.getDataAttributes(this._element);
        for (const dataAttribute of Object.keys(dataAttributes))if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
        config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
        };
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : getElement(config.container);
        if (typeof config.delay === "number") config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === "number") config.title = config.title.toString();
        if (typeof config.content === "number") config.content = config.content.toString();
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for(const key in this._config)if (this.constructor.Default[key] !== this._config[key]) config[key] = this._config[key];
        config.selector = false;
        config.trigger = "manual"; // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$3 = "popover";
const SELECTOR_TITLE = ".popover-header";
const SELECTOR_CONTENT = ".popover-body";
const Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [
        0,
        8
    ],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
};
const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
};
/**
 * Class definition
 */ class Popover extends Tooltip {
    // Getters
    static get Default() {
        return Default$2;
    }
    static get DefaultType() {
        return DefaultType$2;
    }
    static get NAME() {
        return NAME$3;
    }
    _isWithContent() {
        return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
        return {
            [SELECTOR_TITLE]: this._getTitle(),
            [SELECTOR_CONTENT]: this._getContent()
        };
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Popover.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$2 = "scrollspy";
const DATA_KEY$2 = "bs.scrollspy";
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = ".data-api";
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
const CLASS_NAME_ACTIVE$1 = "active";
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = "[href]";
const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
const SELECTOR_NAV_LINKS = ".nav-link";
const SELECTOR_NAV_ITEMS = ".nav-item";
const SELECTOR_LIST_ITEMS = ".list-group-item";
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = ".dropdown";
const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [
        0.1,
        0.5,
        1
    ]
};
const DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
};
/**
 * Class definition
 */ class ScrollSpy extends BaseComponent {
    constructor(element, config){
        super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper
        this._targetLinks = new Map();
        this._observableSections = new Map();
        this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
        this._activeTarget = null;
        this._observer = null;
        this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        };
        this.refresh(); // initialize
    }
    static get Default() {
        return Default$1;
    }
    static get DefaultType() {
        return DefaultType$1;
    }
    static get NAME() {
        return NAME$2;
    }
    refresh() {
        this._initializeTargetsAndObservables();
        this._maybeEnableSmoothScroll();
        if (this._observer) this._observer.disconnect();
        else this._observer = this._getNewObserver();
        for (const section of this._observableSections.values())this._observer.observe(section);
    }
    dispose() {
        this._observer.disconnect();
        super.dispose();
    }
    _configAfterMerge(config) {
        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
        config.target = getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
        config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
        if (typeof config.threshold === "string") config.threshold = config.threshold.split(",").map((value)=>Number.parseFloat(value));
        return config;
    }
    _maybeEnableSmoothScroll() {
        if (!this._config.smoothScroll) return;
         // unregister any previous listeners
        EventHandler.off(this._config.target, EVENT_CLICK);
        EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event)=>{
            const observableSection = this._observableSections.get(event.target.hash);
            if (observableSection) {
                event.preventDefault();
                const root = this._rootElement || window;
                const height = observableSection.offsetTop - this._element.offsetTop;
                if (root.scrollTo) {
                    root.scrollTo({
                        top: height,
                        behavior: "smooth"
                    });
                    return;
                } // Chrome 60 doesn't support `scrollTo`
                root.scrollTop = height;
            }
        });
    }
    _getNewObserver() {
        const options = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((entries)=>this._observerCallback(entries), options);
    }
    _observerCallback(entries) {
        const targetElement = (entry)=>this._targetLinks.get(`#${entry.target.id}`);
        const activate = (entry)=>{
            this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
            this._process(targetElement(entry));
        };
        const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
        const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = parentScrollTop;
        for (const entry of entries){
            if (!entry.isIntersecting) {
                this._activeTarget = null;
                this._clearActiveClass(targetElement(entry));
                continue;
            }
            const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop
            if (userScrollsDown && entryIsLowerThanPrevious) {
                activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                if (!parentScrollTop) return;
                continue;
            } // if we are scrolling up, pick the smallest offsetTop
            if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map();
        this._observableSections = new Map();
        const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
        for (const anchor of targetLinks){
            // ensure that the anchor has an id and is not disabled
            if (!anchor.hash || isDisabled(anchor)) continue;
            const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible
            if (isVisible(observableSection)) {
                this._targetLinks.set(anchor.hash, anchor);
                this._observableSections.set(anchor.hash, observableSection);
            }
        }
    }
    _process(target) {
        if (this._activeTarget === target) return;
        this._clearActiveClass(this._config.target);
        this._activeTarget = target;
        target.classList.add(CLASS_NAME_ACTIVE$1);
        this._activateParents(target);
        EventHandler.trigger(this._element, EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _activateParents(target) {
        // Activate dropdown parents
        if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
            SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
            return;
        }
        for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP))// Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS))item.classList.add(CLASS_NAME_ACTIVE$1);
    }
    _clearActiveClass(parent) {
        parent.classList.remove(CLASS_NAME_ACTIVE$1);
        const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
        for (const node of activeNodes)node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = ScrollSpy.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>{
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(spy);
});
/**
 * jQuery
 */ defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$1 = "tab";
const DATA_KEY$1 = "bs.tab";
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = "ArrowLeft";
const ARROW_RIGHT_KEY = "ArrowRight";
const ARROW_UP_KEY = "ArrowUp";
const ARROW_DOWN_KEY = "ArrowDown";
const CLASS_NAME_ACTIVE = "active";
const CLASS_NAME_FADE$1 = "fade";
const CLASS_NAME_SHOW$1 = "show";
const CLASS_DROPDOWN = "dropdown";
const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
const NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(.dropdown-toggle)";
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = ".nav-item, .list-group-item";
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */ class Tab extends BaseComponent {
    constructor(element){
        super(element);
        this._parent = this._element.closest(SELECTOR_TAB_PANEL);
        if (!this._parent) return; // todo: should Throw exception on v6
         // Set up initial aria attributes
        this._setInitialAttributes(this._parent, this._getChildren());
        EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event));
    }
    static get NAME() {
        return NAME$1;
    }
    show() {
        // Shows this elem and deactivate the active sibling if exists
        const innerElem = this._element;
        if (this._elemIsActive(innerElem)) return;
         // Search for active tab on same parent to deactivate it
        const active = this._getActiveElem();
        const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
            relatedTarget: innerElem
        }) : null;
        const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
            relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
    }
    _activate(element, relatedElem) {
        if (!element) return;
        element.classList.add(CLASS_NAME_ACTIVE);
        this._activate(getElementFromSelector(element)); // Search and activate/show the proper section
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.add(CLASS_NAME_SHOW$1);
                return;
            }
            element.removeAttribute("tabindex");
            element.setAttribute("aria-selected", true);
            this._toggleDropDown(element, true);
            EventHandler.trigger(element, EVENT_SHOWN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
        if (!element) return;
        element.classList.remove(CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.remove(CLASS_NAME_SHOW$1);
                return;
            }
            element.setAttribute("aria-selected", false);
            element.setAttribute("tabindex", "-1");
            this._toggleDropDown(element, false);
            EventHandler.trigger(element, EVENT_HIDDEN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
        if (![
            ARROW_LEFT_KEY,
            ARROW_RIGHT_KEY,
            ARROW_UP_KEY,
            ARROW_DOWN_KEY
        ].includes(event.key)) return;
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        event.preventDefault();
        const isNext = [
            ARROW_RIGHT_KEY,
            ARROW_DOWN_KEY
        ].includes(event.key);
        const nextActiveElement = getNextActiveElement(this._getChildren().filter((element)=>!isDisabled(element)), event.target, isNext, true);
        if (nextActiveElement) {
            nextActiveElement.focus({
                preventScroll: true
            });
            Tab.getOrCreateInstance(nextActiveElement).show();
        }
    }
    _getChildren() {
        // collection of inner elements
        return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, "role", "tablist");
        for (const child of children)this._setInitialAttributesOnChild(child);
    }
    _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        const isActive = this._elemIsActive(child);
        const outerElem = this._getOuterElement(child);
        child.setAttribute("aria-selected", isActive);
        if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
        if (!isActive) child.setAttribute("tabindex", "-1");
        this._setAttributeIfNotExists(child, "role", "tab"); // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
        const target = getElementFromSelector(child);
        if (!target) return;
        this._setAttributeIfNotExists(target, "role", "tabpanel");
        if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `#${child.id}`);
    }
    _toggleDropDown(element, open) {
        const outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains(CLASS_DROPDOWN)) return;
        const toggle = (selector, className)=>{
            const element = SelectorEngine.findOne(selector, outerElem);
            if (element) element.classList.toggle(className, open);
        };
        toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
        toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
        outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
    }
    _elemIsActive(elem) {
        return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    _getInnerElement(elem) {
        return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    _getOuterElement(elem) {
        return elem.closest(SELECTOR_OUTER) || elem;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tab.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    Tab.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE))Tab.getOrCreateInstance(element);
});
/**
 * jQuery
 */ defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME = "toast";
const DATA_KEY = "bs.toast";
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = "fade";
const CLASS_NAME_HIDE = "hide"; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = "show";
const CLASS_NAME_SHOWING = "showing";
const DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
};
const Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * Class definition
 */ class Toast extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    static get Default() {
        return Default;
    }
    static get DefaultType() {
        return DefaultType;
    }
    static get NAME() {
        return NAME;
    }
    show() {
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
        if (showEvent.defaultPrevented) return;
        this._clearTimeout();
        if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
        const complete = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOWING);
            EventHandler.trigger(this._element, EVENT_SHOWN);
            this._maybeScheduleHide();
        };
        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this.isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this.isShown()) this._element.classList.remove(CLASS_NAME_SHOW);
        super.dispose();
    }
    isShown() {
        return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
        switch(event.type){
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = isInteracting;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false));
        EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false));
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Toast.getOrCreateInstance(this, config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            }
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Toast);
/**
 * jQuery
 */ defineJQueryPlugin(Toast);

},{"@popperjs/core":"7unqC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"lCAq5","./modifiers/index.js":"cap3W","./createPopper.js":"cHuNp","./popper.js":"1PuRF","./popper-lite.js":"gKW1N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cap3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":"31HFW","./computeStyles.js":"gDlm2","./eventListeners.js":"hBKsL","./flip.js":"fv5wq","./hide.js":"2g4OF","./offset.js":"3GKVY","./popperOffsets.js":"6I679","./preventOverflow.js":"1AMhb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _instanceOfJs.isHTMLElement)(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
        "the arrow."
    ].join(" "));
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            "element."
        ].join(" "));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
exports.default = getLayoutRect;

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}
exports.default = getBoundingClientRect;

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}
exports.default = isLayoutViewport;

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}
exports.default = getUAString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = (0, _getComputedStyleJsDefault.default)(state.elements.popper).transitionProperty || "";
    if (adaptive && [
        "transform",
        "top",
        "right",
        "bottom",
        "left"
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        "Popper: Detected CSS transitions on at least one of the following",
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        "\n\n",
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        "for smooth transitions, or remove these properties from the CSS",
        "transition declaration on the popper element if only transitioning",
        "opacity or background-color for example.",
        "\n\n",
        "We recommend using the popper element as a wrapper around an inner",
        "element that can have any CSS property transitioned for animations."
    ].join(" "));
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split("-")[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(" "));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = (0, _uniqueByJsDefault.default)([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                (0, _validateModifiersJsDefault.default)(modifiers);
                if ((0, _getBasePlacementJsDefault.default)(state.options.placement) === (0, _enumsJs.auto)) {
                    var flipModifier = state.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === "flip";
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        "present and enabled to work."
                    ].join(" "));
                }
                var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    "between the popper and its reference element or boundary.",
                    "To replicate margin, use the `offset` modifier, as well as",
                    "the `padding` option in the `preventOverflow` and `flip`",
                    "modifiers."
                ].join(" "));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./dom-utils/getComputedStyle.js":"3mZjB","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/validateModifiers.js":"1S5dQ","./utils/uniqueBy.js":"hhl2M","./utils/getBasePlacement.js":"59Wp3","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":"ltCuw","./dom-utils/instanceOf.js":"gYFUC","./enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1S5dQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    "name",
    "enabled",
    "phase",
    "fn",
    "effect",
    "requires",
    "options"
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case "name":
                    if (typeof modifier.name !== "string") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                    break;
                case "enabled":
                    if (typeof modifier.enabled !== "boolean") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                    break;
                case "phase":
                    if ((0, _enumsJs.modifierPhases).indexOf(modifier.phase) < 0) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + (0, _enumsJs.modifierPhases).join(", "), '"' + String(modifier.phase) + '"'));
                    break;
                case "fn":
                    if (typeof modifier.fn !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "effect":
                    if (modifier.effect != null && typeof modifier.effect !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "requires":
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                    break;
                case "requiresIfExists":
                    if (!Array.isArray(modifier.requiresIfExists)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                        return '"' + s + '"';
                    }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error((0, _formatJsDefault.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"baNIW","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"baNIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhl2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":"gKW1N","./modifiers/index.js":"cap3W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKW1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g28pQ":[function(require,module,exports) {
module.exports = require("./vue.common.dev.js");

},{"./vue.common.dev.js":"aicD4"}],"aicD4":[function(require,module,exports) {
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */ var global = arguments[3];
"use strict";
const emptyObject = Object.freeze({});
const isArray = Array.isArray;
// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
    return v === undefined || v === null;
}
function isDef(v) {
    return v !== undefined && v !== null;
}
function isTrue(v) {
    return v === true;
}
function isFalse(v) {
    return v === false;
}
/**
 * Check if value is primitive.
 */ function isPrimitive(value) {
    return typeof value === "string" || typeof value === "number" || // $flow-disable-line
    typeof value === "symbol" || typeof value === "boolean";
}
function isFunction(value) {
    return typeof value === "function";
}
/**
 * Quick object check - this is primarily used to tell
 * objects from primitive values when we know the value
 * is a JSON-compliant type.
 */ function isObject(obj) {
    return obj !== null && typeof obj === "object";
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */ const _toString = Object.prototype.toString;
function toRawType(value) {
    return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */ function isPlainObject(obj) {
    return _toString.call(obj) === "[object Object]";
}
function isRegExp(v) {
    return _toString.call(v) === "[object RegExp]";
}
/**
 * Check if val is a valid array index.
 */ function isValidArrayIndex(val) {
    const n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function isPromise(val) {
    return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
}
/**
 * Convert a value to a string that is actually rendered.
 */ function toString(val) {
    return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */ function toNumber(val) {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */ function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>map[val.toLowerCase()] : (val)=>map[val];
}
/**
 * Check if a tag is a built-in tag.
 */ const isBuiltInTag = makeMap("slot,component", true);
/**
 * Check if an attribute is a reserved attribute.
 */ const isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
/**
 * Remove an item from an array.
 */ function remove$2(arr, item) {
    const len = arr.length;
    if (len) {
        // fast path for the only / last item
        if (item === arr[len - 1]) {
            arr.length = len - 1;
            return;
        }
        const index = arr.indexOf(item);
        if (index > -1) return arr.splice(index, 1);
    }
}
/**
 * Check whether an object has the property.
 */ const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */ function cached(fn) {
    const cache = Object.create(null);
    return function cachedFn(str) {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
/**
 * Camelize a hyphen-delimited string.
 */ const camelizeRE = /-(\w)/g;
const camelize = cached((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
/**
 * Capitalize a string.
 */ const capitalize = cached((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */ const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached((str)=>{
    return str.replace(hyphenateRE, "-$1").toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */ /* istanbul ignore next */ function polyfillBind(fn, ctx) {
    function boundFn(a) {
        const l = arguments.length;
        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }
    boundFn._length = fn.length;
    return boundFn;
}
function nativeBind(fn, ctx) {
    return fn.bind(ctx);
}
// @ts-expect-error bind cannot be `undefined`
const bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */ function toArray(list, start) {
    start = start || 0;
    let i = list.length - start;
    const ret = new Array(i);
    while(i--)ret[i] = list[i + start];
    return ret;
}
/**
 * Mix properties into target object.
 */ function extend(to, _from) {
    for(const key in _from)to[key] = _from[key];
    return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */ function toObject(arr) {
    const res = {};
    for(let i = 0; i < arr.length; i++)if (arr[i]) extend(res, arr[i]);
    return res;
}
/* eslint-disable no-unused-vars */ /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */ function noop(a, b, c) {}
/**
 * Always return false.
 */ const no = (a, b, c)=>false;
/* eslint-enable no-unused-vars */ /**
 * Return the same value.
 */ const identity = (_)=>_;
/**
 * Generate a string containing static keys from compiler modules.
 */ function genStaticKeys$1(modules) {
    return modules.reduce((keys, m)=>{
        return keys.concat(m.staticKeys || []);
    }, []).join(",");
}
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */ function looseEqual(a, b) {
    if (a === b) return true;
    const isObjectA = isObject(a);
    const isObjectB = isObject(b);
    if (isObjectA && isObjectB) try {
        const isArrayA = Array.isArray(a);
        const isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) return a.length === b.length && a.every((e, i)=>{
            return looseEqual(e, b[i]);
        });
        else if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
        else if (!isArrayA && !isArrayB) {
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every((key)=>{
                return looseEqual(a[key], b[key]);
            });
        } else /* istanbul ignore next */ return false;
    } catch (e) {
        /* istanbul ignore next */ return false;
    }
    else if (!isObjectA && !isObjectB) return String(a) === String(b);
    else return false;
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */ function looseIndexOf(arr, val) {
    for(let i = 0; i < arr.length; i++){
        if (looseEqual(arr[i], val)) return i;
    }
    return -1;
}
/**
 * Ensure a function is called only once.
 */ function once(fn) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
function hasChanged(x, y) {
    if (x === y) return x === 0 && 1 / x !== 1 / y;
    else return x === x || y === y;
}
const SSR_ATTR = "data-server-rendered";
const ASSET_TYPES = [
    "component",
    "directive",
    "filter"
];
const LIFECYCLE_HOOKS = [
    "beforeCreate",
    "created",
    "beforeMount",
    "mounted",
    "beforeUpdate",
    "updated",
    "beforeDestroy",
    "destroyed",
    "activated",
    "deactivated",
    "errorCaptured",
    "serverPrefetch",
    "renderTracked",
    "renderTriggered"
];
var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */ // $flow-disable-line
    optionMergeStrategies: Object.create(null),
    /**
     * Whether to suppress warnings.
     */ silent: false,
    /**
     * Show production mode tip message on boot?
     */ productionTip: true,
    /**
     * Whether to enable devtools
     */ devtools: true,
    /**
     * Whether to record perf
     */ performance: false,
    /**
     * Error handler for watcher errors
     */ errorHandler: null,
    /**
     * Warn handler for watcher warns
     */ warnHandler: null,
    /**
     * Ignore certain custom elements
     */ ignoredElements: [],
    /**
     * Custom user key aliases for v-on
     */ // $flow-disable-line
    keyCodes: Object.create(null),
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */ isReservedTag: no,
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */ isReservedAttr: no,
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */ isUnknownElement: no,
    /**
     * Get the namespace of an element
     */ getTagNamespace: noop,
    /**
     * Parse the real tag name for the specific platform.
     */ parsePlatformTagName: identity,
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */ mustUseProp: no,
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */ async: true,
    /**
     * Exposed for legacy reasons
     */ _lifecycleHooks: LIFECYCLE_HOOKS
};
/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */ const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */ function isReserved(str) {
    const c = (str + "").charCodeAt(0);
    return c === 0x24 || c === 0x5f;
}
/**
 * Define a property.
 */ function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}
/**
 * Parse simple path.
 */ const bailRE = new RegExp(`[^${unicodeRegExp.source}.$_\\d]`);
function parsePath(path) {
    if (bailRE.test(path)) return;
    const segments = path.split(".");
    return function(obj) {
        for(let i = 0; i < segments.length; i++){
            if (!obj) return;
            obj = obj[segments[i]];
        }
        return obj;
    };
}
// can we use __proto__?
const hasProto = "__proto__" in {};
// Browser environment sniffing
const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
const isEdge = UA && UA.indexOf("edge/") > 0;
UA && UA.indexOf("android");
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
UA && /chrome\/\d+/.test(UA) && isEdge;
UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);
// Firefox has a "watch" function on Object.prototype...
// @ts-expect-error firebox support
const nativeWatch = {}.watch;
let supportsPassive = false;
if (inBrowser) try {
    const opts = {};
    Object.defineProperty(opts, "passive", {
        get () {
            /* istanbul ignore next */ supportsPassive = true;
        }
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener("test-passive", null, opts);
} catch (e) {}
// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
let _isServer;
const isServerRendering = ()=>{
    if (_isServer === undefined) {
        /* istanbul ignore if */ if (!inBrowser && typeof global !== "undefined") // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
        else _isServer = false;
    }
    return _isServer;
};
// detect devtools
const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */ function isNative(Ctor) {
    return typeof Ctor === "function" && /native code/.test(Ctor.toString());
}
const hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
let _Set; // $flow-disable-line
/* istanbul ignore if */ if (typeof Set !== "undefined" && isNative(Set)) // use native Set when available.
_Set = Set;
else // a non-standard Set polyfill that only works with primitive keys.
_Set = class Set1 {
    constructor(){
        this.set = Object.create(null);
    }
    has(key) {
        return this.set[key] === true;
    }
    add(key) {
        this.set[key] = true;
    }
    clear() {
        this.set = Object.create(null);
    }
};
let currentInstance = null;
/**
 * This is exposed for compatibility with v3 (e.g. some functions in VueUse
 * relies on it). Do not use this internally, just use `currentInstance`.
 *
 * @internal this function needs manual type declaration because it relies
 * on previously manually authored types from Vue 2
 */ function getCurrentInstance() {
    return currentInstance && {
        proxy: currentInstance
    };
}
/**
 * @internal
 */ function setCurrentInstance(vm = null) {
    if (!vm) currentInstance && currentInstance._scope.off();
    currentInstance = vm;
    vm && vm._scope.on();
}
/**
 * @internal
 */ class VNode {
    constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory){
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
    }
    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */ get child() {
        return this.componentInstance;
    }
}
const createEmptyVNode = (text = "")=>{
    const node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
};
function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
}
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
    const cloned = new VNode(vnode.tag, vnode.data, // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
}
/* not type checking this file because flow doesn't play well with Proxy */ let initProxy;
{
    const allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require" // for Webpack/Browserify
    );
    const warnNonPresent = (target, key)=>{
        warn$2(`Property or method "${key}" is not defined on the instance but ` + "referenced during render. Make sure that this property is reactive, " + "either in the data option, or for class-based components, by " + "initializing the property. " + "See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", target);
    };
    const warnReservedPrefix = (target, key)=>{
        warn$2(`Property "${key}" must be accessed with "$data.${key}" because ` + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + "prevent conflicts with Vue internals. " + "See: https://v2.vuejs.org/v2/api/#data", target);
    };
    const hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
    if (hasProxy) {
        const isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
        config.keyCodes = new Proxy(config.keyCodes, {
            set (target, key, value) {
                if (isBuiltInModifier(key)) {
                    warn$2(`Avoid overwriting built-in modifier in config.keyCodes: .${key}`);
                    return false;
                } else {
                    target[key] = value;
                    return true;
                }
            }
        });
    }
    const hasHandler = {
        has (target, key) {
            const has = key in target;
            const isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target.$data);
            if (!has && !isAllowed) {
                if (key in target.$data) warnReservedPrefix(target, key);
                else warnNonPresent(target, key);
            }
            return has || !isAllowed;
        }
    };
    const getHandler = {
        get (target, key) {
            if (typeof key === "string" && !(key in target)) {
                if (key in target.$data) warnReservedPrefix(target, key);
                else warnNonPresent(target, key);
            }
            return target[key];
        }
    };
    initProxy = function initProxy(vm) {
        if (hasProxy) {
            // determine which proxy handler to use
            const options = vm.$options;
            const handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
            vm._renderProxy = new Proxy(vm, handlers);
        } else vm._renderProxy = vm;
    };
}let uid$2 = 0;
const pendingCleanupDeps = [];
const cleanupDeps = ()=>{
    for(let i = 0; i < pendingCleanupDeps.length; i++){
        const dep = pendingCleanupDeps[i];
        dep.subs = dep.subs.filter((s)=>s);
        dep._pending = false;
    }
    pendingCleanupDeps.length = 0;
};
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * @internal
 */ class Dep {
    constructor(){
        // pending subs cleanup
        this._pending = false;
        this.id = uid$2++;
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    removeSub(sub) {
        // #12696 deps with massive amount of subscribers are extremely slow to
        // clean up in Chromium
        // to workaround this, we unset the sub for now, and clear them on
        // next scheduler flush.
        this.subs[this.subs.indexOf(sub)] = null;
        if (!this._pending) {
            this._pending = true;
            pendingCleanupDeps.push(this);
        }
    }
    depend(info) {
        if (Dep.target) {
            Dep.target.addDep(this);
            if (info && Dep.target.onTrack) Dep.target.onTrack(Object.assign({
                effect: Dep.target
            }, info));
        }
    }
    notify(info) {
        // stabilize the subscriber list first
        const subs = this.subs.filter((s)=>s);
        if (!config.async) // subs aren't sorted in scheduler if not running async
        // we need to sort them now to make sure they fire in correct
        // order
        subs.sort((a, b)=>a.id - b.id);
        for(let i = 0, l = subs.length; i < l; i++){
            const sub = subs[i];
            if (info) sub.onTrigger && sub.onTrigger(Object.assign({
                effect: subs[i]
            }, info));
            sub.update();
        }
    }
}
// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
const targetStack = [];
function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}
function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */ const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
const methodsToPatch = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse"
];
/**
 * Intercept mutating methods and emit events
 */ methodsToPatch.forEach(function(method) {
    // cache original method
    const original = arrayProto[method];
    def(arrayMethods, method, function mutator(...args) {
        const result = original.apply(this, args);
        const ob = this.__ob__;
        let inserted;
        switch(method){
            case "push":
            case "unshift":
                inserted = args;
                break;
            case "splice":
                inserted = args.slice(2);
                break;
        }
        if (inserted) ob.observeArray(inserted);
        ob.dep.notify({
            type: "array mutation" /* TriggerOpTypes.ARRAY_MUTATION */ ,
            target: this,
            key: method
        });
        return result;
    });
});
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);
const NO_INIITIAL_VALUE = {};
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */ let shouldObserve = true;
function toggleObserving(value) {
    shouldObserve = value;
}
// ssr mock dep
const mockDep = {
    notify: noop,
    depend: noop,
    addSub: noop,
    removeSub: noop
};
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */ class Observer {
    constructor(value, shallow = false, mock = false){
        this.value = value;
        this.shallow = shallow;
        this.mock = mock;
        // this.value = value
        this.dep = mock ? mockDep : new Dep();
        this.vmCount = 0;
        def(value, "__ob__", this);
        if (isArray(value)) {
            if (!mock) {
                if (hasProto) value.__proto__ = arrayMethods;
                else for(let i = 0, l = arrayKeys.length; i < l; i++){
                    const key = arrayKeys[i];
                    def(value, key, arrayMethods[key]);
                }
            }
            if (!shallow) this.observeArray(value);
        } else {
            /**
             * Walk through all properties and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             */ const keys = Object.keys(value);
            for(let i1 = 0; i1 < keys.length; i1++){
                const key1 = keys[i1];
                defineReactive(value, key1, NO_INIITIAL_VALUE, undefined, shallow, mock);
            }
        }
    }
    /**
     * Observe a list of Array items.
     */ observeArray(value) {
        for(let i = 0, l = value.length; i < l; i++)observe(value[i], false, this.mock);
    }
}
// helpers
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */ function observe(value, shallow, ssrMockReactivity) {
    if (value && hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) return value.__ob__;
    if (shouldObserve && (ssrMockReactivity || !isServerRendering()) && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value.__v_skip /* ReactiveFlags.SKIP */  && !isRef(value) && !(value instanceof VNode)) return new Observer(value, shallow, ssrMockReactivity);
}
/**
 * Define a reactive property on an Object.
 */ function defineReactive(obj, key, val, customSetter, shallow, mock) {
    const dep = new Dep();
    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) return;
    // cater for pre-defined getter/setters
    const getter = property && property.get;
    const setter = property && property.set;
    if ((!getter || setter) && (val === NO_INIITIAL_VALUE || arguments.length === 2)) val = obj[key];
    let childOb = !shallow && observe(val, false, mock);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val;
            if (Dep.target) {
                dep.depend({
                    target: obj,
                    type: "get" /* TrackOpTypes.GET */ ,
                    key
                });
                if (childOb) {
                    childOb.dep.depend();
                    if (isArray(value)) dependArray(value);
                }
            }
            return isRef(value) && !shallow ? value.value : value;
        },
        set: function reactiveSetter(newVal1) {
            const value = getter ? getter.call(obj) : val;
            if (!hasChanged(value, newVal1)) return;
            if (customSetter) customSetter();
            if (setter) setter.call(obj, newVal1);
            else if (getter) // #7981: for accessor properties without setter
            return;
            else if (!shallow && isRef(value) && !isRef(newVal1)) {
                value.value = newVal1;
                return;
            } else val = newVal1;
            childOb = !shallow && observe(newVal1, false, mock);
            dep.notify({
                type: "set" /* TriggerOpTypes.SET */ ,
                target: obj,
                key,
                newValue: newVal1,
                oldValue: value
            });
        }
    });
    return dep;
}
function set(target, key, val) {
    if (isUndef(target) || isPrimitive(target)) warn$2(`Cannot set reactive property on undefined, null, or primitive value: ${target}`);
    if (isReadonly(target)) {
        warn$2(`Set operation on key "${key}" failed: target is readonly.`);
        return;
    }
    const ob = target.__ob__;
    if (isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        // when mocking for SSR, array methods are not hijacked
        if (ob && !ob.shallow && ob.mock) observe(val, false, true);
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    if (target._isVue || ob && ob.vmCount) {
        warn$2("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock);
    ob.dep.notify({
        type: "add" /* TriggerOpTypes.ADD */ ,
        target: target,
        key,
        newValue: val,
        oldValue: undefined
    });
    return val;
}
function del(target, key) {
    if (isUndef(target) || isPrimitive(target)) warn$2(`Cannot delete reactive property on undefined, null, or primitive value: ${target}`);
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    const ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
        warn$2("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
        return;
    }
    if (isReadonly(target)) {
        warn$2(`Delete operation on key "${key}" failed: target is readonly.`);
        return;
    }
    if (!hasOwn(target, key)) return;
    delete target[key];
    if (!ob) return;
    ob.dep.notify({
        type: "delete" /* TriggerOpTypes.DELETE */ ,
        target: target,
        key
    });
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */ function dependArray(value) {
    for(let e, i = 0, l = value.length; i < l; i++){
        e = value[i];
        if (e && e.__ob__) e.__ob__.dep.depend();
        if (isArray(e)) dependArray(e);
    }
}
function reactive(target) {
    makeReactive(target, false);
    return target;
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */ function shallowReactive(target) {
    makeReactive(target, true);
    def(target, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */ , true);
    return target;
}
function makeReactive(target, shallow) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (!isReadonly(target)) {
        {
            if (isArray(target)) warn$2(`Avoid using Array as root value for ${shallow ? `shallowReactive()` : `reactive()`} as it cannot be tracked in watch() or watchEffect(). Use ${shallow ? `shallowRef()` : `ref()`} instead. This is a Vue-2-only limitation.`);
            const existingOb = target && target.__ob__;
            if (existingOb && existingOb.shallow !== shallow) warn$2(`Target is already a ${existingOb.shallow ? `` : `non-`}shallow reactive object, and cannot be converted to ${shallow ? `` : `non-`}shallow.`);
        }
        const ob = observe(target, shallow, isServerRendering());
        if (!ob) {
            if (target == null || isPrimitive(target)) warn$2(`value cannot be made reactive: ${String(target)}`);
            if (isCollectionType(target)) warn$2(`Vue 2 does not support reactive collection types such as Map or Set.`);
        }
    }
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw" /* ReactiveFlags.RAW */ ]);
    return !!(value && value.__ob__);
}
function isShallow(value) {
    return !!(value && value.__v_isShallow);
}
function isReadonly(value) {
    return !!(value && value.__v_isReadonly);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */ ];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    // non-extensible objects won't be observed anyway
    if (Object.isExtensible(value)) def(value, "__v_skip" /* ReactiveFlags.SKIP */ , true);
    return value;
}
/**
 * @internal
 */ function isCollectionType(value) {
    const type = toRawType(value);
    return type === "Map" || type === "WeakMap" || type === "Set" || type === "WeakSet";
}
/**
 * @internal
 */ const RefFlag = `__v_isRef`;
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref$1(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    const ref = {};
    def(ref, RefFlag, true);
    def(ref, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */ , shallow);
    def(ref, "dep", defineReactive(ref, "value", rawValue, null, shallow, isServerRendering()));
    return ref;
}
function triggerRef(ref) {
    if (!ref.dep) warn$2(`received object is not a triggerable ref.`);
    ref.dep && ref.dep.notify({
        type: "set" /* TriggerOpTypes.SET */ ,
        target: ref,
        key: "value"
    });
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function proxyRefs(objectWithRefs) {
    if (isReactive(objectWithRefs)) return objectWithRefs;
    const proxy = {};
    const keys = Object.keys(objectWithRefs);
    for(let i = 0; i < keys.length; i++)proxyWithRefUnwrap(proxy, objectWithRefs, keys[i]);
    return proxy;
}
function proxyWithRefUnwrap(target, source, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: ()=>{
            const val = source[key];
            if (isRef(val)) return val.value;
            else {
                const ob = val && val.__ob__;
                if (ob) ob.dep.depend();
                return val;
            }
        },
        set: (value)=>{
            const oldValue = source[key];
            if (isRef(oldValue) && !isRef(value)) oldValue.value = value;
            else source[key] = value;
        }
    });
}
function customRef(factory) {
    const dep = new Dep();
    const { get , set  } = factory(()=>{
        dep.depend({
            target: ref,
            type: "get" /* TrackOpTypes.GET */ ,
            key: "value"
        });
    }, ()=>{
        dep.notify({
            target: ref,
            type: "set" /* TriggerOpTypes.SET */ ,
            key: "value"
        });
    });
    const ref = {
        get value () {
            return get();
        },
        set value (newVal){
            set(newVal);
        }
    };
    def(ref, RefFlag, true);
    return ref;
}
function toRefs(object) {
    if (!isReactive(object)) warn$2(`toRefs() expects a reactive object but received a plain one.`);
    const ret = isArray(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = toRef(object, key);
    return ret;
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    if (isRef(val)) return val;
    const ref = {
        get value () {
            const val1 = object[key];
            return val1 === undefined ? defaultValue : val1;
        },
        set value (newVal){
            object[key] = newVal;
        }
    };
    def(ref, RefFlag, true);
    return ref;
}
const rawToReadonlyFlag = `__v_rawToReadonly`;
const rawToShallowReadonlyFlag = `__v_rawToShallowReadonly`;
function readonly(target) {
    return createReadonly(target, false);
}
function createReadonly(target, shallow) {
    if (!isPlainObject(target)) {
        if (isArray(target)) warn$2(`Vue 2 does not support readonly arrays.`);
        else if (isCollectionType(target)) warn$2(`Vue 2 does not support readonly collection types such as Map or Set.`);
        else warn$2(`value cannot be made readonly: ${typeof target}`);
        return target;
    }
    if (!Object.isExtensible(target)) warn$2(`Vue 2 does not support creating readonly proxy for non-extensible object.`);
    // already a readonly object
    if (isReadonly(target)) return target;
    // already has a readonly proxy
    const existingFlag = shallow ? rawToShallowReadonlyFlag : rawToReadonlyFlag;
    const existingProxy = target[existingFlag];
    if (existingProxy) return existingProxy;
    const proxy = Object.create(Object.getPrototypeOf(target));
    def(target, existingFlag, proxy);
    def(proxy, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */ , true);
    def(proxy, "__v_raw" /* ReactiveFlags.RAW */ , target);
    if (isRef(target)) def(proxy, RefFlag, true);
    if (shallow || isShallow(target)) def(proxy, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */ , true);
    const keys = Object.keys(target);
    for(let i = 0; i < keys.length; i++)defineReadonlyProperty(proxy, target, keys[i], shallow);
    return proxy;
}
function defineReadonlyProperty(proxy, target, key, shallow) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get () {
            const val = target[key];
            return shallow || !isPlainObject(val) ? val : readonly(val);
        },
        set () {
            warn$2(`Set operation on key "${key}" failed: target is readonly.`);
        }
    });
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */ function shallowReadonly(target) {
    return createReadonly(target, true);
}
function computed(getterOrOptions, debugOptions) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            warn$2("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const watcher = isServerRendering() ? null : new Watcher(currentInstance, getter, noop, {
        lazy: true
    });
    if (watcher && debugOptions) {
        watcher.onTrack = debugOptions.onTrack;
        watcher.onTrigger = debugOptions.onTrigger;
    }
    const ref = {
        // some libs rely on the presence effect for checking computed refs
        // from normal refs, but the implementation doesn't matter
        effect: watcher,
        get value () {
            if (watcher) {
                if (watcher.dirty) watcher.evaluate();
                if (Dep.target) {
                    if (Dep.target.onTrack) Dep.target.onTrack({
                        effect: Dep.target,
                        target: ref,
                        type: "get" /* TrackOpTypes.GET */ ,
                        key: "value"
                    });
                    watcher.depend();
                }
                return watcher.value;
            } else return getter();
        },
        set value (newVal){
            setter(newVal);
        }
    };
    def(ref, RefFlag, true);
    def(ref, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */ , onlyGetter);
    return ref;
}
let mark;
let measure;
{
    const perf = inBrowser && window.performance;
    /* istanbul ignore if */ if (perf && // @ts-ignore
    perf.mark && // @ts-ignore
    perf.measure && // @ts-ignore
    perf.clearMarks && // @ts-ignore
    perf.clearMeasures) {
        mark = (tag)=>perf.mark(tag);
        measure = (name, startTag, endTag)=>{
            perf.measure(name, startTag, endTag);
            perf.clearMarks(startTag);
            perf.clearMarks(endTag);
        // perf.clearMeasures(name)
        };
    }
}const normalizeEvent = cached((name)=>{
    const passive = name.charAt(0) === "&";
    name = passive ? name.slice(1) : name;
    const once = name.charAt(0) === "~"; // Prefixed last, checked first
    name = once ? name.slice(1) : name;
    const capture = name.charAt(0) === "!";
    name = capture ? name.slice(1) : name;
    return {
        name,
        once,
        capture,
        passive
    };
});
function createFnInvoker(fns, vm) {
    function invoker() {
        const fns = invoker.fns;
        if (isArray(fns)) {
            const cloned = fns.slice();
            for(let i = 0; i < cloned.length; i++)invokeWithErrorHandling(cloned[i], null, arguments, vm, `v-on handler`);
        } else // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, `v-on handler`);
    }
    invoker.fns = fns;
    return invoker;
}
function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
    let name, cur, old, event;
    for(name in on){
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) warn$2(`Invalid handler for event "${event.name}": got ` + String(cur), vm);
        else if (isUndef(old)) {
            if (isUndef(cur.fns)) cur = on[name] = createFnInvoker(cur, vm);
            if (isTrue(event.once)) cur = on[name] = createOnceHandler(event.name, cur, event.capture);
            add(event.name, cur, event.capture, event.passive, event.params);
        } else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
        }
    }
    for(name in oldOn)if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove(event.name, oldOn[name], event.capture);
    }
}
function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) def = def.data.hook || (def.data.hook = {});
    let invoker;
    const oldHook = def[hookKey];
    function wrappedHook() {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove$2(invoker.fns, wrappedHook);
    }
    if (isUndef(oldHook)) // no existing hook
    invoker = createFnInvoker([
        wrappedHook
    ]);
    else /* istanbul ignore if */ if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
    } else // existing plain hook
    invoker = createFnInvoker([
        oldHook,
        wrappedHook
    ]);
    invoker.merged = true;
    def[hookKey] = invoker;
}
function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    const propOptions = Ctor.options.props;
    if (isUndef(propOptions)) return;
    const res = {};
    const { attrs , props  } = data;
    if (isDef(attrs) || isDef(props)) for(const key in propOptions){
        const altKey = hyphenate(key);
        {
            const keyInLowerCase = key.toLowerCase();
            if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) tip(`Prop "${keyInLowerCase}" is passed to component ` + `${formatComponentName(// @ts-expect-error tag is string
            tag || Ctor)}, but the declared prop name is` + ` "${key}". ` + `Note that HTML attributes are case-insensitive and camelCased ` + `props need to use their kebab-case equivalents when using in-DOM ` + `templates. You should probably use "${altKey}" instead of "${key}".`);
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
    return res;
}
function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
        if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) delete hash[key];
            return true;
        } else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) delete hash[altKey];
            return true;
        }
    }
    return false;
}
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
    for(let i = 0; i < children.length; i++){
        if (isArray(children[i])) return Array.prototype.concat.apply([], children);
    }
    return children;
}
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
    return isPrimitive(children) ? [
        createTextVNode(children)
    ] : isArray(children) ? normalizeArrayChildren(children) : undefined;
}
function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}
function normalizeArrayChildren(children, nestedIndex) {
    const res = [];
    let i, c, lastIndex, last;
    for(i = 0; i < children.length; i++){
        c = children[i];
        if (isUndef(c) || typeof c === "boolean") continue;
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (isArray(c)) {
            if (c.length > 0) {
                c = normalizeArrayChildren(c, `${nestedIndex || ""}_${i}`);
                // merge adjacent text nodes
                if (isTextNode(c[0]) && isTextNode(last)) {
                    res[lastIndex] = createTextVNode(last.text + c[0].text);
                    c.shift();
                }
                res.push.apply(res, c);
            }
        } else if (isPrimitive(c)) {
            if (isTextNode(last)) // merge adjacent text nodes
            // this is necessary for SSR hydration because text nodes are
            // essentially merged when rendered to HTML strings
            res[lastIndex] = createTextVNode(last.text + c);
            else if (c !== "") // convert primitive to vnode
            res.push(createTextVNode(c));
        } else if (isTextNode(c) && isTextNode(last)) // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
        else {
            // default key for nested array children (likely generated by v-for)
            if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) c.key = `__vlist${nestedIndex}_${i}__`;
            res.push(c);
        }
    }
    return res;
}
const SIMPLE_NORMALIZE = 1;
const ALWAYS_NORMALIZE = 2;
// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
    }
    if (isTrue(alwaysNormalize)) normalizationType = ALWAYS_NORMALIZE;
    return _createElement(context, tag, data, children, normalizationType);
}
function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
        warn$2(`Avoid using observed data object as vnode data: ${JSON.stringify(data)}\n` + "Always create fresh vnode data objects in each render!", context);
        return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) tag = data.is;
    if (!tag) // in case of component :is set to falsy value
    return createEmptyVNode();
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) warn$2("Avoid using non-primitive value as key, use string/number value instead.", context);
    // support single function children as default scoped slot
    if (isArray(children) && isFunction(children[0])) {
        data = data || {};
        data.scopedSlots = {
            default: children[0]
        };
        children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) children = normalizeChildren(children);
    else if (normalizationType === SIMPLE_NORMALIZE) children = simpleNormalizeChildren(children);
    let vnode, ns;
    if (typeof tag === "string") {
        let Ctor;
        ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
            // platform built-in elements
            if (isDef(data) && isDef(data.nativeOn) && data.tag !== "component") warn$2(`The .native modifier for v-on is only valid on components but it was used on <${tag}>.`, context);
            vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
        } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) // component
        vnode = createComponent(Ctor, data, context, children, tag);
        else // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
    } else // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
    if (isArray(vnode)) return vnode;
    else if (isDef(vnode)) {
        if (isDef(ns)) applyNS(vnode, ns);
        if (isDef(data)) registerDeepBindings(data);
        return vnode;
    } else return createEmptyVNode();
}
function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === "foreignObject") {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
    }
    if (isDef(vnode.children)) for(let i = 0, l = vnode.children.length; i < l; i++){
        const child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) applyNS(child, ns, force);
    }
}
// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data) {
    if (isObject(data.style)) traverse(data.style);
    if (isObject(data.class)) traverse(data.class);
}
/**
 * Runtime helper for rendering v-for lists.
 */ function renderList(val, render) {
    let ret = null, i, l, keys, key;
    if (isArray(val) || typeof val === "string") {
        ret = new Array(val.length);
        for(i = 0, l = val.length; i < l; i++)ret[i] = render(val[i], i);
    } else if (typeof val === "number") {
        ret = new Array(val);
        for(i = 0; i < val; i++)ret[i] = render(i + 1, i);
    } else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
            ret = [];
            const iterator = val[Symbol.iterator]();
            let result = iterator.next();
            while(!result.done){
                ret.push(render(result.value, ret.length));
                result = iterator.next();
            }
        } else {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for(i = 0, l = keys.length; i < l; i++){
                key = keys[i];
                ret[i] = render(val[key], key, i);
            }
        }
    }
    if (!isDef(ret)) ret = [];
    ret._isVList = true;
    return ret;
}
/**
 * Runtime helper for rendering <slot>
 */ function renderSlot(name, fallbackRender, props, bindObject) {
    const scopedSlotFn = this.$scopedSlots[name];
    let nodes;
    if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
            if (!isObject(bindObject)) warn$2("slot v-bind without argument expects an Object", this);
            props = extend(extend({}, bindObject), props);
        }
        nodes = scopedSlotFn(props) || (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    } else nodes = this.$slots[name] || (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    const target = props && props.slot;
    if (target) return this.$createElement("template", {
        slot: target
    }, nodes);
    else return nodes;
}
/**
 * Runtime helper for resolving filters
 */ function resolveFilter(id) {
    return resolveAsset(this.$options, "filters", id, true) || identity;
}
function isKeyNotMatch(expect, actual) {
    if (isArray(expect)) return expect.indexOf(actual) === -1;
    else return expect !== actual;
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */ function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    const mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) return isKeyNotMatch(builtInKeyName, eventKeyName);
    else if (mappedKeyCode) return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    else if (eventKeyName) return hyphenate(eventKeyName) !== key;
    return eventKeyCode === undefined;
}
/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */ function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
        if (!isObject(value)) warn$2("v-bind without argument expects an Object or Array value", this);
        else {
            if (isArray(value)) value = toObject(value);
            let hash;
            for(const key in value){
                if (key === "class" || key === "style" || isReservedAttribute(key)) hash = data;
                else {
                    const type = data.attrs && data.attrs.type;
                    hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                }
                const camelizedKey = camelize(key);
                const hyphenatedKey = hyphenate(key);
                if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                    hash[key] = value[key];
                    if (isSync) {
                        const on = data.on || (data.on = {});
                        on[`update:${key}`] = function($event) {
                            value[key] = $event;
                        };
                    }
                }
            }
        }
    }
    return data;
}
/**
 * Runtime helper for rendering static trees.
 */ function renderStatic(index, isInFor) {
    const cached = this._staticTrees || (this._staticTrees = []);
    let tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) return tree;
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, this._c, this // for render fns generated for functional component templates
    );
    markStatic$1(tree, `__static__${index}`, false);
    return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */ function markOnce(tree, index, key) {
    markStatic$1(tree, `__once__${index}${key ? `_${key}` : ``}`, true);
    return tree;
}
function markStatic$1(tree, key, isOnce) {
    if (isArray(tree)) {
        for(let i = 0; i < tree.length; i++)if (tree[i] && typeof tree[i] !== "string") markStaticNode(tree[i], `${key}_${i}`, isOnce);
    } else markStaticNode(tree, key, isOnce);
}
function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
}
function bindObjectListeners(data, value) {
    if (value) {
        if (!isPlainObject(value)) warn$2("v-on without argument expects an Object value", this);
        else {
            const on = data.on = data.on ? extend({}, data.on) : {};
            for(const key in value){
                const existing = on[key];
                const ours = value[key];
                on[key] = existing ? [].concat(existing, ours) : ours;
            }
        }
    }
    return data;
}
function resolveScopedSlots(fns, res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
    res = res || {
        $stable: !hasDynamicKeys
    };
    for(let i = 0; i < fns.length; i++){
        const slot = fns[i];
        if (isArray(slot)) resolveScopedSlots(slot, res, hasDynamicKeys);
        else if (slot) {
            // marker for reverse proxying v-slot without scope on this.$slots
            // @ts-expect-error
            if (slot.proxy) // @ts-expect-error
            slot.fn.proxy = true;
            res[slot.key] = slot.fn;
        }
    }
    if (contentHashKey) res.$key = contentHashKey;
    return res;
}
// helper to process dynamic keys for dynamic arguments in v-bind and v-on.
function bindDynamicKeys(baseObj, values) {
    for(let i = 0; i < values.length; i += 2){
        const key = values[i];
        if (typeof key === "string" && key) baseObj[values[i]] = values[i + 1];
        else if (key !== "" && key !== null) // null is a special value for explicitly removing a binding
        warn$2(`Invalid value for dynamic directive argument (expected string or null): ${key}`, this);
    }
    return baseObj;
}
// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier(value, symbol) {
    return typeof value === "string" ? symbol + value : value;
}
function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
}
/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */ function resolveSlots(children, context) {
    if (!children || !children.length) return {};
    const slots = {};
    for(let i = 0, l = children.length; i < l; i++){
        const child = children[i];
        const data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) delete data.attrs.slot;
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
            const name = data.slot;
            const slot = slots[name] || (slots[name] = []);
            if (child.tag === "template") slot.push.apply(slot, child.children || []);
            else slot.push(child);
        } else (slots.default || (slots.default = [])).push(child);
    }
    // ignore slots that contains only whitespace
    for(const name1 in slots)if (slots[name1].every(isWhitespace)) delete slots[name1];
    return slots;
}
function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === " ";
}
function isAsyncPlaceholder(node) {
    // @ts-expect-error not really boolean type
    return node.isComment && node.asyncFactory;
}
function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
    let res;
    const hasNormalSlots = Object.keys(normalSlots).length > 0;
    const isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
    const key = scopedSlots && scopedSlots.$key;
    if (!scopedSlots) res = {};
    else if (scopedSlots._normalized) // fast path 1: child component re-render only, parent did not change
    return scopedSlots._normalized;
    else if (isStable && prevScopedSlots && prevScopedSlots !== emptyObject && key === prevScopedSlots.$key && !hasNormalSlots && !prevScopedSlots.$hasNormal) // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevScopedSlots;
    else {
        res = {};
        for(const key1 in scopedSlots)if (scopedSlots[key1] && key1[0] !== "$") res[key1] = normalizeScopedSlot(ownerVm, normalSlots, key1, scopedSlots[key1]);
    }
    // expose normal slots on scopedSlots
    for(const key2 in normalSlots)if (!(key2 in res)) res[key2] = proxyNormalSlot(normalSlots, key2);
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (scopedSlots && Object.isExtensible(scopedSlots)) scopedSlots._normalized = res;
    def(res, "$stable", isStable);
    def(res, "$key", key);
    def(res, "$hasNormal", hasNormalSlots);
    return res;
}
function normalizeScopedSlot(vm, normalSlots, key, fn) {
    const normalized = function() {
        const cur = currentInstance;
        setCurrentInstance(vm);
        let res = arguments.length ? fn.apply(null, arguments) : fn({});
        res = res && typeof res === "object" && !isArray(res) ? [
            res
        ] // single vnode
         : normalizeChildren(res);
        const vnode = res && res[0];
        setCurrentInstance(cur);
        return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode) // #9658, #10391
        ) ? undefined : res;
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
    });
    return normalized;
}
function proxyNormalSlot(slots, key) {
    return ()=>slots[key];
}
function initSetup(vm) {
    const options = vm.$options;
    const setup = options.setup;
    if (setup) {
        const ctx = vm._setupContext = createSetupContext(vm);
        setCurrentInstance(vm);
        pushTarget();
        const setupResult = invokeWithErrorHandling(setup, null, [
            vm._props || shallowReactive({}),
            ctx
        ], vm, `setup`);
        popTarget();
        setCurrentInstance();
        if (isFunction(setupResult)) // render function
        // @ts-ignore
        options.render = setupResult;
        else if (isObject(setupResult)) {
            // bindings
            if (setupResult instanceof VNode) warn$2(`setup() should not return VNodes directly - ` + `return a render function instead.`);
            vm._setupState = setupResult;
            // __sfc indicates compiled bindings from <script setup>
            if (!setupResult.__sfc) {
                for(const key in setupResult)if (!isReserved(key)) proxyWithRefUnwrap(vm, setupResult, key);
                else warn$2(`Avoid using variables that start with _ or $ in setup().`);
            } else {
                // exposed for compiled render fn
                const proxy = vm._setupProxy = {};
                for(const key1 in setupResult)if (key1 !== "__sfc") proxyWithRefUnwrap(proxy, setupResult, key1);
            }
        } else if (setupResult !== undefined) warn$2(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    }
}
function createSetupContext(vm) {
    let exposeCalled = false;
    return {
        get attrs () {
            if (!vm._attrsProxy) {
                const proxy = vm._attrsProxy = {};
                def(proxy, "_v_attr_proxy", true);
                syncSetupProxy(proxy, vm.$attrs, emptyObject, vm, "$attrs");
            }
            return vm._attrsProxy;
        },
        get listeners () {
            if (!vm._listenersProxy) {
                const proxy1 = vm._listenersProxy = {};
                syncSetupProxy(proxy1, vm.$listeners, emptyObject, vm, "$listeners");
            }
            return vm._listenersProxy;
        },
        get slots () {
            return initSlotsProxy(vm);
        },
        emit: bind$1(vm.$emit, vm),
        expose (exposed) {
            if (exposeCalled) warn$2(`expose() should be called only once per setup().`, vm);
            exposeCalled = true;
            if (exposed) Object.keys(exposed).forEach((key)=>proxyWithRefUnwrap(vm, exposed, key));
        }
    };
}
function syncSetupProxy(to, from, prev, instance, type) {
    let changed = false;
    for(const key in from){
        if (!(key in to)) {
            changed = true;
            defineProxyAttr(to, key, instance, type);
        } else if (from[key] !== prev[key]) changed = true;
    }
    for(const key1 in to)if (!(key1 in from)) {
        changed = true;
        delete to[key1];
    }
    return changed;
}
function defineProxyAttr(proxy, key, instance, type) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get () {
            return instance[type][key];
        }
    });
}
function initSlotsProxy(vm) {
    if (!vm._slotsProxy) syncSetupSlots(vm._slotsProxy = {}, vm.$scopedSlots);
    return vm._slotsProxy;
}
function syncSetupSlots(to, from) {
    for(const key in from)to[key] = from[key];
    for(const key1 in to)if (!(key1 in from)) delete to[key1];
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */ function useSlots() {
    return getContext().slots;
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */ function useAttrs() {
    return getContext().attrs;
}
/**
 * Vue 2 only
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */ function useListeners() {
    return getContext().listeners;
}
function getContext() {
    if (!currentInstance) warn$2(`useContext() called without active instance.`);
    const vm = currentInstance;
    return vm._setupContext || (vm._setupContext = createSetupContext(vm));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */ function mergeDefaults(raw, defaults) {
    const props = isArray(raw) ? raw.reduce((normalized, p)=>(normalized[p] = {}, normalized), {}) : raw;
    for(const key in defaults){
        const opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) props[key] = {
            default: defaults[key]
        };
        else warn$2(`props default key "${key}" has no corresponding declaration.`);
    }
    return props;
}
function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    const options = vm.$options;
    const parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    const renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = parentVnode ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots) : emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    // @ts-expect-error
    vm._c = (a, b, c, d)=>createElement$1(vm, a, b, c, d, false);
    // normalization is always applied for the public version, used in
    // user-written render functions.
    // @ts-expect-error
    vm.$createElement = (a, b, c, d)=>createElement$1(vm, a, b, c, d, true);
    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    const parentData = parentVnode && parentVnode.data;
    defineReactive(vm, "$attrs", parentData && parentData.attrs || emptyObject, ()=>{
        !isUpdatingChildComponent && warn$2(`$attrs is readonly.`, vm);
    }, true);
    defineReactive(vm, "$listeners", options._parentListeners || emptyObject, ()=>{
        !isUpdatingChildComponent && warn$2(`$listeners is readonly.`, vm);
    }, true);
}
let currentRenderingInstance = null;
function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);
    Vue.prototype.$nextTick = function(fn) {
        return nextTick(fn, this);
    };
    Vue.prototype._render = function() {
        const vm = this;
        const { render , _parentVnode  } = vm.$options;
        if (_parentVnode && vm._isMounted) {
            vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            if (vm._slotsProxy) syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
        }
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        let vnode;
        try {
            // There's no need to maintain a stack because all render fns are called
            // separately from one another. Nested component's render fns are called
            // when parent component is patched.
            setCurrentInstance(vm);
            currentRenderingInstance = vm;
            vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e1) {
            handleError(e1, vm, `render`);
            // return error render result,
            // or previous vnode to prevent render error causing blank component
            /* istanbul ignore else */ if (vm.$options.renderError) try {
                vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e1);
            } catch (e) {
                handleError(e, vm, `renderError`);
                vnode = vm._vnode;
            }
            else vnode = vm._vnode;
        } finally{
            currentRenderingInstance = null;
            setCurrentInstance();
        }
        // if the returned array contains only a single node, allow it
        if (isArray(vnode) && vnode.length === 1) vnode = vnode[0];
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
            if (isArray(vnode)) warn$2("Multiple root nodes returned from render function. Render function should return a single root node.", vm);
            vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode;
    };
}
function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") comp = comp.default;
    return isObject(comp) ? base.extend(comp) : comp;
}
function createAsyncPlaceholder(factory, data, context, children, tag) {
    const node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
        data,
        context,
        children,
        tag
    };
    return node;
}
function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) return factory.errorComp;
    if (isDef(factory.resolved)) return factory.resolved;
    const owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) // already pending
    factory.owners.push(owner);
    if (isTrue(factory.loading) && isDef(factory.loadingComp)) return factory.loadingComp;
    if (owner && !isDef(factory.owners)) {
        const owners = factory.owners = [
            owner
        ];
        let sync = true;
        let timerLoading = null;
        let timerTimeout = null;
        owner.$on("hook:destroyed", ()=>remove$2(owners, owner));
        const forceRender = (renderCompleted)=>{
            for(let i = 0, l = owners.length; i < l; i++)owners[i].$forceUpdate();
            if (renderCompleted) {
                owners.length = 0;
                if (timerLoading !== null) {
                    clearTimeout(timerLoading);
                    timerLoading = null;
                }
                if (timerTimeout !== null) {
                    clearTimeout(timerTimeout);
                    timerTimeout = null;
                }
            }
        };
        const resolve = once((res)=>{
            // cache resolved
            factory.resolved = ensureCtor(res, baseCtor);
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync) forceRender(true);
            else owners.length = 0;
        });
        const reject = once((reason)=>{
            warn$2(`Failed to resolve async component: ${String(factory)}` + (reason ? `\nReason: ${reason}` : ""));
            if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender(true);
            }
        });
        const res = factory(resolve, reject);
        if (isObject(res)) {
            if (isPromise(res)) // () => Promise
            {
                if (isUndef(factory.resolved)) res.then(resolve, reject);
            } else if (isPromise(res.component)) {
                res.component.then(resolve, reject);
                if (isDef(res.error)) factory.errorComp = ensureCtor(res.error, baseCtor);
                if (isDef(res.loading)) {
                    factory.loadingComp = ensureCtor(res.loading, baseCtor);
                    if (res.delay === 0) factory.loading = true;
                    else // @ts-expect-error NodeJS timeout type
                    timerLoading = setTimeout(()=>{
                        timerLoading = null;
                        if (isUndef(factory.resolved) && isUndef(factory.error)) {
                            factory.loading = true;
                            forceRender(false);
                        }
                    }, res.delay || 200);
                }
                if (isDef(res.timeout)) // @ts-expect-error NodeJS timeout type
                timerTimeout = setTimeout(()=>{
                    timerTimeout = null;
                    if (isUndef(factory.resolved)) reject(`timeout (${res.timeout}ms)`);
                }, res.timeout);
            }
        }
        sync = false;
        // return in case resolved synchronously
        return factory.loading ? factory.loadingComp : factory.resolved;
    }
}
function getFirstComponentChild(children) {
    if (isArray(children)) for(let i = 0; i < children.length; i++){
        const c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) return c;
    }
}
function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    const listeners = vm.$options._parentListeners;
    if (listeners) updateComponentListeners(vm, listeners);
}
let target$1;
function add$1(event, fn) {
    target$1.$on(event, fn);
}
function remove$1(event, fn) {
    target$1.$off(event, fn);
}
function createOnceHandler$1(event, fn) {
    const _target = target$1;
    return function onceHandler() {
        const res = fn.apply(null, arguments);
        if (res !== null) _target.$off(event, onceHandler);
    };
}
function updateComponentListeners(vm, listeners, oldListeners) {
    target$1 = vm;
    updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
    target$1 = undefined;
}
function eventsMixin(Vue) {
    const hookRE = /^hook:/;
    Vue.prototype.$on = function(event, fn) {
        const vm = this;
        if (isArray(event)) for(let i = 0, l = event.length; i < l; i++)vm.$on(event[i], fn);
        else {
            (vm._events[event] || (vm._events[event] = [])).push(fn);
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup
            if (hookRE.test(event)) vm._hasHookEvent = true;
        }
        return vm;
    };
    Vue.prototype.$once = function(event, fn) {
        const vm = this;
        function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
    };
    Vue.prototype.$off = function(event, fn) {
        const vm = this;
        // all
        if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
        }
        // array of events
        if (isArray(event)) {
            for(let i = 0, l = event.length; i < l; i++)vm.$off(event[i], fn);
            return vm;
        }
        // specific event
        const cbs = vm._events[event];
        if (!cbs) return vm;
        if (!fn) {
            vm._events[event] = null;
            return vm;
        }
        // specific handler
        let cb;
        let i1 = cbs.length;
        while(i1--){
            cb = cbs[i1];
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i1, 1);
                break;
            }
        }
        return vm;
    };
    Vue.prototype.$emit = function(event) {
        const vm = this;
        {
            const lowerCaseEvent = event.toLowerCase();
            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) tip(`Event "${lowerCaseEvent}" is emitted in component ` + `${formatComponentName(vm)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${hyphenate(event)}" instead of "${event}".`);
        }
        let cbs = vm._events[event];
        if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            const args = toArray(arguments, 1);
            const info = `event handler for "${event}"`;
            for(let i = 0, l = cbs.length; i < l; i++)invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
        return vm;
    };
}
let activeInstance = null;
let isUpdatingChildComponent = false;
function setActiveInstance(vm) {
    const prevActiveInstance = activeInstance;
    activeInstance = vm;
    return ()=>{
        activeInstance = prevActiveInstance;
    };
}
function initLifecycle(vm) {
    const options = vm.$options;
    // locate first non-abstract parent
    let parent = options.parent;
    if (parent && !options.abstract) {
        while(parent.$options.abstract && parent.$parent)parent = parent.$parent;
        parent.$children.push(vm);
    }
    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._provided = parent ? parent._provided : Object.create(null);
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
}
function lifecycleMixin(Vue) {
    Vue.prototype._update = function(vnode, hydrating) {
        const vm = this;
        const prevEl = vm.$el;
        const prevVnode = vm._vnode;
        const restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
        else // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) prevEl.__vue__ = null;
        if (vm.$el) vm.$el.__vue__ = vm;
        // if parent is an HOC, update its $el as well
        let wrapper = vm;
        while(wrapper && wrapper.$vnode && wrapper.$parent && wrapper.$vnode === wrapper.$parent._vnode){
            wrapper.$parent.$el = wrapper.$el;
            wrapper = wrapper.$parent;
        }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
    };
    Vue.prototype.$forceUpdate = function() {
        const vm = this;
        if (vm._watcher) vm._watcher.update();
    };
    Vue.prototype.$destroy = function() {
        const vm = this;
        if (vm._isBeingDestroyed) return;
        callHook$1(vm, "beforeDestroy");
        vm._isBeingDestroyed = true;
        // remove self from parent
        const parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) remove$2(parent.$children, vm);
        // teardown scope. this includes both the render watcher and other
        // watchers created
        vm._scope.stop();
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) vm._data.__ob__.vmCount--;
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook$1(vm, "destroyed");
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) vm.$el.__vue__ = null;
        // release circular reference (#6759)
        if (vm.$vnode) vm.$vnode.parent = null;
    };
}
function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
        // @ts-expect-error invalid type
        vm.$options.render = createEmptyVNode;
        /* istanbul ignore if */ if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) warn$2("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", vm);
        else warn$2("Failed to mount component: template or render function not defined.", vm);
    }
    callHook$1(vm, "beforeMount");
    let updateComponent;
    /* istanbul ignore if */ if (config.performance && mark) updateComponent = ()=>{
        const name = vm._name;
        const id = vm._uid;
        const startTag = `vue-perf-start:${id}`;
        const endTag = `vue-perf-end:${id}`;
        mark(startTag);
        const vnode = vm._render();
        mark(endTag);
        measure(`vue ${name} render`, startTag, endTag);
        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(`vue ${name} patch`, startTag, endTag);
    };
    else updateComponent = ()=>{
        vm._update(vm._render(), hydrating);
    };
    const watcherOptions = {
        before () {
            if (vm._isMounted && !vm._isDestroyed) callHook$1(vm, "beforeUpdate");
        }
    };
    watcherOptions.onTrack = (e)=>callHook$1(vm, "renderTracked", [
            e
        ]);
    watcherOptions.onTrigger = (e)=>callHook$1(vm, "renderTriggered", [
            e
        ]);
    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, watcherOptions, true);
    hydrating = false;
    // flush buffer for flush: "pre" watchers queued in setup()
    const preWatchers = vm._preWatchers;
    if (preWatchers) for(let i = 0; i < preWatchers.length; i++)preWatchers[i].run();
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook$1(vm, "mounted");
    }
    return vm;
}
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    isUpdatingChildComponent = true;
    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    const newScopedSlots = parentVnode.data.scopedSlots;
    const oldScopedSlots = vm.$scopedSlots;
    const hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    let needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);
    const prevVNode = vm.$vnode;
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) // update child tree's parent
    vm._vnode.parent = parentVnode;
    vm.$options._renderChildren = renderChildren;
    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    const attrs = parentVnode.data.attrs || emptyObject;
    if (vm._attrsProxy) // force update if attrs are accessed and has changed since it may be
    // passed to a child component.
    {
        if (syncSetupProxy(vm._attrsProxy, attrs, prevVNode.data && prevVNode.data.attrs || emptyObject, vm, "$attrs")) needsForceUpdate = true;
    }
    vm.$attrs = attrs;
    // update listeners
    listeners = listeners || emptyObject;
    const prevListeners = vm.$options._parentListeners;
    if (vm._listenersProxy) syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, "$listeners");
    vm.$listeners = vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, prevListeners);
    // update props
    if (propsData && vm.$options.props) {
        toggleObserving(false);
        const props = vm._props;
        const propKeys = vm.$options._propKeys || [];
        for(let i = 0; i < propKeys.length; i++){
            const key = propKeys[i];
            const propOptions = vm.$options.props; // wtf flow?
            props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
    }
    // resolve slots + force update if has children
    if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
    }
    isUpdatingChildComponent = false;
}
function isInInactiveTree(vm) {
    while(vm && (vm = vm.$parent)){
        if (vm._inactive) return true;
    }
    return false;
}
function activateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) return;
    } else if (vm._directInactive) return;
    if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for(let i = 0; i < vm.$children.length; i++)activateChildComponent(vm.$children[i]);
        callHook$1(vm, "activated");
    }
}
function deactivateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) return;
    }
    if (!vm._inactive) {
        vm._inactive = true;
        for(let i = 0; i < vm.$children.length; i++)deactivateChildComponent(vm.$children[i]);
        callHook$1(vm, "deactivated");
    }
}
function callHook$1(vm, hook, args, setContext = true) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    const prev = currentInstance;
    setContext && setCurrentInstance(vm);
    const handlers = vm.$options[hook];
    const info = `${hook} hook`;
    if (handlers) for(let i = 0, j = handlers.length; i < j; i++)invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
    if (vm._hasHookEvent) vm.$emit("hook:" + hook);
    setContext && setCurrentInstance(prev);
    popTarget();
}
const MAX_UPDATE_COUNT = 100;
const queue = [];
const activatedChildren = [];
let has = {};
let circular = {};
let waiting = false;
let flushing = false;
let index$1 = 0;
/**
 * Reset the scheduler's state.
 */ function resetSchedulerState() {
    index$1 = queue.length = activatedChildren.length = 0;
    has = {};
    circular = {};
    waiting = flushing = false;
}
// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
let currentFlushTimestamp = 0;
// Async edge case fix requires storing an event listener's attach timestamp.
let getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
    const performance = window.performance;
    if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = ()=>performance.now();
}
const sortCompareFn = (a, b)=>{
    if (a.post) {
        if (!b.post) return 1;
    } else if (b.post) return -1;
    return a.id - b.id;
};
/**
 * Flush both queues and run the watchers.
 */ function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    let watcher, id;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(sortCompareFn);
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for(index$1 = 0; index$1 < queue.length; index$1++){
        watcher = queue[index$1];
        if (watcher.before) watcher.before();
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if (has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > MAX_UPDATE_COUNT) {
                warn$2("You may have an infinite update loop " + (watcher.user ? `in watcher with expression "${watcher.expression}"` : `in a component render function.`), watcher.vm);
                break;
            }
        }
    }
    // keep copies of post queues before resetting state
    const activatedQueue = activatedChildren.slice();
    const updatedQueue = queue.slice();
    resetSchedulerState();
    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);
    cleanupDeps();
    // devtool hook
    /* istanbul ignore if */ if (devtools && config.devtools) devtools.emit("flush");
}
function callUpdatedHooks(queue) {
    let i = queue.length;
    while(i--){
        const watcher = queue[i];
        const vm = watcher.vm;
        if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) callHook$1(vm, "updated");
    }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */ function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
}
function callActivatedHooks(queue) {
    for(let i = 0; i < queue.length; i++){
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true);
    }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */ function queueWatcher(watcher) {
    const id = watcher.id;
    if (has[id] != null) return;
    if (watcher === Dep.target && watcher.noRecurse) return;
    has[id] = true;
    if (!flushing) queue.push(watcher);
    else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        let i = queue.length - 1;
        while(i > index$1 && queue[i].id > watcher.id)i--;
        queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
        waiting = true;
        if (!config.async) {
            flushSchedulerQueue();
            return;
        }
        nextTick(flushSchedulerQueue);
    }
}
const WATCHER = `watcher`;
const WATCHER_CB = `${WATCHER} callback`;
const WATCHER_GETTER = `${WATCHER} getter`;
const WATCHER_CLEANUP = `${WATCHER} cleanup`;
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, Object.assign(Object.assign({}, options), {
        flush: "post"
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, Object.assign(Object.assign({}, options), {
        flush: "sync"
    }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (typeof cb !== "function") warn$2(`\`watch(fn, options?)\` signature has been moved to a separate API. ` + `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` + `supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate , deep , flush ="pre" , onTrack , onTrigger  } = emptyObject) {
    if (!cb) {
        if (immediate !== undefined) warn$2(`watch() "immediate" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
        if (deep !== undefined) warn$2(`watch() "deep" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn$2(`Invalid watch source: ${s}. A watch source can only be a getter/effect ` + `function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    const call = (fn, type, args = null)=>invokeWithErrorHandling(fn, null, args, instance, type);
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = ()=>source.value;
        forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
        getter = ()=>{
            source.__ob__.dep.depend();
            return source;
        };
        deep = true;
    } else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>isReactive(s) || isShallow(s));
        getter = ()=>source.map((s)=>{
                if (isRef(s)) return s.value;
                else if (isReactive(s)) return traverse(s);
                else if (isFunction(s)) return call(s, WATCHER_GETTER);
                else warnInvalidSource(s);
            });
    } else if (isFunction(source)) {
        if (cb) // getter with cb
        getter = ()=>call(source, WATCHER_GETTER);
        else // no cb -> simple effect
        getter = ()=>{
            if (instance && instance._isDestroyed) return;
            if (cleanup) cleanup();
            return call(source, WATCHER, [
                onCleanup
            ]);
        };
    } else {
        getter = noop;
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = watcher.onStop = ()=>{
            call(fn, WATCHER_CLEANUP);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isServerRendering()) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = noop;
        if (!cb) getter();
        else if (immediate) call(cb, WATCHER_CB, [
            getter(),
            isMultiSource ? [] : undefined,
            onCleanup
        ]);
        return noop;
    }
    const watcher = new Watcher(currentInstance, getter, noop, {
        lazy: true
    });
    watcher.noRecurse = !cb;
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    // overwrite default run
    watcher.run = ()=>{
        if (!watcher.active) return;
        if (cb) {
            // watch(source, cb)
            const newValue = watcher.get();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
                // cleanup before running cb again
                if (cleanup) cleanup();
                call(cb, WATCHER_CB, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else // watchEffect
        watcher.get();
    };
    if (flush === "sync") watcher.update = watcher.run;
    else if (flush === "post") {
        watcher.post = true;
        watcher.update = ()=>queueWatcher(watcher);
    } else // pre
    watcher.update = ()=>{
        if (instance && instance === currentInstance && !instance._isMounted) {
            // pre-watcher triggered before
            const buffer = instance._preWatchers || (instance._preWatchers = []);
            if (buffer.indexOf(watcher) < 0) buffer.push(watcher);
        } else queueWatcher(watcher);
    };
    watcher.onTrack = onTrack;
    watcher.onTrigger = onTrigger;
    // initial run
    if (cb) {
        if (immediate) watcher.run();
        else oldValue = watcher.get();
    } else if (flush === "post" && instance) instance.$once("hook:mounted", ()=>watcher.get());
    else watcher.get();
    return ()=>{
        watcher.teardown();
    };
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.detached = detached;
        /**
         * @internal
         */ this.active = true;
        /**
         * @internal
         */ this.effects = [];
        /**
         * @internal
         */ this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
    run(fn) {
        if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn$2(`cannot run an inactive effect scope.`);
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */ on() {
        activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */ off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].teardown();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            // nested scope, dereference from parent to avoid memory leaks
            if (!this.detached && this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = undefined;
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
/**
 * @internal
 */ function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn$2(`onScopeDispose() is called when there is no active effect scope` + ` to be associated with.`);
}
function provide(key, value) {
    if (!currentInstance) warn$2(`provide() can only be used inside setup().`);
    else // TS doesn't allow symbol as index type
    resolveProvided(currentInstance)[key] = value;
}
function resolveProvided(vm) {
    // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.
    const existing = vm._provided;
    const parentProvides = vm.$parent && vm.$parent._provided;
    if (parentProvides === existing) return vm._provided = Object.create(parentProvides);
    else return existing;
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.$parent && instance.$parent._provided;
        if (provides && key in provides) // TS doesn't allow symbol as index type
        return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance) : defaultValue;
        else warn$2(`injection "${String(key)}" not found.`);
    } else warn$2(`inject() can only be used inside setup() or functional components.`);
}
/**
 * @internal this function needs manual public type declaration because it relies
 * on previously manually authored types from Vue 2
 */ function h(type, props, children) {
    if (!currentInstance) warn$2(`globally imported h() can only be invoked when there is an active ` + `component instance, e.g. synchronously in a component's render or setup function.`);
    return createElement$1(currentInstance, type, props, children, 2, true);
}
function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
        if (vm) {
            let cur = vm;
            while(cur = cur.$parent){
                const hooks = cur.$options.errorCaptured;
                if (hooks) {
                    for(let i = 0; i < hooks.length; i++)try {
                        const capture = hooks[i].call(cur, err, vm, info) === false;
                        if (capture) return;
                    } catch (e) {
                        globalHandleError(e, cur, "errorCaptured hook");
                    }
                }
            }
        }
        globalHandleError(err, vm, info);
    } finally{
        popTarget();
    }
}
function invokeWithErrorHandling(handler, context, args, vm, info) {
    let res;
    try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
            res.catch((e)=>handleError(e, vm, info + ` (Promise/async)`));
            res._handled = true;
        }
    } catch (e) {
        handleError(e, vm, info);
    }
    return res;
}
function globalHandleError(err, vm, info) {
    if (config.errorHandler) try {
        return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) logError(e, null, "config.errorHandler");
    }
    logError(err, vm, info);
}
function logError(err, vm, info) {
    warn$2(`Error in ${info}: "${err.toString()}"`, vm);
    /* istanbul ignore else */ if (inBrowser && typeof console !== "undefined") console.error(err);
    else throw err;
}
/* globals MutationObserver */ let isUsingMicroTask = false;
const callbacks = [];
let pending = false;
function flushCallbacks() {
    pending = false;
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for(let i = 0; i < copies.length; i++)copies[i]();
}
// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
let timerFunc;
// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */ if (typeof Promise !== "undefined" && isNative(Promise)) {
    const p = Promise.resolve();
    timerFunc = ()=>{
        p.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) setTimeout(noop);
    };
    isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    let counter = 1;
    const observer = new MutationObserver(flushCallbacks);
    const textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
        characterData: true
    });
    timerFunc = ()=>{
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
    };
    isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) // Fallback to setImmediate.
// Technically it leverages the (macro) task queue,
// but it is still a better choice than setTimeout.
timerFunc = ()=>{
    setImmediate(flushCallbacks);
};
else // Fallback to setTimeout.
timerFunc = ()=>{
    setTimeout(flushCallbacks, 0);
};
/**
 * @internal
 */ function nextTick(cb, ctx) {
    let _resolve;
    callbacks.push(()=>{
        if (cb) try {
            cb.call(ctx);
        } catch (e) {
            handleError(e, ctx, "nextTick");
        }
        else if (_resolve) _resolve(ctx);
    });
    if (!pending) {
        pending = true;
        timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== "undefined") return new Promise((resolve)=>{
        _resolve = resolve;
    });
}
function useCssModule(name = "$style") {
    /* istanbul ignore else */ {
        if (!currentInstance) {
            warn$2(`useCssModule must be called inside setup()`);
            return emptyObject;
        }
        const mod = currentInstance[name];
        if (!mod) {
            warn$2(`Current instance does not have CSS module named "${name}".`);
            return emptyObject;
        }
        return mod;
    }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */ function useCssVars(getter) {
    if (!inBrowser && true) return;
    const instance = currentInstance;
    if (!instance) {
        warn$2(`useCssVars is called without current active component instance.`);
        return;
    }
    watchPostEffect(()=>{
        const el = instance.$el;
        const vars = getter(instance, instance._setupProxy);
        if (el && el.nodeType === 1) {
            const style = el.style;
            for(const key in vars)style.setProperty(`--${key}`, vars[key]);
        }
    });
}
/**
 * v3-compatible async component API.
 * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
 * because it relies on existing manual types
 */ function defineAsyncComponent(source) {
    if (isFunction(source)) source = {
        loader: source
    };
    const { loader , loadingComponent , errorComponent , delay =200 , timeout , suspensible =false , onError: userOnError  } = source;
    if (suspensible) warn$2(`The suspensiblbe option for async components is not supported in Vue2. It is ignored.`);
    let pendingRequest = null;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn$2(`Async component loader resolved to undefined. ` + `If you are using retry(), make sure to return its return value.`);
            // interop module default
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !isObject(comp) && !isFunction(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            return comp;
        }));
    };
    return ()=>{
        const component = load();
        return {
            component,
            delay,
            timeout,
            error: errorComponent,
            loading: loadingComponent
        };
    };
}
function createLifeCycle(hookName) {
    return (fn, target = currentInstance)=>{
        if (!target) {
            warn$2(`${formatName(hookName)} is called when there is no active component instance to be ` + `associated with. ` + `Lifecycle injection APIs can only be used during execution of setup().`);
            return;
        }
        return injectHook(target, hookName, fn);
    };
}
function formatName(name) {
    if (name === "beforeDestroy") name = "beforeUnmount";
    else if (name === "destroyed") name = "unmounted";
    return `on${name[0].toUpperCase() + name.slice(1)}`;
}
function injectHook(instance, hookName, fn) {
    const options = instance.$options;
    options[hookName] = mergeLifecycleHook(options[hookName], fn);
}
const onBeforeMount = createLifeCycle("beforeMount");
const onMounted = createLifeCycle("mounted");
const onBeforeUpdate = createLifeCycle("beforeUpdate");
const onUpdated = createLifeCycle("updated");
const onBeforeUnmount = createLifeCycle("beforeDestroy");
const onUnmounted = createLifeCycle("destroyed");
const onActivated = createLifeCycle("activated");
const onDeactivated = createLifeCycle("deactivated");
const onServerPrefetch = createLifeCycle("serverPrefetch");
const onRenderTracked = createLifeCycle("renderTracked");
const onRenderTriggered = createLifeCycle("renderTriggered");
const injectErrorCapturedHook = createLifeCycle("errorCaptured");
function onErrorCaptured(hook, target = currentInstance) {
    injectErrorCapturedHook(hook, target);
}
/**
 * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
 */ const version = "2.7.14";
/**
 * @internal type is manually declared in <root>/types/v3-define-component.d.ts
 */ function defineComponent(options) {
    return options;
}
var vca = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    version: version,
    defineComponent: defineComponent,
    ref: ref$1,
    shallowRef: shallowRef,
    isRef: isRef,
    toRef: toRef,
    toRefs: toRefs,
    unref: unref,
    proxyRefs: proxyRefs,
    customRef: customRef,
    triggerRef: triggerRef,
    reactive: reactive,
    isReactive: isReactive,
    isReadonly: isReadonly,
    isShallow: isShallow,
    isProxy: isProxy,
    shallowReactive: shallowReactive,
    markRaw: markRaw,
    toRaw: toRaw,
    readonly: readonly,
    shallowReadonly: shallowReadonly,
    computed: computed,
    watch: watch,
    watchEffect: watchEffect,
    watchPostEffect: watchPostEffect,
    watchSyncEffect: watchSyncEffect,
    EffectScope: EffectScope,
    effectScope: effectScope,
    onScopeDispose: onScopeDispose,
    getCurrentScope: getCurrentScope,
    provide: provide,
    inject: inject,
    h: h,
    getCurrentInstance: getCurrentInstance,
    useSlots: useSlots,
    useAttrs: useAttrs,
    useListeners: useListeners,
    mergeDefaults: mergeDefaults,
    nextTick: nextTick,
    set: set,
    del: del,
    useCssModule: useCssModule,
    useCssVars: useCssVars,
    defineAsyncComponent: defineAsyncComponent,
    onBeforeMount: onBeforeMount,
    onMounted: onMounted,
    onBeforeUpdate: onBeforeUpdate,
    onUpdated: onUpdated,
    onBeforeUnmount: onBeforeUnmount,
    onUnmounted: onUnmounted,
    onActivated: onActivated,
    onDeactivated: onDeactivated,
    onServerPrefetch: onServerPrefetch,
    onRenderTracked: onRenderTracked,
    onRenderTriggered: onRenderTriggered,
    onErrorCaptured: onErrorCaptured
});
const seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */ function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
    return val;
}
function _traverse(val, seen) {
    let i, keys;
    const isA = isArray(val);
    if (!isA && !isObject(val) || val.__v_skip /* ReactiveFlags.SKIP */  || Object.isFrozen(val) || val instanceof VNode) return;
    if (val.__ob__) {
        const depId = val.__ob__.dep.id;
        if (seen.has(depId)) return;
        seen.add(depId);
    }
    if (isA) {
        i = val.length;
        while(i--)_traverse(val[i], seen);
    } else if (isRef(val)) _traverse(val.value, seen);
    else {
        keys = Object.keys(val);
        i = keys.length;
        while(i--)_traverse(val[keys[i]], seen);
    }
}
let uid$1 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 * @internal
 */ class Watcher {
    constructor(vm, expOrFn, cb, options, isRenderWatcher){
        recordEffectScope(this, // if the active effect scope is manually created (not a component scope),
        // prioritize it
        activeEffectScope && !activeEffectScope._vm ? activeEffectScope : vm ? vm._scope : undefined);
        if ((this.vm = vm) && isRenderWatcher) vm._watcher = this;
        // options
        if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
            this.onTrack = options.onTrack;
            this.onTrigger = options.onTrigger;
        } else this.deep = this.user = this.lazy = this.sync = false;
        this.cb = cb;
        this.id = ++uid$1; // uid for batching
        this.active = true;
        this.post = false;
        this.dirty = this.lazy; // for lazy watchers
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.expression = expOrFn.toString();
        // parse expression for getter
        if (isFunction(expOrFn)) this.getter = expOrFn;
        else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = noop;
                warn$2(`Failed watching path: "${expOrFn}" ` + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", vm);
            }
        }
        this.value = this.lazy ? undefined : this.get();
    }
    /**
     * Evaluate the getter, and re-collect dependencies.
     */ get() {
        pushTarget(this);
        let value;
        const vm = this.vm;
        try {
            value = this.getter.call(vm, vm);
        } catch (e) {
            if (this.user) handleError(e, vm, `getter for watcher "${this.expression}"`);
            else throw e;
        } finally{
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) traverse(value);
            popTarget();
            this.cleanupDeps();
        }
        return value;
    }
    /**
     * Add a dependency to this directive.
     */ addDep(dep) {
        const id = dep.id;
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) dep.addSub(this);
        }
    }
    /**
     * Clean up for dependency collection.
     */ cleanupDeps() {
        let i = this.deps.length;
        while(i--){
            const dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) dep.removeSub(this);
        }
        let tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
    }
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */ update() {
        /* istanbul ignore else */ if (this.lazy) this.dirty = true;
        else if (this.sync) this.run();
        else queueWatcher(this);
    }
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */ run() {
        if (this.active) {
            const value = this.get();
            if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
            // when the value is the same, because the value may
            // have mutated.
            isObject(value) || this.deep) {
                // set new value
                const oldValue = this.value;
                this.value = value;
                if (this.user) {
                    const info = `callback for watcher "${this.expression}"`;
                    invokeWithErrorHandling(this.cb, this.vm, [
                        value,
                        oldValue
                    ], this.vm, info);
                } else this.cb.call(this.vm, value, oldValue);
            }
        }
    }
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */ evaluate() {
        this.value = this.get();
        this.dirty = false;
    }
    /**
     * Depend on all deps collected by this watcher.
     */ depend() {
        let i = this.deps.length;
        while(i--)this.deps[i].depend();
    }
    /**
     * Remove self from all dependencies' subscriber list.
     */ teardown() {
        if (this.vm && !this.vm._isBeingDestroyed) remove$2(this.vm._scope.effects, this);
        if (this.active) {
            let i = this.deps.length;
            while(i--)this.deps[i].removeSub(this);
            this.active = false;
            if (this.onStop) this.onStop();
        }
    }
}
const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
};
function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function initState(vm) {
    const opts = vm.$options;
    if (opts.props) initProps$1(vm, opts.props);
    // Composition API
    initSetup(vm);
    if (opts.methods) initMethods(vm, opts.methods);
    if (opts.data) initData(vm);
    else {
        const ob = observe(vm._data = {});
        ob && ob.vmCount++;
    }
    if (opts.computed) initComputed$1(vm, opts.computed);
    if (opts.watch && opts.watch !== nativeWatch) initWatch(vm, opts.watch);
}
function initProps$1(vm, propsOptions) {
    const propsData = vm.$options.propsData || {};
    const props = vm._props = shallowReactive({});
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    const keys = vm.$options._propKeys = [];
    const isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) toggleObserving(false);
    for(const key in propsOptions){
        keys.push(key);
        const value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */ {
            const hyphenatedKey = hyphenate(key);
            if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) warn$2(`"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`, vm);
            defineReactive(props, key, value, ()=>{
                if (!isRoot && !isUpdatingChildComponent) warn$2(`Avoid mutating a prop directly since the value will be ` + `overwritten whenever the parent component re-renders. ` + `Instead, use a data or computed property based on the prop's ` + `value. Prop being mutated: "${key}"`, vm);
            });
        }
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) proxy(vm, `_props`, key);
    }
    toggleObserving(true);
}
function initData(vm) {
    let data = vm.$options.data;
    data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
        data = {};
        warn$2("data functions should return an object:\nhttps://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
    }
    // proxy data on instance
    const keys = Object.keys(data);
    const props = vm.$options.props;
    const methods = vm.$options.methods;
    let i = keys.length;
    while(i--){
        const key = keys[i];
        if (methods && hasOwn(methods, key)) warn$2(`Method "${key}" has already been defined as a data property.`, vm);
        if (props && hasOwn(props, key)) warn$2(`The data property "${key}" is already declared as a prop. ` + `Use prop default value instead.`, vm);
        else if (!isReserved(key)) proxy(vm, `_data`, key);
    }
    // observe data
    const ob = observe(data);
    ob && ob.vmCount++;
}
function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
        return data.call(vm, vm);
    } catch (e) {
        handleError(e, vm, `data()`);
        return {};
    } finally{
        popTarget();
    }
}
const computedWatcherOptions = {
    lazy: true
};
function initComputed$1(vm, computed) {
    // $flow-disable-line
    const watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    const isSSR = isServerRendering();
    for(const key in computed){
        const userDef = computed[key];
        const getter = isFunction(userDef) ? userDef : userDef.get;
        if (getter == null) warn$2(`Getter is missing for computed property "${key}".`, vm);
        if (!isSSR) // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) defineComputed(vm, key, userDef);
        else {
            if (key in vm.$data) warn$2(`The computed property "${key}" is already defined in data.`, vm);
            else if (vm.$options.props && key in vm.$options.props) warn$2(`The computed property "${key}" is already defined as a prop.`, vm);
            else if (vm.$options.methods && key in vm.$options.methods) warn$2(`The computed property "${key}" is already defined as a method.`, vm);
        }
    }
}
function defineComputed(target, key, userDef) {
    const shouldCache = !isServerRendering();
    if (isFunction(userDef)) {
        sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
    } else {
        sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) sharedPropertyDefinition.set = function() {
        warn$2(`Computed property "${key}" was assigned to but it has no setter.`, this);
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function createComputedGetter(key) {
    return function computedGetter() {
        const watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
            if (watcher.dirty) watcher.evaluate();
            if (Dep.target) {
                if (Dep.target.onTrack) Dep.target.onTrack({
                    effect: Dep.target,
                    target: this,
                    type: "get" /* TrackOpTypes.GET */ ,
                    key
                });
                watcher.depend();
            }
            return watcher.value;
        }
    };
}
function createGetterInvoker(fn) {
    return function computedGetter() {
        return fn.call(this, this);
    };
}
function initMethods(vm, methods) {
    const props = vm.$options.props;
    for(const key in methods){
        if (typeof methods[key] !== "function") warn$2(`Method "${key}" has type "${typeof methods[key]}" in the component definition. ` + `Did you reference the function correctly?`, vm);
        if (props && hasOwn(props, key)) warn$2(`Method "${key}" has already been defined as a prop.`, vm);
        if (key in vm && isReserved(key)) warn$2(`Method "${key}" conflicts with an existing Vue instance method. ` + `Avoid defining component methods that start with _ or $.`);
        vm[key] = typeof methods[key] !== "function" ? noop : bind$1(methods[key], vm);
    }
}
function initWatch(vm, watch) {
    for(const key in watch){
        const handler = watch[key];
        if (isArray(handler)) for(let i = 0; i < handler.length; i++)createWatcher(vm, key, handler[i]);
        else createWatcher(vm, key, handler);
    }
}
function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === "string") handler = vm[handler];
    return vm.$watch(expOrFn, handler, options);
}
function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    const dataDef = {};
    dataDef.get = function() {
        return this._data;
    };
    const propsDef = {};
    propsDef.get = function() {
        return this._props;
    };
    dataDef.set = function() {
        warn$2("Avoid replacing instance root $data. Use nested data properties instead.", this);
    };
    propsDef.set = function() {
        warn$2(`$props is readonly.`, this);
    };
    Object.defineProperty(Vue.prototype, "$data", dataDef);
    Object.defineProperty(Vue.prototype, "$props", propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;
    Vue.prototype.$watch = function(expOrFn, cb, options) {
        const vm = this;
        if (isPlainObject(cb)) return createWatcher(vm, expOrFn, cb, options);
        options = options || {};
        options.user = true;
        const watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            const info = `callback for immediate watcher "${watcher.expression}"`;
            pushTarget();
            invokeWithErrorHandling(cb, vm, [
                watcher.value
            ], vm, info);
            popTarget();
        }
        return function unwatchFn() {
            watcher.teardown();
        };
    };
}
function initProvide(vm) {
    const provideOption = vm.$options.provide;
    if (provideOption) {
        const provided = isFunction(provideOption) ? provideOption.call(vm) : provideOption;
        if (!isObject(provided)) return;
        const source = resolveProvided(vm);
        // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
        // iterate the keys ourselves.
        const keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
        }
    }
}
function initInjections(vm) {
    const result = resolveInject(vm.$options.inject, vm);
    if (result) {
        toggleObserving(false);
        Object.keys(result).forEach((key)=>{
            defineReactive(vm, key, result[key], ()=>{
                warn$2(`Avoid mutating an injected value directly since the changes will be ` + `overwritten whenever the provided component re-renders. ` + `injection being mutated: "${key}"`, vm);
            });
        });
        toggleObserving(true);
    }
}
function resolveInject(inject, vm) {
    if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        const result = Object.create(null);
        const keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            // #6574 in case the inject object is observed...
            if (key === "__ob__") continue;
            const provideKey = inject[key].from;
            if (provideKey in vm._provided) result[key] = vm._provided[provideKey];
            else if ("default" in inject[key]) {
                const provideDefault = inject[key].default;
                result[key] = isFunction(provideDefault) ? provideDefault.call(vm) : provideDefault;
            } else warn$2(`Injection "${key}" not found`, vm);
        }
        return result;
    }
}
let uid = 0;
function initMixin$1(Vue) {
    Vue.prototype._init = function(options) {
        const vm = this;
        // a uid
        vm._uid = uid++;
        let startTag, endTag;
        /* istanbul ignore if */ if (config.performance && mark) {
            startTag = `vue-perf-start:${vm._uid}`;
            endTag = `vue-perf-end:${vm._uid}`;
            mark(startTag);
        }
        // a flag to mark this as a Vue instance without having to do instanceof
        // check
        vm._isVue = true;
        // avoid instances from being observed
        vm.__v_skip = true;
        // effect scope
        vm._scope = new EffectScope(true);
        vm._scope._vm = true;
        // merge options
        if (options && options._isComponent) // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
        else vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        initProxy(vm);
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook$1(vm, "beforeCreate", undefined, false);
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook$1(vm, "created");
        /* istanbul ignore if */ if (config.performance && mark) {
            vm._name = formatComponentName(vm, false);
            mark(endTag);
            measure(`vue ${vm._name} init`, startTag, endTag);
        }
        if (vm.$options.el) vm.$mount(vm.$options.el);
    };
}
function initInternalComponent(vm, options) {
    const opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    const parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    const vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;
    if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
    }
}
function resolveConstructorOptions(Ctor) {
    let options = Ctor.options;
    if (Ctor.super) {
        const superOptions = resolveConstructorOptions(Ctor.super);
        const cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions;
            // check if there are any late-modified/attached options (#4976)
            const modifiedOptions = resolveModifiedOptions(Ctor);
            // update base extend options
            if (modifiedOptions) extend(Ctor.extendOptions, modifiedOptions);
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
            if (options.name) options.components[options.name] = Ctor;
        }
    }
    return options;
}
function resolveModifiedOptions(Ctor) {
    let modified;
    const latest = Ctor.options;
    const sealed = Ctor.sealedOptions;
    for(const key in latest)if (latest[key] !== sealed[key]) {
        if (!modified) modified = {};
        modified[key] = latest[key];
    }
    return modified;
}
function FunctionalRenderContext(data, props, children, parent, Ctor) {
    const options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    let contextVm;
    if (hasOwn(parent, "_uid")) {
        contextVm = Object.create(parent);
        contextVm._original = parent;
    } else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // @ts-ignore
        parent = parent._original;
    }
    const isCompiled = isTrue(options._compiled);
    const needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = ()=>{
        if (!this.$slots) normalizeScopedSlots(parent, data.scopedSlots, this.$slots = resolveSlots(children, parent));
        return this.$slots;
    };
    Object.defineProperty(this, "scopedSlots", {
        enumerable: true,
        get () {
            return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
        }
    });
    // support for compiled functional template
    if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
    }
    if (options._scopeId) this._c = (a, b, c, d)=>{
        const vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
        if (vnode && !isArray(vnode)) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
        }
        return vnode;
    };
    else this._c = (a, b, c, d)=>createElement$1(contextVm, a, b, c, d, needNormalization);
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    const options = Ctor.options;
    const props = {};
    const propOptions = options.props;
    if (isDef(propOptions)) for(const key in propOptions)props[key] = validateProp(key, propOptions, propsData || emptyObject);
    else {
        if (isDef(data.attrs)) mergeProps(props, data.attrs);
        if (isDef(data.props)) mergeProps(props, data.props);
    }
    const renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    const vnode = options.render.call(null, renderContext._c, renderContext);
    if (vnode instanceof VNode) return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    else if (isArray(vnode)) {
        const vnodes = normalizeChildren(vnode) || [];
        const res = new Array(vnodes.length);
        for(let i = 0; i < vnodes.length; i++)res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        return res;
    }
}
function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    const clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    if (data.slot) (clone.data || (clone.data = {})).slot = data.slot;
    return clone;
}
function mergeProps(to, from) {
    for(const key in from)to[camelize(key)] = from[key];
}
function getComponentName(options) {
    return options.name || options.__name || options._componentTag;
}
// inline hooks to be invoked on component VNodes during patch
const componentVNodeHooks = {
    init (vnode, hydrating) {
        if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
            // kept-alive components, treat as a patch
            const mountedNode = vnode; // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
            const child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
    },
    prepatch (oldVnode, vnode) {
        const options = vnode.componentOptions;
        const child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(child, options.propsData, options.listeners, vnode, options.children // new children
        );
    },
    insert (vnode) {
        const { context , componentInstance  } = vnode;
        if (!componentInstance._isMounted) {
            componentInstance._isMounted = true;
            callHook$1(componentInstance, "mounted");
        }
        if (vnode.data.keepAlive) {
            if (context._isMounted) // vue-router#1212
            // During updates, a kept-alive component's child components may
            // change, so directly walking the tree here may call activated hooks
            // on incorrect children. Instead we push them into a queue which will
            // be processed after the whole patch process ended.
            queueActivatedComponent(componentInstance);
            else activateChildComponent(componentInstance, true);
        }
    },
    destroy (vnode) {
        const { componentInstance  } = vnode;
        if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) componentInstance.$destroy();
            else deactivateChildComponent(componentInstance, true);
        }
    }
};
const hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) return;
    const baseCtor = context.$options._base;
    // plain options object: turn it into a constructor
    if (isObject(Ctor)) Ctor = baseCtor.extend(Ctor);
    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== "function") {
        warn$2(`Invalid Component definition: ${String(Ctor)}`, context);
        return;
    }
    // async component
    let asyncFactory;
    // @ts-expect-error
    if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
    data = data || {};
    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);
    // transform component v-model data into props & events
    if (isDef(data.model)) // @ts-expect-error
    transformModel(Ctor.options, data);
    // extract props
    // @ts-expect-error
    const propsData = extractPropsFromVNodeData(data, Ctor, tag);
    // functional component
    // @ts-expect-error
    if (isTrue(Ctor.options.functional)) return createFunctionalComponent(Ctor, propsData, data, context, children);
    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    const listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;
    // @ts-expect-error
    if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot
        // work around flow
        const slot = data.slot;
        data = {};
        if (slot) data.slot = slot;
    }
    // install component management hooks onto the placeholder node
    installComponentHooks(data);
    // return a placeholder vnode
    // @ts-expect-error
    const name = getComponentName(Ctor.options) || tag;
    const vnode = new VNode(// @ts-expect-error
    `vue-component-${Ctor.cid}${name ? `-${name}` : ""}`, data, undefined, undefined, undefined, context, // @ts-expect-error
    {
        Ctor,
        propsData,
        listeners,
        tag,
        children
    }, asyncFactory);
    return vnode;
}
function createComponentInstanceForVnode(// we know it's MountedComponentVNode but flow doesn't
vnode, // activeInstance in lifecycle state
parent) {
    const options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent
    };
    // check inline-template render functions
    const inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
}
function installComponentHooks(data) {
    const hooks = data.hook || (data.hook = {});
    for(let i = 0; i < hooksToMerge.length; i++){
        const key = hooksToMerge[i];
        const existing = hooks[key];
        const toMerge = componentVNodeHooks[key];
        // @ts-expect-error
        if (existing !== toMerge && !(existing && existing._merged)) hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
    }
}
function mergeHook(f1, f2) {
    const merged = (a, b)=>{
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
    };
    merged._merged = true;
    return merged;
}
// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
    const prop = options.model && options.model.prop || "value";
    const event = options.model && options.model.event || "input";
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    const on = data.on || (data.on = {});
    const existing = on[event];
    const callback = data.model.callback;
    if (isDef(existing)) {
        if (isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) on[event] = [
            callback
        ].concat(existing);
    } else on[event] = callback;
}
let warn$2 = noop;
let tip = noop;
let generateComponentTrace; // work around flow check
let formatComponentName;
{
    const hasConsole = typeof console !== "undefined";
    const classifyRE = /(?:^|[-_])(\w)/g;
    const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
    warn$2 = (msg, vm = currentInstance)=>{
        const trace = vm ? generateComponentTrace(vm) : "";
        if (config.warnHandler) config.warnHandler.call(null, msg, vm, trace);
        else if (hasConsole && !config.silent) console.error(`[Vue warn]: ${msg}${trace}`);
    };
    tip = (msg, vm)=>{
        if (hasConsole && !config.silent) console.warn(`[Vue tip]: ${msg}` + (vm ? generateComponentTrace(vm) : ""));
    };
    formatComponentName = (vm, includeFile)=>{
        if (vm.$root === vm) return "<Root>";
        const options = isFunction(vm) && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
        let name = getComponentName(options);
        const file = options.__file;
        if (!name && file) {
            const match = file.match(/([^/\\]+)\.vue$/);
            name = match && match[1];
        }
        return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : "");
    };
    const repeat = (str, n)=>{
        let res = "";
        while(n){
            if (n % 2 === 1) res += str;
            if (n > 1) str += str;
            n >>= 1;
        }
        return res;
    };
    generateComponentTrace = (vm)=>{
        if (vm._isVue && vm.$parent) {
            const tree = [];
            let currentRecursiveSequence = 0;
            while(vm){
                if (tree.length > 0) {
                    const last = tree[tree.length - 1];
                    if (last.constructor === vm.constructor) {
                        currentRecursiveSequence++;
                        vm = vm.$parent;
                        continue;
                    } else if (currentRecursiveSequence > 0) {
                        tree[tree.length - 1] = [
                            last,
                            currentRecursiveSequence
                        ];
                        currentRecursiveSequence = 0;
                    }
                }
                tree.push(vm);
                vm = vm.$parent;
            }
            return "\n\nfound in\n\n" + tree.map((vm, i)=>`${i === 0 ? "---> " : repeat(" ", 5 + i * 2)}${isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join("\n");
        } else return `\n\n(found in ${formatComponentName(vm)})`;
    };
}/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */ const strats = config.optionMergeStrategies;
strats.el = strats.propsData = function(parent, child, vm, key) {
    if (!vm) warn$2(`option "${key}" can only be used during instance ` + "creation with the `new` keyword.");
    return defaultStrat(parent, child);
};
/**
 * Helper that recursively merges two data objects together.
 */ function mergeData(to, from, recursive = true) {
    if (!from) return to;
    let key, toVal, fromVal;
    const keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for(let i = 0; i < keys.length; i++){
        key = keys[i];
        // in case the object is already observed...
        if (key === "__ob__") continue;
        toVal = to[key];
        fromVal = from[key];
        if (!recursive || !hasOwn(to, key)) set(to, key, fromVal);
        else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) mergeData(toVal, fromVal);
    }
    return to;
}
/**
 * Data
 */ function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) return parentVal;
        if (!parentVal) return childVal;
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn() {
            return mergeData(isFunction(childVal) ? childVal.call(this, this) : childVal, isFunction(parentVal) ? parentVal.call(this, this) : parentVal);
        };
    } else return function mergedInstanceDataFn() {
        // instance merge
        const instanceData = isFunction(childVal) ? childVal.call(vm, vm) : childVal;
        const defaultData = isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal;
        if (instanceData) return mergeData(instanceData, defaultData);
        else return defaultData;
    };
}
strats.data = function(parentVal, childVal, vm) {
    if (!vm) {
        if (childVal && typeof childVal !== "function") {
            warn$2('The "data" option should be a function that returns a per-instance value in component definitions.', vm);
            return parentVal;
        }
        return mergeDataOrFn(parentVal, childVal);
    }
    return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */ function mergeLifecycleHook(parentVal, childVal) {
    const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [
        childVal
    ] : parentVal;
    return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
    const res = [];
    for(let i = 0; i < hooks.length; i++)if (res.indexOf(hooks[i]) === -1) res.push(hooks[i]);
    return res;
}
LIFECYCLE_HOOKS.forEach((hook)=>{
    strats[hook] = mergeLifecycleHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */ function mergeAssets(parentVal, childVal, vm, key) {
    const res = Object.create(parentVal || null);
    if (childVal) {
        assertObjectType(key, childVal, vm);
        return extend(res, childVal);
    } else return res;
}
ASSET_TYPES.forEach(function(type) {
    strats[type + "s"] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */ strats.watch = function(parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    //@ts-expect-error work around
    if (parentVal === nativeWatch) parentVal = undefined;
    //@ts-expect-error work around
    if (childVal === nativeWatch) childVal = undefined;
    /* istanbul ignore if */ if (!childVal) return Object.create(parentVal || null);
    assertObjectType(key, childVal, vm);
    if (!parentVal) return childVal;
    const ret = {};
    extend(ret, parentVal);
    for(const key1 in childVal){
        let parent = ret[key1];
        const child = childVal[key1];
        if (parent && !isArray(parent)) parent = [
            parent
        ];
        ret[key1] = parent ? parent.concat(child) : isArray(child) ? child : [
            child
        ];
    }
    return ret;
};
/**
 * Other object hashes.
 */ strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
    if (childVal && true) assertObjectType(key, childVal, vm);
    if (!parentVal) return childVal;
    const ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) extend(ret, childVal);
    return ret;
};
strats.provide = function(parentVal, childVal) {
    if (!parentVal) return childVal;
    return function() {
        const ret = Object.create(null);
        mergeData(ret, isFunction(parentVal) ? parentVal.call(this) : parentVal);
        if (childVal) mergeData(ret, isFunction(childVal) ? childVal.call(this) : childVal, false // non-recursive
        );
        return ret;
    };
};
/**
 * Default strategy.
 */ const defaultStrat = function(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */ function checkComponents(options) {
    for(const key in options.components)validateComponentName(key);
}
function validateComponentName(name) {
    if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`).test(name)) warn$2('Invalid component name: "' + name + '". Component names ' + "should conform to valid custom element name in html5 specification.");
    if (isBuiltInTag(name) || config.isReservedTag(name)) warn$2("Do not use built-in or reserved HTML elements as component id: " + name);
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */ function normalizeProps(options, vm) {
    const props = options.props;
    if (!props) return;
    const res = {};
    let i, val, name;
    if (isArray(props)) {
        i = props.length;
        while(i--){
            val = props[i];
            if (typeof val === "string") {
                name = camelize(val);
                res[name] = {
                    type: null
                };
            } else warn$2("props must be strings when using array syntax.");
        }
    } else if (isPlainObject(props)) for(const key in props){
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : {
            type: val
        };
    }
    else warn$2(`Invalid value for option "props": expected an Array or an Object, ` + `but got ${toRawType(props)}.`, vm);
    options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */ function normalizeInject(options, vm) {
    const inject = options.inject;
    if (!inject) return;
    const normalized = options.inject = {};
    if (isArray(inject)) for(let i = 0; i < inject.length; i++)normalized[inject[i]] = {
        from: inject[i]
    };
    else if (isPlainObject(inject)) for(const key in inject){
        const val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({
            from: key
        }, val) : {
            from: val
        };
    }
    else warn$2(`Invalid value for option "inject": expected an Array or an Object, ` + `but got ${toRawType(inject)}.`, vm);
}
/**
 * Normalize raw function directives into object format.
 */ function normalizeDirectives$1(options) {
    const dirs = options.directives;
    if (dirs) for(const key in dirs){
        const def = dirs[key];
        if (isFunction(def)) dirs[key] = {
            bind: def,
            update: def
        };
    }
}
function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) warn$2(`Invalid value for option "${name}": expected an Object, ` + `but got ${toRawType(value)}.`, vm);
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */ function mergeOptions(parent, child, vm) {
    checkComponents(child);
    if (isFunction(child)) // @ts-expect-error
    child = child.options;
    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives$1(child);
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
        if (child.extends) parent = mergeOptions(parent, child.extends, vm);
        if (child.mixins) for(let i = 0, l = child.mixins.length; i < l; i++)parent = mergeOptions(parent, child.mixins[i], vm);
    }
    const options = {};
    let key;
    for(key in parent)mergeField(key);
    for(key in child)if (!hasOwn(parent, key)) mergeField(key);
    function mergeField(key) {
        const strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */ function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */ if (typeof id !== "string") return;
    const assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) return assets[id];
    const camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) return assets[camelizedId];
    const PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId];
    // fallback to prototype chain
    const res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) warn$2("Failed to resolve " + type.slice(0, -1) + ": " + id);
    return res;
}
function validateProp(key, propOptions, propsData, vm) {
    const prop = propOptions[key];
    const absent = !hasOwn(propsData, key);
    let value = propsData[key];
    // boolean casting
    const booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, "default")) value = false;
        else if (value === "" || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            const stringIndex = getTypeIndex(String, prop.type);
            if (stringIndex < 0 || booleanIndex < stringIndex) value = true;
        }
    }
    // check default value
    if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        const prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
    }
    assertProp(prop, key, value, vm, absent);
    return value;
}
/**
 * Get the default value of a prop.
 */ function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, "default")) return undefined;
    const def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) warn$2('Invalid default value for prop "' + key + '": ' + "Props with type Object/Array must use a factory function " + "to return the default value.", vm);
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) return vm._props[key];
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return isFunction(def) && getType(prop.type) !== "Function" ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */ function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
        warn$2('Missing required prop: "' + name + '"', vm);
        return;
    }
    if (value == null && !prop.required) return;
    let type = prop.type;
    let valid = !type || type === true;
    const expectedTypes = [];
    if (type) {
        if (!isArray(type)) type = [
            type
        ];
        for(let i = 0; i < type.length && !valid; i++){
            const assertedType = assertType(value, type[i], vm);
            expectedTypes.push(assertedType.expectedType || "");
            valid = assertedType.valid;
        }
    }
    const haveExpectedTypes = expectedTypes.some((t)=>t);
    if (!valid && haveExpectedTypes) {
        warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
        return;
    }
    const validator = prop.validator;
    if (validator) {
        if (!validator(value)) warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
}
const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function assertType(value, type, vm) {
    let valid;
    const expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = isPlainObject(value);
    else if (expectedType === "Array") valid = isArray(value);
    else try {
        valid = value instanceof type;
    } catch (e) {
        warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
        valid = false;
    }
    return {
        valid,
        expectedType
    };
}
const functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */ function getType(fn) {
    const match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : "";
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (!isArray(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    for(let i = 0, len = expectedTypes.length; i < len; i++){
        if (isSameType(expectedTypes[i], type)) return i;
    }
    return -1;
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(capitalize).join(", ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean(expectedType, receivedType)) message += ` with value ${styleValue(value, expectedType)}`;
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) message += `with value ${styleValue(value, receivedType)}.`;
    return message;
}
function styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
const EXPLICABLE_TYPES = [
    "string",
    "number",
    "boolean"
];
function isExplicable(value) {
    return EXPLICABLE_TYPES.some((elem)=>value.toLowerCase() === elem);
}
function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
function Vue(options) {
    if (!(this instanceof Vue)) warn$2("Vue is a constructor and should be called with the `new` keyword");
    this._init(options);
}
//@ts-expect-error Vue has function type
initMixin$1(Vue);
//@ts-expect-error Vue has function type
stateMixin(Vue);
//@ts-expect-error Vue has function type
eventsMixin(Vue);
//@ts-expect-error Vue has function type
lifecycleMixin(Vue);
//@ts-expect-error Vue has function type
renderMixin(Vue);
function initUse(Vue) {
    Vue.use = function(plugin) {
        const installedPlugins = this._installedPlugins || (this._installedPlugins = []);
        if (installedPlugins.indexOf(plugin) > -1) return this;
        // additional parameters
        const args = toArray(arguments, 1);
        args.unshift(this);
        if (isFunction(plugin.install)) plugin.install.apply(plugin, args);
        else if (isFunction(plugin)) plugin.apply(null, args);
        installedPlugins.push(plugin);
        return this;
    };
}
function initMixin(Vue) {
    Vue.mixin = function(mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
    };
}
function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */ Vue.cid = 0;
    let cid = 1;
    /**
     * Class inheritance
     */ Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};
        const Super = this;
        const SuperId = Super.cid;
        const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) return cachedCtors[SuperId];
        const name = getComponentName(extendOptions) || getComponentName(Super.options);
        if (name) validateComponentName(name);
        const Sub = function VueComponent(options) {
            this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub["super"] = Super;
        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) initProps(Sub);
        if (Sub.options.computed) initComputed(Sub);
        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function(type) {
            Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) Sub.options.components[name] = Sub;
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub;
    };
}
function initProps(Comp) {
    const props = Comp.options.props;
    for(const key in props)proxy(Comp.prototype, `_props`, key);
}
function initComputed(Comp) {
    const computed = Comp.options.computed;
    for(const key in computed)defineComputed(Comp.prototype, key, computed[key]);
}
function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */ ASSET_TYPES.forEach((type)=>{
        // @ts-expect-error function is not exact same type
        Vue[type] = function(id, definition) {
            if (!definition) return this.options[type + "s"][id];
            else {
                /* istanbul ignore if */ if (type === "component") validateComponentName(id);
                if (type === "component" && isPlainObject(definition)) {
                    // @ts-expect-error
                    definition.name = definition.name || id;
                    definition = this.options._base.extend(definition);
                }
                if (type === "directive" && isFunction(definition)) definition = {
                    bind: definition,
                    update: definition
                };
                this.options[type + "s"][id] = definition;
                return definition;
            }
        };
    });
}
function _getComponentName(opts) {
    return opts && (getComponentName(opts.Ctor.options) || opts.tag);
}
function matches(pattern, name) {
    if (isArray(pattern)) return pattern.indexOf(name) > -1;
    else if (typeof pattern === "string") return pattern.split(",").indexOf(name) > -1;
    else if (isRegExp(pattern)) return pattern.test(name);
    /* istanbul ignore next */ return false;
}
function pruneCache(keepAliveInstance, filter) {
    const { cache , keys , _vnode  } = keepAliveInstance;
    for(const key in cache){
        const entry = cache[key];
        if (entry) {
            const name = entry.name;
            if (name && !filter(name)) pruneCacheEntry(cache, key, keys, _vnode);
        }
    }
}
function pruneCacheEntry(cache, key, keys, current) {
    const entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) // @ts-expect-error can be undefined
    entry.componentInstance.$destroy();
    cache[key] = null;
    remove$2(keys, key);
}
const patternTypes = [
    String,
    RegExp,
    Array
];
// TODO defineComponent
var KeepAlive = {
    name: "keep-alive",
    abstract: true,
    props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [
            String,
            Number
        ]
    },
    methods: {
        cacheVNode () {
            const { cache , keys , vnodeToCache , keyToCache  } = this;
            if (vnodeToCache) {
                const { tag , componentInstance , componentOptions  } = vnodeToCache;
                cache[keyToCache] = {
                    name: _getComponentName(componentOptions),
                    tag,
                    componentInstance
                };
                keys.push(keyToCache);
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) pruneCacheEntry(cache, keys[0], keys, this._vnode);
                this.vnodeToCache = null;
            }
        }
    },
    created () {
        this.cache = Object.create(null);
        this.keys = [];
    },
    destroyed () {
        for(const key in this.cache)pruneCacheEntry(this.cache, key, this.keys);
    },
    mounted () {
        this.cacheVNode();
        this.$watch("include", (val)=>{
            pruneCache(this, (name)=>matches(val, name));
        });
        this.$watch("exclude", (val)=>{
            pruneCache(this, (name)=>!matches(val, name));
        });
    },
    updated () {
        this.cacheVNode();
    },
    render () {
        const slot = this.$slots.default;
        const vnode = getFirstComponentChild(slot);
        const componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
            // check pattern
            const name = _getComponentName(componentOptions);
            const { include , exclude  } = this;
            if (// not included
            include && (!name || !matches(include, name)) || // excluded
            exclude && name && matches(exclude, name)) return vnode;
            const { cache , keys  } = this;
            const key = vnode.key == null ? // so cid alone is not enough (#3269)
            componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : "") : vnode.key;
            if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                // make current key freshest
                remove$2(keys, key);
                keys.push(key);
            } else {
                // delay setting the cache until update
                this.vnodeToCache = vnode;
                this.keyToCache = key;
            }
            // @ts-expect-error can vnode.data can be undefined
            vnode.data.keepAlive = true;
        }
        return vnode || slot && slot[0];
    }
};
var builtInComponents = {
    KeepAlive
};
function initGlobalAPI(Vue) {
    // config
    const configDef = {};
    configDef.get = ()=>config;
    configDef.set = ()=>{
        warn$2("Do not replace the Vue.config object, set individual fields instead.");
    };
    Object.defineProperty(Vue, "config", configDef);
    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
        warn: warn$2,
        extend,
        mergeOptions,
        defineReactive
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;
    // 2.6 explicit observable API
    Vue.observable = (obj)=>{
        observe(obj);
        return obj;
    };
    Vue.options = Object.create(null);
    ASSET_TYPES.forEach((type)=>{
        Vue.options[type + "s"] = Object.create(null);
    });
    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
}
initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, "$isServer", {
    get: isServerRendering
});
Object.defineProperty(Vue.prototype, "$ssrContext", {
    get () {
        /* istanbul ignore next */ return this.$vnode && this.$vnode.ssrContext;
    }
});
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, "FunctionalRenderContext", {
    value: FunctionalRenderContext
});
Vue.version = version;
// these are reserved for web because they are directly compiled away
// during template compilation
const isReservedAttr = makeMap("style,class");
// attributes that should be using props for binding
const acceptValue = makeMap("input,textarea,option,select,progress");
const mustUseProp = (tag, type, attr)=>{
    return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
};
const isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
const isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
const convertEnumeratedValue = (key, value)=>{
    return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
};
const isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible");
const xlinkNS = "http://www.w3.org/1999/xlink";
const isXlink = (name)=>{
    return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
};
const getXlinkProp = (name)=>{
    return isXlink(name) ? name.slice(6, name.length) : "";
};
const isFalsyAttrValue = (val)=>{
    return val == null || val === false;
};
function genClassForVnode(vnode) {
    let data = vnode.data;
    let parentNode = vnode;
    let childNode = vnode;
    while(isDef(childNode.componentInstance)){
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) data = mergeClassData(childNode.data, data);
    }
    // @ts-expect-error parentNode.parent not VNodeWithData
    while(isDef(parentNode = parentNode.parent))if (parentNode && parentNode.data) data = mergeClassData(data, parentNode.data);
    return renderClass(data.staticClass, data.class);
}
function mergeClassData(child, parent) {
    return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [
            child.class,
            parent.class
        ] : parent.class
    };
}
function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) return concat(staticClass, stringifyClass(dynamicClass));
    /* istanbul ignore next */ return "";
}
function concat(a, b) {
    return a ? b ? a + " " + b : a : b || "";
}
function stringifyClass(value) {
    if (Array.isArray(value)) return stringifyArray(value);
    if (isObject(value)) return stringifyObject(value);
    if (typeof value === "string") return value;
    /* istanbul ignore next */ return "";
}
function stringifyArray(value) {
    let res = "";
    let stringified;
    for(let i = 0, l = value.length; i < l; i++)if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
        if (res) res += " ";
        res += stringified;
    }
    return res;
}
function stringifyObject(value) {
    let res = "";
    for(const key in value)if (value[key]) {
        if (res) res += " ";
        res += key;
    }
    return res;
}
const namespaceMap = {
    svg: "http://www.w3.org/2000/svg",
    math: "http://www.w3.org/1998/Math/MathML"
};
const isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
const isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
const isPreTag = (tag)=>tag === "pre";
const isReservedTag = (tag)=>{
    return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
    if (isSVG(tag)) return "svg";
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === "math") return "math";
}
const unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
    /* istanbul ignore if */ if (!inBrowser) return true;
    if (isReservedTag(tag)) return false;
    tag = tag.toLowerCase();
    /* istanbul ignore if */ if (unknownElementCache[tag] != null) return unknownElementCache[tag];
    const el = document.createElement(tag);
    if (tag.indexOf("-") > -1) // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    else return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
}
const isTextInputType = makeMap("text,number,password,search,email,tel,url");
/**
 * Query an element selector if it's not an element already.
 */ function query(el) {
    if (typeof el === "string") {
        const selected = document.querySelector(el);
        if (!selected) {
            warn$2("Cannot find element: " + el);
            return document.createElement("div");
        }
        return selected;
    } else return el;
}
function createElement(tagName, vnode) {
    const elm = document.createElement(tagName);
    if (tagName !== "select") return elm;
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) elm.setAttribute("multiple", "multiple");
    return elm;
}
function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(node) {
    return node.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, "");
}
var nodeOps = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
});
var ref = {
    create (_, vnode) {
        registerRef(vnode);
    },
    update (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
        }
    },
    destroy (vnode) {
        registerRef(vnode, true);
    }
};
function registerRef(vnode, isRemoval) {
    const ref = vnode.data.ref;
    if (!isDef(ref)) return;
    const vm = vnode.context;
    const refValue = vnode.componentInstance || vnode.elm;
    const value = isRemoval ? null : refValue;
    const $refsValue = isRemoval ? undefined : refValue;
    if (isFunction(ref)) {
        invokeWithErrorHandling(ref, vm, [
            value
        ], vm, `template ref function`);
        return;
    }
    const isFor = vnode.data.refInFor;
    const _isString = typeof ref === "string" || typeof ref === "number";
    const _isRef = isRef(ref);
    const refs = vm.$refs;
    if (_isString || _isRef) {
        if (isFor) {
            const existing = _isString ? refs[ref] : ref.value;
            if (isRemoval) isArray(existing) && remove$2(existing, refValue);
            else {
                if (!isArray(existing)) {
                    if (_isString) {
                        refs[ref] = [
                            refValue
                        ];
                        setSetupRef(vm, ref, refs[ref]);
                    } else ref.value = [
                        refValue
                    ];
                } else if (!existing.includes(refValue)) existing.push(refValue);
            }
        } else if (_isString) {
            if (isRemoval && refs[ref] !== refValue) return;
            refs[ref] = $refsValue;
            setSetupRef(vm, ref, value);
        } else if (_isRef) {
            if (isRemoval && ref.value !== refValue) return;
            ref.value = value;
        } else warn$2(`Invalid template ref type: ${typeof ref}`);
    }
}
function setSetupRef({ _setupState  }, key, val) {
    if (_setupState && hasOwn(_setupState, key)) {
        if (isRef(_setupState[key])) _setupState[key].value = val;
        else _setupState[key] = val;
    }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */ const emptyNode = new VNode("", {}, []);
const hooks = [
    "create",
    "activate",
    "update",
    "remove",
    "destroy"
];
function sameVnode(a, b) {
    return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}
function sameInputType(a, b) {
    if (a.tag !== "input") return true;
    let i;
    const typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    const typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    let i, key;
    const map = {};
    for(i = beginIdx; i <= endIdx; ++i){
        key = children[i].key;
        if (isDef(key)) map[key] = i;
    }
    return map;
}
function createPatchFunction(backend) {
    let i, j;
    const cbs = {};
    const { modules , nodeOps  } = backend;
    for(i = 0; i < hooks.length; ++i){
        cbs[hooks[i]] = [];
        for(j = 0; j < modules.length; ++j)if (isDef(modules[j][hooks[i]])) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
    function emptyNodeAt(elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        function remove() {
            if (--remove.listeners === 0) removeNode(childElm);
        }
        remove.listeners = listeners;
        return remove;
    }
    function removeNode(el) {
        const parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) nodeOps.removeChild(parent, el);
    }
    function isUnknownElement(vnode, inVPre) {
        return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some((ignore)=>{
            return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
        })) && config.isUnknownElement(vnode.tag);
    }
    let creatingElmInVPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
        if (isDef(vnode.elm) && isDef(ownerArray)) // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) return;
        const data = vnode.data;
        const children = vnode.children;
        const tag = vnode.tag;
        if (isDef(tag)) {
            if (data && data.pre) creatingElmInVPre++;
            if (isUnknownElement(vnode, creatingElmInVPre)) warn$2("Unknown custom element: <" + tag + "> - did you " + "register the component correctly? For recursive components, " + 'make sure to provide the "name" option.', vnode.context);
            vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) invokeCreateHooks(vnode, insertedVnodeQueue);
            insert(parentElm, vnode.elm, refElm);
            if (data && data.pre) creatingElmInVPre--;
        } else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        } else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
    }
    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        let i = vnode.data;
        if (isDef(i)) {
            const isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
            if (isDef(i = i.hook) && isDef(i = i.init)) i(vnode, false);
            // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.
            if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                return true;
            }
        }
    }
    function initComponent(vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
            vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
        } else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode);
            // make sure to invoke the insert hook
            insertedVnodeQueue.push(vnode);
        }
    }
    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        let i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        let innerNode = vnode;
        while(innerNode.componentInstance){
            innerNode = innerNode.componentInstance._vnode;
            if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
                for(i = 0; i < cbs.activate.length; ++i)cbs.activate[i](emptyNode, innerNode);
                insertedVnodeQueue.push(innerNode);
                break;
            }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
    }
    function insert(parent, elm, ref) {
        if (isDef(parent)) {
            if (isDef(ref)) {
                if (nodeOps.parentNode(ref) === parent) nodeOps.insertBefore(parent, elm, ref);
            } else nodeOps.appendChild(parent, elm);
        }
    }
    function createChildren(vnode, children, insertedVnodeQueue) {
        if (isArray(children)) {
            checkDuplicateKeys(children);
            for(let i = 0; i < children.length; ++i)createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        } else if (isPrimitive(vnode.text)) nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
    function isPatchable(vnode) {
        while(vnode.componentInstance)vnode = vnode.componentInstance._vnode;
        return isDef(vnode.tag);
    }
    function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for(let i1 = 0; i1 < cbs.create.length; ++i1)cbs.create[i1](emptyNode, vnode);
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
            if (isDef(i.create)) i.create(emptyNode, vnode);
            if (isDef(i.insert)) insertedVnodeQueue.push(vnode);
        }
    }
    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
        let i;
        if (isDef(i = vnode.fnScopeId)) nodeOps.setStyleScope(vnode.elm, i);
        else {
            let ancestor = vnode;
            while(ancestor){
                if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) nodeOps.setStyleScope(vnode.elm, i);
                ancestor = ancestor.parent;
            }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) nodeOps.setStyleScope(vnode.elm, i);
    }
    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for(; startIdx <= endIdx; ++startIdx)createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
    function invokeDestroyHook(vnode) {
        let i, j;
        const data = vnode.data;
        if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
            for(i = 0; i < cbs.destroy.length; ++i)cbs.destroy[i](vnode);
        }
        if (isDef(i = vnode.children)) for(j = 0; j < vnode.children.length; ++j)invokeDestroyHook(vnode.children[j]);
    }
    function removeVnodes(vnodes, startIdx, endIdx) {
        for(; startIdx <= endIdx; ++startIdx){
            const ch = vnodes[startIdx];
            if (isDef(ch)) {
                if (isDef(ch.tag)) {
                    removeAndInvokeRemoveHook(ch);
                    invokeDestroyHook(ch);
                } else // Text node
                removeNode(ch.elm);
            }
        }
    }
    function removeAndInvokeRemoveHook(vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
            let i;
            const listeners = cbs.remove.length + 1;
            if (isDef(rm)) // we have a recursively passed down rm callback
            // increase the listeners count
            rm.listeners += listeners;
            else // directly removing
            rm = createRmCb(vnode.elm, listeners);
            // recursively invoke hooks on child component root node
            if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) removeAndInvokeRemoveHook(i, rm);
            for(i = 0; i < cbs.remove.length; ++i)cbs.remove[i](vnode, rm);
            if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) i(vnode, rm);
            else rm();
        } else removeNode(vnode.elm);
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        let oldStartIdx = 0;
        let newStartIdx = 0;
        let oldEndIdx = oldCh.length - 1;
        let oldStartVnode = oldCh[0];
        let oldEndVnode = oldCh[oldEndIdx];
        let newEndIdx = newCh.length - 1;
        let newStartVnode = newCh[0];
        let newEndVnode = newCh[newEndIdx];
        let oldKeyToIdx, idxInOld, vnodeToMove, refElm;
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        const canMove = !removeOnly;
        checkDuplicateKeys(newCh);
        while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){
            if (isUndef(oldStartVnode)) oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            else if (isUndef(oldEndVnode)) oldEndVnode = oldCh[--oldEndIdx];
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            } else {
                if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) // New element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                else {
                    vnodeToMove = oldCh[idxInOld];
                    if (sameVnode(vnodeToMove, newStartVnode)) {
                        patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                        oldCh[idxInOld] = undefined;
                        canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                    } else // same key but different element. treat as new element
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
    function checkDuplicateKeys(children) {
        const seenKeys = {};
        for(let i = 0; i < children.length; i++){
            const vnode = children[i];
            const key = vnode.key;
            if (isDef(key)) {
                if (seenKeys[key]) warn$2(`Duplicate keys detected: '${key}'. This may cause an update error.`, vnode.context);
                else seenKeys[key] = true;
            }
        }
    }
    function findIdxInOld(node, oldCh, start, end) {
        for(let i = start; i < end; i++){
            const c = oldCh[i];
            if (isDef(c) && sameVnode(node, c)) return i;
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
        if (oldVnode === vnode) return;
        if (isDef(vnode.elm) && isDef(ownerArray)) // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
        const elm = vnode.elm = oldVnode.elm;
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
            else vnode.isAsyncPlaceholder = true;
            return;
        }
        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.componentInstance = oldVnode.componentInstance;
            return;
        }
        let i;
        const data = vnode.data;
        if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) i(oldVnode, vnode);
        const oldCh = oldVnode.children;
        const ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
            for(i = 0; i < cbs.update.length; ++i)cbs.update[i](oldVnode, vnode);
            if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            } else if (isDef(ch)) {
                checkDuplicateKeys(ch);
                if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, "");
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            } else if (isDef(oldCh)) removeVnodes(oldCh, 0, oldCh.length - 1);
            else if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, "");
        } else if (oldVnode.text !== vnode.text) nodeOps.setTextContent(elm, vnode.text);
        if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.postpatch)) i(oldVnode, vnode);
        }
    }
    function invokeInsertHook(vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) vnode.parent.data.pendingInsert = queue;
        else for(let i = 0; i < queue.length; ++i)queue[i].data.hook.insert(queue[i]);
    }
    let hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    const isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
        let i;
        const { tag , data , children  } = vnode;
        inVPre = inVPre || data && data.pre;
        vnode.elm = elm;
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true;
            return true;
        }
        if (!assertNodeMatch(elm, vnode, inVPre)) return false;
        if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode, true);
            if (isDef(i = vnode.componentInstance)) {
                // child component. it should have hydrated its own tree.
                initComponent(vnode, insertedVnodeQueue);
                return true;
            }
        }
        if (isDef(tag)) {
            if (isDef(children)) {
                // empty element, allow client to pick up and populate children
                if (!elm.hasChildNodes()) createChildren(vnode, children, insertedVnodeQueue);
                else {
                    // v-html and domProps: innerHTML
                    if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                        if (i !== elm.innerHTML) {
                            /* istanbul ignore if */ if (typeof console !== "undefined" && !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn("Parent: ", elm);
                                console.warn("server innerHTML: ", i);
                                console.warn("client innerHTML: ", elm.innerHTML);
                            }
                            return false;
                        }
                    } else {
                        // iterate and compare children lists
                        let childrenMatch = true;
                        let childNode = elm.firstChild;
                        for(let i1 = 0; i1 < children.length; i1++){
                            if (!childNode || !hydrate(childNode, children[i1], insertedVnodeQueue, inVPre)) {
                                childrenMatch = false;
                                break;
                            }
                            childNode = childNode.nextSibling;
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            /* istanbul ignore if */ if (typeof console !== "undefined" && !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn("Parent: ", elm);
                                console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                            }
                            return false;
                        }
                    }
                }
            }
            if (isDef(data)) {
                let fullInvoke = false;
                for(const key in data)if (!isRenderedModule(key)) {
                    fullInvoke = true;
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                    break;
                }
                if (!fullInvoke && data["class"]) // ensure collecting deps for deep class bindings for future updates
                traverse(data["class"]);
            }
        } else if (elm.data !== vnode.text) elm.data = vnode.text;
        return true;
    }
    function assertNodeMatch(node, vnode, inVPre) {
        if (isDef(vnode.tag)) return vnode.tag.indexOf("vue-component") === 0 || !isUnknownElement(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
        else return node.nodeType === (vnode.isComment ? 8 : 3);
    }
    return function patch(oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
            if (isDef(oldVnode)) invokeDestroyHook(oldVnode);
            return;
        }
        let isInitialPatch = false;
        const insertedVnodeQueue = [];
        if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
        } else {
            const isRealElement = isDef(oldVnode.nodeType);
            if (!isRealElement && sameVnode(oldVnode, vnode)) // patch existing root node
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
            else {
                if (isRealElement) {
                    // mounting to a real element
                    // check if this is server-rendered content and if we can perform
                    // a successful hydration.
                    if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                        oldVnode.removeAttribute(SSR_ATTR);
                        hydrating = true;
                    }
                    if (isTrue(hydrating)) {
                        if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                            invokeInsertHook(vnode, insertedVnodeQueue, true);
                            return oldVnode;
                        } else warn$2("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                    }
                    // either not server-rendered, or hydration failed.
                    // create an empty node and replace it
                    oldVnode = emptyNodeAt(oldVnode);
                }
                // replacing existing element
                const oldElm = oldVnode.elm;
                const parentElm = nodeOps.parentNode(oldElm);
                // create new node
                createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
                // update parent placeholder node element, recursively
                if (isDef(vnode.parent)) {
                    let ancestor = vnode.parent;
                    const patchable = isPatchable(vnode);
                    while(ancestor){
                        for(let i = 0; i < cbs.destroy.length; ++i)cbs.destroy[i](ancestor);
                        ancestor.elm = vnode.elm;
                        if (patchable) {
                            for(let i1 = 0; i1 < cbs.create.length; ++i1)cbs.create[i1](emptyNode, ancestor);
                            // #6513
                            // invoke insert hooks that may have been merged by create hooks.
                            // e.g. for directives that uses the "inserted" hook.
                            const insert = ancestor.data.hook.insert;
                            if (insert.merged) // start at index 1 to avoid re-invoking component mounted hook
                            for(let i2 = 1; i2 < insert.fns.length; i2++)insert.fns[i2]();
                        } else registerRef(ancestor);
                        ancestor = ancestor.parent;
                    }
                }
                // destroy old node
                if (isDef(parentElm)) removeVnodes([
                    oldVnode
                ], 0, 0);
                else if (isDef(oldVnode.tag)) invokeDestroyHook(oldVnode);
            }
        }
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
    };
}
var directives$1 = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
        // @ts-expect-error emptyNode is not VNodeWithData
        updateDirectives(vnode, emptyNode);
    }
};
function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) _update(oldVnode, vnode);
}
function _update(oldVnode, vnode) {
    const isCreate = oldVnode === emptyNode;
    const isDestroy = vnode === emptyNode;
    const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
    const newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
    const dirsWithInsert = [];
    const dirsWithPostpatch = [];
    let key, oldDir, dir;
    for(key in newDirs){
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
            // new directive, bind
            callHook(dir, "bind", vnode, oldVnode);
            if (dir.def && dir.def.inserted) dirsWithInsert.push(dir);
        } else {
            // existing directive, update
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook(dir, "update", vnode, oldVnode);
            if (dir.def && dir.def.componentUpdated) dirsWithPostpatch.push(dir);
        }
    }
    if (dirsWithInsert.length) {
        const callInsert = ()=>{
            for(let i = 0; i < dirsWithInsert.length; i++)callHook(dirsWithInsert[i], "inserted", vnode, oldVnode);
        };
        if (isCreate) mergeVNodeHook(vnode, "insert", callInsert);
        else callInsert();
    }
    if (dirsWithPostpatch.length) mergeVNodeHook(vnode, "postpatch", ()=>{
        for(let i = 0; i < dirsWithPostpatch.length; i++)callHook(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
    });
    if (!isCreate) {
        for(key in oldDirs)if (!newDirs[key]) // no longer present, unbind
        callHook(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
    }
}
const emptyModifiers = Object.create(null);
function normalizeDirectives(dirs, vm) {
    const res = Object.create(null);
    if (!dirs) // $flow-disable-line
    return res;
    let i, dir;
    for(i = 0; i < dirs.length; i++){
        dir = dirs[i];
        if (!dir.modifiers) // $flow-disable-line
        dir.modifiers = emptyModifiers;
        res[getRawDirName(dir)] = dir;
        if (vm._setupState && vm._setupState.__sfc) {
            const setupDef = dir.def || resolveAsset(vm, "_setupState", "v-" + dir.name);
            if (typeof setupDef === "function") dir.def = {
                bind: setupDef,
                update: setupDef
            };
            else dir.def = setupDef;
        }
        dir.def = dir.def || resolveAsset(vm.$options, "directives", dir.name, true);
    }
    // $flow-disable-line
    return res;
}
function getRawDirName(dir) {
    return dir.rawName || `${dir.name}.${Object.keys(dir.modifiers || {}).join(".")}`;
}
function callHook(dir, hook, vnode, oldVnode, isDestroy) {
    const fn = dir.def && dir.def[hook];
    if (fn) try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
        handleError(e, vnode.context, `directive ${dir.name} ${hook} hook`);
    }
}
var baseModules = [
    ref,
    directives$1
];
function updateAttrs(oldVnode, vnode) {
    const opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) return;
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) return;
    let key, cur, old;
    const elm = vnode.elm;
    const oldAttrs = oldVnode.data.attrs || {};
    let attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__) || isTrue(attrs._v_attr_proxy)) attrs = vnode.data.attrs = extend({}, attrs);
    for(key in attrs){
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) setAttr(elm, key, cur, vnode.data.pre);
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */ if ((isIE || isEdge) && attrs.value !== oldAttrs.value) setAttr(elm, "value", attrs.value);
    for(key in oldAttrs)if (isUndef(attrs[key])) {
        if (isXlink(key)) elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        else if (!isEnumeratedAttr(key)) elm.removeAttribute(key);
    }
}
function setAttr(el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf("-") > -1) baseSetAttr(el, key, value);
    else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) el.removeAttribute(key);
        else {
            // technically allowfullscreen is a boolean attribute for <iframe>,
            // but Flash expects a value of "true" when used on <embed> tag
            value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
            el.setAttribute(key, value);
        }
    } else if (isEnumeratedAttr(key)) el.setAttribute(key, convertEnumeratedValue(key, value));
    else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        else el.setAttributeNS(xlinkNS, key, value);
    } else baseSetAttr(el, key, value);
}
function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) el.removeAttribute(key);
    else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */ if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
            const blocker = (e)=>{
                e.stopImmediatePropagation();
                el.removeEventListener("input", blocker);
            };
            el.addEventListener("input", blocker);
            // $flow-disable-line
            el.__ieph = true; /* IE placeholder patched */ 
        }
        el.setAttribute(key, value);
    }
}
var attrs = {
    create: updateAttrs,
    update: updateAttrs
};
function updateClass(oldVnode, vnode) {
    const el = vnode.elm;
    const data = vnode.data;
    const oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) return;
    let cls = genClassForVnode(vnode);
    // handle transition classes
    const transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) cls = concat(cls, stringifyClass(transitionClass));
    // set the class
    if (cls !== el._prevClass) {
        el.setAttribute("class", cls);
        el._prevClass = cls;
    }
}
var klass$1 = {
    create: updateClass,
    update: updateClass
};
const validDivisionCharRE = /[\w).+\-_$\]]/;
function parseFilters(exp) {
    let inSingle = false;
    let inDouble = false;
    let inTemplateString = false;
    let inRegex = false;
    let curly = 0;
    let square = 0;
    let paren = 0;
    let lastFilterIndex = 0;
    let c, prev, i, expression, filters;
    for(i = 0; i < exp.length; i++){
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
            if (c === 0x27 && prev !== 0x5c) inSingle = false;
        } else if (inDouble) {
            if (c === 0x22 && prev !== 0x5c) inDouble = false;
        } else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5c) inTemplateString = false;
        } else if (inRegex) {
            if (c === 0x2f && prev !== 0x5c) inRegex = false;
        } else if (c === 0x7c && // pipe
        exp.charCodeAt(i + 1) !== 0x7c && exp.charCodeAt(i - 1) !== 0x7c && !curly && !square && !paren) {
            if (expression === undefined) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
            } else pushFilter();
        } else {
            switch(c){
                case 0x22:
                    inDouble = true;
                    break; // "
                case 0x27:
                    inSingle = true;
                    break; // '
                case 0x60:
                    inTemplateString = true;
                    break; // `
                case 0x28:
                    paren++;
                    break; // (
                case 0x29:
                    paren--;
                    break; // )
                case 0x5b:
                    square++;
                    break; // [
                case 0x5d:
                    square--;
                    break; // ]
                case 0x7b:
                    curly++;
                    break; // {
                case 0x7d:
                    curly--;
                    break; // }
            }
            if (c === 0x2f) {
                // /
                let j = i - 1;
                let p;
                // find first non-whitespace prev char
                for(; j >= 0; j--){
                    p = exp.charAt(j);
                    if (p !== " ") break;
                }
                if (!p || !validDivisionCharRE.test(p)) inRegex = true;
            }
        }
    }
    if (expression === undefined) expression = exp.slice(0, i).trim();
    else if (lastFilterIndex !== 0) pushFilter();
    function pushFilter() {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
    }
    if (filters) for(i = 0; i < filters.length; i++)expression = wrapFilter(expression, filters[i]);
    return expression;
}
function wrapFilter(exp, filter) {
    const i = filter.indexOf("(");
    if (i < 0) // _f: resolveFilter
    return `_f("${filter}")(${exp})`;
    else {
        const name = filter.slice(0, i);
        const args = filter.slice(i + 1);
        return `_f("${name}")(${exp}${args !== ")" ? "," + args : args}`;
    }
}
/* eslint-disable no-unused-vars */ function baseWarn(msg, range) {
    console.error(`[Vue compiler]: ${msg}`);
}
/* eslint-enable no-unused-vars */ function pluckModuleFunction(modules, key) {
    return modules ? modules.map((m)=>m[key]).filter((_)=>_) : [];
}
function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({
        name,
        value,
        dynamic
    }, range));
    el.plain = false;
}
function addAttr(el, name, value, range, dynamic) {
    const attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({
        name,
        value,
        dynamic
    }, range));
    el.plain = false;
}
// add a raw attr (use this in preTransforms)
function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({
        name,
        value
    }, range));
}
function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
        name,
        rawName,
        value,
        arg,
        isDynamicArg,
        modifiers
    }, range));
    el.plain = false;
}
function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? `_p(${name},"${symbol}")` : symbol + name; // mark the event as captured
}
function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */ if (warn && modifiers.prevent && modifiers.passive) warn("passive and prevent can't be used together. Passive handler can't prevent default event.", range);
    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
        if (dynamic) name = `(${name})==='click'?'contextmenu':(${name})`;
        else if (name === "click") {
            name = "contextmenu";
            delete modifiers.right;
        }
    } else if (modifiers.middle) {
        if (dynamic) name = `(${name})==='click'?'mouseup':(${name})`;
        else if (name === "click") name = "mouseup";
    }
    // check capture modifier
    if (modifiers.capture) {
        delete modifiers.capture;
        name = prependModifierMarker("!", name, dynamic);
    }
    if (modifiers.once) {
        delete modifiers.once;
        name = prependModifierMarker("~", name, dynamic);
    }
    /* istanbul ignore if */ if (modifiers.passive) {
        delete modifiers.passive;
        name = prependModifierMarker("&", name, dynamic);
    }
    let events;
    if (modifiers.native) {
        delete modifiers.native;
        events = el.nativeEvents || (el.nativeEvents = {});
    } else events = el.events || (el.events = {});
    const newHandler = rangeSetItem({
        value: value.trim(),
        dynamic
    }, range);
    if (modifiers !== emptyObject) newHandler.modifiers = modifiers;
    const handlers = events[name];
    /* istanbul ignore if */ if (Array.isArray(handlers)) important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    else if (handlers) events[name] = important ? [
        newHandler,
        handlers
    ] : [
        handlers,
        newHandler
    ];
    else events[name] = newHandler;
    el.plain = false;
}
function getRawBindingAttr(el, name) {
    return el.rawAttrsMap[":" + name] || el.rawAttrsMap["v-bind:" + name] || el.rawAttrsMap[name];
}
function getBindingAttr(el, name, getStatic) {
    const dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
    if (dynamicValue != null) return parseFilters(dynamicValue);
    else if (getStatic !== false) {
        const staticValue = getAndRemoveAttr(el, name);
        if (staticValue != null) return JSON.stringify(staticValue);
    }
}
// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el, name, removeFromMap) {
    let val;
    if ((val = el.attrsMap[name]) != null) {
        const list = el.attrsList;
        for(let i = 0, l = list.length; i < l; i++)if (list[i].name === name) {
            list.splice(i, 1);
            break;
        }
    }
    if (removeFromMap) delete el.attrsMap[name];
    return val;
}
function getAndRemoveAttrByRegex(el, name) {
    const list = el.attrsList;
    for(let i = 0, l = list.length; i < l; i++){
        const attr = list[i];
        if (name.test(attr.name)) {
            list.splice(i, 1);
            return attr;
        }
    }
}
function rangeSetItem(item, range) {
    if (range) {
        if (range.start != null) item.start = range.start;
        if (range.end != null) item.end = range.end;
    }
    return item;
}
/**
 * Cross-platform code generation for component v-model
 */ function genComponentModel(el, value, modifiers) {
    const { number , trim  } = modifiers || {};
    const baseValueExpression = "$$v";
    let valueExpression = baseValueExpression;
    if (trim) valueExpression = `(typeof ${baseValueExpression} === 'string'` + `? ${baseValueExpression}.trim()` + `: ${baseValueExpression})`;
    if (number) valueExpression = `_n(${valueExpression})`;
    const assignment = genAssignmentCode(value, valueExpression);
    el.model = {
        value: `(${value})`,
        expression: JSON.stringify(value),
        callback: `function (${baseValueExpression}) {${assignment}}`
    };
}
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */ function genAssignmentCode(value, assignment) {
    const res = parseModel(value);
    if (res.key === null) return `${value}=${assignment}`;
    else return `$set(${res.exp}, ${res.key}, ${assignment})`;
}
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */ let len, str, chr, index, expressionPos, expressionEndPos;
function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;
    if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
        index = val.lastIndexOf(".");
        if (index > -1) return {
            exp: val.slice(0, index),
            key: '"' + val.slice(index + 1) + '"'
        };
        else return {
            exp: val,
            key: null
        };
    }
    str = val;
    index = expressionPos = expressionEndPos = 0;
    while(!eof()){
        chr = next();
        /* istanbul ignore if */ if (isStringStart(chr)) parseString(chr);
        else if (chr === 0x5b) parseBracket(chr);
    }
    return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
    };
}
function next() {
    return str.charCodeAt(++index);
}
function eof() {
    return index >= len;
}
function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
}
function parseBracket(chr) {
    let inBracket = 1;
    expressionPos = index;
    while(!eof()){
        chr = next();
        if (isStringStart(chr)) {
            parseString(chr);
            continue;
        }
        if (chr === 0x5b) inBracket++;
        if (chr === 0x5d) inBracket--;
        if (inBracket === 0) {
            expressionEndPos = index;
            break;
        }
    }
}
function parseString(chr) {
    const stringQuote = chr;
    while(!eof()){
        chr = next();
        if (chr === stringQuote) break;
    }
}
let warn$1;
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
const RANGE_TOKEN = "__r";
const CHECKBOX_RADIO_TOKEN = "__c";
function model$1(el, dir, _warn) {
    warn$1 = _warn;
    const value = dir.value;
    const modifiers = dir.modifiers;
    const tag = el.tag;
    const type = el.attrsMap.type;
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === "input" && type === "file") warn$1(`<${el.tag} v-model="${value}" type="file">:\n` + `File inputs are read only. Use a v-on:change listener instead.`, el.rawAttrsMap["v-model"]);
    if (el.component) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    } else if (tag === "select") genSelect(el, value, modifiers);
    else if (tag === "input" && type === "checkbox") genCheckboxModel(el, value, modifiers);
    else if (tag === "input" && type === "radio") genRadioModel(el, value, modifiers);
    else if (tag === "input" || tag === "textarea") genDefaultModel(el, value, modifiers);
    else if (!config.isReservedTag(tag)) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    } else warn$1(`<${el.tag} v-model="${value}">: ` + `v-model is not supported on this element type. ` + "If you are working with contenteditable, it's recommended to " + "wrap a library dedicated for that purpose inside a custom component.", el.rawAttrsMap["v-model"]);
    // ensure runtime directive metadata
    return true;
}
function genCheckboxModel(el, value, modifiers) {
    const number = modifiers && modifiers.number;
    const valueBinding = getBindingAttr(el, "value") || "null";
    const trueValueBinding = getBindingAttr(el, "true-value") || "true";
    const falseValueBinding = getBindingAttr(el, "false-value") || "false";
    addProp(el, "checked", `Array.isArray(${value})` + `?_i(${value},${valueBinding})>-1` + (trueValueBinding === "true" ? `:(${value})` : `:_q(${value},${trueValueBinding})`));
    addHandler(el, "change", `var $$a=${value},` + "$$el=$event.target," + `$$c=$$el.checked?(${trueValueBinding}):(${falseValueBinding});` + "if(Array.isArray($$a)){" + `var $$v=${number ? "_n(" + valueBinding + ")" : valueBinding},` + "$$i=_i($$a,$$v);" + `if($$el.checked){$$i<0&&(${genAssignmentCode(value, "$$a.concat([$$v])")})}` + `else{$$i>-1&&(${genAssignmentCode(value, "$$a.slice(0,$$i).concat($$a.slice($$i+1))")})}` + `}else{${genAssignmentCode(value, "$$c")}}`, null, true);
}
function genRadioModel(el, value, modifiers) {
    const number = modifiers && modifiers.number;
    let valueBinding = getBindingAttr(el, "value") || "null";
    valueBinding = number ? `_n(${valueBinding})` : valueBinding;
    addProp(el, "checked", `_q(${value},${valueBinding})`);
    addHandler(el, "change", genAssignmentCode(value, valueBinding), null, true);
}
function genSelect(el, value, modifiers) {
    const number = modifiers && modifiers.number;
    const selectedVal = `Array.prototype.filter` + `.call($event.target.options,function(o){return o.selected})` + `.map(function(o){var val = "_value" in o ? o._value : o.value;` + `return ${number ? "_n(val)" : "val"}})`;
    const assignment = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
    let code = `var $$selectedVal = ${selectedVal};`;
    code = `${code} ${genAssignmentCode(value, assignment)}`;
    addHandler(el, "change", code, null, true);
}
function genDefaultModel(el, value, modifiers) {
    const type = el.attrsMap.type;
    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
        const value1 = el.attrsMap["v-bind:value"] || el.attrsMap[":value"];
        const typeBinding = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];
        if (value1 && !typeBinding) {
            const binding = el.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
            warn$1(`${binding}="${value1}" conflicts with v-model on the same element ` + "because the latter already expands to a value binding internally", el.rawAttrsMap[binding]);
        }
    }
    const { lazy , number , trim  } = modifiers || {};
    const needCompositionGuard = !lazy && type !== "range";
    const event = lazy ? "change" : type === "range" ? RANGE_TOKEN : "input";
    let valueExpression = "$event.target.value";
    if (trim) valueExpression = `$event.target.value.trim()`;
    if (number) valueExpression = `_n(${valueExpression})`;
    let code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) code = `if($event.target.composing)return;${code}`;
    addProp(el, "value", `(${value})`);
    addHandler(el, event, code, null, true);
    if (trim || number) addHandler(el, "blur", "$forceUpdate()");
}
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
    /* istanbul ignore if */ if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        const event = isIE ? "change" : "input";
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */ if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
    }
}
let target;
function createOnceHandler(event, handler, capture) {
    const _target = target; // save current target element in closure
    return function onceHandler() {
        const res = handler.apply(null, arguments);
        if (res !== null) remove(event, onceHandler, capture, _target);
    };
}
// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
const useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
function add(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
        const attachedTimestamp = currentFlushTimestamp;
        const original = handler;
        //@ts-expect-error
        handler = original._wrapper = function(e) {
            if (// no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget || // event is fired after handler attachment
            e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
            // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
            // #9681 QtWebEngine event.timeStamp is negative value
            e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
            // electron/nw.js app, since event.timeStamp will be using a different
            // starting reference
            e.target.ownerDocument !== document) return original.apply(this, arguments);
        };
    }
    target.addEventListener(name, handler, supportsPassive ? {
        capture,
        passive
    } : capture);
}
function remove(name, handler, capture, _target) {
    (_target || target).removeEventListener(name, //@ts-expect-error
    handler._wrapper || handler, capture);
}
function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) return;
    const on = vnode.data.on || {};
    const oldOn = oldVnode.data.on || {};
    // vnode is empty when removing all listeners,
    // and use old vnode dom element
    target = vnode.elm || oldVnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
    target = undefined;
}
var events = {
    create: updateDOMListeners,
    update: updateDOMListeners,
    // @ts-expect-error emptyNode has actually data
    destroy: (vnode)=>updateDOMListeners(vnode, emptyNode)
};
let svgContainer;
function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) return;
    let key, cur;
    const elm = vnode.elm;
    const oldProps = oldVnode.data.domProps || {};
    let props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__) || isTrue(props._v_attr_proxy)) props = vnode.data.domProps = extend({}, props);
    for(key in oldProps)if (!(key in props)) elm[key] = "";
    for(key in props){
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === "textContent" || key === "innerHTML") {
            if (vnode.children) vnode.children.length = 0;
            if (cur === oldProps[key]) continue;
            // #6601 work around Chrome version <= 55 bug where single textNode
            // replaced by innerHTML/textContent retains its parentNode property
            if (elm.childNodes.length === 1) elm.removeChild(elm.childNodes[0]);
        }
        if (key === "value" && elm.tagName !== "PROGRESS") {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur;
            // avoid resetting cursor position when value is the same
            const strCur = isUndef(cur) ? "" : String(cur);
            if (shouldUpdateValue(elm, strCur)) elm.value = strCur;
        } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
            // IE doesn't support innerHTML for SVG elements
            svgContainer = svgContainer || document.createElement("div");
            svgContainer.innerHTML = `<svg>${cur}</svg>`;
            const svg = svgContainer.firstChild;
            while(elm.firstChild)elm.removeChild(elm.firstChild);
            while(svg.firstChild)elm.appendChild(svg.firstChild);
        } else if (// skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]) // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
            elm[key] = cur;
        } catch (e) {}
    }
}
function shouldUpdateValue(elm, checkVal) {
    return(//@ts-expect-error
    !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal)));
}
function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    let notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
        notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
}
function isDirtyWithModifiers(elm, newVal1) {
    const value = elm.value;
    const modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
        if (modifiers.number) return toNumber(value) !== toNumber(newVal1);
        if (modifiers.trim) return value.trim() !== newVal1.trim();
    }
    return value !== newVal1;
}
var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
};
const parseStyleText = cached(function(cssText) {
    const res = {};
    const listDelimiter = /;(?![^(]*\))/g;
    const propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function(item) {
        if (item) {
            const tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return res;
});
// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
    const style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
}
// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) return toObject(bindingStyle);
    if (typeof bindingStyle === "string") return parseStyleText(bindingStyle);
    return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */ function getStyle(vnode, checkChild) {
    const res = {};
    let styleData;
    if (checkChild) {
        let childNode = vnode;
        while(childNode.componentInstance){
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) extend(res, styleData);
        }
    }
    if (styleData = normalizeStyleData(vnode.data)) extend(res, styleData);
    let parentNode = vnode;
    // @ts-expect-error parentNode.parent not VNodeWithData
    while(parentNode = parentNode.parent)if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) extend(res, styleData);
    return res;
}
const cssVarRE = /^--/;
const importantRE = /\s*!important$/;
const setProp = (el, name, val)=>{
    /* istanbul ignore if */ if (cssVarRE.test(name)) el.style.setProperty(name, val);
    else if (importantRE.test(val)) el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
    else {
        const normalizedName = normalize(name);
        if (Array.isArray(val)) // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for(let i = 0, len = val.length; i < len; i++)el.style[normalizedName] = val[i];
        else el.style[normalizedName] = val;
    }
};
const vendorNames = [
    "Webkit",
    "Moz",
    "ms"
];
let emptyStyle;
const normalize = cached(function(prop) {
    emptyStyle = emptyStyle || document.createElement("div").style;
    prop = camelize(prop);
    if (prop !== "filter" && prop in emptyStyle) return prop;
    const capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for(let i = 0; i < vendorNames.length; i++){
        const name = vendorNames[i] + capName;
        if (name in emptyStyle) return name;
    }
});
function updateStyle(oldVnode, vnode) {
    const data = vnode.data;
    const oldData = oldVnode.data;
    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) return;
    let cur, name;
    const el = vnode.elm;
    const oldStaticStyle = oldData.staticStyle;
    const oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    const oldStyle = oldStaticStyle || oldStyleBinding;
    const style = normalizeStyleBinding(vnode.data.style) || {};
    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    const newStyle = getStyle(vnode, true);
    for(name in oldStyle)if (isUndef(newStyle[name])) setProp(el, name, "");
    for(name in newStyle){
        cur = newStyle[name];
        if (cur !== oldStyle[name]) // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? "" : cur);
    }
}
var style$1 = {
    create: updateStyle,
    update: updateStyle
};
const whitespaceRE$1 = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */ function addClass(el, cls) {
    /* istanbul ignore if */ if (!cls || !(cls = cls.trim())) return;
    /* istanbul ignore else */ if (el.classList) {
        if (cls.indexOf(" ") > -1) cls.split(whitespaceRE$1).forEach((c)=>el.classList.add(c));
        else el.classList.add(cls);
    } else {
        const cur = ` ${el.getAttribute("class") || ""} `;
        if (cur.indexOf(" " + cls + " ") < 0) el.setAttribute("class", (cur + cls).trim());
    }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */ function removeClass(el, cls) {
    /* istanbul ignore if */ if (!cls || !(cls = cls.trim())) return;
    /* istanbul ignore else */ if (el.classList) {
        if (cls.indexOf(" ") > -1) cls.split(whitespaceRE$1).forEach((c)=>el.classList.remove(c));
        else el.classList.remove(cls);
        if (!el.classList.length) el.removeAttribute("class");
    } else {
        let cur = ` ${el.getAttribute("class") || ""} `;
        const tar = " " + cls + " ";
        while(cur.indexOf(tar) >= 0)cur = cur.replace(tar, " ");
        cur = cur.trim();
        if (cur) el.setAttribute("class", cur);
        else el.removeAttribute("class");
    }
}
function resolveTransition(def) {
    if (!def) return;
    /* istanbul ignore else */ if (typeof def === "object") {
        const res = {};
        if (def.css !== false) extend(res, autoCssTransition(def.name || "v"));
        extend(res, def);
        return res;
    } else if (typeof def === "string") return autoCssTransition(def);
}
const autoCssTransition = cached((name)=>{
    return {
        enterClass: `${name}-enter`,
        enterToClass: `${name}-enter-to`,
        enterActiveClass: `${name}-enter-active`,
        leaveClass: `${name}-leave`,
        leaveToClass: `${name}-leave-to`,
        leaveActiveClass: `${name}-leave-active`
    };
});
const hasTransition = inBrowser && !isIE9;
const TRANSITION = "transition";
const ANIMATION = "animation";
// Transition property/event sniffing
let transitionProp = "transition";
let transitionEndEvent = "transitionend";
let animationProp = "animation";
let animationEndEvent = "animationend";
if (hasTransition) {
    /* istanbul ignore if */ if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        transitionProp = "WebkitTransition";
        transitionEndEvent = "webkitTransitionEnd";
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        animationProp = "WebkitAnimation";
        animationEndEvent = "webkitAnimationEnd";
    }
}
// binding to window is necessary to make hot reload work in IE in strict mode
const raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */ /* istanbul ignore next */ (fn)=>fn();
function nextFrame(fn) {
    raf(()=>{
        // @ts-expect-error
        raf(fn);
    });
}
function addTransitionClass(el, cls) {
    const transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
    }
}
function removeTransitionClass(el, cls) {
    if (el._transitionClasses) remove$2(el._transitionClasses, cls);
    removeClass(el, cls);
}
function whenTransitionEnds(el, expectedType, cb) {
    const { type , timeout , propCount  } = getTransitionInfo(el, expectedType);
    if (!type) return cb();
    const event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(event, onEnd);
        cb();
    };
    const onEnd = (e)=>{
        if (e.target === el) {
            if (++ended >= propCount) end();
        }
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(event, onEnd);
}
const transformRE = /\b(transform|all)(,|$)/;
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
    const transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
    const animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */ if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    /* istanbul ignore next */ while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max.apply(null, durations.map((d, i)=>{
        return toMs(d) + toMs(delays[i]);
    }));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(",", ".")) * 1000;
}
function enter(vnode, toggleDisplay) {
    const el = vnode.elm;
    // call leave callback now
    if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
    }
    const data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) return;
    /* istanbul ignore if */ if (isDef(el._enterCb) || el.nodeType !== 1) return;
    const { css , type , enterClass , enterToClass , enterActiveClass , appearClass , appearToClass , appearActiveClass , beforeEnter , enter , afterEnter , enterCancelled , beforeAppear , appear , afterAppear , appearCancelled , duration  } = data;
    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    let context = activeInstance;
    let transitionNode = activeInstance.$vnode;
    while(transitionNode && transitionNode.parent){
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
    }
    const isAppear = !context._isMounted || !vnode.isRootInsert;
    if (isAppear && !appear && appear !== "") return;
    const startClass = isAppear && appearClass ? appearClass : enterClass;
    const activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    const toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    const beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    const enterHook = isAppear ? isFunction(appear) ? appear : enter : enter;
    const afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    const enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
    const explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
    if (explicitEnterDuration != null) checkDuration(explicitEnterDuration, "enter", vnode);
    const expectsCSS = css !== false && !isIE9;
    const userWantsControl = getHookArgumentsLength(enterHook);
    const cb = el._enterCb = once(()=>{
        if (expectsCSS) {
            removeTransitionClass(el, toClass);
            removeTransitionClass(el, activeClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) removeTransitionClass(el, startClass);
            enterCancelledHook && enterCancelledHook(el);
        } else afterEnterHook && afterEnterHook(el);
        el._enterCb = null;
    });
    if (!vnode.data.show) // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, "insert", ()=>{
        const parent = el.parentNode;
        const pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) pendingNode.elm._leaveCb();
        enterHook && enterHook(el, cb);
    });
    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(()=>{
            removeTransitionClass(el, startClass);
            // @ts-expect-error
            if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                    if (isValidDuration(explicitEnterDuration)) setTimeout(cb, explicitEnterDuration);
                    else whenTransitionEnds(el, type, cb);
                }
            }
        });
    }
    if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
    }
    if (!expectsCSS && !userWantsControl) cb();
}
function leave(vnode, rm) {
    const el = vnode.elm;
    // call enter callback now
    if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
    }
    const data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) return rm();
    /* istanbul ignore if */ if (isDef(el._leaveCb)) return;
    const { css , type , leaveClass , leaveToClass , leaveActiveClass , beforeLeave , leave , afterLeave , leaveCancelled , delayLeave , duration  } = data;
    const expectsCSS = css !== false && !isIE9;
    const userWantsControl = getHookArgumentsLength(leave);
    const explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
    if (isDef(explicitLeaveDuration)) checkDuration(explicitLeaveDuration, "leave", vnode);
    const cb = el._leaveCb = once(()=>{
        if (el.parentNode && el.parentNode._pending) el.parentNode._pending[vnode.key] = null;
        if (expectsCSS) {
            removeTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveActiveClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) removeTransitionClass(el, leaveClass);
            leaveCancelled && leaveCancelled(el);
        } else {
            rm();
            afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
    });
    if (delayLeave) delayLeave(performLeave);
    else performLeave();
    function performLeave() {
        // the delayed leave may have already been cancelled
        // @ts-expect-error
        if (cb.cancelled) return;
        // record leaving element
        if (!vnode.data.show && el.parentNode) (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(()=>{
                removeTransitionClass(el, leaveClass);
                // @ts-expect-error
                if (!cb.cancelled) {
                    addTransitionClass(el, leaveToClass);
                    if (!userWantsControl) {
                        if (isValidDuration(explicitLeaveDuration)) setTimeout(cb, explicitLeaveDuration);
                        else whenTransitionEnds(el, type, cb);
                    }
                }
            });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) cb();
    }
}
// only used in dev mode
function checkDuration(val, name, vnode) {
    if (typeof val !== "number") warn$2(`<transition> explicit ${name} duration is not a valid number - ` + `got ${JSON.stringify(val)}.`, vnode.context);
    else if (isNaN(val)) warn$2(`<transition> explicit ${name} duration is NaN - ` + "the duration expression might be incorrect.", vnode.context);
}
function isValidDuration(val) {
    return typeof val === "number" && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */ function getHookArgumentsLength(fn) {
    if (isUndef(fn)) return false;
    // @ts-expect-error
    const invokerFns = fn.fns;
    if (isDef(invokerFns)) // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    else // @ts-expect-error
    return (fn._length || fn.length) > 1;
}
function _enter(_, vnode) {
    if (vnode.data.show !== true) enter(vnode);
}
var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove (vnode, rm) {
        /* istanbul ignore else */ if (vnode.data.show !== true) // @ts-expect-error
        leave(vnode, rm);
        else rm();
    }
} : {};
var platformModules = [
    attrs,
    klass$1,
    events,
    domProps,
    style$1,
    transition
];
// the directive module should be applied last, after all
// built-in modules have been applied.
const modules$1 = platformModules.concat(baseModules);
const patch = createPatchFunction({
    nodeOps,
    modules: modules$1
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */ /* istanbul ignore if */ if (isIE9) // http://www.matts411.com/post/internet-explorer-9-oninput/
document.addEventListener("selectionchange", ()=>{
    const el = document.activeElement;
    // @ts-expect-error
    if (el && el.vmodel) trigger(el, "input");
});
const directive = {
    inserted (el, binding, vnode, oldVnode) {
        if (vnode.tag === "select") {
            // #6903
            if (oldVnode.elm && !oldVnode.elm._vOptions) mergeVNodeHook(vnode, "postpatch", ()=>{
                directive.componentUpdated(el, binding, vnode);
            });
            else setSelected(el, binding, vnode.context);
            el._vOptions = [].map.call(el.options, getValue);
        } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers;
            if (!binding.modifiers.lazy) {
                el.addEventListener("compositionstart", onCompositionStart);
                el.addEventListener("compositionend", onCompositionEnd);
                // Safari < 10.2 & UIWebView doesn't fire compositionend when
                // switching focus before confirming composition choice
                // this also fixes the issue where some browsers e.g. iOS Chrome
                // fires "change" instead of "input" on autocomplete.
                el.addEventListener("change", onCompositionEnd);
                /* istanbul ignore if */ if (isIE9) el.vmodel = true;
            }
        }
    },
    componentUpdated (el, binding, vnode) {
        if (vnode.tag === "select") {
            setSelected(el, binding, vnode.context);
            // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.
            const prevOptions = el._vOptions;
            const curOptions = el._vOptions = [].map.call(el.options, getValue);
            if (curOptions.some((o, i)=>!looseEqual(o, prevOptions[i]))) {
                // trigger change event if
                // no matching option found for at least one value
                const needReset = el.multiple ? binding.value.some((v)=>hasNoMatchingOption(v, curOptions)) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
                if (needReset) trigger(el, "change");
            }
        }
    }
};
function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */ if (isIE || isEdge) setTimeout(()=>{
        actuallySetSelected(el, binding, vm);
    }, 0);
}
function actuallySetSelected(el, binding, vm) {
    const value = binding.value;
    const isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
        warn$2(`<select multiple v-model="${binding.expression}"> ` + `expects an Array value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}`, vm);
        return;
    }
    let selected, option;
    for(let i = 0, l = el.options.length; i < l; i++){
        option = el.options[i];
        if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) option.selected = selected;
        } else if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple) el.selectedIndex = -1;
}
function hasNoMatchingOption(value, options) {
    return options.every((o)=>!looseEqual(o, value));
}
function getValue(option) {
    return "_value" in option ? option._value : option.value;
}
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) return;
    e.target.composing = false;
    trigger(e.target, "input");
}
function trigger(el, type) {
    const e = document.createEvent("HTMLEvents");
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
    // @ts-expect-error
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}
var show = {
    bind (el, { value  }, vnode) {
        vnode = locateNode(vnode);
        const transition = vnode.data && vnode.data.transition;
        const originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
        if (value && transition) {
            vnode.data.show = true;
            enter(vnode, ()=>{
                el.style.display = originalDisplay;
            });
        } else el.style.display = value ? originalDisplay : "none";
    },
    update (el, { value , oldValue  }, vnode) {
        /* istanbul ignore if */ if (!value === !oldValue) return;
        vnode = locateNode(vnode);
        const transition = vnode.data && vnode.data.transition;
        if (transition) {
            vnode.data.show = true;
            if (value) enter(vnode, ()=>{
                el.style.display = el.__vOriginalDisplay;
            });
            else leave(vnode, ()=>{
                el.style.display = "none";
            });
        } else el.style.display = value ? el.__vOriginalDisplay : "none";
    },
    unbind (el, binding, vnode, oldVnode, isDestroy) {
        if (!isDestroy) el.style.display = el.__vOriginalDisplay;
    }
};
var platformDirectives = {
    model: directive,
    show
};
// Provides transition support for a single element/component.
const transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [
        Number,
        String,
        Object
    ]
};
// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
    const compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) return getRealChild(getFirstComponentChild(compOptions.children));
    else return vnode;
}
function extractTransitionData(comp) {
    const data = {};
    const options = comp.$options;
    // props
    for(const key in options.propsData)data[key] = comp[key];
    // events.
    // extract listeners and pass them directly to the transition methods
    const listeners = options._parentListeners;
    for(const key1 in listeners)data[camelize(key1)] = listeners[key1];
    return data;
}
function placeholder(h, rawChild) {
    // @ts-expect-error
    if (/\d-keep-alive$/.test(rawChild.tag)) return h("keep-alive", {
        props: rawChild.componentOptions.propsData
    });
}
function hasParentTransition(vnode) {
    while(vnode = vnode.parent){
        if (vnode.data.transition) return true;
    }
}
function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
}
const isNotTextNode = (c)=>c.tag || isAsyncPlaceholder(c);
const isVShowDirective = (d)=>d.name === "show";
var Transition = {
    name: "transition",
    props: transitionProps,
    abstract: true,
    render (h) {
        let children = this.$slots.default;
        if (!children) return;
        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */ if (!children.length) return;
        // warn multiple elements
        if (children.length > 1) warn$2("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
        const mode = this.mode;
        // warn invalid mode
        if (mode && mode !== "in-out" && mode !== "out-in") warn$2("invalid <transition> mode: " + mode, this.$parent);
        const rawChild = children[0];
        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) return rawChild;
        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        const child = getRealChild(rawChild);
        /* istanbul ignore if */ if (!child) return rawChild;
        if (this._leaving) return placeholder(h, rawChild);
        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        const id = `__transition-${this._uid}-`;
        child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
        const data = (child.data || (child.data = {})).transition = extractTransitionData(this);
        const oldRawChild = this._vnode;
        const oldChild = getRealChild(oldRawChild);
        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) child.data.show = true;
        if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            const oldData = oldChild.data.transition = extend({}, data);
            // handle transition mode
            if (mode === "out-in") {
                // return placeholder node and queue update when leave finishes
                this._leaving = true;
                mergeVNodeHook(oldData, "afterLeave", ()=>{
                    this._leaving = false;
                    this.$forceUpdate();
                });
                return placeholder(h, rawChild);
            } else if (mode === "in-out") {
                if (isAsyncPlaceholder(child)) return oldRawChild;
                let delayedLeave;
                const performLeave = ()=>{
                    delayedLeave();
                };
                mergeVNodeHook(data, "afterEnter", performLeave);
                mergeVNodeHook(data, "enterCancelled", performLeave);
                mergeVNodeHook(oldData, "delayLeave", (leave)=>{
                    delayedLeave = leave;
                });
            }
        }
        return rawChild;
    }
};
// Provides transition support for list items.
const props = extend({
    tag: String,
    moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
    props,
    beforeMount () {
        const update = this._update;
        this._update = (vnode, hydrating)=>{
            const restoreActiveInstance = setActiveInstance(this);
            // force removing pass
            this.__patch__(this._vnode, this.kept, false, true // removeOnly (!important, avoids unnecessary moves)
            );
            this._vnode = this.kept;
            restoreActiveInstance();
            update.call(this, vnode, hydrating);
        };
    },
    render (h) {
        const tag = this.tag || this.$vnode.data.tag || "span";
        const map = Object.create(null);
        const prevChildren = this.prevChildren = this.children;
        const rawChildren = this.$slots.default || [];
        const children = this.children = [];
        const transitionData = extractTransitionData(this);
        for(let i = 0; i < rawChildren.length; i++){
            const c = rawChildren[i];
            if (c.tag) {
                if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                    children.push(c);
                    map[c.key] = c;
                    (c.data || (c.data = {})).transition = transitionData;
                } else {
                    const opts = c.componentOptions;
                    const name = opts ? getComponentName(opts.Ctor.options) || opts.tag || "" : c.tag;
                    warn$2(`<transition-group> children must be keyed: <${name}>`);
                }
            }
        }
        if (prevChildren) {
            const kept = [];
            const removed = [];
            for(let i1 = 0; i1 < prevChildren.length; i1++){
                const c1 = prevChildren[i1];
                c1.data.transition = transitionData;
                // @ts-expect-error .getBoundingClientRect is not typed in Node
                c1.data.pos = c1.elm.getBoundingClientRect();
                if (map[c1.key]) kept.push(c1);
                else removed.push(c1);
            }
            this.kept = h(tag, null, kept);
            this.removed = removed;
        }
        return h(tag, null, children);
    },
    updated () {
        const children = this.prevChildren;
        const moveClass = this.moveClass || (this.name || "v") + "-move";
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) return;
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;
        children.forEach((c)=>{
            if (c.data.moved) {
                const el = c.elm;
                const s = el.style;
                addTransitionClass(el, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = "";
                el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener(transitionEndEvent, cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
            }
        });
    },
    methods: {
        hasMove (el, moveClass) {
            /* istanbul ignore if */ if (!hasTransition) return false;
            /* istanbul ignore if */ if (this._hasMove) return this._hasMove;
            // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.
            const clone = el.cloneNode();
            if (el._transitionClasses) el._transitionClasses.forEach((cls)=>{
                removeClass(clone, cls);
            });
            addClass(clone, moveClass);
            clone.style.display = "none";
            this.$el.appendChild(clone);
            const info = getTransitionInfo(clone);
            this.$el.removeChild(clone);
            return this._hasMove = info.hasTransform;
        }
    }
};
function callPendingCbs(c) {
    /* istanbul ignore if */ if (c.elm._moveCb) c.elm._moveCb();
    /* istanbul ignore if */ if (c.elm._enterCb) c.elm._enterCb();
}
function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
}
function applyTranslation(c) {
    const oldPos = c.data.pos;
    const newPos = c.data.newPos;
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        c.data.moved = true;
        const s = c.elm.style;
        s.transform = s.WebkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
    }
}
var platformComponents = {
    Transition,
    TransitionGroup
};
// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;
// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);
// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;
// public mount method
Vue.prototype.$mount = function(el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
};
// devtools global hook
/* istanbul ignore next */ if (inBrowser) setTimeout(()=>{
    if (config.devtools) {
        if (devtools) devtools.emit("init", Vue);
        else // @ts-expect-error
        console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
    }
    if (config.productionTip !== false && typeof console !== "undefined") // @ts-expect-error
    console[console.info ? "info" : "log"](`You are running Vue in development mode.\n` + `Make sure to turn on production mode when deploying for production.\n` + `See more tips at https://vuejs.org/guide/deployment.html`);
}, 0);
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
const buildRegex = cached((delimiters)=>{
    const open = delimiters[0].replace(regexEscapeRE, "\\$&");
    const close = delimiters[1].replace(regexEscapeRE, "\\$&");
    return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
});
function parseText(text, delimiters) {
    //@ts-expect-error
    const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) return;
    const tokens = [];
    const rawTokens = [];
    let lastIndex = tagRE.lastIndex = 0;
    let match, index, tokenValue;
    while(match = tagRE.exec(text)){
        index = match.index;
        // push text token
        if (index > lastIndex) {
            rawTokens.push(tokenValue = text.slice(lastIndex, index));
            tokens.push(JSON.stringify(tokenValue));
        }
        // tag token
        const exp = parseFilters(match[1].trim());
        tokens.push(`_s(${exp})`);
        rawTokens.push({
            "@binding": exp
        });
        lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
        rawTokens.push(tokenValue = text.slice(lastIndex));
        tokens.push(JSON.stringify(tokenValue));
    }
    return {
        expression: tokens.join("+"),
        tokens: rawTokens
    };
}
function transformNode$1(el, options) {
    const warn = options.warn || baseWarn;
    const staticClass = getAndRemoveAttr(el, "class");
    if (staticClass) {
        const res = parseText(staticClass, options.delimiters);
        if (res) warn(`class="${staticClass}": ` + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap["class"]);
    }
    if (staticClass) el.staticClass = JSON.stringify(staticClass.replace(/\s+/g, " ").trim());
    const classBinding = getBindingAttr(el, "class", false);
    if (classBinding) el.classBinding = classBinding;
}
function genData$2(el) {
    let data = "";
    if (el.staticClass) data += `staticClass:${el.staticClass},`;
    if (el.classBinding) data += `class:${el.classBinding},`;
    return data;
}
var klass = {
    staticKeys: [
        "staticClass"
    ],
    transformNode: transformNode$1,
    genData: genData$2
};
function transformNode(el, options) {
    const warn = options.warn || baseWarn;
    const staticStyle = getAndRemoveAttr(el, "style");
    if (staticStyle) {
        /* istanbul ignore if */ {
            const res = parseText(staticStyle, options.delimiters);
            if (res) warn(`style="${staticStyle}": ` + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap["style"]);
        }
        el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }
    const styleBinding = getBindingAttr(el, "style", false);
    if (styleBinding) el.styleBinding = styleBinding;
}
function genData$1(el) {
    let data = "";
    if (el.staticStyle) data += `staticStyle:${el.staticStyle},`;
    if (el.styleBinding) data += `style:(${el.styleBinding}),`;
    return data;
}
var style = {
    staticKeys: [
        "staticStyle"
    ],
    transformNode,
    genData: genData$1
};
let decoder;
var he = {
    decode (html) {
        decoder = decoder || document.createElement("div");
        decoder.innerHTML = html;
        return decoder.textContent;
    }
};
const isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr");
// Elements that you can, intentionally, leave open
// (and which close themselves)
const canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
const isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track");
/**
 * Not type-checking this file because it's mostly vendor code.
 */ // Regular Expressions for parsing tags and attributes
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeRegExp.source}]*`;
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);
const doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
const comment = /^<!\--/;
const conditionalComment = /^<!\[/;
// Special Elements (can contain anything)
const isPlainTextElement = makeMap("script,style,textarea", true);
const reCache = {};
const decodingMap = {
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&amp;": "&",
    "&#10;": "\n",
    "&#9;": "	",
    "&#39;": "'"
};
const encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
const encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
// #5992
const isIgnoreNewlineTag = makeMap("pre,textarea", true);
const shouldIgnoreFirstNewline = (tag, html)=>tag && isIgnoreNewlineTag(tag) && html[0] === "\n";
function decodeAttr(value, shouldDecodeNewlines) {
    const re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, (match)=>decodingMap[match]);
}
function parseHTML(html, options) {
    const stack = [];
    const expectHTML = options.expectHTML;
    const isUnaryTag = options.isUnaryTag || no;
    const canBeLeftOpenTag = options.canBeLeftOpenTag || no;
    let index = 0;
    let last, lastTag;
    while(html){
        last = html;
        // Make sure we're not in a plaintext content element like script/style
        if (!lastTag || !isPlainTextElement(lastTag)) {
            let textEnd = html.indexOf("<");
            if (textEnd === 0) {
                // Comment:
                if (comment.test(html)) {
                    const commentEnd = html.indexOf("-->");
                    if (commentEnd >= 0) {
                        if (options.shouldKeepComment && options.comment) options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                        advance(commentEnd + 3);
                        continue;
                    }
                }
                // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                if (conditionalComment.test(html)) {
                    const conditionalEnd = html.indexOf("]>");
                    if (conditionalEnd >= 0) {
                        advance(conditionalEnd + 2);
                        continue;
                    }
                }
                // Doctype:
                const doctypeMatch = html.match(doctype);
                if (doctypeMatch) {
                    advance(doctypeMatch[0].length);
                    continue;
                }
                // End tag:
                const endTagMatch = html.match(endTag);
                if (endTagMatch) {
                    const curIndex = index;
                    advance(endTagMatch[0].length);
                    parseEndTag(endTagMatch[1], curIndex, index);
                    continue;
                }
                // Start tag:
                const startTagMatch = parseStartTag();
                if (startTagMatch) {
                    handleStartTag(startTagMatch);
                    if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) advance(1);
                    continue;
                }
            }
            let text, rest, next;
            if (textEnd >= 0) {
                rest = html.slice(textEnd);
                while(!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)){
                    // < in plain text, be forgiving and treat it as text
                    next = rest.indexOf("<", 1);
                    if (next < 0) break;
                    textEnd += next;
                    rest = html.slice(textEnd);
                }
                text = html.substring(0, textEnd);
            }
            if (textEnd < 0) text = html;
            if (text) advance(text.length);
            if (options.chars && text) options.chars(text, index - text.length, index);
        } else {
            let endTagLength = 0;
            const stackedTag = lastTag.toLowerCase();
            const reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i"));
            const rest1 = html.replace(reStackedTag, function(all, text, endTag) {
                endTagLength = endTag.length;
                if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") text = text.replace(/<!\--([\s\S]*?)-->/g, "$1") // #7298
                .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                if (shouldIgnoreFirstNewline(stackedTag, text)) text = text.slice(1);
                if (options.chars) options.chars(text);
                return "";
            });
            index += html.length - rest1.length;
            html = rest1;
            parseEndTag(stackedTag, index - endTagLength, index);
        }
        if (html === last) {
            options.chars && options.chars(html);
            if (!stack.length && options.warn) options.warn(`Mal-formatted tag at end of template: "${html}"`, {
                start: index + html.length
            });
            break;
        }
    }
    // Clean up any remaining tags
    parseEndTag();
    function advance(n) {
        index += n;
        html = html.substring(n);
    }
    function parseStartTag() {
        const start = html.match(startTagOpen);
        if (start) {
            const match = {
                tagName: start[1],
                attrs: [],
                start: index
            };
            advance(start[0].length);
            let end, attr;
            while(!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))){
                attr.start = index;
                advance(attr[0].length);
                attr.end = index;
                match.attrs.push(attr);
            }
            if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index;
                return match;
            }
        }
    }
    function handleStartTag(match) {
        const tagName = match.tagName;
        const unarySlash = match.unarySlash;
        if (expectHTML) {
            if (lastTag === "p" && isNonPhrasingTag(tagName)) parseEndTag(lastTag);
            if (canBeLeftOpenTag(tagName) && lastTag === tagName) parseEndTag(tagName);
        }
        const unary = isUnaryTag(tagName) || !!unarySlash;
        const l = match.attrs.length;
        const attrs = new Array(l);
        for(let i = 0; i < l; i++){
            const args = match.attrs[i];
            const value = args[3] || args[4] || args[5] || "";
            const shouldDecodeNewlines = tagName === "a" && args[1] === "href" ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
            attrs[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines)
            };
            if (options.outputSourceRange) {
                attrs[i].start = args.start + args[0].match(/^\s*/).length;
                attrs[i].end = args.end;
            }
        }
        if (!unary) {
            stack.push({
                tag: tagName,
                lowerCasedTag: tagName.toLowerCase(),
                attrs: attrs,
                start: match.start,
                end: match.end
            });
            lastTag = tagName;
        }
        if (options.start) options.start(tagName, attrs, unary, match.start, match.end);
    }
    function parseEndTag(tagName, start, end) {
        let pos, lowerCasedTagName;
        if (start == null) start = index;
        if (end == null) end = index;
        // Find the closest opened tag of the same type
        if (tagName) {
            lowerCasedTagName = tagName.toLowerCase();
            for(pos = stack.length - 1; pos >= 0; pos--){
                if (stack[pos].lowerCasedTag === lowerCasedTagName) break;
            }
        } else // If no tag name is provided, clean shop
        pos = 0;
        if (pos >= 0) {
            // Close all the open elements, up the stack
            for(let i = stack.length - 1; i >= pos; i--){
                if ((i > pos || !tagName) && options.warn) options.warn(`tag <${stack[i].tag}> has no matching end tag.`, {
                    start: stack[i].start,
                    end: stack[i].end
                });
                if (options.end) options.end(stack[i].tag, start, end);
            }
            // Remove the open elements from the stack
            stack.length = pos;
            lastTag = pos && stack[pos - 1].tag;
        } else if (lowerCasedTagName === "br") {
            if (options.start) options.start(tagName, [], true, start, end);
        } else if (lowerCasedTagName === "p") {
            if (options.start) options.start(tagName, [], false, start, end);
            if (options.end) options.end(tagName, start, end);
        }
    }
}
const onRE = /^@|^v-on:/;
const dirRE = /^v-|^@|^:|^#/;
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
const dynamicArgRE = /^\[.*\]$/;
const argRE = /:(.*)$/;
const bindRE = /^:|^\.|^v-bind:/;
const modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
const slotRE = /^v-slot(:|$)|^#/;
const lineBreakRE = /[\r\n]/;
const whitespaceRE = /[ \f\t\r\n]+/g;
const invalidAttributeRE = /[\s"'<>\/=]/;
const decodeHTMLCached = cached(he.decode);
const emptySlotScopeToken = `_empty_`;
// configurable state
let warn;
let delimiters;
let transforms;
let preTransforms;
let postTransforms;
let platformIsPreTag;
let platformMustUseProp;
let platformGetTagNamespace;
let maybeComponent;
function createASTElement(tag, attrs, parent) {
    return {
        type: 1,
        tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        rawAttrsMap: {},
        parent,
        children: []
    };
}
/**
 * Convert HTML string to AST.
 */ function parse(template, options) {
    warn = options.warn || baseWarn;
    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    const isReservedTag = options.isReservedTag || no;
    maybeComponent = (el)=>!!(el.component || el.attrsMap[":is"] || el.attrsMap["v-bind:is"] || !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag)));
    transforms = pluckModuleFunction(options.modules, "transformNode");
    preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
    postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
    delimiters = options.delimiters;
    const stack = [];
    const preserveWhitespace = options.preserveWhitespace !== false;
    const whitespaceOption = options.whitespace;
    let root;
    let currentParent;
    let inVPre = false;
    let inPre = false;
    let warned = false;
    function warnOnce(msg, range) {
        if (!warned) {
            warned = true;
            warn(msg, range);
        }
    }
    function closeElement(element) {
        trimEndingWhitespace(element);
        if (!inVPre && !element.processed) element = processElement(element, options);
        // tree management
        if (!stack.length && element !== root) {
            // allow root elements with v-if, v-else-if and v-else
            if (root.if && (element.elseif || element.else)) {
                checkRootConstraints(element);
                addIfCondition(root, {
                    exp: element.elseif,
                    block: element
                });
            } else warnOnce(`Component template should contain exactly one root element. ` + `If you are using v-if on multiple elements, ` + `use v-else-if to chain them instead.`, {
                start: element.start
            });
        }
        if (currentParent && !element.forbidden) {
            if (element.elseif || element.else) processIfConditions(element, currentParent);
            else {
                if (element.slotScope) {
                    // scoped slot
                    // keep it in the children list so that v-else(-if) conditions can
                    // find it as the prev node.
                    const name = element.slotTarget || '"default"';
                    (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
            }
        }
        // final children cleanup
        // filter out scoped slots
        element.children = element.children.filter((c)=>!c.slotScope);
        // remove trailing whitespace node again
        trimEndingWhitespace(element);
        // check pre state
        if (element.pre) inVPre = false;
        if (platformIsPreTag(element.tag)) inPre = false;
        // apply post-transforms
        for(let i = 0; i < postTransforms.length; i++)postTransforms[i](element, options);
    }
    function trimEndingWhitespace(el) {
        // remove trailing whitespace node
        if (!inPre) {
            let lastNode;
            while((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === " ")el.children.pop();
        }
    }
    function checkRootConstraints(el) {
        if (el.tag === "slot" || el.tag === "template") warnOnce(`Cannot use <${el.tag}> as component root element because it may ` + "contain multiple nodes.", {
            start: el.start
        });
        if (el.attrsMap.hasOwnProperty("v-for")) warnOnce("Cannot use v-for on stateful component root element because it renders multiple elements.", el.rawAttrsMap["v-for"]);
    }
    parseHTML(template, {
        warn,
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        canBeLeftOpenTag: options.canBeLeftOpenTag,
        shouldDecodeNewlines: options.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
        shouldKeepComment: options.comments,
        outputSourceRange: options.outputSourceRange,
        start (tag, attrs, unary, start, end) {
            // check namespace.
            // inherit parent ns if there is one
            const ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
            // handle IE svg bug
            /* istanbul ignore if */ if (isIE && ns === "svg") attrs = guardIESVGBug(attrs);
            let element = createASTElement(tag, attrs, currentParent);
            if (ns) element.ns = ns;
            if (options.outputSourceRange) {
                element.start = start;
                element.end = end;
                element.rawAttrsMap = element.attrsList.reduce((cumulated, attr)=>{
                    cumulated[attr.name] = attr;
                    return cumulated;
                }, {});
            }
            attrs.forEach((attr)=>{
                if (invalidAttributeRE.test(attr.name)) warn(`Invalid dynamic argument expression: attribute names cannot contain ` + `spaces, quotes, <, >, / or =.`, options.outputSourceRange ? {
                    start: attr.start + attr.name.indexOf(`[`),
                    end: attr.start + attr.name.length
                } : undefined);
            });
            if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                warn("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as " + `<${tag}>` + ", as they will not be parsed.", {
                    start: element.start
                });
            }
            // apply pre-transforms
            for(let i = 0; i < preTransforms.length; i++)element = preTransforms[i](element, options) || element;
            if (!inVPre) {
                processPre(element);
                if (element.pre) inVPre = true;
            }
            if (platformIsPreTag(element.tag)) inPre = true;
            if (inVPre) processRawAttrs(element);
            else if (!element.processed) {
                // structural directives
                processFor(element);
                processIf(element);
                processOnce(element);
            }
            if (!root) {
                root = element;
                checkRootConstraints(root);
            }
            if (!unary) {
                currentParent = element;
                stack.push(element);
            } else closeElement(element);
        },
        end (tag, start, end) {
            const element = stack[stack.length - 1];
            // pop stack
            stack.length -= 1;
            currentParent = stack[stack.length - 1];
            if (options.outputSourceRange) element.end = end;
            closeElement(element);
        },
        chars (text, start, end) {
            if (!currentParent) {
                if (text === template) warnOnce("Component template requires a root element, rather than just text.", {
                    start
                });
                else if (text = text.trim()) warnOnce(`text "${text}" outside root element will be ignored.`, {
                    start
                });
                return;
            }
            // IE textarea placeholder bug
            /* istanbul ignore if */ if (isIE && currentParent.tag === "textarea" && currentParent.attrsMap.placeholder === text) return;
            const children = currentParent.children;
            if (inPre || text.trim()) text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
            else if (!children.length) // remove the whitespace-only node right after an opening tag
            text = "";
            else if (whitespaceOption) {
                if (whitespaceOption === "condense") // in condense mode, remove the whitespace node if it contains
                // line break, otherwise condense to a single space
                text = lineBreakRE.test(text) ? "" : " ";
                else text = " ";
            } else text = preserveWhitespace ? " " : "";
            if (text) {
                if (!inPre && whitespaceOption === "condense") // condense consecutive whitespaces into single space
                text = text.replace(whitespaceRE, " ");
                let res;
                let child;
                if (!inVPre && text !== " " && (res = parseText(text, delimiters))) child = {
                    type: 2,
                    expression: res.expression,
                    tokens: res.tokens,
                    text
                };
                else if (text !== " " || !children.length || children[children.length - 1].text !== " ") child = {
                    type: 3,
                    text
                };
                if (child) {
                    if (options.outputSourceRange) {
                        child.start = start;
                        child.end = end;
                    }
                    children.push(child);
                }
            }
        },
        comment (text, start, end) {
            // adding anything as a sibling to the root node is forbidden
            // comments should still be allowed, but ignored
            if (currentParent) {
                const child = {
                    type: 3,
                    text,
                    isComment: true
                };
                if (options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                }
                currentParent.children.push(child);
            }
        }
    });
    return root;
}
function processPre(el) {
    if (getAndRemoveAttr(el, "v-pre") != null) el.pre = true;
}
function processRawAttrs(el) {
    const list = el.attrsList;
    const len = list.length;
    if (len) {
        const attrs = el.attrs = new Array(len);
        for(let i = 0; i < len; i++){
            attrs[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
            };
            if (list[i].start != null) {
                attrs[i].start = list[i].start;
                attrs[i].end = list[i].end;
            }
        }
    } else if (!el.pre) // non root node in pre blocks with no attributes
    el.plain = true;
}
function processElement(element, options) {
    processKey(element);
    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for(let i = 0; i < transforms.length; i++)element = transforms[i](element, options) || element;
    processAttrs(element);
    return element;
}
function processKey(el) {
    const exp = getBindingAttr(el, "key");
    if (exp) {
        if (el.tag === "template") warn(`<template> cannot be keyed. Place the key on real elements instead.`, getRawBindingAttr(el, "key"));
        if (el.for) {
            const iterator = el.iterator2 || el.iterator1;
            const parent = el.parent;
            if (iterator && iterator === exp && parent && parent.tag === "transition-group") warn(`Do not use v-for index as key on <transition-group> children, ` + `this is the same as not using keys.`, getRawBindingAttr(el, "key"), true);
        }
        el.key = exp;
    }
}
function processRef(el) {
    const ref = getBindingAttr(el, "ref");
    if (ref) {
        el.ref = ref;
        el.refInFor = checkInFor(el);
    }
}
function processFor(el) {
    let exp;
    if (exp = getAndRemoveAttr(el, "v-for")) {
        const res = parseFor(exp);
        if (res) extend(el, res);
        else warn(`Invalid v-for expression: ${exp}`, el.rawAttrsMap["v-for"]);
    }
}
function parseFor(exp) {
    const inMatch = exp.match(forAliasRE);
    if (!inMatch) return;
    const res = {};
    res.for = inMatch[2].trim();
    const alias = inMatch[1].trim().replace(stripParensRE, "");
    const iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
        res.alias = alias.replace(forIteratorRE, "").trim();
        res.iterator1 = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.iterator2 = iteratorMatch[2].trim();
    } else res.alias = alias;
    return res;
}
function processIf(el) {
    const exp = getAndRemoveAttr(el, "v-if");
    if (exp) {
        el.if = exp;
        addIfCondition(el, {
            exp: exp,
            block: el
        });
    } else {
        if (getAndRemoveAttr(el, "v-else") != null) el.else = true;
        const elseif = getAndRemoveAttr(el, "v-else-if");
        if (elseif) el.elseif = elseif;
    }
}
function processIfConditions(el, parent) {
    const prev = findPrevElement(parent.children);
    if (prev && prev.if) addIfCondition(prev, {
        exp: el.elseif,
        block: el
    });
    else warn(`v-${el.elseif ? 'else-if="' + el.elseif + '"' : "else"} ` + `used on element <${el.tag}> without corresponding v-if.`, el.rawAttrsMap[el.elseif ? "v-else-if" : "v-else"]);
}
function findPrevElement(children) {
    let i = children.length;
    while(i--){
        if (children[i].type === 1) return children[i];
        else {
            if (children[i].text !== " ") warn(`text "${children[i].text.trim()}" between v-if and v-else(-if) ` + `will be ignored.`, children[i]);
            children.pop();
        }
    }
}
function addIfCondition(el, condition) {
    if (!el.ifConditions) el.ifConditions = [];
    el.ifConditions.push(condition);
}
function processOnce(el) {
    const once = getAndRemoveAttr(el, "v-once");
    if (once != null) el.once = true;
}
// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent(el) {
    let slotScope;
    if (el.tag === "template") {
        slotScope = getAndRemoveAttr(el, "scope");
        /* istanbul ignore if */ if (slotScope) warn(`the "scope" attribute for scoped slots have been deprecated and ` + `replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ` + `can also be used on plain elements in addition to <template> to ` + `denote scoped slots.`, el.rawAttrsMap["scope"], true);
        el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope");
    } else if (slotScope = getAndRemoveAttr(el, "slot-scope")) {
        /* istanbul ignore if */ if (el.attrsMap["v-for"]) warn(`Ambiguous combined usage of slot-scope and v-for on <${el.tag}> ` + `(v-for takes higher priority). Use a wrapper <template> for the ` + `scoped slot to make it clearer.`, el.rawAttrsMap["slot-scope"], true);
        el.slotScope = slotScope;
    }
    // slot="xxx"
    const slotTarget = getBindingAttr(el, "slot");
    if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        el.slotTargetDynamic = !!(el.attrsMap[":slot"] || el.attrsMap["v-bind:slot"]);
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== "template" && !el.slotScope) addAttr(el, "slot", slotTarget, getRawBindingAttr(el, "slot"));
    }
    if (el.tag === "template") {
        // v-slot on <template>
        const slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
            if (el.slotTarget || el.slotScope) warn(`Unexpected mixed usage of different slot syntaxes.`, el);
            if (el.parent && !maybeComponent(el.parent)) warn(`<template v-slot> can only appear at the root level inside ` + `the receiving component`, el);
            const { name , dynamic  } = getSlotName(slotBinding);
            el.slotTarget = name;
            el.slotTargetDynamic = dynamic;
            el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
    } else {
        // v-slot on component, denotes default slot
        const slotBinding1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding1) {
            if (!maybeComponent(el)) warn(`v-slot can only be used on components or <template>.`, slotBinding1);
            if (el.slotScope || el.slotTarget) warn(`Unexpected mixed usage of different slot syntaxes.`, el);
            if (el.scopedSlots) warn(`To avoid scope ambiguity, the default slot should also use ` + `<template> syntax when there are other named slots.`, slotBinding1);
            // add the component's children to its default slot
            const slots = el.scopedSlots || (el.scopedSlots = {});
            const { name: name1 , dynamic: dynamic1  } = getSlotName(slotBinding1);
            const slotContainer = slots[name1] = createASTElement("template", [], el);
            slotContainer.slotTarget = name1;
            slotContainer.slotTargetDynamic = dynamic1;
            slotContainer.children = el.children.filter((c)=>{
                if (!c.slotScope) {
                    c.parent = slotContainer;
                    return true;
                }
            });
            slotContainer.slotScope = slotBinding1.value || emptySlotScopeToken;
            // remove children as they are returned from scopedSlots now
            el.children = [];
            // mark el non-plain so data gets generated
            el.plain = false;
        }
    }
}
function getSlotName(binding) {
    let name = binding.name.replace(slotRE, "");
    if (!name) {
        if (binding.name[0] !== "#") name = "default";
        else warn(`v-slot shorthand syntax requires a slot name.`, binding);
    }
    return dynamicArgRE.test(name) ? {
        name: name.slice(1, -1),
        dynamic: true
    } : {
        name: `"${name}"`,
        dynamic: false
    };
}
// handle <slot/> outlets
function processSlotOutlet(el) {
    if (el.tag === "slot") {
        el.slotName = getBindingAttr(el, "name");
        if (el.key) warn(`\`key\` does not work on <slot> because slots are abstract outlets ` + `and can possibly expand into multiple elements. ` + `Use the key on a wrapping element instead.`, getRawBindingAttr(el, "key"));
    }
}
function processComponent(el) {
    let binding;
    if (binding = getBindingAttr(el, "is")) el.component = binding;
    if (getAndRemoveAttr(el, "inline-template") != null) el.inlineTemplate = true;
}
function processAttrs(el) {
    const list = el.attrsList;
    let i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for(i = 0, l = list.length; i < l; i++){
        name = rawName = list[i].name;
        value = list[i].value;
        if (dirRE.test(name)) {
            // mark element as dynamic
            el.hasBindings = true;
            // modifiers
            modifiers = parseModifiers(name.replace(dirRE, ""));
            // support .foo shorthand syntax for the .prop modifier
            if (modifiers) name = name.replace(modifierRE, "");
            if (bindRE.test(name)) {
                // v-bind
                name = name.replace(bindRE, "");
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) name = name.slice(1, -1);
                if (value.trim().length === 0) warn(`The value for a v-bind expression cannot be empty. Found in "v-bind:${name}"`);
                if (modifiers) {
                    if (modifiers.prop && !isDynamic) {
                        name = camelize(name);
                        if (name === "innerHtml") name = "innerHTML";
                    }
                    if (modifiers.camel && !isDynamic) name = camelize(name);
                    if (modifiers.sync) {
                        syncGen = genAssignmentCode(value, `$event`);
                        if (!isDynamic) {
                            addHandler(el, `update:${camelize(name)}`, syncGen, null, false, warn, list[i]);
                            if (hyphenate(name) !== camelize(name)) addHandler(el, `update:${hyphenate(name)}`, syncGen, null, false, warn, list[i]);
                        } else // handler w/ dynamic event name
                        addHandler(el, `"update:"+(${name})`, syncGen, null, false, warn, list[i], true // dynamic
                        );
                    }
                }
                if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) addProp(el, name, value, list[i], isDynamic);
                else addAttr(el, name, value, list[i], isDynamic);
            } else if (onRE.test(name)) {
                // v-on
                name = name.replace(onRE, "");
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) name = name.slice(1, -1);
                addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic);
            } else {
                // normal directives
                name = name.replace(dirRE, "");
                // parse arg
                const argMatch = name.match(argRE);
                let arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                    name = name.slice(0, -(arg.length + 1));
                    if (dynamicArgRE.test(arg)) {
                        arg = arg.slice(1, -1);
                        isDynamic = true;
                    }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if (name === "model") checkForAliasModel(el, value);
            }
        } else {
            // literal attribute
            {
                const res = parseText(value, delimiters);
                if (res) warn(`${name}="${value}": ` + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
            }
            addAttr(el, name, JSON.stringify(value), list[i]);
            // #6887 firefox doesn't update muted state if set via attribute
            // even immediately after element creation
            if (!el.component && name === "muted" && platformMustUseProp(el.tag, el.attrsMap.type, name)) addProp(el, name, "true", list[i]);
        }
    }
}
function checkInFor(el) {
    let parent = el;
    while(parent){
        if (parent.for !== undefined) return true;
        parent = parent.parent;
    }
    return false;
}
function parseModifiers(name) {
    const match = name.match(modifierRE);
    if (match) {
        const ret = {};
        match.forEach((m)=>{
            ret[m.slice(1)] = true;
        });
        return ret;
    }
}
function makeAttrsMap(attrs) {
    const map = {};
    for(let i = 0, l = attrs.length; i < l; i++){
        if (map[attrs[i].name] && !isIE && !isEdge) warn("duplicate attribute: " + attrs[i].name, attrs[i]);
        map[attrs[i].name] = attrs[i].value;
    }
    return map;
}
// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
    return el.tag === "script" || el.tag === "style";
}
function isForbiddenTag(el) {
    return el.tag === "style" || el.tag === "script" && (!el.attrsMap.type || el.attrsMap.type === "text/javascript");
}
const ieNSBug = /^xmlns:NS\d+/;
const ieNSPrefix = /^NS\d+:/;
/* istanbul ignore next */ function guardIESVGBug(attrs) {
    const res = [];
    for(let i = 0; i < attrs.length; i++){
        const attr = attrs[i];
        if (!ieNSBug.test(attr.name)) {
            attr.name = attr.name.replace(ieNSPrefix, "");
            res.push(attr);
        }
    }
    return res;
}
function checkForAliasModel(el, value) {
    let _el = el;
    while(_el){
        if (_el.for && _el.alias === value) warn(`<${el.tag} v-model="${value}">: ` + `You are binding v-model directly to a v-for iteration alias. ` + `This will not be able to modify the v-for source array because ` + `writing to the alias is like modifying a function local variable. ` + `Consider using an array of objects and use v-model on an object property instead.`, el.rawAttrsMap["v-model"]);
        _el = _el.parent;
    }
}
/**
 * Expand input[v-model] with dynamic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */ function preTransformNode(el, options) {
    if (el.tag === "input") {
        const map = el.attrsMap;
        if (!map["v-model"]) return;
        let typeBinding;
        if (map[":type"] || map["v-bind:type"]) typeBinding = getBindingAttr(el, "type");
        if (!map.type && !typeBinding && map["v-bind"]) typeBinding = `(${map["v-bind"]}).type`;
        if (typeBinding) {
            const ifCondition = getAndRemoveAttr(el, "v-if", true);
            const ifConditionExtra = ifCondition ? `&&(${ifCondition})` : ``;
            const hasElse = getAndRemoveAttr(el, "v-else", true) != null;
            const elseIfCondition = getAndRemoveAttr(el, "v-else-if", true);
            // 1. checkbox
            const branch0 = cloneASTElement(el);
            // process for on the main node
            processFor(branch0);
            addRawAttr(branch0, "type", "checkbox");
            processElement(branch0, options);
            branch0.processed = true; // prevent it from double-processed
            branch0.if = `(${typeBinding})==='checkbox'` + ifConditionExtra;
            addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
            });
            // 2. add radio else-if condition
            const branch1 = cloneASTElement(el);
            getAndRemoveAttr(branch1, "v-for", true);
            addRawAttr(branch1, "type", "radio");
            processElement(branch1, options);
            addIfCondition(branch0, {
                exp: `(${typeBinding})==='radio'` + ifConditionExtra,
                block: branch1
            });
            // 3. other
            const branch2 = cloneASTElement(el);
            getAndRemoveAttr(branch2, "v-for", true);
            addRawAttr(branch2, ":type", typeBinding);
            processElement(branch2, options);
            addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
            });
            if (hasElse) branch0.else = true;
            else if (elseIfCondition) branch0.elseif = elseIfCondition;
            return branch0;
        }
    }
}
function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}
var model = {
    preTransformNode
};
var modules = [
    klass,
    style,
    model
];
function text(el, dir) {
    if (dir.value) addProp(el, "textContent", `_s(${dir.value})`, dir);
}
function html(el, dir) {
    if (dir.value) addProp(el, "innerHTML", `_s(${dir.value})`, dir);
}
var directives = {
    model: model$1,
    text,
    html
};
const baseOptions = {
    expectHTML: true,
    modules,
    directives,
    isPreTag,
    isUnaryTag,
    mustUseProp,
    canBeLeftOpenTag,
    isReservedTag,
    getTagNamespace,
    staticKeys: genStaticKeys$1(modules)
};
let isStaticKey;
let isPlatformReservedTag;
const genStaticKeysCached = cached(genStaticKeys);
/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */ function optimize(root, options) {
    if (!root) return;
    isStaticKey = genStaticKeysCached(options.staticKeys || "");
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
}
function genStaticKeys(keys) {
    return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (keys ? "," + keys : ""));
}
function markStatic(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
        // do not make component slot content static. this avoids
        // 1. components not able to mutate slot nodes
        // 2. static slot content fails for hot-reloading
        if (!isPlatformReservedTag(node.tag) && node.tag !== "slot" && node.attrsMap["inline-template"] == null) return;
        for(let i = 0, l = node.children.length; i < l; i++){
            const child = node.children[i];
            markStatic(child);
            if (!child.static) node.static = false;
        }
        if (node.ifConditions) for(let i1 = 1, l1 = node.ifConditions.length; i1 < l1; i1++){
            const block = node.ifConditions[i1].block;
            markStatic(block);
            if (!block.static) node.static = false;
        }
    }
}
function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
        if (node.static || node.once) node.staticInFor = isInFor;
        // For a node to qualify as a static root, it should have children that
        // are not just static text. Otherwise the cost of hoisting out will
        // outweigh the benefits and it's better off to just always render it fresh.
        if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
            node.staticRoot = true;
            return;
        } else node.staticRoot = false;
        if (node.children) for(let i = 0, l = node.children.length; i < l; i++)markStaticRoots(node.children[i], isInFor || !!node.for);
        if (node.ifConditions) for(let i1 = 1, l1 = node.ifConditions.length; i1 < l1; i1++)markStaticRoots(node.ifConditions[i1].block, isInFor);
    }
}
function isStatic(node) {
    if (node.type === 2) // expression
    return false;
    if (node.type === 3) // text
    return true;
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
}
function isDirectChildOfTemplateFor(node) {
    while(node.parent){
        node = node.parent;
        if (node.tag !== "template") return false;
        if (node.for) return true;
    }
    return false;
}
const fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
const fnInvokeRE = /\([^)]*?\);*$/;
const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
// KeyboardEvent.keyCode aliases
const keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [
        8,
        46
    ]
};
// KeyboardEvent.key aliases
const keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: [
        "Esc",
        "Escape"
    ],
    tab: "Tab",
    enter: "Enter",
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [
        " ",
        "Spacebar"
    ],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: [
        "Up",
        "ArrowUp"
    ],
    left: [
        "Left",
        "ArrowLeft"
    ],
    right: [
        "Right",
        "ArrowRight"
    ],
    down: [
        "Down",
        "ArrowDown"
    ],
    // #9112: IE11 uses `Del` for Delete key name.
    delete: [
        "Backspace",
        "Delete",
        "Del"
    ]
};
// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
const genGuard = (condition)=>`if(${condition})return null;`;
const modifierCode = {
    stop: "$event.stopPropagation();",
    prevent: "$event.preventDefault();",
    self: genGuard(`$event.target !== $event.currentTarget`),
    ctrl: genGuard(`!$event.ctrlKey`),
    shift: genGuard(`!$event.shiftKey`),
    alt: genGuard(`!$event.altKey`),
    meta: genGuard(`!$event.metaKey`),
    left: genGuard(`'button' in $event && $event.button !== 0`),
    middle: genGuard(`'button' in $event && $event.button !== 1`),
    right: genGuard(`'button' in $event && $event.button !== 2`)
};
function genHandlers(events, isNative) {
    const prefix = isNative ? "nativeOn:" : "on:";
    let staticHandlers = ``;
    let dynamicHandlers = ``;
    for(const name in events){
        const handlerCode = genHandler(events[name]);
        //@ts-expect-error
        if (events[name] && events[name].dynamic) dynamicHandlers += `${name},${handlerCode},`;
        else staticHandlers += `"${name}":${handlerCode},`;
    }
    staticHandlers = `{${staticHandlers.slice(0, -1)}}`;
    if (dynamicHandlers) return prefix + `_d(${staticHandlers},[${dynamicHandlers.slice(0, -1)}])`;
    else return prefix + staticHandlers;
}
function genHandler(handler) {
    if (!handler) return "function(){}";
    if (Array.isArray(handler)) return `[${handler.map((handler)=>genHandler(handler)).join(",")}]`;
    const isMethodPath = simplePathRE.test(handler.value);
    const isFunctionExpression = fnExpRE.test(handler.value);
    const isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ""));
    if (!handler.modifiers) {
        if (isMethodPath || isFunctionExpression) return handler.value;
        return `function($event){${isFunctionInvocation ? `return ${handler.value}` : handler.value}}`; // inline statement
    } else {
        let code = "";
        let genModifierCode = "";
        const keys = [];
        for(const key in handler.modifiers){
            if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                // left/right
                if (keyCodes[key]) keys.push(key);
            } else if (key === "exact") {
                const modifiers = handler.modifiers;
                genModifierCode += genGuard([
                    "ctrl",
                    "shift",
                    "alt",
                    "meta"
                ].filter((keyModifier)=>!modifiers[keyModifier]).map((keyModifier)=>`$event.${keyModifier}Key`).join("||"));
            } else keys.push(key);
        }
        if (keys.length) code += genKeyFilter(keys);
        // Make sure modifiers like prevent and stop get executed after key filtering
        if (genModifierCode) code += genModifierCode;
        const handlerCode = isMethodPath ? `return ${handler.value}.apply(null, arguments)` : isFunctionExpression ? `return (${handler.value}).apply(null, arguments)` : isFunctionInvocation ? `return ${handler.value}` : handler.value;
        return `function($event){${code}${handlerCode}}`;
    }
}
function genKeyFilter(keys) {
    return(// make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    `if(!$event.type.indexOf('key')&&` + `${keys.map(genFilterCode).join("&&")})return null;`);
}
function genFilterCode(key) {
    const keyVal = parseInt(key, 10);
    if (keyVal) return `$event.keyCode!==${keyVal}`;
    const keyCode = keyCodes[key];
    const keyName = keyNames[key];
    return `_k($event.keyCode,` + `${JSON.stringify(key)},` + `${JSON.stringify(keyCode)},` + `$event.key,` + `${JSON.stringify(keyName)}` + `)`;
}
function on(el, dir) {
    if (dir.modifiers) warn$2(`v-on without argument does not support modifiers.`);
    el.wrapListeners = (code)=>`_g(${code},${dir.value})`;
}
function bind(el, dir) {
    el.wrapData = (code)=>{
        return `_b(${code},'${el.tag}',${dir.value},${dir.modifiers && dir.modifiers.prop ? "true" : "false"}${dir.modifiers && dir.modifiers.sync ? ",true" : ""})`;
    };
}
var baseDirectives = {
    on,
    bind,
    cloak: noop
};
class CodegenState {
    constructor(options){
        this.options = options;
        this.warn = options.warn || baseWarn;
        this.transforms = pluckModuleFunction(options.modules, "transformCode");
        this.dataGenFns = pluckModuleFunction(options.modules, "genData");
        this.directives = extend(extend({}, baseDirectives), options.directives);
        const isReservedTag = options.isReservedTag || no;
        this.maybeComponent = (el)=>!!el.component || !isReservedTag(el.tag);
        this.onceId = 0;
        this.staticRenderFns = [];
        this.pre = false;
    }
}
function generate(ast, options) {
    const state = new CodegenState(options);
    // fix #11483, Root level <script> tags should not be rendered.
    const code = ast ? ast.tag === "script" ? "null" : genElement(ast, state) : '_c("div")';
    return {
        render: `with(this){return ${code}}`,
        staticRenderFns: state.staticRenderFns
    };
}
function genElement(el, state) {
    if (el.parent) el.pre = el.pre || el.parent.pre;
    if (el.staticRoot && !el.staticProcessed) return genStatic(el, state);
    else if (el.once && !el.onceProcessed) return genOnce(el, state);
    else if (el.for && !el.forProcessed) return genFor(el, state);
    else if (el.if && !el.ifProcessed) return genIf(el, state);
    else if (el.tag === "template" && !el.slotTarget && !state.pre) return genChildren(el, state) || "void 0";
    else if (el.tag === "slot") return genSlot(el, state);
    else {
        // component or element
        let code;
        if (el.component) code = genComponent(el.component, el, state);
        else {
            let data;
            const maybeComponent = state.maybeComponent(el);
            if (!el.plain || el.pre && maybeComponent) data = genData(el, state);
            let tag;
            // check if this is a component in <script setup>
            const bindings = state.options.bindings;
            if (maybeComponent && bindings && bindings.__isScriptSetup !== false) tag = checkBindingType(bindings, el.tag);
            if (!tag) tag = `'${el.tag}'`;
            const children = el.inlineTemplate ? null : genChildren(el, state, true);
            code = `_c(${tag}${data ? `,${data}` : "" // data
            }${children ? `,${children}` : "" // children
            })`;
        }
        // module transforms
        for(let i = 0; i < state.transforms.length; i++)code = state.transforms[i](el, code);
        return code;
    }
}
function checkBindingType(bindings, key) {
    const camelName = camelize(key);
    const PascalName = capitalize(camelName);
    const checkType = (type)=>{
        if (bindings[key] === type) return key;
        if (bindings[camelName] === type) return camelName;
        if (bindings[PascalName] === type) return PascalName;
    };
    const fromConst = checkType("setup-const" /* BindingTypes.SETUP_CONST */ ) || checkType("setup-reactive-const" /* BindingTypes.SETUP_REACTIVE_CONST */ );
    if (fromConst) return fromConst;
    const fromMaybeRef = checkType("setup-let" /* BindingTypes.SETUP_LET */ ) || checkType("setup-ref" /* BindingTypes.SETUP_REF */ ) || checkType("setup-maybe-ref" /* BindingTypes.SETUP_MAYBE_REF */ );
    if (fromMaybeRef) return fromMaybeRef;
}
// hoist static sub-trees out
function genStatic(el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    const originalPreState = state.pre;
    if (el.pre) state.pre = el.pre;
    state.staticRenderFns.push(`with(this){return ${genElement(el, state)}}`);
    state.pre = originalPreState;
    return `_m(${state.staticRenderFns.length - 1}${el.staticInFor ? ",true" : ""})`;
}
// v-once
function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) return genIf(el, state);
    else if (el.staticInFor) {
        let key = "";
        let parent = el.parent;
        while(parent){
            if (parent.for) {
                key = parent.key;
                break;
            }
            parent = parent.parent;
        }
        if (!key) {
            state.warn(`v-once can only be used inside v-for that is keyed. `, el.rawAttrsMap["v-once"]);
            return genElement(el, state);
        }
        return `_o(${genElement(el, state)},${state.onceId++},${key})`;
    } else return genStatic(el, state);
}
function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}
function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) return altEmpty || "_e()";
    const condition = conditions.shift();
    if (condition.exp) return `(${condition.exp})?${genTernaryExp(condition.block)}:${genIfConditions(conditions, state, altGen, altEmpty)}`;
    else return `${genTernaryExp(condition.block)}`;
    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
        return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
}
function genFor(el, state, altGen, altHelper) {
    const exp = el.for;
    const alias = el.alias;
    const iterator1 = el.iterator1 ? `,${el.iterator1}` : "";
    const iterator2 = el.iterator2 ? `,${el.iterator2}` : "";
    if (state.maybeComponent(el) && el.tag !== "slot" && el.tag !== "template" && !el.key) state.warn(`<${el.tag} v-for="${alias} in ${exp}">: component lists rendered with ` + `v-for should have explicit keys. ` + `See https://v2.vuejs.org/v2/guide/list.html#key for more info.`, el.rawAttrsMap["v-for"], true);
    el.forProcessed = true; // avoid recursion
    return `${altHelper || "_l"}((${exp}),` + `function(${alias}${iterator1}${iterator2}){` + `return ${(altGen || genElement)(el, state)}` + "})";
}
function genData(el, state) {
    let data = "{";
    // directives first.
    // directives may mutate the el's other properties before they are generated.
    const dirs = genDirectives(el, state);
    if (dirs) data += dirs + ",";
    // key
    if (el.key) data += `key:${el.key},`;
    // ref
    if (el.ref) data += `ref:${el.ref},`;
    if (el.refInFor) data += `refInFor:true,`;
    // pre
    if (el.pre) data += `pre:true,`;
    // record original tag name for components using "is" attribute
    if (el.component) data += `tag:"${el.tag}",`;
    // module data generation functions
    for(let i = 0; i < state.dataGenFns.length; i++)data += state.dataGenFns[i](el);
    // attributes
    if (el.attrs) data += `attrs:${genProps(el.attrs)},`;
    // DOM props
    if (el.props) data += `domProps:${genProps(el.props)},`;
    // event handlers
    if (el.events) data += `${genHandlers(el.events, false)},`;
    if (el.nativeEvents) data += `${genHandlers(el.nativeEvents, true)},`;
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) data += `slot:${el.slotTarget},`;
    // scoped slots
    if (el.scopedSlots) data += `${genScopedSlots(el, el.scopedSlots, state)},`;
    // component v-model
    if (el.model) data += `model:{value:${el.model.value},callback:${el.model.callback},expression:${el.model.expression}},`;
    // inline-template
    if (el.inlineTemplate) {
        const inlineTemplate = genInlineTemplate(el, state);
        if (inlineTemplate) data += `${inlineTemplate},`;
    }
    data = data.replace(/,$/, "") + "}";
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) data = `_b(${data},"${el.tag}",${genProps(el.dynamicAttrs)})`;
    // v-bind data wrap
    if (el.wrapData) data = el.wrapData(data);
    // v-on data wrap
    if (el.wrapListeners) data = el.wrapListeners(data);
    return data;
}
function genDirectives(el, state) {
    const dirs = el.directives;
    if (!dirs) return;
    let res = "directives:[";
    let hasRuntime = false;
    let i, l, dir, needRuntime;
    for(i = 0, l = dirs.length; i < l; i++){
        dir = dirs[i];
        needRuntime = true;
        const gen = state.directives[dir.name];
        if (gen) // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
        if (needRuntime) {
            hasRuntime = true;
            res += `{name:"${dir.name}",rawName:"${dir.rawName}"${dir.value ? `,value:(${dir.value}),expression:${JSON.stringify(dir.value)}` : ""}${dir.arg ? `,arg:${dir.isDynamicArg ? dir.arg : `"${dir.arg}"`}` : ""}${dir.modifiers ? `,modifiers:${JSON.stringify(dir.modifiers)}` : ""}},`;
        }
    }
    if (hasRuntime) return res.slice(0, -1) + "]";
}
function genInlineTemplate(el, state) {
    const ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) state.warn("Inline-template components must have exactly one child element.", {
        start: el.start
    });
    if (ast && ast.type === 1) {
        const inlineRenderFns = generate(ast, state.options);
        return `inlineTemplate:{render:function(){${inlineRenderFns.render}},staticRenderFns:[${inlineRenderFns.staticRenderFns.map((code)=>`function(){${code}}`).join(",")}]}`;
    }
}
function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    let needsForceUpdate = el.for || Object.keys(slots).some((key)=>{
        const slot = slots[key];
        return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
        ;
    });
    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    let needsKey = !!el.if;
    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
        let parent = el.parent;
        while(parent){
            if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
                needsForceUpdate = true;
                break;
            }
            if (parent.if) needsKey = true;
            parent = parent.parent;
        }
    }
    const generatedSlots = Object.keys(slots).map((key)=>genScopedSlot(slots[key], state)).join(",");
    return `scopedSlots:_u([${generatedSlots}]${needsForceUpdate ? `,null,true` : ``}${!needsForceUpdate && needsKey ? `,null,false,${hash(generatedSlots)}` : ``})`;
}
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while(i)hash = hash * 33 ^ str.charCodeAt(--i);
    return hash >>> 0;
}
function containsSlotChild(el) {
    if (el.type === 1) {
        if (el.tag === "slot") return true;
        return el.children.some(containsSlotChild);
    }
    return false;
}
function genScopedSlot(el, state) {
    const isLegacySyntax = el.attrsMap["slot-scope"];
    if (el.if && !el.ifProcessed && !isLegacySyntax) return genIf(el, state, genScopedSlot, `null`);
    if (el.for && !el.forProcessed) return genFor(el, state, genScopedSlot);
    const slotScope = el.slotScope === emptySlotScopeToken ? `` : String(el.slotScope);
    const fn = `function(${slotScope}){` + `return ${el.tag === "template" ? el.if && isLegacySyntax ? `(${el.if})?${genChildren(el, state) || "undefined"}:undefined` : genChildren(el, state) || "undefined" : genElement(el, state)}}`;
    // reverse proxy v-slot without scope on this.$slots
    const reverseProxy = slotScope ? `` : `,proxy:true`;
    return `{key:${el.slotTarget || `"default"`},fn:${fn}${reverseProxy}}`;
}
function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    const children = el.children;
    if (children.length) {
        const el1 = children[0];
        // optimize single v-for
        if (children.length === 1 && el1.for && el1.tag !== "template" && el1.tag !== "slot") {
            const normalizationType = checkSkip ? state.maybeComponent(el1) ? `,1` : `,0` : ``;
            return `${(altGenElement || genElement)(el1, state)}${normalizationType}`;
        }
        const normalizationType1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
        const gen = altGenNode || genNode;
        return `[${children.map((c)=>gen(c, state)).join(",")}]${normalizationType1 ? `,${normalizationType1}` : ""}`;
    }
}
// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
    let res = 0;
    for(let i = 0; i < children.length; i++){
        const el = children[i];
        if (el.type !== 1) continue;
        if (needsNormalization(el) || el.ifConditions && el.ifConditions.some((c)=>needsNormalization(c.block))) {
            res = 2;
            break;
        }
        if (maybeComponent(el) || el.ifConditions && el.ifConditions.some((c)=>maybeComponent(c.block))) res = 1;
    }
    return res;
}
function needsNormalization(el) {
    return el.for !== undefined || el.tag === "template" || el.tag === "slot";
}
function genNode(node, state) {
    if (node.type === 1) return genElement(node, state);
    else if (node.type === 3 && node.isComment) return genComment(node);
    else return genText(node);
}
function genText(text) {
    return `_v(${text.type === 2 ? text.expression // no need for () because already wrapped in _s()
     : transformSpecialNewlines(JSON.stringify(text.text))})`;
}
function genComment(comment) {
    return `_e(${JSON.stringify(comment.text)})`;
}
function genSlot(el, state) {
    const slotName = el.slotName || '"default"';
    const children = genChildren(el, state);
    let res = `_t(${slotName}${children ? `,function(){return ${children}}` : ""}`;
    const attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map((attr)=>({
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic
        }))) : null;
    const bind = el.attrsMap["v-bind"];
    if ((attrs || bind) && !children) res += `,null`;
    if (attrs) res += `,${attrs}`;
    if (bind) res += `${attrs ? "" : ",null"},${bind}`;
    return res + ")";
}
// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
    const children = el.inlineTemplate ? null : genChildren(el, state, true);
    return `_c(${componentName},${genData(el, state)}${children ? `,${children}` : ""})`;
}
function genProps(props) {
    let staticProps = ``;
    let dynamicProps = ``;
    for(let i = 0; i < props.length; i++){
        const prop = props[i];
        const value = transformSpecialNewlines(prop.value);
        if (prop.dynamic) dynamicProps += `${prop.name},${value},`;
        else staticProps += `"${prop.name}":${value},`;
    }
    staticProps = `{${staticProps.slice(0, -1)}}`;
    if (dynamicProps) return `_d(${staticProps},[${dynamicProps.slice(0, -1)}])`;
    else return staticProps;
}
// #3895, #4268
function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
const prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
// these unary operators should not be used as property/method names
const unaryOperatorsRE = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
// strip strings in expressions
const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
// detect problematic expressions in a template
function detectErrors(ast, warn) {
    if (ast) checkNode(ast, warn);
}
function checkNode(node, warn) {
    if (node.type === 1) {
        for(const name in node.attrsMap)if (dirRE.test(name)) {
            const value = node.attrsMap[name];
            if (value) {
                const range = node.rawAttrsMap[name];
                if (name === "v-for") checkFor(node, `v-for="${value}"`, warn, range);
                else if (name === "v-slot" || name[0] === "#") checkFunctionParameterExpression(value, `${name}="${value}"`, warn, range);
                else if (onRE.test(name)) checkEvent(value, `${name}="${value}"`, warn, range);
                else checkExpression(value, `${name}="${value}"`, warn, range);
            }
        }
        if (node.children) for(let i = 0; i < node.children.length; i++)checkNode(node.children[i], warn);
    } else if (node.type === 2) checkExpression(node.expression, node.text, warn, node);
}
function checkEvent(exp, text, warn, range) {
    const stripped = exp.replace(stripStringRE, "");
    const keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== "$") warn(`avoid using JavaScript unary operator as property name: ` + `"${keywordMatch[0]}" in expression ${text.trim()}`, range);
    checkExpression(exp, text, warn, range);
}
function checkFor(node, text, warn, range) {
    checkExpression(node.for || "", text, warn, range);
    checkIdentifier(node.alias, "v-for alias", text, warn, range);
    checkIdentifier(node.iterator1, "v-for iterator", text, warn, range);
    checkIdentifier(node.iterator2, "v-for iterator", text, warn, range);
}
function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === "string") try {
        new Function(`var ${ident}=_`);
    } catch (e) {
        warn(`invalid ${type} "${ident}" in expression: ${text.trim()}`, range);
    }
}
function checkExpression(exp, text, warn, range) {
    try {
        new Function(`return ${exp}`);
    } catch (e) {
        const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
        if (keywordMatch) warn(`avoid using JavaScript keyword as property name: ` + `"${keywordMatch[0]}"\n  Raw expression: ${text.trim()}`, range);
        else warn(`invalid expression: ${e.message} in\n\n` + `    ${exp}\n\n` + `  Raw expression: ${text.trim()}\n`, range);
    }
}
function checkFunctionParameterExpression(exp, text, warn, range) {
    try {
        new Function(exp, "");
    } catch (e) {
        warn(`invalid function parameter expression: ${e.message} in\n\n` + `    ${exp}\n\n` + `  Raw expression: ${text.trim()}\n`, range);
    }
}
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + 1;
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                res.push(`${j + 1}${repeat1(` `, 3 - String(j + 1).length)}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = end > count ? lineLength - pad : end - start;
                    res.push(`   |  ` + repeat1(` `, pad) + repeat1(`^`, length));
                } else if (j > i) {
                    if (end > count) {
                        const length1 = Math.min(end - count, lineLength);
                        res.push(`   |  ` + repeat1(`^`, length1));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function repeat1(str, n) {
    let result = "";
    if (n > 0) // eslint-disable-next-line no-constant-condition
    while(true){
        // eslint-disable-line
        if (n & 1) result += str;
        n >>>= 1;
        if (n <= 0) break;
        str += str;
    }
    return result;
}
function createFunction(code, errors) {
    try {
        return new Function(code);
    } catch (err) {
        errors.push({
            err,
            code
        });
        return noop;
    }
}
function createCompileToFunctionFn(compile) {
    const cache = Object.create(null);
    return function compileToFunctions(template, options, vm) {
        options = extend({}, options);
        const warn = options.warn || warn$2;
        delete options.warn;
        // detect possible CSP restriction
        try {
            new Function("return 1");
        } catch (e) {
            if (e.toString().match(/unsafe-eval|CSP/)) warn("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
        }
        // check cache
        const key = options.delimiters ? String(options.delimiters) + template : template;
        if (cache[key]) return cache[key];
        // compile
        const compiled = compile(template, options);
        if (compiled.errors && compiled.errors.length) {
            if (options.outputSourceRange) compiled.errors.forEach((e)=>{
                warn(`Error compiling template:\n\n${e.msg}\n\n` + generateCodeFrame(template, e.start, e.end), vm);
            });
            else warn(`Error compiling template:\n\n${template}\n\n` + compiled.errors.map((e)=>`- ${e}`).join("\n") + "\n", vm);
        }
        if (compiled.tips && compiled.tips.length) {
            if (options.outputSourceRange) compiled.tips.forEach((e)=>tip(e.msg, vm));
            else compiled.tips.forEach((msg)=>tip(msg, vm));
        }
        // turn code into functions
        const res = {};
        const fnGenErrors = [];
        res.render = createFunction(compiled.render, fnGenErrors);
        res.staticRenderFns = compiled.staticRenderFns.map((code)=>{
            return createFunction(code, fnGenErrors);
        });
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) warn(`Failed to generate render function:\n\n` + fnGenErrors.map(({ err , code  })=>`${err.toString()} in\n\n${code}\n`).join("\n"), vm);
        return cache[key] = res;
    };
}
function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
        function compile(template, options) {
            const finalOptions = Object.create(baseOptions);
            const errors = [];
            const tips = [];
            let warn = (msg, range, tip)=>{
                (tip ? tips : errors).push(msg);
            };
            if (options) {
                if (options.outputSourceRange) {
                    // $flow-disable-line
                    const leadingSpaceLength = template.match(/^\s*/)[0].length;
                    warn = (msg, range, tip)=>{
                        const data = typeof msg === "string" ? {
                            msg
                        } : msg;
                        if (range) {
                            if (range.start != null) data.start = range.start + leadingSpaceLength;
                            if (range.end != null) data.end = range.end + leadingSpaceLength;
                        }
                        (tip ? tips : errors).push(data);
                    };
                }
                // merge custom modules
                if (options.modules) finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                // merge custom directives
                if (options.directives) finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
                // copy other options
                for(const key in options)if (key !== "modules" && key !== "directives") finalOptions[key] = options[key];
            }
            finalOptions.warn = warn;
            const compiled = baseCompile(template.trim(), finalOptions);
            detectErrors(compiled.ast, warn);
            compiled.errors = errors;
            compiled.tips = tips;
            return compiled;
        }
        return {
            compile,
            compileToFunctions: createCompileToFunctionFn(compile)
        };
    };
}
// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
const createCompiler = createCompilerCreator(function baseCompile(template, options) {
    const ast = parse(template.trim(), options);
    if (options.optimize !== false) optimize(ast, options);
    const code = generate(ast, options);
    return {
        ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    };
});
const { compile , compileToFunctions  } = createCompiler(baseOptions);
// check whether current browser encodes a char inside attribute values
let div;
function getShouldDecode(href) {
    div = div || document.createElement("div");
    div.innerHTML = href ? `<a href="\n"/>` : `<div a="\n"/>`;
    return div.innerHTML.indexOf("&#10;") > 0;
}
// #3663: IE encodes newlines inside attribute values while other browsers don't
const shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
const shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
const idToTemplate = cached((id)=>{
    const el = query(id);
    return el && el.innerHTML;
});
const mount = Vue.prototype.$mount;
Vue.prototype.$mount = function(el, hydrating) {
    el = el && query(el);
    /* istanbul ignore if */ if (el === document.body || el === document.documentElement) {
        warn$2(`Do not mount Vue to <html> or <body> - mount to normal elements instead.`);
        return this;
    }
    const options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
        let template = options.template;
        if (template) {
            if (typeof template === "string") {
                if (template.charAt(0) === "#") {
                    template = idToTemplate(template);
                    /* istanbul ignore if */ if (!template) warn$2(`Template element not found or is empty: ${options.template}`, this);
                }
            } else if (template.nodeType) template = template.innerHTML;
            else {
                warn$2("invalid template option:" + template, this);
                return this;
            }
        } else if (el) // @ts-expect-error
        template = getOuterHTML(el);
        if (template) {
            /* istanbul ignore if */ if (config.performance && mark) mark("compile");
            const { render , staticRenderFns  } = compileToFunctions(template, {
                outputSourceRange: true,
                shouldDecodeNewlines,
                shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
            }, this);
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            /* istanbul ignore if */ if (config.performance && mark) {
                mark("compile end");
                measure(`vue ${this._name} compile`, "compile", "compile end");
            }
        }
    }
    return mount.call(this, el, hydrating);
};
/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */ function getOuterHTML(el) {
    if (el.outerHTML) return el.outerHTML;
    else {
        const container = document.createElement("div");
        container.appendChild(el.cloneNode(true));
        return container.innerHTML;
    }
}
Vue.compile = compileToFunctions;
// export type EffectScheduler = (...args: any[]) => any
/**
 * @internal since we are not exposing this in Vue 2, it's used only for
 * internal testing.
 */ function effect(fn, scheduler) {
    const watcher = new Watcher(currentInstance, fn, noop, {
        sync: true
    });
    if (scheduler) watcher.update = ()=>{
        scheduler(()=>watcher.run());
    };
}
extend(Vue, vca);
Vue.effect = effect;
module.exports = Vue;

},{}],"5IhlW":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-1.5f963ded.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"tldVd":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-2.6c550b84.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hWdlO":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-3.ee366c07.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a3K30":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-4.20ac56af.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hDlT0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-1-thumbnail.cad5b7f9.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"csqC0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-2-thumbnail.c1078cca.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5toFf":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-3-thumbnail.13b1e1c1.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aEsNp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "image-product-4-thumbnail.5287685c.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequirebd42")

//# sourceMappingURL=index.59a40e7a.js.map
