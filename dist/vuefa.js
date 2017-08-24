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
'filehash +bQ2KXfbrCwmOFELQXTPj/KHeuM=';

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
      required: true
    },
    prefix: {
      required: false,
      default: 'fa'
    },
    transform: {
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
    var _this = this;

    // Font Awesome listens for DOMContentLoaded before its API is available on window.
    if (document.readyState !== 'complete' || document.readyState !== 'loaded') {
      document.addEventListener('DOMContentLoaded', function () {
        return _this.initFa();
      });
    } else {
      this.initFa();
    }
  },

  methods: {
    initFa: function initFa() {
      this.faAPI = window.FontAwesome;
      this.getIconDef();
      this.booted = true; // we can now render
      document.removeEventListener('DOMContentLoaded', this.initFa); // no longer needed
    },
    getIconDef: function getIconDef() {
      this.iconDef = this.faAPI.parse.iconFromPack(this.prefix + ' ' + this.prefixIconName);
      var options = {
        transform: this.getTransform()
      };
      this.foundIcon = this.faAPI.icon(this.iconDef, options);
    },
    getTransform: function getTransform() {
      return this.faAPI.parse.transform(this.transform);
    }
  },
  render: function render(h) {
    var _this2 = this;

    if (!this.booted) return; // only render when we know FontAwesome is done since it listens for DOMContentLoaded
    var abstract = this.foundIcon.abstract[0];
    var children = abstract.children.map(function (c) {
      return h(c.tag, {
        key: _this2.prefixIconName,
        attrs: c.attributes
      });
    });
    var svg = h(abstract.tag, {
      key: this.prefixIconName,
      attrs: abstract.attributes,
      class: abstract.attributes.class
    }, children);
    return svg;
  },

  watch: {
    prefixIconName: function prefixIconName(val) {
      this.getIconDef();
    },
    transform: function transform(val) {
      this.getIconDef();
    }
  }
};
'filehash bwTcQ3tuzMMCCXJDiu7k0WBlm0I=';

/***/ })
/******/ ]);
});
//# sourceMappingURL=vuefa.js.map