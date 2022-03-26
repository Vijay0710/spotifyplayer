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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"lBB98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"hD4hw":[function(require,module,exports) {
// Import all plugins
var _bootstrap = require("bootstrap");
// Import the functions you need from the SDKs you need
var _app = require("firebase/app");
var _analytics = require("firebase/analytics");
var _auth = require("firebase/auth");
const inputs = document.querySelectorAll('.form-control input');
const labels = document.querySelectorAll('.form-control label');
labels.forEach((label)=>{
    label.innerHTML = label.innerText.split('').map((letter, idx)=>`<span style="
        transition-delay: ${idx * 50}ms
      ">${letter}</span>`
    ).join('');
});
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAi3c64nM4FF9p5sAeF-k64bM_798Ih-hs",
    authDomain: "spotify-web-66254.firebaseapp.com",
    projectId: "spotify-web-66254",
    storageBucket: "spotify-web-66254.appspot.com",
    messagingSenderId: "345958720009",
    appId: "1:345958720009:web:6f2bededb2d0b3c2bbced8",
    measurementId: "G-JZMHZV075X"
};
// Initialize Firebase
const app = _app.initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = _analytics.getAnalytics(app);
function register() {
    console.log(document.getElementById("uname").value);
    console.log(document.getElementById("mail").value);
    console.log(document.getElementById("pass").value);
//   const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
}

},{"bootstrap":"8lJf7","firebase/app":"eMZZo","firebase/analytics":"dDzU4","firebase/auth":"g8VIo"}],"8lJf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alert", ()=>Alert
);
parcelHelpers.export(exports, "Button", ()=>Button
);
parcelHelpers.export(exports, "Carousel", ()=>Carousel
);
parcelHelpers.export(exports, "Collapse", ()=>Collapse
);
parcelHelpers.export(exports, "Dropdown", ()=>Dropdown
);
parcelHelpers.export(exports, "Modal", ()=>Modal
);
parcelHelpers.export(exports, "Offcanvas", ()=>Offcanvas
);
parcelHelpers.export(exports, "Popover", ()=>Popover
);
parcelHelpers.export(exports, "ScrollSpy", ()=>ScrollSpy
);
parcelHelpers.export(exports, "Tab", ()=>Tab
);
parcelHelpers.export(exports, "Toast", ()=>Toast
);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip
);
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var _core = require("@popperjs/core");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
const toType = (obj)=>{
    if (obj === null || obj === undefined) return `${obj}`;
    return ({
    }).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */ const getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix))
    return prefix;
};
const getSelector = (element)=>{
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
        let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) return null;
         // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) hrefAttr = `#${hrefAttr.split('#')[1]}`;
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
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
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (obj)=>{
    if (!obj || typeof obj !== 'object') return false;
    if (typeof obj.jquery !== 'undefined') obj = obj[0];
    return typeof obj.nodeType !== 'undefined';
};
const getElement = (obj)=>{
    if (isElement(obj)) // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
    if (typeof obj === 'string' && obj.length > 0) return document.querySelector(obj);
    return null;
};
const typeCheckConfig = (componentName, config, configTypes)=>{
    Object.keys(configTypes).forEach((property)=>{
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    });
};
const isVisible = (element)=>{
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};
const isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains('disabled')) return true;
    if (typeof element.disabled !== 'undefined') return element.disabled;
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
const findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
     // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
     // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
const noop = ()=>{
};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const reflow = (element)=>{
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
};
const getjQuery = ()=>{
    const { jQuery  } = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) return jQuery;
    return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback1)=>{
    if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener('DOMContentLoaded', ()=>{
            DOMContentLoadedCallbacks.forEach((callback)=>callback()
            );
        });
        DOMContentLoadedCallbacks.push(callback1);
    } else callback1();
};
const isRTL = ()=>document.documentElement.dir === 'rtl'
;
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
    if (typeof callback === 'function') callback();
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
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
    if (index === -1) return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {
}; // Events storage
let uidEvent = 1;
const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
};
const customEventsRegex = /^(mouseenter|mouseleave)/i;
const nativeEvents = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll'
]);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */ function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {
    };
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        event.delegateTarget = element;
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target  } = event; target && target !== this; target = target.parentNode){
            for(let i = domElements.length; i--;)if (domElements[i] === target) {
                event.delegateTarget = target;
                if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
                return fn.apply(target, [
                    event
                ]);
            }
        } // To please ESLint
        return null;
    };
}
function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);
    for(let i = 0, len = uidEventList.length; i < len; i++){
        const event = events[uidEventList[i]];
        if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
    }
    return null;
}
function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);
    if (!isNative) typeEvent = originalTypeEvent;
    return [
        delegation,
        originalHandler,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) return;
    if (!handler) {
        handler = delegationFn;
        delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (customEventsRegex.test(originalTypeEvent)) {
        const wrapFn = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        if (delegationFn) delegationFn = wrapFn(delegationFn);
        else handler = wrapFn(handler);
    }
    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {
    });
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
        previousFn.oneOff = previousFn.oneOff && oneOff;
        return;
    }
    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn1 = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn1.delegationSelector = delegation ? handler : null;
    fn1.originalHandler = originalHandler;
    fn1.oneOff = oneOff;
    fn1.uidEvent = uid;
    handlers[uid] = fn1;
    element.addEventListener(typeEvent, fn1, delegation);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {
    };
    Object.keys(storeElementEvent).forEach((handlerKey)=>{
        if (handlerKey.includes(namespace)) {
            const event = storeElementEvent[handlerKey];
            removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
    });
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
}
const EventHandler = {
    on (element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, false);
    },
    one (element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, true);
    },
    off (element, originalTypeEvent, handler, delegationFn) {
        if (typeof originalTypeEvent !== 'string' || !element) return;
        const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getEvent(element);
        const isNamespace = originalTypeEvent.startsWith('.');
        if (typeof originalHandler !== 'undefined') {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!events || !events[typeEvent]) return;
            removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
            return;
        }
        if (isNamespace) Object.keys(events).forEach((elementEvent)=>{
            removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
        const storeElementEvent = events[typeEvent] || {
        };
        Object.keys(storeElementEvent).forEach((keyHandlers)=>{
            const handlerKey = keyHandlers.replace(stripUidRegex, '');
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    },
    trigger (element, event, args) {
        if (typeof event !== 'string' || !element) return null;
        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        const isNative = nativeEvents.has(typeEvent);
        let jQueryEvent;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        let evt = null;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        if (isNative) {
            evt = document.createEvent('HTMLEvents');
            evt.initEvent(typeEvent, bubbles, true);
        } else evt = new CustomEvent(event, {
            bubbles,
            cancelable: true
        });
         // merge custom information in our event
        if (typeof args !== 'undefined') Object.keys(args).forEach((key)=>{
            Object.defineProperty(evt, key, {
                get () {
                    return args[key];
                }
            });
        });
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') jQueryEvent.preventDefault();
        return evt;
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
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
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const VERSION = '5.1.3';
class BaseComponent {
    constructor(element4){
        element4 = getElement(element4);
        if (!element4) return;
        this._element = element4;
        Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach((propertyName)=>{
            this[propertyName] = null;
        });
    }
    _queueCallback(callback, element1, isAnimated = true) {
        executeAfterTransition(callback, element1, isAnimated);
    }
    /** Static */ static getInstance(element2) {
        return Data.get(getElement(element2), this.DATA_KEY);
    }
    static getOrCreateInstance(element3, config = {
    }) {
        return this.getInstance(element3) || new this(element3, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
        return VERSION;
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const enableDismissTrigger = (component, method = 'hide')=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        const target = getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$d = 'alert';
const DATA_KEY$c = 'bs.alert';
const EVENT_KEY$c = `.${DATA_KEY$c}`;
const EVENT_CLOSE = `close${EVENT_KEY$c}`;
const EVENT_CLOSED = `closed${EVENT_KEY$c}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Alert extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$d;
    }
    close() {
        const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove(CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement()
        , this._element, isAnimated);
    }
    _destroyElement() {
        this._element.remove();
        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
    }
    static jQueryInterface(config1) {
        return this.each(function() {
            const data = Alert.getOrCreateInstance(this);
            if (typeof config1 !== 'string') return;
            if (data[config1] === undefined || config1.startsWith('_') || config1 === 'constructor') throw new TypeError(`No method named "${config1}"`);
            data[config1](this);
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */ defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$c = 'button';
const DATA_KEY$b = 'bs.button';
const EVENT_KEY$b = `.${DATA_KEY$b}`;
const DATA_API_KEY$7 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Button extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$c;
    }
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    static jQueryInterface(config2) {
        return this.each(function() {
            const data = Button.getOrCreateInstance(this);
            if (config2 === 'toggle') data[config2]();
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */ defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(val) {
    if (val === 'true') return true;
    if (val === 'false') return false;
    if (val === Number(val).toString()) return Number(val);
    if (val === '' || val === 'null') return null;
    return val;
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`
    );
}
const Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {
        };
        const attributes = {
        };
        Object.keys(element.dataset).filter((key)=>key.startsWith('bs')
        ).forEach((key)=>{
            let pureKey = key.replace(/^bs/, '');
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        });
        return attributes;
    },
    getDataAttribute (element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },
    offset (element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        };
    },
    position (element) {
        return {
            top: element.offsetTop,
            left: element.offsetLeft
        };
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const NODE_TEXT = 3;
const SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector)
        );
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode;
        while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT){
            if (ancestor.matches(selector)) parents.push(ancestor);
            ancestor = ancestor.parentNode;
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
            'a',
            'button',
            'input',
            'textarea',
            'select',
            'details',
            '[tabindex]',
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`
        ).join(', ');
        return this.find(focusables, element).filter((el)=>!isDisabled(el) && isVisible(el)
        );
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$b = 'carousel';
const DATA_KEY$a = 'bs.carousel';
const EVENT_KEY$a = `.${DATA_KEY$a}`;
const DATA_API_KEY$6 = '.data-api';
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const SWIPE_THRESHOLD = 40;
const Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
};
const DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
};
const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
};
const EVENT_SLIDE = `slide${EVENT_KEY$a}`;
const EVENT_SLID = `slid${EVENT_KEY$a}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$a}`;
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$a}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$a}`;
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$a}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$a}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$a}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$a}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$a}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$a}`;
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$a}${DATA_API_KEY$6}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SELECTOR_ACTIVE$1 = '.active';
const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_INDICATOR = '[data-bs-target]';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Carousel extends BaseComponent {
    constructor(element11, config3){
        super(element11);
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config3);
        this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
        this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent);
        this._addEventListeners();
    }
    static get Default() {
        return Default$a;
    }
    static get NAME() {
        return NAME$b;
    }
    next() {
        this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) this.next();
    }
    prev() {
        this._slide(ORDER_PREV);
    }
    pause(event2) {
        if (!event2) this._isPaused = true;
        if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
            triggerTransitionEnd(this._element);
            this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
    }
    cycle(event1) {
        if (!event1) this._isPaused = false;
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
        if (this._config && this._config.interval && !this._isPaused) {
            this._updateInterval();
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
    }
    to(index) {
        this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index)
            );
            return;
        }
        if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
        }
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, this._items[index]);
    }
    _getConfig(config4) {
        config4 = {
            ...Default$a,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config4 === 'object' ? config4 : {
            }
        };
        typeCheckConfig(NAME$b, config4, DefaultType$a);
        return config4;
    }
    _handleSwipe() {
        const absDeltax = Math.abs(this.touchDeltaX);
        if (absDeltax <= SWIPE_THRESHOLD) return;
        const direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
        if (!direction) return;
        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
    _addEventListeners() {
        if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event)
        );
        if (this._config.pause === 'hover') {
            EventHandler.on(this._element, EVENT_MOUSEENTER, (event)=>this.pause(event)
            );
            EventHandler.on(this._element, EVENT_MOUSELEAVE, (event)=>this.cycle(event)
            );
        }
        if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        const hasPointerPenTouch = (event)=>{
            return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        };
        const start = (event)=>{
            if (hasPointerPenTouch(event)) this.touchStartX = event.clientX;
            else if (!this._pointerEvent) this.touchStartX = event.touches[0].clientX;
        };
        const move = (event)=>{
            // ensure swiping with one touch and not pinching
            this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
        };
        const end = (event3)=>{
            if (hasPointerPenTouch(event3)) this.touchDeltaX = event3.clientX - this.touchStartX;
            this._handleSwipe();
            if (this._config.pause === 'hover') {
                // If it's a touch-enabled device, mouseenter/leave are fired as
                // part of the mouse compatibility events on first tap - the carousel
                // would stop cycling until user tapped out of it;
                // here, we listen for touchend, explicitly pause the carousel
                // (as if it's the second time we tap on it, mouseenter compat event
                // is NOT fired) and after a timeout (to allow for mouse compatibility
                // events to fire) we explicitly restart cycling
                this.pause();
                if (this.touchTimeout) clearTimeout(this.touchTimeout);
                this.touchTimeout = setTimeout((event)=>this.cycle(event)
                , TOUCHEVENT_COMPAT_WAIT + this._config.interval);
            }
        };
        SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach((itemImg)=>{
            EventHandler.on(itemImg, EVENT_DRAG_START, (event)=>event.preventDefault()
            );
        });
        if (this._pointerEvent) {
            EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>start(event)
            );
            EventHandler.on(this._element, EVENT_POINTERUP, (event)=>end(event)
            );
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
            EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>start(event)
            );
            EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>move(event)
            );
            EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>end(event)
            );
        }
    }
    _keydown(event5) {
        if (/input|textarea/i.test(event5.target.tagName)) return;
        const direction = KEY_TO_DIRECTION[event5.key];
        if (direction) {
            event5.preventDefault();
            this._slide(direction);
        }
    }
    _getItemIndex(element5) {
        this._items = element5 && element5.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element5.parentNode) : [];
        return this._items.indexOf(element5);
    }
    _getItemByOrder(order, activeElement) {
        const isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }
    _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);
        const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));
        return EventHandler.trigger(this._element, EVENT_SLIDE, {
            relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
        });
    }
    _setActiveIndicatorElement(element6) {
        if (this._indicatorsElement) {
            const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
            activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
            activeIndicator.removeAttribute('aria-current');
            const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);
            for(let i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element6)) {
                indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
                indicators[i].setAttribute('aria-current', 'true');
                break;
            }
        }
    }
    _updateInterval() {
        const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
        if (elementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = elementInterval;
        } else this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(directionOrOrder, element7) {
        const order = this._directionToOrder(directionOrOrder);
        const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeElementIndex = this._getItemIndex(activeElement);
        const nextElement = element7 || this._getItemByOrder(order, activeElement);
        const nextElementIndex = this._getItemIndex(nextElement);
        const isCycling = Boolean(this._interval);
        const isNext = order === ORDER_NEXT;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        const eventDirectionName = this._orderToDirection(order);
        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
            this._isSliding = false;
            return;
        }
        if (this._isSliding) return;
        const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        return;
        this._isSliding = true;
        if (isCycling) this.pause();
        this._setActiveIndicatorElement(nextElement);
        this._activeElement = nextElement;
        const triggerSlidEvent = ()=>{
            EventHandler.trigger(this._element, EVENT_SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            });
        };
        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
            nextElement.classList.add(orderClassName);
            reflow(nextElement);
            activeElement.classList.add(directionalClassName);
            nextElement.classList.add(directionalClassName);
            const completeCallBack = ()=>{
                nextElement.classList.remove(directionalClassName, orderClassName);
                nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                this._isSliding = false;
                setTimeout(triggerSlidEvent, 0);
            };
            this._queueCallback(completeCallBack, activeElement, true);
        } else {
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            this._isSliding = false;
            triggerSlidEvent();
        }
        if (isCycling) this.cycle();
    }
    _directionToOrder(direction) {
        if (![
            DIRECTION_RIGHT,
            DIRECTION_LEFT
        ].includes(direction)) return direction;
        if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order1) {
        if (![
            ORDER_NEXT,
            ORDER_PREV
        ].includes(order1)) return order1;
        if (isRTL()) return order1 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return order1 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    static carouselInterface(element8, config5) {
        const data = Carousel.getOrCreateInstance(element8, config5);
        let { _config  } = data;
        if (typeof config5 === 'object') _config = {
            ..._config,
            ...config5
        };
        const action = typeof config5 === 'string' ? config5 : _config.slide;
        if (typeof config5 === 'number') data.to(config5);
        else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') throw new TypeError(`No method named "${action}"`);
            data[action]();
        } else if (_config.interval && _config.ride) {
            data.pause();
            data.cycle();
        }
    }
    static jQueryInterface(config6) {
        return this.each(function() {
            Carousel.carouselInterface(this, config6);
        });
    }
    static dataApiClickHandler(event4) {
        const target = getElementFromSelector(this);
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
        const config = {
            ...Manipulator.getDataAttributes(target),
            ...Manipulator.getDataAttributes(this)
        };
        const slideIndex = this.getAttribute('data-bs-slide-to');
        if (slideIndex) config.interval = false;
        Carousel.carouselInterface(target, config);
        if (slideIndex) Carousel.getInstance(target).to(slideIndex);
        event4.preventDefault();
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for(let i = 0, len = carousels.length; i < len; i++)Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */ defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$a = 'collapse';
const DATA_KEY$9 = 'bs.collapse';
const EVENT_KEY$9 = `.${DATA_KEY$9}`;
const DATA_API_KEY$5 = '.data-api';
const Default$9 = {
    toggle: true,
    parent: null
};
const DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
};
const EVENT_SHOW$5 = `show${EVENT_KEY$9}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$9}`;
const EVENT_HIDE$5 = `hide${EVENT_KEY$9}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$9}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$9}${DATA_API_KEY$5}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Collapse extends BaseComponent {
    constructor(element9, config7){
        super(element9);
        this._isTransitioning = false;
        this._config = this._getConfig(config7);
        this._triggerArray = [];
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
        for(let i = 0, len = toggleList.length; i < len; i++){
            const elem = toggleList[i];
            const selector = getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElem)=>foundElem === this._element
            );
            if (selector !== null && filterElement.length) {
                this._selector = selector;
                this._triggerArray.push(elem);
            }
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    static get Default() {
        return Default$9;
    }
    static get NAME() {
        return NAME$a;
    }
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let actives = [];
        let activesData;
        if (this._config.parent) {
            const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
            actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter((elem)=>!children.includes(elem)
            ); // remove children if greater depth
        }
        const container = SelectorEngine.findOne(this._selector);
        if (actives.length) {
            const tempActiveData = actives.find((elem)=>container !== elem
            );
            activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;
            if (activesData && activesData._isTransitioning) return;
        }
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
        if (startEvent.defaultPrevented) return;
        actives.forEach((elemActive)=>{
            if (container !== elemActive) Collapse.getOrCreateInstance(elemActive, {
                toggle: false
            }).hide();
            if (!activesData) Data.set(elemActive, DATA_KEY$9, null);
        });
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
            this._element.style[dimension] = '';
            EventHandler.trigger(this._element, EVENT_SHOWN$5);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        const triggerArrayLength = this._triggerArray.length;
        for(let i = 0; i < triggerArrayLength; i++){
            const trigger = this._triggerArray[i];
            const elem = getElementFromSelector(trigger);
            if (elem && !this._isShown(elem)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN$5);
        };
        this._element.style[dimension] = '';
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element10 = this._element) {
        return element10.classList.contains(CLASS_NAME_SHOW$7);
    }
    _getConfig(config8) {
        config8 = {
            ...Default$9,
            ...Manipulator.getDataAttributes(this._element),
            ...config8
        };
        config8.toggle = Boolean(config8.toggle); // Coerce string values
        config8.parent = getElement(config8.parent);
        typeCheckConfig(NAME$a, config8, DefaultType$9);
        return config8;
    }
    _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter((elem)=>!children.includes(elem)
        ).forEach((element)=>{
            const selected = getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        });
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        triggerArray.forEach((elem)=>{
            if (isOpen) elem.classList.remove(CLASS_NAME_COLLAPSED);
            else elem.classList.add(CLASS_NAME_COLLAPSED);
            elem.setAttribute('aria-expanded', isOpen);
        });
    }
    static jQueryInterface(config9) {
        return this.each(function() {
            const _config = {
            };
            if (typeof config9 === 'string' && /show|hide/.test(config9)) _config.toggle = false;
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config9 === 'string') {
                if (typeof data[config9] === 'undefined') throw new TypeError(`No method named "${config9}"`);
                data[config9]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') event.preventDefault();
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach((element)=>{
        Collapse.getOrCreateInstance(element, {
            toggle: false
        }).toggle();
    });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */ defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$9 = 'dropdown';
const DATA_KEY$8 = 'bs.dropdown';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$4 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const SPACE_KEY = 'Space';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
const EVENT_HIDE$4 = `hide${EVENT_KEY$8}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$8}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$8}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$8}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$8}${DATA_API_KEY$4}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$8}${DATA_API_KEY$4}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$8}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_NAVBAR = 'navbar';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const Default$8 = {
    offset: [
        0,
        2
    ],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
};
const DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Dropdown extends BaseComponent {
    constructor(element14, config10){
        super(element14);
        this._popper = null;
        this._config = this._getConfig(config10);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();
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
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (isDisabled(this._element) || this._isShown(this._menu)) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);
        if (showEvent.defaultPrevented) return;
        const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar
        if (this._inNavbar) Manipulator.setDataAttribute(this._menu, 'popper', 'none');
        else this._createPopper(parent);
         // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) [].concat(...document.body.children).forEach((elem)=>EventHandler.on(elem, 'mouseover', noop)
        );
        this._element.focus();
        this._element.setAttribute('aria-expanded', true);
        this._menu.classList.add(CLASS_NAME_SHOW$6);
        this._element.classList.add(CLASS_NAME_SHOW$6);
        EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }
    hide() {
        if (isDisabled(this._element) || !this._isShown(this._menu)) return;
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
    _completeHide(relatedTarget1) {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget1);
        if (hideEvent.defaultPrevented) return;
         // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((elem)=>EventHandler.off(elem, 'mouseover', noop)
        );
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove(CLASS_NAME_SHOW$6);
        this._element.classList.remove(CLASS_NAME_SHOW$6);
        this._element.setAttribute('aria-expanded', 'false');
        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget1);
    }
    _getConfig(config11) {
        config11 = {
            ...this.constructor.Default,
            ...Manipulator.getDataAttributes(this._element),
            ...config11
        };
        typeCheckConfig(NAME$9, config11, this.constructor.DefaultType);
        if (typeof config11.reference === 'object' && !isElement(config11.reference) && typeof config11.reference.getBoundingClientRect !== 'function') // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config11;
    }
    _createPopper(parent) {
        if (typeof _core === 'undefined') throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        let referenceElement = this._element;
        if (this._config.reference === 'parent') referenceElement = parent;
        else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
        else if (typeof this._config.reference === 'object') referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        const isDisplayStatic = popperConfig.modifiers.find((modifier)=>modifier.name === 'applyStyles' && modifier.enabled === false
        );
        this._popper = _core.createPopper(referenceElement, this._menu, popperConfig);
        if (isDisplayStatic) Manipulator.setDataAttribute(this._menu, 'popper', 'static');
    }
    _isShown(element12 = this._element) {
        return element12.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getMenuElement() {
        return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
    _getPlacement() {
        const parentDropdown = this._element.parentNode;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
         // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }
    _getOffset() {
        const { offset  } = this._config;
        if (typeof offset === 'string') return offset.split(',').map((val)=>Number.parseInt(val, 10)
        );
        if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element)
        ;
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        }; // Disable Popper if we have a static display
        if (this._config.display === 'static') defaultBsPopperConfig.modifiers = [
            {
                name: 'applyStyles',
                enabled: false
            }
        ];
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _selectMenuItem({ key , target: target1  }) {
        const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
        if (!items.length) return;
         // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        getNextActiveElement(items, target1, key === ARROW_DOWN_KEY, !items.includes(target1)).focus();
    }
    static jQueryInterface(config12) {
        return this.each(function() {
            const data = Dropdown.getOrCreateInstance(this, config12);
            if (typeof config12 !== 'string') return;
            if (typeof data[config12] === 'undefined') throw new TypeError(`No method named "${config12}"`);
            data[config12]();
        });
    }
    static clearMenus(event7) {
        if (event7 && (event7.button === RIGHT_MOUSE_BUTTON || event7.type === 'keyup' && event7.key !== TAB_KEY$1)) return;
        const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);
        for(let i = 0, len = toggles.length; i < len; i++){
            const context = Dropdown.getInstance(toggles[i]);
            if (!context || context._config.autoClose === false) continue;
            if (!context._isShown()) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event7) {
                const composedPath = event7.composedPath();
                const isMenuTarget = composedPath.includes(context._menu);
                if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) continue;
                 // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                if (context._menu.contains(event7.target) && (event7.type === 'keyup' && event7.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event7.target.tagName))) continue;
                if (event7.type === 'click') relatedTarget.clickEvent = event7;
            }
            context._completeHide(relatedTarget);
        }
    }
    static getParentFromElement(element13) {
        return getElementFromSelector(element13) || element13.parentNode;
    }
    static dataApiKeydownHandler(event6) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event6.target.tagName) ? event6.key === SPACE_KEY || event6.key !== ESCAPE_KEY$2 && (event6.key !== ARROW_DOWN_KEY && event6.key !== ARROW_UP_KEY || event6.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event6.key)) return;
        const isActive = this.classList.contains(CLASS_NAME_SHOW$6);
        if (!isActive && event6.key === ESCAPE_KEY$2) return;
        event6.preventDefault();
        event6.stopPropagation();
        if (isDisabled(this)) return;
        const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
        const instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (event6.key === ESCAPE_KEY$2) {
            instance.hide();
            return;
        }
        if (event6.key === ARROW_UP_KEY || event6.key === ARROW_DOWN_KEY) {
            if (!isActive) instance.show();
            instance._selectMenuItem(event6);
            return;
        }
        if (!isActive || event6.key === SPACE_KEY) Dropdown.clearMenus();
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */ defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
class ScrollBarHelper {
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
        this._setElementAttributes(this._element, 'paddingRight', (calculatedValue)=>calculatedValue + width
        ); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', (calculatedValue)=>calculatedValue + width
        );
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', (calculatedValue)=>calculatedValue - width
        );
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');
        this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector4, styleProp, callback2) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProp);
            const calculatedValue = window.getComputedStyle(element)[styleProp];
            element.style[styleProp] = `${callback2(Number.parseFloat(calculatedValue))}px`;
        };
        this._applyManipulationCallback(selector4, manipulationCallBack);
    }
    reset() {
        this._resetElementAttributes(this._element, 'overflow');
        this._resetElementAttributes(this._element, 'paddingRight');
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }
    _saveInitialAttribute(element15, styleProp1) {
        const actualValue = element15.style[styleProp1];
        if (actualValue) Manipulator.setDataAttribute(element15, styleProp1, actualValue);
    }
    _resetElementAttributes(selector1, styleProp2) {
        const manipulationCallBack = (element)=>{
            const value = Manipulator.getDataAttribute(element, styleProp2);
            if (typeof value === 'undefined') element.style.removeProperty(styleProp2);
            else {
                Manipulator.removeDataAttribute(element, styleProp2);
                element.style[styleProp2] = value;
            }
        };
        this._applyManipulationCallback(selector1, manipulationCallBack);
    }
    _applyManipulationCallback(selector2, callBack) {
        if (isElement(selector2)) callBack(selector2);
        else SelectorEngine.find(selector2, this._element).forEach(callBack);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
};
const DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
};
const NAME$8 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$8}`;
class Backdrop {
    constructor(config13){
        this._config = this._getConfig(config13);
        this._isAppended = false;
        this._element = null;
    }
    show(callback3) {
        if (!this._config.isVisible) {
            execute(callback3);
            return;
        }
        this._append();
        if (this._config.isAnimated) reflow(this._getElement());
        this._getElement().classList.add(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            execute(callback3);
        });
    }
    hide(callback4) {
        if (!this._config.isVisible) {
            execute(callback4);
            return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            execute(callback4);
        });
    }
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement('div');
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _getConfig(config14) {
        config14 = {
            ...Default$7,
            ...typeof config14 === 'object' ? config14 : {
            }
        }; // use getElement() with the default "body" to get a fresh Element on each instantiation
        config14.rootElement = getElement(config14.rootElement);
        typeCheckConfig(NAME$8, config14, DefaultType$7);
        return config14;
    }
    _append() {
        if (this._isAppended) return;
        this._config.rootElement.append(this._getElement());
        EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, ()=>{
            execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    dispose() {
        if (!this._isAppended) return;
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    _emulateAnimation(callback5) {
        executeAfterTransition(callback5, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
};
const DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
};
const NAME$7 = 'focustrap';
const DATA_KEY$7 = 'bs.focustrap';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$7}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$7}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';
class FocusTrap {
    constructor(config15){
        this._config = this._getConfig(config15);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    activate() {
        const { trapElement , autofocus  } = this._config;
        if (this._isActive) return;
        if (autofocus) trapElement.focus();
        EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop
        EventHandler.on(document, EVENT_FOCUSIN$1, (event)=>this._handleFocusin(event)
        );
        EventHandler.on(document, EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event)
        );
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$7);
    }
    _handleFocusin(event9) {
        const { target  } = event9;
        const { trapElement  } = this._config;
        if (target === document || target === trapElement || trapElement.contains(target)) return;
        const elements = SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event8) {
        if (event8.key !== TAB_KEY) return;
        this._lastTabNavDirection = event8.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
    _getConfig(config16) {
        config16 = {
            ...Default$6,
            ...typeof config16 === 'object' ? config16 : {
            }
        };
        typeCheckConfig(NAME$7, config16, DefaultType$6);
        return config16;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$6 = 'modal';
const DATA_KEY$6 = 'bs.modal';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
};
const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
};
const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$6}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Modal extends BaseComponent {
    constructor(element17, config17){
        super(element17);
        this._config = this._getConfig(config17);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
    }
    static get Default() {
        return Default$5;
    }
    static get NAME() {
        return NAME$6;
    }
    toggle(relatedTarget2) {
        return this._isShown ? this.hide() : this.show(relatedTarget2);
    }
    show(relatedTarget3) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
            relatedTarget: relatedTarget3
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        if (this._isAnimated()) this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._setEscapeEvent();
        this._setResizeEvent();
        EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, ()=>{
            EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, (event)=>{
                if (event.target === this._element) this._ignoreBackdropClick = true;
            });
        });
        this._showBackdrop(()=>this._showElement(relatedTarget3)
        );
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        const isAnimated = this._isAnimated();
        if (isAnimated) this._isTransitioning = true;
        this._setEscapeEvent();
        this._setResizeEvent();
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW$4);
        EventHandler.off(this._element, EVENT_CLICK_DISMISS);
        EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);
        this._queueCallback(()=>this._hideModal()
        , this._element, isAnimated);
    }
    dispose() {
        [
            window,
            this._dialog
        ].forEach((htmlElement)=>EventHandler.off(htmlElement, EVENT_KEY$6)
        );
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
            // 'static' option will be translated to true, and booleans will keep their value
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _getConfig(config18) {
        config18 = {
            ...Default$5,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config18 === 'object' ? config18 : {
            }
        };
        typeCheckConfig(NAME$6, config18, DefaultType$5);
        return config18;
    }
    _showElement(relatedTarget4) {
        const isAnimated = this._isAnimated();
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) // Don't move modal's DOM position
        document.body.append(this._element);
        this._element.style.display = 'block';
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.scrollTop = 0;
        if (modalBody) modalBody.scrollTop = 0;
        if (isAnimated) reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                relatedTarget: relatedTarget4
            });
        };
        this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }
    _setEscapeEvent() {
        if (this._isShown) EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
                event.preventDefault();
                this.hide();
            } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) this._triggerBackdropTransition();
        });
        else EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
    _setResizeEvent() {
        if (this._isShown) EventHandler.on(window, EVENT_RESIZE, ()=>this._adjustDialog()
        );
        else EventHandler.off(window, EVENT_RESIZE);
    }
    _hideModal() {
        this._element.style.display = 'none';
        this._element.setAttribute('aria-hidden', true);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove(CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$3);
        });
    }
    _showBackdrop(callback6) {
        EventHandler.on(this._element, EVENT_CLICK_DISMISS, (event)=>{
            if (this._ignoreBackdropClick) {
                this._ignoreBackdropClick = false;
                return;
            }
            if (event.target !== event.currentTarget) return;
            if (this._config.backdrop === true) this.hide();
            else if (this._config.backdrop === 'static') this._triggerBackdropTransition();
        });
        this._backdrop.show(callback6);
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        if (hideEvent.defaultPrevented) return;
        const { classList , scrollHeight , style  } = this._element;
        const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed
        if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) style.overflowY = 'hidden';
        classList.add(CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            classList.remove(CLASS_NAME_STATIC);
            if (!isModalOverflowing) this._queueCallback(()=>{
                style.overflowY = '';
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------
    _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) this._element.style.paddingLeft = `${scrollbarWidth}px`;
        if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) this._element.style.paddingRight = `${scrollbarWidth}px`;
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
    }
    static jQueryInterface(config19, relatedTarget5) {
        return this.each(function() {
            const data = Modal.getOrCreateInstance(this, config19);
            if (typeof config19 !== 'string') return;
            if (typeof data[config19] === 'undefined') throw new TypeError(`No method named "${config19}"`);
            data[config19](relatedTarget5);
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    EventHandler.one(target, EVENT_SHOW$3, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
            if (isVisible(this)) this.focus();
        });
    }); // avoid conflict when clicking moddal toggler while another one is open
    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (allReadyOpen) Modal.getInstance(allReadyOpen).hide();
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */ defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$5 = 'offcanvas';
const DATA_KEY$5 = 'bs.offcanvas';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const DATA_API_KEY$2 = '.data-api';
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
const ESCAPE_KEY = 'Escape';
const Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
};
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Offcanvas extends BaseComponent {
    constructor(element16, config20){
        super(element16);
        this._config = this._getConfig(config20);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    static get NAME() {
        return NAME$5;
    }
    static get Default() {
        return Default$4;
    }
    toggle(relatedTarget6) {
        return this._isShown ? this.hide() : this.show(relatedTarget6);
    }
    show(relatedTarget7) {
        if (this._isShown) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
            relatedTarget: relatedTarget7
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._element.style.visibility = 'visible';
        this._backdrop.show();
        if (!this._config.scroll) new ScrollBarHelper().hide();
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.classList.add(CLASS_NAME_SHOW$3);
        const completeCallBack = ()=>{
            if (!this._config.scroll) this._focustrap.activate();
            EventHandler.trigger(this._element, EVENT_SHOWN$2, {
                relatedTarget: relatedTarget7
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.remove(CLASS_NAME_SHOW$3);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.setAttribute('aria-hidden', true);
            this._element.removeAttribute('aria-modal');
            this._element.removeAttribute('role');
            this._element.style.visibility = 'hidden';
            if (!this._config.scroll) new ScrollBarHelper().reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$2);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    _getConfig(config21) {
        config21 = {
            ...Default$4,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config21 === 'object' ? config21 : {
            }
        };
        typeCheckConfig(NAME$5, config21, DefaultType$4);
        return config21;
    }
    _initializeBackDrop() {
        return new Backdrop({
            className: CLASS_NAME_BACKDROP,
            isVisible: this._config.backdrop,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: ()=>this.hide()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
            if (this._config.keyboard && event.key === ESCAPE_KEY) this.hide();
        });
    }
    static jQueryInterface(config22) {
        return this.each(function() {
            const data = Offcanvas.getOrCreateInstance(this, config22);
            if (typeof config22 !== 'string') return;
            if (data[config22] === undefined || config22.startsWith('_') || config22 === 'constructor') throw new TypeError(`No method named "${config22}"`);
            data[config22](this);
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    EventHandler.one(target, EVENT_HIDDEN$2, ()=>{
        // focus on trigger when it is closed
        if (isVisible(this)) this.focus();
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (allReadyOpen && allReadyOpen !== target) Offcanvas.getInstance(allReadyOpen).hide();
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>SelectorEngine.find(OPEN_SELECTOR).forEach((el)=>Offcanvas.getOrCreateInstance(el).show()
    )
);
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */ defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const uriAttributes = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
]);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
const allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
        return true;
    }
    const regExp = allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp
    ); // Check if a regular expression validates the attribute.
    for(let i = 0, len = regExp.length; i < len; i++){
        if (regExp[i].test(attributeName)) return true;
    }
    return false;
};
const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': [
        'class',
        'dir',
        'id',
        'lang',
        'role',
        ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        'target',
        'href',
        'title',
        'rel'
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
        'src',
        'srcset',
        'alt',
        'title',
        'width',
        'height'
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
function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFn && typeof sanitizeFn === 'function') return sanitizeFn(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
    for(let i = 0, len = elements.length; i < len; i++){
        const element = elements[i];
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
        attributeList.forEach((attribute)=>{
            if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
        });
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$4 = 'tooltip';
const DATA_KEY$4 = 'bs.tooltip';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const CLASS_PREFIX$1 = 'bs-tooltip';
const DISALLOWED_ATTRIBUTES = new Set([
    'sanitize',
    'allowList',
    'sanitizeFn'
]);
const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
};
const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
    animation: true,
    template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [
        0,
        0
    ],
    container: false,
    fallbackPlacements: [
        'top',
        'right',
        'bottom',
        'left'
    ],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
};
const Event$2 = {
    HIDE: `hide${EVENT_KEY$4}`,
    HIDDEN: `hidden${EVENT_KEY$4}`,
    SHOW: `show${EVENT_KEY$4}`,
    SHOWN: `shown${EVENT_KEY$4}`,
    INSERTED: `inserted${EVENT_KEY$4}`,
    CLICK: `click${EVENT_KEY$4}`,
    FOCUSIN: `focusin${EVENT_KEY$4}`,
    FOCUSOUT: `focusout${EVENT_KEY$4}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
};
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const HOVER_STATE_SHOW = 'show';
const HOVER_STATE_OUT = 'out';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Tooltip extends BaseComponent {
    constructor(element18, config23){
        if (typeof _core === 'undefined') throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
        super(element18); // private
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {
        };
        this._popper = null; // Protected
        this._config = this._getConfig(config23);
        this.tip = null;
        this._setListeners();
    }
    static get Default() {
        return Default$3;
    }
    static get NAME() {
        return NAME$4;
    }
    static get Event() {
        return Event$2;
    }
    static get DefaultType() {
        return DefaultType$3;
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
    toggle(event11) {
        if (!this._isEnabled) return;
        if (event11) {
            const context = this._initializeOnDelegatedTarget(event11);
            context._activeTrigger.click = !context._activeTrigger.click;
            if (context._isWithActiveTrigger()) context._enter(null, context);
            else context._leave(null, context);
        } else {
            if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
                this._leave(null, this);
                return;
            }
            this._enter(null, this);
        }
    }
    dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this.tip) this.tip.remove();
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === 'none') throw new Error('Please use show on visible elements');
        if (!(this.isWithContent() && this._isEnabled)) return;
        const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        const shadowRoot = findShadowRoot(this._element);
        const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
         // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
        // This will be removed later in favor of a `setContent` method
        if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
            this._disposePopper();
            this.tip.remove();
            this.tip = null;
        }
        const tip = this.getTipElement();
        const tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this._element.setAttribute('aria-describedby', tipId);
        if (this._config.animation) tip.classList.add(CLASS_NAME_FADE$2);
        const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
        const attachment = this._getAttachment(placement);
        this._addAttachmentClass(attachment);
        const { container  } = this._config;
        Data.set(tip, this.constructor.DATA_KEY, this);
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        }
        if (this._popper) this._popper.update();
        else this._popper = _core.createPopper(this._element, tip, this._getPopperConfig(attachment));
        tip.classList.add(CLASS_NAME_SHOW$2);
        const customClass = this._resolvePossibleFunction(this._config.customClass);
        if (customClass) tip.classList.add(...customClass.split(' '));
         // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((element)=>{
            EventHandler.on(element, 'mouseover', noop);
        });
        const complete = ()=>{
            const prevHoverState = this._hoverState;
            this._hoverState = null;
            EventHandler.trigger(this._element, this.constructor.Event.SHOWN);
            if (prevHoverState === HOVER_STATE_OUT) this._leave(null, this);
        };
        const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);
        this._queueCallback(complete, this.tip, isAnimated);
    }
    hide() {
        if (!this._popper) return;
        const tip = this.getTipElement();
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (this._hoverState !== HOVER_STATE_SHOW) tip.remove();
            this._cleanTipClass();
            this._element.removeAttribute('aria-describedby');
            EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);
            this._disposePopper();
        };
        const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);
        if (hideEvent.defaultPrevented) return;
        tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((element)=>EventHandler.off(element, 'mouseover', noop)
        );
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);
        this._queueCallback(complete, this.tip, isAnimated);
        this._hoverState = '';
    }
    update() {
        if (this._popper !== null) this._popper.update();
    }
    isWithContent() {
        return Boolean(this.getTitle());
    }
    getTipElement() {
        if (this.tip) return this.tip;
        const element = document.createElement('div');
        element.innerHTML = this._config.template;
        const tip = element.children[0];
        this.setContent(tip);
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        this.tip = tip;
        return this.tip;
    }
    setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }
    _sanitizeAndSetContent(template, content, selector3) {
        const templateElement = SelectorEngine.findOne(selector3, template);
        if (!content && templateElement) {
            templateElement.remove();
            return;
        } // we use append for html objects to maintain js events
        this.setElementContent(templateElement, content);
    }
    setElementContent(element20, content1) {
        if (element20 === null) return;
        if (isElement(content1)) {
            content1 = getElement(content1); // content is a DOM node or a jQuery
            if (this._config.html) {
                if (content1.parentNode !== element20) {
                    element20.innerHTML = '';
                    element20.append(content1);
                }
            } else element20.textContent = content1.textContent;
            return;
        }
        if (this._config.html) {
            if (this._config.sanitize) content1 = sanitizeHtml(content1, this._config.allowList, this._config.sanitizeFn);
            element20.innerHTML = content1;
        } else element20.textContent = content1;
    }
    getTitle() {
        const title = this._element.getAttribute('data-bs-original-title') || this._config.title;
        return this._resolvePossibleFunction(title);
    }
    updateAttachment(attachment) {
        if (attachment === 'right') return 'end';
        if (attachment === 'left') return 'start';
        return attachment;
    }
    _initializeOnDelegatedTarget(event10, context) {
        return context || this.constructor.getOrCreateInstance(event10.delegateTarget, this._getDelegateConfig());
    }
    _getOffset() {
        const { offset  } = this._config;
        if (typeof offset === 'string') return offset.split(',').map((val)=>Number.parseInt(val, 10)
        );
        if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element)
        ;
        return offset;
    }
    _resolvePossibleFunction(content2) {
        return typeof content2 === 'function' ? content2.call(this._element) : content2;
    }
    _getPopperConfig(attachment1) {
        const defaultBsPopperConfig = {
            placement: attachment1,
            modifiers: [
                {
                    name: 'flip',
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: 'arrow',
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: 'onChange',
                    enabled: true,
                    phase: 'afterWrite',
                    fn: (data)=>this._handlePopperPlacementChange(data)
                }
            ],
            onFirstUpdate: (data)=>{
                if (data.options.placement !== data.placement) this._handlePopperPlacementChange(data);
            }
        };
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _addAttachmentClass(attachment2) {
        this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment2)}`);
    }
    _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
    }
    _setListeners() {
        const triggers = this._config.trigger.split(' ');
        triggers.forEach((trigger)=>{
            if (trigger === 'click') EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, (event)=>this.toggle(event)
            );
            else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
                const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                EventHandler.on(this._element, eventIn, this._config.selector, (event)=>this._enter(event)
                );
                EventHandler.on(this._element, eventOut, this._config.selector, (event)=>this._leave(event)
                );
            }
        });
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._config.selector) this._config = {
            ...this._config,
            trigger: 'manual',
            selector: ''
        };
        else this._fixTitle();
    }
    _fixTitle() {
        const title = this._element.getAttribute('title');
        const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');
        if (title || originalTitleType !== 'string') {
            this._element.setAttribute('data-bs-original-title', title || '');
            if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) this._element.setAttribute('aria-label', title);
            this._element.setAttribute('title', '');
        }
    }
    _enter(event13, context1) {
        context1 = this._initializeOnDelegatedTarget(event13, context1);
        if (event13) context1._activeTrigger[event13.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        if (context1.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context1._hoverState === HOVER_STATE_SHOW) {
            context1._hoverState = HOVER_STATE_SHOW;
            return;
        }
        clearTimeout(context1._timeout);
        context1._hoverState = HOVER_STATE_SHOW;
        if (!context1._config.delay || !context1._config.delay.show) {
            context1.show();
            return;
        }
        context1._timeout = setTimeout(()=>{
            if (context1._hoverState === HOVER_STATE_SHOW) context1.show();
        }, context1._config.delay.show);
    }
    _leave(event12, context2) {
        context2 = this._initializeOnDelegatedTarget(event12, context2);
        if (event12) context2._activeTrigger[event12.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context2._element.contains(event12.relatedTarget);
        if (context2._isWithActiveTrigger()) return;
        clearTimeout(context2._timeout);
        context2._hoverState = HOVER_STATE_OUT;
        if (!context2._config.delay || !context2._config.delay.hide) {
            context2.hide();
            return;
        }
        context2._timeout = setTimeout(()=>{
            if (context2._hoverState === HOVER_STATE_OUT) context2.hide();
        }, context2._config.delay.hide);
    }
    _isWithActiveTrigger() {
        for(const trigger in this._activeTrigger){
            if (this._activeTrigger[trigger]) return true;
        }
        return false;
    }
    _getConfig(config24) {
        const dataAttributes = Manipulator.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach((dataAttr)=>{
            if (DISALLOWED_ATTRIBUTES.has(dataAttr)) delete dataAttributes[dataAttr];
        });
        config24 = {
            ...this.constructor.Default,
            ...dataAttributes,
            ...typeof config24 === 'object' && config24 ? config24 : {
            }
        };
        config24.container = config24.container === false ? document.body : getElement(config24.container);
        if (typeof config24.delay === 'number') config24.delay = {
            show: config24.delay,
            hide: config24.delay
        };
        if (typeof config24.title === 'number') config24.title = config24.title.toString();
        if (typeof config24.content === 'number') config24.content = config24.content.toString();
        typeCheckConfig(NAME$4, config24, this.constructor.DefaultType);
        if (config24.sanitize) config24.template = sanitizeHtml(config24.template, config24.allowList, config24.sanitizeFn);
        return config24;
    }
    _getDelegateConfig() {
        const config = {
        };
        for(const key in this._config)if (this.constructor.Default[key] !== this._config[key]) config[key] = this._config[key];
         // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _cleanTipClass() {
        const tip = this.getTipElement();
        const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
        const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);
        if (tabClass !== null && tabClass.length > 0) tabClass.map((token)=>token.trim()
        ).forEach((tClass)=>tip.classList.remove(tClass)
        );
    }
    _getBasicClassPrefix() {
        return CLASS_PREFIX$1;
    }
    _handlePopperPlacementChange(popperData) {
        const { state  } = popperData;
        if (!state) return;
        this.tip = state.elements.popper;
        this._cleanTipClass();
        this._addAttachmentClass(this._getAttachment(state.placement));
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
    }
    static jQueryInterface(config25) {
        return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config25);
            if (typeof config25 === 'string') {
                if (typeof data[config25] === 'undefined') throw new TypeError(`No method named "${config25}"`);
                data[config25]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */ defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$3 = 'popover';
const DATA_KEY$3 = 'bs.popover';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const CLASS_PREFIX = 'bs-popover';
const Default$2 = {
    ...Tooltip.Default,
    placement: 'right',
    offset: [
        0,
        8
    ],
    trigger: 'click',
    content: '',
    template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>"
};
const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: '(string|element|function)'
};
const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
};
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Popover extends Tooltip {
    // Getters
    static get Default() {
        return Default$2;
    }
    static get NAME() {
        return NAME$3;
    }
    static get Event() {
        return Event$1;
    }
    static get DefaultType() {
        return DefaultType$2;
    }
    isWithContent() {
        return this.getTitle() || this._getContent();
    }
    setContent(tip1) {
        this._sanitizeAndSetContent(tip1, this.getTitle(), SELECTOR_TITLE);
        this._sanitizeAndSetContent(tip1, this._getContent(), SELECTOR_CONTENT);
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
        return CLASS_PREFIX;
    }
    static jQueryInterface(config26) {
        return this.each(function() {
            const data = Popover.getOrCreateInstance(this, config26);
            if (typeof config26 === 'string') {
                if (typeof data[config26] === 'undefined') throw new TypeError(`No method named "${config26}"`);
                data[config26]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */ defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY$1 = '.data-api';
const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
};
const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
};
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
const SELECTOR_DROPDOWN$1 = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const METHOD_OFFSET = 'offset';
const METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class ScrollSpy extends BaseComponent {
    constructor(element19, config27){
        super(element19);
        this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
        this._config = this._getConfig(config27);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        EventHandler.on(this._scrollElement, EVENT_SCROLL, ()=>this._process()
        );
        this.refresh();
        this._process();
    }
    static get Default() {
        return Default$1;
    }
    static get NAME() {
        return NAME$2;
    }
    refresh() {
        const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
        targets.map((element)=>{
            const targetSelector = getSelectorFromElement(element);
            const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;
            if (target) {
                const targetBCR = target.getBoundingClientRect();
                if (targetBCR.width || targetBCR.height) return [
                    Manipulator[offsetMethod](target).top + offsetBase,
                    targetSelector
                ];
            }
            return null;
        }).filter((item)=>item
        ).sort((a, b)=>a[0] - b[0]
        ).forEach((item)=>{
            this._offsets.push(item[0]);
            this._targets.push(item[1]);
        });
    }
    dispose() {
        EventHandler.off(this._scrollElement, EVENT_KEY$2);
        super.dispose();
    }
    _getConfig(config28) {
        config28 = {
            ...Default$1,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config28 === 'object' && config28 ? config28 : {
            }
        };
        config28.target = getElement(config28.target) || document.documentElement;
        typeCheckConfig(NAME$2, config28, DefaultType$1);
        return config28;
    }
    _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
        const scrollTop = this._getScrollTop() + this._config.offset;
        const scrollHeight = this._getScrollHeight();
        const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
        if (this._scrollHeight !== scrollHeight) this.refresh();
        if (scrollTop >= maxScroll) {
            const target = this._targets[this._targets.length - 1];
            if (this._activeTarget !== target) this._activate(target);
            return;
        }
        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
            this._activeTarget = null;
            this._clear();
            return;
        }
        for(let i = this._offsets.length; i--;){
            const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
            if (isActiveTarget) this._activate(this._targets[i]);
        }
    }
    _activate(target) {
        this._activeTarget = target;
        this._clear();
        const queries = SELECTOR_LINK_ITEMS.split(',').map((selector)=>`${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`
        );
        const link = SelectorEngine.findOne(queries.join(','), this._config.target);
        link.classList.add(CLASS_NAME_ACTIVE$1);
        if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        else SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach((listGroup)=>{
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1)
            ); // Handle special case when .nav-link is inside .nav-item
            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach((navItem)=>{
                SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1)
                );
            });
        });
        EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _clear() {
        SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter((node)=>node.classList.contains(CLASS_NAME_ACTIVE$1)
        ).forEach((node)=>node.classList.remove(CLASS_NAME_ACTIVE$1)
        );
    }
    static jQueryInterface(config29) {
        return this.each(function() {
            const data = ScrollSpy.getOrCreateInstance(this, config29);
            if (typeof config29 !== 'string') return;
            if (typeof data[config29] === 'undefined') throw new TypeError(`No method named "${config29}"`);
            data[config29]();
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach((spy)=>new ScrollSpy(spy)
    );
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */ defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const DATA_API_KEY = '.data-api';
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ACTIVE_UL = ':scope > li > .active';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Tab extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$1;
    }
    show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) return;
        let previous;
        const target = getElementFromSelector(this._element);
        const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);
        if (listElement) {
            const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
            previous = SelectorEngine.find(itemSelector, listElement);
            previous = previous[previous.length - 1];
        }
        const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
            relatedTarget: this._element
        }) : null;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
            relatedTarget: previous
        });
        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
        this._activate(this._element, listElement);
        const complete = ()=>{
            EventHandler.trigger(previous, EVENT_HIDDEN$1, {
                relatedTarget: this._element
            });
            EventHandler.trigger(this._element, EVENT_SHOWN$1, {
                relatedTarget: previous
            });
        };
        if (target) this._activate(target, target.parentNode, complete);
        else complete();
    }
    _activate(element, container, callback7) {
        const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
        const active = activeElements[0];
        const isTransitioning = callback7 && active && active.classList.contains(CLASS_NAME_FADE$1);
        const complete = ()=>this._transitionComplete(element, active, callback7)
        ;
        if (active && isTransitioning) {
            active.classList.remove(CLASS_NAME_SHOW$1);
            this._queueCallback(complete, element, true);
        } else complete();
    }
    _transitionComplete(element21, active, callback8) {
        if (active) {
            active.classList.remove(CLASS_NAME_ACTIVE);
            const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
            if (dropdownChild) dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
            if (active.getAttribute('role') === 'tab') active.setAttribute('aria-selected', false);
        }
        element21.classList.add(CLASS_NAME_ACTIVE);
        if (element21.getAttribute('role') === 'tab') element21.setAttribute('aria-selected', true);
        reflow(element21);
        if (element21.classList.contains(CLASS_NAME_FADE$1)) element21.classList.add(CLASS_NAME_SHOW$1);
        let parent = element21.parentNode;
        if (parent && parent.nodeName === 'LI') parent = parent.parentNode;
        if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
            const dropdownElement = element21.closest(SELECTOR_DROPDOWN);
            if (dropdownElement) SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach((dropdown)=>dropdown.classList.add(CLASS_NAME_ACTIVE)
            );
            element21.setAttribute('aria-expanded', true);
        }
        if (callback8) callback8();
    }
    static jQueryInterface(config30) {
        return this.each(function() {
            const data = Tab.getOrCreateInstance(this);
            if (typeof config30 === 'string') {
                if (typeof data[config30] === 'undefined') throw new TypeError(`No method named "${config30}"`);
                data[config30]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    const data = Tab.getOrCreateInstance(this);
    data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */ defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
};
const Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Toast extends BaseComponent {
    constructor(element22, config31){
        super(element22);
        this._config = this._getConfig(config31);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    static get DefaultType() {
        return DefaultType;
    }
    static get Default() {
        return Default;
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
        this._element.classList.add(CLASS_NAME_SHOW);
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this._element.classList.contains(CLASS_NAME_SHOW)) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove(CLASS_NAME_SHOWING);
            this._element.classList.remove(CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this._element.classList.contains(CLASS_NAME_SHOW)) this._element.classList.remove(CLASS_NAME_SHOW);
        super.dispose();
    }
    _getConfig(config32) {
        config32 = {
            ...Default,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config32 === 'object' && config32 ? config32 : {
            }
        };
        typeCheckConfig(NAME, config32, this.constructor.DefaultType);
        return config32;
    }
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event14, isInteracting) {
        switch(event14.type){
            case 'mouseover':
            case 'mouseout':
                this._hasMouseInteraction = isInteracting;
                break;
            case 'focusin':
            case 'focusout':
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event14.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true)
        );
        EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false)
        );
        EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true)
        );
        EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false)
        );
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    static jQueryInterface(config33) {
        return this.each(function() {
            const data = Toast.getOrCreateInstance(this, config33);
            if (typeof config33 === 'string') {
                if (typeof data[config33] === 'undefined') throw new TypeError(`No method named "${config33}"`);
                data[config33](this);
            }
        });
    }
}
enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */ defineJQueryPlugin(Toast);

},{"@popperjs/core":"9BiQQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9BiQQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
parcelHelpers.export(exports, "createPopperBase", ()=>_createPopperJs.createPopper
);
parcelHelpers.export(exports, "createPopper", ()=>_popperJs.createPopper
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>_popperLiteJs.createPopper
);
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"jZp3w","./modifiers/index.js":"i6nAS","./createPopper.js":"6w8cU","./popper.js":"4kzpa","./popper-lite.js":"jX6KS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jZp3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top
);
parcelHelpers.export(exports, "bottom", ()=>bottom
);
parcelHelpers.export(exports, "right", ()=>right
);
parcelHelpers.export(exports, "left", ()=>left
);
parcelHelpers.export(exports, "auto", ()=>auto
);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements
);
parcelHelpers.export(exports, "start", ()=>start
);
parcelHelpers.export(exports, "end", ()=>end
);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents
);
parcelHelpers.export(exports, "viewport", ()=>viewport
);
parcelHelpers.export(exports, "popper", ()=>popper
);
parcelHelpers.export(exports, "reference", ()=>reference
);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements
);
parcelHelpers.export(exports, "placements", ()=>placements
);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead
);
parcelHelpers.export(exports, "read", ()=>read
);
parcelHelpers.export(exports, "afterRead", ()=>afterRead
);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "afterMain", ()=>afterMain
);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite
);
parcelHelpers.export(exports, "write", ()=>write
);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite
);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases
);
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
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
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"i6nAS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>_applyStylesJsDefault.default
);
parcelHelpers.export(exports, "arrow", ()=>_arrowJsDefault.default
);
parcelHelpers.export(exports, "computeStyles", ()=>_computeStylesJsDefault.default
);
parcelHelpers.export(exports, "eventListeners", ()=>_eventListenersJsDefault.default
);
parcelHelpers.export(exports, "flip", ()=>_flipJsDefault.default
);
parcelHelpers.export(exports, "hide", ()=>_hideJsDefault.default
);
parcelHelpers.export(exports, "offset", ()=>_offsetJsDefault.default
);
parcelHelpers.export(exports, "popperOffsets", ()=>_popperOffsetsJsDefault.default
);
parcelHelpers.export(exports, "preventOverflow", ()=>_preventOverflowJsDefault.default
);
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

},{"./applyStyles.js":"fz4DR","./arrow.js":"aFbbE","./computeStyles.js":"jb5QZ","./eventListeners.js":"6Xsje","./flip.js":"6hQNA","./hide.js":"1tv8l","./offset.js":"228UQ","./popperOffsets.js":"I1CrS","./preventOverflow.js":"iquIt","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fz4DR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name1) {
        var style = state.styles[name1] || {
        };
        var attributes = state.attributes[name1] || {
        };
        var element = state.elements[name1]; // arrow is optional + virtual elements
        if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {
        }
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {
            };
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style1 = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {
            }); // arrow is optional + virtual elements
            if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
            Object.assign(element.style, style1);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};

},{"../dom-utils/getNodeName.js":"6JAN3","../dom-utils/instanceOf.js":"fKIgP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6JAN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fKIgP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement
);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement
);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot
);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = _getWindowJsDefault.default(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"htzDW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"htzDW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aFbbE":[function(require,module,exports) {
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
    padding = typeof padding === 'function' ? padding(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : padding;
    return _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var axis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var isVertical = [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = _getLayoutRectJsDefault.default(arrowElement);
    var minProp = axis === 'y' ? _enumsJs.top : _enumsJs.left;
    var maxProp = axis === 'y' ? _enumsJs.bottom : _enumsJs.right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = _getOffsetParentJsDefault.default(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = _withinJs.within(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {
    }, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!_instanceOfJs.isHTMLElement(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
        'the arrow.'
    ].join(' '));
    if (!_containsJsDefault.default(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.'
        ].join(' '));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

},{"../utils/getBasePlacement.js":"c2UOX","../dom-utils/getLayoutRect.js":"3QcLC","../dom-utils/contains.js":"c5XYO","../dom-utils/getOffsetParent.js":"cEO6a","../utils/getMainAxisFromPlacement.js":"bDf0O","../utils/within.js":"91duw","../utils/mergePaddingObject.js":"h6lM0","../utils/expandToHashMap.js":"fPt6e","../enums.js":"jZp3w","../dom-utils/instanceOf.js":"fKIgP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c2UOX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"jZp3w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3QcLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = _getBoundingClientRectJsDefault.default(element); // Use the clientRect sizes if it's not been transformed.
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

},{"./getBoundingClientRect.js":"ey7tS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ey7tS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) includeScale = false;
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (_instanceOfJs.isHTMLElement(element) && includeScale) {
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
        // Fallback to 1 in case both values are `0`
        if (offsetWidth > 0) scaleX = _mathJs.round(rect.width) / offsetWidth || 1;
        if (offsetHeight > 0) scaleY = _mathJs.round(rect.height) / offsetHeight || 1;
    }
    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}
exports.default = getBoundingClientRect;

},{"./instanceOf.js":"fKIgP","../utils/math.js":"fL6pm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fL6pm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max
);
parcelHelpers.export(exports, "min", ()=>min
);
parcelHelpers.export(exports, "round", ()=>round
);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c5XYO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && _instanceOfJs.isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"fKIgP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cEO6a":[function(require,module,exports) {
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
function getTrueOffsetParent(element) {
    if (!_instanceOfJs.isHTMLElement(element) || _getComputedStyleJsDefault.default(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;
    if (isIE && _instanceOfJs.isHTMLElement(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = _getComputedStyleJsDefault.default(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = _getParentNodeJsDefault.default(element);
    while(_instanceOfJs.isHTMLElement(currentNode) && [
        'html',
        'body'
    ].indexOf(_getNodeNameJsDefault.default(currentNode)) < 0){
        var css = _getComputedStyleJsDefault.default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = _getWindowJsDefault.default(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && _isTableElementJsDefault.default(offsetParent) && _getComputedStyleJsDefault.default(offsetParent).position === 'static')offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (_getNodeNameJsDefault.default(offsetParent) === 'html' || _getNodeNameJsDefault.default(offsetParent) === 'body' && _getComputedStyleJsDefault.default(offsetParent).position === 'static')) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"htzDW","./getNodeName.js":"6JAN3","./getComputedStyle.js":"daHn5","./instanceOf.js":"fKIgP","./isTableElement.js":"lzjUw","./getParentNode.js":"alOJj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"daHn5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return _getWindowJsDefault.default(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"htzDW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lzjUw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf(_getNodeNameJsDefault.default(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"6JAN3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"alOJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if (_getNodeNameJsDefault.default(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || element.parentNode || (_instanceOfJs.isShadowRoot(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _getDocumentElementJsDefault.default(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"6JAN3","./getDocumentElement.js":"eJuqT","./instanceOf.js":"fKIgP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eJuqT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((_instanceOfJs.isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"fKIgP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bDf0O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"91duw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within
);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp
);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return _mathJs.max(min, _mathJs.min(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"fL6pm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h6lM0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({
    }, _getFreshSideObjectJsDefault.default(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"73NUq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"73NUq":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fPt6e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {
    });
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jb5QZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles
);
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
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: _mathJs.round(x * dpr) / dpr || 0,
        y: _mathJs.round(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = _enumsJs.left;
    var sideY = _enumsJs.top;
    var win = window;
    if (adaptive) {
        var offsetParent = _getOffsetParentJsDefault.default(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === _getWindowJsDefault.default(popper)) {
            offsetParent = _getDocumentElementJsDefault.default(popper);
            if (_getComputedStyleJsDefault.default(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        if (placement === _enumsJs.top || (placement === _enumsJs.left || placement === _enumsJs.right) && variation === _enumsJs.end) {
            sideY = _enumsJs.bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === _enumsJs.left || (placement === _enumsJs.top || placement === _enumsJs.bottom) && variation === _enumsJs.end) {
            sideX = _enumsJs.right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({
        }, commonStyles, (_Object$assign = {
        }, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({
    }, commonStyles, (_Object$assign2 = {
    }, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref4) {
    var state = _ref4.state, options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = _getComputedStyleJsDefault.default(state.elements.popper).transitionProperty || '';
    if (adaptive && [
        'transform',
        'top',
        'right',
        'bottom',
        'left'
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        'Popper: Detected CSS transitions on at least one of the following',
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        '\n\n',
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        'for smooth transitions, or remove these properties from the CSS',
        'transition declaration on the popper element if only transitioning',
        'opacity or background-color for example.',
        '\n\n',
        'We recommend using the popper element as a wrapper around an inner',
        'element that can have any CSS property transitioned for animations.'
    ].join(' '));
    var commonStyles = {
        placement: _getBasePlacementJsDefault.default(state.placement),
        variation: _getVariationJsDefault.default(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
    }, state.styles.popper, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
    }, state.styles.arrow, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {
    }
};

},{"../enums.js":"jZp3w","../dom-utils/getOffsetParent.js":"cEO6a","../dom-utils/getWindow.js":"htzDW","../dom-utils/getDocumentElement.js":"eJuqT","../dom-utils/getComputedStyle.js":"daHn5","../utils/getBasePlacement.js":"c2UOX","../utils/getVariation.js":"f9eYT","../utils/math.js":"fL6pm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f9eYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split('-')[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6Xsje":[function(require,module,exports) {
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
    var window = _getWindowJsDefault.default(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {
    },
    effect: effect,
    data: {
    }
};

},{"../dom-utils/getWindow.js":"htzDW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6hQNA":[function(require,module,exports) {
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
    if (_getBasePlacementJsDefault.default(placement) === _enumsJs.auto) return [];
    var oppositePlacement = _getOppositePlacementJsDefault.default(placement);
    return [
        _getOppositeVariationPlacementJsDefault.default(placement),
        oppositePlacement,
        _getOppositeVariationPlacementJsDefault.default(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = _getBasePlacementJsDefault.default(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        _getOppositePlacementJsDefault.default(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat(_getBasePlacementJsDefault.default(placement) === _enumsJs.auto ? _computeAutoPlacementJsDefault.default(state, {
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
        var placement1 = placements[i];
        var _basePlacement = _getBasePlacementJsDefault.default(placement1);
        var isStartVariation = _getVariationJsDefault.default(placement1) === _enumsJs.start;
        var isVertical = [
            _enumsJs.top,
            _enumsJs.bottom
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = _detectOverflowJsDefault.default(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? _enumsJs.right : _enumsJs.left : isStartVariation ? _enumsJs.bottom : _enumsJs.top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var altVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement1;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement1, checks);
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
        for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
            var _ret = _loop(_i1);
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
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"8FB8g","../utils/getBasePlacement.js":"c2UOX","../utils/getOppositeVariationPlacement.js":"j1zX8","../utils/detectOverflow.js":"crSQf","../utils/computeAutoPlacement.js":"8qqHW","../enums.js":"jZp3w","../utils/getVariation.js":"f9eYT","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8FB8g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j1zX8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"crSQf":[function(require,module,exports) {
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
    if (options === void 0) options = {
    };
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? _enumsJs.clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? _enumsJs.viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? _enumsJs.popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
    var altContext = elementContext === _enumsJs.popper ? _enumsJs.reference : _enumsJs.popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = _getClippingRectJsDefault.default(_instanceOfJs.isElement(element) ? element : element.contextElement || _getDocumentElementJsDefault.default(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = _getBoundingClientRectJsDefault.default(state.elements.reference);
    var popperOffsets = _computeOffsetsJsDefault.default({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = _rectToClientRectJsDefault.default(Object.assign({
    }, popperRect, popperOffsets));
    var elementClientRect = elementContext === _enumsJs.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === _enumsJs.popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                _enumsJs.right,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                _enumsJs.top,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"5k2MU","../dom-utils/getDocumentElement.js":"eJuqT","../dom-utils/getBoundingClientRect.js":"ey7tS","./computeOffsets.js":"4rK4R","./rectToClientRect.js":"aZgXm","../enums.js":"jZp3w","../dom-utils/instanceOf.js":"fKIgP","./mergePaddingObject.js":"h6lM0","./expandToHashMap.js":"fPt6e","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5k2MU":[function(require,module,exports) {
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
function getInnerBoundingClientRect(element) {
    var rect = _getBoundingClientRectJsDefault.default(element);
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
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === _enumsJs.viewport ? _rectToClientRectJsDefault.default(_getViewportRectJsDefault.default(element)) : _instanceOfJs.isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : _rectToClientRectJsDefault.default(_getDocumentRectJsDefault.default(_getDocumentElementJsDefault.default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = _listScrollParentsJsDefault.default(_getParentNodeJsDefault.default(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf(_getComputedStyleJsDefault.default(element).position) >= 0;
    var clipperElement = canEscapeClipping && _instanceOfJs.isHTMLElement(element) ? _getOffsetParentJsDefault.default(element) : element;
    if (!_instanceOfJs.isElement(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return _instanceOfJs.isElement(clippingParent) && _containsJsDefault.default(clippingParent, clipperElement) && _getNodeNameJsDefault.default(clippingParent) !== 'body' && (canEscapeClipping ? _getComputedStyleJsDefault.default(clippingParent).position !== 'static' : true);
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = _mathJs.max(rect.top, accRect.top);
        accRect.right = _mathJs.min(rect.right, accRect.right);
        accRect.bottom = _mathJs.min(rect.bottom, accRect.bottom);
        accRect.left = _mathJs.max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"jZp3w","./getViewportRect.js":"9whPD","./getDocumentRect.js":"e3m4U","./listScrollParents.js":"h9LnN","./getOffsetParent.js":"cEO6a","./getDocumentElement.js":"eJuqT","./getComputedStyle.js":"daHn5","./instanceOf.js":"fKIgP","./getBoundingClientRect.js":"ey7tS","./getParentNode.js":"alOJj","./contains.js":"c5XYO","./getNodeName.js":"6JAN3","../utils/rectToClientRect.js":"aZgXm","../utils/math.js":"fL6pm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9whPD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
function getViewportRect(element) {
    var win = _getWindowJsDefault.default(element);
    var html = _getDocumentElementJsDefault.default(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + _getWindowScrollBarXJsDefault.default(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"htzDW","./getDocumentElement.js":"eJuqT","./getWindowScrollBarX.js":"3oin6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3oin6":[function(require,module,exports) {
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
    return _getBoundingClientRectJsDefault.default(_getDocumentElementJsDefault.default(element)).left + _getWindowScrollJsDefault.default(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"ey7tS","./getDocumentElement.js":"eJuqT","./getWindowScroll.js":"gZQL2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gZQL2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = _getWindowJsDefault.default(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"htzDW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e3m4U":[function(require,module,exports) {
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
    var html = _getDocumentElementJsDefault.default(element);
    var winScroll = _getWindowScrollJsDefault.default(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = _mathJs.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = _mathJs.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + _getWindowScrollBarXJsDefault.default(element);
    var y = -winScroll.scrollTop;
    if (_getComputedStyleJsDefault.default(body || html).direction === 'rtl') x += _mathJs.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"eJuqT","./getComputedStyle.js":"daHn5","./getWindowScrollBarX.js":"3oin6","./getWindowScroll.js":"gZQL2","../utils/math.js":"fL6pm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h9LnN":[function(require,module,exports) {
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
    var scrollParent = _getScrollParentJsDefault.default(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = _getWindowJsDefault.default(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], _isScrollParentJsDefault.default(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(_getParentNodeJsDefault.default(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"6KLmw","./getParentNode.js":"alOJj","./getWindow.js":"htzDW","./isScrollParent.js":"6o0f4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6KLmw":[function(require,module,exports) {
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
        'html',
        'body',
        '#document'
    ].indexOf(_getNodeNameJsDefault.default(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if (_instanceOfJs.isHTMLElement(node) && _isScrollParentJsDefault.default(node)) return node;
    return getScrollParent(_getParentNodeJsDefault.default(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"alOJj","./isScrollParent.js":"6o0f4","./getNodeName.js":"6JAN3","./instanceOf.js":"fKIgP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6o0f4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = _getComputedStyleJsDefault.default(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"daHn5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aZgXm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({
    }, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4rK4R":[function(require,module,exports) {
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
    var basePlacement = placement ? _getBasePlacementJsDefault.default(placement) : null;
    var variation = placement ? _getVariationJsDefault.default(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case _enumsJs.left:
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
    var mainAxis = basePlacement ? _getMainAxisFromPlacementJsDefault.default(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"c2UOX","./getVariation.js":"f9eYT","./getMainAxisFromPlacement.js":"bDf0O","../enums.js":"jZp3w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8qqHW":[function(require,module,exports) {
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
    if (options === void 0) options = {
    };
    var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enumsJs.placements : _options$allowedAutoP;
    var variation = _getVariationJsDefault.default(placement1);
    var placements = variation ? flipVariations ? _enumsJs.variationPlacements : _enumsJs.variationPlacements.filter(function(placement) {
        return _getVariationJsDefault.default(placement) === variation;
    }) : _enumsJs.basePlacements;
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            'Popper: The `allowedAutoPlacements` option did not allow any',
            'placements. Ensure the `placement` option matches the variation',
            'of the allowed placements.',
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(' '));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = _detectOverflowJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[_getBasePlacementJsDefault.default(placement)];
        return acc;
    }, {
    });
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"f9eYT","../enums.js":"jZp3w","./detectOverflow.js":"crSQf","./getBasePlacement.js":"c2UOX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1tv8l":[function(require,module,exports) {
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
        _enumsJs.top,
        _enumsJs.right,
        _enumsJs.bottom,
        _enumsJs.left
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = _detectOverflowJsDefault.default(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = _detectOverflowJsDefault.default(state, {
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
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};

},{"../enums.js":"jZp3w","../utils/detectOverflow.js":"crSQf","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"228UQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY
);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = _getBasePlacementJsDefault.default(placement);
    var invertDistance = [
        _enumsJs.left,
        _enumsJs.top
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({
    }, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset1(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = _enumsJs.placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {
    });
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset1
};

},{"../utils/getBasePlacement.js":"c2UOX","../enums.js":"jZp3w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"I1CrS":[function(require,module,exports) {
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
    state.modifiersData[name] = _computeOffsetsJsDefault.default({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {
    }
};

},{"../utils/computeOffsets.js":"4rK4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iquIt":[function(require,module,exports) {
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
    var overflow = _detectOverflowJsDefault.default(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var variation = _getVariationJsDefault.default(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var altAxis = _getAltAxisJsDefault.default(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
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
        var mainSide = mainAxis === 'y' ? _enumsJs.top : _enumsJs.left;
        var altSide = mainAxis === 'y' ? _enumsJs.bottom : _enumsJs.right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === _enumsJs.start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === _enumsJs.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? _getLayoutRectJsDefault.default(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : _getFreshSideObjectJsDefault.default();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = _withinJs.within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && _getOffsetParentJsDefault.default(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = _withinJs.within(tether ? _mathJs.min(min, tetherMin) : min, offset, tether ? _mathJs.max(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? _enumsJs.top : _enumsJs.left;
        var _altSide = mainAxis === 'x' ? _enumsJs.bottom : _enumsJs.right;
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            _enumsJs.top,
            _enumsJs.left
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? _withinJs.withinMaxClamp(_tetherMin, _offset, _tetherMax) : _withinJs.within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

},{"../enums.js":"jZp3w","../utils/getBasePlacement.js":"c2UOX","../utils/getMainAxisFromPlacement.js":"bDf0O","../utils/getAltAxis.js":"km1Cn","../utils/within.js":"91duw","../dom-utils/getLayoutRect.js":"3QcLC","../dom-utils/getOffsetParent.js":"cEO6a","../utils/detectOverflow.js":"crSQf","../utils/getVariation.js":"f9eYT","../utils/getFreshSideObject.js":"73NUq","../utils/math.js":"fL6pm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"km1Cn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6w8cU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator
);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
parcelHelpers.export(exports, "detectOverflow", ()=>_detectOverflowJsDefault.default
);
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
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {
    };
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference1, popper1, options1) {
        if (options1 === void 0) options1 = defaultOptions;
        var state1 = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({
            }, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {
            },
            elements: {
                reference: reference1,
                popper: popper1
            },
            attributes: {
            },
            styles: {
            }
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state1,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state1.options) : setOptionsAction;
                cleanupModifierEffects();
                state1.options = Object.assign({
                }, defaultOptions, state1.options, options);
                state1.scrollParents = {
                    reference: _instanceOfJs.isElement(reference1) ? _listScrollParentsJsDefault.default(reference1) : reference1.contextElement ? _listScrollParentsJsDefault.default(reference1.contextElement) : [],
                    popper: _listScrollParentsJsDefault.default(popper1)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = _orderModifiersJsDefault.default(_mergeByNameJsDefault.default([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                state1.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = _uniqueByJsDefault.default([].concat(orderedModifiers, state1.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                _validateModifiersJsDefault.default(modifiers);
                if (_getBasePlacementJsDefault.default(state1.options.placement) === _enumsJs.auto) {
                    var flipModifier = state1.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === 'flip';
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        'present and enabled to work.'
                    ].join(' '));
                }
                var _getComputedStyle = _getComputedStyleJsDefault.default(popper1), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
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
                    'between the popper and its reference element or boundary.',
                    'To replicate margin, use the `offset` modifier, as well as',
                    'the `padding` option in the `preventOverflow` and `flip`',
                    'modifiers.'
                ].join(' '));
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
                var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state1.rects = {
                    reference: _getCompositeRectJsDefault.default(reference, _getOffsetParentJsDefault.default(popper), state1.options.strategy === 'fixed'),
                    popper: _getLayoutRectJsDefault.default(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state1.reset = false;
                state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state1.orderedModifiers.forEach(function(modifier) {
                    return state1.modifiersData[modifier.name] = Object.assign({
                    }, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state1.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state1.reset === true) {
                        state1.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                    } : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state1 = fn({
                        state: state1,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state1;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: _debounceJsDefault.default(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state1);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference1, popper1)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options1).then(function(state) {
            if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state1.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {
                } : _ref3$options, effect = _ref3.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state1,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {
                    };
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

},{"./dom-utils/getCompositeRect.js":"8RbQq","./dom-utils/getLayoutRect.js":"3QcLC","./dom-utils/listScrollParents.js":"h9LnN","./dom-utils/getOffsetParent.js":"cEO6a","./dom-utils/getComputedStyle.js":"daHn5","./utils/orderModifiers.js":"6glJ2","./utils/debounce.js":"2MXaX","./utils/validateModifiers.js":"4YNnu","./utils/uniqueBy.js":"lqIFN","./utils/getBasePlacement.js":"c2UOX","./utils/mergeByName.js":"15Bos","./utils/detectOverflow.js":"crSQf","./dom-utils/instanceOf.js":"fKIgP","./enums.js":"jZp3w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8RbQq":[function(require,module,exports) {
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
    var scaleX = _mathJs.round(rect.width) / element.offsetWidth || 1;
    var scaleY = _mathJs.round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = _instanceOfJs.isHTMLElement(offsetParent);
    var offsetParentIsScaled = _instanceOfJs.isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = _getDocumentElementJsDefault.default(offsetParent);
    var rect = _getBoundingClientRectJsDefault.default(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (_getNodeNameJsDefault.default(offsetParent) !== 'body' || _isScrollParentJsDefault.default(documentElement)) scroll = _getNodeScrollJsDefault.default(offsetParent);
        if (_instanceOfJs.isHTMLElement(offsetParent)) {
            offsets = _getBoundingClientRectJsDefault.default(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = _getWindowScrollBarXJsDefault.default(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"ey7tS","./getNodeScroll.js":"bJ4uu","./getNodeName.js":"6JAN3","./instanceOf.js":"fKIgP","./getWindowScrollBarX.js":"3oin6","./getDocumentElement.js":"eJuqT","./isScrollParent.js":"6o0f4","../utils/math.js":"fL6pm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bJ4uu":[function(require,module,exports) {
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
    if (node === _getWindowJsDefault.default(node) || !_instanceOfJs.isHTMLElement(node)) return _getWindowScrollJsDefault.default(node);
    else return _getHTMLElementScrollJsDefault.default(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"gZQL2","./getWindow.js":"htzDW","./instanceOf.js":"fKIgP","./getHTMLElementScroll.js":"5uO18","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5uO18":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6glJ2":[function(require,module,exports) {
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
    return _enumsJs.modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"jZp3w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2MXaX":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4YNnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options'
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case 'name':
                    if (typeof modifier.name !== 'string') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                    break;
                case 'enabled':
                    if (typeof modifier.enabled !== 'boolean') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                    break;
                case 'phase':
                    if (_enumsJs.modifierPhases.indexOf(modifier.phase) < 0) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enumsJs.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                    break;
                case 'fn':
                    if (typeof modifier.fn !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'effect':
                    if (modifier.effect != null && typeof modifier.effect !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'requires':
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                    break;
                case 'requiresIfExists':
                    if (!Array.isArray(modifier.requiresIfExists)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                    break;
                case 'options':
                case 'data':
                    break;
                default:
                    console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function(s) {
                        return "\"" + s + "\"";
                    }).join(', ') + "; but \"" + key + "\" was provided.");
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error(_formatJsDefault.default(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"8LgWn","../enums.js":"jZp3w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8LgWn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lqIFN":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"15Bos":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged1 = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({
        }, existing, current, {
            options: Object.assign({
            }, existing.options, current.options),
            data: Object.assign({
            }, existing.data, current.data)
        }) : current;
        return merged;
    }, {
    }); // IE11 does not support Object.values
    return Object.keys(merged1).map(function(key) {
        return merged1[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4kzpa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
);
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers
);
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
parcelHelpers.export(exports, "createPopperLite", ()=>_popperLiteJs.createPopper
) // eslint-disable-next-line import/no-unused-modules
;
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
    _eventListenersJsDefault.default,
    _popperOffsetsJsDefault.default,
    _computeStylesJsDefault.default,
    _applyStylesJsDefault.default,
    _offsetJsDefault.default,
    _flipJsDefault.default,
    _preventOverflowJsDefault.default,
    _arrowJsDefault.default,
    _hideJsDefault.default
];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"6w8cU","./modifiers/eventListeners.js":"6Xsje","./modifiers/popperOffsets.js":"I1CrS","./modifiers/computeStyles.js":"jb5QZ","./modifiers/applyStyles.js":"fz4DR","./modifiers/offset.js":"228UQ","./modifiers/flip.js":"6hQNA","./modifiers/preventOverflow.js":"iquIt","./modifiers/arrow.js":"aFbbE","./modifiers/hide.js":"1tv8l","./popper-lite.js":"jX6KS","./modifiers/index.js":"i6nAS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jX6KS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
);
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers
);
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
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
    _eventListenersJsDefault.default,
    _popperOffsetsJsDefault.default,
    _computeStylesJsDefault.default,
    _applyStylesJsDefault.default
];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"6w8cU","./modifiers/eventListeners.js":"6Xsje","./modifiers/popperOffsets.js":"I1CrS","./modifiers/computeStyles.js":"jb5QZ","./modifiers/applyStyles.js":"fz4DR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eMZZo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("@firebase/app");
parcelHelpers.exportAll(_app, exports);
var name = "firebase";
var version = "9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ _app.registerVersion(name, version, 'app');

},{"@firebase/app":"lLbXy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lLbXy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FirebaseError", ()=>_util.FirebaseError
);
parcelHelpers.export(exports, "SDK_VERSION", ()=>SDK_VERSION
);
parcelHelpers.export(exports, "_DEFAULT_ENTRY_NAME", ()=>DEFAULT_ENTRY_NAME
);
parcelHelpers.export(exports, "_addComponent", ()=>_addComponent
);
parcelHelpers.export(exports, "_addOrOverwriteComponent", ()=>_addOrOverwriteComponent
);
parcelHelpers.export(exports, "_apps", ()=>_apps
);
parcelHelpers.export(exports, "_clearComponents", ()=>_clearComponents
);
parcelHelpers.export(exports, "_components", ()=>_components
);
parcelHelpers.export(exports, "_getProvider", ()=>_getProvider
);
parcelHelpers.export(exports, "_registerComponent", ()=>_registerComponent
);
parcelHelpers.export(exports, "_removeServiceInstance", ()=>_removeServiceInstance
);
parcelHelpers.export(exports, "deleteApp", ()=>deleteApp
);
parcelHelpers.export(exports, "getApp", ()=>getApp
);
parcelHelpers.export(exports, "getApps", ()=>getApps
);
parcelHelpers.export(exports, "initializeApp", ()=>initializeApp
);
parcelHelpers.export(exports, "onLog", ()=>onLog
);
parcelHelpers.export(exports, "registerVersion", ()=>registerVersion
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
var _component = require("@firebase/component");
var _logger = require("@firebase/logger");
var _util = require("@firebase/util");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PlatformLoggerServiceImpl {
    constructor(container2){
        this.container = container2;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map((provider)=>{
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            } else return null;
        }).filter((logString)=>logString
        ).join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */ ;
}
const name$o = "@firebase/app";
const version$1 = "0.7.11";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new _logger.Logger('@firebase/app');
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3 = "@firebase/storage-compat";
const name$2 = "@firebase/firestore";
const name$1 = "@firebase/firestore-compat";
const name1 = "firebase";
const version1 = "9.6.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default app name
 *
 * @internal
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name1]: 'fire-js-all'
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */ function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    } catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */ function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */ function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values())_addComponent(app, component);
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */ function _getProvider(app, name) {
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */ function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */ function _clearComponents() {
    _components.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["no-app" /* NO_APP */ ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name" /* BAD_APP_NAME */ ]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */ ]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */ ]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */ ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */ ]: 'First argument to `onLog` must be null or a function.'
};
const ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FirebaseAppImpl {
    constructor(options1, config1, container1){
        this._isDeleted = false;
        this._options = Object.assign({
        }, options1);
        this._config = Object.assign({
        }, config1);
        this._name = config1.name;
        this._automaticDataCollectionEnabled = config1.automaticDataCollectionEnabled;
        this._container = container1;
        this.container.addComponent(new _component.Component('app', ()=>this
        , "PUBLIC" /* PUBLIC */ ));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val1) {
        this._isDeleted = val1;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */ , {
            appName: this._name
        });
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ const SDK_VERSION = version1;
function initializeApp(options, rawConfig = {
}) {
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = {
            name
        };
    }
    const config = Object.assign({
        name: DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: false
    }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */ , {
        appName: String(name)
    });
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (_util.deepEqual(options, existingApp.options) && _util.deepEqual(config, existingApp.config)) return existingApp;
        else throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */ , {
            appName: name
        });
    }
    const container = new _component.ComponentContainer(name);
    for (const component of _components.values())container.addComponent(component);
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */ function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app) throw ERROR_FACTORY.create("no-app" /* NO_APP */ , {
        appName: name
    });
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */ function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */ async function deleteApp(app) {
    const name = app.name;
    if (_apps.has(name)) {
        _apps.delete(name);
        await Promise.all(app.container.getProviders().map((provider)=>provider.delete()
        ));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */ function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) library += `-${variant}`;
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        if (libraryMismatch && versionMismatch) warning.push('and');
        if (versionMismatch) warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _component.Component(`${library}-version`, ()=>({
            library,
            version
        })
    , "VERSION" /* VERSION */ ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */ function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */ );
    _logger.setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */ function setLogLevel(logLevel) {
    _logger.setLogLevel(logLevel);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerCoreComponents(variant) {
    _registerComponent(new _component.Component('platform-logger', (container)=>new PlatformLoggerServiceImpl(container)
    , "PRIVATE" /* PRIVATE */ ));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */ registerCoreComponents('');

},{"@firebase/component":"1wISm","@firebase/logger":"arr7M","@firebase/util":"3yszE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1wISm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component
);
parcelHelpers.export(exports, "ComponentContainer", ()=>ComponentContainer
);
parcelHelpers.export(exports, "Provider", ()=>Provider
);
var _util = require("@firebase/util");
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ constructor(name, instanceFactory, type){
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {
        };
        this.instantiationMode = "LAZY" /* LAZY */ ;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class Provider {
    constructor(name1, container){
        this.name = name1;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */ get(identifier7) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier7);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) // initialize the service if it can be auto-initialized
            try {
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                if (instance) deferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
            });
        } catch (e) {
            if (optional) return null;
            else throw e;
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) return null;
            else throw Error(`Service ${this.name} is not available`);
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component1) {
        if (component1.name !== this.name) throw Error(`Mismatching Component ${component1.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        this.component = component1;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) return;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component1)) try {
            this.getOrInitializeService({
                instanceIdentifier: DEFAULT_ENTRY_NAME
            });
        } catch (e) {
        // when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier1 = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier1);
        this.instancesOptions.delete(identifier1);
        this.instances.delete(identifier1);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services.filter((service)=>'INTERNAL' in service
            ) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service.INTERNAL.delete()
            ),
            ...services.filter((service)=>'_delete' in service
            ) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service._delete()
            )
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier2 = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier2);
    }
    getOptions(identifier3 = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier3) || {
        };
    }
    initialize(opts = {
    }) {
        const { options ={
        }  } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) instanceDeferred.resolve(instance);
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */ onInit(callback1, identifier4) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier4);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback1);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) callback1(existingInstance, normalizedIdentifier);
        return ()=>{
            existingCallbacks.delete(callback1);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */ invokeOnInitCallbacks(instance, identifier5) {
        const callbacks = this.onInitCallbacks.get(identifier5);
        if (!callbacks) return;
        for (const callback of callbacks)try {
            callback(instance, identifier5);
        } catch (_a) {
        // ignore errors in the onInit callback
        }
    }
    getOrInitializeService({ instanceIdentifier , options: options1 = {
    }  }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options: options1
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options1);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */ if (this.component.onInstanceCreated) try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            // ignore errors in the onInstanceCreatedCallback
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier6 = DEFAULT_ENTRY_NAME) {
        if (this.component) return this.component.multipleInstances ? identifier6 : DEFAULT_ENTRY_NAME;
        else return identifier6; // assume multiple instances are supported before the component is provided.
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */ ;
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */ ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class ComponentContainer {
    constructor(name2){
        this.name = name2;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component2) {
        const provider = this.getProvider(component2.name);
        if (provider.isComponentSet()) // delete the existing provider from the container, so we can register the new component
        this.providers.delete(component2.name);
        this.addComponent(component2);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ getProvider(name3) {
        if (this.providers.has(name3)) return this.providers.get(name3);
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name3, this);
        this.providers.set(name3, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}

},{"@firebase/util":"3yszE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3yszE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONSTANTS", ()=>CONSTANTS
);
parcelHelpers.export(exports, "Deferred", ()=>Deferred
);
parcelHelpers.export(exports, "ErrorFactory", ()=>ErrorFactory
);
parcelHelpers.export(exports, "FirebaseError", ()=>FirebaseError
);
parcelHelpers.export(exports, "MAX_VALUE_MILLIS", ()=>MAX_VALUE_MILLIS
);
parcelHelpers.export(exports, "RANDOM_FACTOR", ()=>RANDOM_FACTOR
);
parcelHelpers.export(exports, "Sha1", ()=>Sha1
);
parcelHelpers.export(exports, "areCookiesEnabled", ()=>areCookiesEnabled
);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "assertionError", ()=>assertionError
);
parcelHelpers.export(exports, "async", ()=>async
);
parcelHelpers.export(exports, "base64", ()=>base64
);
parcelHelpers.export(exports, "base64Decode", ()=>base64Decode
);
parcelHelpers.export(exports, "base64Encode", ()=>base64Encode
);
parcelHelpers.export(exports, "base64urlEncodeWithoutPadding", ()=>base64urlEncodeWithoutPadding
);
parcelHelpers.export(exports, "calculateBackoffMillis", ()=>calculateBackoffMillis
);
parcelHelpers.export(exports, "contains", ()=>contains
);
parcelHelpers.export(exports, "createMockUserToken", ()=>createMockUserToken
);
parcelHelpers.export(exports, "createSubscribe", ()=>createSubscribe
);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "deepCopy", ()=>deepCopy
);
parcelHelpers.export(exports, "deepEqual", ()=>deepEqual
);
parcelHelpers.export(exports, "deepExtend", ()=>deepExtend
);
parcelHelpers.export(exports, "errorPrefix", ()=>errorPrefix
);
parcelHelpers.export(exports, "extractQuerystring", ()=>extractQuerystring
);
parcelHelpers.export(exports, "getGlobal", ()=>getGlobal
);
parcelHelpers.export(exports, "getModularInstance", ()=>getModularInstance
);
parcelHelpers.export(exports, "getUA", ()=>getUA
);
parcelHelpers.export(exports, "isAdmin", ()=>isAdmin
);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser
);
parcelHelpers.export(exports, "isBrowserExtension", ()=>isBrowserExtension
);
parcelHelpers.export(exports, "isElectron", ()=>isElectron
);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
parcelHelpers.export(exports, "isIE", ()=>isIE
);
parcelHelpers.export(exports, "isIndexedDBAvailable", ()=>isIndexedDBAvailable
);
parcelHelpers.export(exports, "isMobileCordova", ()=>isMobileCordova
);
parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "isNodeSdk", ()=>isNodeSdk
);
parcelHelpers.export(exports, "isReactNative", ()=>isReactNative
);
parcelHelpers.export(exports, "isSafari", ()=>isSafari
);
parcelHelpers.export(exports, "isUWP", ()=>isUWP
);
parcelHelpers.export(exports, "isValidFormat", ()=>isValidFormat
);
parcelHelpers.export(exports, "isValidTimestamp", ()=>isValidTimestamp
);
parcelHelpers.export(exports, "issuedAtTime", ()=>issuedAtTime
);
parcelHelpers.export(exports, "jsonEval", ()=>jsonEval
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "ordinal", ()=>ordinal
);
parcelHelpers.export(exports, "querystring", ()=>querystring1
);
parcelHelpers.export(exports, "querystringDecode", ()=>querystringDecode
);
parcelHelpers.export(exports, "safeGet", ()=>safeGet
);
parcelHelpers.export(exports, "stringLength", ()=>stringLength
);
parcelHelpers.export(exports, "stringToByteArray", ()=>stringToByteArray
);
parcelHelpers.export(exports, "stringify", ()=>stringify
);
parcelHelpers.export(exports, "validateArgCount", ()=>validateArgCount
);
parcelHelpers.export(exports, "validateCallback", ()=>validateCallback
);
parcelHelpers.export(exports, "validateContextObject", ()=>validateContextObject
);
parcelHelpers.export(exports, "validateIndexedDBOpenable", ()=>validateIndexedDBOpenable
);
parcelHelpers.export(exports, "validateNamespace", ()=>validateNamespace
);
var global = arguments[3];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ const assert = function(assertion, message) {
    if (!assertion) throw assertionError(message);
};
/**
 * Returns an Error object suitable for throwing.
 */ const assertionError = function(message) {
    return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const stringToByteArray$1 = function(str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            // Surrogate Pair
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ const byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while(pos < bytes.length){
        const c1 = bytes[pos++];
        if (c1 < 128) out[c++] = String.fromCharCode(c1);
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray (input, webSafe) {
        if (!Array.isArray(input)) throw Error('encodeByteArray takes an array as a parameter');
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for(let i = 0; i < input.length; i += 3){
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64;
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray (input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for(let i = 0; i < input.length;){
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) throw Error();
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = byte3 << 6 & 192 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_ () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {
            };
            this.charToByteMap_ = {
            };
            this.byteToCharMapWebSafe_ = {
            };
            this.charToByteMapWebSafe_ = {
            };
            // We want quick mappings back and forth, so we precompute two maps.
            for(let i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */ const base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */ const base64urlEncodeWithoutPadding = function(str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ const base64Decode = function(str) {
    try {
        return base64.decodeString(str, true);
    } catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function deepExtend(target, source) {
    if (!(source instanceof Object)) return source;
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) target = {
            };
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(const prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) continue;
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Deferred {
    constructor(){
        this.reject = ()=>{
        };
        this.resolve = ()=>{
        };
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ wrapCallback(callback1) {
        return (error, value)=>{
            if (error) this.reject(error);
            else this.resolve(value);
            if (typeof callback1 === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(()=>{
                });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback1.length === 1) callback1(error);
                else callback1(error, value);
            }
        };
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function createMockUserToken(token, projectId) {
    if (token.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const payload = Object.assign({
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`,
        aud: project,
        iat,
        exp: iat + 3600,
        auth_time: iat,
        sub,
        user_id: sub,
        firebase: {
            sign_in_provider: 'custom',
            identities: {
            }
        }
    }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') return navigator['userAgent'];
    else return '';
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function isMobileCordova() {
    return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return Object.prototype.toString.call(global.process) === '[object process]';
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */ function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function isReactNative() {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */ function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */ function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */ function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function isSafari() {
    return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function isIndexedDBAvailable() {
    return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */ function validateIndexedDBOpenable() {
    return new Promise((resolve, reject)=>{
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = ()=>{
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                resolve(true);
            };
            request.onupgradeneeded = ()=>{
                preExist = false;
            };
            request.onerror = ()=>{
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) return false;
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */ function getGlobal() {
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */ const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(code, message, customData){
        super(message);
        this.code = code;
        this.customData = customData;
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
}
class ErrorFactory {
    constructor(service1, serviceName, errors){
        this.service = service1;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code1, ...data1) {
        const customData = data1[0] || {
        };
        const fullCode = `${this.service}/${code1}`;
        const template = this.errors[code1];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key)=>{
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function stringify(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const decode = function(token) {
    let header = {
    }, claims = {
    }, data = {
    }, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {
        };
        delete claims['d'];
    } catch (e) {
    }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidTimestamp = function(token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) validSince = claims['nbf'];
        else if (claims.hasOwnProperty('iat')) validSince = claims['iat'];
        if (claims.hasOwnProperty('exp')) validUntil = claims['exp'];
        else // token will expire after 24h by default
        validUntil = validSince + 86400;
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const issuedAtTime = function(token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) return claims['iat'];
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidFormat = function(token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isAdmin = function(token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
    else return undefined;
}
function isEmpty(obj) {
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {
    };
    for(const key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res[key] = fn.call(contextObj, obj[key], key, obj);
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */ function deepEqual(a, b) {
    if (a === b) return true;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys){
        if (!bKeys.includes(k)) return false;
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) return false;
        } else if (aProp !== bProp) return false;
    }
    for (const k1 of bKeys){
        if (!aKeys.includes(k1)) return false;
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function querystring1(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams))if (Array.isArray(value)) value.forEach((arrayVal)=>{
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
    });
    else params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function querystringDecode(querystring) {
    const obj = {
    };
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach((token)=>{
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */ function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) return '';
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ class Sha1 {
    constructor(){
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 64;
        this.pad_[0] = 128;
        for(let i = 1; i < this.blockSize; ++i)this.pad_[i] = 0;
        this.reset();
    }
    reset() {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.chain_[4] = 3285377520;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ compress_(buf, offset) {
        if (!offset) offset = 0;
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') for(let i = 0; i < 16; i++){
            // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
            // have a bug that turns the post-increment ++ operator into pre-increment
            // during JIT compilation.  We have code that depends heavily on SHA-1 for
            // correctness and which is affected by this bug, so I've removed all uses
            // of post-increment ++ in which the result value is used.  We can revert
            // this change once the Safari bug
            // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
            // most clients have been updated.
            W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
        }
        else for(let i1 = 0; i1 < 16; i1++){
            W[i1] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
        }
        // expand to 80 words
        for(let i2 = 16; i2 < 80; i2++){
            const t = W[i2 - 3] ^ W[i2 - 8] ^ W[i2 - 14] ^ W[i2 - 16];
            W[i2] = (t << 1 | t >>> 31) & 4294967295;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(let i3 = 0; i3 < 80; i3++){
            if (i3 < 40) {
                if (i3 < 20) {
                    f = d ^ b & (c ^ d);
                    k = 1518500249;
                } else {
                    f = b ^ c ^ d;
                    k = 1859775393;
                }
            } else if (i3 < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
            } else {
                f = b ^ c ^ d;
                k = 3395469782;
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i3] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 4294967295;
        this.chain_[1] = this.chain_[1] + b & 4294967295;
        this.chain_[2] = this.chain_[2] + c & 4294967295;
        this.chain_[3] = this.chain_[3] + d & 4294967295;
        this.chain_[4] = this.chain_[4] + e & 4294967295;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) return;
        if (length === undefined) length = bytes.length;
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) while(n <= lengthMinusBlock){
                this.compress_(bytes, n);
                n += this.blockSize;
            }
            if (typeof bytes === 'string') while(n < length){
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
            else while(n < length){
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */ digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) this.update(this.pad_, 56 - this.inbuf_);
        else this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        // Add # bits.
        for(let i = this.blockSize - 1; i >= 56; i--){
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for(let i4 = 0; i4 < 5; i4++)for(let j = 24; j >= 0; j -= 8){
            digest[n] = this.chain_[i4] >> j & 255;
            ++n;
        }
        return digest;
    }
}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ constructor(executor, onNoObservers){
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(()=>{
            executor(this);
        }).catch((e)=>{
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer)=>{
            observer.next(value);
        });
    }
    error(error2) {
        this.forEachObserver((observer)=>{
            observer.error(error2);
        });
        this.close(error2);
    }
    complete() {
        this.forEachObserver((observer)=>{
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */ subscribe(nextOrObserver, error1, complete) {
        let observer;
        if (nextOrObserver === undefined && error1 === undefined && complete === undefined) throw new Error('Missing Observer.');
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) observer = nextOrObserver;
        else observer = {
            next: nextOrObserver,
            error: error1,
            complete
        };
        if (observer.next === undefined) observer.next = noop;
        if (observer.error === undefined) observer.error = noop;
        if (observer.complete === undefined) observer.complete = noop;
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            try {
                if (this.finalError) observer.error(this.finalError);
                else observer.complete();
            } catch (e) {
            // nothing
            }
            return;
        });
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i6) {
        if (this.observers === undefined || this.observers[i6] === undefined) return;
        delete this.observers[i6];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) this.onNoObservers(this);
    }
    forEachObserver(fn2) {
        if (this.finalized) // Already closed by previous event....just eat the additional values.
        return;
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(let i = 0; i < this.observers.length; i++)this.sendOne(i, fn2);
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i5, fn1) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            if (this.observers !== undefined && this.observers[i5] !== undefined) try {
                fn1(this.observers[i5]);
            } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) console.error(e);
            }
        });
    }
    close(err) {
        if (this.finalized) return;
        this.finalized = true;
        if (err !== undefined) this.finalError = err;
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args)=>{
        Promise.resolve(true).then(()=>{
            fn(...args);
        }).catch((error)=>{
            if (onError) onError(error);
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) return false;
    for (const method of methods){
        if (method in obj && typeof obj[method] === 'function') return true;
    }
    return false;
}
function noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ const validateArgCount = function(fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) argError = 'at least ' + minCount;
    else if (argCount > maxCount) argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    if (argError) {
        const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */ function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) return;
    if (typeof namespace !== 'string') //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
}
function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) return;
    if (typeof callback !== 'function') throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) return;
    if (typeof context !== 'object' || context === null) throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ const stringToByteArray = function(str) {
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 55296 && c <= 56319) {
            const high = c - 55296; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 56320; // the low 10 bits.
            c = 65536 + (high << 10) + low;
        }
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ const stringLength = function(str) {
    let p = 0;
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c < 128) p++;
        else if (c < 2048) p += 2;
        else if (c >= 55296 && c <= 56319) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else p += 3;
    }
    return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ const MAX_VALUE_MILLIS = 14400000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function ordinal(i) {
    if (!Number.isFinite(i)) return `${i}`;
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) return 'th';
    const dec = i % 10;
    if (dec === 1) return 'st';
    if (dec === 2) return 'nd';
    if (dec === 3) return 'rd';
    return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getModularInstance(service) {
    if (service && service._delegate) return service._delegate;
    else return service;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"arr7M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel1
);
parcelHelpers.export(exports, "Logger", ()=>Logger
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
parcelHelpers.export(exports, "setUserLogHandler", ()=>setUserLogHandler
);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A container for all of the Logger instances
 */ const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */ var LogLevel1;
(function(LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel1 || (LogLevel1 = {
}));
const levelStringToEnum = {
    'debug': LogLevel1.DEBUG,
    'verbose': LogLevel1.VERBOSE,
    'info': LogLevel1.INFO,
    'warn': LogLevel1.WARN,
    'error': LogLevel1.ERROR,
    'silent': LogLevel1.SILENT
};
/**
 * The default log level
 */ const defaultLogLevel = LogLevel1.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ const ConsoleMethod = {
    [LogLevel1.DEBUG]: 'log',
    [LogLevel1.VERBOSE]: 'log',
    [LogLevel1.INFO]: 'info',
    [LogLevel1.WARN]: 'warn',
    [LogLevel1.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ const defaultLogHandler = (instance, logType, ...args)=>{
    if (logType < instance.logLevel) return;
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) console[method](`[${now}]  ${instance.name}:`, ...args);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ constructor(name){
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel1)) throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val1) {
        this._logLevel = typeof val1 === 'string' ? levelStringToEnum[val1] : val1;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val2) {
        if (typeof val2 !== 'function') throw new TypeError('Value assigned to `logHandler` must be a function');
        this._logHandler = val2;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val3) {
        this._userLogHandler = val3;
    }
    /**
     * The functions below are all based on the `console` interface
     */ debug(...args5) {
        this._userLogHandler && this._userLogHandler(this, LogLevel1.DEBUG, ...args5);
        this._logHandler(this, LogLevel1.DEBUG, ...args5);
    }
    log(...args1) {
        this._userLogHandler && this._userLogHandler(this, LogLevel1.VERBOSE, ...args1);
        this._logHandler(this, LogLevel1.VERBOSE, ...args1);
    }
    info(...args2) {
        this._userLogHandler && this._userLogHandler(this, LogLevel1.INFO, ...args2);
        this._logHandler(this, LogLevel1.INFO, ...args2);
    }
    warn(...args3) {
        this._userLogHandler && this._userLogHandler(this, LogLevel1.WARN, ...args3);
        this._logHandler(this, LogLevel1.WARN, ...args3);
    }
    error(...args4) {
        this._userLogHandler && this._userLogHandler(this, LogLevel1.ERROR, ...args4);
        this._logHandler(this, LogLevel1.ERROR, ...args4);
    }
}
function setLogLevel(level) {
    instances.forEach((inst)=>{
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance1 of instances){
        let customLogLevel = null;
        if (options && options.level) customLogLevel = levelStringToEnum[options.level];
        if (logCallback === null) instance1.userLogHandler = null;
        else instance1.userLogHandler = (instance, level, ...args)=>{
            const message = args.map((arg)=>{
                if (arg == null) return null;
                else if (typeof arg === 'string') return arg;
                else if (typeof arg === 'number' || typeof arg === 'boolean') return arg.toString();
                else if (arg instanceof Error) return arg.message;
                else try {
                    return JSON.stringify(arg);
                } catch (ignored) {
                    return null;
                }
            }).filter((arg)=>arg
            ).join(' ');
            if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) logCallback({
                level: LogLevel1[level].toLowerCase(),
                message,
                args,
                type: instance.name
            });
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dDzU4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _analytics = require("@firebase/analytics");
parcelHelpers.exportAll(_analytics, exports);

},{"@firebase/analytics":"dLGGM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dLGGM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnalytics", ()=>getAnalytics
);
parcelHelpers.export(exports, "initializeAnalytics", ()=>initializeAnalytics
);
parcelHelpers.export(exports, "isSupported", ()=>isSupported
);
parcelHelpers.export(exports, "logEvent", ()=>logEvent
);
parcelHelpers.export(exports, "setAnalyticsCollectionEnabled", ()=>setAnalyticsCollectionEnabled
);
parcelHelpers.export(exports, "setCurrentScreen", ()=>setCurrentScreen
);
parcelHelpers.export(exports, "setUserId", ()=>setUserId
);
parcelHelpers.export(exports, "setUserProperties", ()=>setUserProperties
);
parcelHelpers.export(exports, "settings", ()=>settings
);
var _app = require("@firebase/app");
var _logger = require("@firebase/logger");
var _util = require("@firebase/util");
var _component = require("@firebase/component");
var _installations = require("@firebase/installations");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Type constant for Firebase Analytics.
 */ const ANALYTICS_TYPE = 'analytics';
// Key to attach FID to in gtag params.
const GA_FID_KEY = 'firebase_id';
const ORIGIN_KEY = 'origin';
const FETCH_TIMEOUT_MILLIS = 60000;
const DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
const GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new _logger.Logger('@firebase/analytics');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */ function promiseAllSettled(promises) {
    return Promise.all(promises.map((promise)=>promise.catch((e)=>e
        )
    ));
}
/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */ function insertScriptTag(dataLayerName, measurementId) {
    const script = document.createElement('script');
    // We are not providing an analyticsId in the URL because it would trigger a `page_view`
    // without fid. We will initialize ga-id using gtag (config) command together with fid.
    script.src = `${GTAG_URL}?l=${dataLayerName}&id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);
}
/**
 * Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */ function getOrCreateDataLayer(dataLayerName) {
    // Check for existing dataLayer and create if needed.
    let dataLayer = [];
    if (Array.isArray(window[dataLayerName])) dataLayer = window[dataLayerName];
    else window[dataLayerName] = dataLayer;
    return dataLayer;
}
/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */ async function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
    // If config is already fetched, we know the appId and can use it to look up what FID promise we
    /// are waiting for, and wait only on that one.
    const correspondingAppId = measurementIdToAppId[measurementId];
    try {
        if (correspondingAppId) await initializationPromisesMap[correspondingAppId];
        else {
            // If config is not fetched yet, wait for all configs (we don't know which one we need) and
            // find the appId (if any) corresponding to this measurementId. If there is one, wait on
            // that appId's initialization promise. If there is none, promise resolves and gtag
            // call goes through.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            const foundConfig = dynamicConfigResults.find((config)=>config.measurementId === measurementId
            );
            if (foundConfig) await initializationPromisesMap[foundConfig.appId];
        }
    } catch (e) {
        logger.error(e);
    }
    gtagCore("config" /* CONFIG */ , measurementId, gtagParams);
}
/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */ async function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
    try {
        let initializationPromisesToWaitFor = [];
        // If there's a 'send_to' param, check if any ID specified matches
        // an initializeIds() promise we are waiting for.
        if (gtagParams && gtagParams['send_to']) {
            let gaSendToList = gtagParams['send_to'];
            // Make it an array if is isn't, so it can be dealt with the same way.
            if (!Array.isArray(gaSendToList)) gaSendToList = [
                gaSendToList
            ];
            // Checking 'send_to' fields requires having all measurement ID results back from
            // the dynamic config fetch.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            for (const sendToId of gaSendToList){
                // Any fetched dynamic measurement ID that matches this 'send_to' ID
                const foundConfig = dynamicConfigResults.find((config)=>config.measurementId === sendToId
                );
                const initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];
                if (initializationPromise) initializationPromisesToWaitFor.push(initializationPromise);
                else {
                    // Found an item in 'send_to' that is not associated
                    // directly with an FID, possibly a group.  Empty this array,
                    // exit the loop early, and let it get populated below.
                    initializationPromisesToWaitFor = [];
                    break;
                }
            }
        }
        // This will be unpopulated if there was no 'send_to' field , or
        // if not all entries in the 'send_to' field could be mapped to
        // a FID. In these cases, wait on all pending initialization promises.
        if (initializationPromisesToWaitFor.length === 0) initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
        // Run core gtag function with args after all relevant initialization
        // promises have been resolved.
        await Promise.all(initializationPromisesToWaitFor);
        // Workaround for http://b/141370449 - third argument cannot be undefined.
        gtagCore("event" /* EVENT */ , measurementId, gtagParams || {
        });
    } catch (e) {
        logger.error(e);
    }
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 */ function wrapGtag(gtagCore, /**
 * Allows wrapped gtag calls to wait on whichever intialization promises are required,
 * depending on the contents of the gtag params' `send_to` field, if any.
 */ initializationPromisesMap, /**
 * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
 * before determining what initialization promises (which include FIDs) to wait for.
 */ dynamicConfigPromisesList, /**
 * Wrapped gtag config calls can narrow down which initialization promise (with FID)
 * to wait for if the measurementId is already fetched, by getting the corresponding appId,
 * which is the key for the initialization promises map.
 */ measurementIdToAppId) {
    /**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */ async function gtagWrapper(command, idOrNameOrParams, gtagParams) {
        try {
            // If event, check that relevant initialization promises have completed.
            if (command === "event" /* EVENT */ ) // If EVENT, second arg must be measurementId.
            await gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams);
            else if (command === "config" /* CONFIG */ ) // If CONFIG, second arg must be measurementId.
            await gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams);
            else // If SET, second arg must be params.
            gtagCore("set" /* SET */ , idOrNameOrParams);
        } catch (e) {
            logger.error(e);
        }
    }
    return gtagWrapper;
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
 */ function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
    // Create a basic core gtag function
    let gtagCore = function(..._args) {
        // Must push IArguments object, not an array.
        window[dataLayerName].push(arguments);
    };
    // Replace it with existing one if found
    if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') // @ts-ignore
    gtagCore = window[gtagFunctionName];
    window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
    return {
        gtagCore,
        wrappedGtag: window[gtagFunctionName]
    };
}
/**
 * Returns first script tag in DOM matching our gtag url pattern.
 */ function findGtagScriptOnPage() {
    const scriptTags = window.document.getElementsByTagName('script');
    for (const tag of Object.values(scriptTags)){
        if (tag.src && tag.src.includes(GTAG_URL)) return tag;
    }
    return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["already-exists" /* ALREADY_EXISTS */ ]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
    ["already-initialized" /* ALREADY_INITIALIZED */ ]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
    ["already-initialized-settings" /* ALREADY_INITIALIZED_SETTINGS */ ]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
    ["interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */ ]: 'Firebase Analytics Interop Component failed to instantiate: {$reason}',
    ["invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */ ]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    ["indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */ ]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    ["fetch-throttle" /* FETCH_THROTTLE */ ]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
    ["config-fetch-failed" /* CONFIG_FETCH_FAILED */ ]: 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
    ["no-api-key" /* NO_API_KEY */ ]: "The \"apiKey\" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.",
    ["no-app-id" /* NO_APP_ID */ ]: "The \"appId\" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID."
};
const ERROR_FACTORY = new _util.ErrorFactory('analytics', 'Analytics', ERRORS);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Backoff factor for 503 errors, which we want to be conservative about
 * to avoid overloading servers. Each retry interval will be
 * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
 * will be ~30 seconds (with fuzzing).
 */ const LONG_RETRY_FACTOR = 30;
/**
 * Base wait interval to multiplied by backoffFactor^backoffCount.
 */ const BASE_INTERVAL_MILLIS = 1000;
/**
 * Stubbable retry data storage class.
 */ class RetryData {
    constructor(throttleMetadata1 = {
    }, intervalMillis = BASE_INTERVAL_MILLIS){
        this.throttleMetadata = throttleMetadata1;
        this.intervalMillis = intervalMillis;
    }
    getThrottleMetadata(appId3) {
        return this.throttleMetadata[appId3];
    }
    setThrottleMetadata(appId1, metadata) {
        this.throttleMetadata[appId1] = metadata;
    }
    deleteThrottleMetadata(appId2) {
        delete this.throttleMetadata[appId2];
    }
}
const defaultRetryData = new RetryData();
/**
 * Set GET request headers.
 * @param apiKey App API key.
 */ function getHeaders(apiKey) {
    return new Headers({
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */ async function fetchDynamicConfig(appFields) {
    var _a;
    const { appId , apiKey  } = appFields;
    const request = {
        method: 'GET',
        headers: getHeaders(apiKey)
    };
    const appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
    const response = await fetch(appUrl, request);
    if (response.status !== 200 && response.status !== 304) {
        let errorMessage = '';
        try {
            // Try to get any error message text from server response.
            const jsonResponse = await response.json();
            if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) errorMessage = jsonResponse.error.message;
        } catch (_ignored) {
        }
        throw ERROR_FACTORY.create("config-fetch-failed" /* CONFIG_FETCH_FAILED */ , {
            httpStatus: response.status,
            responseMessage: errorMessage
        });
    }
    return response.json();
}
/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */ async function fetchDynamicConfigWithRetry(app, // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
retryData = defaultRetryData, timeoutMillis) {
    const { appId , apiKey , measurementId  } = app.options;
    if (!appId) throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */ );
    if (!apiKey) {
        if (measurementId) return {
            measurementId,
            appId
        };
        throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */ );
    }
    const throttleMetadata = retryData.getThrottleMetadata(appId) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
    };
    const signal = new AnalyticsAbortSignal();
    setTimeout(async ()=>{
        // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
        signal.abort();
    }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
    return attemptFetchDynamicConfigWithRetry({
        appId,
        apiKey,
        measurementId
    }, throttleMetadata, signal, retryData);
}
/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */ async function attemptFetchDynamicConfigWithRetry(appFields, { throttleEndTimeMillis , backoffCount  }, signal, retryData = defaultRetryData // for testing
) {
    const { appId , measurementId  } = appFields;
    // Starts with a (potentially zero) timeout to support resumption from stored state.
    // Ensures the throttle end time is honored if the last attempt timed out.
    // Note the SDK will never make a request if the fetch timeout expires at this point.
    try {
        await setAbortableTimeout(signal, throttleEndTimeMillis);
    } catch (e) {
        if (measurementId) {
            logger.warn(`Timed out fetching this Firebase app's measurement ID from the server.` + ` Falling back to the measurement ID ${measurementId}` + ` provided in the "measurementId" field in the local Firebase config. [${e.message}]`);
            return {
                appId,
                measurementId
            };
        }
        throw e;
    }
    try {
        const response = await fetchDynamicConfig(appFields);
        // Note the SDK only clears throttle state if response is success or non-retriable.
        retryData.deleteThrottleMetadata(appId);
        return response;
    } catch (e1) {
        if (!isRetriableError(e1)) {
            retryData.deleteThrottleMetadata(appId);
            if (measurementId) {
                logger.warn(`Failed to fetch this Firebase app's measurement ID from the server.` + ` Falling back to the measurement ID ${measurementId}` + ` provided in the "measurementId" field in the local Firebase config. [${e1.message}]`);
                return {
                    appId,
                    measurementId
                };
            } else throw e1;
        }
        const backoffMillis = Number(e1.customData.httpStatus) === 503 ? _util.calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : _util.calculateBackoffMillis(backoffCount, retryData.intervalMillis);
        // Increments backoff state.
        const throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
        };
        // Persists state.
        retryData.setThrottleMetadata(appId, throttleMetadata);
        logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
        return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
    }
}
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */ function setAbortableTimeout(signal, throttleEndTimeMillis) {
    return new Promise((resolve, reject)=>{
        // Derives backoff from given end time, normalizing negative numbers to zero.
        const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
        const timeout = setTimeout(resolve, backoffMillis);
        // Adds listener, rather than sets onabort, because signal is a shared object.
        signal.addEventListener(()=>{
            clearTimeout(timeout);
            // If the request completes before this timeout, the rejection has no effect.
            reject(ERROR_FACTORY.create("fetch-throttle" /* FETCH_THROTTLE */ , {
                throttleEndTimeMillis
            }));
        });
    });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */ function isRetriableError(e) {
    if (!(e instanceof _util.FirebaseError) || !e.customData) return false;
    // Uses string index defined by ErrorData, which FirebaseError implements.
    const httpStatus = Number(e.customData['httpStatus']);
    return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */ class AnalyticsAbortSignal {
    constructor(){
        this.listeners = [];
    }
    addEventListener(listener1) {
        this.listeners.push(listener1);
    }
    abort() {
        this.listeners.forEach((listener)=>listener()
        );
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function validateIndexedDB() {
    if (!_util.isIndexedDBAvailable()) {
        logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */ , {
            errorInfo: 'IndexedDB is not available in this environment.'
        }).message);
        return false;
    } else try {
        await _util.validateIndexedDBOpenable();
    } catch (e) {
        logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */ , {
            errorInfo: e
        }).message);
        return false;
    }
    return true;
}
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */ async function _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName, options) {
    var _a;
    const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
    // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
    dynamicConfigPromise.then((config)=>{
        measurementIdToAppId[config.measurementId] = config.appId;
        if (app.options.measurementId && config.measurementId !== app.options.measurementId) logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId})` + ` does not match the measurement ID fetched from the server (${config.measurementId}).` + ` To ensure analytics events are always sent to the correct Analytics property,` + ` update the` + ` measurement ID field in the local config or remove it from the local config.`);
    }).catch((e)=>logger.error(e)
    );
    // Add to list to track state of all dynamic config promises.
    dynamicConfigPromisesList.push(dynamicConfigPromise);
    const fidPromise = validateIndexedDB().then((envIsValid)=>{
        if (envIsValid) return installations.getId();
        else return undefined;
    });
    const [dynamicConfig, fid] = await Promise.all([
        dynamicConfigPromise,
        fidPromise
    ]);
    // Detect if user has already put the gtag <script> tag on this page.
    if (!findGtagScriptOnPage()) insertScriptTag(dataLayerName, dynamicConfig.measurementId);
    // This command initializes gtag.js and only needs to be called once for the entire web app,
    // but since it is idempotent, we can call it multiple times.
    // We keep it together with other initialization logic for better code structure.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtagCore('js', new Date());
    // User config added first. We don't want users to accidentally overwrite
    // base Firebase config properties.
    const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {
    };
    // guard against developers accidentally setting properties with prefix `firebase_`
    configProperties[ORIGIN_KEY] = 'firebase';
    configProperties.update = true;
    if (fid != null) configProperties[GA_FID_KEY] = fid;
    // It should be the first config command called on this GA-ID
    // Initialize this GA-ID and set FID on it using the gtag config API.
    // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
    // `configProperties`.
    gtagCore("config" /* CONFIG */ , dynamicConfig.measurementId, configProperties);
    return dynamicConfig.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Analytics Service class.
 */ class AnalyticsService {
    constructor(app1){
        this.app = app1;
    }
    _delete() {
        delete initializationPromisesMap1[this.app.options.appId];
        return Promise.resolve();
    }
}
/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */ let initializationPromisesMap1 = {
};
/**
 * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
 * wait on all these to be complete in order to determine if it can selectively
 * wait for only certain initialization (FID) promises or if it must wait for all.
 */ let dynamicConfigPromisesList1 = [];
/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */ const measurementIdToAppId1 = {
};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */ let dataLayerName1 = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */ let gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */ let gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */ let wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */ let globalInitDone = false;
/**
 * Configures Firebase Analytics to use custom `gtag` or `dataLayer` names.
 * Intended to be used if `gtag.js` script has been installed on
 * this page independently of Firebase Analytics, and is using non-default
 * names for either the `gtag` function or for `dataLayer`.
 * Must be called before calling `getAnalytics()` or it won't
 * have any effect.
 *
 * @public
 *
 * @param options - Custom gtag and dataLayer names.
 */ function settings(options) {
    if (globalInitDone) throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */ );
    if (options.dataLayerName) dataLayerName1 = options.dataLayerName;
    if (options.gtagName) gtagName = options.gtagName;
}
/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */ function warnOnBrowserContextMismatch() {
    const mismatchedEnvMessages = [];
    if (_util.isBrowserExtension()) mismatchedEnvMessages.push('This is a browser extension environment.');
    if (!_util.areCookiesEnabled()) mismatchedEnvMessages.push('Cookies are not available.');
    if (mismatchedEnvMessages.length > 0) {
        const details = mismatchedEnvMessages.map((message, index)=>`(${index + 1}) ${message}`
        ).join(' ');
        const err = ERROR_FACTORY.create("invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */ , {
            errorInfo: details
        });
        logger.warn(err.message);
    }
}
/**
 * Analytics instance factory.
 * @internal
 */ function factory(app, installations, options) {
    warnOnBrowserContextMismatch();
    const appId = app.options.appId;
    if (!appId) throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */ );
    if (!app.options.apiKey) {
        if (app.options.measurementId) logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest` + ` measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId}` + ` provided in the "measurementId" field in the local Firebase config.`);
        else throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */ );
    }
    if (initializationPromisesMap1[appId] != null) throw ERROR_FACTORY.create("already-exists" /* ALREADY_EXISTS */ , {
        id: appId
    });
    if (!globalInitDone) {
        // Steps here should only be done once per page: creation or wrapping
        // of dataLayer and global gtag function.
        getOrCreateDataLayer(dataLayerName1);
        const { wrappedGtag , gtagCore  } = wrapOrCreateGtag(initializationPromisesMap1, dynamicConfigPromisesList1, measurementIdToAppId1, dataLayerName1, gtagName);
        wrappedGtagFunction = wrappedGtag;
        gtagCoreFunction = gtagCore;
        globalInitDone = true;
    }
    // Async but non-blocking.
    // This map reflects the completion state of all promises for each appId.
    initializationPromisesMap1[appId] = _initializeAnalytics(app, dynamicConfigPromisesList1, measurementIdToAppId1, installations, gtagCoreFunction, dataLayerName1, options);
    const analyticsInstance = new AnalyticsService(app);
    return analyticsInstance;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */ async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
    if (options && options.global) {
        gtagFunction("event" /* EVENT */ , eventName, eventParams);
        return;
    } else {
        const measurementId = await initializationPromise;
        const params = Object.assign(Object.assign({
        }, eventParams), {
            'send_to': measurementId
        });
        gtagFunction("event" /* EVENT */ , eventName, params);
    }
}
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */ async function setCurrentScreen$1(gtagFunction, initializationPromise, screenName, options) {
    if (options && options.global) {
        gtagFunction("set" /* SET */ , {
            'screen_name': screenName
        });
        return Promise.resolve();
    } else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* CONFIG */ , measurementId, {
            update: true,
            'screen_name': screenName
        });
    }
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */ async function setUserId$1(gtagFunction, initializationPromise, id, options) {
    if (options && options.global) {
        gtagFunction("set" /* SET */ , {
            'user_id': id
        });
        return Promise.resolve();
    } else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* CONFIG */ , measurementId, {
            update: true,
            'user_id': id
        });
    }
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */ async function setUserProperties$1(gtagFunction, initializationPromise, properties, options) {
    if (options && options.global) {
        const flatProperties = {
        };
        for (const key of Object.keys(properties))// use dot notation for merge behavior in gtag.js
        flatProperties[`user_properties.${key}`] = properties[key];
        gtagFunction("set" /* SET */ , flatProperties);
        return Promise.resolve();
    } else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* CONFIG */ , measurementId, {
            update: true,
            'user_properties': properties
        });
    }
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */ async function setAnalyticsCollectionEnabled$1(initializationPromise, enabled) {
    const measurementId = await initializationPromise;
    window[`ga-disable-${measurementId}`] = !enabled;
}
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */ function getAnalytics(app = _app.getApp()) {
    app = _util.getModularInstance(app);
    // Dependencies
    const analyticsProvider = _app._getProvider(app, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) return analyticsProvider.getImmediate();
    return initializeAnalytics(app);
}
/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */ function initializeAnalytics(app, options = {
}) {
    // Dependencies
    const analyticsProvider = _app._getProvider(app, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) {
        const existingInstance = analyticsProvider.getImmediate();
        if (_util.deepEqual(options, analyticsProvider.getOptions())) return existingInstance;
        else throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */ );
    }
    const analyticsInstance = analyticsProvider.initialize({
        options
    });
    return analyticsInstance;
}
/**
 * This is a public static method provided to users that wraps four different checks:
 *
 * 1. Check if it's not a browser extension environment.
 * 2. Check if cookies are enabled in current browser.
 * 3. Check if IndexedDB is supported by the browser environment.
 * 4. Check if the current browser context is valid for using `IndexedDB.open()`.
 *
 * @public
 *
 */ async function isSupported() {
    if (_util.isBrowserExtension()) return false;
    if (!_util.areCookiesEnabled()) return false;
    if (!_util.isIndexedDBAvailable()) return false;
    try {
        const isDBOpenable = await _util.validateIndexedDBOpenable();
        return isDBOpenable;
    } catch (error) {
        return false;
    }
}
/**
 * Use gtag `config` command to set `screen_name`.
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param screenName - Screen name to set.
 */ function setCurrentScreen(analyticsInstance, screenName, options) {
    analyticsInstance = _util.getModularInstance(analyticsInstance);
    setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap1[analyticsInstance.app.options.appId], screenName, options).catch((e)=>logger.error(e)
    );
}
/**
 * Use gtag `config` command to set `user_id`.
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param id - User ID to set.
 */ function setUserId(analyticsInstance, id, options) {
    analyticsInstance = _util.getModularInstance(analyticsInstance);
    setUserId$1(wrappedGtagFunction, initializationPromisesMap1[analyticsInstance.app.options.appId], id, options).catch((e)=>logger.error(e)
    );
}
/**
 * Use gtag `config` command to set all params specified.
 *
 * @public
 */ function setUserProperties(analyticsInstance, properties, options) {
    analyticsInstance = _util.getModularInstance(analyticsInstance);
    setUserProperties$1(wrappedGtagFunction, initializationPromisesMap1[analyticsInstance.app.options.appId], properties, options).catch((e)=>logger.error(e)
    );
}
/**
 * Sets whether Google Analytics collection is enabled for this app on this device.
 * Sets global `window['ga-disable-analyticsId'] = true;`
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param enabled - If true, enables collection, if false, disables it.
 */ function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
    analyticsInstance = _util.getModularInstance(analyticsInstance);
    setAnalyticsCollectionEnabled$1(initializationPromisesMap1[analyticsInstance.app.options.appId], enabled).catch((e)=>logger.error(e)
    );
}
/**
 * Sends a Google Analytics event with given `eventParams`. This method
 * automatically associates this logged event with this Firebase web
 * app instance on this device.
 * List of official event parameters can be found in the gtag.js
 * reference documentation:
 * {@link https://developers.google.com/gtagjs/reference/ga4-events
 * | the GA4 reference documentation}.
 *
 * @public
 */ function logEvent(analyticsInstance, eventName, eventParams, options) {
    analyticsInstance = _util.getModularInstance(analyticsInstance);
    logEvent$1(wrappedGtagFunction, initializationPromisesMap1[analyticsInstance.app.options.appId], eventName, eventParams, options).catch((e)=>logger.error(e)
    );
}
const name = "@firebase/analytics";
const version = "0.7.4";
/**
 * Firebase Analytics
 *
 * @packageDocumentation
 */ function registerAnalytics() {
    _app._registerComponent(new _component.Component(ANALYTICS_TYPE, (container, { options: analyticsOptions  })=>{
        // getImmediate for FirebaseApp will always succeed
        const app = container.getProvider('app').getImmediate();
        const installations = container.getProvider('installations-internal').getImmediate();
        return factory(app, installations, analyticsOptions);
    }, "PUBLIC" /* PUBLIC */ ));
    _app._registerComponent(new _component.Component('analytics-internal', internalFactory, "PRIVATE" /* PRIVATE */ ));
    _app.registerVersion(name, version);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    _app.registerVersion(name, version, 'esm2017');
    function internalFactory(container) {
        try {
            const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
            return {
                logEvent: (eventName, eventParams, options)=>logEvent(analytics, eventName, eventParams, options)
            };
        } catch (e) {
            throw ERROR_FACTORY.create("interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */ , {
                reason: e
            });
        }
    }
}
registerAnalytics();

},{"@firebase/app":"lLbXy","@firebase/logger":"arr7M","@firebase/util":"3yszE","@firebase/component":"1wISm","@firebase/installations":"3vooG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3vooG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteInstallations", ()=>deleteInstallations
);
parcelHelpers.export(exports, "getId", ()=>getId
);
parcelHelpers.export(exports, "getInstallations", ()=>getInstallations
);
parcelHelpers.export(exports, "getToken", ()=>getToken
);
parcelHelpers.export(exports, "onIdChange", ()=>onIdChange
);
var _app = require("@firebase/app");
var _component = require("@firebase/component");
var _util = require("@firebase/util");
var _idb = require("idb");
const name = "@firebase/installations";
const version = "0.5.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PENDING_TIMEOUT_MS = 10000;
const PACKAGE_VERSION = `w:${version}`;
const INTERNAL_AUTH_VERSION = 'FIS_v2';
const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
const TOKEN_EXPIRATION_BUFFER = 3600000; // One hour
const SERVICE = 'installations';
const SERVICE_NAME = 'Installations';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERROR_DESCRIPTION_MAP = {
    ["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */ ]: 'Missing App configuration value: "{$valueName}"',
    ["not-registered" /* NOT_REGISTERED */ ]: 'Firebase Installation is not registered.',
    ["installation-not-found" /* INSTALLATION_NOT_FOUND */ ]: 'Firebase Installation not found.',
    ["request-failed" /* REQUEST_FAILED */ ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    ["app-offline" /* APP_OFFLINE */ ]: 'Could not process request. Application offline.',
    ["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */ ]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY = new _util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */ function isServerError(error) {
    return error instanceof _util.FirebaseError && error.code.includes("request-failed" /* REQUEST_FAILED */ );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getInstallationsEndpoint({ projectId  }) {
    return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* COMPLETED */ ,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
async function getErrorFromResponse(requestName, response) {
    const responseJson = await response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY.create("request-failed" /* REQUEST_FAILED */ , {
        requestName,
        serverCode: errorData.code,
        serverMessage: errorData.message,
        serverStatus: errorData.status
    });
}
function getHeaders({ apiKey  }) {
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, { refreshToken  }) {
    const headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */ async function retryIfServerError(fn) {
    const result = await fn();
    if (result.status >= 500 && result.status < 600) // Internal Server Error. Retry request.
    return fn();
    return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function createInstallationRequest(appConfig, { fid  }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    const body = {
        fid,
        authVersion: INTERNAL_AUTH_VERSION,
        appId: appConfig.appId,
        sdkVersion: PACKAGE_VERSION
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(()=>fetch(endpoint, request)
    );
    if (response.ok) {
        const responseValue = await response.json();
        const registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2 /* COMPLETED */ ,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
        };
        return registeredInstallationEntry;
    } else throw await getErrorFromResponse('Create Installation', response);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Returns a promise that resolves after given time passes. */ function sleep(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bufferToBase64UrlSafe(array) {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */ function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        const fidByteArray = new Uint8Array(17);
        const crypto = self.crypto || self.msCrypto;
        crypto.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 112 + fidByteArray[0] % 16;
        const fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    } catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */ function encode(fidByteArray) {
    const b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Returns a string key that can be used to identify the app. */ function getKey(appConfig) {
    return `${appConfig.appName}!${appConfig.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */ function fidChanged(appConfig, fid) {
    const key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    const key = getKey(appConfig);
    let callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    const key = getKey(appConfig);
    const callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) return;
    callbackSet.delete(callback);
    if (callbackSet.size === 0) fidChangeCallbacks.delete(key);
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    const callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) return;
    for (const callback of callbacks)callback(fid);
}
function broadcastFidChange(key, fid) {
    const channel = getBroadcastChannel();
    if (channel) channel.postMessage({
        key,
        fid
    });
    closeBroadcastChannel();
}
let broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */ function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = (e)=>{
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DATABASE_NAME = 'firebase-installations-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-installations-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) dbPromise = _idb.openDb(DATABASE_NAME, DATABASE_VERSION, (upgradeDB)=>{
        // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch(upgradeDB.oldVersion){
            case 0:
                upgradeDB.createObjectStore(OBJECT_STORE_NAME);
        }
    });
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */ async function set(appConfig, value) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await objectStore.get(key);
    await objectStore.put(value, key);
    await tx.complete;
    if (!oldValue || oldValue.fid !== value.fid) fidChanged(appConfig, value.fid);
    return value;
}
/** Removes record(s) from the objectStore that match the given key. */ async function remove(appConfig) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.complete;
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */ async function update(appConfig, updateFn) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await store.get(key);
    const newValue = updateFn(oldValue);
    if (newValue === undefined) await store.delete(key);
    else await store.put(newValue, key);
    await tx.complete;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) fidChanged(appConfig, newValue.fid);
    return newValue;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */ async function getInstallationEntry(appConfig) {
    let registrationPromise;
    const installationEntry1 = await update(appConfig, (oldEntry)=>{
        const installationEntry = updateOrCreateInstallationEntry(oldEntry);
        const entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
        registrationPromise = entryWithPromise.registrationPromise;
        return entryWithPromise.installationEntry;
    });
    if (installationEntry1.fid === INVALID_FID) // FID generation failed. Waiting for the FID from the server.
    return {
        installationEntry: await registrationPromise
    };
    return {
        installationEntry: installationEntry1,
        registrationPromise
    };
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */ function updateOrCreateInstallationEntry(oldEntry) {
    const entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* NOT_STARTED */ 
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */ function triggerRegistrationIfNecessary(appConfig, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* NOT_STARTED */ ) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */ ));
            return {
                installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        const inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* IN_PROGRESS */ ,
            registrationTime: Date.now()
        };
        const registrationPromise = registerInstallation(appConfig, inProgressEntry);
        return {
            installationEntry: inProgressEntry,
            registrationPromise
        };
    } else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ ) return {
        installationEntry,
        registrationPromise: waitUntilFidRegistration(appConfig)
    };
    else return {
        installationEntry
    };
}
/** This will be executed only once for each new Firebase Installation. */ async function registerInstallation(appConfig, installationEntry) {
    try {
        const registeredInstallationEntry = await createInstallationRequest(appConfig, installationEntry);
        return set(appConfig, registeredInstallationEntry);
    } catch (e) {
        if (isServerError(e) && e.customData.serverCode === 409) // Server returned a "FID can not be used" error.
        // Generate a new ID next time.
        await remove(appConfig);
        else // Registration failed. Set FID as not registered.
        await set(appConfig, {
            fid: installationEntry.fid,
            registrationStatus: 0 /* NOT_STARTED */ 
        });
        throw e;
    }
}
/** Call if FID registration is pending in another request. */ async function waitUntilFidRegistration(appConfig) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateInstallationRequest(appConfig);
    while(entry.registrationStatus === 1 /* IN_PROGRESS */ ){
        // createInstallation request still in progress.
        await sleep(100);
        entry = await updateInstallationRequest(appConfig);
    }
    if (entry.registrationStatus === 0 /* NOT_STARTED */ ) {
        // The request timed out or failed in a different call. Try again.
        const { installationEntry , registrationPromise  } = await getInstallationEntry(appConfig);
        if (registrationPromise) return registrationPromise;
        else // if there is no registrationPromise, entry is registered.
        return installationEntry;
    }
    return entry;
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */ function updateInstallationRequest(appConfig) {
    return update(appConfig, (oldEntry)=>{
        if (!oldEntry) throw ERROR_FACTORY.create("installation-not-found" /* INSTALLATION_NOT_FOUND */ );
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) return {
        fid: entry.fid,
        registrationStatus: 0 /* NOT_STARTED */ 
    };
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return installationEntry.registrationStatus === 1 /* IN_PROGRESS */  && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateAuthTokenRequest({ appConfig , platformLoggerProvider  }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    // If platform logger exists, add the platform info string to the header.
    const platformLogger = platformLoggerProvider.getImmediate({
        optional: true
    });
    if (platformLogger) headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
    const body = {
        installation: {
            sdkVersion: PACKAGE_VERSION
        }
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(()=>fetch(endpoint, request)
    );
    if (response.ok) {
        const responseValue = await response.json();
        const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
        return completedAuthToken;
    } else throw await getErrorFromResponse('Generate Auth Token', response);
}
function getGenerateAuthTokenEndpoint(appConfig, { fid  }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */ async function refreshAuthToken(installations, forceRefresh = false) {
    let tokenPromise;
    const entry = await update(installations.appConfig, (oldEntry)=>{
        if (!isEntryRegistered(oldEntry)) throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */ );
        const oldAuthToken = oldEntry.authToken;
        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) // There is a valid token in the DB.
        return oldEntry;
        else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */ ) {
            // There already is a token request in progress.
            tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
            return oldEntry;
        } else {
            // No token or token expired.
            if (!navigator.onLine) throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */ );
            const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
            tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
            return inProgressEntry;
        }
    });
    const authToken = tokenPromise ? await tokenPromise : entry.authToken;
    return authToken;
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */ async function waitUntilAuthTokenRequest(installations, forceRefresh) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateAuthTokenRequest(installations.appConfig);
    while(entry.authToken.requestStatus === 1 /* IN_PROGRESS */ ){
        // generateAuthToken still in progress.
        await sleep(100);
        entry = await updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0 /* NOT_STARTED */ ) // The request timed out or failed in a different call. Try again.
    return refreshAuthToken(installations, forceRefresh);
    else return authToken;
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */ function updateAuthTokenRequest(appConfig) {
    return update(appConfig, (oldEntry)=>{
        if (!isEntryRegistered(oldEntry)) throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */ );
        const oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) return Object.assign(Object.assign({
        }, oldEntry), {
            authToken: {
                requestStatus: 0 /* NOT_STARTED */ 
            }
        });
        return oldEntry;
    });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
    try {
        const authToken = await generateAuthTokenRequest(installations, installationEntry);
        const updatedInstallationEntry = Object.assign(Object.assign({
        }, installationEntry), {
            authToken
        });
        await set(installations.appConfig, updatedInstallationEntry);
        return authToken;
    } catch (e) {
        if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) // Server returned a "FID not found" or a "Invalid authentication" error.
        // Generate a new ID next time.
        await remove(installations.appConfig);
        else {
            const updatedInstallationEntry = Object.assign(Object.assign({
            }, installationEntry), {
                authToken: {
                    requestStatus: 0 /* NOT_STARTED */ 
                }
            });
            await set(installations.appConfig, updatedInstallationEntry);
        }
        throw e;
    }
}
function isEntryRegistered(installationEntry) {
    return installationEntry !== undefined && installationEntry.registrationStatus === 2 /* COMPLETED */ ;
}
function isAuthTokenValid(authToken) {
    return authToken.requestStatus === 2 /* COMPLETED */  && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
    const now = Date.now();
    return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */ function makeAuthTokenRequestInProgressEntry(oldEntry) {
    const inProgressAuthToken = {
        requestStatus: 1 /* IN_PROGRESS */ ,
        requestTime: Date.now()
    };
    return Object.assign(Object.assign({
    }, oldEntry), {
        authToken: inProgressAuthToken
    });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return authToken.requestStatus === 1 /* IN_PROGRESS */  && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */ async function getId(installations) {
    const installationsImpl = installations;
    const { installationEntry , registrationPromise  } = await getInstallationEntry(installationsImpl.appConfig);
    if (registrationPromise) registrationPromise.catch(console.error);
    else // If the installation is already registered, update the authentication
    // token if needed.
    refreshAuthToken(installationsImpl).catch(console.error);
    return installationEntry.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */ async function getToken(installations, forceRefresh = false) {
    const installationsImpl = installations;
    await completeInstallationRegistration(installationsImpl.appConfig);
    // At this point we either have a Registered Installation in the DB, or we've
    // already thrown an error.
    const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
}
async function completeInstallationRegistration(appConfig) {
    const { registrationPromise  } = await getInstallationEntry(appConfig);
    if (registrationPromise) // A createInstallation request is in progress. Wait until it finishes.
    await registrationPromise;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function deleteInstallationRequest(appConfig, installationEntry) {
    const endpoint = getDeleteEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const request = {
        method: 'DELETE',
        headers
    };
    const response = await retryIfServerError(()=>fetch(endpoint, request)
    );
    if (!response.ok) throw await getErrorFromResponse('Delete Installation', response);
}
function getDeleteEndpoint(appConfig, { fid  }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */ async function deleteInstallations(installations) {
    const { appConfig  } = installations;
    const entry = await update(appConfig, (oldEntry)=>{
        if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */ ) // Delete the unregistered entry without sending a deleteInstallation request.
        return undefined;
        return oldEntry;
    });
    if (entry) {
        if (entry.registrationStatus === 1 /* IN_PROGRESS */ ) // Can't delete while trying to register.
        throw ERROR_FACTORY.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */ );
        else if (entry.registrationStatus === 2 /* COMPLETED */ ) {
            if (!navigator.onLine) throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */ );
            else {
                await deleteInstallationRequest(appConfig, entry);
                await remove(appConfig);
            }
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */ function onIdChange(installations, callback) {
    const { appConfig  } = installations;
    addCallback(appConfig, callback);
    return ()=>{
        removeCallback(appConfig, callback);
    };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */ function getInstallations(app = _app.getApp()) {
    const installationsImpl = _app._getProvider(app, 'installations').getImmediate();
    return installationsImpl;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function extractAppConfig(app) {
    if (!app || !app.options) throw getMissingValueError('App Configuration');
    if (!app.name) throw getMissingValueError('App Name');
    // Required app config keys
    const configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    for (const keyName of configKeys){
        if (!app.options[keyName]) throw getMissingValueError(keyName);
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */ , {
        valueName
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const INSTALLATIONS_NAME = 'installations';
const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
const publicFactory = (container)=>{
    const app = container.getProvider('app').getImmediate();
    // Throws if app isn't configured properly.
    const appConfig = extractAppConfig(app);
    const platformLoggerProvider = _app._getProvider(app, 'platform-logger');
    const installationsImpl = {
        app,
        appConfig,
        platformLoggerProvider,
        _delete: ()=>Promise.resolve()
    };
    return installationsImpl;
};
const internalFactory = (container)=>{
    const app = container.getProvider('app').getImmediate();
    // Internal FIS instance relies on public FIS instance.
    const installations = _app._getProvider(app, INSTALLATIONS_NAME).getImmediate();
    const installationsInternal = {
        getId: ()=>getId(installations)
        ,
        getToken: (forceRefresh)=>getToken(installations, forceRefresh)
    };
    return installationsInternal;
};
function registerInstallations() {
    _app._registerComponent(new _component.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* PUBLIC */ ));
    _app._registerComponent(new _component.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* PRIVATE */ ));
}
/**
 * Firebase Installations
 *
 * @packageDocumentation
 */ registerInstallations();
_app.registerVersion(name, version);
// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
_app.registerVersion(name, version, 'esm2017');

},{"@firebase/app":"lLbXy","@firebase/component":"1wISm","@firebase/util":"3yszE","idb":"ak8BV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ak8BV":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : (global = global || self, factory(global.idb = {
    }));
})(this, function(exports) {
    'use strict';
    function toArray(arr) {
        return Array.prototype.slice.call(arr);
    }
    function promisifyRequest(request) {
        return new Promise(function(resolve, reject) {
            request.onsuccess = function() {
                resolve(request.result);
            };
            request.onerror = function() {
                reject(request.error);
            };
        });
    }
    function promisifyRequestCall(obj, method, args) {
        var request;
        var p = new Promise(function(resolve, reject) {
            request = obj[method].apply(obj, args);
            promisifyRequest(request).then(resolve, reject);
        });
        p.request = request;
        return p;
    }
    function promisifyCursorRequestCall(obj, method, args) {
        var p = promisifyRequestCall(obj, method, args);
        return p.then(function(value) {
            if (!value) return;
            return new Cursor(value, p.request);
        });
    }
    function proxyProperties(ProxyClass, targetProp, properties) {
        properties.forEach(function(prop) {
            Object.defineProperty(ProxyClass.prototype, prop, {
                get: function() {
                    return this[targetProp][prop];
                },
                set: function(val) {
                    this[targetProp][prop] = val;
                }
            });
        });
    }
    function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
            if (!(prop in Constructor.prototype)) return;
            ProxyClass.prototype[prop] = function() {
                return promisifyRequestCall(this[targetProp], prop, arguments);
            };
        });
    }
    function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
            if (!(prop in Constructor.prototype)) return;
            ProxyClass.prototype[prop] = function() {
                return this[targetProp][prop].apply(this[targetProp], arguments);
            };
        });
    }
    function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
            if (!(prop in Constructor.prototype)) return;
            ProxyClass.prototype[prop] = function() {
                return promisifyCursorRequestCall(this[targetProp], prop, arguments);
            };
        });
    }
    function Index(index) {
        this._index = index;
    }
    proxyProperties(Index, '_index', [
        'name',
        'keyPath',
        'multiEntry',
        'unique'
    ]);
    proxyRequestMethods(Index, '_index', IDBIndex, [
        'get',
        'getKey',
        'getAll',
        'getAllKeys',
        'count'
    ]);
    proxyCursorRequestMethods(Index, '_index', IDBIndex, [
        'openCursor',
        'openKeyCursor'
    ]);
    function Cursor(cursor, request) {
        this._cursor = cursor;
        this._request = request;
    }
    proxyProperties(Cursor, '_cursor', [
        'direction',
        'key',
        'primaryKey',
        'value'
    ]);
    proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
        'update',
        'delete'
    ]);
    // proxy 'next' methods
    [
        'advance',
        'continue',
        'continuePrimaryKey'
    ].forEach(function(methodName) {
        if (!(methodName in IDBCursor.prototype)) return;
        Cursor.prototype[methodName] = function() {
            var cursor = this;
            var args = arguments;
            return Promise.resolve().then(function() {
                cursor._cursor[methodName].apply(cursor._cursor, args);
                return promisifyRequest(cursor._request).then(function(value) {
                    if (!value) return;
                    return new Cursor(value, cursor._request);
                });
            });
        };
    });
    function ObjectStore(store) {
        this._store = store;
    }
    ObjectStore.prototype.createIndex = function() {
        return new Index(this._store.createIndex.apply(this._store, arguments));
    };
    ObjectStore.prototype.index = function() {
        return new Index(this._store.index.apply(this._store, arguments));
    };
    proxyProperties(ObjectStore, '_store', [
        'name',
        'keyPath',
        'indexNames',
        'autoIncrement'
    ]);
    proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
        'put',
        'add',
        'delete',
        'clear',
        'get',
        'getAll',
        'getKey',
        'getAllKeys',
        'count'
    ]);
    proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
        'openCursor',
        'openKeyCursor'
    ]);
    proxyMethods(ObjectStore, '_store', IDBObjectStore, [
        'deleteIndex'
    ]);
    function Transaction(idbTransaction) {
        this._tx = idbTransaction;
        this.complete = new Promise(function(resolve, reject) {
            idbTransaction.oncomplete = function() {
                resolve();
            };
            idbTransaction.onerror = function() {
                reject(idbTransaction.error);
            };
            idbTransaction.onabort = function() {
                reject(idbTransaction.error);
            };
        });
    }
    Transaction.prototype.objectStore = function() {
        return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
    };
    proxyProperties(Transaction, '_tx', [
        'objectStoreNames',
        'mode'
    ]);
    proxyMethods(Transaction, '_tx', IDBTransaction, [
        'abort'
    ]);
    function UpgradeDB(db, oldVersion, transaction) {
        this._db = db;
        this.oldVersion = oldVersion;
        this.transaction = new Transaction(transaction);
    }
    UpgradeDB.prototype.createObjectStore = function() {
        return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
    };
    proxyProperties(UpgradeDB, '_db', [
        'name',
        'version',
        'objectStoreNames'
    ]);
    proxyMethods(UpgradeDB, '_db', IDBDatabase, [
        'deleteObjectStore',
        'close'
    ]);
    function DB(db) {
        this._db = db;
    }
    DB.prototype.transaction = function() {
        return new Transaction(this._db.transaction.apply(this._db, arguments));
    };
    proxyProperties(DB, '_db', [
        'name',
        'version',
        'objectStoreNames'
    ]);
    proxyMethods(DB, '_db', IDBDatabase, [
        'close'
    ]);
    // Add cursor iterators
    // TODO: remove this once browsers do the right thing with promises
    [
        'openCursor',
        'openKeyCursor'
    ].forEach(function(funcName) {
        [
            ObjectStore,
            Index
        ].forEach(function(Constructor) {
            // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
            if (!(funcName in Constructor.prototype)) return;
            Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
                var args = toArray(arguments);
                var callback = args[args.length - 1];
                var nativeObject = this._store || this._index;
                var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
                request.onsuccess = function() {
                    callback(request.result);
                };
            };
        });
    });
    // polyfill getAll
    [
        Index,
        ObjectStore
    ].forEach(function(Constructor) {
        if (Constructor.prototype.getAll) return;
        Constructor.prototype.getAll = function(query, count) {
            var instance = this;
            var items = [];
            return new Promise(function(resolve) {
                instance.iterateCursor(query, function(cursor) {
                    if (!cursor) {
                        resolve(items);
                        return;
                    }
                    items.push(cursor.value);
                    if (count !== undefined && items.length == count) {
                        resolve(items);
                        return;
                    }
                    cursor.continue();
                });
            });
        };
    });
    function openDb(name, version, upgradeCallback) {
        var p = promisifyRequestCall(indexedDB, 'open', [
            name,
            version
        ]);
        var request = p.request;
        if (request) request.onupgradeneeded = function(event) {
            if (upgradeCallback) upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        };
        return p.then(function(db) {
            return new DB(db);
        });
    }
    function deleteDb(name) {
        return promisifyRequestCall(indexedDB, 'deleteDatabase', [
            name
        ]);
    }
    exports.openDb = openDb;
    exports.deleteDb = deleteDb;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}],"g8VIo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _auth = require("@firebase/auth");
parcelHelpers.exportAll(_auth, exports);

},{"@firebase/auth":"QuNH4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"QuNH4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionCodeOperation", ()=>_index839De510Js.A
);
parcelHelpers.export(exports, "ActionCodeURL", ()=>_index839De510Js.ac
);
parcelHelpers.export(exports, "AuthCredential", ()=>_index839De510Js.G
);
parcelHelpers.export(exports, "AuthErrorCodes", ()=>_index839De510Js.C
);
parcelHelpers.export(exports, "EmailAuthCredential", ()=>_index839De510Js.H
);
parcelHelpers.export(exports, "EmailAuthProvider", ()=>_index839De510Js.L
);
parcelHelpers.export(exports, "FacebookAuthProvider", ()=>_index839De510Js.M
);
parcelHelpers.export(exports, "FactorId", ()=>_index839De510Js.F
);
parcelHelpers.export(exports, "GithubAuthProvider", ()=>_index839De510Js.Q
);
parcelHelpers.export(exports, "GoogleAuthProvider", ()=>_index839De510Js.N
);
parcelHelpers.export(exports, "OAuthCredential", ()=>_index839De510Js.I
);
parcelHelpers.export(exports, "OAuthProvider", ()=>_index839De510Js.T
);
parcelHelpers.export(exports, "OperationType", ()=>_index839De510Js.O
);
parcelHelpers.export(exports, "PhoneAuthCredential", ()=>_index839De510Js.J
);
parcelHelpers.export(exports, "PhoneAuthProvider", ()=>_index839De510Js.P
);
parcelHelpers.export(exports, "PhoneMultiFactorGenerator", ()=>_index839De510Js.m
);
parcelHelpers.export(exports, "ProviderId", ()=>_index839De510Js.o
);
parcelHelpers.export(exports, "RecaptchaVerifier", ()=>_index839De510Js.R
);
parcelHelpers.export(exports, "SAMLAuthProvider", ()=>_index839De510Js.U
);
parcelHelpers.export(exports, "SignInMethod", ()=>_index839De510Js.S
);
parcelHelpers.export(exports, "TwitterAuthProvider", ()=>_index839De510Js.V
);
parcelHelpers.export(exports, "applyActionCode", ()=>_index839De510Js.a1
);
parcelHelpers.export(exports, "browserLocalPersistence", ()=>_index839De510Js.b
);
parcelHelpers.export(exports, "browserPopupRedirectResolver", ()=>_index839De510Js.k
);
parcelHelpers.export(exports, "browserSessionPersistence", ()=>_index839De510Js.a
);
parcelHelpers.export(exports, "checkActionCode", ()=>_index839De510Js.a2
);
parcelHelpers.export(exports, "confirmPasswordReset", ()=>_index839De510Js.a0
);
parcelHelpers.export(exports, "connectAuthEmulator", ()=>_index839De510Js.E
);
parcelHelpers.export(exports, "createUserWithEmailAndPassword", ()=>_index839De510Js.a4
);
parcelHelpers.export(exports, "debugErrorMap", ()=>_index839De510Js.z
);
parcelHelpers.export(exports, "deleteUser", ()=>_index839De510Js.y
);
parcelHelpers.export(exports, "fetchSignInMethodsForEmail", ()=>_index839De510Js.a9
);
parcelHelpers.export(exports, "getAdditionalUserInfo", ()=>_index839De510Js.ak
);
parcelHelpers.export(exports, "getAuth", ()=>_index839De510Js.n
);
parcelHelpers.export(exports, "getIdToken", ()=>_index839De510Js.ah
);
parcelHelpers.export(exports, "getIdTokenResult", ()=>_index839De510Js.ai
);
parcelHelpers.export(exports, "getMultiFactorResolver", ()=>_index839De510Js.am
);
parcelHelpers.export(exports, "getRedirectResult", ()=>_index839De510Js.j
);
parcelHelpers.export(exports, "inMemoryPersistence", ()=>_index839De510Js.K
);
parcelHelpers.export(exports, "indexedDBLocalPersistence", ()=>_index839De510Js.i
);
parcelHelpers.export(exports, "initializeAuth", ()=>_index839De510Js.D
);
parcelHelpers.export(exports, "isSignInWithEmailLink", ()=>_index839De510Js.a7
);
parcelHelpers.export(exports, "linkWithCredential", ()=>_index839De510Js.Y
);
parcelHelpers.export(exports, "linkWithPhoneNumber", ()=>_index839De510Js.l
);
parcelHelpers.export(exports, "linkWithPopup", ()=>_index839De510Js.d
);
parcelHelpers.export(exports, "linkWithRedirect", ()=>_index839De510Js.g
);
parcelHelpers.export(exports, "multiFactor", ()=>_index839De510Js.an
);
parcelHelpers.export(exports, "onAuthStateChanged", ()=>_index839De510Js.t
);
parcelHelpers.export(exports, "onIdTokenChanged", ()=>_index839De510Js.q
);
parcelHelpers.export(exports, "parseActionCodeURL", ()=>_index839De510Js.ad
);
parcelHelpers.export(exports, "prodErrorMap", ()=>_index839De510Js.B
);
parcelHelpers.export(exports, "reauthenticateWithCredential", ()=>_index839De510Js.Z
);
parcelHelpers.export(exports, "reauthenticateWithPhoneNumber", ()=>_index839De510Js.r
);
parcelHelpers.export(exports, "reauthenticateWithPopup", ()=>_index839De510Js.e
);
parcelHelpers.export(exports, "reauthenticateWithRedirect", ()=>_index839De510Js.h
);
parcelHelpers.export(exports, "reload", ()=>_index839De510Js.al
);
parcelHelpers.export(exports, "sendEmailVerification", ()=>_index839De510Js.aa
);
parcelHelpers.export(exports, "sendPasswordResetEmail", ()=>_index839De510Js.$
);
parcelHelpers.export(exports, "sendSignInLinkToEmail", ()=>_index839De510Js.a6
);
parcelHelpers.export(exports, "setPersistence", ()=>_index839De510Js.p
);
parcelHelpers.export(exports, "signInAnonymously", ()=>_index839De510Js.W
);
parcelHelpers.export(exports, "signInWithCredential", ()=>_index839De510Js.X
);
parcelHelpers.export(exports, "signInWithCustomToken", ()=>_index839De510Js._
);
parcelHelpers.export(exports, "signInWithEmailAndPassword", ()=>_index839De510Js.a5
);
parcelHelpers.export(exports, "signInWithEmailLink", ()=>_index839De510Js.a8
);
parcelHelpers.export(exports, "signInWithPhoneNumber", ()=>_index839De510Js.s
);
parcelHelpers.export(exports, "signInWithPopup", ()=>_index839De510Js.c
);
parcelHelpers.export(exports, "signInWithRedirect", ()=>_index839De510Js.f
);
parcelHelpers.export(exports, "signOut", ()=>_index839De510Js.x
);
parcelHelpers.export(exports, "unlink", ()=>_index839De510Js.aj
);
parcelHelpers.export(exports, "updateCurrentUser", ()=>_index839De510Js.w
);
parcelHelpers.export(exports, "updateEmail", ()=>_index839De510Js.af
);
parcelHelpers.export(exports, "updatePassword", ()=>_index839De510Js.ag
);
parcelHelpers.export(exports, "updatePhoneNumber", ()=>_index839De510Js.u
);
parcelHelpers.export(exports, "updateProfile", ()=>_index839De510Js.ae
);
parcelHelpers.export(exports, "useDeviceLanguage", ()=>_index839De510Js.v
);
parcelHelpers.export(exports, "verifyBeforeUpdateEmail", ()=>_index839De510Js.ab
);
parcelHelpers.export(exports, "verifyPasswordResetCode", ()=>_index839De510Js.a3
);
var _util = require("@firebase/util");
var _app = require("@firebase/app");
var _tslib = require("tslib");
var _logger = require("@firebase/logger");
var _component = require("@firebase/component");
var _index839De510Js = require("./index-839de510.js");

},{"./index-839de510.js":"64R9C","@firebase/util":"3yszE","@firebase/app":"lLbXy","tslib":"j55WF","@firebase/logger":"arr7M","@firebase/component":"1wISm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"64R9C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>sendPasswordResetEmail
);
parcelHelpers.export(exports, "A", ()=>ActionCodeOperation
);
parcelHelpers.export(exports, "B", ()=>prodErrorMap
);
parcelHelpers.export(exports, "C", ()=>AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY
);
parcelHelpers.export(exports, "D", ()=>initializeAuth
);
parcelHelpers.export(exports, "E", ()=>connectAuthEmulator
);
parcelHelpers.export(exports, "F", ()=>FactorId
);
parcelHelpers.export(exports, "G", ()=>AuthCredential
);
parcelHelpers.export(exports, "H", ()=>EmailAuthCredential
);
parcelHelpers.export(exports, "I", ()=>OAuthCredential
);
parcelHelpers.export(exports, "J", ()=>PhoneAuthCredential
);
parcelHelpers.export(exports, "K", ()=>inMemoryPersistence
);
parcelHelpers.export(exports, "L", ()=>EmailAuthProvider
);
parcelHelpers.export(exports, "M", ()=>FacebookAuthProvider
);
parcelHelpers.export(exports, "N", ()=>GoogleAuthProvider
);
parcelHelpers.export(exports, "O", ()=>OperationType
);
parcelHelpers.export(exports, "P", ()=>PhoneAuthProvider
);
parcelHelpers.export(exports, "Q", ()=>GithubAuthProvider
);
parcelHelpers.export(exports, "R", ()=>RecaptchaVerifier
);
parcelHelpers.export(exports, "S", ()=>SignInMethod
);
parcelHelpers.export(exports, "T", ()=>OAuthProvider
);
parcelHelpers.export(exports, "U", ()=>SAMLAuthProvider
);
parcelHelpers.export(exports, "V", ()=>TwitterAuthProvider
);
parcelHelpers.export(exports, "W", ()=>signInAnonymously
);
parcelHelpers.export(exports, "X", ()=>signInWithCredential
);
parcelHelpers.export(exports, "Y", ()=>linkWithCredential
);
parcelHelpers.export(exports, "Z", ()=>reauthenticateWithCredential
);
parcelHelpers.export(exports, "_", ()=>signInWithCustomToken
);
parcelHelpers.export(exports, "a", ()=>browserSessionPersistence
);
parcelHelpers.export(exports, "a0", ()=>confirmPasswordReset
);
parcelHelpers.export(exports, "a1", ()=>applyActionCode
);
parcelHelpers.export(exports, "a2", ()=>checkActionCode
);
parcelHelpers.export(exports, "a3", ()=>verifyPasswordResetCode
);
parcelHelpers.export(exports, "a4", ()=>createUserWithEmailAndPassword
);
parcelHelpers.export(exports, "a5", ()=>signInWithEmailAndPassword
);
parcelHelpers.export(exports, "a6", ()=>sendSignInLinkToEmail
);
parcelHelpers.export(exports, "a7", ()=>isSignInWithEmailLink
);
parcelHelpers.export(exports, "a8", ()=>signInWithEmailLink
);
parcelHelpers.export(exports, "a9", ()=>fetchSignInMethodsForEmail
);
parcelHelpers.export(exports, "aA", ()=>_getRedirectResult
);
parcelHelpers.export(exports, "aB", ()=>_clearRedirectOutcomes
);
parcelHelpers.export(exports, "aC", ()=>_castAuth
);
parcelHelpers.export(exports, "aD", ()=>UserImpl
);
parcelHelpers.export(exports, "aE", ()=>AuthImpl
);
parcelHelpers.export(exports, "aF", ()=>_getClientVersion
);
parcelHelpers.export(exports, "aG", ()=>_generateEventId
);
parcelHelpers.export(exports, "aH", ()=>AuthPopup
);
parcelHelpers.export(exports, "aI", ()=>FetchProvider
);
parcelHelpers.export(exports, "aJ", ()=>SAMLAuthCredential
);
parcelHelpers.export(exports, "aa", ()=>sendEmailVerification
);
parcelHelpers.export(exports, "ab", ()=>verifyBeforeUpdateEmail
);
parcelHelpers.export(exports, "ac", ()=>ActionCodeURL
);
parcelHelpers.export(exports, "ad", ()=>parseActionCodeURL
);
parcelHelpers.export(exports, "ae", ()=>updateProfile
);
parcelHelpers.export(exports, "af", ()=>updateEmail
);
parcelHelpers.export(exports, "ag", ()=>updatePassword
);
parcelHelpers.export(exports, "ah", ()=>getIdToken
);
parcelHelpers.export(exports, "ai", ()=>getIdTokenResult
);
parcelHelpers.export(exports, "aj", ()=>unlink
);
parcelHelpers.export(exports, "ak", ()=>getAdditionalUserInfo
);
parcelHelpers.export(exports, "al", ()=>reload
);
parcelHelpers.export(exports, "am", ()=>getMultiFactorResolver
);
parcelHelpers.export(exports, "an", ()=>multiFactor
);
parcelHelpers.export(exports, "ao", ()=>_isIOS7Or8
);
parcelHelpers.export(exports, "ap", ()=>debugAssert
);
parcelHelpers.export(exports, "aq", ()=>_isIOS
);
parcelHelpers.export(exports, "ar", ()=>_isAndroid
);
parcelHelpers.export(exports, "as", ()=>_fail
);
parcelHelpers.export(exports, "at", ()=>_getRedirectUrl
);
parcelHelpers.export(exports, "au", ()=>_getProjectConfig
);
parcelHelpers.export(exports, "av", ()=>_createError
);
parcelHelpers.export(exports, "aw", ()=>_assert
);
parcelHelpers.export(exports, "ax", ()=>_getInstance
);
parcelHelpers.export(exports, "ay", ()=>_persistenceKeyName
);
parcelHelpers.export(exports, "az", ()=>AuthEventManager
);
parcelHelpers.export(exports, "b", ()=>browserLocalPersistence
);
parcelHelpers.export(exports, "c", ()=>signInWithPopup
);
parcelHelpers.export(exports, "d", ()=>linkWithPopup
);
parcelHelpers.export(exports, "e", ()=>reauthenticateWithPopup
);
parcelHelpers.export(exports, "f", ()=>signInWithRedirect
);
parcelHelpers.export(exports, "g", ()=>linkWithRedirect
);
parcelHelpers.export(exports, "h", ()=>reauthenticateWithRedirect
);
parcelHelpers.export(exports, "i", ()=>indexedDBLocalPersistence
);
parcelHelpers.export(exports, "j", ()=>getRedirectResult
);
parcelHelpers.export(exports, "k", ()=>browserPopupRedirectResolver
);
parcelHelpers.export(exports, "l", ()=>linkWithPhoneNumber
);
parcelHelpers.export(exports, "m", ()=>PhoneMultiFactorGenerator
);
parcelHelpers.export(exports, "n", ()=>getAuth
);
parcelHelpers.export(exports, "o", ()=>ProviderId
);
parcelHelpers.export(exports, "p", ()=>setPersistence
);
parcelHelpers.export(exports, "q", ()=>onIdTokenChanged
);
parcelHelpers.export(exports, "r", ()=>reauthenticateWithPhoneNumber
);
parcelHelpers.export(exports, "s", ()=>signInWithPhoneNumber
);
parcelHelpers.export(exports, "t", ()=>onAuthStateChanged
);
parcelHelpers.export(exports, "u", ()=>updatePhoneNumber
);
parcelHelpers.export(exports, "v", ()=>useDeviceLanguage
);
parcelHelpers.export(exports, "w", ()=>updateCurrentUser
);
parcelHelpers.export(exports, "x", ()=>signOut
);
parcelHelpers.export(exports, "y", ()=>deleteUser
);
parcelHelpers.export(exports, "z", ()=>debugErrorMap
);
var _util = require("@firebase/util");
var _app = require("@firebase/app");
var _tslib = require("tslib");
var _logger = require("@firebase/logger");
var _component = require("@firebase/component");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An enum of factors that may be used for multifactor authentication.
 *
 * @public
 */ const FactorId = {
    /** Phone as second factor */ PHONE: 'phone'
};
/**
 * Enumeration of supported providers.
 *
 * @public
 */ const ProviderId = {
    /** Facebook provider ID */ FACEBOOK: 'facebook.com',
    /** GitHub provider ID */ GITHUB: 'github.com',
    /** Google provider ID */ GOOGLE: 'google.com',
    /** Password provider */ PASSWORD: 'password',
    /** Phone provider */ PHONE: 'phone',
    /** Twitter provider ID */ TWITTER: 'twitter.com'
};
/**
 * Enumeration of supported sign-in methods.
 *
 * @public
 */ const SignInMethod = {
    /** Email link sign in method */ EMAIL_LINK: 'emailLink',
    /** Email/password sign in method */ EMAIL_PASSWORD: 'password',
    /** Facebook sign in method */ FACEBOOK: 'facebook.com',
    /** GitHub sign in method */ GITHUB: 'github.com',
    /** Google sign in method */ GOOGLE: 'google.com',
    /** Phone sign in method */ PHONE: 'phone',
    /** Twitter sign in method */ TWITTER: 'twitter.com'
};
/**
 * Enumeration of supported operation types.
 *
 * @public
 */ const OperationType = {
    /** Operation involving linking an additional provider to an already signed-in user. */ LINK: 'link',
    /** Operation involving using a provider to reauthenticate an already signed-in user. */ REAUTHENTICATE: 'reauthenticate',
    /** Operation involving signing in a user. */ SIGN_IN: 'signIn'
};
/**
 * An enumeration of the possible email action types.
 *
 * @public
 */ const ActionCodeOperation = {
    /** The email link sign-in action. */ EMAIL_SIGNIN: 'EMAIL_SIGNIN',
    /** The password reset action. */ PASSWORD_RESET: 'PASSWORD_RESET',
    /** The email revocation action. */ RECOVER_EMAIL: 'RECOVER_EMAIL',
    /** The revert second factor addition email action. */ REVERT_SECOND_FACTOR_ADDITION: 'REVERT_SECOND_FACTOR_ADDITION',
    /** The revert second factor addition email action. */ VERIFY_AND_CHANGE_EMAIL: 'VERIFY_AND_CHANGE_EMAIL',
    /** The email verification action. */ VERIFY_EMAIL: 'VERIFY_EMAIL'
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _debugErrorMap() {
    return {
        ["admin-restricted-operation" /* ADMIN_ONLY_OPERATION */ ]: 'This operation is restricted to administrators only.',
        ["argument-error" /* ARGUMENT_ERROR */ ]: '',
        ["app-not-authorized" /* APP_NOT_AUTHORIZED */ ]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
        ["app-not-installed" /* APP_NOT_INSTALLED */ ]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
        ["captcha-check-failed" /* CAPTCHA_CHECK_FAILED */ ]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
        ["code-expired" /* CODE_EXPIRED */ ]: "The SMS code has expired. Please re-send the verification code to try again.",
        ["cordova-not-ready" /* CORDOVA_NOT_READY */ ]: 'Cordova framework is not ready.',
        ["cors-unsupported" /* CORS_UNSUPPORTED */ ]: 'This browser is not supported.',
        ["credential-already-in-use" /* CREDENTIAL_ALREADY_IN_USE */ ]: 'This credential is already associated with a different user account.',
        ["custom-token-mismatch" /* CREDENTIAL_MISMATCH */ ]: 'The custom token corresponds to a different audience.',
        ["requires-recent-login" /* CREDENTIAL_TOO_OLD_LOGIN_AGAIN */ ]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        ["dependent-sdk-initialized-before-auth" /* DEPENDENT_SDK_INIT_BEFORE_AUTH */ ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
        ["dynamic-link-not-activated" /* DYNAMIC_LINK_NOT_ACTIVATED */ ]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
        ["email-change-needs-verification" /* EMAIL_CHANGE_NEEDS_VERIFICATION */ ]: 'Multi-factor users must always have a verified email.',
        ["email-already-in-use" /* EMAIL_EXISTS */ ]: 'The email address is already in use by another account.',
        ["emulator-config-failed" /* EMULATOR_CONFIG_FAILED */ ]: "Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling \"connectAuthEmulator()\" sooner.",
        ["expired-action-code" /* EXPIRED_OOB_CODE */ ]: 'The action code has expired.',
        ["cancelled-popup-request" /* EXPIRED_POPUP_REQUEST */ ]: 'This operation has been cancelled due to another conflicting popup being opened.',
        ["internal-error" /* INTERNAL_ERROR */ ]: 'An internal AuthError has occurred.',
        ["invalid-app-credential" /* INVALID_APP_CREDENTIAL */ ]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
        ["invalid-app-id" /* INVALID_APP_ID */ ]: 'The mobile app identifier is not registed for the current project.',
        ["invalid-user-token" /* INVALID_AUTH */ ]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
        ["invalid-auth-event" /* INVALID_AUTH_EVENT */ ]: 'An internal AuthError has occurred.',
        ["invalid-verification-code" /* INVALID_CODE */ ]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
        ["invalid-continue-uri" /* INVALID_CONTINUE_URI */ ]: 'The continue URL provided in the request is invalid.',
        ["invalid-cordova-configuration" /* INVALID_CORDOVA_CONFIGURATION */ ]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
        ["invalid-custom-token" /* INVALID_CUSTOM_TOKEN */ ]: 'The custom token format is incorrect. Please check the documentation.',
        ["invalid-dynamic-link-domain" /* INVALID_DYNAMIC_LINK_DOMAIN */ ]: 'The provided dynamic link domain is not configured or authorized for the current project.',
        ["invalid-email" /* INVALID_EMAIL */ ]: 'The email address is badly formatted.',
        ["invalid-emulator-scheme" /* INVALID_EMULATOR_SCHEME */ ]: 'Emulator URL must start with a valid scheme (http:// or https://).',
        ["invalid-api-key" /* INVALID_API_KEY */ ]: 'Your API key is invalid, please check you have copied it correctly.',
        ["invalid-cert-hash" /* INVALID_CERT_HASH */ ]: 'The SHA-1 certificate hash provided is invalid.',
        ["invalid-credential" /* INVALID_IDP_RESPONSE */ ]: 'The supplied auth credential is malformed or has expired.',
        ["invalid-message-payload" /* INVALID_MESSAGE_PAYLOAD */ ]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
        ["invalid-multi-factor-session" /* INVALID_MFA_SESSION */ ]: 'The request does not contain a valid proof of first factor successful sign-in.',
        ["invalid-oauth-provider" /* INVALID_OAUTH_PROVIDER */ ]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
        ["invalid-oauth-client-id" /* INVALID_OAUTH_CLIENT_ID */ ]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
        ["unauthorized-domain" /* INVALID_ORIGIN */ ]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
        ["invalid-action-code" /* INVALID_OOB_CODE */ ]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
        ["wrong-password" /* INVALID_PASSWORD */ ]: 'The password is invalid or the user does not have a password.',
        ["invalid-persistence-type" /* INVALID_PERSISTENCE */ ]: 'The specified persistence type is invalid. It can only be local, session or none.',
        ["invalid-phone-number" /* INVALID_PHONE_NUMBER */ ]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
        ["invalid-provider-id" /* INVALID_PROVIDER_ID */ ]: 'The specified provider ID is invalid.',
        ["invalid-recipient-email" /* INVALID_RECIPIENT_EMAIL */ ]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
        ["invalid-sender" /* INVALID_SENDER */ ]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
        ["invalid-verification-id" /* INVALID_SESSION_INFO */ ]: 'The verification ID used to create the phone auth credential is invalid.',
        ["invalid-tenant-id" /* INVALID_TENANT_ID */ ]: "The Auth instance's tenant ID is invalid.",
        ["missing-android-pkg-name" /* MISSING_ANDROID_PACKAGE_NAME */ ]: 'An Android Package Name must be provided if the Android App is required to be installed.',
        ["auth-domain-config-required" /* MISSING_AUTH_DOMAIN */ ]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
        ["missing-app-credential" /* MISSING_APP_CREDENTIAL */ ]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
        ["missing-verification-code" /* MISSING_CODE */ ]: 'The phone auth credential was created with an empty SMS verification code.',
        ["missing-continue-uri" /* MISSING_CONTINUE_URI */ ]: 'A continue URL must be provided in the request.',
        ["missing-iframe-start" /* MISSING_IFRAME_START */ ]: 'An internal AuthError has occurred.',
        ["missing-ios-bundle-id" /* MISSING_IOS_BUNDLE_ID */ ]: 'An iOS Bundle ID must be provided if an App Store ID is provided.',
        ["missing-or-invalid-nonce" /* MISSING_OR_INVALID_NONCE */ ]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
        ["missing-multi-factor-info" /* MISSING_MFA_INFO */ ]: 'No second factor identifier is provided.',
        ["missing-multi-factor-session" /* MISSING_MFA_SESSION */ ]: 'The request is missing proof of first factor successful sign-in.',
        ["missing-phone-number" /* MISSING_PHONE_NUMBER */ ]: 'To send verification codes, provide a phone number for the recipient.',
        ["missing-verification-id" /* MISSING_SESSION_INFO */ ]: 'The phone auth credential was created with an empty verification ID.',
        ["app-deleted" /* MODULE_DESTROYED */ ]: 'This instance of FirebaseApp has been deleted.',
        ["multi-factor-info-not-found" /* MFA_INFO_NOT_FOUND */ ]: 'The user does not have a second factor matching the identifier provided.',
        ["multi-factor-auth-required" /* MFA_REQUIRED */ ]: 'Proof of ownership of a second factor is required to complete sign-in.',
        ["account-exists-with-different-credential" /* NEED_CONFIRMATION */ ]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
        ["network-request-failed" /* NETWORK_REQUEST_FAILED */ ]: 'A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.',
        ["no-auth-event" /* NO_AUTH_EVENT */ ]: 'An internal AuthError has occurred.',
        ["no-such-provider" /* NO_SUCH_PROVIDER */ ]: 'User was not linked to an account with the given provider.',
        ["null-user" /* NULL_USER */ ]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
        ["operation-not-allowed" /* OPERATION_NOT_ALLOWED */ ]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
        ["operation-not-supported-in-this-environment" /* OPERATION_NOT_SUPPORTED */ ]: "This operation is not supported in the environment this application is running on. \"location.protocol\" must be http, https or chrome-extension and web storage must be enabled.",
        ["popup-blocked" /* POPUP_BLOCKED */ ]: 'Unable to establish a connection with the popup. It may have been blocked by the browser.',
        ["popup-closed-by-user" /* POPUP_CLOSED_BY_USER */ ]: 'The popup has been closed by the user before finalizing the operation.',
        ["provider-already-linked" /* PROVIDER_ALREADY_LINKED */ ]: 'User can only be linked to one identity for the given provider.',
        ["quota-exceeded" /* QUOTA_EXCEEDED */ ]: "The project's quota for this operation has been exceeded.",
        ["redirect-cancelled-by-user" /* REDIRECT_CANCELLED_BY_USER */ ]: 'The redirect operation has been cancelled by the user before finalizing.',
        ["redirect-operation-pending" /* REDIRECT_OPERATION_PENDING */ ]: 'A redirect sign-in operation is already pending.',
        ["rejected-credential" /* REJECTED_CREDENTIAL */ ]: 'The request contains malformed or mismatching credentials.',
        ["second-factor-already-in-use" /* SECOND_FACTOR_ALREADY_ENROLLED */ ]: 'The second factor is already enrolled on this account.',
        ["maximum-second-factor-count-exceeded" /* SECOND_FACTOR_LIMIT_EXCEEDED */ ]: 'The maximum allowed number of second factors on a user has been exceeded.',
        ["tenant-id-mismatch" /* TENANT_ID_MISMATCH */ ]: "The provided tenant ID does not match the Auth instance's tenant ID",
        ["timeout" /* TIMEOUT */ ]: 'The operation has timed out.',
        ["user-token-expired" /* TOKEN_EXPIRED */ ]: "The user's credential is no longer valid. The user must sign in again.",
        ["too-many-requests" /* TOO_MANY_ATTEMPTS_TRY_LATER */ ]: "We have blocked all requests from this device due to unusual activity. Try again later.",
        ["unauthorized-continue-uri" /* UNAUTHORIZED_DOMAIN */ ]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
        ["unsupported-first-factor" /* UNSUPPORTED_FIRST_FACTOR */ ]: 'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
        ["unsupported-persistence-type" /* UNSUPPORTED_PERSISTENCE */ ]: 'The current environment does not support the specified persistence type.',
        ["unsupported-tenant-operation" /* UNSUPPORTED_TENANT_OPERATION */ ]: 'This operation is not supported in a multi-tenant context.',
        ["unverified-email" /* UNVERIFIED_EMAIL */ ]: 'The operation requires a verified email.',
        ["user-cancelled" /* USER_CANCELLED */ ]: 'The user did not grant your application the permissions it requested.',
        ["user-not-found" /* USER_DELETED */ ]: "There is no user record corresponding to this identifier. The user may have been deleted.",
        ["user-disabled" /* USER_DISABLED */ ]: 'The user account has been disabled by an administrator.',
        ["user-mismatch" /* USER_MISMATCH */ ]: 'The supplied credentials do not correspond to the previously signed in user.',
        ["user-signed-out" /* USER_SIGNED_OUT */ ]: '',
        ["weak-password" /* WEAK_PASSWORD */ ]: 'The password must be 6 characters long or more.',
        ["web-storage-unsupported" /* WEB_STORAGE_UNSUPPORTED */ ]: 'This browser is not supported or 3rd party cookies and data may be disabled.',
        ["already-initialized" /* ALREADY_INITIALIZED */ ]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."
    };
}
function _prodErrorMap() {
    // We will include this one message in the prod error map since by the very
    // nature of this error, developers will never be able to see the message
    // using the debugErrorMap (which is installed during auth initialization).
    return {
        ["dependent-sdk-initialized-before-auth" /* DEPENDENT_SDK_INIT_BEFORE_AUTH */ ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    };
}
/**
 * A verbose error map with detailed descriptions for most error codes.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */ const debugErrorMap = _debugErrorMap;
/**
 * A minimal error map with all verbose error messages stripped.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */ const prodErrorMap = _prodErrorMap;
const _DEFAULT_AUTH_ERROR_FACTORY = new _util.ErrorFactory('auth', 'Firebase', _prodErrorMap());
/**
 * A map of potential `Auth` error codes, for easier comparison with errors
 * thrown by the SDK.
 *
 * @remarks
 * Note that you can't tree-shake individual keys
 * in the map, so by using the map you might substantially increase your
 * bundle size.
 *
 * @public
 */ const AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
    ADMIN_ONLY_OPERATION: 'auth/admin-restricted-operation',
    ARGUMENT_ERROR: 'auth/argument-error',
    APP_NOT_AUTHORIZED: 'auth/app-not-authorized',
    APP_NOT_INSTALLED: 'auth/app-not-installed',
    CAPTCHA_CHECK_FAILED: 'auth/captcha-check-failed',
    CODE_EXPIRED: 'auth/code-expired',
    CORDOVA_NOT_READY: 'auth/cordova-not-ready',
    CORS_UNSUPPORTED: 'auth/cors-unsupported',
    CREDENTIAL_ALREADY_IN_USE: 'auth/credential-already-in-use',
    CREDENTIAL_MISMATCH: 'auth/custom-token-mismatch',
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'auth/requires-recent-login',
    DEPENDENT_SDK_INIT_BEFORE_AUTH: 'auth/dependent-sdk-initialized-before-auth',
    DYNAMIC_LINK_NOT_ACTIVATED: 'auth/dynamic-link-not-activated',
    EMAIL_CHANGE_NEEDS_VERIFICATION: 'auth/email-change-needs-verification',
    EMAIL_EXISTS: 'auth/email-already-in-use',
    EMULATOR_CONFIG_FAILED: 'auth/emulator-config-failed',
    EXPIRED_OOB_CODE: 'auth/expired-action-code',
    EXPIRED_POPUP_REQUEST: 'auth/cancelled-popup-request',
    INTERNAL_ERROR: 'auth/internal-error',
    INVALID_API_KEY: 'auth/invalid-api-key',
    INVALID_APP_CREDENTIAL: 'auth/invalid-app-credential',
    INVALID_APP_ID: 'auth/invalid-app-id',
    INVALID_AUTH: 'auth/invalid-user-token',
    INVALID_AUTH_EVENT: 'auth/invalid-auth-event',
    INVALID_CERT_HASH: 'auth/invalid-cert-hash',
    INVALID_CODE: 'auth/invalid-verification-code',
    INVALID_CONTINUE_URI: 'auth/invalid-continue-uri',
    INVALID_CORDOVA_CONFIGURATION: 'auth/invalid-cordova-configuration',
    INVALID_CUSTOM_TOKEN: 'auth/invalid-custom-token',
    INVALID_DYNAMIC_LINK_DOMAIN: 'auth/invalid-dynamic-link-domain',
    INVALID_EMAIL: 'auth/invalid-email',
    INVALID_EMULATOR_SCHEME: 'auth/invalid-emulator-scheme',
    INVALID_IDP_RESPONSE: 'auth/invalid-credential',
    INVALID_MESSAGE_PAYLOAD: 'auth/invalid-message-payload',
    INVALID_MFA_SESSION: 'auth/invalid-multi-factor-session',
    INVALID_OAUTH_CLIENT_ID: 'auth/invalid-oauth-client-id',
    INVALID_OAUTH_PROVIDER: 'auth/invalid-oauth-provider',
    INVALID_OOB_CODE: 'auth/invalid-action-code',
    INVALID_ORIGIN: 'auth/unauthorized-domain',
    INVALID_PASSWORD: 'auth/wrong-password',
    INVALID_PERSISTENCE: 'auth/invalid-persistence-type',
    INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
    INVALID_PROVIDER_ID: 'auth/invalid-provider-id',
    INVALID_RECIPIENT_EMAIL: 'auth/invalid-recipient-email',
    INVALID_SENDER: 'auth/invalid-sender',
    INVALID_SESSION_INFO: 'auth/invalid-verification-id',
    INVALID_TENANT_ID: 'auth/invalid-tenant-id',
    MFA_INFO_NOT_FOUND: 'auth/multi-factor-info-not-found',
    MFA_REQUIRED: 'auth/multi-factor-auth-required',
    MISSING_ANDROID_PACKAGE_NAME: 'auth/missing-android-pkg-name',
    MISSING_APP_CREDENTIAL: 'auth/missing-app-credential',
    MISSING_AUTH_DOMAIN: 'auth/auth-domain-config-required',
    MISSING_CODE: 'auth/missing-verification-code',
    MISSING_CONTINUE_URI: 'auth/missing-continue-uri',
    MISSING_IFRAME_START: 'auth/missing-iframe-start',
    MISSING_IOS_BUNDLE_ID: 'auth/missing-ios-bundle-id',
    MISSING_OR_INVALID_NONCE: 'auth/missing-or-invalid-nonce',
    MISSING_MFA_INFO: 'auth/missing-multi-factor-info',
    MISSING_MFA_SESSION: 'auth/missing-multi-factor-session',
    MISSING_PHONE_NUMBER: 'auth/missing-phone-number',
    MISSING_SESSION_INFO: 'auth/missing-verification-id',
    MODULE_DESTROYED: 'auth/app-deleted',
    NEED_CONFIRMATION: 'auth/account-exists-with-different-credential',
    NETWORK_REQUEST_FAILED: 'auth/network-request-failed',
    NULL_USER: 'auth/null-user',
    NO_AUTH_EVENT: 'auth/no-auth-event',
    NO_SUCH_PROVIDER: 'auth/no-such-provider',
    OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
    OPERATION_NOT_SUPPORTED: 'auth/operation-not-supported-in-this-environment',
    POPUP_BLOCKED: 'auth/popup-blocked',
    POPUP_CLOSED_BY_USER: 'auth/popup-closed-by-user',
    PROVIDER_ALREADY_LINKED: 'auth/provider-already-linked',
    QUOTA_EXCEEDED: 'auth/quota-exceeded',
    REDIRECT_CANCELLED_BY_USER: 'auth/redirect-cancelled-by-user',
    REDIRECT_OPERATION_PENDING: 'auth/redirect-operation-pending',
    REJECTED_CREDENTIAL: 'auth/rejected-credential',
    SECOND_FACTOR_ALREADY_ENROLLED: 'auth/second-factor-already-in-use',
    SECOND_FACTOR_LIMIT_EXCEEDED: 'auth/maximum-second-factor-count-exceeded',
    TENANT_ID_MISMATCH: 'auth/tenant-id-mismatch',
    TIMEOUT: 'auth/timeout',
    TOKEN_EXPIRED: 'auth/user-token-expired',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'auth/too-many-requests',
    UNAUTHORIZED_DOMAIN: 'auth/unauthorized-continue-uri',
    UNSUPPORTED_FIRST_FACTOR: 'auth/unsupported-first-factor',
    UNSUPPORTED_PERSISTENCE: 'auth/unsupported-persistence-type',
    UNSUPPORTED_TENANT_OPERATION: 'auth/unsupported-tenant-operation',
    UNVERIFIED_EMAIL: 'auth/unverified-email',
    USER_CANCELLED: 'auth/user-cancelled',
    USER_DELETED: 'auth/user-not-found',
    USER_DISABLED: 'auth/user-disabled',
    USER_MISMATCH: 'auth/user-mismatch',
    USER_SIGNED_OUT: 'auth/user-signed-out',
    WEAK_PASSWORD: 'auth/weak-password',
    WEB_STORAGE_UNSUPPORTED: 'auth/web-storage-unsupported',
    ALREADY_INITIALIZED: 'auth/already-initialized'
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logClient = new _logger.Logger('@firebase/auth');
function _logError(msg, ...args) {
    if (logClient.logLevel <= _logger.LogLevel.ERROR) logClient.error(`Auth (${_app.SDK_VERSION}): ${msg}`, ...args);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _fail(authOrCode, ...rest) {
    throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
    return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
    const errorMap = Object.assign(Object.assign({
    }, prodErrorMap()), {
        [code]: message
    });
    const factory = new _util.ErrorFactory('auth', 'Firebase', errorMap);
    return factory.create(code, {
        appName: auth.name
    });
}
function _assertInstanceOf(auth, object, instance) {
    const constructorInstance = instance;
    if (!(object instanceof constructorInstance)) {
        if (constructorInstance.name !== object.constructor.name) _fail(auth, "argument-error" /* ARGUMENT_ERROR */ );
        throw _errorWithCustomMessage(auth, "argument-error" /* ARGUMENT_ERROR */ , `Type of ${object.constructor.name} does not match expected instance.` + `Did you pass a reference from a different Auth SDK?`);
    }
}
function createErrorInternal(authOrCode, ...rest) {
    if (typeof authOrCode !== 'string') {
        const code = rest[0];
        const fullParams = [
            ...rest.slice(1)
        ];
        if (fullParams[0]) fullParams[0].appName = authOrCode.name;
        return authOrCode._errorFactory.create(code, ...fullParams);
    }
    return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
    if (!assertion) throw createErrorInternal(authOrCode, ...rest);
}
/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */ function debugFail(failure) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const message = `INTERNAL ASSERTION FAILED: ` + failure;
    _logError(message);
    // NOTE: We don't use FirebaseError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw new Error(message);
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * @param assertion
 * @param message
 */ function debugAssert(assertion, message) {
    if (!assertion) debugFail(message);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const instanceCache = new Map();
function _getInstance(cls) {
    debugAssert(cls instanceof Function, 'Expected a class definition');
    let instance = instanceCache.get(cls);
    if (instance) {
        debugAssert(instance instanceof cls, 'Instance stored in cache mismatched with class');
        return instance;
    }
    instance = new cls();
    instanceCache.set(cls, instance);
    return instance;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function initializeAuth(app, deps) {
    const provider = _app._getProvider(app, 'auth');
    if (provider.isInitialized()) {
        const auth = provider.getImmediate();
        const initialOptions = provider.getOptions();
        if (_util.deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {
        })) return auth;
        else _fail(auth, "already-initialized" /* ALREADY_INITIALIZED */ );
    }
    const auth = provider.initialize({
        options: deps
    });
    return auth;
}
function _initializeAuthInstance(auth, deps) {
    const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
    const hierarchy = (Array.isArray(persistence) ? persistence : [
        persistence
    ]).map(_getInstance);
    if (deps === null || deps === void 0 ? void 0 : deps.errorMap) auth._updateErrorMap(deps.errorMap);
    // This promise is intended to float; auth initialization happens in the
    // background, meanwhile the auth object may be used by the app.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _getCurrentUrl() {
    var _a;
    return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || '';
}
function _isHttpOrHttps() {
    return _getCurrentScheme() === 'http:' || _getCurrentScheme() === 'https:';
}
function _getCurrentScheme() {
    var _a;
    return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine whether the browser is working online
 */ function _isOnline() {
    if (typeof navigator !== 'undefined' && navigator && 'onLine' in navigator && typeof navigator.onLine === 'boolean' && (_isHttpOrHttps() || _util.isBrowserExtension() || 'connection' in navigator)) return navigator.onLine;
    // If we can't determine the state, assume it is online.
    return true;
}
function _getUserLanguage() {
    if (typeof navigator === 'undefined') return null;
    const navigatorLanguage = navigator;
    return(// Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language || // Couldn't determine language.
    null);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class Delay {
    constructor(shortDelay, longDelay){
        this.shortDelay = shortDelay;
        this.longDelay = longDelay;
        // Internal error when improperly initialized.
        debugAssert(longDelay > shortDelay, 'Short delay should be less than long delay!');
        this.isMobile = _util.isMobileCordova() || _util.isReactNative();
    }
    get() {
        if (!_isOnline()) // Pick the shorter timeout.
        return Math.min(5000 /* OFFLINE */ , this.shortDelay);
        // If running in a mobile environment, return the long delay, otherwise
        // return the short delay.
        // This could be improved in the future to dynamically change based on other
        // variables instead of just reading the current environment.
        return this.isMobile ? this.longDelay : this.shortDelay;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _emulatorUrl(config, path) {
    debugAssert(config.emulator, 'Emulator should always be set here');
    const { url  } = config.emulator;
    if (!path) return url;
    return `${url}${path.startsWith('/') ? path.slice(1) : path}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FetchProvider {
    static initialize(fetchImpl, headersImpl, responseImpl) {
        this.fetchImpl = fetchImpl;
        if (headersImpl) this.headersImpl = headersImpl;
        if (responseImpl) this.responseImpl = responseImpl;
    }
    static fetch() {
        if (this.fetchImpl) return this.fetchImpl;
        if (typeof self !== 'undefined' && 'fetch' in self) return self.fetch;
        debugFail('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
    }
    static headers() {
        if (this.headersImpl) return this.headersImpl;
        if (typeof self !== 'undefined' && 'Headers' in self) return self.Headers;
        debugFail('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
    }
    static response() {
        if (this.responseImpl) return this.responseImpl;
        if (typeof self !== 'undefined' && 'Response' in self) return self.Response;
        debugFail('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ const SERVER_ERROR_MAP = {
    // Custom token errors.
    ["CREDENTIAL_MISMATCH" /* CREDENTIAL_MISMATCH */ ]: "custom-token-mismatch" /* CREDENTIAL_MISMATCH */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_CUSTOM_TOKEN" /* MISSING_CUSTOM_TOKEN */ ]: "internal-error" /* INTERNAL_ERROR */ ,
    // Create Auth URI errors.
    ["INVALID_IDENTIFIER" /* INVALID_IDENTIFIER */ ]: "invalid-email" /* INVALID_EMAIL */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_CONTINUE_URI" /* MISSING_CONTINUE_URI */ ]: "internal-error" /* INTERNAL_ERROR */ ,
    // Sign in with email and password errors (some apply to sign up too).
    ["INVALID_PASSWORD" /* INVALID_PASSWORD */ ]: "wrong-password" /* INVALID_PASSWORD */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_PASSWORD" /* MISSING_PASSWORD */ ]: "internal-error" /* INTERNAL_ERROR */ ,
    // Sign up with email and password errors.
    ["EMAIL_EXISTS" /* EMAIL_EXISTS */ ]: "email-already-in-use" /* EMAIL_EXISTS */ ,
    ["PASSWORD_LOGIN_DISABLED" /* PASSWORD_LOGIN_DISABLED */ ]: "operation-not-allowed" /* OPERATION_NOT_ALLOWED */ ,
    // Verify assertion for sign in with credential errors:
    ["INVALID_IDP_RESPONSE" /* INVALID_IDP_RESPONSE */ ]: "invalid-credential" /* INVALID_IDP_RESPONSE */ ,
    ["INVALID_PENDING_TOKEN" /* INVALID_PENDING_TOKEN */ ]: "invalid-credential" /* INVALID_IDP_RESPONSE */ ,
    ["FEDERATED_USER_ID_ALREADY_LINKED" /* FEDERATED_USER_ID_ALREADY_LINKED */ ]: "credential-already-in-use" /* CREDENTIAL_ALREADY_IN_USE */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_REQ_TYPE" /* MISSING_REQ_TYPE */ ]: "internal-error" /* INTERNAL_ERROR */ ,
    // Send Password reset email errors:
    ["EMAIL_NOT_FOUND" /* EMAIL_NOT_FOUND */ ]: "user-not-found" /* USER_DELETED */ ,
    ["RESET_PASSWORD_EXCEED_LIMIT" /* RESET_PASSWORD_EXCEED_LIMIT */ ]: "too-many-requests" /* TOO_MANY_ATTEMPTS_TRY_LATER */ ,
    ["EXPIRED_OOB_CODE" /* EXPIRED_OOB_CODE */ ]: "expired-action-code" /* EXPIRED_OOB_CODE */ ,
    ["INVALID_OOB_CODE" /* INVALID_OOB_CODE */ ]: "invalid-action-code" /* INVALID_OOB_CODE */ ,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_OOB_CODE" /* MISSING_OOB_CODE */ ]: "internal-error" /* INTERNAL_ERROR */ ,
    // Operations that require ID token in request:
    ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN" /* CREDENTIAL_TOO_OLD_LOGIN_AGAIN */ ]: "requires-recent-login" /* CREDENTIAL_TOO_OLD_LOGIN_AGAIN */ ,
    ["INVALID_ID_TOKEN" /* INVALID_ID_TOKEN */ ]: "invalid-user-token" /* INVALID_AUTH */ ,
    ["TOKEN_EXPIRED" /* TOKEN_EXPIRED */ ]: "user-token-expired" /* TOKEN_EXPIRED */ ,
    ["USER_NOT_FOUND" /* USER_NOT_FOUND */ ]: "user-token-expired" /* TOKEN_EXPIRED */ ,
    // Other errors.
    ["TOO_MANY_ATTEMPTS_TRY_LATER" /* TOO_MANY_ATTEMPTS_TRY_LATER */ ]: "too-many-requests" /* TOO_MANY_ATTEMPTS_TRY_LATER */ ,
    // Phone Auth related errors.
    ["INVALID_CODE" /* INVALID_CODE */ ]: "invalid-verification-code" /* INVALID_CODE */ ,
    ["INVALID_SESSION_INFO" /* INVALID_SESSION_INFO */ ]: "invalid-verification-id" /* INVALID_SESSION_INFO */ ,
    ["INVALID_TEMPORARY_PROOF" /* INVALID_TEMPORARY_PROOF */ ]: "invalid-credential" /* INVALID_IDP_RESPONSE */ ,
    ["MISSING_SESSION_INFO" /* MISSING_SESSION_INFO */ ]: "missing-verification-id" /* MISSING_SESSION_INFO */ ,
    ["SESSION_EXPIRED" /* SESSION_EXPIRED */ ]: "code-expired" /* CODE_EXPIRED */ ,
    // Other action code errors when additional settings passed.
    // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
    // This is OK as this error will be caught by client side validation.
    ["MISSING_ANDROID_PACKAGE_NAME" /* MISSING_ANDROID_PACKAGE_NAME */ ]: "missing-android-pkg-name" /* MISSING_ANDROID_PACKAGE_NAME */ ,
    ["UNAUTHORIZED_DOMAIN" /* UNAUTHORIZED_DOMAIN */ ]: "unauthorized-continue-uri" /* UNAUTHORIZED_DOMAIN */ ,
    // getProjectConfig errors when clientId is passed.
    ["INVALID_OAUTH_CLIENT_ID" /* INVALID_OAUTH_CLIENT_ID */ ]: "invalid-oauth-client-id" /* INVALID_OAUTH_CLIENT_ID */ ,
    // User actions (sign-up or deletion) disabled errors.
    ["ADMIN_ONLY_OPERATION" /* ADMIN_ONLY_OPERATION */ ]: "admin-restricted-operation" /* ADMIN_ONLY_OPERATION */ ,
    // Multi factor related errors.
    ["INVALID_MFA_PENDING_CREDENTIAL" /* INVALID_MFA_PENDING_CREDENTIAL */ ]: "invalid-multi-factor-session" /* INVALID_MFA_SESSION */ ,
    ["MFA_ENROLLMENT_NOT_FOUND" /* MFA_ENROLLMENT_NOT_FOUND */ ]: "multi-factor-info-not-found" /* MFA_INFO_NOT_FOUND */ ,
    ["MISSING_MFA_ENROLLMENT_ID" /* MISSING_MFA_ENROLLMENT_ID */ ]: "missing-multi-factor-info" /* MISSING_MFA_INFO */ ,
    ["MISSING_MFA_PENDING_CREDENTIAL" /* MISSING_MFA_PENDING_CREDENTIAL */ ]: "missing-multi-factor-session" /* MISSING_MFA_SESSION */ ,
    ["SECOND_FACTOR_EXISTS" /* SECOND_FACTOR_EXISTS */ ]: "second-factor-already-in-use" /* SECOND_FACTOR_ALREADY_ENROLLED */ ,
    ["SECOND_FACTOR_LIMIT_EXCEEDED" /* SECOND_FACTOR_LIMIT_EXCEEDED */ ]: "maximum-second-factor-count-exceeded" /* SECOND_FACTOR_LIMIT_EXCEEDED */ ,
    // Blocking functions related errors.
    ["BLOCKING_FUNCTION_ERROR_RESPONSE" /* BLOCKING_FUNCTION_ERROR_RESPONSE */ ]: "internal-error" /* INTERNAL_ERROR */ 
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_API_TIMEOUT_MS = new Delay(30000, 60000);
function _addTidIfNecessary(auth, request) {
    if (auth.tenantId && !request.tenantId) return Object.assign(Object.assign({
    }, request), {
        tenantId: auth.tenantId
    });
    return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {
}) {
    return _performFetchWithErrorHandling(auth, customErrorMap, async ()=>{
        let body = {
        };
        let params = {
        };
        if (request) {
            if (method === "GET" /* GET */ ) params = request;
            else body = {
                body: JSON.stringify(request)
            };
        }
        const query = _util.querystring(Object.assign({
            key: auth.config.apiKey
        }, params)).slice(1);
        const headers = await auth._getAdditionalHeaders();
        headers["Content-Type" /* CONTENT_TYPE */ ] = 'application/json';
        if (auth.languageCode) headers["X-Firebase-Locale" /* X_FIREBASE_LOCALE */ ] = auth.languageCode;
        return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
            method,
            headers,
            referrerPolicy: 'no-referrer'
        }, body));
    });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
    auth._canInitEmulator = false;
    const errorMap = Object.assign(Object.assign({
    }, SERVER_ERROR_MAP), customErrorMap);
    try {
        const networkTimeout = new NetworkTimeout(auth);
        const response = await Promise.race([
            fetchFn(),
            networkTimeout.promise
        ]);
        // If we've reached this point, the fetch succeeded and the networkTimeout
        // didn't throw; clear the network timeout delay so that Node won't hang
        networkTimeout.clearNetworkTimeout();
        const json = await response.json();
        if ('needConfirmation' in json) throw _makeTaggedError(auth, "account-exists-with-different-credential" /* NEED_CONFIRMATION */ , json);
        if (response.ok && !('errorMessage' in json)) return json;
        else {
            const errorMessage = response.ok ? json.errorMessage : json.error.message;
            const [serverErrorCode, serverErrorMessage] = errorMessage.split(' : ');
            if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED" /* FEDERATED_USER_ID_ALREADY_LINKED */ ) throw _makeTaggedError(auth, "credential-already-in-use" /* CREDENTIAL_ALREADY_IN_USE */ , json);
            else if (serverErrorCode === "EMAIL_EXISTS" /* EMAIL_EXISTS */ ) throw _makeTaggedError(auth, "email-already-in-use" /* EMAIL_EXISTS */ , json);
            const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, '-');
            if (serverErrorMessage) throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
            else _fail(auth, authError);
        }
    } catch (e) {
        if (e instanceof _util.FirebaseError) throw e;
        _fail(auth, "network-request-failed" /* NETWORK_REQUEST_FAILED */ );
    }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {
}) {
    const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
    if ('mfaPendingCredential' in serverResponse) _fail(auth, "multi-factor-auth-required" /* MFA_REQUIRED */ , {
        _serverResponse: serverResponse
    });
    return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
    const base = `${host}${path}?${query}`;
    if (!auth.config.emulator) return `${auth.config.apiScheme}://${base}`;
    return _emulatorUrl(auth.config, base);
}
class NetworkTimeout {
    constructor(auth1){
        this.auth = auth1;
        // Node timers and browser timers are fundamentally incompatible, but we
        // don't care about the value here
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.timer = null;
        this.promise = new Promise((_, reject)=>{
            this.timer = setTimeout(()=>{
                return reject(_createError(this.auth, "timeout" /* TIMEOUT */ ));
            }, DEFAULT_API_TIMEOUT_MS.get());
        });
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer);
    }
}
function _makeTaggedError(auth, code, response) {
    const errorParams = {
        appName: auth.name
    };
    if (response.email) errorParams.email = response.email;
    if (response.phoneNumber) errorParams.phoneNumber = response.phoneNumber;
    const error = _createError(auth, code, errorParams);
    // We know customData is defined on error because errorParams is defined
    error.customData._tokenResponse = response;
    return error;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function deleteAccount(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:delete" /* DELETE_ACCOUNT */ , request);
}
async function deleteLinkedAccounts(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:update" /* SET_ACCOUNT_INFO */ , request);
}
async function getAccountInfo(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:lookup" /* GET_ACCOUNT_INFO */ , request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function utcTimestampToDateString(utcTimestamp) {
    if (!utcTimestamp) return undefined;
    try {
        // Convert to date object.
        const date = new Date(Number(utcTimestamp));
        // Test date is valid.
        if (!isNaN(date.getTime())) // Convert to UTC date string.
        return date.toUTCString();
    } catch (e) {
    // Do nothing. undefined will be returned.
    }
    return undefined;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */ function getIdToken(user, forceRefresh = false) {
    return _util.getModularInstance(user).getIdToken(forceRefresh);
}
/**
 * Returns a deserialized JSON Web Token (JWT) used to identitfy the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */ async function getIdTokenResult(user, forceRefresh = false) {
    const userInternal = _util.getModularInstance(user);
    const token = await userInternal.getIdToken(forceRefresh);
    const claims = _parseToken(token);
    _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error" /* INTERNAL_ERROR */ );
    const firebase = typeof claims.firebase === 'object' ? claims.firebase : undefined;
    const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_provider'];
    return {
        claims,
        token,
        authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
        issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
        expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
        signInProvider: signInProvider || null,
        signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_second_factor']) || null
    };
}
function secondsStringToMilliseconds(seconds) {
    return Number(seconds) * 1000;
}
function _parseToken(token) {
    const [algorithm, payload, signature] = token.split('.');
    if (algorithm === undefined || payload === undefined || signature === undefined) {
        _logError('JWT malformed, contained fewer than 3 sections');
        return null;
    }
    try {
        const decoded = _util.base64Decode(payload);
        if (!decoded) {
            _logError('Failed to decode base64 JWT payload');
            return null;
        }
        return JSON.parse(decoded);
    } catch (e) {
        _logError('Caught error parsing JWT payload as JSON', e);
        return null;
    }
}
/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */ function _tokenExpiresIn(token) {
    const parsedToken = _parseToken(token);
    _assert(parsedToken, "internal-error" /* INTERNAL_ERROR */ );
    _assert(typeof parsedToken.exp !== 'undefined', "internal-error" /* INTERNAL_ERROR */ );
    _assert(typeof parsedToken.iat !== 'undefined', "internal-error" /* INTERNAL_ERROR */ );
    return Number(parsedToken.exp) - Number(parsedToken.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
    if (bypassAuthState) return promise;
    try {
        return await promise;
    } catch (e) {
        if (e instanceof _util.FirebaseError && isUserInvalidated(e)) {
            if (user.auth.currentUser === user) await user.auth.signOut();
        }
        throw e;
    }
}
function isUserInvalidated({ code  }) {
    return code === `auth/${"user-disabled" /* USER_DISABLED */ }` || code === `auth/${"user-token-expired" /* TOKEN_EXPIRED */ }`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ProactiveRefresh {
    constructor(user1){
        this.user = user1;
        this.isRunning = false;
        // Node timers and browser timers return fundamentally different types.
        // We don't actually care what the value is but TS won't accept unknown and
        // we can't cast properly in both environments.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.timerId = null;
        this.errorBackoff = 30000 /* RETRY_BACKOFF_MIN */ ;
    }
    _start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.schedule();
    }
    _stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        if (this.timerId !== null) clearTimeout(this.timerId);
    }
    getInterval(wasError) {
        var _a;
        if (wasError) {
            const interval = this.errorBackoff;
            this.errorBackoff = Math.min(this.errorBackoff * 2, 960000 /* RETRY_BACKOFF_MAX */ );
            return interval;
        } else {
            // Reset the error backoff
            this.errorBackoff = 30000 /* RETRY_BACKOFF_MIN */ ;
            const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
            const interval = expTime - Date.now() - 300000 /* OFFSET */ ;
            return Math.max(0, interval);
        }
    }
    schedule(wasError1 = false) {
        if (!this.isRunning) // Just in case...
        return;
        const interval = this.getInterval(wasError1);
        this.timerId = setTimeout(async ()=>{
            await this.iteration();
        }, interval);
    }
    async iteration() {
        try {
            await this.user.getIdToken(true);
        } catch (e) {
            // Only retry on network errors
            if (e.code === `auth/${"network-request-failed" /* NETWORK_REQUEST_FAILED */ }`) this.schedule(/* wasError */ true);
            return;
        }
        this.schedule();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UserMetadata {
    constructor(createdAt, lastLoginAt){
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
        this._initializeTime();
    }
    _initializeTime() {
        this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
        this.creationTime = utcTimestampToDateString(this.createdAt);
    }
    _copy(metadata) {
        this.createdAt = metadata.createdAt;
        this.lastLoginAt = metadata.lastLoginAt;
        this._initializeTime();
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        };
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _reloadWithoutSaving(user) {
    var _a;
    const auth = user.auth;
    const idToken = await user.getIdToken();
    const response = await _logoutIfInvalidated(user, getAccountInfo(auth, {
        idToken
    }));
    _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error" /* INTERNAL_ERROR */ );
    const coreAccount = response.users[0];
    user._notifyReloadListener(coreAccount);
    const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
    const providerData = mergeProviderData(user.providerData, newProviderData);
    // Preserves the non-nonymous status of the stored user, even if no more
    // credentials (federated or email/password) are linked to the user. If
    // the user was previously anonymous, then use provider data to update.
    // On the other hand, if it was not anonymous before, it should never be
    // considered anonymous now.
    const oldIsAnonymous = user.isAnonymous;
    const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
    const updates = {
        uid: coreAccount.localId,
        displayName: coreAccount.displayName || null,
        photoURL: coreAccount.photoUrl || null,
        email: coreAccount.email || null,
        emailVerified: coreAccount.emailVerified || false,
        phoneNumber: coreAccount.phoneNumber || null,
        tenantId: coreAccount.tenantId || null,
        providerData,
        metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
        isAnonymous
    };
    Object.assign(user, updates);
}
/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */ async function reload(user) {
    const userInternal = _util.getModularInstance(user);
    await _reloadWithoutSaving(userInternal);
    // Even though the current user hasn't changed, update
    // current user will trigger a persistence update w/ the
    // new info.
    await userInternal.auth._persistUserIfCurrent(userInternal);
    userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
    const deduped = original.filter((o)=>!newData.some((n)=>n.providerId === o.providerId
        )
    );
    return [
        ...deduped,
        ...newData
    ];
}
function extractProviderData(providers) {
    return providers.map((_a)=>{
        var { providerId  } = _a, provider = _tslib.__rest(_a, [
            "providerId"
        ]);
        return {
            providerId,
            uid: provider.rawId || '',
            displayName: provider.displayName || null,
            email: provider.email || null,
            phoneNumber: provider.phoneNumber || null,
            photoURL: provider.photoUrl || null
        };
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function requestStsToken(auth, refreshToken) {
    const response = await _performFetchWithErrorHandling(auth, {
    }, async ()=>{
        const body = _util.querystring({
            'grant_type': 'refresh_token',
            'refresh_token': refreshToken
        }).slice(1);
        const { tokenApiHost , apiKey  } = auth.config;
        const url = _getFinalTarget(auth, tokenApiHost, "/v1/token" /* TOKEN */ , `key=${apiKey}`);
        const headers = await auth._getAdditionalHeaders();
        headers["Content-Type" /* CONTENT_TYPE */ ] = 'application/x-www-form-urlencoded';
        return FetchProvider.fetch()(url, {
            method: "POST" /* POST */ ,
            headers,
            body
        });
    });
    // The response comes back in snake_case. Convert to camel:
    return {
        accessToken: response.access_token,
        expiresIn: response.expires_in,
        refreshToken: response.refresh_token
    };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class StsTokenManager {
    constructor(){
        this.refreshToken = null;
        this.accessToken = null;
        this.expirationTime = null;
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 30000 /* TOKEN_REFRESH */ ;
    }
    updateFromServerResponse(response2) {
        _assert(response2.idToken, "internal-error" /* INTERNAL_ERROR */ );
        _assert(typeof response2.idToken !== 'undefined', "internal-error" /* INTERNAL_ERROR */ );
        _assert(typeof response2.refreshToken !== 'undefined', "internal-error" /* INTERNAL_ERROR */ );
        const expiresIn = 'expiresIn' in response2 && typeof response2.expiresIn !== 'undefined' ? Number(response2.expiresIn) : _tokenExpiresIn(response2.idToken);
        this.updateTokensAndExpiration(response2.idToken, response2.refreshToken, expiresIn);
    }
    async getToken(auth8, forceRefresh = false) {
        _assert(!this.accessToken || this.refreshToken, auth8, "user-token-expired" /* TOKEN_EXPIRED */ );
        if (!forceRefresh && this.accessToken && !this.isExpired) return this.accessToken;
        if (this.refreshToken) {
            await this.refresh(auth8, this.refreshToken);
            return this.accessToken;
        }
        return null;
    }
    clearRefreshToken() {
        this.refreshToken = null;
    }
    async refresh(auth2, oldToken) {
        const { accessToken , refreshToken , expiresIn  } = await requestStsToken(auth2, oldToken);
        this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
    }
    updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
        this.refreshToken = refreshToken || null;
        this.accessToken = accessToken || null;
        this.expirationTime = Date.now() + expiresInSec * 1000;
    }
    static fromJSON(appName1, object) {
        const { refreshToken , accessToken , expirationTime  } = object;
        const manager = new StsTokenManager();
        if (refreshToken) {
            _assert(typeof refreshToken === 'string', "internal-error" /* INTERNAL_ERROR */ , {
                appName: appName1
            });
            manager.refreshToken = refreshToken;
        }
        if (accessToken) {
            _assert(typeof accessToken === 'string', "internal-error" /* INTERNAL_ERROR */ , {
                appName: appName1
            });
            manager.accessToken = accessToken;
        }
        if (expirationTime) {
            _assert(typeof expirationTime === 'number', "internal-error" /* INTERNAL_ERROR */ , {
                appName: appName1
            });
            manager.expirationTime = expirationTime;
        }
        return manager;
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        };
    }
    _assign(stsTokenManager) {
        this.accessToken = stsTokenManager.accessToken;
        this.refreshToken = stsTokenManager.refreshToken;
        this.expirationTime = stsTokenManager.expirationTime;
    }
    _clone() {
        return Object.assign(new StsTokenManager(), this.toJSON());
    }
    _performRefresh() {
        return debugFail('not implemented');
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function assertStringOrUndefined(assertion, appName) {
    _assert(typeof assertion === 'string' || typeof assertion === 'undefined', "internal-error" /* INTERNAL_ERROR */ , {
        appName
    });
}
class UserImpl {
    constructor(_a1){
        var { uid , auth , stsTokenManager  } = _a1, opt = _tslib.__rest(_a1, [
            "uid",
            "auth",
            "stsTokenManager"
        ]);
        // For the user object, provider is always Firebase.
        this.providerId = "firebase" /* FIREBASE */ ;
        this.emailVerified = false;
        this.isAnonymous = false;
        this.tenantId = null;
        this.providerData = [];
        this.proactiveRefresh = new ProactiveRefresh(this);
        this.reloadUserInfo = null;
        this.reloadListener = null;
        this.uid = uid;
        this.auth = auth;
        this.stsTokenManager = stsTokenManager;
        this.accessToken = stsTokenManager.accessToken;
        this.displayName = opt.displayName || null;
        this.email = opt.email || null;
        this.emailVerified = opt.emailVerified || false;
        this.phoneNumber = opt.phoneNumber || null;
        this.photoURL = opt.photoURL || null;
        this.isAnonymous = opt.isAnonymous || false;
        this.tenantId = opt.tenantId || null;
        this.metadata = new UserMetadata(opt.createdAt || undefined, opt.lastLoginAt || undefined);
    }
    async getIdToken(forceRefresh1) {
        const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh1));
        _assert(accessToken, this.auth, "internal-error" /* INTERNAL_ERROR */ );
        if (this.accessToken !== accessToken) {
            this.accessToken = accessToken;
            await this.auth._persistUserIfCurrent(this);
            this.auth._notifyListenersIfCurrent(this);
        }
        return accessToken;
    }
    getIdTokenResult(forceRefresh2) {
        return getIdTokenResult(this, forceRefresh2);
    }
    reload() {
        return reload(this);
    }
    _assign(user12) {
        if (this === user12) return;
        _assert(this.uid === user12.uid, this.auth, "internal-error" /* INTERNAL_ERROR */ );
        this.displayName = user12.displayName;
        this.photoURL = user12.photoURL;
        this.email = user12.email;
        this.emailVerified = user12.emailVerified;
        this.phoneNumber = user12.phoneNumber;
        this.isAnonymous = user12.isAnonymous;
        this.tenantId = user12.tenantId;
        this.providerData = user12.providerData.map((userInfo)=>Object.assign({
            }, userInfo)
        );
        this.metadata._copy(user12.metadata);
        this.stsTokenManager._assign(user12.stsTokenManager);
    }
    _clone(auth3) {
        return new UserImpl(Object.assign(Object.assign({
        }, this), {
            auth: auth3,
            stsTokenManager: this.stsTokenManager._clone()
        }));
    }
    _onReload(callback1) {
        // There should only ever be one listener, and that is a single instance of MultiFactorUser
        _assert(!this.reloadListener, this.auth, "internal-error" /* INTERNAL_ERROR */ );
        this.reloadListener = callback1;
        if (this.reloadUserInfo) {
            this._notifyReloadListener(this.reloadUserInfo);
            this.reloadUserInfo = null;
        }
    }
    _notifyReloadListener(userInfo1) {
        if (this.reloadListener) this.reloadListener(userInfo1);
        else // If no listener is subscribed yet, save the result so it's available when they do subscribe
        this.reloadUserInfo = userInfo1;
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(response1, reload1 = false) {
        let tokensRefreshed = false;
        if (response1.idToken && response1.idToken !== this.stsTokenManager.accessToken) {
            this.stsTokenManager.updateFromServerResponse(response1);
            tokensRefreshed = true;
        }
        if (reload1) await _reloadWithoutSaving(this);
        await this.auth._persistUserIfCurrent(this);
        if (tokensRefreshed) this.auth._notifyListenersIfCurrent(this);
    }
    async delete() {
        const idToken = await this.getIdToken();
        await _logoutIfInvalidated(this, deleteAccount(this.auth, {
            idToken
        }));
        this.stsTokenManager.clearRefreshToken();
        // TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
        //       cancels pending actions...
        return this.auth.signOut();
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || undefined,
            emailVerified: this.emailVerified,
            displayName: this.displayName || undefined,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || undefined,
            phoneNumber: this.phoneNumber || undefined,
            tenantId: this.tenantId || undefined,
            providerData: this.providerData.map((userInfo)=>Object.assign({
                }, userInfo)
            ),
            stsTokenManager: this.stsTokenManager.toJSON(),
            // Redirect event ID must be maintained in case there is a pending
            // redirect event.
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        });
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || '';
    }
    static _fromJSON(auth4, object1) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const displayName = (_a = object1.displayName) !== null && _a !== void 0 ? _a : undefined;
        const email = (_b = object1.email) !== null && _b !== void 0 ? _b : undefined;
        const phoneNumber = (_c = object1.phoneNumber) !== null && _c !== void 0 ? _c : undefined;
        const photoURL = (_d = object1.photoURL) !== null && _d !== void 0 ? _d : undefined;
        const tenantId = (_e = object1.tenantId) !== null && _e !== void 0 ? _e : undefined;
        const _redirectEventId = (_f = object1._redirectEventId) !== null && _f !== void 0 ? _f : undefined;
        const createdAt = (_g = object1.createdAt) !== null && _g !== void 0 ? _g : undefined;
        const lastLoginAt = (_h = object1.lastLoginAt) !== null && _h !== void 0 ? _h : undefined;
        const { uid , emailVerified , isAnonymous , providerData , stsTokenManager: plainObjectTokenManager  } = object1;
        _assert(uid && plainObjectTokenManager, auth4, "internal-error" /* INTERNAL_ERROR */ );
        const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
        _assert(typeof uid === 'string', auth4, "internal-error" /* INTERNAL_ERROR */ );
        assertStringOrUndefined(displayName, auth4.name);
        assertStringOrUndefined(email, auth4.name);
        _assert(typeof emailVerified === 'boolean', auth4, "internal-error" /* INTERNAL_ERROR */ );
        _assert(typeof isAnonymous === 'boolean', auth4, "internal-error" /* INTERNAL_ERROR */ );
        assertStringOrUndefined(phoneNumber, auth4.name);
        assertStringOrUndefined(photoURL, auth4.name);
        assertStringOrUndefined(tenantId, auth4.name);
        assertStringOrUndefined(_redirectEventId, auth4.name);
        assertStringOrUndefined(createdAt, auth4.name);
        assertStringOrUndefined(lastLoginAt, auth4.name);
        const user = new UserImpl({
            uid,
            auth: auth4,
            email,
            emailVerified,
            displayName,
            isAnonymous,
            photoURL,
            phoneNumber,
            tenantId,
            stsTokenManager,
            createdAt,
            lastLoginAt
        });
        if (providerData && Array.isArray(providerData)) user.providerData = providerData.map((userInfo)=>Object.assign({
            }, userInfo)
        );
        if (_redirectEventId) user._redirectEventId = _redirectEventId;
        return user;
    }
    /**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */ static async _fromIdTokenResponse(auth5, idTokenResponse2, isAnonymous = false) {
        const stsTokenManager = new StsTokenManager();
        stsTokenManager.updateFromServerResponse(idTokenResponse2);
        // Initialize the Firebase Auth user.
        const user = new UserImpl({
            uid: idTokenResponse2.localId,
            auth: auth5,
            stsTokenManager,
            isAnonymous
        });
        // Updates the user info and data and resolves with a user instance.
        await _reloadWithoutSaving(user);
        return user;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class InMemoryPersistence {
    constructor(){
        this.type = "NONE" /* NONE */ ;
        this.storage = {
        };
    }
    async _isAvailable() {
        return true;
    }
    async _set(key3, value4) {
        this.storage[key3] = value4;
    }
    async _get(key1) {
        const value = this.storage[key1];
        return value === undefined ? null : value;
    }
    async _remove(key2) {
        delete this.storage[key2];
    }
    _addListener(_key, _listener) {
        // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
        return;
    }
    _removeListener(_key1, _listener1) {
        // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
        return;
    }
}
InMemoryPersistence.type = 'NONE';
/**
 * An implementation of {@link Persistence} of type 'NONE'.
 *
 * @public
 */ const inMemoryPersistence = InMemoryPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _persistenceKeyName(key, apiKey, appName) {
    return `${"firebase" /* PERSISTENCE */ }:${key}:${apiKey}:${appName}`;
}
class PersistenceUserManager {
    constructor(persistence2, auth6, userKey){
        this.persistence = persistence2;
        this.auth = auth6;
        this.userKey = userKey;
        const { config , name  } = this.auth;
        this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name);
        this.fullPersistenceKey = _persistenceKeyName("persistence" /* PERSISTENCE_USER */ , config.apiKey, name);
        this.boundEventHandler = auth6._onStorageEvent.bind(auth6);
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(user2) {
        return this.persistence._set(this.fullUserKey, user2.toJSON());
    }
    async getCurrentUser() {
        const blob = await this.persistence._get(this.fullUserKey);
        return blob ? UserImpl._fromJSON(this.auth, blob) : null;
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
    }
    async setPersistence(newPersistence) {
        if (this.persistence === newPersistence) return;
        const currentUser = await this.getCurrentUser();
        await this.removeCurrentUser();
        this.persistence = newPersistence;
        if (currentUser) return this.setCurrentUser(currentUser);
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
    }
    static async create(auth7, persistenceHierarchy, userKey1 = "authUser" /* AUTH_USER */ ) {
        if (!persistenceHierarchy.length) return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth7, userKey1);
        // Eliminate any persistences that are not available
        const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence)=>{
            if (await persistence._isAvailable()) return persistence;
            return undefined;
        }))).filter((persistence)=>persistence
        );
        // Fall back to the first persistence listed, or in memory if none available
        let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
        const key = _persistenceKeyName(userKey1, auth7.config.apiKey, auth7.name);
        // Pull out the existing user, setting the chosen persistence to that
        // persistence if the user exists.
        let userToMigrate = null;
        // Note, here we check for a user in _all_ persistences, not just the
        // ones deemed available. If we can migrate a user out of a broken
        // persistence, we will (but only if that persistence supports migration).
        for (const persistence1 of persistenceHierarchy)try {
            const blob = await persistence1._get(key);
            if (blob) {
                const user = UserImpl._fromJSON(auth7, blob); // throws for unparsable blob (wrong format)
                if (persistence1 !== selectedPersistence) userToMigrate = user;
                selectedPersistence = persistence1;
                break;
            }
        } catch (_a) {
        }
        // If we find the user in a persistence that does support migration, use
        // that migration path (of only persistences that support migration)
        const migrationHierarchy = availablePersistences.filter((p)=>p._shouldAllowMigration
        );
        // If the persistence does _not_ allow migration, just finish off here
        if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) return new PersistenceUserManager(selectedPersistence, auth7, userKey1);
        selectedPersistence = migrationHierarchy[0];
        if (userToMigrate) // This normally shouldn't throw since chosenPersistence.isAvailable() is true, but if it does
        // we'll just let it bubble to surface the error.
        await selectedPersistence._set(key, userToMigrate.toJSON());
        // Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
        // such as users getting stuck with a previous account after signing out and refreshing the tab.
        await Promise.all(persistenceHierarchy.map(async (persistence)=>{
            if (persistence !== selectedPersistence) try {
                await persistence._remove(key);
            } catch (_a) {
            }
        }));
        return new PersistenceUserManager(selectedPersistence, auth7, userKey1);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function _getBrowserName(userAgent) {
    const ua = userAgent.toLowerCase();
    if (ua.includes('opera/') || ua.includes('opr/') || ua.includes('opios/')) return "Opera" /* OPERA */ ;
    else if (_isIEMobile(ua)) // Windows phone IEMobile browser.
    return "IEMobile" /* IEMOBILE */ ;
    else if (ua.includes('msie') || ua.includes('trident/')) return "IE" /* IE */ ;
    else if (ua.includes('edge/')) return "Edge" /* EDGE */ ;
    else if (_isFirefox(ua)) return "Firefox" /* FIREFOX */ ;
    else if (ua.includes('silk/')) return "Silk" /* SILK */ ;
    else if (_isBlackBerry(ua)) // Blackberry browser.
    return "Blackberry" /* BLACKBERRY */ ;
    else if (_isWebOS(ua)) // WebOS default browser.
    return "Webos" /* WEBOS */ ;
    else if (_isSafari(ua)) return "Safari" /* SAFARI */ ;
    else if ((ua.includes('chrome/') || _isChromeIOS(ua)) && !ua.includes('edge/')) return "Chrome" /* CHROME */ ;
    else if (_isAndroid(ua)) // Android stock browser.
    return "Android" /* ANDROID */ ;
    else {
        // Most modern browsers have name/version at end of user agent string.
        const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
        const matches = userAgent.match(re);
        if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) return matches[1];
    }
    return "Other" /* OTHER */ ;
}
function _isFirefox(ua = _util.getUA()) {
    return /firefox\//i.test(ua);
}
function _isSafari(userAgent = _util.getUA()) {
    const ua = userAgent.toLowerCase();
    return ua.includes('safari/') && !ua.includes('chrome/') && !ua.includes('crios/') && !ua.includes('android');
}
function _isChromeIOS(ua = _util.getUA()) {
    return /crios\//i.test(ua);
}
function _isIEMobile(ua = _util.getUA()) {
    return /iemobile/i.test(ua);
}
function _isAndroid(ua = _util.getUA()) {
    return /android/i.test(ua);
}
function _isBlackBerry(ua = _util.getUA()) {
    return /blackberry/i.test(ua);
}
function _isWebOS(ua = _util.getUA()) {
    return /webos/i.test(ua);
}
function _isIOS(ua = _util.getUA()) {
    return /iphone|ipad|ipod/i.test(ua);
}
function _isIOS7Or8(ua = _util.getUA()) {
    return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}
function _isIOSStandalone(ua = _util.getUA()) {
    var _a;
    return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
    return _util.isIE() && document.documentMode === 10;
}
function _isMobileBrowser(ua = _util.getUA()) {
    // TODO: implement getBrowserName equivalent for OS.
    return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
    try {
        // Check that the current window is not the top window.
        // If so, return true.
        return !!(window && window !== window.top);
    } catch (e) {
        return false;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * Determine the SDK version string
 */ function _getClientVersion(clientPlatform, frameworks = []) {
    let reportedPlatform;
    switch(clientPlatform){
        case "Browser" /* BROWSER */ :
            // In a browser environment, report the browser name.
            reportedPlatform = _getBrowserName(_util.getUA());
            break;
        case "Worker" /* WORKER */ :
            // Technically a worker runs from a browser but we need to differentiate a
            // worker from a browser.
            // For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
            reportedPlatform = `${_getBrowserName(_util.getUA())}-${clientPlatform}`;
            break;
        default:
            reportedPlatform = clientPlatform;
    }
    const reportedFrameworks = frameworks.length ? frameworks.join(',') : 'FirebaseCore-web'; /* default value if no other framework is used */ 
    return `${reportedPlatform}/${"JsCore" /* CORE */ }/${_app.SDK_VERSION}/${reportedFrameworks}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AuthImpl {
    constructor(app1, config1){
        this.app = app1;
        this.config = config1;
        this.currentUser = null;
        this.emulatorConfig = null;
        this.operations = Promise.resolve();
        this.authStateSubscription = new Subscription(this);
        this.idTokenSubscription = new Subscription(this);
        this.redirectUser = null;
        this.isProactiveRefreshEnabled = false;
        // Any network calls will set this to true and prevent subsequent emulator
        // initialization
        this._canInitEmulator = true;
        this._isInitialized = false;
        this._deleted = false;
        this._initializationPromise = null;
        this._popupRedirectResolver = null;
        this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
        // Tracks the last notified UID for state change listeners to prevent
        // repeated calls to the callbacks. Undefined means it's never been
        // called, whereas null means it's been called with a signed out user
        this.lastNotifiedUid = undefined;
        this.languageCode = null;
        this.tenantId = null;
        this.settings = {
            appVerificationDisabledForTesting: false
        };
        this.frameworks = [];
        this.name = app1.name;
        this.clientVersion = config1.sdkClientVersion;
    }
    _initializeWithPersistence(persistenceHierarchy1, popupRedirectResolver) {
        if (popupRedirectResolver) this._popupRedirectResolver = _getInstance(popupRedirectResolver);
        // Have to check for app deletion throughout initialization (after each
        // promise resolution)
        this._initializationPromise = this.queue(async ()=>{
            var _a, _b;
            if (this._deleted) return;
            this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy1);
            if (this._deleted) return;
            // Initialize the resolver early if necessary (only applicable to web:
            // this will cause the iframe to load immediately in certain cases)
            if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) // If this fails, don't halt auth loading
            try {
                await this._popupRedirectResolver._initialize(this);
            } catch (e) {
            }
            await this.initializeCurrentUser(popupRedirectResolver);
            this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
            if (this._deleted) return;
            this._isInitialized = true;
        });
        return this._initializationPromise;
    }
    /**
     * If the persistence is changed in another window, the user manager will let us know
     */ async _onStorageEvent() {
        if (this._deleted) return;
        const user = await this.assertedPersistence.getCurrentUser();
        if (!this.currentUser && !user) // No change, do nothing (was signed out and remained signed out).
        return;
        // If the same user is to be synchronized.
        if (this.currentUser && user && this.currentUser.uid === user.uid) {
            // Data update, simply copy data changes.
            this._currentUser._assign(user);
            // If tokens changed from previous user tokens, this will trigger
            // notifyAuthListeners_.
            await this.currentUser.getIdToken();
            return;
        }
        // Update current Auth state. Either a new login or logout.
        await this._updateCurrentUser(user);
    }
    async initializeCurrentUser(popupRedirectResolver1) {
        var _a;
        // First check to see if we have a pending redirect event.
        let storedUser = await this.assertedPersistence.getCurrentUser();
        if (popupRedirectResolver1 && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
            const storedUserEventId = storedUser === null || storedUser === void 0 ? void 0 : storedUser._redirectEventId;
            const result = await this.tryRedirectSignIn(popupRedirectResolver1);
            // If the stored user (i.e. the old "currentUser") has a redirectId that
            // matches the redirect user, then we want to initially sign in with the
            // new user object from result.
            // TODO(samgho): More thoroughly test all of this
            if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) storedUser = result.user;
        }
        // If no user in persistence, there is no current user. Set to null.
        if (!storedUser) return this.directlySetCurrentUser(null);
        if (!storedUser._redirectEventId) // This isn't a redirect user, we can reload and bail
        // This will also catch the redirected user, if available, as that method
        // strips the _redirectEventId
        return this.reloadAndSetCurrentUserOrClear(storedUser);
        _assert(this._popupRedirectResolver, this, "argument-error" /* ARGUMENT_ERROR */ );
        await this.getOrInitRedirectPersistenceManager();
        // If the redirect user's event ID matches the current user's event ID,
        // DO NOT reload the current user, otherwise they'll be cleared from storage.
        // This is important for the reauthenticateWithRedirect() flow.
        if (this.redirectUser && this.redirectUser._redirectEventId === storedUser._redirectEventId) return this.directlySetCurrentUser(storedUser);
        return this.reloadAndSetCurrentUserOrClear(storedUser);
    }
    async tryRedirectSignIn(redirectResolver) {
        // The redirect user needs to be checked (and signed in if available)
        // during auth initialization. All of the normal sign in and link/reauth
        // flows call back into auth and push things onto the promise queue. We
        // need to await the result of the redirect sign in *inside the promise
        // queue*. This presents a problem: we run into deadlock. See:
        //    ┌> [Initialization] ─────┐
        //    ┌> [<other queue tasks>] │
        //    └─ [getRedirectResult] <─┘
        //    where [] are tasks on the queue and arrows denote awaits
        // Initialization will never complete because it's waiting on something
        // that's waiting for initialization to complete!
        //
        // Instead, this method calls getRedirectResult() (stored in
        // _completeRedirectFn) with an optional parameter that instructs all of
        // the underlying auth operations to skip anything that mutates auth state.
        let result = null;
        try {
            // We know this._popupRedirectResolver is set since redirectResolver
            // is passed in. The _completeRedirectFn expects the unwrapped extern.
            result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
        } catch (e) {
            // Swallow any errors here; the code can retrieve them in
            // getRedirectResult().
            await this._setRedirectUser(null);
        }
        return result;
    }
    async reloadAndSetCurrentUserOrClear(user3) {
        try {
            await _reloadWithoutSaving(user3);
        } catch (e) {
            if (e.code !== `auth/${"network-request-failed" /* NETWORK_REQUEST_FAILED */ }`) // Something's wrong with the user's token. Log them out and remove
            // them from storage
            return this.directlySetCurrentUser(null);
        }
        return this.directlySetCurrentUser(user3);
    }
    useDeviceLanguage() {
        this.languageCode = _getUserLanguage();
    }
    async _delete() {
        this._deleted = true;
    }
    async updateCurrentUser(userExtern) {
        // The public updateCurrentUser method needs to make a copy of the user,
        // and also check that the project matches
        const user = userExtern ? _util.getModularInstance(userExtern) : null;
        if (user) _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token" /* INVALID_AUTH */ );
        return this._updateCurrentUser(user && user._clone(this));
    }
    async _updateCurrentUser(user4) {
        if (this._deleted) return;
        if (user4) _assert(this.tenantId === user4.tenantId, this, "tenant-id-mismatch" /* TENANT_ID_MISMATCH */ );
        return this.queue(async ()=>{
            await this.directlySetCurrentUser(user4);
            this.notifyAuthListeners();
        });
    }
    async signOut() {
        // Clear the redirect user when signOut is called
        if (this.redirectPersistenceManager || this._popupRedirectResolver) await this._setRedirectUser(null);
        return this._updateCurrentUser(null);
    }
    setPersistence(persistence3) {
        return this.queue(async ()=>{
            await this.assertedPersistence.setPersistence(_getInstance(persistence3));
        });
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(errorMap) {
        this._errorFactory = new _util.ErrorFactory('auth', 'Firebase', errorMap());
    }
    onAuthStateChanged(nextOrObserver3, error11, completed3) {
        return this.registerStateListener(this.authStateSubscription, nextOrObserver3, error11, completed3);
    }
    onIdTokenChanged(nextOrObserver1, error1, completed1) {
        return this.registerStateListener(this.idTokenSubscription, nextOrObserver1, error1, completed1);
    }
    toJSON() {
        var _a;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
        };
    }
    async _setRedirectUser(user5, popupRedirectResolver2) {
        const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver2);
        return user5 === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user5);
    }
    async getOrInitRedirectPersistenceManager(popupRedirectResolver3) {
        if (!this.redirectPersistenceManager) {
            const resolver = popupRedirectResolver3 && _getInstance(popupRedirectResolver3) || this._popupRedirectResolver;
            _assert(resolver, this, "argument-error" /* ARGUMENT_ERROR */ );
            this.redirectPersistenceManager = await PersistenceUserManager.create(this, [
                _getInstance(resolver._redirectPersistence)
            ], "redirectUser" /* REDIRECT_USER */ );
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
        }
        return this.redirectPersistenceManager;
    }
    async _redirectUserForId(id) {
        var _a, _b;
        // Make sure we've cleared any pending persistence actions if we're not in
        // the initializer
        if (this._isInitialized) await this.queue(async ()=>{
        });
        if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) return this._currentUser;
        if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) return this.redirectUser;
        return null;
    }
    async _persistUserIfCurrent(user6) {
        if (user6 === this.currentUser) return this.queue(async ()=>this.directlySetCurrentUser(user6)
        );
    }
    /** Notifies listeners only if the user is current */ _notifyListenersIfCurrent(user7) {
        if (user7 === this.currentUser) this.notifyAuthListeners();
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = true;
        if (this.currentUser) this._currentUser._startProactiveRefresh();
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = false;
        if (this.currentUser) this._currentUser._stopProactiveRefresh();
    }
    /** Returns the current user cast as the internal type */ get _currentUser() {
        return this.currentUser;
    }
    notifyAuthListeners() {
        var _a, _b;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
        if (this.lastNotifiedUid !== currentUid) {
            this.lastNotifiedUid = currentUid;
            this.authStateSubscription.next(this.currentUser);
        }
    }
    registerStateListener(subscription, nextOrObserver2, error2, completed2) {
        if (this._deleted) return ()=>{
        };
        const cb = typeof nextOrObserver2 === 'function' ? nextOrObserver2 : nextOrObserver2.next.bind(nextOrObserver2);
        const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        _assert(promise, this, "internal-error" /* INTERNAL_ERROR */ );
        // The callback needs to be called asynchronously per the spec.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        promise.then(()=>cb(this.currentUser)
        );
        if (typeof nextOrObserver2 === 'function') return subscription.addObserver(nextOrObserver2, error2, completed2);
        else return subscription.addObserver(nextOrObserver2);
    }
    /**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */ async directlySetCurrentUser(user8) {
        if (this.currentUser && this.currentUser !== user8) {
            this._currentUser._stopProactiveRefresh();
            if (user8 && this.isProactiveRefreshEnabled) user8._startProactiveRefresh();
        }
        this.currentUser = user8;
        if (user8) await this.assertedPersistence.setCurrentUser(user8);
        else await this.assertedPersistence.removeCurrentUser();
    }
    queue(action1) {
        // In case something errors, the callback still should be called in order
        // to keep the promise chain alive
        this.operations = this.operations.then(action1, action1);
        return this.operations;
    }
    get assertedPersistence() {
        _assert(this.persistenceManager, this, "internal-error" /* INTERNAL_ERROR */ );
        return this.persistenceManager;
    }
    _logFramework(framework) {
        if (!framework || this.frameworks.includes(framework)) return;
        this.frameworks.push(framework);
        // Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
        // "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
        this.frameworks.sort();
        this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
    }
    _getFrameworks() {
        return this.frameworks;
    }
    async _getAdditionalHeaders() {
        // Additional headers on every request
        const headers = {
            ["X-Client-Version" /* X_CLIENT_VERSION */ ]: this.clientVersion
        };
        if (this.app.options.appId) headers["X-Firebase-gmpid" /* X_FIREBASE_GMPID */ ] = this.app.options.appId;
        return headers;
    }
}
/**
 * Method to be used to cast down to our private implmentation of Auth.
 * It will also handle unwrapping from the compat type if necessary
 *
 * @param auth Auth object passed in from developer
 */ function _castAuth(auth) {
    return _util.getModularInstance(auth);
}
/** Helper class to wrap subscriber logic */ class Subscription {
    constructor(auth9){
        this.auth = auth9;
        this.observer = null;
        this.addObserver = _util.createSubscribe((observer)=>this.observer = observer
        );
    }
    get next() {
        _assert(this.observer, this.auth, "internal-error" /* INTERNAL_ERROR */ );
        return this.observer.next.bind(this.observer);
    }
}
/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */ function connectAuthEmulator(auth, url, options) {
    const authInternal = _castAuth(auth);
    _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed" /* EMULATOR_CONFIG_FAILED */ );
    _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme" /* INVALID_EMULATOR_SCHEME */ );
    const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
    const protocol = extractProtocol(url);
    const { host , port  } = extractHostAndPort(url);
    const portStr = port === null ? '' : `:${port}`;
    // Always replace path with "/" (even if input url had no path at all, or had a different one).
    authInternal.config.emulator = {
        url: `${protocol}//${host}${portStr}/`
    };
    authInternal.settings.appVerificationDisabledForTesting = true;
    authInternal.emulatorConfig = Object.freeze({
        host,
        port,
        protocol: protocol.replace(':', ''),
        options: Object.freeze({
            disableWarnings
        })
    });
    if (!disableWarnings) emitEmulatorWarning();
}
function extractProtocol(url) {
    const protocolEnd = url.indexOf(':');
    return protocolEnd < 0 ? '' : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
    const protocol = extractProtocol(url);
    const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length)); // Between // and /, ? or #.
    if (!authority) return {
        host: '',
        port: null
    };
    const hostAndPort = authority[2].split('@').pop() || ''; // Strip out "username:password@".
    const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
    if (bracketedIPv6) {
        const host = bracketedIPv6[1];
        return {
            host,
            port: parsePort(hostAndPort.substr(host.length + 1))
        };
    } else {
        const [host, port] = hostAndPort.split(':');
        return {
            host,
            port: parsePort(port)
        };
    }
}
function parsePort(portStr) {
    if (!portStr) return null;
    const port = Number(portStr);
    if (isNaN(port)) return null;
    return port;
}
function emitEmulatorWarning() {
    function attachBanner() {
        const el = document.createElement('p');
        const sty = el.style;
        el.innerText = 'Running in emulator mode. Do not use with production credentials.';
        sty.position = 'fixed';
        sty.width = '100%';
        sty.backgroundColor = '#ffffff';
        sty.border = '.1em solid #000000';
        sty.color = '#b50000';
        sty.bottom = '0px';
        sty.left = '0px';
        sty.margin = '0px';
        sty.zIndex = '10000';
        sty.textAlign = 'center';
        el.classList.add('firebase-emulator-warning');
        document.body.appendChild(el);
    }
    if (typeof console !== 'undefined' && typeof console.info === 'function') console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', attachBanner);
        else attachBanner();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class AuthCredential {
    /** @internal */ constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */ providerId5, /**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */ signInMethod){
        this.providerId = providerId5;
        this.signInMethod = signInMethod;
    }
    /**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */ toJSON() {
        return debugFail('not implemented');
    }
    /** @internal */ _getIdTokenResponse(_auth) {
        return debugFail('not implemented');
    }
    /** @internal */ _linkToIdToken(_auth1, _idToken) {
        return debugFail('not implemented');
    }
    /** @internal */ _getReauthenticationResolver(_auth2) {
        return debugFail('not implemented');
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function resetPassword(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:resetPassword" /* RESET_PASSWORD */ , _addTidIfNecessary(auth, request));
}
async function updateEmailPassword(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:update" /* SET_ACCOUNT_INFO */ , request);
}
async function applyActionCode$1(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:update" /* SET_ACCOUNT_INFO */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithPassword(auth, request) {
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithPassword" /* SIGN_IN_WITH_PASSWORD */ , _addTidIfNecessary(auth, request));
}
async function sendOobCode(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:sendOobCode" /* SEND_OOB_CODE */ , _addTidIfNecessary(auth, request));
}
async function sendEmailVerification$1(auth, request) {
    return sendOobCode(auth, request);
}
async function sendPasswordResetEmail$1(auth, request) {
    return sendOobCode(auth, request);
}
async function sendSignInLinkToEmail$1(auth, request) {
    return sendOobCode(auth, request);
}
async function verifyAndChangeEmail(auth, request) {
    return sendOobCode(auth, request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithEmailLink$1(auth, request) {
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithEmailLink" /* SIGN_IN_WITH_EMAIL_LINK */ , _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithEmailLink" /* SIGN_IN_WITH_EMAIL_LINK */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class EmailAuthCredential extends AuthCredential {
    /** @internal */ constructor(/** @internal */ _email, /** @internal */ _password, signInMethod1, /** @internal */ _tenantId = null){
        super("password" /* PASSWORD */ , signInMethod1);
        this._email = _email;
        this._password = _password;
        this._tenantId = _tenantId;
    }
    /** @internal */ static _fromEmailAndPassword(email4, password2) {
        return new EmailAuthCredential(email4, password2, "password" /* EMAIL_PASSWORD */ );
    }
    /** @internal */ static _fromEmailAndCode(email1, oobCode1, tenantId = null) {
        return new EmailAuthCredential(email1, oobCode1, "emailLink" /* EMAIL_LINK */ , tenantId);
    }
    /** {@inheritdoc AuthCredential.toJSON} */ toJSON() {
        return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
        };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */ static fromJSON(json) {
        const obj = typeof json === 'string' ? JSON.parse(json) : json;
        if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
            if (obj.signInMethod === "password" /* EMAIL_PASSWORD */ ) return this._fromEmailAndPassword(obj.email, obj.password);
            else if (obj.signInMethod === "emailLink" /* EMAIL_LINK */ ) return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
        }
        return null;
    }
    /** @internal */ async _getIdTokenResponse(auth12) {
        switch(this.signInMethod){
            case "password" /* EMAIL_PASSWORD */ :
                return signInWithPassword(auth12, {
                    returnSecureToken: true,
                    email: this._email,
                    password: this._password
                });
            case "emailLink" /* EMAIL_LINK */ :
                return signInWithEmailLink$1(auth12, {
                    email: this._email,
                    oobCode: this._password
                });
            default:
                _fail(auth12, "internal-error" /* INTERNAL_ERROR */ );
        }
    }
    /** @internal */ async _linkToIdToken(auth10, idToken5) {
        switch(this.signInMethod){
            case "password" /* EMAIL_PASSWORD */ :
                return updateEmailPassword(auth10, {
                    idToken: idToken5,
                    returnSecureToken: true,
                    email: this._email,
                    password: this._password
                });
            case "emailLink" /* EMAIL_LINK */ :
                return signInWithEmailLinkForLinking(auth10, {
                    idToken: idToken5,
                    email: this._email,
                    oobCode: this._password
                });
            default:
                _fail(auth10, "internal-error" /* INTERNAL_ERROR */ );
        }
    }
    /** @internal */ _getReauthenticationResolver(auth11) {
        return this._getIdTokenResponse(auth11);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithIdp(auth, request) {
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithIdp" /* SIGN_IN_WITH_IDP */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IDP_REQUEST_URI$1 = 'http://localhost';
/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class OAuthCredential extends AuthCredential {
    constructor(){
        super(...arguments);
        this.pendingToken = null;
    }
    /** @internal */ static _fromParams(params6) {
        const cred = new OAuthCredential(params6.providerId, params6.signInMethod);
        if (params6.idToken || params6.accessToken) {
            // OAuth 2 and either ID token or access token.
            if (params6.idToken) cred.idToken = params6.idToken;
            if (params6.accessToken) cred.accessToken = params6.accessToken;
            // Add nonce if available and no pendingToken is present.
            if (params6.nonce && !params6.pendingToken) cred.nonce = params6.nonce;
            if (params6.pendingToken) cred.pendingToken = params6.pendingToken;
        } else if (params6.oauthToken && params6.oauthTokenSecret) {
            // OAuth 1 and OAuth token with token secret
            cred.accessToken = params6.oauthToken;
            cred.secret = params6.oauthTokenSecret;
        } else _fail("argument-error" /* ARGUMENT_ERROR */ );
        return cred;
    }
    /** {@inheritdoc AuthCredential.toJSON}  */ toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */ static fromJSON(json1) {
        const obj = typeof json1 === 'string' ? JSON.parse(json1) : json1;
        const { providerId , signInMethod  } = obj, rest = _tslib.__rest(obj, [
            "providerId",
            "signInMethod"
        ]);
        if (!providerId || !signInMethod) return null;
        const cred = new OAuthCredential(providerId, signInMethod);
        cred.idToken = rest.idToken || undefined;
        cred.accessToken = rest.accessToken || undefined;
        cred.secret = rest.secret;
        cred.nonce = rest.nonce;
        cred.pendingToken = rest.pendingToken || null;
        return cred;
    }
    /** @internal */ _getIdTokenResponse(auth15) {
        const request = this.buildRequest();
        return signInWithIdp(auth15, request);
    }
    /** @internal */ _linkToIdToken(auth13, idToken1) {
        const request = this.buildRequest();
        request.idToken = idToken1;
        return signInWithIdp(auth13, request);
    }
    /** @internal */ _getReauthenticationResolver(auth14) {
        const request = this.buildRequest();
        request.autoCreate = false;
        return signInWithIdp(auth14, request);
    }
    buildRequest() {
        const request = {
            requestUri: IDP_REQUEST_URI$1,
            returnSecureToken: true
        };
        if (this.pendingToken) request.pendingToken = this.pendingToken;
        else {
            const postBody = {
            };
            if (this.idToken) postBody['id_token'] = this.idToken;
            if (this.accessToken) postBody['access_token'] = this.accessToken;
            if (this.secret) postBody['oauth_token_secret'] = this.secret;
            postBody['providerId'] = this.providerId;
            if (this.nonce && !this.pendingToken) postBody['nonce'] = this.nonce;
            request.postBody = _util.querystring(postBody);
        }
        return request;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sendPhoneVerificationCode(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:sendVerificationCode" /* SEND_VERIFICATION_CODE */ , _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithPhoneNumber" /* SIGN_IN_WITH_PHONE_NUMBER */ , _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
    const response = await _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithPhoneNumber" /* SIGN_IN_WITH_PHONE_NUMBER */ , _addTidIfNecessary(auth, request));
    if (response.temporaryProof) throw _makeTaggedError(auth, "account-exists-with-different-credential" /* NEED_CONFIRMATION */ , response);
    return response;
}
const VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
    ["USER_NOT_FOUND" /* USER_NOT_FOUND */ ]: "user-not-found" /* USER_DELETED */ 
};
async function verifyPhoneNumberForExisting(auth, request) {
    const apiRequest = Object.assign(Object.assign({
    }, request), {
        operation: 'REAUTH'
    });
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithPhoneNumber" /* SIGN_IN_WITH_PHONE_NUMBER */ , _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class PhoneAuthCredential extends AuthCredential {
    constructor(params1){
        super("phone" /* PHONE */ , "phone" /* PHONE */ );
        this.params = params1;
    }
    /** @internal */ static _fromVerification(verificationId2, verificationCode) {
        return new PhoneAuthCredential({
            verificationId: verificationId2,
            verificationCode
        });
    }
    /** @internal */ static _fromTokenResponse(phoneNumber1, temporaryProof) {
        return new PhoneAuthCredential({
            phoneNumber: phoneNumber1,
            temporaryProof
        });
    }
    /** @internal */ _getIdTokenResponse(auth21) {
        return signInWithPhoneNumber$1(auth21, this._makeVerificationRequest());
    }
    /** @internal */ _linkToIdToken(auth16, idToken2) {
        return linkWithPhoneNumber$1(auth16, Object.assign({
            idToken: idToken2
        }, this._makeVerificationRequest()));
    }
    /** @internal */ _getReauthenticationResolver(auth17) {
        return verifyPhoneNumberForExisting(auth17, this._makeVerificationRequest());
    }
    /** @internal */ _makeVerificationRequest() {
        const { temporaryProof , phoneNumber , verificationId , verificationCode  } = this.params;
        if (temporaryProof && phoneNumber) return {
            temporaryProof,
            phoneNumber
        };
        return {
            sessionInfo: verificationId,
            code: verificationCode
        };
    }
    /** {@inheritdoc AuthCredential.toJSON} */ toJSON() {
        const obj = {
            providerId: this.providerId
        };
        if (this.params.phoneNumber) obj.phoneNumber = this.params.phoneNumber;
        if (this.params.temporaryProof) obj.temporaryProof = this.params.temporaryProof;
        if (this.params.verificationCode) obj.verificationCode = this.params.verificationCode;
        if (this.params.verificationId) obj.verificationId = this.params.verificationId;
        return obj;
    }
    /** Generates a phone credential based on a plain object or a JSON string. */ static fromJSON(json2) {
        if (typeof json2 === 'string') json2 = JSON.parse(json2);
        const { verificationId , verificationCode , phoneNumber , temporaryProof  } = json2;
        if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) return null;
        return new PhoneAuthCredential({
            verificationId,
            verificationCode,
            phoneNumber,
            temporaryProof
        });
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function parseMode(mode) {
    switch(mode){
        case 'recoverEmail':
            return "RECOVER_EMAIL" /* RECOVER_EMAIL */ ;
        case 'resetPassword':
            return "PASSWORD_RESET" /* PASSWORD_RESET */ ;
        case 'signIn':
            return "EMAIL_SIGNIN" /* EMAIL_SIGNIN */ ;
        case 'verifyEmail':
            return "VERIFY_EMAIL" /* VERIFY_EMAIL */ ;
        case 'verifyAndChangeEmail':
            return "VERIFY_AND_CHANGE_EMAIL" /* VERIFY_AND_CHANGE_EMAIL */ ;
        case 'revertSecondFactorAddition':
            return "REVERT_SECOND_FACTOR_ADDITION" /* REVERT_SECOND_FACTOR_ADDITION */ ;
        default:
            return null;
    }
}
/**
 * Helper to parse FDL links
 *
 * @param url
 */ function parseDeepLink(url) {
    const link = _util.querystringDecode(_util.extractQuerystring(url))['link'];
    // Double link case (automatic redirect).
    const doubleDeepLink = link ? _util.querystringDecode(_util.extractQuerystring(link))['deep_link_id'] : null;
    // iOS custom scheme links.
    const iOSDeepLink = _util.querystringDecode(_util.extractQuerystring(url))['deep_link_id'];
    const iOSDoubleDeepLink = iOSDeepLink ? _util.querystringDecode(_util.extractQuerystring(iOSDeepLink))['link'] : null;
    return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */ class ActionCodeURL {
    /**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */ constructor(actionLink){
        var _a, _b, _c, _d, _e, _f;
        const searchParams = _util.querystringDecode(_util.extractQuerystring(actionLink));
        const apiKey = (_a = searchParams["apiKey" /* API_KEY */ ]) !== null && _a !== void 0 ? _a : null;
        const code = (_b = searchParams["oobCode" /* CODE */ ]) !== null && _b !== void 0 ? _b : null;
        const operation = parseMode((_c = searchParams["mode" /* MODE */ ]) !== null && _c !== void 0 ? _c : null);
        // Validate API key, code and mode.
        _assert(apiKey && code && operation, "argument-error" /* ARGUMENT_ERROR */ );
        this.apiKey = apiKey;
        this.operation = operation;
        this.code = code;
        this.continueUrl = (_d = searchParams["continueUrl" /* CONTINUE_URL */ ]) !== null && _d !== void 0 ? _d : null;
        this.languageCode = (_e = searchParams["languageCode" /* LANGUAGE_CODE */ ]) !== null && _e !== void 0 ? _e : null;
        this.tenantId = (_f = searchParams["tenantId" /* TENANT_ID */ ]) !== null && _f !== void 0 ? _f : null;
    }
    /**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */ static parseLink(link1) {
        const actionLink = parseDeepLink(link1);
        try {
            return new ActionCodeURL(actionLink);
        } catch (_a) {
            return null;
        }
    }
}
/**
 * Parses the email action link string and returns an {@link ActionCodeURL} if
 * the link is valid, otherwise returns null.
 *
 * @public
 */ function parseActionCodeURL(link) {
    return ActionCodeURL.parseLink(link);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class EmailAuthProvider {
    constructor(){
        /**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */ this.providerId = EmailAuthProvider.PROVIDER_ID;
    }
    /**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */ static credential(email2, password1) {
        return EmailAuthCredential._fromEmailAndPassword(email2, password1);
    }
    /**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */ static credentialWithLink(email3, emailLink1) {
        const actionCodeUrl = ActionCodeURL.parseLink(emailLink1);
        _assert(actionCodeUrl, "argument-error" /* ARGUMENT_ERROR */ );
        return EmailAuthCredential._fromEmailAndCode(email3, actionCodeUrl.code, actionCodeUrl.tenantId);
    }
}
/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */ EmailAuthProvider.PROVIDER_ID = "password" /* PASSWORD */ ;
/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */ EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password" /* EMAIL_PASSWORD */ ;
/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */ EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink" /* EMAIL_LINK */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class FederatedAuthProvider {
    /**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */ constructor(providerId1){
        this.providerId = providerId1;
        /** @internal */ this.defaultLanguageCode = null;
        /** @internal */ this.customParameters = {
        };
    }
    /**
     * Set the language gode.
     *
     * @param languageCode - language code
     */ setDefaultLanguage(languageCode) {
        this.defaultLanguageCode = languageCode;
    }
    /**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */ setCustomParameters(customOAuthParameters) {
        this.customParameters = customOAuthParameters;
        return this;
    }
    /**
     * Retrieve the current list of {@link CustomParameters}.
     */ getCustomParameters() {
        return this.customParameters;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class BaseOAuthProvider extends FederatedAuthProvider {
    constructor(){
        super(...arguments);
        /** @internal */ this.scopes = [];
    }
    /**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */ addScope(scope1) {
        // If not already added, add scope to list.
        if (!this.scopes.includes(scope1)) this.scopes.push(scope1);
        return this;
    }
    /**
     * Retrieve the current list of OAuth scopes.
     */ getScopes() {
        return [
            ...this.scopes
        ];
    }
}
/**
 * Provider for generating generic {@link OAuthCredential}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new OAuthProvider('google.com');
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a OAuth Access Token for the provider.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new OAuthProvider('google.com');
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a OAuth Access Token for the provider.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class OAuthProvider extends BaseOAuthProvider {
    /**
     * Creates an {@link OAuthCredential} from a JSON string or a plain object.
     * @param json - A plain object or a JSON string
     */ static credentialFromJSON(json3) {
        const obj = typeof json3 === 'string' ? JSON.parse(json3) : json3;
        _assert('providerId' in obj && 'signInMethod' in obj, "argument-error" /* ARGUMENT_ERROR */ );
        return OAuthCredential._fromParams(obj);
    }
    /**
     * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
     *
     * @remarks
     * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
     * the raw nonce must match the nonce field in the ID token.
     *
     * @example
     * ```javascript
     * // `googleUser` from the onsuccess Google Sign In callback.
     * // Initialize a generate OAuth provider with a `google.com` providerId.
     * const provider = new OAuthProvider('google.com');
     * const credential = provider.credential({
     *   idToken: googleUser.getAuthResponse().id_token,
     * });
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param params - Either the options object containing the ID token, access token and raw nonce
     * or the ID token string.
     */ credential(params2) {
        return this._credential(Object.assign(Object.assign({
        }, params2), {
            nonce: params2.rawNonce
        }));
    }
    /** An internal credential method that accepts more permissive options */ _credential(params3) {
        _assert(params3.idToken || params3.accessToken, "argument-error" /* ARGUMENT_ERROR */ );
        // For OAuthCredential, sign in method is same as providerId.
        return OAuthCredential._fromParams(Object.assign(Object.assign({
        }, params3), {
            providerId: this.providerId,
            signInMethod: this.providerId
        }));
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential6) {
        return OAuthProvider.oauthCredentialFromTaggedObject(userCredential6);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error3) {
        return OAuthProvider.oauthCredentialFromTaggedObject(error3.customData || {
        });
    }
    static oauthCredentialFromTaggedObject({ _tokenResponse: tokenResponse  }) {
        if (!tokenResponse) return null;
        const { oauthIdToken , oauthAccessToken , oauthTokenSecret , pendingToken , nonce , providerId  } = tokenResponse;
        if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) return null;
        if (!providerId) return null;
        try {
            return new OAuthProvider(providerId)._credential({
                idToken: oauthIdToken,
                accessToken: oauthAccessToken,
                nonce,
                pendingToken
            });
        } catch (e) {
            return null;
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class FacebookAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("facebook.com" /* FACEBOOK */ );
    }
    /**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */ static credential(accessToken1) {
        return OAuthCredential._fromParams({
            providerId: FacebookAuthProvider.PROVIDER_ID,
            signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
            accessToken: accessToken1
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential1) {
        return FacebookAuthProvider.credentialFromTaggedObject(userCredential1);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error4) {
        return FacebookAuthProvider.credentialFromTaggedObject(error4.customData || {
        });
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse1  }) {
        if (!tokenResponse1 || !('oauthAccessToken' in tokenResponse1)) return null;
        if (!tokenResponse1.oauthAccessToken) return null;
        try {
            return FacebookAuthProvider.credential(tokenResponse1.oauthAccessToken);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.FACEBOOK. */ FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com" /* FACEBOOK */ ;
/** Always set to {@link ProviderId}.FACEBOOK. */ FacebookAuthProvider.PROVIDER_ID = "facebook.com" /* FACEBOOK */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class GoogleAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("google.com" /* GOOGLE */ );
        this.addScope('profile');
    }
    /**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */ static credential(idToken3, accessToken2) {
        return OAuthCredential._fromParams({
            providerId: GoogleAuthProvider.PROVIDER_ID,
            signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            idToken: idToken3,
            accessToken: accessToken2
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential2) {
        return GoogleAuthProvider.credentialFromTaggedObject(userCredential2);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error5) {
        return GoogleAuthProvider.credentialFromTaggedObject(error5.customData || {
        });
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse2  }) {
        if (!tokenResponse2) return null;
        const { oauthIdToken , oauthAccessToken  } = tokenResponse2;
        if (!oauthIdToken && !oauthAccessToken) // This could be an oauth 1 credential or a phone credential
        return null;
        try {
            return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.GOOGLE. */ GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com" /* GOOGLE */ ;
/** Always set to {@link ProviderId}.GOOGLE. */ GoogleAuthProvider.PROVIDER_ID = "google.com" /* GOOGLE */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class GithubAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("github.com" /* GITHUB */ );
    }
    /**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */ static credential(accessToken3) {
        return OAuthCredential._fromParams({
            providerId: GithubAuthProvider.PROVIDER_ID,
            signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
            accessToken: accessToken3
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential3) {
        return GithubAuthProvider.credentialFromTaggedObject(userCredential3);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error6) {
        return GithubAuthProvider.credentialFromTaggedObject(error6.customData || {
        });
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse3  }) {
        if (!tokenResponse3 || !('oauthAccessToken' in tokenResponse3)) return null;
        if (!tokenResponse3.oauthAccessToken) return null;
        try {
            return GithubAuthProvider.credential(tokenResponse3.oauthAccessToken);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.GITHUB. */ GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com" /* GITHUB */ ;
/** Always set to {@link ProviderId}.GITHUB. */ GithubAuthProvider.PROVIDER_ID = "github.com" /* GITHUB */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IDP_REQUEST_URI = 'http://localhost';
/**
 * @public
 */ class SAMLAuthCredential extends AuthCredential {
    /** @internal */ constructor(providerId2, pendingToken){
        super(providerId2, providerId2);
        this.pendingToken = pendingToken;
    }
    /** @internal */ _getIdTokenResponse(auth18) {
        const request = this.buildRequest();
        return signInWithIdp(auth18, request);
    }
    /** @internal */ _linkToIdToken(auth19, idToken4) {
        const request = this.buildRequest();
        request.idToken = idToken4;
        return signInWithIdp(auth19, request);
    }
    /** @internal */ _getReauthenticationResolver(auth20) {
        const request = this.buildRequest();
        request.autoCreate = false;
        return signInWithIdp(auth20, request);
    }
    /** {@inheritdoc AuthCredential.toJSON}  */ toJSON() {
        return {
            signInMethod: this.signInMethod,
            providerId: this.providerId,
            pendingToken: this.pendingToken
        };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */ static fromJSON(json4) {
        const obj = typeof json4 === 'string' ? JSON.parse(json4) : json4;
        const { providerId , signInMethod , pendingToken  } = obj;
        if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) return null;
        return new SAMLAuthCredential(providerId, pendingToken);
    }
    /**
     * Helper static method to avoid exposing the constructor to end users.
     *
     * @internal
     */ static _create(providerId3, pendingToken1) {
        return new SAMLAuthCredential(providerId3, pendingToken1);
    }
    buildRequest() {
        return {
            requestUri: IDP_REQUEST_URI,
            returnSecureToken: true,
            pendingToken: this.pendingToken
        };
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SAML_PROVIDER_PREFIX = 'saml.';
/**
 * An {@link AuthProvider} for SAML.
 *
 * @public
 */ class SAMLAuthProvider extends FederatedAuthProvider {
    /**
     * Constructor. The providerId must start with "saml."
     * @param providerId - SAML provider ID.
     */ constructor(providerId4){
        _assert(providerId4.startsWith(SAML_PROVIDER_PREFIX), "argument-error" /* ARGUMENT_ERROR */ );
        super(providerId4);
    }
    /**
     * Generates an {@link AuthCredential} from a {@link UserCredential} after a
     * successful SAML flow completes.
     *
     * @remarks
     *
     * For example, to get an {@link AuthCredential}, you could write the
     * following code:
     *
     * ```js
     * const userCredential = await signInWithPopup(auth, samlProvider);
     * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
     * ```
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential4) {
        return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential4);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error7) {
        return SAMLAuthProvider.samlCredentialFromTaggedObject(error7.customData || {
        });
    }
    /**
     * Creates an {@link AuthCredential} from a JSON string or a plain object.
     * @param json - A plain object or a JSON string
     */ static credentialFromJSON(json5) {
        const credential = SAMLAuthCredential.fromJSON(json5);
        _assert(credential, "argument-error" /* ARGUMENT_ERROR */ );
        return credential;
    }
    static samlCredentialFromTaggedObject({ _tokenResponse: tokenResponse4  }) {
        if (!tokenResponse4) return null;
        const { pendingToken , providerId  } = tokenResponse4;
        if (!pendingToken || !providerId) return null;
        try {
            return SAMLAuthCredential._create(providerId, pendingToken);
        } catch (e) {
            return null;
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class TwitterAuthProvider extends BaseOAuthProvider {
    constructor(){
        super("twitter.com" /* TWITTER */ );
    }
    /**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */ static credential(token1, secret) {
        return OAuthCredential._fromParams({
            providerId: TwitterAuthProvider.PROVIDER_ID,
            signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
            oauthToken: token1,
            oauthTokenSecret: secret
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential5) {
        return TwitterAuthProvider.credentialFromTaggedObject(userCredential5);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */ static credentialFromError(error8) {
        return TwitterAuthProvider.credentialFromTaggedObject(error8.customData || {
        });
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse5  }) {
        if (!tokenResponse5) return null;
        const { oauthAccessToken , oauthTokenSecret  } = tokenResponse5;
        if (!oauthAccessToken || !oauthTokenSecret) return null;
        try {
            return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
        } catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.TWITTER. */ TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com" /* TWITTER */ ;
/** Always set to {@link ProviderId}.TWITTER. */ TwitterAuthProvider.PROVIDER_ID = "twitter.com" /* TWITTER */ ;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signUp(auth, request) {
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signUp" /* SIGN_UP */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UserCredentialImpl {
    constructor(params4){
        this.user = params4.user;
        this.providerId = params4.providerId;
        this._tokenResponse = params4._tokenResponse;
        this.operationType = params4.operationType;
    }
    static async _fromIdTokenResponse(auth22, operationType4, idTokenResponse1, isAnonymous1 = false) {
        const user = await UserImpl._fromIdTokenResponse(auth22, idTokenResponse1, isAnonymous1);
        const providerId = providerIdForResponse(idTokenResponse1);
        const userCred = new UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: idTokenResponse1,
            operationType: operationType4
        });
        return userCred;
    }
    static async _forOperation(user9, operationType1, response3) {
        await user9._updateTokensIfNecessary(response3, /* reload */ true);
        const providerId = providerIdForResponse(response3);
        return new UserCredentialImpl({
            user: user9,
            providerId,
            _tokenResponse: response3,
            operationType: operationType1
        });
    }
}
function providerIdForResponse(response) {
    if (response.providerId) return response.providerId;
    if ('phoneNumber' in response) return "phone" /* PHONE */ ;
    return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Asynchronously signs in as an anonymous user.
 *
 * @remarks
 * If there is already an anonymous user signed in, that user will be returned; otherwise, a
 * new anonymous user identity will be created and returned.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */ async function signInAnonymously(auth) {
    var _a;
    const authInternal = _castAuth(auth);
    await authInternal._initializationPromise;
    if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) // If an anonymous user is already signed in, no need to sign them in again.
    return new UserCredentialImpl({
        user: authInternal.currentUser,
        providerId: null,
        operationType: "signIn" /* SIGN_IN */ 
    });
    const response = await signUp(authInternal, {
        returnSecureToken: true
    });
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn" /* SIGN_IN */ , response, true);
    await authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MultiFactorError extends _util.FirebaseError {
    constructor(auth24, error9, operationType2, user10){
        var _a;
        super(error9.code, error9.message);
        this.operationType = operationType2;
        this.user = user10;
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, MultiFactorError.prototype);
        this.customData = {
            appName: auth24.name,
            tenantId: (_a = auth24.tenantId) !== null && _a !== void 0 ? _a : undefined,
            _serverResponse: error9.customData._serverResponse,
            operationType: operationType2
        };
    }
    static _fromErrorAndOperation(auth23, error10, operationType3, user11) {
        return new MultiFactorError(auth23, error10, operationType3, user11);
    }
}
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
    const idTokenProvider = operationType === "reauthenticate" /* REAUTHENTICATE */  ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
    return idTokenProvider.catch((error)=>{
        if (error.code === `auth/${"multi-factor-auth-required" /* MFA_REQUIRED */ }`) throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
        throw error;
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Takes a set of UserInfo provider data and converts it to a set of names
 */ function providerDataAsNames(providerData) {
    return new Set(providerData.map(({ providerId  })=>providerId
    ).filter((pid)=>!!pid
    ));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unlinks a provider from a user account.
 *
 * @param user - The user.
 * @param providerId - The provider to unlink.
 *
 * @public
 */ async function unlink(user, providerId) {
    const userInternal = _util.getModularInstance(user);
    await _assertLinkedStatus(true, userInternal, providerId);
    const { providerUserInfo  } = await deleteLinkedAccounts(userInternal.auth, {
        idToken: await userInternal.getIdToken(),
        deleteProvider: [
            providerId
        ]
    });
    const providersLeft = providerDataAsNames(providerUserInfo || []);
    userInternal.providerData = userInternal.providerData.filter((pd)=>providersLeft.has(pd.providerId)
    );
    if (!providersLeft.has("phone" /* PHONE */ )) userInternal.phoneNumber = null;
    await userInternal.auth._persistUserIfCurrent(userInternal);
    return userInternal;
}
async function _link$1(user, credential, bypassAuthState = false) {
    const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user, "link" /* LINK */ , response);
}
async function _assertLinkedStatus(expected, user, provider) {
    await _reloadWithoutSaving(user);
    const providerIds = providerDataAsNames(user.providerData);
    const code = expected === false ? "provider-already-linked" /* PROVIDER_ALREADY_LINKED */  : "no-such-provider" /* NO_SUCH_PROVIDER */ ;
    _assert(providerIds.has(provider) === expected, user.auth, code);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _reauthenticate(user, credential, bypassAuthState = false) {
    const { auth  } = user;
    const operationType = "reauthenticate" /* REAUTHENTICATE */ ;
    try {
        const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
        _assert(response.idToken, auth, "internal-error" /* INTERNAL_ERROR */ );
        const parsed = _parseToken(response.idToken);
        _assert(parsed, auth, "internal-error" /* INTERNAL_ERROR */ );
        const { sub: localId  } = parsed;
        _assert(user.uid === localId, auth, "user-mismatch" /* USER_MISMATCH */ );
        return UserCredentialImpl._forOperation(user, operationType, response);
    } catch (e) {
        // Convert user deleted error into user mismatch
        if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found" /* USER_DELETED */ }`) _fail(auth, "user-mismatch" /* USER_MISMATCH */ );
        throw e;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _signInWithCredential(auth, credential, bypassAuthState = false) {
    const operationType = "signIn" /* SIGN_IN */ ;
    const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
    if (!bypassAuthState) await auth._updateCurrentUser(userCredential.user);
    return userCredential;
}
/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */ async function signInWithCredential(auth, credential) {
    return _signInWithCredential(_castAuth(auth), credential);
}
/**
 * Links the user account with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */ async function linkWithCredential(user, credential) {
    const userInternal = _util.getModularInstance(user);
    await _assertLinkedStatus(false, userInternal, credential.providerId);
    return _link$1(userInternal, credential);
}
/**
 * Re-authenticates a user using a fresh credential.
 *
 * @remarks
 * Use before operations such as {@link updatePassword} that require tokens from recent sign-in
 * attempts. This method can be used to recover from a `CREDENTIAL_TOO_OLD_LOGIN_AGAIN` error.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */ async function reauthenticateWithCredential(user, credential) {
    return _reauthenticate(_util.getModularInstance(user), credential);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function signInWithCustomToken$1(auth, request) {
    return _performSignInRequest(auth, "POST" /* POST */ , "/v1/accounts:signInWithCustomToken" /* SIGN_IN_WITH_CUSTOM_TOKEN */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Asynchronously signs in using a custom token.
 *
 * @remarks
 * Custom tokens are used to integrate Firebase Auth with existing auth systems, and must
 * be generated by an auth backend using the
 * {@link https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth#createcustomtoken | createCustomToken}
 * method in the {@link https://firebase.google.com/docs/auth/admin | Admin SDK} .
 *
 * Fails with an error if the token is invalid, expired, or not accepted by the Firebase Auth service.
 *
 * @param auth - The {@link Auth} instance.
 * @param customToken - The custom token to sign in with.
 *
 * @public
 */ async function signInWithCustomToken(auth, customToken) {
    const authInternal = _castAuth(auth);
    const response = await signInWithCustomToken$1(authInternal, {
        token: customToken,
        returnSecureToken: true
    });
    const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn" /* SIGN_IN */ , response);
    await authInternal._updateCurrentUser(cred.user);
    return cred;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MultiFactorInfoImpl {
    constructor(factorId, response5){
        this.factorId = factorId;
        this.uid = response5.mfaEnrollmentId;
        this.enrollmentTime = new Date(response5.enrolledAt).toUTCString();
        this.displayName = response5.displayName;
    }
    static _fromServerResponse(auth25, enrollment2) {
        if ('phoneInfo' in enrollment2) return PhoneMultiFactorInfo._fromServerResponse(auth25, enrollment2);
        return _fail(auth25, "internal-error" /* INTERNAL_ERROR */ );
    }
}
class PhoneMultiFactorInfo extends MultiFactorInfoImpl {
    constructor(response4){
        super("phone" /* PHONE */ , response4);
        this.phoneNumber = response4.phoneInfo;
    }
    static _fromServerResponse(_auth3, enrollment1) {
        return new PhoneMultiFactorInfo(enrollment1);
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
    var _a;
    _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri" /* INVALID_CONTINUE_URI */ );
    _assert(typeof actionCodeSettings.dynamicLinkDomain === 'undefined' || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain" /* INVALID_DYNAMIC_LINK_DOMAIN */ );
    request.continueUrl = actionCodeSettings.url;
    request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
    request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
    if (actionCodeSettings.iOS) {
        _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id" /* MISSING_IOS_BUNDLE_ID */ );
        request.iOSBundleId = actionCodeSettings.iOS.bundleId;
    }
    if (actionCodeSettings.android) {
        _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name" /* MISSING_ANDROID_PACKAGE_NAME */ );
        request.androidInstallApp = actionCodeSettings.android.installApp;
        request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
        request.androidPackageName = actionCodeSettings.android.packageName;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sends a password reset email to the given email address.
 *
 * @remarks
 * To complete the password reset, call {@link confirmPasswordReset} with the code supplied in
 * the email sent to the user, along with the new password specified by the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendPasswordResetEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain code from user.
 * await confirmPasswordReset('user@example.com', code);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
    const authModular = _util.getModularInstance(auth);
    const request = {
        requestType: "PASSWORD_RESET" /* PASSWORD_RESET */ ,
        email
    };
    if (actionCodeSettings) _setActionCodeSettingsOnRequest(authModular, request, actionCodeSettings);
    await sendPasswordResetEmail$1(authModular, request);
}
/**
 * Completes the password reset process, given a confirmation code and new password.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A confirmation code sent to the user.
 * @param newPassword - The new password.
 *
 * @public
 */ async function confirmPasswordReset(auth, oobCode, newPassword) {
    await resetPassword(_util.getModularInstance(auth), {
        oobCode,
        newPassword
    });
// Do not return the email.
}
/**
 * Applies a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */ async function applyActionCode(auth, oobCode) {
    await applyActionCode$1(_util.getModularInstance(auth), {
        oobCode
    });
}
/**
 * Checks a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @returns metadata about the code.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */ async function checkActionCode(auth, oobCode) {
    const authModular = _util.getModularInstance(auth);
    const response = await resetPassword(authModular, {
        oobCode
    });
    // Email could be empty only if the request type is EMAIL_SIGNIN or
    // VERIFY_AND_CHANGE_EMAIL.
    // New email should not be empty if the request type is
    // VERIFY_AND_CHANGE_EMAIL.
    // Multi-factor info could not be empty if the request type is
    // REVERT_SECOND_FACTOR_ADDITION.
    const operation = response.requestType;
    _assert(operation, authModular, "internal-error" /* INTERNAL_ERROR */ );
    switch(operation){
        case "EMAIL_SIGNIN" /* EMAIL_SIGNIN */ :
            break;
        case "VERIFY_AND_CHANGE_EMAIL" /* VERIFY_AND_CHANGE_EMAIL */ :
            _assert(response.newEmail, authModular, "internal-error" /* INTERNAL_ERROR */ );
            break;
        case "REVERT_SECOND_FACTOR_ADDITION" /* REVERT_SECOND_FACTOR_ADDITION */ :
            _assert(response.mfaInfo, authModular, "internal-error" /* INTERNAL_ERROR */ );
        // fall through
        default:
            _assert(response.email, authModular, "internal-error" /* INTERNAL_ERROR */ );
    }
    // The multi-factor info for revert second factor addition
    let multiFactorInfo = null;
    if (response.mfaInfo) multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
    return {
        data: {
            email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" /* VERIFY_AND_CHANGE_EMAIL */  ? response.newEmail : response.email) || null,
            previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" /* VERIFY_AND_CHANGE_EMAIL */  ? response.email : response.newEmail) || null,
            multiFactorInfo
        },
        operation
    };
}
/**
 * Checks a password reset code sent to the user by email or other out-of-band mechanism.
 *
 * @returns the user's email address if valid.
 *
 * @param auth - The {@link Auth} instance.
 * @param code - A verification code sent to the user.
 *
 * @public
 */ async function verifyPasswordResetCode(auth, code) {
    const { data  } = await checkActionCode(_util.getModularInstance(auth), code);
    // Email should always be present since a code was sent to it
    return data.email;
}
/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */ async function createUserWithEmailAndPassword(auth, email, password) {
    const authInternal = _castAuth(auth);
    const response = await signUp(authInternal, {
        returnSecureToken: true,
        email,
        password
    });
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn" /* SIGN_IN */ , response);
    await authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
}
/**
 * Asynchronously signs in using an email and password.
 *
 * @remarks
 * Fails with an error if the email address and password do not match.
 *
 * Note: The user's password is NOT the password used to access the user's email account. The
 * email address serves as a unique identifier for the user, and the password is used to access
 * the user's account in your Firebase project. See also: {@link createUserWithEmailAndPassword}.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The users email address.
 * @param password - The users password.
 *
 * @public
 */ function signInWithEmailAndPassword(auth, email, password) {
    return signInWithCredential(_util.getModularInstance(auth), EmailAuthProvider.credential(email, password));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sends a sign-in email link to the user with the specified email.
 *
 * @remarks
 * The sign-in operation has to always be completed in the app unlike other out of band email
 * actions (password reset and email verifications). This is because, at the end of the flow,
 * the user is expected to be signed in and their Auth state persisted within the app.
 *
 * To complete sign in with the email link, call {@link signInWithEmailLink} with the email
 * address and the email link supplied in the email sent to the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink('user@example.com', 'user@example.com', emailLink);
 * }
 * ```
 *
 * @param authInternal - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
    const authModular = _util.getModularInstance(auth);
    const request = {
        requestType: "EMAIL_SIGNIN" /* EMAIL_SIGNIN */ ,
        email
    };
    _assert(actionCodeSettings.handleCodeInApp, authModular, "argument-error" /* ARGUMENT_ERROR */ );
    if (actionCodeSettings) _setActionCodeSettingsOnRequest(authModular, request, actionCodeSettings);
    await sendSignInLinkToEmail$1(authModular, request);
}
/**
 * Checks if an incoming link is a sign-in with email link suitable for {@link signInWithEmailLink}.
 *
 * @param auth - The {@link Auth} instance.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */ function isSignInWithEmailLink(auth, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN" /* EMAIL_SIGNIN */ ;
}
/**
 * Asynchronously signs in using an email and sign-in email link.
 *
 * @remarks
 * If no link is passed, the link is inferred from the current URL.
 *
 * Fails with an error if the email address is invalid or OTP in email link expires.
 *
 * Note: Confirm the link is a sign-in email link before calling this method firebase.auth.Auth.isSignInWithEmailLink.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink('user@example.com', 'user@example.com', emailLink);
 * }
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */ async function signInWithEmailLink(auth, email, emailLink) {
    const authModular = _util.getModularInstance(auth);
    const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
    // Check if the tenant ID in the email link matches the tenant ID on Auth
    // instance.
    _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch" /* TENANT_ID_MISMATCH */ );
    return signInWithCredential(authModular, credential);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function createAuthUri(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:createAuthUri" /* CREATE_AUTH_URI */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Gets the list of possible sign in methods for the given email address.
 *
 * @remarks
 * This is useful to differentiate methods of sign-in for the same provider, eg.
 * {@link EmailAuthProvider} which has 2 methods of sign-in,
 * {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 *
 * @public
 */ async function fetchSignInMethodsForEmail(auth, email) {
    // createAuthUri returns an error if continue URI is not http or https.
    // For environments like Cordova, Chrome extensions, native frameworks, file
    // systems, etc, use http://localhost as continue URL.
    const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : 'http://localhost';
    const request = {
        identifier: email,
        continueUri
    };
    const { signinMethods  } = await createAuthUri(_util.getModularInstance(auth), request);
    return signinMethods || [];
}
/**
 * Sends a verification email to a user.
 *
 * @remarks
 * The verification process is completed by calling {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendEmailVerification(user, actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function sendEmailVerification(user, actionCodeSettings) {
    const userInternal = _util.getModularInstance(user);
    const idToken = await user.getIdToken();
    const request = {
        requestType: "VERIFY_EMAIL" /* VERIFY_EMAIL */ ,
        idToken
    };
    if (actionCodeSettings) _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    const { email  } = await sendEmailVerification$1(userInternal.auth, request);
    if (email !== user.email) await user.reload();
}
/**
 * Sends a verification email to a new email address.
 *
 * @remarks
 * The user's email will be updated to the new one after being verified.
 *
 * If you have a custom email action handler, you can complete the verification process by calling
 * {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await verifyBeforeUpdateEmail(user, 'newemail@example.com', actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param newEmail - The new email address to be verified before update.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */ async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
    const userInternal = _util.getModularInstance(user);
    const idToken = await user.getIdToken();
    const request = {
        requestType: "VERIFY_AND_CHANGE_EMAIL" /* VERIFY_AND_CHANGE_EMAIL */ ,
        idToken,
        newEmail
    };
    if (actionCodeSettings) _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    const { email  } = await verifyAndChangeEmail(userInternal.auth, request);
    if (email !== user.email) // If the local copy of the email on user is outdated, reload the
    // user.
    await user.reload();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function updateProfile$1(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v1/accounts:update" /* SET_ACCOUNT_INFO */ , request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Updates a user's profile data.
 *
 * @param user - The user.
 * @param profile - The profile's `displayName` and `photoURL` to update.
 *
 * @public
 */ async function updateProfile(user, { displayName , photoURL: photoUrl  }) {
    if (displayName === undefined && photoUrl === undefined) return;
    const userInternal = _util.getModularInstance(user);
    const idToken = await userInternal.getIdToken();
    const profileRequest = {
        idToken,
        displayName,
        photoUrl,
        returnSecureToken: true
    };
    const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
    userInternal.displayName = response.displayName || null;
    userInternal.photoURL = response.photoUrl || null;
    // Update the password provider as well
    const passwordProvider = userInternal.providerData.find(({ providerId  })=>providerId === "password" /* PASSWORD */ 
    );
    if (passwordProvider) {
        passwordProvider.displayName = userInternal.displayName;
        passwordProvider.photoURL = userInternal.photoURL;
    }
    await userInternal._updateTokensIfNecessary(response);
}
/**
 * Updates the user's email address.
 *
 * @remarks
 * An email will be sent to the original email address (if it was set) that allows to revoke the
 * email address change, in order to protect them from account hijacking.
 *
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newEmail - The new email address.
 *
 * @public
 */ function updateEmail(user, newEmail) {
    return updateEmailOrPassword(_util.getModularInstance(user), newEmail, null);
}
/**
 * Updates the user's password.
 *
 * @remarks
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newPassword - The new password.
 *
 * @public
 */ function updatePassword(user, newPassword) {
    return updateEmailOrPassword(_util.getModularInstance(user), null, newPassword);
}
async function updateEmailOrPassword(user, email, password) {
    const { auth  } = user;
    const idToken = await user.getIdToken();
    const request = {
        idToken,
        returnSecureToken: true
    };
    if (email) request.email = email;
    if (password) request.password = password;
    const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
    await user._updateTokensIfNecessary(response, /* reload */ true);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Parse the `AdditionalUserInfo` from the ID token response.
 *
 */ function _fromIdTokenResponse(idTokenResponse) {
    var _a, _b;
    if (!idTokenResponse) return null;
    const { providerId  } = idTokenResponse;
    const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {
    };
    const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse" /* SignupNewUser */ ;
    if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
        const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b['sign_in_provider'];
        if (signInProvider) {
            const filteredProviderId = signInProvider !== "anonymous" /* ANONYMOUS */  && signInProvider !== "custom" /* CUSTOM */  ? signInProvider : null;
            // Uses generic class in accordance with the legacy SDK.
            return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
        }
    }
    if (!providerId) return null;
    switch(providerId){
        case "facebook.com" /* FACEBOOK */ :
            return new FacebookAdditionalUserInfo(isNewUser, profile);
        case "github.com" /* GITHUB */ :
            return new GithubAdditionalUserInfo(isNewUser, profile);
        case "google.com" /* GOOGLE */ :
            return new GoogleAdditionalUserInfo(isNewUser, profile);
        case "twitter.com" /* TWITTER */ :
            return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
        case "custom" /* CUSTOM */ :
        case "anonymous" /* ANONYMOUS */ :
            return new GenericAdditionalUserInfo(isNewUser, null);
        default:
            return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
    }
}
class GenericAdditionalUserInfo {
    constructor(isNewUser, providerId, profile = {
    }){
        this.isNewUser = isNewUser;
        this.providerId = providerId;
        this.profile = profile;
    }
}
class FederatedAdditionalUserInfoWithUsername extends GenericAdditionalUserInfo {
    constructor(isNewUser1, providerId6, profile1, username){
        super(isNewUser1, providerId6, profile1);
        this.username = username;
    }
}
class FacebookAdditionalUserInfo extends GenericAdditionalUserInfo {
    constructor(isNewUser2, profile2){
        super(isNewUser2, "facebook.com" /* FACEBOOK */ , profile2);
    }
}
class GithubAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
    constructor(isNewUser3, profile3){
        super(isNewUser3, "github.com" /* GITHUB */ , profile3, typeof (profile3 === null || profile3 === void 0 ? void 0 : profile3.login) === 'string' ? profile3 === null || profile3 === void 0 ? void 0 : profile3.login : null);
    }
}
class GoogleAdditionalUserInfo extends GenericAdditionalUserInfo {
    constructor(isNewUser4, profile4){
        super(isNewUser4, "google.com" /* GOOGLE */ , profile4);
    }
}
class TwitterAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
    constructor(isNewUser5, profile5, screenName){
        super(isNewUser5, "twitter.com" /* TWITTER */ , profile5, screenName);
    }
}
/**
 * Extracts provider specific {@link AdditionalUserInfo} for the given credential.
 *
 * @param userCredential - The user credential.
 *
 * @public
 */ function getAdditionalUserInfo(userCredential) {
    const { user , _tokenResponse  } = userCredential;
    if (user.isAnonymous && !_tokenResponse) // Handle the special case where signInAnonymously() gets called twice.
    // No network call is made so there's nothing to actually fill this in
    return {
        providerId: null,
        isNewUser: false,
        profile: null
    };
    return _fromIdTokenResponse(_tokenResponse);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Non-optional auth methods.
/**
 * Changes the type of persistence on the {@link Auth} instance for the currently saved
 * `Auth` session and applies this type of persistence for future sign-in requests, including
 * sign-in with redirect requests.
 *
 * @remarks
 * This makes it easy for a user signing in to specify whether their session should be
 * remembered or not. It also makes it easier to never persist the `Auth` state for applications
 * that are shared by other users or have sensitive data.
 *
 * @example
 * ```javascript
 * setPersistence(auth, browserSessionPersistence);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param persistence - The {@link Persistence} to use.
 * @returns A `Promise` that resolves once the persistence change has completed
 *
 * @public
 */ function setPersistence(auth, persistence) {
    return _util.getModularInstance(auth).setPersistence(persistence);
}
/**
 * Adds an observer for changes to the signed-in user's ID token, which includes sign-in,
 * sign-out, and token refresh events.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - callback triggered on error.
 * @param completed - callback triggered when observer is removed.
 *
 * @public
 */ function onIdTokenChanged(auth, nextOrObserver, error, completed) {
    return _util.getModularInstance(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
/**
 * Adds an observer for changes to the user's sign-in state.
 *
 * @remarks
 * To keep the old behavior, see {@link onIdTokenChanged}.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - callback triggered on error.
 * @param completed - callback triggered when observer is removed.
 *
 * @public
 */ function onAuthStateChanged(auth, nextOrObserver, error, completed) {
    return _util.getModularInstance(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
/**
 * Sets the current language to the default device/browser preference.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */ function useDeviceLanguage(auth) {
    _util.getModularInstance(auth).useDeviceLanguage();
}
/**
 * Asynchronously sets the provided user as {@link Auth.currentUser} on the
 * {@link Auth} instance.
 *
 * @remarks
 * A new instance copy of the user provided will be made and set as currentUser.
 *
 * This will trigger {@link onAuthStateChanged} and {@link onIdTokenChanged} listeners
 * like other sign in methods.
 *
 * The operation fails with an error if the user to be updated belongs to a different Firebase
 * project.
 *
 * @param auth - The {@link Auth} instance.
 * @param user - The new {@link User}.
 *
 * @public
 */ function updateCurrentUser(auth, user) {
    return _util.getModularInstance(auth).updateCurrentUser(user);
}
/**
 * Signs out the current user.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */ function signOut(auth) {
    return _util.getModularInstance(auth).signOut();
}
/**
 * Deletes and signs out the user.
 *
 * @remarks
 * Important: this is a security-sensitive operation that requires the user to have recently
 * signed in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 *
 * @public
 */ async function deleteUser(user) {
    return _util.getModularInstance(user).delete();
}
class MultiFactorSessionImpl {
    constructor(type3, credential1){
        this.type = type3;
        this.credential = credential1;
    }
    static _fromIdtoken(idToken) {
        return new MultiFactorSessionImpl("enroll" /* ENROLL */ , idToken);
    }
    static _fromMfaPendingCredential(mfaPendingCredential) {
        return new MultiFactorSessionImpl("signin" /* SIGN_IN */ , mfaPendingCredential);
    }
    toJSON() {
        const key = this.type === "enroll" /* ENROLL */  ? 'idToken' : 'pendingCredential';
        return {
            multiFactorSession: {
                [key]: this.credential
            }
        };
    }
    static fromJSON(obj) {
        var _a, _b;
        if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
            if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
            else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
        }
        return null;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MultiFactorResolverImpl {
    constructor(session1, hints, signInResolver){
        this.session = session1;
        this.hints = hints;
        this.signInResolver = signInResolver;
    }
    /** @internal */ static _fromError(authExtern, error12) {
        const auth = _castAuth(authExtern);
        const serverResponse = error12.customData._serverResponse;
        const hints = (serverResponse.mfaInfo || []).map((enrollment)=>MultiFactorInfoImpl._fromServerResponse(auth, enrollment)
        );
        _assert(serverResponse.mfaPendingCredential, auth, "internal-error" /* INTERNAL_ERROR */ );
        const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
        return new MultiFactorResolverImpl(session, hints, async (assertion)=>{
            const mfaResponse = await assertion._process(auth, session);
            // Clear out the unneeded fields from the old login response
            delete serverResponse.mfaInfo;
            delete serverResponse.mfaPendingCredential;
            // Use in the new token & refresh token in the old response
            const idTokenResponse = Object.assign(Object.assign({
            }, serverResponse), {
                idToken: mfaResponse.idToken,
                refreshToken: mfaResponse.refreshToken
            });
            // TODO: we should collapse this switch statement into UserCredentialImpl._forOperation and have it support the SIGN_IN case
            switch(error12.operationType){
                case "signIn" /* SIGN_IN */ :
                    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error12.operationType, idTokenResponse);
                    await auth._updateCurrentUser(userCredential.user);
                    return userCredential;
                case "reauthenticate" /* REAUTHENTICATE */ :
                    _assert(error12.user, auth, "internal-error" /* INTERNAL_ERROR */ );
                    return UserCredentialImpl._forOperation(error12.user, error12.operationType, idTokenResponse);
                default:
                    _fail(auth, "internal-error" /* INTERNAL_ERROR */ );
            }
        });
    }
    async resolveSignIn(assertionExtern) {
        const assertion = assertionExtern;
        return this.signInResolver(assertion);
    }
}
/**
 * Provides a {@link MultiFactorResolver} suitable for completion of a
 * multi-factor flow.
 *
 * @param auth - The {@link Auth} instance.
 * @param error - The {@link MultiFactorError} raised during a sign-in, or
 * reauthentication operation.
 *
 * @public
 */ function getMultiFactorResolver(auth, error) {
    var _a;
    const authModular = _util.getModularInstance(auth);
    const errorInternal = error;
    _assert(error.customData.operationType, authModular, "argument-error" /* ARGUMENT_ERROR */ );
    _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error" /* ARGUMENT_ERROR */ );
    return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function startEnrollPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v2/accounts/mfaEnrollment:start" /* START_PHONE_MFA_ENROLLMENT */ , _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v2/accounts/mfaEnrollment:finalize" /* FINALIZE_PHONE_MFA_ENROLLMENT */ , _addTidIfNecessary(auth, request));
}
function withdrawMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v2/accounts/mfaEnrollment:withdraw" /* WITHDRAW_MFA */ , _addTidIfNecessary(auth, request));
}
class MultiFactorUserImpl {
    constructor(user14){
        this.user = user14;
        this.enrolledFactors = [];
        user14._onReload((userInfo)=>{
            if (userInfo.mfaInfo) this.enrolledFactors = userInfo.mfaInfo.map((enrollment)=>MultiFactorInfoImpl._fromServerResponse(user14.auth, enrollment)
            );
        });
    }
    static _fromUser(user13) {
        return new MultiFactorUserImpl(user13);
    }
    async getSession() {
        return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken());
    }
    async enroll(assertionExtern1, displayName) {
        const assertion = assertionExtern1;
        const session = await this.getSession();
        const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
        // New tokens will be issued after enrollment of the new second factors.
        // They need to be updated on the user.
        await this.user._updateTokensIfNecessary(finalizeMfaResponse);
        // The user needs to be reloaded to get the new multi-factor information
        // from server. USER_RELOADED event will be triggered and `enrolledFactors`
        // will be updated.
        return this.user.reload();
    }
    async unenroll(infoOrUid) {
        const mfaEnrollmentId = typeof infoOrUid === 'string' ? infoOrUid : infoOrUid.uid;
        const idToken = await this.user.getIdToken();
        const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
            idToken,
            mfaEnrollmentId
        }));
        // Remove the second factor from the user's list.
        this.enrolledFactors = this.enrolledFactors.filter(({ uid  })=>uid !== mfaEnrollmentId
        );
        // Depending on whether the backend decided to revoke the user's session,
        // the tokenResponse may be empty. If the tokens were not updated (and they
        // are now invalid), reloading the user will discover this and invalidate
        // the user's state accordingly.
        await this.user._updateTokensIfNecessary(idTokenResponse);
        try {
            await this.user.reload();
        } catch (e) {
            if (e.code !== `auth/${"user-token-expired" /* TOKEN_EXPIRED */ }`) throw e;
        }
    }
}
const multiFactorUserCache = new WeakMap();
/**
 * The {@link MultiFactorUser} corresponding to the user.
 *
 * @remarks
 * This is used to access all multi-factor properties and operations related to the user.
 *
 * @param user - The user.
 *
 * @public
 */ function multiFactor(user) {
    const userModular = _util.getModularInstance(user);
    if (!multiFactorUserCache.has(userModular)) multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
    return multiFactorUserCache.get(userModular);
}
const STORAGE_AVAILABLE_KEY = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class BrowserPersistenceClass {
    constructor(storageRetriever, type1){
        this.storageRetriever = storageRetriever;
        this.type = type1;
    }
    _isAvailable() {
        try {
            if (!this.storage) return Promise.resolve(false);
            this.storage.setItem(STORAGE_AVAILABLE_KEY, '1');
            this.storage.removeItem(STORAGE_AVAILABLE_KEY);
            return Promise.resolve(true);
        } catch (_a) {
            return Promise.resolve(false);
        }
    }
    _set(key8, value1) {
        this.storage.setItem(key8, JSON.stringify(value1));
        return Promise.resolve();
    }
    _get(key4) {
        const json = this.storage.getItem(key4);
        return Promise.resolve(json ? JSON.parse(json) : null);
    }
    _remove(key5) {
        this.storage.removeItem(key5);
        return Promise.resolve();
    }
    get storage() {
        return this.storageRetriever();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _iframeCannotSyncWebStorage() {
    const ua = _util.getUA();
    return _isSafari(ua) || _isIOS(ua);
}
// The polling period in case events are not supported
const _POLLING_INTERVAL_MS$1 = 1000;
// The IE 10 localStorage cross tab synchronization delay in milliseconds
const IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
class BrowserLocalPersistence extends BrowserPersistenceClass {
    constructor(){
        super(()=>window.localStorage
        , "LOCAL" /* LOCAL */ );
        this.boundEventHandler = (event, poll)=>this.onStorageEvent(event, poll)
        ;
        this.listeners = {
        };
        this.localCache = {
        };
        // setTimeout return value is platform specific
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.pollTimer = null;
        // Safari or iOS browser and embedded in an iframe.
        this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
        // Whether to use polling instead of depending on window events
        this.fallbackToPolling = _isMobileBrowser();
        this._shouldAllowMigration = true;
    }
    forAllChangedKeys(cb) {
        // Check all keys with listeners on them.
        for (const key of Object.keys(this.listeners)){
            // Get value from localStorage.
            const newValue = this.storage.getItem(key);
            const oldValue = this.localCache[key];
            // If local map value does not match, trigger listener with storage event.
            // Differentiate this simulated event from the real storage event.
            if (newValue !== oldValue) cb(key, oldValue, newValue);
        }
    }
    onStorageEvent(event2, poll = false) {
        // Key would be null in some situations, like when localStorage is cleared
        if (!event2.key) {
            this.forAllChangedKeys((key, _oldValue, newValue)=>{
                this.notifyListeners(key, newValue);
            });
            return;
        }
        const key6 = event2.key;
        // Check the mechanism how this event was detected.
        // The first event will dictate the mechanism to be used.
        if (poll) // Environment detects storage changes via polling.
        // Remove storage event listener to prevent possible event duplication.
        this.detachListener();
        else // Environment detects storage changes via storage event listener.
        // Remove polling listener to prevent possible event duplication.
        this.stopPolling();
        // Safari embedded iframe. Storage event will trigger with the delta
        // changes but no changes will be applied to the iframe localStorage.
        if (this.safariLocalStorageNotSynced) {
            // Get current iframe page value.
            const storedValue = this.storage.getItem(key6);
            // Value not synchronized, synchronize manually.
            if (event2.newValue !== storedValue) {
                if (event2.newValue !== null) // Value changed from current value.
                this.storage.setItem(key6, event2.newValue);
                else // Current value deleted.
                this.storage.removeItem(key6);
            } else if (this.localCache[key6] === event2.newValue && !poll) // Already detected and processed, do not trigger listeners again.
            return;
        }
        const triggerListeners = ()=>{
            // Keep local map up to date in case storage event is triggered before
            // poll.
            const storedValue = this.storage.getItem(key6);
            if (!poll && this.localCache[key6] === storedValue) // Real storage event which has already been detected, do nothing.
            // This seems to trigger in some IE browsers for some reason.
            return;
            this.notifyListeners(key6, storedValue);
        };
        const storedValue1 = this.storage.getItem(key6);
        if (_isIE10() && storedValue1 !== event2.newValue && event2.newValue !== event2.oldValue) // IE 10 has this weird bug where a storage event would trigger with the
        // correct key, oldValue and newValue but localStorage.getItem(key) does
        // not yield the updated value until a few milliseconds. This ensures
        // this recovers from that situation.
        setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
        else triggerListeners();
    }
    notifyListeners(key7, value2) {
        this.localCache[key7] = value2;
        const listeners = this.listeners[key7];
        if (listeners) for (const listener of Array.from(listeners))listener(value2 ? JSON.parse(value2) : value2);
    }
    startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(()=>{
            this.forAllChangedKeys((key, oldValue, newValue)=>{
                this.onStorageEvent(new StorageEvent('storage', {
                    key,
                    oldValue,
                    newValue
                }), /* poll */ true);
            });
        }, _POLLING_INTERVAL_MS$1);
    }
    stopPolling() {
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
        }
    }
    attachListener() {
        window.addEventListener('storage', this.boundEventHandler);
    }
    detachListener() {
        window.removeEventListener('storage', this.boundEventHandler);
    }
    _addListener(key13, listener4) {
        if (Object.keys(this.listeners).length === 0) {
            // Whether browser can detect storage event when it had already been pushed to the background.
            // This may happen in some mobile browsers. A localStorage change in the foreground window
            // will not be detected in the background window via the storage event.
            // This was detected in iOS 7.x mobile browsers
            if (this.fallbackToPolling) this.startPolling();
            else this.attachListener();
        }
        if (!this.listeners[key13]) {
            this.listeners[key13] = new Set();
            // Populate the cache to avoid spuriously triggering on first poll.
            this.localCache[key13] = this.storage.getItem(key13);
        }
        this.listeners[key13].add(listener4);
    }
    _removeListener(key9, listener1) {
        if (this.listeners[key9]) {
            this.listeners[key9].delete(listener1);
            if (this.listeners[key9].size === 0) delete this.listeners[key9];
        }
        if (Object.keys(this.listeners).length === 0) {
            this.detachListener();
            this.stopPolling();
        }
    }
    // Update local cache on base operations:
    async _set(key10, value3) {
        await super._set(key10, value3);
        this.localCache[key10] = JSON.stringify(value3);
    }
    async _get(key11) {
        const value = await super._get(key11);
        this.localCache[key11] = JSON.stringify(value);
        return value;
    }
    async _remove(key12) {
        await super._remove(key12);
        delete this.localCache[key12];
    }
}
BrowserLocalPersistence.type = 'LOCAL';
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `localStorage`
 * for the underlying storage.
 *
 * @public
 */ const browserLocalPersistence = BrowserLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BrowserSessionPersistence extends BrowserPersistenceClass {
    constructor(){
        super(()=>window.sessionStorage
        , "SESSION" /* SESSION */ );
    }
    _addListener(_key2, _listener2) {
        // Listeners are not supported for session storage since it cannot be shared across windows
        return;
    }
    _removeListener(_key3, _listener3) {
        // Listeners are not supported for session storage since it cannot be shared across windows
        return;
    }
}
BrowserSessionPersistence.type = 'SESSION';
/**
 * An implementation of {@link Persistence} of `SESSION` using `sessionStorage`
 * for the underlying storage.
 *
 * @public
 */ const browserSessionPersistence = BrowserSessionPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Shim for Promise.allSettled, note the slightly different format of `fulfilled` vs `status`.
 *
 * @param promises - Array of promises to wait on.
 */ function _allSettled(promises) {
    return Promise.all(promises.map(async (promise)=>{
        try {
            const value = await promise;
            return {
                fulfilled: true,
                value
            };
        } catch (reason) {
            return {
                fulfilled: false,
                reason
            };
        }
    }));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface class for receiving messages.
 *
 */ class Receiver {
    constructor(eventTarget){
        this.eventTarget = eventTarget;
        this.handlersMap = {
        };
        this.boundEventHandler = this.handleEvent.bind(this);
    }
    /**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */ static _getInstance(eventTarget1) {
        // The results are stored in an array since objects can't be keys for other
        // objects. In addition, setting a unique property on an event target as a
        // hash map key may not be allowed due to CORS restrictions.
        const existingInstance = this.receivers.find((receiver)=>receiver.isListeningto(eventTarget1)
        );
        if (existingInstance) return existingInstance;
        const newInstance = new Receiver(eventTarget1);
        this.receivers.push(newInstance);
        return newInstance;
    }
    isListeningto(eventTarget2) {
        return this.eventTarget === eventTarget2;
    }
    /**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */ async handleEvent(event1) {
        const messageEvent = event1;
        const { eventId , eventType , data  } = messageEvent.data;
        const handlers = this.handlersMap[eventType];
        if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) return;
        messageEvent.ports[0].postMessage({
            status: "ack" /* ACK */ ,
            eventId,
            eventType
        });
        const promises = Array.from(handlers).map(async (handler)=>handler(messageEvent.origin, data)
        );
        const response = await _allSettled(promises);
        messageEvent.ports[0].postMessage({
            status: "done" /* DONE */ ,
            eventId,
            eventType,
            response
        });
    }
    /**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */ _subscribe(eventType, eventHandler) {
        if (Object.keys(this.handlersMap).length === 0) this.eventTarget.addEventListener('message', this.boundEventHandler);
        if (!this.handlersMap[eventType]) this.handlersMap[eventType] = new Set();
        this.handlersMap[eventType].add(eventHandler);
    }
    /**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */ _unsubscribe(eventType1, eventHandler1) {
        if (this.handlersMap[eventType1] && eventHandler1) this.handlersMap[eventType1].delete(eventHandler1);
        if (!eventHandler1 || this.handlersMap[eventType1].size === 0) delete this.handlersMap[eventType1];
        if (Object.keys(this.handlersMap).length === 0) this.eventTarget.removeEventListener('message', this.boundEventHandler);
    }
}
Receiver.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _generateEventId(prefix = '', digits = 10) {
    let random = '';
    for(let i = 0; i < digits; i++)random += Math.floor(Math.random() * 10);
    return prefix + random;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class Sender {
    constructor(target1){
        this.target = target1;
        this.handlers = new Set();
    }
    /**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */ removeMessageHandler(handler) {
        if (handler.messageChannel) {
            handler.messageChannel.port1.removeEventListener('message', handler.onMessage);
            handler.messageChannel.port1.close();
        }
        this.handlers.delete(handler);
    }
    /**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */ async _send(eventType2, data1, timeout = 50 /* ACK */ ) {
        const messageChannel = typeof MessageChannel !== 'undefined' ? new MessageChannel() : null;
        if (!messageChannel) throw new Error("connection_unavailable" /* CONNECTION_UNAVAILABLE */ );
        // Node timers and browser timers return fundamentally different types.
        // We don't actually care what the value is but TS won't accept unknown and
        // we can't cast properly in both environments.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let completionTimer;
        let handler;
        return new Promise((resolve, reject)=>{
            const eventId = _generateEventId('', 20);
            messageChannel.port1.start();
            const ackTimer = setTimeout(()=>{
                reject(new Error("unsupported_event" /* UNSUPPORTED_EVENT */ ));
            }, timeout);
            handler = {
                messageChannel,
                onMessage (event) {
                    const messageEvent = event;
                    if (messageEvent.data.eventId !== eventId) return;
                    switch(messageEvent.data.status){
                        case "ack" /* ACK */ :
                            // The receiver should ACK first.
                            clearTimeout(ackTimer);
                            completionTimer = setTimeout(()=>{
                                reject(new Error("timeout" /* TIMEOUT */ ));
                            }, 3000 /* COMPLETION */ );
                            break;
                        case "done" /* DONE */ :
                            // Once the receiver's handlers are finished we will get the results.
                            clearTimeout(completionTimer);
                            resolve(messageEvent.data.response);
                            break;
                        default:
                            clearTimeout(ackTimer);
                            clearTimeout(completionTimer);
                            reject(new Error("invalid_response" /* INVALID_RESPONSE */ ));
                            break;
                    }
                }
            };
            this.handlers.add(handler);
            messageChannel.port1.addEventListener('message', handler.onMessage);
            this.target.postMessage({
                eventType: eventType2,
                eventId,
                data: data1
            }, [
                messageChannel.port2
            ]);
        }).finally(()=>{
            if (handler) this.removeMessageHandler(handler);
        });
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */ function _window() {
    return window;
}
function _setWindowLocation(url) {
    _window().location.href = url;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _isWorker() {
    return typeof _window()['WorkerGlobalScope'] !== 'undefined' && typeof _window()['importScripts'] === 'function';
}
async function _getActiveServiceWorker() {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) return null;
    try {
        const registration = await navigator.serviceWorker.ready;
        return registration.active;
    } catch (_a) {
        return null;
    }
}
function _getServiceWorkerController() {
    var _a;
    return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
    return _isWorker() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DB_NAME = 'firebaseLocalStorageDb';
const DB_VERSION = 1;
const DB_OBJECTSTORE_NAME = 'firebaseLocalStorage';
const DB_DATA_KEYPATH = 'fbase_key';
/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */ class DBPromise {
    constructor(request1){
        this.request = request1;
    }
    toPromise() {
        return new Promise((resolve, reject)=>{
            this.request.addEventListener('success', ()=>{
                resolve(this.request.result);
            });
            this.request.addEventListener('error', ()=>{
                reject(this.request.error);
            });
        });
    }
}
function getObjectStore(db, isReadWrite) {
    return db.transaction([
        DB_OBJECTSTORE_NAME
    ], isReadWrite ? 'readwrite' : 'readonly').objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
    const request = indexedDB.deleteDatabase(DB_NAME);
    return new DBPromise(request).toPromise();
}
function _openDatabase() {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    return new Promise((resolve, reject)=>{
        request.addEventListener('error', ()=>{
            reject(request.error);
        });
        request.addEventListener('upgradeneeded', ()=>{
            const db = request.result;
            try {
                db.createObjectStore(DB_OBJECTSTORE_NAME, {
                    keyPath: DB_DATA_KEYPATH
                });
            } catch (e) {
                reject(e);
            }
        });
        request.addEventListener('success', async ()=>{
            const db = request.result;
            // Strange bug that occurs in Firefox when multiple tabs are opened at the
            // same time. The only way to recover seems to be deleting the database
            // and re-initializing it.
            // https://github.com/firebase/firebase-js-sdk/issues/634
            if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
                // Need to close the database or else you get a `blocked` event
                db.close();
                await _deleteDatabase();
                resolve(await _openDatabase());
            } else resolve(db);
        });
    });
}
async function _putObject(db, key, value) {
    const request = getObjectStore(db, true).put({
        [DB_DATA_KEYPATH]: key,
        value
    });
    return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
    const request = getObjectStore(db, false).get(key);
    const data = await new DBPromise(request).toPromise();
    return data === undefined ? null : data.value;
}
function _deleteObject(db, key) {
    const request = getObjectStore(db, true).delete(key);
    return new DBPromise(request).toPromise();
}
const _POLLING_INTERVAL_MS = 800;
const _TRANSACTION_RETRY_COUNT = 3;
class IndexedDBLocalPersistence {
    constructor(){
        this.type = "LOCAL" /* LOCAL */ ;
        this._shouldAllowMigration = true;
        this.listeners = {
        };
        this.localCache = {
        };
        // setTimeout return value is platform specific
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.pollTimer = null;
        this.pendingWrites = 0;
        this.receiver = null;
        this.sender = null;
        this.serviceWorkerReceiverAvailable = false;
        this.activeServiceWorker = null;
        // Fire & forget the service worker registration as it may never resolve
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(()=>{
        }, ()=>{
        });
    }
    async _openDb() {
        if (this.db) return this.db;
        this.db = await _openDatabase();
        return this.db;
    }
    async _withRetries(op) {
        let numAttempts = 0;
        while(true)try {
            const db = await this._openDb();
            return await op(db);
        } catch (e) {
            if ((numAttempts++) > _TRANSACTION_RETRY_COUNT) throw e;
            if (this.db) {
                this.db.close();
                this.db = undefined;
            }
        // TODO: consider adding exponential backoff
        }
    }
    /**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */ async initializeServiceWorkerMessaging() {
        return _isWorker() ? this.initializeReceiver() : this.initializeSender();
    }
    /**
     * As the worker we should listen to events from the main window.
     */ async initializeReceiver() {
        this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
        // Refresh from persistence if we receive a KeyChanged message.
        this.receiver._subscribe("keyChanged" /* KEY_CHANGED */ , async (_origin, data)=>{
            const keys = await this._poll();
            return {
                keyProcessed: keys.includes(data.key)
            };
        });
        // Let the sender know that we are listening so they give us more timeout.
        this.receiver._subscribe("ping" /* PING */ , async (_origin, _data)=>{
            return [
                "keyChanged" /* KEY_CHANGED */ 
            ];
        });
    }
    /**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */ async initializeSender() {
        var _a, _b;
        // Check to see if there's an active service worker.
        this.activeServiceWorker = await _getActiveServiceWorker();
        if (!this.activeServiceWorker) return;
        this.sender = new Sender(this.activeServiceWorker);
        // Ping the service worker to check what events they can handle.
        const results = await this.sender._send("ping" /* PING */ , {
        }, 800 /* LONG_ACK */ );
        if (!results) return;
        if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged" /* KEY_CHANGED */ ))) this.serviceWorkerReceiverAvailable = true;
    }
    /**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */ async notifyServiceWorker(key20) {
        if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) return;
        try {
            await this.sender._send("keyChanged" /* KEY_CHANGED */ , {
                key: key20
            }, // Use long timeout if receiver has previously responded to a ping from us.
            this.serviceWorkerReceiverAvailable ? 800 /* LONG_ACK */  : 50 /* ACK */ );
        } catch (_a) {
        // This is a best effort approach. Ignore errors.
        }
    }
    async _isAvailable() {
        try {
            if (!indexedDB) return false;
            const db = await _openDatabase();
            await _putObject(db, STORAGE_AVAILABLE_KEY, '1');
            await _deleteObject(db, STORAGE_AVAILABLE_KEY);
            return true;
        } catch (_a) {
        }
        return false;
    }
    async _withPendingWrite(write) {
        this.pendingWrites++;
        try {
            await write();
        } finally{
            this.pendingWrites--;
        }
    }
    async _set(key14, value5) {
        return this._withPendingWrite(async ()=>{
            await this._withRetries((db)=>_putObject(db, key14, value5)
            );
            this.localCache[key14] = value5;
            return this.notifyServiceWorker(key14);
        });
    }
    async _get(key15) {
        const obj = await this._withRetries((db)=>getObject(db, key15)
        );
        this.localCache[key15] = obj;
        return obj;
    }
    async _remove(key16) {
        return this._withPendingWrite(async ()=>{
            await this._withRetries((db)=>_deleteObject(db, key16)
            );
            delete this.localCache[key16];
            return this.notifyServiceWorker(key16);
        });
    }
    async _poll() {
        // TODO: check if we need to fallback if getAll is not supported
        const result = await this._withRetries((db)=>{
            const getAllRequest = getObjectStore(db, false).getAll();
            return new DBPromise(getAllRequest).toPromise();
        });
        if (!result) return [];
        // If we have pending writes in progress abort, we'll get picked up on the next poll
        if (this.pendingWrites !== 0) return [];
        const keys = [];
        const keysInResult = new Set();
        for (const { fbase_key: key , value  } of result){
            keysInResult.add(key);
            if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                this.notifyListeners(key, value);
                keys.push(key);
            }
        }
        for (const localKey of Object.keys(this.localCache))if (this.localCache[localKey] && !keysInResult.has(localKey)) {
            // Deleted
            this.notifyListeners(localKey, null);
            keys.push(localKey);
        }
        return keys;
    }
    notifyListeners(key17, newValue) {
        this.localCache[key17] = newValue;
        const listeners = this.listeners[key17];
        if (listeners) for (const listener of Array.from(listeners))listener(newValue);
    }
    startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(async ()=>this._poll()
        , _POLLING_INTERVAL_MS);
    }
    stopPolling() {
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
        }
    }
    _addListener(key18, listener2) {
        if (Object.keys(this.listeners).length === 0) this.startPolling();
        if (!this.listeners[key18]) {
            this.listeners[key18] = new Set();
            this._get(key18); // This can happen in the background async and we can return immediately.
        }
        this.listeners[key18].add(listener2);
    }
    _removeListener(key19, listener3) {
        if (this.listeners[key19]) {
            this.listeners[key19].delete(listener3);
            if (this.listeners[key19].size === 0) delete this.listeners[key19];
        }
        if (Object.keys(this.listeners).length === 0) this.stopPolling();
    }
}
IndexedDBLocalPersistence.type = 'LOCAL';
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `indexedDB`
 * for the underlying storage.
 *
 * @public
 */ const indexedDBLocalPersistence = IndexedDBLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function startSignInPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v2/accounts/mfaSignIn:start" /* START_PHONE_MFA_SIGN_IN */ , _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST" /* POST */ , "/v2/accounts/mfaSignIn:finalize" /* FINALIZE_PHONE_MFA_SIGN_IN */ , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function getRecaptchaParams(auth) {
    return (await _performApiRequest(auth, "GET" /* GET */ , "/v1/recaptchaParams" /* GET_RECAPTCHA_PARAM */ )).recaptchaSiteKey || '';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getScriptParentElement() {
    var _a, _b;
    return (_b = (_a = document.getElementsByTagName('head')) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
    // TODO: consider adding timeout support & cancellation
    return new Promise((resolve, reject)=>{
        const el = document.createElement('script');
        el.setAttribute('src', url);
        el.onload = resolve;
        el.onerror = (e)=>{
            const error = _createError("internal-error" /* INTERNAL_ERROR */ );
            error.customData = e;
            reject(error);
        };
        el.type = 'text/javascript';
        el.charset = 'UTF-8';
        getScriptParentElement().appendChild(el);
    });
}
function _generateCallbackName(prefix) {
    return `__${prefix}${Math.floor(Math.random() * 1000000)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _SOLVE_TIME_MS = 500;
const _EXPIRATION_TIME_MS = 60000;
const _WIDGET_ID_START = 1000000000000;
class MockReCaptcha {
    constructor(auth28){
        this.auth = auth28;
        this.counter = _WIDGET_ID_START;
        this._widgets = new Map();
    }
    render(container1, parameters) {
        const id = this.counter;
        this._widgets.set(id, new MockWidget(container1, this.auth.name, parameters || {
        }));
        this.counter++;
        return id;
    }
    reset(optWidgetId) {
        var _a;
        const id = optWidgetId || _WIDGET_ID_START;
        (_a = this._widgets.get(id)) === null || _a === void 0 || _a.delete();
        this._widgets.delete(id);
    }
    getResponse(optWidgetId1) {
        var _a;
        const id = optWidgetId1 || _WIDGET_ID_START;
        return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || '';
    }
    async execute(optWidgetId2) {
        var _a;
        const id = optWidgetId2 || _WIDGET_ID_START;
        (_a = this._widgets.get(id)) === null || _a === void 0 || _a.execute();
        return '';
    }
}
class MockWidget {
    constructor(containerOrId, appName, params5){
        this.params = params5;
        this.timerId = null;
        this.deleted = false;
        this.responseToken = null;
        this.clickHandler = ()=>{
            this.execute();
        };
        const container = typeof containerOrId === 'string' ? document.getElementById(containerOrId) : containerOrId;
        _assert(container, "argument-error" /* ARGUMENT_ERROR */ , {
            appName
        });
        this.container = container;
        this.isVisible = this.params.size !== 'invisible';
        if (this.isVisible) this.execute();
        else this.container.addEventListener('click', this.clickHandler);
    }
    getResponse() {
        this.checkIfDeleted();
        return this.responseToken;
    }
    delete() {
        this.checkIfDeleted();
        this.deleted = true;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        this.container.removeEventListener('click', this.clickHandler);
    }
    execute() {
        this.checkIfDeleted();
        if (this.timerId) return;
        this.timerId = window.setTimeout(()=>{
            this.responseToken = generateRandomAlphaNumericString(50);
            const { callback , 'expired-callback': expiredCallback  } = this.params;
            if (callback) try {
                callback(this.responseToken);
            } catch (e) {
            }
            this.timerId = window.setTimeout(()=>{
                this.timerId = null;
                this.responseToken = null;
                if (expiredCallback) try {
                    expiredCallback();
                } catch (e) {
                }
                if (this.isVisible) this.execute();
            }, _EXPIRATION_TIME_MS);
        }, _SOLVE_TIME_MS);
    }
    checkIfDeleted() {
        if (this.deleted) throw new Error('reCAPTCHA mock was already deleted!');
    }
}
function generateRandomAlphaNumericString(len) {
    const chars = [];
    const allowedChars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0; i < len; i++)chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
    return chars.join('');
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // ReCaptcha will load using the same callback, so the callback function needs
// to be kept around
const _JSLOAD_CALLBACK = _generateCallbackName('rcb');
const NETWORK_TIMEOUT_DELAY = new Delay(30000, 60000);
const RECAPTCHA_BASE = 'https://www.google.com/recaptcha/api.js?';
/**
 * Loader for the GReCaptcha library. There should only ever be one of this.
 */ class ReCaptchaLoaderImpl {
    constructor(){
        this.hostLanguage = '';
        this.counter = 0;
        this.librarySeparatelyLoaded = !!_window().grecaptcha;
    }
    load(auth26, hl2 = '') {
        _assert(isHostLanguageValid(hl2), auth26, "argument-error" /* ARGUMENT_ERROR */ );
        if (this.shouldResolveImmediately(hl2)) return Promise.resolve(_window().grecaptcha);
        return new Promise((resolve, reject)=>{
            const networkTimeout = _window().setTimeout(()=>{
                reject(_createError(auth26, "network-request-failed" /* NETWORK_REQUEST_FAILED */ ));
            }, NETWORK_TIMEOUT_DELAY.get());
            _window()[_JSLOAD_CALLBACK] = ()=>{
                _window().clearTimeout(networkTimeout);
                delete _window()[_JSLOAD_CALLBACK];
                const recaptcha = _window().grecaptcha;
                if (!recaptcha) {
                    reject(_createError(auth26, "internal-error" /* INTERNAL_ERROR */ ));
                    return;
                }
                // Wrap the greptcha render function so that we know if the developer has
                // called it separately
                const render = recaptcha.render;
                recaptcha.render = (container, params)=>{
                    const widgetId = render(container, params);
                    this.counter++;
                    return widgetId;
                };
                this.hostLanguage = hl2;
                resolve(recaptcha);
            };
            const url = `${RECAPTCHA_BASE}?${_util.querystring({
                onload: _JSLOAD_CALLBACK,
                render: 'explicit',
                hl: hl2
            })}`;
            _loadJS(url).catch(()=>{
                clearTimeout(networkTimeout);
                reject(_createError(auth26, "internal-error" /* INTERNAL_ERROR */ ));
            });
        });
    }
    clearedOneInstance() {
        this.counter--;
    }
    shouldResolveImmediately(hl1) {
        // We can resolve immediately if:
        //   • grecaptcha is already defined AND (
        //     1. the requested language codes are the same OR
        //     2. there exists already a ReCaptcha on the page
        //     3. the library was already loaded by the app
        // In cases (2) and (3), we _can't_ reload as it would break the recaptchas
        // that are already in the page
        return !!_window().grecaptcha && (hl1 === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
    }
}
function isHostLanguageValid(hl) {
    return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}
class MockReCaptchaLoaderImpl {
    async load(auth27) {
        return new MockReCaptcha(auth27);
    }
    clearedOneInstance() {
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RECAPTCHA_VERIFIER_TYPE = 'recaptcha';
const DEFAULT_PARAMS = {
    theme: 'light',
    type: 'image'
};
/**
 * An {@link https://www.google.com/recaptcha/ | reCAPTCHA}-based application verifier.
 *
 * @public
 */ class RecaptchaVerifier {
    /**
     *
     * @param containerOrId - The reCAPTCHA container parameter.
     *
     * @remarks
     * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
     * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
     * an element ID. The corresponding element must also must be in the DOM at the time of
     * initialization.
     *
     * @param parameters - The optional reCAPTCHA parameters.
     *
     * @remarks
     * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
     * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
     * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
     * 'invisible'.
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     * @remarks
     * If none is provided, the default Firebase {@link Auth} instance is used. A Firebase {@link Auth} instance
     * must be initialized with an API key, otherwise an error will be thrown.
     */ constructor(containerOrId1, parameters1 = Object.assign({
    }, DEFAULT_PARAMS), authExtern1){
        this.parameters = parameters1;
        /**
         * The application verifier type.
         *
         * @remarks
         * For a reCAPTCHA verifier, this is 'recaptcha'.
         */ this.type = RECAPTCHA_VERIFIER_TYPE;
        this.destroyed = false;
        this.widgetId = null;
        this.tokenChangeListeners = new Set();
        this.renderPromise = null;
        this.recaptcha = null;
        this.auth = _castAuth(authExtern1);
        this.isInvisible = this.parameters.size === 'invisible';
        _assert(typeof document !== 'undefined', this.auth, "operation-not-supported-in-this-environment" /* OPERATION_NOT_SUPPORTED */ );
        const container = typeof containerOrId1 === 'string' ? document.getElementById(containerOrId1) : containerOrId1;
        _assert(container, this.auth, "argument-error" /* ARGUMENT_ERROR */ );
        this.container = container;
        this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
        this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
        this.validateStartingState();
    // TODO: Figure out if sdk version is needed
    }
    /**
     * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
     *
     * @returns A Promise for the reCAPTCHA token.
     */ async verify() {
        this.assertNotDestroyed();
        const id = await this.render();
        const recaptcha = this.getAssertedRecaptcha();
        const response = recaptcha.getResponse(id);
        if (response) return response;
        return new Promise((resolve)=>{
            const tokenChange = (token)=>{
                if (!token) return; // Ignore token expirations.
                this.tokenChangeListeners.delete(tokenChange);
                resolve(token);
            };
            this.tokenChangeListeners.add(tokenChange);
            if (this.isInvisible) recaptcha.execute(id);
        });
    }
    /**
     * Renders the reCAPTCHA widget on the page.
     *
     * @returns A Promise that resolves with the reCAPTCHA widget ID.
     */ render() {
        try {
            this.assertNotDestroyed();
        } catch (e1) {
            // This method returns a promise. Since it's not async (we want to return the
            // _same_ promise if rendering is still occurring), the API surface should
            // reject with the error rather than just throw
            return Promise.reject(e1);
        }
        if (this.renderPromise) return this.renderPromise;
        this.renderPromise = this.makeRenderPromise().catch((e)=>{
            this.renderPromise = null;
            throw e;
        });
        return this.renderPromise;
    }
    /** @internal */ _reset() {
        this.assertNotDestroyed();
        if (this.widgetId !== null) this.getAssertedRecaptcha().reset(this.widgetId);
    }
    /**
     * Clears the reCAPTCHA widget from the page and destroys the instance.
     */ clear() {
        this.assertNotDestroyed();
        this.destroyed = true;
        this._recaptchaLoader.clearedOneInstance();
        if (!this.isInvisible) this.container.childNodes.forEach((node)=>{
            this.container.removeChild(node);
        });
    }
    validateStartingState() {
        _assert(!this.parameters.sitekey, this.auth, "argument-error" /* ARGUMENT_ERROR */ );
        _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error" /* ARGUMENT_ERROR */ );
        _assert(typeof document !== 'undefined', this.auth, "operation-not-supported-in-this-environment" /* OPERATION_NOT_SUPPORTED */ );
    }
    makeTokenCallback(existing) {
        return (token)=>{
            this.tokenChangeListeners.forEach((listener)=>listener(token)
            );
            if (typeof existing === 'function') existing(token);
            else if (typeof existing === 'string') {
                const globalFunc = _window()[existing];
                if (typeof globalFunc === 'function') globalFunc(token);
            }
        };
    }
    assertNotDestroyed() {
        _assert(!this.destroyed, this.auth, "internal-error" /* INTERNAL_ERROR */ );
    }
    async makeRenderPromise() {
        await this.init();
        if (!this.widgetId) {
            let container = this.container;
            if (!this.isInvisible) {
                const guaranteedEmpty = document.createElement('div');
                container.appendChild(guaranteedEmpty);
                container = guaranteedEmpty;
            }
            this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
        }
        return this.widgetId;
    }
    async init() {
        _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error" /* INTERNAL_ERROR */ );
        await domReady();
        this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || undefined);
        const siteKey = await getRecaptchaParams(this.auth);
        _assert(siteKey, this.auth, "internal-error" /* INTERNAL_ERROR */ );
        this.parameters.sitekey = siteKey;
    }
    getAssertedRecaptcha() {
        _assert(this.recaptcha, this.auth, "internal-error" /* INTERNAL_ERROR */ );
        return this.recaptcha;
    }
}
function domReady() {
    let resolver = null;
    return new Promise((resolve)=>{
        if (document.readyState === 'complete') {
            resolve();
            return;
        }
        // Document not ready, wait for load before resolving.
        // Save resolver, so we can remove listener in case it was externally
        // cancelled.
        resolver = ()=>resolve()
        ;
        window.addEventListener('load', resolver);
    }).catch((e)=>{
        if (resolver) window.removeEventListener('load', resolver);
        throw e;
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ConfirmationResultImpl {
    constructor(verificationId1, onConfirmation){
        this.verificationId = verificationId1;
        this.onConfirmation = onConfirmation;
    }
    confirm(verificationCode1) {
        const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode1);
        return this.onConfirmation(authCredential);
    }
}
/**
 * Asynchronously signs in using a phone number.
 *
 * @remarks
 * This method sends a code via SMS to the given
 * phone number, and returns a {@link ConfirmationResult}. After the user
 * provides the code sent to their phone, call {@link ConfirmationResult.confirm}
 * with the code to sign the user in.
 *
 * For abuse prevention, this method also requires a {@link ApplicationVerifier}.
 * This SDK includes a reCAPTCHA-based implementation, {@link RecaptchaVerifier}.
 * This function can work on other platforms that do not support the
 * {@link RecaptchaVerifier} (like React Native), but you need to use a
 * third-party {@link ApplicationVerifier} implementation.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
 * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
 * // Obtain a verificationCode from the user.
 * const credential = await confirmationResult.confirm(verificationCode);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */ async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
    const authInternal = _castAuth(auth);
    const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, _util.getModularInstance(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred)=>signInWithCredential(authInternal, cred)
    );
}
/**
 * Links the user account with the given phone number.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */ async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
    const userInternal = _util.getModularInstance(user);
    await _assertLinkedStatus(false, userInternal, "phone" /* PHONE */ );
    const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, _util.getModularInstance(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred)=>linkWithCredential(userInternal, cred)
    );
}
/**
 * Re-authenticates a user using a fresh phone credential.
 *
 * @remarks Use before operations such as {@link updatePassword} that require tokens from recent sign-in attempts.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */ async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
    const userInternal = _util.getModularInstance(user);
    const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, _util.getModularInstance(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred)=>reauthenticateWithCredential(userInternal, cred)
    );
}
/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */ async function _verifyPhoneNumber(auth, options, verifier) {
    var _a;
    const recaptchaToken = await verifier.verify();
    try {
        _assert(typeof recaptchaToken === 'string', auth, "argument-error" /* ARGUMENT_ERROR */ );
        _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error" /* ARGUMENT_ERROR */ );
        let phoneInfoOptions;
        if (typeof options === 'string') phoneInfoOptions = {
            phoneNumber: options
        };
        else phoneInfoOptions = options;
        if ('session' in phoneInfoOptions) {
            const session = phoneInfoOptions.session;
            if ('phoneNumber' in phoneInfoOptions) {
                _assert(session.type === "enroll" /* ENROLL */ , auth, "internal-error" /* INTERNAL_ERROR */ );
                const response = await startEnrollPhoneMfa(auth, {
                    idToken: session.credential,
                    phoneEnrollmentInfo: {
                        phoneNumber: phoneInfoOptions.phoneNumber,
                        recaptchaToken
                    }
                });
                return response.phoneSessionInfo.sessionInfo;
            } else {
                _assert(session.type === "signin" /* SIGN_IN */ , auth, "internal-error" /* INTERNAL_ERROR */ );
                const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
                _assert(mfaEnrollmentId, auth, "missing-multi-factor-info" /* MISSING_MFA_INFO */ );
                const response = await startSignInPhoneMfa(auth, {
                    mfaPendingCredential: session.credential,
                    mfaEnrollmentId,
                    phoneSignInInfo: {
                        recaptchaToken
                    }
                });
                return response.phoneResponseInfo.sessionInfo;
            }
        } else {
            const { sessionInfo  } = await sendPhoneVerificationCode(auth, {
                phoneNumber: phoneInfoOptions.phoneNumber,
                recaptchaToken
            });
            return sessionInfo;
        }
    } finally{
        verifier._reset();
    }
}
/**
 * Updates the user's phone number.
 *
 * @example
 * ```
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * await updatePhoneNumber(user, phoneCredential);
 * ```
 *
 * @param user - The user.
 * @param credential - A credential authenticating the new phone number.
 *
 * @public
 */ async function updatePhoneNumber(user, credential) {
    await _link$1(_util.getModularInstance(user), credential);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class PhoneAuthProvider {
    /**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */ constructor(auth29){
        /** Always set to {@link ProviderId}.PHONE. */ this.providerId = PhoneAuthProvider.PROVIDER_ID;
        this.auth = _castAuth(auth29);
    }
    /**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */ verifyPhoneNumber(phoneOptions, applicationVerifier) {
        return _verifyPhoneNumber(this.auth, phoneOptions, _util.getModularInstance(applicationVerifier));
    }
    /**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */ static credential(verificationId, verificationCode2) {
        return PhoneAuthCredential._fromVerification(verificationId, verificationCode2);
    }
    /**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */ static credentialFromResult(userCredential) {
        const credential = userCredential;
        return PhoneAuthProvider.credentialFromTaggedObject(credential);
    }
    /**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if (e.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */ static credentialFromError(error15) {
        return PhoneAuthProvider.credentialFromTaggedObject(error15.customData || {
        });
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse6  }) {
        if (!tokenResponse6) return null;
        const { phoneNumber , temporaryProof  } = tokenResponse6;
        if (phoneNumber && temporaryProof) return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
        return null;
    }
}
/** Always set to {@link ProviderId}.PHONE. */ PhoneAuthProvider.PROVIDER_ID = "phone" /* PHONE */ ;
/** Always set to {@link SignInMethod}.PHONE. */ PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone" /* PHONE */ ;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function _withDefaultResolver(auth, resolverOverride) {
    if (resolverOverride) return _getInstance(resolverOverride);
    _assert(auth._popupRedirectResolver, auth, "argument-error" /* ARGUMENT_ERROR */ );
    return auth._popupRedirectResolver;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IdpCredential extends AuthCredential {
    constructor(params7){
        super("custom" /* CUSTOM */ , "custom" /* CUSTOM */ );
        this.params = params7;
    }
    _getIdTokenResponse(auth32) {
        return signInWithIdp(auth32, this._buildIdpRequest());
    }
    _linkToIdToken(auth30, idToken6) {
        return signInWithIdp(auth30, this._buildIdpRequest(idToken6));
    }
    _getReauthenticationResolver(auth31) {
        return signInWithIdp(auth31, this._buildIdpRequest());
    }
    _buildIdpRequest(idToken7) {
        const request = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: true,
            returnIdpCredential: true
        };
        if (idToken7) request.idToken = idToken7;
        return request;
    }
}
function _signIn(params) {
    return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
    const { auth , user  } = params;
    _assert(user, auth, "internal-error" /* INTERNAL_ERROR */ );
    return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
    const { auth , user  } = params;
    _assert(user, auth, "internal-error" /* INTERNAL_ERROR */ );
    return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class AbstractPopupRedirectOperation {
    constructor(auth33, filter, resolver1, user15, bypassAuthState2 = false){
        this.auth = auth33;
        this.resolver = resolver1;
        this.user = user15;
        this.bypassAuthState = bypassAuthState2;
        this.pendingPromise = null;
        this.eventManager = null;
        this.filter = Array.isArray(filter) ? filter : [
            filter
        ];
    }
    execute() {
        return new Promise(async (resolve, reject)=>{
            this.pendingPromise = {
                resolve,
                reject
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth);
                await this.onExecution();
                this.eventManager.registerConsumer(this);
            } catch (e) {
                this.reject(e);
            }
        });
    }
    async onAuthEvent(event9) {
        const { urlResponse , sessionId , postBody , tenantId , error , type  } = event9;
        if (error) {
            this.reject(error);
            return;
        }
        const params = {
            auth: this.auth,
            requestUri: urlResponse,
            sessionId: sessionId,
            tenantId: tenantId || undefined,
            postBody: postBody || undefined,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(type)(params));
        } catch (e) {
            this.reject(e);
        }
    }
    onError(error13) {
        this.reject(error13);
    }
    getIdpTask(type2) {
        switch(type2){
            case "signInViaPopup" /* SIGN_IN_VIA_POPUP */ :
            case "signInViaRedirect" /* SIGN_IN_VIA_REDIRECT */ :
                return _signIn;
            case "linkViaPopup" /* LINK_VIA_POPUP */ :
            case "linkViaRedirect" /* LINK_VIA_REDIRECT */ :
                return _link;
            case "reauthViaPopup" /* REAUTH_VIA_POPUP */ :
            case "reauthViaRedirect" /* REAUTH_VIA_REDIRECT */ :
                return _reauth;
            default:
                _fail(this.auth, "internal-error" /* INTERNAL_ERROR */ );
        }
    }
    resolve(cred) {
        debugAssert(this.pendingPromise, 'Pending promise was never set');
        this.pendingPromise.resolve(cred);
        this.unregisterAndCleanUp();
    }
    reject(error14) {
        debugAssert(this.pendingPromise, 'Pending promise was never set');
        this.pendingPromise.reject(error14);
        this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
        if (this.eventManager) this.eventManager.unregisterConsumer(this);
        this.pendingPromise = null;
        this.cleanUp();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2000, 10000);
/**
 * Authenticates a Firebase client using a popup-based OAuth authentication flow.
 *
 * @remarks
 * If succeeds, returns the signed in user along with the provider's credential. If sign in was
 * unsuccessful, returns an error object containing additional information about the error.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 *
 * @public
 */ async function signInWithPopup(auth, provider, resolver) {
    const authInternal = _castAuth(auth);
    _assertInstanceOf(auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(authInternal, resolver);
    const action = new PopupOperation(authInternal, "signInViaPopup" /* SIGN_IN_VIA_POPUP */ , provider, resolverInternal);
    return action.executeNotNull();
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a pop-up based
 * OAuth flow.
 *
 * @remarks
 * If the reauthentication is successful, the returned result will contain the user and the
 * provider's credential.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 * // Reauthenticate using a popup.
 * await reauthenticateWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ async function reauthenticateWithPopup(user, provider, resolver) {
    const userInternal = _util.getModularInstance(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    const action = new PopupOperation(userInternal.auth, "reauthViaPopup" /* REAUTH_VIA_POPUP */ , provider, resolverInternal, userInternal);
    return action.executeNotNull();
}
/**
 * Links the authenticated provider to the user account using a pop-up based OAuth flow.
 *
 * @remarks
 * If the linking is successful, the returned result will contain the user and the provider's credential.
 *
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a popup.
 * const provider = new FacebookAuthProvider();
 * await linkWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ async function linkWithPopup(user, provider, resolver) {
    const userInternal = _util.getModularInstance(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    const action = new PopupOperation(userInternal.auth, "linkViaPopup" /* LINK_VIA_POPUP */ , provider, resolverInternal, userInternal);
    return action.executeNotNull();
}
/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */ class PopupOperation extends AbstractPopupRedirectOperation {
    constructor(auth35, filter1, provider1, resolver3, user16){
        super(auth35, filter1, resolver3, user16);
        this.provider = provider1;
        this.authWindow = null;
        this.pollId = null;
        if (PopupOperation.currentPopupAction) PopupOperation.currentPopupAction.cancel();
        PopupOperation.currentPopupAction = this;
    }
    async executeNotNull() {
        const result = await this.execute();
        _assert(result, this.auth, "internal-error" /* INTERNAL_ERROR */ );
        return result;
    }
    async onExecution() {
        debugAssert(this.filter.length === 1, 'Popup operations only handle one event');
        const eventId = _generateEventId();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
        this.authWindow.associatedEvent = eventId;
        // Check for web storage support and origin validation _after_ the popup is
        // loaded. These operations are slow (~1 second or so) Rather than
        // waiting on them before opening the window, optimistically open the popup
        // and check for storage support at the same time. If storage support is
        // not available, this will cause the whole thing to reject properly. It
        // will also close the popup, but since the promise has already rejected,
        // the popup closed by user poll will reject into the void.
        this.resolver._originValidation(this.auth).catch((e)=>{
            this.reject(e);
        });
        this.resolver._isIframeWebStorageSupported(this.auth, (isSupported)=>{
            if (!isSupported) this.reject(_createError(this.auth, "web-storage-unsupported" /* WEB_STORAGE_UNSUPPORTED */ ));
        });
        // Handle user closure. Notice this does *not* use await
        this.pollUserCancellation();
    }
    get eventId() {
        var _a;
        return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
    }
    cancel() {
        this.reject(_createError(this.auth, "cancelled-popup-request" /* EXPIRED_POPUP_REQUEST */ ));
    }
    cleanUp() {
        if (this.authWindow) this.authWindow.close();
        if (this.pollId) window.clearTimeout(this.pollId);
        this.authWindow = null;
        this.pollId = null;
        PopupOperation.currentPopupAction = null;
    }
    pollUserCancellation() {
        const poll = ()=>{
            var _a, _b;
            if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
                // Make sure that there is sufficient time for whatever action to
                // complete. The window could have closed but the sign in network
                // call could still be in flight.
                this.pollId = window.setTimeout(()=>{
                    this.pollId = null;
                    this.reject(_createError(this.auth, "popup-closed-by-user" /* POPUP_CLOSED_BY_USER */ ));
                }, 2000 /* AUTH_EVENT */ );
                return;
            }
            this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
        };
        poll();
    }
}
// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
PopupOperation.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PENDING_REDIRECT_KEY = 'pendingRedirect';
// We only get one redirect outcome for any one auth, so just store it
// in here.
const redirectOutcomeMap = new Map();
class RedirectAction extends AbstractPopupRedirectOperation {
    constructor(auth34, resolver2, bypassAuthState1 = false){
        super(auth34, [
            "signInViaRedirect" /* SIGN_IN_VIA_REDIRECT */ ,
            "linkViaRedirect" /* LINK_VIA_REDIRECT */ ,
            "reauthViaRedirect" /* REAUTH_VIA_REDIRECT */ ,
            "unknown" /* UNKNOWN */ 
        ], resolver2, undefined, bypassAuthState1);
        this.eventId = null;
    }
    /**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */ async execute() {
        let readyOutcome = redirectOutcomeMap.get(this.auth._key());
        if (!readyOutcome) {
            try {
                const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
                const result = hasPendingRedirect ? await super.execute() : null;
                readyOutcome = ()=>Promise.resolve(result)
                ;
            } catch (e) {
                readyOutcome = ()=>Promise.reject(e)
                ;
            }
            redirectOutcomeMap.set(this.auth._key(), readyOutcome);
        }
        // If we're not bypassing auth state, the ready outcome should be set to
        // null.
        if (!this.bypassAuthState) redirectOutcomeMap.set(this.auth._key(), ()=>Promise.resolve(null)
        );
        return readyOutcome();
    }
    async onAuthEvent(event3) {
        if (event3.type === "signInViaRedirect" /* SIGN_IN_VIA_REDIRECT */ ) return super.onAuthEvent(event3);
        else if (event3.type === "unknown" /* UNKNOWN */ ) {
            // This is a sentinel value indicating there's no pending redirect
            this.resolve(null);
            return;
        }
        if (event3.eventId) {
            const user = await this.auth._redirectUserForId(event3.eventId);
            if (user) {
                this.user = user;
                return super.onAuthEvent(event3);
            } else this.resolve(null);
        }
    }
    async onExecution() {
    }
    cleanUp() {
    }
}
async function _getAndClearPendingRedirectStatus(resolver, auth) {
    const key = pendingRedirectKey(auth);
    const persistence = resolverPersistence(resolver);
    if (!await persistence._isAvailable()) return false;
    const hasPendingRedirect = await persistence._get(key) === 'true';
    await persistence._remove(key);
    return hasPendingRedirect;
}
async function _setPendingRedirectStatus(resolver, auth) {
    return resolverPersistence(resolver)._set(pendingRedirectKey(auth), 'true');
}
function _clearRedirectOutcomes() {
    redirectOutcomeMap.clear();
}
function resolverPersistence(resolver) {
    return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
    return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Authenticates a Firebase client using a full-page redirect flow.
 *
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ function signInWithRedirect(auth, provider, resolver) {
    return _signInWithRedirect(auth, provider, resolver);
}
async function _signInWithRedirect(auth, provider, resolver) {
    const authInternal = _castAuth(auth);
    _assertInstanceOf(auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(authInternal, resolver);
    await _setPendingRedirectStatus(resolverInternal, authInternal);
    return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect" /* SIGN_IN_VIA_REDIRECT */ );
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a full-page redirect flow.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * // Link using a redirect.
 * await linkWithRedirect(result.user, provider);
 * // This will again trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ function reauthenticateWithRedirect(user, provider, resolver) {
    return _reauthenticateWithRedirect(user, provider, resolver);
}
async function _reauthenticateWithRedirect(user, provider, resolver) {
    const userInternal = _util.getModularInstance(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    // Allow the resolver to error before persisting the redirect user
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = await prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect" /* REAUTH_VIA_REDIRECT */ , eventId);
}
/**
 * Links the {@link OAuthProvider} to the user account using a full-page redirect flow.
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a redirect.
 * const provider = new FacebookAuthProvider();
 * await linkWithRedirect(result.user, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 *
 * @public
 */ function linkWithRedirect(user, provider, resolver) {
    return _linkWithRedirect(user, provider, resolver);
}
async function _linkWithRedirect(user, provider, resolver) {
    const userInternal = _util.getModularInstance(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    // Allow the resolver to error before persisting the redirect user
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    await _assertLinkedStatus(false, userInternal, provider.providerId);
    await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = await prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect" /* LINK_VIA_REDIRECT */ , eventId);
}
/**
 * Returns a {@link UserCredential} from the redirect-based sign-in flow.
 *
 * @remarks
 * If sign-in succeeded, returns the signed in user. If sign-in was unsuccessful, fails with an
 * error. If no redirect operation was called, returns a {@link UserCredential}
 * with a null `user`.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */ async function getRedirectResult(auth, resolver) {
    await _castAuth(auth)._initializationPromise;
    return _getRedirectResult(auth, resolver, false);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
    const authInternal = _castAuth(auth);
    const resolver = _withDefaultResolver(authInternal, resolverExtern);
    const action = new RedirectAction(authInternal, resolver, bypassAuthState);
    const result = await action.execute();
    if (result && !bypassAuthState) {
        delete result.user._redirectEventId;
        await authInternal._persistUserIfCurrent(result.user);
        await authInternal._setRedirectUser(null, resolverExtern);
    }
    return result;
}
async function prepareUserForRedirect(user) {
    const eventId = _generateEventId(`${user.uid}:::`);
    user._redirectEventId = eventId;
    await user.auth._setRedirectUser(user);
    await user.auth._persistUserIfCurrent(user);
    return eventId;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The amount of time to store the UIDs of seen events; this is
// set to 10 min by default
const EVENT_DUPLICATION_CACHE_DURATION_MS = 600000;
class AuthEventManager {
    constructor(auth36){
        this.auth = auth36;
        this.cachedEventUids = new Set();
        this.consumers = new Set();
        this.queuedRedirectEvent = null;
        this.hasHandledPotentialRedirect = false;
        this.lastProcessedEventTime = Date.now();
    }
    registerConsumer(authEventConsumer) {
        this.consumers.add(authEventConsumer);
        if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
            this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
            this.saveEventToCache(this.queuedRedirectEvent);
            this.queuedRedirectEvent = null;
        }
    }
    unregisterConsumer(authEventConsumer1) {
        this.consumers.delete(authEventConsumer1);
    }
    onEvent(event4) {
        // Check if the event has already been handled
        if (this.hasEventBeenHandled(event4)) return false;
        let handled = false;
        this.consumers.forEach((consumer)=>{
            if (this.isEventForConsumer(event4, consumer)) {
                handled = true;
                this.sendToConsumer(event4, consumer);
                this.saveEventToCache(event4);
            }
        });
        if (this.hasHandledPotentialRedirect || !isRedirectEvent(event4)) // If we've already seen a redirect before, or this is a popup event,
        // bail now
        return handled;
        this.hasHandledPotentialRedirect = true;
        // If the redirect wasn't handled, hang on to it
        if (!handled) {
            this.queuedRedirectEvent = event4;
            handled = true;
        }
        return handled;
    }
    sendToConsumer(event5, consumer) {
        var _a;
        if (event5.error && !isNullRedirectEvent(event5)) {
            const code = ((_a = event5.error.code) === null || _a === void 0 ? void 0 : _a.split('auth/')[1]) || "internal-error" /* INTERNAL_ERROR */ ;
            consumer.onError(_createError(this.auth, code));
        } else consumer.onAuthEvent(event5);
    }
    isEventForConsumer(event6, consumer1) {
        const eventIdMatches = consumer1.eventId === null || !!event6.eventId && event6.eventId === consumer1.eventId;
        return consumer1.filter.includes(event6.type) && eventIdMatches;
    }
    hasEventBeenHandled(event7) {
        if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) this.cachedEventUids.clear();
        return this.cachedEventUids.has(eventUid(event7));
    }
    saveEventToCache(event8) {
        this.cachedEventUids.add(eventUid(event8));
        this.lastProcessedEventTime = Date.now();
    }
}
function eventUid(e) {
    return [
        e.type,
        e.eventId,
        e.sessionId,
        e.tenantId
    ].filter((v)=>v
    ).join('-');
}
function isNullRedirectEvent({ type , error  }) {
    return type === "unknown" /* UNKNOWN */  && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event" /* NO_AUTH_EVENT */ }`;
}
function isRedirectEvent(event) {
    switch(event.type){
        case "signInViaRedirect" /* SIGN_IN_VIA_REDIRECT */ :
        case "linkViaRedirect" /* LINK_VIA_REDIRECT */ :
        case "reauthViaRedirect" /* REAUTH_VIA_REDIRECT */ :
            return true;
        case "unknown" /* UNKNOWN */ :
            return isNullRedirectEvent(event);
        default:
            return false;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _getProjectConfig(auth, request = {
}) {
    return _performApiRequest(auth, "GET" /* GET */ , "/v1/projects" /* GET_PROJECT_CONFIG */ , request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
const HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
    // Skip origin validation if we are in an emulated environment
    if (auth.config.emulator) return;
    const { authorizedDomains  } = await _getProjectConfig(auth);
    for (const domain of authorizedDomains)try {
        if (matchDomain(domain)) return;
    } catch (_a) {
    // Do nothing if there's a URL error; just continue searching
    }
    // In the old SDK, this error also provides helpful messages.
    _fail(auth, "unauthorized-domain" /* INVALID_ORIGIN */ );
}
function matchDomain(expected) {
    const currentUrl = _getCurrentUrl();
    const { protocol , hostname  } = new URL(currentUrl);
    if (expected.startsWith('chrome-extension://')) {
        const ceUrl = new URL(expected);
        if (ceUrl.hostname === '' && hostname === '') // For some reason we're not parsing chrome URLs properly
        return protocol === 'chrome-extension:' && expected.replace('chrome-extension://', '') === currentUrl.replace('chrome-extension://', '');
        return protocol === 'chrome-extension:' && ceUrl.hostname === hostname;
    }
    if (!HTTP_REGEX.test(protocol)) return false;
    if (IP_ADDRESS_REGEX.test(expected)) // The domain has to be exactly equal to the pattern, as an IP domain will
    // only contain the IP, no extra character.
    return hostname === expected;
    // Dots in pattern should be escaped.
    const escapedDomainPattern = expected.replace(/\./g, '\\.');
    // Non ip address domains.
    // domain.com = *.domain.com OR domain.com
    const re = new RegExp('^(.+\\.' + escapedDomainPattern + '|' + escapedDomainPattern + ')$', 'i');
    return re.test(hostname);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const NETWORK_TIMEOUT = new Delay(30000, 60000);
/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */ function resetUnloadedGapiModules() {
    // Clear last failed gapi.load state to force next gapi.load to first
    // load the failed gapi.iframes module.
    // Get gapix.beacon context.
    const beacon = _window().___jsl;
    // Get current hint.
    if (beacon === null || beacon === void 0 ? void 0 : beacon.H) // Get gapi hint.
    for (const hint of Object.keys(beacon.H)){
        // Requested modules.
        beacon.H[hint].r = beacon.H[hint].r || [];
        // Loaded modules.
        beacon.H[hint].L = beacon.H[hint].L || [];
        // Set requested modules to a copy of the loaded modules.
        beacon.H[hint].r = [
            ...beacon.H[hint].L
        ];
        // Clear pending callbacks.
        if (beacon.CP) for(let i = 0; i < beacon.CP.length; i++)// Remove all failed pending callbacks.
        beacon.CP[i] = null;
    }
}
function loadGapi(auth) {
    return new Promise((resolve, reject)=>{
        var _a, _b, _c;
        // Function to run when gapi.load is ready.
        function loadGapiIframe() {
            // The developer may have tried to previously run gapi.load and failed.
            // Run this to fix that.
            resetUnloadedGapiModules();
            gapi.load('gapi.iframes', {
                callback: ()=>{
                    resolve(gapi.iframes.getContext());
                },
                ontimeout: ()=>{
                    // The above reset may be sufficient, but having this reset after
                    // failure ensures that if the developer calls gapi.load after the
                    // connection is re-established and before another attempt to embed
                    // the iframe, it would work and would not be broken because of our
                    // failed attempt.
                    // Timeout when gapi.iframes.Iframe not loaded.
                    resetUnloadedGapiModules();
                    reject(_createError(auth, "network-request-failed" /* NETWORK_REQUEST_FAILED */ ));
                },
                timeout: NETWORK_TIMEOUT.get()
            });
        }
        if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) // If gapi.iframes.Iframe available, resolve.
        resolve(gapi.iframes.getContext());
        else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) // Gapi loader ready, load gapi.iframes.
        loadGapiIframe();
        else {
            // Create a new iframe callback when this is called so as not to overwrite
            // any previous defined callback. This happens if this method is called
            // multiple times in parallel and could result in the later callback
            // overwriting the previous one. This would end up with a iframe
            // timeout.
            const cbName = _generateCallbackName('iframefcb');
            // GApi loader not available, dynamically load platform.js.
            _window()[cbName] = ()=>{
                // GApi loader should be ready.
                if (!!gapi.load) loadGapiIframe();
                else // Gapi loader failed, throw error.
                reject(_createError(auth, "network-request-failed" /* NETWORK_REQUEST_FAILED */ ));
            };
            // Load GApi loader.
            return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch((e)=>reject(e)
            );
        }
    }).catch((error)=>{
        // Reset cached promise to allow for retrial.
        cachedGApiLoader = null;
        throw error;
    });
}
let cachedGApiLoader = null;
function _loadGapi(auth) {
    cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
    return cachedGApiLoader;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PING_TIMEOUT = new Delay(5000, 15000);
const IFRAME_PATH = '__/auth/iframe';
const EMULATED_IFRAME_PATH = 'emulator/auth/iframe';
const IFRAME_ATTRIBUTES = {
    style: {
        position: 'absolute',
        top: '-100px',
        width: '1px',
        height: '1px'
    },
    'aria-hidden': 'true',
    tabindex: '-1'
};
// Map from apiHost to endpoint ID for passing into iframe. In current SDK, apiHost can be set to
// anything (not from a list of endpoints with IDs as in legacy), so this is the closest we can get.
const EID_FROM_APIHOST = new Map([
    [
        "identitytoolkit.googleapis.com" /* API_HOST */ ,
        'p'
    ],
    [
        'staging-identitytoolkit.sandbox.googleapis.com',
        's'
    ],
    [
        'test-identitytoolkit.sandbox.googleapis.com',
        't'
    ] // test
]);
function getIframeUrl(auth) {
    const config = auth.config;
    _assert(config.authDomain, auth, "auth-domain-config-required" /* MISSING_AUTH_DOMAIN */ );
    const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
    const params = {
        apiKey: config.apiKey,
        appName: auth.name,
        v: _app.SDK_VERSION
    };
    const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
    if (eid) params.eid = eid;
    const frameworks = auth._getFrameworks();
    if (frameworks.length) params.fw = frameworks.join(',');
    return `${url}?${_util.querystring(params).slice(1)}`;
}
async function _openIframe(auth) {
    const context = await _loadGapi(auth);
    const gapi = _window().gapi;
    _assert(gapi, auth, "internal-error" /* INTERNAL_ERROR */ );
    return context.open({
        where: document.body,
        url: getIframeUrl(auth),
        messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: IFRAME_ATTRIBUTES,
        dontclear: true
    }, (iframe)=>new Promise(async (resolve, reject)=>{
            await iframe.restyle({
                // Prevent iframe from closing on mouse out.
                setHideOnLeave: false
            });
            const networkError = _createError(auth, "network-request-failed" /* NETWORK_REQUEST_FAILED */ );
            // Confirm iframe is correctly loaded.
            // To fallback on failure, set a timeout.
            const networkErrorTimer = _window().setTimeout(()=>{
                reject(networkError);
            }, PING_TIMEOUT.get());
            // Clear timer and resolve pending iframe ready promise.
            function clearTimerAndResolve() {
                _window().clearTimeout(networkErrorTimer);
                resolve(iframe);
            }
            // This returns an IThenable. However the reject part does not call
            // when the iframe is not loaded.
            iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, ()=>{
                reject(networkError);
            });
        })
    );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BASE_POPUP_OPTIONS = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no'
};
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 600;
const TARGET_BLANK = '_blank';
const FIREFOX_EMPTY_URL = 'http://localhost';
class AuthPopup {
    constructor(window1){
        this.window = window1;
        this.associatedEvent = null;
    }
    close() {
        if (this.window) try {
            this.window.close();
        } catch (e) {
        }
    }
}
function _open(auth, url, name, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
    const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
    let target = '';
    const options = Object.assign(Object.assign({
    }, BASE_POPUP_OPTIONS), {
        width: width.toString(),
        height: height.toString(),
        top,
        left
    });
    // Chrome iOS 7 and 8 is returning an undefined popup win when target is
    // specified, even though the popup is not necessarily blocked.
    const ua = _util.getUA().toLowerCase();
    if (name) target = _isChromeIOS(ua) ? TARGET_BLANK : name;
    if (_isFirefox(ua)) {
        // Firefox complains when invalid URLs are popped out. Hacky way to bypass.
        url = url || FIREFOX_EMPTY_URL;
        // Firefox disables by default scrolling on popup windows, which can create
        // issues when the user has many Google accounts, for instance.
        options.scrollbars = 'yes';
    }
    const optionsString = Object.entries(options).reduce((accum, [key, value])=>`${accum}${key}=${value},`
    , '');
    if (_isIOSStandalone(ua) && target !== '_self') {
        openAsNewWindowIOS(url || '', target);
        return new AuthPopup(null);
    }
    // about:blank getting sanitized causing browsers like IE/Edge to display
    // brief error message before redirecting to handler.
    const newWin = window.open(url || '', target, optionsString);
    _assert(newWin, auth, "popup-blocked" /* POPUP_BLOCKED */ );
    // Flaky on IE edge, encapsulate with a try and catch.
    try {
        newWin.focus();
    } catch (e) {
    }
    return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
    const el = document.createElement('a');
    el.href = url;
    el.target = target;
    const click = document.createEvent('MouseEvent');
    click.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
    el.dispatchEvent(click);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * URL for Authentication widget which will initiate the OAuth handshake
 *
 * @internal
 */ const WIDGET_PATH = '__/auth/handler';
/**
 * URL for emulated environment
 *
 * @internal
 */ const EMULATOR_WIDGET_PATH = 'emulator/auth/handler';
function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
    _assert(auth.config.authDomain, auth, "auth-domain-config-required" /* MISSING_AUTH_DOMAIN */ );
    _assert(auth.config.apiKey, auth, "invalid-api-key" /* INVALID_API_KEY */ );
    const params = {
        apiKey: auth.config.apiKey,
        appName: auth.name,
        authType,
        redirectUrl,
        v: _app.SDK_VERSION,
        eventId
    };
    if (provider instanceof FederatedAuthProvider) {
        provider.setDefaultLanguage(auth.languageCode);
        params.providerId = provider.providerId || '';
        if (!_util.isEmpty(provider.getCustomParameters())) params.customParameters = JSON.stringify(provider.getCustomParameters());
        // TODO set additionalParams from the provider as well?
        for (const [key, value] of Object.entries(additionalParams || {
        }))params[key] = value;
    }
    if (provider instanceof BaseOAuthProvider) {
        const scopes = provider.getScopes().filter((scope)=>scope !== ''
        );
        if (scopes.length > 0) params.scopes = scopes.join(',');
    }
    if (auth.tenantId) params.tid = auth.tenantId;
    // TODO: maybe set eid as endipointId
    // TODO: maybe set fw as Frameworks.join(",")
    const paramsDict = params;
    for (const key of Object.keys(paramsDict))if (paramsDict[key] === undefined) delete paramsDict[key];
    return `${getHandlerBase(auth)}?${_util.querystring(paramsDict).slice(1)}`;
}
function getHandlerBase({ config  }) {
    if (!config.emulator) return `https://${config.authDomain}/${WIDGET_PATH}`;
    return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The special web storage event
 *
 */ const WEB_STORAGE_SUPPORT_KEY = 'webStorageSupport';
class BrowserPopupRedirectResolver {
    constructor(){
        this.eventManagers = {
        };
        this.iframes = {
        };
        this.originValidationPromises = {
        };
        this._redirectPersistence = browserSessionPersistence;
        this._completeRedirectFn = _getRedirectResult;
    }
    // Wrapping in async even though we don't await anywhere in order
    // to make sure errors are raised as promise rejections
    async _openPopup(auth46, provider3, authType, eventId) {
        var _a;
        debugAssert((_a = this.eventManagers[auth46._key()]) === null || _a === void 0 ? void 0 : _a.manager, '_initialize() not called before _openPopup()');
        const url = _getRedirectUrl(auth46, provider3, authType, _getCurrentUrl(), eventId);
        return _open(auth46, url, _generateEventId());
    }
    async _openRedirect(auth37, provider2, authType1, eventId1) {
        await this._originValidation(auth37);
        _setWindowLocation(_getRedirectUrl(auth37, provider2, authType1, _getCurrentUrl(), eventId1));
        return new Promise(()=>{
        });
    }
    _initialize(auth38) {
        const key = auth38._key();
        if (this.eventManagers[key]) {
            const { manager , promise  } = this.eventManagers[key];
            if (manager) return Promise.resolve(manager);
            else {
                debugAssert(promise, 'If manager is not set, promise should be');
                return promise;
            }
        }
        const promise = this.initAndGetManager(auth38);
        this.eventManagers[key] = {
            promise
        };
        // If the promise is rejected, the key should be removed so that the
        // operation can be retried later.
        promise.catch(()=>{
            delete this.eventManagers[key];
        });
        return promise;
    }
    async initAndGetManager(auth39) {
        const iframe = await _openIframe(auth39);
        const manager = new AuthEventManager(auth39);
        iframe.register('authEvent', (iframeEvent)=>{
            _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth39, "invalid-auth-event" /* INVALID_AUTH_EVENT */ );
            // TODO: Consider splitting redirect and popup events earlier on
            const handled = manager.onEvent(iframeEvent.authEvent);
            return {
                status: handled ? "ACK" /* ACK */  : "ERROR" /* ERROR */ 
            };
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        this.eventManagers[auth39._key()] = {
            manager
        };
        this.iframes[auth39._key()] = iframe;
        return manager;
    }
    _isIframeWebStorageSupported(auth40, cb1) {
        const iframe = this.iframes[auth40._key()];
        iframe.send(WEB_STORAGE_SUPPORT_KEY, {
            type: WEB_STORAGE_SUPPORT_KEY
        }, (result)=>{
            var _a;
            const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
            if (isSupported !== undefined) cb1(!!isSupported);
            _fail(auth40, "internal-error" /* INTERNAL_ERROR */ );
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    }
    _originValidation(auth41) {
        const key = auth41._key();
        if (!this.originValidationPromises[key]) this.originValidationPromises[key] = _validateOrigin(auth41);
        return this.originValidationPromises[key];
    }
    get _shouldInitProactively() {
        // Mobile browsers and Safari need to optimistically initialize
        return _isMobileBrowser() || _isSafari() || _isIOS();
    }
}
/**
 * An implementation of {@link PopupRedirectResolver} suitable for browser
 * based applications.
 *
 * @public
 */ const browserPopupRedirectResolver = BrowserPopupRedirectResolver;
class MultiFactorAssertionImpl {
    constructor(factorId1){
        this.factorId = factorId1;
    }
    _process(auth42, session, displayName1) {
        switch(session.type){
            case "enroll" /* ENROLL */ :
                return this._finalizeEnroll(auth42, session.credential, displayName1);
            case "signin" /* SIGN_IN */ :
                return this._finalizeSignIn(auth42, session.credential);
            default:
                return debugFail('unexpected MultiFactorSessionType');
        }
    }
}
/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */ class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
    constructor(credential){
        super("phone" /* PHONE */ );
        this.credential = credential;
    }
    /** @internal */ static _fromCredential(credential2) {
        return new PhoneMultiFactorAssertionImpl(credential2);
    }
    /** @internal */ _finalizeEnroll(auth43, idToken8, displayName2) {
        return finalizeEnrollPhoneMfa(auth43, {
            idToken: idToken8,
            displayName: displayName2,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
    }
    /** @internal */ _finalizeSignIn(auth44, mfaPendingCredential1) {
        return finalizeSignInPhoneMfa(auth44, {
            mfaPendingCredential: mfaPendingCredential1,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
    }
}
/**
 * Provider for generating a {@link PhoneMultiFactorAssertion}.
 *
 * @public
 */ class PhoneMultiFactorGenerator {
    constructor(){
    }
    /**
     * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
     *
     * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
     * @returns A {@link PhoneMultiFactorAssertion} which can be used with
     * {@link MultiFactorResolver.resolveSignIn}
     */ static assertion(credential3) {
        return PhoneMultiFactorAssertionImpl._fromCredential(credential3);
    }
}
/**
 * The identifier of the phone second factor: `phone`.
 */ PhoneMultiFactorGenerator.FACTOR_ID = 'phone';
var name1 = "@firebase/auth";
var version = "0.19.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AuthInterop {
    constructor(auth45){
        this.auth = auth45;
        this.internalListeners = new Map();
    }
    getUid() {
        var _a;
        this.assertAuthConfigured();
        return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
    }
    async getToken(forceRefresh3) {
        this.assertAuthConfigured();
        await this.auth._initializationPromise;
        if (!this.auth.currentUser) return null;
        const accessToken = await this.auth.currentUser.getIdToken(forceRefresh3);
        return {
            accessToken
        };
    }
    addAuthTokenListener(listener) {
        this.assertAuthConfigured();
        if (this.internalListeners.has(listener)) return;
        const unsubscribe = this.auth.onIdTokenChanged((user)=>{
            var _a;
            listener(((_a = user) === null || _a === void 0 ? void 0 : _a.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(listener, unsubscribe);
        this.updateProactiveRefresh();
    }
    removeAuthTokenListener(listener5) {
        this.assertAuthConfigured();
        const unsubscribe = this.internalListeners.get(listener5);
        if (!unsubscribe) return;
        this.internalListeners.delete(listener5);
        unsubscribe();
        this.updateProactiveRefresh();
    }
    assertAuthConfigured() {
        _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth" /* DEPENDENT_SDK_INIT_BEFORE_AUTH */ );
    }
    updateProactiveRefresh() {
        if (this.internalListeners.size > 0) this.auth._startProactiveRefresh();
        else this.auth._stopProactiveRefresh();
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getVersionForPlatform(clientPlatform) {
    switch(clientPlatform){
        case "Node" /* NODE */ :
            return 'node';
        case "ReactNative" /* REACT_NATIVE */ :
            return 'rn';
        case "Worker" /* WORKER */ :
            return 'webworker';
        case "Cordova" /* CORDOVA */ :
            return 'cordova';
        default:
            return undefined;
    }
}
/** @internal */ function registerAuth(clientPlatform) {
    _app._registerComponent(new _component.Component("auth" /* AUTH */ , (container, { options: deps  })=>{
        const app2 = container.getProvider('app').getImmediate();
        const { apiKey , authDomain  } = app2.options;
        return ((app)=>{
            _assert(apiKey && !apiKey.includes(':'), "invalid-api-key" /* INVALID_API_KEY */ , {
                appName: app.name
            });
            // Auth domain is optional if IdP sign in isn't being used
            _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(':')), "argument-error" /* ARGUMENT_ERROR */ , {
                appName: app.name
            });
            const config = {
                apiKey,
                authDomain,
                clientPlatform,
                apiHost: "identitytoolkit.googleapis.com" /* API_HOST */ ,
                tokenApiHost: "securetoken.googleapis.com" /* TOKEN_API_HOST */ ,
                apiScheme: "https" /* API_SCHEME */ ,
                sdkClientVersion: _getClientVersion(clientPlatform)
            };
            const authInstance = new AuthImpl(app, config);
            _initializeAuthInstance(authInstance, deps);
            return authInstance;
        })(app2);
    }, "PUBLIC" /* PUBLIC */ )/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */ .setInstantiationMode("EXPLICIT" /* EXPLICIT */ )/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */ .setInstanceCreatedCallback((container, _instanceIdentifier, _instance)=>{
        const authInternalProvider = container.getProvider("auth-internal" /* AUTH_INTERNAL */ );
        authInternalProvider.initialize();
    }));
    _app._registerComponent(new _component.Component("auth-internal" /* AUTH_INTERNAL */ , (container)=>{
        const auth47 = _castAuth(container.getProvider("auth" /* AUTH */ ).getImmediate());
        return ((auth)=>new AuthInterop(auth)
        )(auth47);
    }, "PRIVATE" /* PRIVATE */ ).setInstantiationMode("EXPLICIT" /* EXPLICIT */ ));
    _app.registerVersion(name1, version, getVersionForPlatform(clientPlatform));
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    _app.registerVersion(name1, version, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */ function getAuth(app = _app.getApp()) {
    const provider = _app._getProvider(app, 'auth');
    if (provider.isInitialized()) return provider.getImmediate();
    return initializeAuth(app, {
        popupRedirectResolver: browserPopupRedirectResolver,
        persistence: [
            indexedDBLocalPersistence,
            browserLocalPersistence,
            browserSessionPersistence
        ]
    });
}
registerAuth("Browser" /* BROWSER */ );

},{"@firebase/util":"3yszE","@firebase/app":"lLbXy","tslib":"j55WF","@firebase/logger":"arr7M","@firebase/component":"1wISm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j55WF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["lBB98","hD4hw"], "hD4hw", "parcelRequireacb1")

//# sourceMappingURL=register.379dd93c.js.map
