module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(3);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var head_Head = function Head(props) {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external_react_default.a.createElement("title", null, props.title || ''), external_react_default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.png"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external_react_default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Page/Parent/FlexDirection.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        flexDirection: 'row',
        transition: 'flex-direction 500ms ease-in-out'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: 85,
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexDirection_Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: 'row'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "flex-direction"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'row' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('row');
        }
      }, "row"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'row-reverse' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('row-reverse');
        }
      }, "row-reverse"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'column' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('column');
        }
      }, "column"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'column-reverse' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('column-reverse');
        }
      }, "column-reverse")), external_react_default.a.createElement("div", {
        className: "content",
        style: {
          flexDirection: value
        }
      }, external_react_default.a.createElement("div", {
        className: "box box-1"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-3"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-4"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-5"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexDirection = (Object(styles_["withStyles"])(styles)(FlexDirection_Index));
// CONCATENATED MODULE: ./components/Page/Parent/FlexWrap.js
function FlexWrap_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexWrap_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexWrap_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexWrap_typeof(obj); }

function FlexWrap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexWrap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexWrap_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexWrap_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexWrap_defineProperties(Constructor, staticProps); return Constructor; }

function FlexWrap_possibleConstructorReturn(self, call) { if (call && (FlexWrap_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexWrap_assertThisInitialized(self); }

function FlexWrap_getPrototypeOf(o) { FlexWrap_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexWrap_getPrototypeOf(o); }

function FlexWrap_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexWrap_setPrototypeOf(subClass, superClass); }

function FlexWrap_setPrototypeOf(o, p) { FlexWrap_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexWrap_setPrototypeOf(o, p); }

function FlexWrap_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexWrap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexWrap_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        flexWrap: 'no-wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: '50%',
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexWrap_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexWrap_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexWrap_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexWrap_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexWrap_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexWrap_defineProperty(FlexWrap_assertThisInitialized(FlexWrap_assertThisInitialized(_this)), "state", {
      value: 'nowrap'
    });

    FlexWrap_defineProperty(FlexWrap_assertThisInitialized(FlexWrap_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  FlexWrap_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "flex-wrap"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'nowrap' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('nowrap');
        }
      }, "nowrap"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'wrap' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('wrap');
        }
      }, "wrap"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'wrap-reverse' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('wrap-reverse');
        }
      }, "wrap-reverse")), external_react_default.a.createElement("div", {
        className: "content",
        style: {
          flexWrap: value
        }
      }, external_react_default.a.createElement("div", {
        className: "box box-1"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-3"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-4"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-5"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexWrap = (Object(styles_["withStyles"])(FlexWrap_styles)(FlexWrap_Index));
// CONCATENATED MODULE: ./components/Page/Parent/FlexFlow.js
function FlexFlow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexFlow_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexFlow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexFlow_typeof(obj); }

function FlexFlow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexFlow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexFlow_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexFlow_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexFlow_defineProperties(Constructor, staticProps); return Constructor; }

function FlexFlow_possibleConstructorReturn(self, call) { if (call && (FlexFlow_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexFlow_assertThisInitialized(self); }

function FlexFlow_getPrototypeOf(o) { FlexFlow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexFlow_getPrototypeOf(o); }

function FlexFlow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexFlow_setPrototypeOf(subClass, superClass); }

function FlexFlow_setPrototypeOf(o, p) { FlexFlow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexFlow_setPrototypeOf(o, p); }

function FlexFlow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexFlow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexFlow_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        flexWrap: 'no-wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: '50%',
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexFlow_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexFlow_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexFlow_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexFlow_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexFlow_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexFlow_defineProperty(FlexFlow_assertThisInitialized(FlexFlow_assertThisInitialized(_this)), "state", {
      direction: 'row',
      wrap: 'nowrap'
    });

    FlexFlow_defineProperty(FlexFlow_assertThisInitialized(FlexFlow_assertThisInitialized(_this)), "handleChangeDirection", function (value) {
      _this.setState({
        direction: value
      });
    });

    FlexFlow_defineProperty(FlexFlow_assertThisInitialized(FlexFlow_assertThisInitialized(_this)), "handleChangeWrap", function (value) {
      _this.setState({
        wrap: value
      });
    });

    return _this;
  }

  FlexFlow_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          direction = _this$state.direction,
          wrap = _this$state.wrap;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "flex-flow"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true,
        style: {
          fontSize: 10
        }
      }, "flex-direction"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(direction === 'row' && 'active')],
        onClick: function onClick() {
          return _this2.handleChangeDirection('row');
        }
      }, "row"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(direction === 'row-reverse' && 'active')],
        onClick: function onClick() {
          return _this2.handleChangeDirection('row-reverse');
        }
      }, "row-reverse"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(direction === 'column' && 'active')],
        onClick: function onClick() {
          return _this2.handleChangeDirection('column');
        }
      }, "column"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(direction === 'column-reverse' && 'active')],
        onClick: function onClick() {
          return _this2.handleChangeDirection('column-reverse');
        }
      }, "column-reverse")), external_react_default.a.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true,
        style: {
          fontSize: 10
        }
      }, "flex-wrap"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(wrap === 'nowrap' && 'active')],
        onClick: function onClick() {
          return _this2.handleChangeWrap('nowrap');
        }
      }, "nowrap"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(wrap === 'wrap' && 'active')],
        onClick: function onClick() {
          return _this2.handleChangeWrap('wrap');
        }
      }, "wrap"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(wrap === 'wrap-reverse' && 'active')],
        onClick: function onClick() {
          return _this2.handleChangeWrap('wrap-reverse');
        }
      }, "wrap-reverse")), external_react_default.a.createElement("div", {
        className: "content",
        style: {
          flexFlow: "".concat(direction, " ").concat(wrap)
        }
      }, external_react_default.a.createElement("div", {
        className: "box box-1"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-3"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-4"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-5"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexFlow = (Object(styles_["withStyles"])(FlexFlow_styles)(FlexFlow_Index));
// CONCATENATED MODULE: ./components/Page/Parent/FlexJustifyContent.js
function FlexJustifyContent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexJustifyContent_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexJustifyContent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexJustifyContent_typeof(obj); }

function FlexJustifyContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexJustifyContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexJustifyContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexJustifyContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexJustifyContent_defineProperties(Constructor, staticProps); return Constructor; }

function FlexJustifyContent_possibleConstructorReturn(self, call) { if (call && (FlexJustifyContent_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexJustifyContent_assertThisInitialized(self); }

function FlexJustifyContent_getPrototypeOf(o) { FlexJustifyContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexJustifyContent_getPrototypeOf(o); }

function FlexJustifyContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexJustifyContent_setPrototypeOf(subClass, superClass); }

function FlexJustifyContent_setPrototypeOf(o, p) { FlexJustifyContent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexJustifyContent_setPrototypeOf(o, p); }

function FlexJustifyContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexJustifyContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexJustifyContent_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        flexWrap: 'no-wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: 85,
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexJustifyContent_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexJustifyContent_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexJustifyContent_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexJustifyContent_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexJustifyContent_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexJustifyContent_defineProperty(FlexJustifyContent_assertThisInitialized(FlexJustifyContent_assertThisInitialized(_this)), "state", {
      value: 'flex-start'
    });

    FlexJustifyContent_defineProperty(FlexJustifyContent_assertThisInitialized(FlexJustifyContent_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  FlexJustifyContent_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "justify-content"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'flex-start' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('flex-start');
        }
      }, "flex-start"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'flex-end' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('flex-end');
        }
      }, "flex-end"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'center' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('center');
        }
      }, "center"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'space-between' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('space-between');
        }
      }, "space-between"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'space-around' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('space-around');
        }
      }, "space-around"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'space-evenly' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('space-evenly');
        }
      }, "space-evenly")), external_react_default.a.createElement("div", {
        className: "content",
        style: {
          justifyContent: value
        }
      }, external_react_default.a.createElement("div", {
        className: "box box-1"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-3"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-4"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-5"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexJustifyContent = (Object(styles_["withStyles"])(FlexJustifyContent_styles)(FlexJustifyContent_Index));
// CONCATENATED MODULE: ./components/Page/Parent/FlexAlignItems.js
function FlexAlignItems_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexAlignItems_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexAlignItems_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexAlignItems_typeof(obj); }

function FlexAlignItems_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexAlignItems_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexAlignItems_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexAlignItems_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexAlignItems_defineProperties(Constructor, staticProps); return Constructor; }

function FlexAlignItems_possibleConstructorReturn(self, call) { if (call && (FlexAlignItems_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexAlignItems_assertThisInitialized(self); }

function FlexAlignItems_getPrototypeOf(o) { FlexAlignItems_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexAlignItems_getPrototypeOf(o); }

function FlexAlignItems_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexAlignItems_setPrototypeOf(subClass, superClass); }

function FlexAlignItems_setPrototypeOf(o, p) { FlexAlignItems_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexAlignItems_setPrototypeOf(o, p); }

function FlexAlignItems_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexAlignItems_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexAlignItems_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        height: 225,
        display: 'flex',
        flexWrap: 'no-wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
        textAlign: 'center',
        minHeight: 50,
        width: 85,
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexAlignItems_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexAlignItems_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexAlignItems_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexAlignItems_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexAlignItems_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexAlignItems_defineProperty(FlexAlignItems_assertThisInitialized(FlexAlignItems_assertThisInitialized(_this)), "state", {
      value: 'flex-start'
    });

    FlexAlignItems_defineProperty(FlexAlignItems_assertThisInitialized(FlexAlignItems_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  FlexAlignItems_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "align-items"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'flex-start' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('flex-start');
        }
      }, "flex-start"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'flex-end' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('flex-end');
        }
      }, "flex-end"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'center' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('center');
        }
      }, "center"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'baseline' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('baseline');
        }
      }, "baseline"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'stretch' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('stretch');
        }
      }, "stretch")), external_react_default.a.createElement("div", {
        className: "content",
        style: {
          alignItems: value
        }
      }, external_react_default.a.createElement("div", {
        className: "box box-1"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "number 2")), external_react_default.a.createElement("div", {
        className: "box box-3"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-4"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "number 4")), external_react_default.a.createElement("div", {
        className: "box box-5"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexAlignItems = (Object(styles_["withStyles"])(FlexAlignItems_styles)(FlexAlignItems_Index));
// CONCATENATED MODULE: ./components/Page/Parent/FlexAlignContent.js
function FlexAlignContent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexAlignContent_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexAlignContent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexAlignContent_typeof(obj); }

function FlexAlignContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexAlignContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexAlignContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexAlignContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexAlignContent_defineProperties(Constructor, staticProps); return Constructor; }

function FlexAlignContent_possibleConstructorReturn(self, call) { if (call && (FlexAlignContent_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexAlignContent_assertThisInitialized(self); }

function FlexAlignContent_getPrototypeOf(o) { FlexAlignContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexAlignContent_getPrototypeOf(o); }

function FlexAlignContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexAlignContent_setPrototypeOf(subClass, superClass); }

function FlexAlignContent_setPrototypeOf(o, p) { FlexAlignContent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexAlignContent_setPrototypeOf(o, p); }

function FlexAlignContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexAlignContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexAlignContent_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        height: 225,
        flexWrap: 'wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        minHeight: 50,
        width: '25%',
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexAlignContent_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexAlignContent_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexAlignContent_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexAlignContent_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexAlignContent_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexAlignContent_defineProperty(FlexAlignContent_assertThisInitialized(FlexAlignContent_assertThisInitialized(_this)), "state", {
      value: 'flex-start'
    });

    FlexAlignContent_defineProperty(FlexAlignContent_assertThisInitialized(FlexAlignContent_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  FlexAlignContent_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "align-content"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'flex-start' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('flex-start');
        }
      }, "flex-start"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'flex-end' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('flex-end');
        }
      }, "flex-end"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'center' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('center');
        }
      }, "center"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'stretch' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('stretch');
        }
      }, "stretch"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'space-between' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('space-between');
        }
      }, "space-between"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 'space-around' && 'active')],
        onClick: function onClick() {
          return _this2.handleChange('space-around');
        }
      }, "space-around")), external_react_default.a.createElement("div", {
        className: "content",
        style: {
          alignContent: value
        }
      }, external_react_default.a.createElement("div", {
        className: "box box-1"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-3"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-4"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-5"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexAlignContent = (Object(styles_["withStyles"])(FlexAlignContent_styles)(FlexAlignContent_Index));
// CONCATENATED MODULE: ./components/Page/Child/FlexOrder.js
function FlexOrder_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexOrder_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexOrder_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexOrder_typeof(obj); }

function FlexOrder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexOrder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexOrder_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexOrder_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexOrder_defineProperties(Constructor, staticProps); return Constructor; }

function FlexOrder_possibleConstructorReturn(self, call) { if (call && (FlexOrder_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexOrder_assertThisInitialized(self); }

function FlexOrder_getPrototypeOf(o) { FlexOrder_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexOrder_getPrototypeOf(o); }

function FlexOrder_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexOrder_setPrototypeOf(subClass, superClass); }

function FlexOrder_setPrototypeOf(o, p) { FlexOrder_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexOrder_setPrototypeOf(o, p); }

function FlexOrder_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexOrder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexOrder_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        flexWrap: 'no-wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: '50%',
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexOrder_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexOrder_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexOrder_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexOrder_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexOrder_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexOrder_defineProperty(FlexOrder_assertThisInitialized(FlexOrder_assertThisInitialized(_this)), "state", {
      value: -1
    });

    FlexOrder_defineProperty(FlexOrder_assertThisInitialized(FlexOrder_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  FlexOrder_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "order"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === -1 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(-1);
        }
      }, "-1"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 0 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(0);
        }
      }, "0"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 1 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(1);
        }
      }, "1"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 5 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(5);
        }
      }, "5")), external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "box box-2",
        style: {
          order: 0
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-1",
        style: {
          order: value
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-2",
        style: {
          order: 2
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-2",
        style: {
          order: 3
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-2",
        style: {
          order: 4
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexOrder = (Object(styles_["withStyles"])(FlexOrder_styles)(FlexOrder_Index));
// CONCATENATED MODULE: ./components/Page/Child/FlexGrow.js
function FlexGrow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexGrow_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexGrow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexGrow_typeof(obj); }

function FlexGrow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexGrow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexGrow_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexGrow_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexGrow_defineProperties(Constructor, staticProps); return Constructor; }

function FlexGrow_possibleConstructorReturn(self, call) { if (call && (FlexGrow_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexGrow_assertThisInitialized(self); }

function FlexGrow_getPrototypeOf(o) { FlexGrow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexGrow_getPrototypeOf(o); }

function FlexGrow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexGrow_setPrototypeOf(subClass, superClass); }

function FlexGrow_setPrototypeOf(o, p) { FlexGrow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexGrow_setPrototypeOf(o, p); }

function FlexGrow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexGrow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexGrow_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        flexWrap: 'no-wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: 85,
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexGrow_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexGrow_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexGrow_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexGrow_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexGrow_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexGrow_defineProperty(FlexGrow_assertThisInitialized(FlexGrow_assertThisInitialized(_this)), "state", {
      value: 0
    });

    FlexGrow_defineProperty(FlexGrow_assertThisInitialized(FlexGrow_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  FlexGrow_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "flex-grow"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 0 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(0);
        }
      }, "0"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 1 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(1);
        }
      }, "1")), external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-1",
        style: {
          flexGrow: value
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexGrow = (Object(styles_["withStyles"])(FlexGrow_styles)(FlexGrow_Index));
// CONCATENATED MODULE: ./components/Page/Child/FlexShrink.js
function FlexShrink_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexShrink_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexShrink_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexShrink_typeof(obj); }

