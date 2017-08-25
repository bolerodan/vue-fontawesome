(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFa"] = factory();
	else
		root["VueFa"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fa = __webpack_require__(1);

var _fa2 = _interopRequireDefault(_fa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueFa = function VueFa(Vue) {
  Vue.component('fa', _fa2.default);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFa);
}

exports.default = VueFa;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    icon: {
      required: true,
      type: String
    },
    prefix: {
      required: false,
      type: String,
      default: 'fa'
    },
    transform: {
      required: false,
      type: String
    },
    compose: {
      required: false,
      type: String
    }
  },
  data: function data() {
    return {
      foundIcon: undefined,
      booted: false
    };
  },

  computed: {
    prefixIconName: function prefixIconName() {
      return this.prefix + ' fa-' + this.icon;
    }
  },
  created: function created() {
    // Font Awesome listens for DOMContentLoaded before its API is available on window.
    if (document.readyState !== 'complete' || document.readyState !== 'loaded') {
      document.addEventListener('DOMContentLoaded', this.initFa);
    } else {
      this.initFa();
    }
  },

  methods: {
    initFa: function initFa() {
      this.faAPI = window.FontAwesome;
      this.getIconDef();
      this.booted = true; // we can now render
      document.removeEventListener('DOMContentLoaded', this.initFa); // no longer needed so remove listener.
    },
    getIconDef: function getIconDef() {
      var iconDef = this.faAPI.parse.iconFromPack(this.prefix + ' ' + this.prefixIconName);
      var options = {
        transform: this.getTransform(),
        compose: this.getComposition()
      };
      this.foundIcon = this.faAPI.icon(iconDef, options);
    },
    getTransform: function getTransform() {
      return this.faAPI.parse.transform(this.transform);
    },
    getComposition: function getComposition() {
      if (this.compose) {
        return this.faAPI.parse.iconFromPack(this.compose);
      }
    },
    getChildren: function getChildren(children, h) {
      var _this = this;

      if (!children) return [];
      return children.map(function (c) {
        var key = '' + _this.prefixIconName;
        key = c.attributes ? key + '-' + c.attributes.id : key;
        return h(c.tag, {
          key: key,
          attrs: c.attributes
        }, _this.getChildren(c.children, h));
      });
    }
  },
  render: function render(h) {
    if (!this.booted) return; // only render when we know FontAwesome is done since it listens for DOMContentLoaded
    var abstract = this.foundIcon.abstract[0];
    console.log('ABSTRACT', abstract);
    var children = this.getChildren(abstract.children, h);
    var svg = h(abstract.tag, {
      key: this.prefixIconName,
      attrs: abstract.attributes,
      class: abstract.attributes.class
    }, children);
    return svg;
  },

  watch: {
    prefixIconName: function prefixIconName() {
      this.getIconDef();
    },
    transform: function transform() {
      this.getIconDef();
    },
    compose: function compose() {
      this.getIconDef();
    }
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-fontawesome5.js.map