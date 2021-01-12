'use strict';
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/utils.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/utils.js":
/*!****************************!*\
  !*** ./source/js/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


eval("\n\n(function () {\n  var ACTIVE_ITEM_TAG = 'tourinfo__item--active';\n  var ACTIVE_BUTTON_TAG = 'tourinfo__button--active';\n  var HIDDEN_TAG = 'visually-hidden';\n  var ESCAPE_BUTTON = 'Escape';\n  var REGEX_ANCOR = /#.*/gi;\n  var BUTTON_BUY = 'popup-button';\n  var tourInfoButtons = document.querySelectorAll('.tourinfo__button');\n  var tourInfoItems = document.querySelectorAll('.tourinfo__item');\n  var POPUP_CLASS = '.buy';\n\n  var isEscEvent = function (evt, action) {\n    if (evt.key === ESCAPE_BUTTON) {\n      evt.preventDefault();\n      action(evt);\n    }\n  };\n\n  var getButtonActive = function (button) {\n    return button.classList.contains(ACTIVE_BUTTON_TAG);\n  };\n\n  var getItemActive = function (item) {\n    return item.classList.contains(window.utils.ACTIVE_ITEM_TAG);\n  };\n\n  var changeCountryInfo = function () {\n    var buttonActive = getArray(tourInfoButtons).filter(getButtonActive)[0];\n    var itemActive = getArray(tourInfoItems).filter(getItemActive)[0];\n    buttonActive.classList.remove(ACTIVE_BUTTON_TAG);\n    itemActive.classList.remove(ACTIVE_ITEM_TAG);\n  };\n\n  var getArray = function (nodes) {\n    return Array.from(nodes);\n  };\n\n  var findItem = function (activeItem, item) {\n    return item.classList.toString().match(activeItem) ? item : null;\n  };\n\n  var isClosestPopupTag = function (item) {\n    return item.closest(POPUP_CLASS);\n  };\n\n  var focusBlock = function (block) {\n    block.tabIndex = 1;\n    block.focus();\n  };\n\n  var unfocusBlock = function (block) {\n    block.tabIndex = 0;\n  };\n\n  window.utils = {\n    ACTIVE_ITEM_TAG: ACTIVE_ITEM_TAG,\n    ACTIVE_BUTTON_TAG: ACTIVE_BUTTON_TAG,\n    REGEX_ANCOR: REGEX_ANCOR,\n    HIDDEN_TAG: HIDDEN_TAG,\n    BUTTON_BUY: BUTTON_BUY,\n    isEscEvent: isEscEvent,\n    changeCountryInfo: changeCountryInfo,\n    getArray: getArray,\n    findItem: findItem,\n    isClosestPopupTag: isClosestPopupTag,\n    focusBlock: focusBlock,\n    unfocusBlock: unfocusBlock\n  };\n})();\n/*function mask(evt) {\n\n  var matrix = \"+7 (___) ___ ____\",\n\n      i = 0,\n\n      def = matrix.replace(/\\D/g, \"\"),\n\n      val = this.value.replace(/\\D/g, \"\");\n\n  if (def.length >= val.length) val = def;\n\n  this.value = matrix.replace(/./g, function(a) {\n\n      return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\n\n  });\n\n  if (evt.type == \"blur\") {\n\n      if (this.value.length == 2) this.value = \"\"\n\n  } else setCursorPosition(this.value.length, this)\n\n};\n\n  var input = document.querySelector(\"#tel\");\n\n  input.addEventListener(\"input\", mask, false);\n\n  input.addEventListener(\"focus\", mask, false);\n\n  input.addEventListener(\"blur\", mask, false);\n\n})*/\n\n//# sourceURL=webpack:///./source/js/utils.js?");

/***/ })

/******/ });