function FlexShrink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexShrink_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexShrink_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexShrink_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexShrink_defineProperties(Constructor, staticProps); return Constructor; }

function FlexShrink_possibleConstructorReturn(self, call) { if (call && (FlexShrink_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexShrink_assertThisInitialized(self); }

function FlexShrink_getPrototypeOf(o) { FlexShrink_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexShrink_getPrototypeOf(o); }

function FlexShrink_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexShrink_setPrototypeOf(subClass, superClass); }

function FlexShrink_setPrototypeOf(o, p) { FlexShrink_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexShrink_setPrototypeOf(o, p); }

function FlexShrink_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexShrink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FlexShrink_styles = function styles(theme) {
  return {
    root: {
      marginBottom: 50,
      '& .content': {
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        padding: '25px 20px',
        display: 'flex',
        flexWrap: 'no-wrap'
      },
      '& .box': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: '50%',
        '& h6': {
          color: '#000',
          fontWeight: 600,
          margin: 0
        },
        '&.box-1': {
          backgroundColor: '#69f0ae'
        },
        '&.box-2': {
          backgroundColor: '#40c4ff'
        },
        '&.box-3': {
          backgroundColor: '#7c4dff'
        },
        '&.box-4': {
          backgroundColor: '#ff5252'
        },
        '&.box-5': {
          backgroundColor: '#ffd740'
        }
      }
    },
    button: {
      padding: '5px 8px',
      minHeight: 24,
      margin: '0 5px',
      marginBottom: 10,
      '& span': {
        fontSize: 12
      },
      '&.active': {
        backgroundColor: '#2196f3',
        color: '#fff'
      }
    }
  };
};

var FlexShrink_Index =
/*#__PURE__*/
function (_React$Component) {
  FlexShrink_inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    FlexShrink_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FlexShrink_possibleConstructorReturn(this, (_getPrototypeOf2 = FlexShrink_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    FlexShrink_defineProperty(FlexShrink_assertThisInitialized(FlexShrink_assertThisInitialized(_this)), "state", {
      value: 0
    });

    FlexShrink_defineProperty(FlexShrink_assertThisInitialized(FlexShrink_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  FlexShrink_createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, "flex-grow"), external_react_default.a.createElement("div", {
        style: {
          marginTop: 10,
          textAlign: 'center'
        }
      }, external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 0 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(0);
        }
      }, "0"), external_react_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        className: [classes.button, "".concat(value === 1 && 'active')],
        onClick: function onClick() {
          return _this2.handleChange(1);
        }
      }, "1")), external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "1")), external_react_default.a.createElement("div", {
        className: "box box-1",
        style: {
          flexShrink: value
        }
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "2")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "3")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "4")), external_react_default.a.createElement("div", {
        className: "box box-2"
      }, external_react_default.a.createElement(core_["Typography"], {
        variant: "h6",
        gutterBottom: true
      }, "5"))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var FlexShrink = (Object(styles_["withStyles"])(FlexShrink_styles)(FlexShrink_Index));
// CONCATENATED MODULE: ./components/Page/index.js
function Page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Page_typeof = function _typeof(obj) { return typeof obj; }; } else { Page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Page_typeof(obj); }

function Page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Page_createClass(Constructor, protoProps, staticProps) { if (protoProps) Page_defineProperties(Constructor.prototype, protoProps); if (staticProps) Page_defineProperties(Constructor, staticProps); return Constructor; }

function Page_possibleConstructorReturn(self, call) { if (call && (Page_typeof(call) === "object" || typeof call === "function")) { return call; } return Page_assertThisInitialized(self); }

function Page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Page_getPrototypeOf(o) { Page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Page_getPrototypeOf(o); }

function Page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Page_setPrototypeOf(subClass, superClass); }

function Page_setPrototypeOf(o, p) { Page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Page_setPrototypeOf(o, p); }
















var Page_styles = function styles(theme) {
  return {
    root: {
      backgroundColor: '#fafafa',
      '& .container': {
        paddingRight: 15,
        paddingLeft: 15,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: 1300
      },
      '& h5': {
        marginBottom: 15
      },
      '& button': {
        padding: '4px 8px !important',
        textTransform: 'lowercase',
        '& span': {
          fontSize: '14px !important'
        }
      }
    }
  };
};

var Page_Index =
/*#__PURE__*/
function (_React$Component) {
  Page_inherits(Index, _React$Component);

  function Index() {
    Page_classCallCheck(this, Index);

    return Page_possibleConstructorReturn(this, Page_getPrototypeOf(Index).apply(this, arguments));
  }

  Page_createClass(Index, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(head, {
        title: "Flexbox Demo"
      }), external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement(core_["Grid"], {
        container: true,
        spacing: 24
      }, external_react_default.a.createElement(core_["Grid"], {
        item: true,
        xs: 6
      }, external_react_default.a.createElement(FlexDirection, null), external_react_default.a.createElement(FlexWrap, null), external_react_default.a.createElement(FlexFlow, null), external_react_default.a.createElement(FlexJustifyContent, null), external_react_default.a.createElement(FlexAlignItems, null), external_react_default.a.createElement(FlexAlignContent, null)), external_react_default.a.createElement(core_["Grid"], {
        item: true,
        xs: 6
      }, external_react_default.a.createElement(FlexOrder, null), external_react_default.a.createElement(FlexGrow, null), external_react_default.a.createElement(FlexShrink, null)))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var Page = (Object(styles_["withStyles"])(Page_styles)(Page_Index));
// CONCATENATED MODULE: ./pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }




var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index() {
    pages_classCallCheck(this, Index);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).apply(this, arguments));
  }

  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Page, null));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);