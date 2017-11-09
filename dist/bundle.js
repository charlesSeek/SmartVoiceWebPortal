webpackJsonp([0],{

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(385);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__(345);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Group = __webpack_require__(791);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Checkbox2['default'].Group = _Group2['default'];
exports['default'] = _Checkbox2['default'];
module.exports = exports['default'];

/***/ },

/***/ 1074:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1075:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1076:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1077:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1078:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1079:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1080:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1081:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1082:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1083:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1084:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1085:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1086:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1087:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1088:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1089:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1090:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1091:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1092:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1093:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1094:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1095:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1096:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1097:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1098:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1099:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1100:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1101:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1102:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1103:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1104:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1105:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1106:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1107:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1108:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1109:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1110:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1111:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1112:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1113:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1114:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 1137:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c0bfa259d187ea4858441db8cb0c3686.png";

/***/ },

/***/ 1138:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "57496d97a2a43e6e69769bfa1d0d4d8a.jpg";

/***/ },

/***/ 1139:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01f0a3bc0107d20eab616a6bb0df50ad.png";

/***/ },

/***/ 1140:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e7b22c80a7fe102a7a2fcbc6a42b5ae7.png";

/***/ },

/***/ 1141:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66d06eb6c8f73ff0473240a895bfdc54.png";

/***/ },

/***/ 1142:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b413992aefe8d253fd769edc074161fc.jpeg";

/***/ },

/***/ 1143:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85aea31c0e0acd6248fc48ea964a6b97.jpeg";

/***/ },

/***/ 1144:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4156be3e84617f99915966ac1b63d7d3.png";

/***/ },

/***/ 1145:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ecfbe7a20da2eb77a671f3c3d6ff7a4.png";

/***/ },

/***/ 1146:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "707e5256359f4e079f5c1443838852a2.jpeg";

/***/ },

/***/ 1147:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b12dc0ea7c52264428719bc191a7a88.png";

/***/ },

/***/ 1148:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "20e014c04f606975e9139a4339e9695b.pdf";

/***/ },

/***/ 1155:
/***/ function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = __webpack_require__(117);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Grid = __webpack_require__(788);

var _Grid2 = _interopRequireDefault(_Grid);

var _throttleByAnimationFrame = __webpack_require__(782);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3["default"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Card = function (_Component) {
    (0, _inherits3["default"])(Card, _Component);

    function Card() {
        (0, _classCallCheck3["default"])(this, Card);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));

        _this.state = {
            widerPadding: false
        };
        _this.saveRef = function (node) {
            _this.container = node;
        };
        return _this;
    }

    (0, _createClass3["default"])(Card, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateWiderPadding();
            this.resizeEvent = (0, _addEventListener2["default"])(window, 'resize', this.updateWiderPadding);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.resizeEvent) {
                this.resizeEvent.remove();
            }
            this.updateWiderPadding.cancel();
        }
    }, {
        key: "updateWiderPadding",
        value: function updateWiderPadding() {
            var _this2 = this;

            if (!this.container) {
                return;
            }
            // 936 is a magic card width pixer number indicated by designer
            var WIDTH_BOUDARY_PX = 936;
            if (this.container.offsetWidth >= WIDTH_BOUDARY_PX && !this.state.widerPadding) {
                this.setState({ widerPadding: true }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
            if (this.container.offsetWidth < WIDTH_BOUDARY_PX && this.state.widerPadding) {
                this.setState({ widerPadding: false }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
        }
    }, {
        key: "isContainGrid",
        value: function isContainGrid() {
            var containGrid = void 0;
            _react.Children.forEach(this.props.children, function (element) {
                if (element && element.type && element.type === _Grid2["default"]) {
                    containGrid = true;
                }
            });
            return containGrid;
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames;

            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-card' : _a$prefixCls,
                className = _a.className,
                extra = _a.extra,
                bodyStyle = _a.bodyStyle,
                noHovering = _a.noHovering,
                title = _a.title,
                loading = _a.loading,
                _a$bordered = _a.bordered,
                bordered = _a$bordered === undefined ? true : _a$bordered,
                others = __rest(_a, ["prefixCls", "className", "extra", "bodyStyle", "noHovering", "title", "loading", "bordered"]);
            var children = this.props.children;
            var classString = (0, _classnames2["default"])(prefixCls, className, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + "-loading", loading), (0, _defineProperty3["default"])(_classNames, prefixCls + "-bordered", bordered), (0, _defineProperty3["default"])(_classNames, prefixCls + "-no-hovering", noHovering), (0, _defineProperty3["default"])(_classNames, prefixCls + "-wider-padding", this.state.widerPadding), (0, _defineProperty3["default"])(_classNames, prefixCls + "-padding-transition", this.updateWiderPaddingCalled), (0, _defineProperty3["default"])(_classNames, prefixCls + "-contain-grid", this.isContainGrid()), _classNames));
            if (loading) {
                children = _react2["default"].createElement(
                    "div",
                    { className: prefixCls + "-loading-content" },
                    _react2["default"].createElement("p", { className: prefixCls + "-loading-block", style: { width: '94%' } }),
                    _react2["default"].createElement(
                        "p",
                        null,
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '28%' } }),
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '62%' } })
                    ),
                    _react2["default"].createElement(
                        "p",
                        null,
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '22%' } }),
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '66%' } })
                    ),
                    _react2["default"].createElement(
                        "p",
                        null,
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '56%' } }),
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '39%' } })
                    ),
                    _react2["default"].createElement(
                        "p",
                        null,
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '21%' } }),
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '15%' } }),
                        _react2["default"].createElement("span", { className: prefixCls + "-loading-block", style: { width: '40%' } })
                    )
                );
            }
            var head = void 0;
            if (title || extra) {
                head = _react2["default"].createElement(
                    "div",
                    { className: prefixCls + "-head" },
                    title ? _react2["default"].createElement(
                        "div",
                        { className: prefixCls + "-head-title" },
                        title
                    ) : null,
                    extra ? _react2["default"].createElement(
                        "div",
                        { className: prefixCls + "-extra" },
                        extra
                    ) : null
                );
            }
            return _react2["default"].createElement(
                "div",
                (0, _extends3["default"])({}, others, { className: classString, ref: this.saveRef }),
                head,
                _react2["default"].createElement(
                    "div",
                    { className: prefixCls + "-body", style: bodyStyle },
                    children
                )
            );
        }
    }]);
    return Card;
}(_react.Component);

exports["default"] = Card;

Card.Grid = _Grid2["default"];
__decorate([(0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)()], Card.prototype, "updateWiderPadding", null);
module.exports = exports["default"];

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1077);

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcMenu = __webpack_require__(78);

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = __webpack_require__(781);

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

var _MenuItem = __webpack_require__(807);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Menu = function (_React$Component) {
    (0, _inherits3['default'])(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3['default'])(this, Menu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.inlineOpenKeys = [];
        _this.handleClick = function (e) {
            _this.handleOpenChange([]);
            var onClick = _this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        };
        _this.handleOpenChange = function (openKeys) {
            _this.setOpenKeys(openKeys);
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(openKeys);
            }
        };
        (0, _warning2['default'])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: https://u.ant.design/menu-on-open-change.');
        (0, _warning2['default'])(!('inlineCollapsed' in props && props.mode !== 'inline'), '`inlineCollapsed` should only be used when Menu\'s `mode` is inline.');
        var openKeys = void 0;
        if ('defaultOpenKeys' in props) {
            openKeys = props.defaultOpenKeys;
        } else if ('openKeys' in props) {
            openKeys = props.openKeys;
        }
        _this.state = {
            openKeys: openKeys || []
        };
        return _this;
    }

    (0, _createClass3['default'])(Menu, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                inlineCollapsed: this.getInlineCollapsed()
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
            if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
                this.switchModeFromInline = true;
            }
            if (nextProps.inlineCollapsed && !this.props.inlineCollapsed || nextContext.siderCollapsed && !this.context.siderCollapsed) {
                this.switchModeFromInline = !!this.state.openKeys.length;
                this.inlineOpenKeys = this.state.openKeys;
                this.handleOpenChange([]);
            }
            if (!nextProps.inlineCollapsed && this.props.inlineCollapsed || !nextContext.siderCollapsed && this.context.siderCollapsed) {
                this.handleOpenChange(this.inlineOpenKeys);
                this.inlineOpenKeys = [];
            }
            if ('openKeys' in nextProps) {
                this.setState({ openKeys: nextProps.openKeys });
            }
        }
    }, {
        key: 'setOpenKeys',
        value: function setOpenKeys(openKeys) {
            if (!('openKeys' in this.props)) {
                this.setState({ openKeys: openKeys });
            }
        }
    }, {
        key: 'getRealMenuMode',
        value: function getRealMenuMode() {
            var inlineCollapsed = this.getInlineCollapsed();
            if (this.switchModeFromInline && inlineCollapsed && !('openKeys' in this.props)) {
                return 'inline';
            }
            var mode = this.props.mode;

            return inlineCollapsed ? 'vertical' : mode;
        }
    }, {
        key: 'getInlineCollapsed',
        value: function getInlineCollapsed() {
            var inlineCollapsed = this.props.inlineCollapsed;

            if (this.context.siderCollapsed !== undefined) {
                return this.context.siderCollapsed;
            }
            return inlineCollapsed;
        }
    }, {
        key: 'getMenuOpenAnimation',
        value: function getMenuOpenAnimation(menuMode) {
            var _this2 = this;

            var _props = this.props,
                openAnimation = _props.openAnimation,
                openTransitionName = _props.openTransitionName;

            var menuOpenAnimation = openAnimation || openTransitionName;
            if (openAnimation === undefined && openTransitionName === undefined) {
                switch (menuMode) {
                    case 'horizontal':
                        menuOpenAnimation = 'slide-up';
                        break;
                    case 'vertical':
                        // When mode switch from inline
                        // submenu should hide without animation
                        if (this.switchModeFromInline) {
                            menuOpenAnimation = '';
                            this.switchModeFromInline = false;
                        } else {
                            menuOpenAnimation = 'zoom-big';
                        }
                        break;
                    case 'inline':
                        menuOpenAnimation = (0, _extends3['default'])({}, _openAnimation2['default'], { leave: function leave(node, done) {
                                return _openAnimation2['default'].leave(node, function () {
                                    // Make sure inline menu leave animation finished before mode is switched
                                    _this2.switchModeFromInline = false;
                                    _this2.setState({});
                                    done();
                                });
                            } });
                        break;
                    default:
                }
            }
            return menuOpenAnimation;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                theme = _props2.theme;

            var menuMode = this.getRealMenuMode();
            var menuOpenAnimation = this.getMenuOpenAnimation(menuMode);
            var menuClassName = (0, _classnames2['default'])(className, prefixCls + '-' + theme, (0, _defineProperty3['default'])({}, prefixCls + '-inline-collapsed', this.getInlineCollapsed()));
            var menuProps = {
                openKeys: this.state.openKeys,
                onOpenChange: this.handleOpenChange,
                className: menuClassName,
                mode: menuMode
            };
            if (menuMode !== 'inline') {
                // closing vertical popup submenu after click it
                menuProps.onClick = this.handleClick;
                menuProps.openTransitionName = menuOpenAnimation;
            } else {
                menuProps.openAnimation = menuOpenAnimation;
            }
            return _react2['default'].createElement(_rcMenu2['default'], (0, _extends3['default'])({}, this.props, menuProps));
        }
    }]);
    return Menu;
}(_react2['default'].Component);

exports['default'] = Menu;

Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem2['default'];
Menu.SubMenu = _rcMenu.SubMenu;
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.defaultProps = {
    prefixCls: 'ant-menu',
    className: '',
    theme: 'light'
};
Menu.childContextTypes = {
    inlineCollapsed: _propTypes2['default'].bool
};
Menu.contextTypes = {
    siderCollapsed: _propTypes2['default'].bool
};
module.exports = exports['default'];

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _Modal = __webpack_require__(354);

var _Modal2 = _interopRequireDefault(_Modal);

var _confirm = __webpack_require__(809);

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Modal2['default'].info = function (props) {
    var config = (0, _extends3['default'])({ type: 'info', iconType: 'info-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].success = function (props) {
    var config = (0, _extends3['default'])({ type: 'success', iconType: 'check-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].error = function (props) {
    var config = (0, _extends3['default'])({ type: 'error', iconType: 'cross-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].warning = _Modal2['default'].warn = function (props) {
    var config = (0, _extends3['default'])({ type: 'warning', iconType: 'exclamation-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].confirm = function (props) {
    var config = (0, _extends3['default'])({ type: 'confirm', okCancel: true }, props);
    return (0, _confirm2['default'])(config);
};
exports['default'] = _Modal2['default'];
module.exports = exports['default'];

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1086);

__webpack_require__(19);

/***/ },

/***/ 1331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.
var factory = __webpack_require__(567);
module.exports = function(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factory(isValidElement, throwOnDirectAccess);
};


/***/ },

/***/ 1385:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domScrollIntoView = __webpack_require__(136);

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _has = __webpack_require__(112);

var _has2 = _interopRequireDefault(_has);

var _createBaseForm = __webpack_require__(590);

var _createBaseForm2 = _interopRequireDefault(_createBaseForm);

var _createForm = __webpack_require__(1387);

var _utils = __webpack_require__(275);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function computedStyle(el, prop) {
  var getComputedStyle = window.getComputedStyle;
  var style =
  // If we have getComputedStyle
  getComputedStyle ?
  // Query it
  // TODO: From CSS-Query notes, we might need (node, null) for FF
  getComputedStyle(el) :

  // Otherwise, we are in IE and use currentStyle
  el.currentStyle;
  if (style) {
    return style[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })];
  }
  return undefined;
}

function getScrollableContainer(n) {
  var node = n;
  var nodeName = void 0;
  /* eslint no-cond-assign:0 */
  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
    var overflowY = computedStyle(node, 'overflowY');
    // https://stackoverflow.com/a/36900407/3040605
    if (node !== n && (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode;
  }
  return nodeName === 'body' ? node.ownerDocument : node;
}

var mixin = {
  getForm: function getForm() {
    return (0, _extends3['default'])({}, _createForm.mixin.getForm.call(this), {
      validateFieldsAndScroll: this.validateFieldsAndScroll
    });
  },
  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
    var _this = this;

    var _getParams = (0, _utils.getParams)(ns, opt, cb),
        names = _getParams.names,
        callback = _getParams.callback,
        options = _getParams.options;

    var newCb = function newCb(error, values) {
      if (error) {
        var validNames = _this.fieldsStore.getValidFieldsName();
        var firstNode = void 0;
        var firstTop = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = validNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            if ((0, _has2['default'])(error, name)) {
              var instance = _this.getFieldInstance(name);
              if (instance) {
                var node = _reactDom2['default'].findDOMNode(instance);
                var top = node.getBoundingClientRect().top;
                if (firstTop === undefined || firstTop > top) {
                  firstTop = top;
                  firstNode = node;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (firstNode) {
          var c = options.container || getScrollableContainer(firstNode);
          (0, _domScrollIntoView2['default'])(firstNode, c, (0, _extends3['default'])({
            onlyScrollIfNeeded: true
          }, options.scroll));
        }
      }

      if (typeof callback === 'function') {
        callback(error, values);
      }
    };

    return this.validateFields(names, options, newCb);
  }
};

function createDOMForm(option) {
  return (0, _createBaseForm2['default'])((0, _extends3['default'])({}, option), [mixin]);
}

exports['default'] = createDOMForm;
module.exports = exports['default'];

/***/ },

/***/ 1386:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

exports['default'] = createFieldsStore;

var _get = __webpack_require__(186);

var _get2 = _interopRequireDefault(_get);

var _has = __webpack_require__(112);

var _has2 = _interopRequireDefault(_has);

var _set = __webpack_require__(187);

var _set2 = _interopRequireDefault(_set);

var _utils = __webpack_require__(275);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var atom = {};

var FieldsStore = function () {
  function FieldsStore(fields) {
    (0, _classCallCheck3['default'])(this, FieldsStore);

    _initialiseProps.call(this);

    this.fields = fields;
    this.fieldsMeta = {};
  }

  (0, _createClass3['default'])(FieldsStore, [{
    key: 'replaceFields',
    value: function replaceFields(fields) {
      this.fields = fields;
    }
  }, {
    key: 'setFields',
    value: function setFields(fields) {
      var _this = this;

      var fieldsMeta = this.fieldsMeta;
      var nowFields = (0, _extends3['default'])({}, this.fields, fields);
      var nowValues = {};
      Object.keys(fieldsMeta).forEach(function (f) {
        var _getNameIfNested = (0, _utils.getNameIfNested)(f),
            name = _getNameIfNested.name,
            isNested = _getNameIfNested.isNested;

        if (isNested && fieldsMeta[name].exclusive) {
          return;
        }
        nowValues[f] = _this.getValueFromFields(f, nowFields);
      });
      Object.keys(nowValues).forEach(function (f) {
        var value = nowValues[f];
        var fieldMeta = fieldsMeta[f];
        if (fieldMeta && fieldMeta.normalize) {
          var nowValue = fieldMeta.normalize(value, _this.getValueFromFields(f, _this.fields), nowValues);
          if (nowValue !== value) {
            nowFields[f] = (0, _extends3['default'])({}, nowFields[f], {
              value: nowValue
            });
          }
        }
      });
      this.fields = nowFields;
    }
  }, {
    key: 'resetFields',
    value: function resetFields(ns) {
      var newFields = {};
      var fields = this.fields;

      var names = ns || Object.keys(fields);
      names.forEach(function (name) {
        var field = fields[name];
        if (field && 'value' in field) {
          newFields[name] = {};
        }
      });
      return newFields;
    }
  }, {
    key: 'getValueFromFieldsInternal',
    value: function getValueFromFieldsInternal(name, fields) {
      var field = fields[name];
      if (field && 'value' in field) {
        return field.value;
      }
      var fieldMeta = this.fieldsMeta[name];
      return fieldMeta && fieldMeta.initialValue;
    }
  }, {
    key: 'getValueFromFields',
    value: function getValueFromFields(name, fields) {
      var _this2 = this;

      var fieldsMeta = this.fieldsMeta;

      if (fieldsMeta[name] && fieldsMeta[name].virtual) {
        var ret = {};
        Object.keys(fieldsMeta).forEach(function (fieldKey) {
          var nameIfNested = (0, _utils.getNameIfNested)(fieldKey);
          if (nameIfNested.name === name && nameIfNested.isNested) {
            (0, _set2['default'])(ret, fieldKey, _this2.getValueFromFieldsInternal(fieldKey, fields));
          }
        });
        return ret[name];
      }
      return this.getValueFromFieldsInternal(name, fields);
    }
  }, {
    key: 'getValidFieldsName',
    value: function getValidFieldsName() {
      var fieldsMeta = this.fieldsMeta;
      return fieldsMeta ? Object.keys(fieldsMeta).filter(function (name) {
        return !fieldsMeta[name].hidden;
      }) : [];
    }
  }, {
    key: 'getFieldValuePropValue',
    value: function getFieldValuePropValue(fieldMeta) {
      var exclusive = fieldMeta.exclusive,
          leadingName = fieldMeta.leadingName,
          name = fieldMeta.name,
          getValueProps = fieldMeta.getValueProps,
          valuePropName = fieldMeta.valuePropName;
      var fieldsMeta = this.fieldsMeta;

      var field = exclusive ? this.getField(leadingName) : this.getField(name);
      var fieldValue = atom;
      if (field && 'value' in field) {
        fieldValue = field.value;
      }
      if (fieldValue === atom) {
        fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
      }
      if (getValueProps) {
        return getValueProps(fieldValue);
      }
      return (0, _defineProperty3['default'])({}, valuePropName, fieldValue);
    }
  }, {
    key: 'getField',
    value: function getField(name) {
      return (0, _extends3['default'])({}, this.fields[name], {
        name: name
      });
    }
  }, {
    key: 'getFieldMember',
    value: function getFieldMember(name, member) {
      return this.getField(name)[member];
    }
  }, {
    key: 'getFieldMeta',
    value: function getFieldMeta(name) {
      if (!this.fieldsMeta[name]) {
        this.fieldsMeta[name] = {};
      }
      return this.fieldsMeta[name];
    }
  }, {
    key: 'setFieldMeta',
    value: function setFieldMeta(name, meta) {
      this.fieldsMeta[name] = meta;
    }
  }, {
    key: 'clearField',
    value: function clearField(name) {
      delete this.fields[name];
      delete this.fieldsMeta[name];
    }
  }]);
  return FieldsStore;
}();

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getFieldsValue = function (names) {
    var fields = names || (0, _utils.flatFieldNames)(_this3.getValidFieldsName());
    var allValues = {};
    fields.forEach(function (f) {
      (0, _set2['default'])(allValues, f, _this3.getFieldValue(f));
    });
    return allValues;
  };

  this.getFieldValue = function (name) {
    var fields = _this3.fields;

    return _this3.getValueFromFields(name, fields);
  };

  this.getFieldsError = function (names) {
    var fields = names || (0, _utils.flatFieldNames)(_this3.getValidFieldsName());
    var allErrors = {};
    fields.forEach(function (f) {
      (0, _set2['default'])(allErrors, f, _this3.getFieldError(f));
    });
    return allErrors;
  };

  this.getFieldError = function (name) {
    return (0, _utils.getErrorStrs)(_this3.getFieldMember(name, 'errors'));
  };

  this.setFieldsInitialValue = function (initialValues) {
    var fieldsMeta = _this3.fieldsMeta;
    var virtualPaths = (0, _utils.getVirtualPaths)(fieldsMeta);
    Object.keys(initialValues).forEach(function (name) {
      if (fieldsMeta[name] && fieldsMeta[name].virtual) {
        for (var i = 0, len = virtualPaths[name].length; i < len; i++) {
          var path = virtualPaths[name][i];
          if ((0, _has2['default'])(initialValues, path)) {
            fieldsMeta[path] = (0, _extends3['default'])({}, fieldsMeta[path], {
              initialValue: (0, _get2['default'])(initialValues, path)
            });
          }
        }
      } else if (fieldsMeta[name]) {
        fieldsMeta[name] = (0, _extends3['default'])({}, fieldsMeta[name], {
          initialValue: initialValues[name]
        });
      }
    });
  };

  this.isFieldValidating = function (name) {
    return _this3.getFieldMember(name, 'validating');
  };

  this.isFieldsValidating = function (ns) {
    var names = ns || _this3.getValidFieldsName();
    return names.some(function (n) {
      return _this3.isFieldValidating(n);
    });
  };

  this.isFieldTouched = function (name) {
    return _this3.getFieldMember(name, 'touched');
  };

  this.isFieldsTouched = function (ns) {
    var names = ns || _this3.getValidFieldsName();
    return names.some(function (n) {
      return _this3.isFieldTouched(n);
    });
  };
};

function createFieldsStore(fields) {
  return new FieldsStore(fields);
}
module.exports = exports['default'];

/***/ },

/***/ 1387:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = undefined;

var _createBaseForm = __webpack_require__(590);

var _createBaseForm2 = _interopRequireDefault(_createBaseForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var mixin = exports.mixin = {
  getForm: function getForm() {
    return {
      getFieldsValue: this.fieldsStore.getFieldsValue,
      getFieldValue: this.fieldsStore.getFieldValue,
      getFieldInstance: this.getFieldInstance,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
      getFieldDecorator: this.getFieldDecorator,
      getFieldProps: this.getFieldProps,
      getFieldsError: this.fieldsStore.getFieldsError,
      getFieldError: this.fieldsStore.getFieldError,
      isFieldValidating: this.fieldsStore.isFieldValidating,
      isFieldsValidating: this.fieldsStore.isFieldsValidating,
      isFieldsTouched: this.fieldsStore.isFieldsTouched,
      isFieldTouched: this.fieldsStore.isFieldTouched,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields
    };
  }
};

function createForm(options) {
  return (0, _createBaseForm2['default'])(options, [mixin]);
}

exports['default'] = createForm;

/***/ },

/***/ 1404:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',

  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页'
};
module.exports = exports['default'];

/***/ },

/***/ 1442:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.getScroll = getScroll;

var _utils = __webpack_require__(191);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(8);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function offset(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  var w = doc.defaultView || doc.parentWindow;
  x += getScroll(w);
  y += getScroll(w, true);
  return {
    left: x, top: y
  };
}

function _componentDidUpdate(component, init) {
  var refs = component.refs;
  var styles = component.props.styles;

  var wrapNode = refs.nav || refs.root;
  var containerOffset = offset(wrapNode);
  var inkBarNode = refs.inkBar;
  var activeTab = refs.activeTab;
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.props.tabBarPosition;
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var tabOffset = offset(tabNode);
    var transformSupported = (0, _utils.isTransformSupported)(inkBarNodeStyle);
    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = tabOffset.left - containerOffset.left;
      var width = tabNode.offsetWidth;
      if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);
        if (width) {
          left = left + (tabNode.offsetWidth - width) / 2;
        }
      }
      // use 3d gpu to optimize render
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
        inkBarNodeStyle.width = width + 'px';
        inkBarNodeStyle.height = '';
      } else {
        inkBarNodeStyle.left = left + 'px';
        inkBarNodeStyle.top = '';
        inkBarNodeStyle.bottom = '';
        inkBarNodeStyle.right = wrapNode.offsetWidth - left - width + 'px';
      }
    } else {
      var top = tabOffset.top - containerOffset.top;
      var height = tabNode.offsetHeight;
      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);
        if (height) {
          top = top + (tabNode.offsetHeight - height) / 2;
        }
      }
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.height = height + 'px';
        inkBarNodeStyle.width = '';
      } else {
        inkBarNodeStyle.left = '';
        inkBarNodeStyle.right = '';
        inkBarNodeStyle.top = top + 'px';
        inkBarNodeStyle.bottom = wrapNode.offsetHeight - top - height + 'px';
      }
    }
  }
  inkBarNodeStyle.display = activeTab ? 'block' : 'none';
}

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      inkBarAnimated: true
    };
  },
  componentDidUpdate: function componentDidUpdate() {
    _componentDidUpdate(this);
  },
  componentDidMount: function componentDidMount() {
    _componentDidUpdate(this, true);
  },
  getInkBarNode: function getInkBarNode() {
    var _classnames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        styles = _props.styles,
        inkBarAnimated = _props.inkBarAnimated;

    var className = prefixCls + '-ink-bar';
    var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, className, true), (0, _defineProperty3['default'])(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
    return _react2['default'].createElement('div', {
      style: styles.inkBar,
      className: classes,
      key: 'inkBar',
      ref: 'inkBar'
    });
  }
};

/***/ },

/***/ 1443:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReactClass = __webpack_require__(16);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _InkTabBarMixin = __webpack_require__(1442);

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _ScrollableTabBarMixin = __webpack_require__(1444);

var _ScrollableTabBarMixin2 = _interopRequireDefault(_ScrollableTabBarMixin);

var _TabBarMixin = __webpack_require__(1445);

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ScrollableInkTabBar = (0, _createReactClass2['default'])({
  displayName: 'ScrollableInkTabBar',
  mixins: [_TabBarMixin2['default'], _InkTabBarMixin2['default'], _ScrollableTabBarMixin2['default']],
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

exports['default'] = ScrollableInkTabBar;
module.exports = exports['default'];

/***/ },

/***/ 1444:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames5 = __webpack_require__(8);

var _classnames6 = _interopRequireDefault(_classnames5);

var _utils = __webpack_require__(191);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _addEventListener = __webpack_require__(117);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _lodash = __webpack_require__(111);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      scrollAnimated: true,
      onPrevClick: function onPrevClick() {},
      onNextClick: function onNextClick() {}
    };
  },
  getInitialState: function getInitialState() {
    this.offset = 0;
    return {
      next: false,
      prev: false
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.componentDidUpdate();
    var debouncedResize = (0, _lodash2['default'])(function () {
      _this.setNextPrev();
      _this.scrollToActiveTab();
    }, 200);
    this.resizeEvent = (0, _addEventListener2['default'])(window, 'resize', debouncedResize);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var props = this.props;
    if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
      this.setOffset(0);
      return;
    }
    var nextPrev = this.setNextPrev();
    // wait next, prev show hide
    /* eslint react/no-did-update-set-state:0 */
    if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
      this.setState({}, this.scrollToActiveTab);
    } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
      // can not use props.activeKey
      this.scrollToActiveTab();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
  },
  setNextPrev: function setNextPrev() {
    var navNode = this.refs.nav;
    var navNodeWH = this.getOffsetWH(navNode);
    var navWrapNode = this.refs.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var offset = this.offset;

    var minOffset = navWrapNodeWH - navNodeWH;
    var _state = this.state,
        next = _state.next,
        prev = _state.prev;

    if (minOffset >= 0) {
      next = false;
      this.setOffset(0, false);
      offset = 0;
    } else if (minOffset < offset) {
      next = true;
    } else {
      next = false;
      this.setOffset(minOffset, false);
      offset = minOffset;
    }

    if (offset < 0) {
      prev = true;
    } else {
      prev = false;
    }

    this.setNext(next);
    this.setPrev(prev);
    return {
      next: next,
      prev: prev
    };
  },
  getOffsetWH: function getOffsetWH(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'offsetWidth';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'offsetHeight';
    }
    return node[prop];
  },
  getOffsetLT: function getOffsetLT(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'left';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
  },
  setOffset: function setOffset(offset) {
    var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var target = Math.min(0, offset);
    if (this.offset !== target) {
      this.offset = target;
      var navOffset = {};
      var tabBarPosition = this.props.tabBarPosition;
      var navStyle = this.refs.nav.style;
      var transformSupported = (0, _utils.isTransformSupported)(navStyle);
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        if (transformSupported) {
          navOffset = {
            value: 'translate3d(0,' + target + 'px,0)'
          };
        } else {
          navOffset = {
            name: 'top',
            value: target + 'px'
          };
        }
      } else {
        if (transformSupported) {
          navOffset = {
            value: 'translate3d(' + target + 'px,0,0)'
          };
        } else {
          navOffset = {
            name: 'left',
            value: target + 'px'
          };
        }
      }
      if (transformSupported) {
        (0, _utils.setTransform)(navStyle, navOffset.value);
      } else {
        navStyle[navOffset.name] = navOffset.value;
      }
      if (checkNextPrev) {
        this.setNextPrev();
      }
    }
  },
  setPrev: function setPrev(v) {
    if (this.state.prev !== v) {
      this.setState({
        prev: v
      });
    }
  },
  setNext: function setNext(v) {
    if (this.state.next !== v) {
      this.setState({
        next: v
      });
    }
  },
  isNextPrevShown: function isNextPrevShown(state) {
    if (state) {
      return state.next || state.prev;
    }
    return this.state.next || this.state.prev;
  },
  prevTransitionEnd: function prevTransitionEnd(e) {
    if (e.propertyName !== 'opacity') {
      return;
    }
    var container = this.refs.container;

    this.scrollToActiveTab({
      target: container,
      currentTarget: container
    });
  },
  scrollToActiveTab: function scrollToActiveTab(e) {
    var _refs = this.refs,
        activeTab = _refs.activeTab,
        navWrap = _refs.navWrap;

    if (e && e.target !== e.currentTarget || !activeTab) {
      return;
    }

    // when not scrollable or enter scrollable first time, don't emit scrolling
    var needToSroll = this.isNextPrevShown() && this.lastNextPrevShown;
    this.lastNextPrevShown = this.isNextPrevShown();
    if (!needToSroll) {
      return;
    }

    var activeTabWH = this.getOffsetWH(activeTab);
    var navWrapNodeWH = this.getOffsetWH(navWrap);
    var offset = this.offset;

    var wrapOffset = this.getOffsetLT(navWrap);
    var activeTabOffset = this.getOffsetLT(activeTab);
    if (wrapOffset > activeTabOffset) {
      offset += wrapOffset - activeTabOffset;
      this.setOffset(offset);
    } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
      offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
      this.setOffset(offset);
    }
  },
  prev: function prev(e) {
    this.props.onPrevClick(e);
    var navWrapNode = this.refs.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var offset = this.offset;

    this.setOffset(offset + navWrapNodeWH);
  },
  next: function next(e) {
    this.props.onNextClick(e);
    var navWrapNode = this.refs.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var offset = this.offset;

    this.setOffset(offset - navWrapNodeWH);
  },
  getScrollBarNode: function getScrollBarNode(content) {
    var _classnames, _classnames2, _classnames3, _classnames4;

    var _state2 = this.state,
        next = _state2.next,
        prev = _state2.prev;
    var _props = this.props,
        prefixCls = _props.prefixCls,
        scrollAnimated = _props.scrollAnimated;

    var showNextPrev = prev || next;

    var prevButton = _react2['default'].createElement(
      'span',
      {
        onClick: prev ? this.prev : null,
        unselectable: 'unselectable',
        className: (0, _classnames6['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-prev', 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-btn-disabled', !prev), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
        onTransitionEnd: this.prevTransitionEnd
      },
      _react2['default'].createElement('span', { className: prefixCls + '-tab-prev-icon' })
    );

    var nextButton = _react2['default'].createElement(
      'span',
      {
        onClick: next ? this.next : null,
        unselectable: 'unselectable',
        className: (0, _classnames6['default'])((_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-next', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-btn-disabled', !next), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
      },
      _react2['default'].createElement('span', { className: prefixCls + '-tab-next-icon' })
    );

    var navClassName = prefixCls + '-nav';
    var navClasses = (0, _classnames6['default'])((_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, navClassName, true), (0, _defineProperty3['default'])(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

    return _react2['default'].createElement(
      'div',
      {
        className: (0, _classnames6['default'])((_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container', 1), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
        key: 'container',
        ref: 'container'
      },
      prevButton,
      nextButton,
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-nav-wrap', ref: 'navWrap' },
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-nav-scroll' },
          _react2['default'].createElement(
            'div',
            { className: navClasses, ref: 'nav' },
            content
          )
        )
      )
    );
  }
};
module.exports = exports['default'];

/***/ },

/***/ 1445:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(28);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(8);

var _classnames3 = _interopRequireDefault(_classnames2);

var _warning = __webpack_require__(30);

var _warning2 = _interopRequireDefault(_warning);

var _utils = __webpack_require__(191);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      styles: {}
    };
  },
  onTabClick: function onTabClick(key) {
    this.props.onTabClick(key);
  },
  getTabs: function getTabs() {
    var _this = this;

    var _props = this.props,
        children = _props.panels,
        activeKey = _props.activeKey,
        prefixCls = _props.prefixCls;

    var rst = [];

    _react2['default'].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var cls = activeKey === key ? prefixCls + '-tab-active' : '';
      cls += ' ' + prefixCls + '-tab';
      var events = {};
      if (child.props.disabled) {
        cls += ' ' + prefixCls + '-tab-disabled';
      } else {
        events = {
          onClick: _this.onTabClick.bind(_this, key)
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = 'activeTab';
      }
      (0, _warning2['default'])('tab' in child.props, 'There must be `tab` property on children of Tabs.');
      rst.push(_react2['default'].createElement(
        'div',
        (0, _extends3['default'])({
          role: 'tab',
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key
        }, ref),
        child.props.tab
      ));
    });

    return rst;
  },
  getRootNode: function getRootNode(contents) {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        onKeyDown = _props2.onKeyDown,
        className = _props2.className,
        extraContent = _props2.extraContent,
        style = _props2.style,
        tabBarPosition = _props2.tabBarPosition,
        restProps = (0, _objectWithoutProperties3['default'])(_props2, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition']);

    var cls = (0, _classnames3['default'])(prefixCls + '-bar', (0, _defineProperty3['default'])({}, className, !!className));
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var tabBarExtraContentStyle = topOrBottom ? { float: 'right' } : {};
    var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
    var children = contents;
    if (extraContent) {
      children = [(0, _react.cloneElement)(extraContent, {
        key: 'extra',
        style: (0, _extends3['default'])({}, tabBarExtraContentStyle, extraContentStyle)
      }), (0, _react.cloneElement)(contents, { key: 'content' })];
      children = topOrBottom ? children : children.reverse();
    }
    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({
        role: 'tablist',
        className: cls,
        tabIndex: '0',
        ref: 'root',
        onKeyDown: onKeyDown,
        style: style
      }, (0, _utils.getDataAttr)(restProps)),
      children
    );
  }
};
module.exports = exports['default'];

/***/ },

/***/ 1446:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(16);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(8);

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(191);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabContent = (0, _createReactClass2['default'])({
  displayName: 'TabContent',
  propTypes: {
    animated: _propTypes2['default'].bool,
    animatedWithMargin: _propTypes2['default'].bool,
    prefixCls: _propTypes2['default'].string,
    children: _propTypes2['default'].any,
    activeKey: _propTypes2['default'].string,
    style: _propTypes2['default'].any,
    tabBarPosition: _propTypes2['default'].string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    _react2['default'].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(_react2['default'].cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootPrefixCls: props.prefixCls
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-content', true), (0, _defineProperty3['default'])(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition));
        style = (0, _extends3['default'])({}, style, animatedStyle);
      } else {
        style = (0, _extends3['default'])({}, style, {
          display: 'none'
        });
      }
    }
    return _react2['default'].createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

exports['default'] = TabContent;
module.exports = exports['default'];

/***/ },

/***/ 1453:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = exports.placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;

/***/ },

/***/ 1476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



module.exports = __webpack_require__(1617);


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1079);

/***/ },

/***/ 1570:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1584);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(1476);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalVideo = function (_React$Component) {
  _inherits(ModalVideo, _React$Component);

  function ModalVideo(props) {
    _classCallCheck(this, ModalVideo);

    var _this = _possibleConstructorReturn(this, (ModalVideo.__proto__ || Object.getPrototypeOf(ModalVideo)).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.closeModal = _this.closeModal.bind(_this);
    _this.updateFocus = _this.updateFocus.bind(_this);
    return _this;
  }

  _createClass(ModalVideo, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ isOpen: false });
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.isOpen) {
        this.modal.focus();
      }
    }
  }, {
    key: 'updateFocus',
    value: function updateFocus(e) {
      if (e.keyCode === 9) {
        e.preventDefault();
        e.stopPropagation();
        if (this.modal === document.activeElement) {
          this.modalbtn.focus();
        } else {
          this.modal.focus();
        }
      }
    }
  }, {
    key: 'getQueryString',
    value: function getQueryString(obj) {
      var url = '';
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] !== null) {
            url += key + '=' + obj[key] + '&';
          }
        }
      }
      return url.substr(0, url.length - 1);
    }
  }, {
    key: 'getYoutubeUrl',
    value: function getYoutubeUrl(youtube, videoId) {
      var query = this.getQueryString(youtube);
      return '//www.youtube.com/embed/' + videoId + '?' + query;
    }
  }, {
    key: 'getVimeoUrl',
    value: function getVimeoUrl(vimeo, videoId) {
      var query = this.getQueryString(vimeo);
      return '//player.vimeo.com/video/' + videoId + '?' + query;
    }
  }, {
    key: 'getVideoUrl',
    value: function getVideoUrl(opt, videoId) {
      if (opt.channel === 'youtube') {
        return this.getYoutubeUrl(opt.youtube, videoId);
      } else if (opt.channel === 'vimeo') {
        return this.getVimeoUrl(opt.vimeo, videoId);
      }
    }
  }, {
    key: 'getPadding',
    value: function getPadding(ratio) {
      var arr = ratio.split(':');
      var width = Number(arr[0]);
      var height = Number(arr[1]);
      var padding = height * 100 / width;
      return padding + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {
        paddingBottom: this.getPadding(this.props.ratio)
      };

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          transitionName: this.props.classNames.modalVideoEffect,
          transitionEnterTimeout: this.props.animationSpeed,
          transitionLeaveTimeout: this.props.animationSpeed
        },
        function () {
          if (_this2.state.isOpen) {
            return _react2.default.createElement(
              'div',
              { className: _this2.props.classNames.modalVideo, tabIndex: '-1', role: 'dialog',
                'aria-label': _this2.props.aria.openMessage, onClick: _this2.closeModal, ref: function ref(node) {
                  _this2.modal = node;
                }, onKeyDown: _this2.updateFocus },
              _react2.default.createElement(
                'div',
                { className: _this2.props.classNames.modalVideoBody },
                _react2.default.createElement(
                  'div',
                  { className: _this2.props.classNames.modalVideoInner },
                  _react2.default.createElement(
                    'div',
                    { className: _this2.props.classNames.modalVideoIframeWrap, style: style },
                    _react2.default.createElement('button', { className: _this2.props.classNames.modalVideoCloseBtn, 'aria-label': _this2.props.aria.dismissBtnMessage, ref: function ref(node) {
                        _this2.modalbtn = node;
                      }, onKeyDown: _this2.updateFocus }),
                    _react2.default.createElement('iframe', { width: '460', height: '230', src: _this2.getVideoUrl(_this2.props, _this2.props.videoId), frameBorder: '0', allowFullScreen: _this2.props.allowFullScreen, tabIndex: '-1' })
                  )
                )
              )
            );
          }
        }()
      );
    }
  }]);

  return ModalVideo;
}(_react2.default.Component);

exports.default = ModalVideo;


ModalVideo.defaultProps = {
  channel: 'youtube',
  isOpen: false,
  youtube: {
    autoplay: 1,
    cc_load_policy: 1,
    color: null,
    controls: 1,
    disablekb: 0,
    enablejsapi: 0,
    end: null,
    fs: 1,
    h1: null,
    iv_load_policy: 1,
    list: null,
    listType: null,
    loop: 0,
    modestbranding: null,
    origin: null,
    playlist: null,
    playsinline: null,
    rel: 0,
    showinfo: 1,
    start: 0,
    wmode: 'transparent',
    theme: 'dark'
  },
  ratio: '16:9',
  vimeo: {
    api: false,
    autopause: true,
    autoplay: true,
    byline: true,
    callback: null,
    color: null,
    height: null,
    loop: false,
    maxheight: null,
    maxwidth: null,
    player_id: null,
    portrait: true,
    title: true,
    width: null,
    xhtml: false
  },
  allowFullScreen: true,
  animationSpeed: 300,
  classNames: {
    modalVideoEffect: 'modal-video-effect',
    modalVideo: 'modal-video',
    modalVideoClose: 'modal-video-close',
    modalVideoBody: 'modal-video-body',
    modalVideoInner: 'modal-video-inner',
    modalVideoIframeWrap: 'modal-video-movie-wrap',
    modalVideoCloseBtn: 'modal-video-close-btn'
  },
  aria: {
    openMessage: 'You just openned the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
};


/***/ },

/***/ 1571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ },

/***/ 1572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(121);

var invariant = __webpack_require__(11);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(14);

var ReactBaseClasses = __webpack_require__(643);
var ReactChildren = __webpack_require__(1574);
var ReactDOMFactories = __webpack_require__(1575);
var ReactElement = __webpack_require__(98);
var ReactPropTypes = __webpack_require__(1577);
var ReactVersion = __webpack_require__(1579);

var createReactClass = __webpack_require__(1581);
var onlyChild = __webpack_require__(1582);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var lowPriorityWarning = __webpack_require__(299);
  var canDefineProperty = __webpack_require__(199);
  var ReactElementValidator = __webpack_require__(645);
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;
var createMixin = function (mixin) {
  return mixin;
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var PooledClass = __webpack_require__(1572);
var ReactElement = __webpack_require__(98);

var emptyFunction = __webpack_require__(44);
var traverseAllChildren = __webpack_require__(1583);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ },

/***/ 1575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactElement = __webpack_require__(98);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator = __webpack_require__(645);
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(98),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(1331);

module.exports = factory(isValidElement);

/***/ },

/***/ 1578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ },

/***/ 1579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



module.exports = '15.6.1';

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1085);

__webpack_require__(840);

/***/ },

/***/ 1580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(121);

var ReactPropTypeLocationNames = __webpack_require__(1576);
var ReactPropTypesSecret = __webpack_require__(1578);

var invariant = __webpack_require__(11);
var warning = __webpack_require__(13);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(298);
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(298);
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(643),
    Component = _require.Component;

var _require2 = __webpack_require__(98),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__(646);
var factory = __webpack_require__(382);

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ },

/***/ 1582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(121);

var ReactElement = __webpack_require__(98);

var invariant = __webpack_require__(11);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(121);

var ReactCurrentOwner = __webpack_require__(198);
var REACT_ELEMENT_TYPE = __webpack_require__(644);

var getIteratorFn = __webpack_require__(647);
var invariant = __webpack_require__(11);
var KeyEscapeUtils = __webpack_require__(1571);
var warning = __webpack_require__(13);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1584:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1573);


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Table = __webpack_require__(828);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Table2['default'];
module.exports = exports['default'];

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1093);

__webpack_require__(357);

__webpack_require__(157);

__webpack_require__(795);

__webpack_require__(820);

__webpack_require__(814);

/***/ },

/***/ 1617:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(1619);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(1618);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(662);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1618:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(996);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(998);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(1000);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(999);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(12);

var _PropTypes = __webpack_require__(662);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1619:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(987);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(30);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(1620);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 1620:
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(32);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return _react2['default'].createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

/***/ },

/***/ 1711:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(83);

var _reactRedux = __webpack_require__(15);

var _reduxThunk = __webpack_require__(201);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(681);

var _reducers2 = _interopRequireDefault(_reducers);

var _router = __webpack_require__(682);

var _router2 = _interopRequireDefault(_router);

__webpack_require__(683);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const token = localStorage.getItem('jwtToken');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}*/
var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);
var store = createStoreWithMiddleware(_reducers2.default);

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_router2.default, null)
  );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(787);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(786);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_button2['default'].Group = _buttonGroup2['default'];
exports['default'] = _button2['default'];
module.exports = exports['default'];

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1076);

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.toArray = toArray;
exports.getActiveIndex = getActiveIndex;
exports.getActiveKey = getActiveKey;
exports.setTransform = setTransform;
exports.isTransformSupported = isTransformSupported;
exports.setTransition = setTransition;
exports.getTransformPropValue = getTransformPropValue;
exports.isVertical = isVertical;
exports.getTransformByIndex = getTransformByIndex;
exports.getMarginStyle = getMarginStyle;
exports.getStyle = getStyle;
exports.setPxStyle = setPxStyle;
exports.getDataAttr = getDataAttr;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  _react2['default'].Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return (0, _defineProperty3['default'])({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

module.exports = ReactCurrentOwner;

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = exports.Button = undefined;

var _radio = __webpack_require__(207);

var _radio2 = _interopRequireDefault(_radio);

var _group = __webpack_require__(815);

var _group2 = _interopRequireDefault(_group);

var _radioButton = __webpack_require__(816);

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_radio2['default'].Button = _radioButton2['default'];
_radio2['default'].Group = _group2['default'];
exports.Button = _radioButton2['default'];
exports.Group = _group2['default'];
exports['default'] = _radio2['default'];

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcCheckbox = __webpack_require__(189);

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(57);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Radio = function (_React$Component) {
    (0, _inherits3['default'])(Radio, _React$Component);

    function Radio() {
        (0, _classCallCheck3['default'])(this, Radio);
        return (0, _possibleConstructorReturn3['default'])(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Radio, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState) || !(0, _shallowequal2['default'])(this.context.radioGroup, nextContext.radioGroup);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                style = props.style,
                restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

            var radioGroup = context.radioGroup;

            var radioProps = (0, _extends3['default'])({}, restProps);
            if (radioGroup) {
                radioProps.onChange = radioGroup.onChange;
                radioProps.checked = props.value === radioGroup.value;
                radioProps.disabled = props.disabled || radioGroup.disabled;
            }
            var wrapperClassString = (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-checked', radioProps.checked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-disabled', radioProps.disabled), _classNames));
            return _react2['default'].createElement(
                'label',
                { className: wrapperClassString, style: style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                _react2['default'].createElement(_rcCheckbox2['default'], (0, _extends3['default'])({}, radioProps, { prefixCls: prefixCls })),
                children !== undefined ? _react2['default'].createElement(
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);
    return Radio;
}(_react2['default'].Component);

exports['default'] = Radio;

Radio.defaultProps = {
    prefixCls: 'ant-radio',
    type: 'radio'
};
Radio.contextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(54);
var normalizeHeaderName = __webpack_require__(877);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(360);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(360);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signinUser = signinUser;
exports.authError = authError;
exports.fetchIntegratorInfo = fetchIntegratorInfo;
exports.changeCustomer = changeCustomer;
exports.changeLocation = changeLocation;
exports.fetchCustomerInfo = fetchCustomerInfo;
exports.fetchDevices = fetchDevices;
exports.customerDeleteModalShow = customerDeleteModalShow;
exports.customerAddModalShow = customerAddModalShow;
exports.controlSystemModalShow = controlSystemModalShow;
exports.editControlSystemModalShow = editControlSystemModalShow;
exports.deviceModalShow = deviceModalShow;
exports.integratorLogout = integratorLogout;

var _reactRouter = __webpack_require__(48);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signinUser(user) {
  var username = user.email || '';
  var password = user.password || '';
  return function (dispatch) {
    dispatch({ type: 'AUTH_LOGIN' });
    var url = "https://2y7j7iy0cf.execute-api.us-east-1.amazonaws.com/v1/integrator/signin";
    _axios2.default.post(url, { username: username, password: password }).then(function (response) {
      // If request is good...
      // - Update state to indicate user is authenticated
      console.log('login in successfully');
      dispatch({ type: 'AUTH_USER', payload: user.email });
      // - Save the JWT token
      localStorage.setItem('jwtToken', response.data.jwtToken);
      // - redirect to the route '/feature'
      _reactRouter.hashHistory.push('/integrator');
    }).catch(function (err) {
      dispatch(authError(err.response.data.message));
    });
  };
}

function authError(error) {
  return {
    type: 'AUTH_ERROR',
    payload: error
  };
}

function fetchIntegratorInfo(integratorEmail, token) {
  return function (dispatch) {
    dispatch({ type: 'GET_INTEGRATOR_LOADING' });
    var url = 'https://gxzrqa69g3.execute-api.us-east-1.amazonaws.com/v1/integrator/' + integratorEmail;
    _axios2.default.get(url, {
      headers: { Authorization: token }
    }).then(function (response) {
      var integrator = response.data.integrator || {};
      dispatch({ type: 'GET_INTEGRATOR', payload: integrator });
    }).catch(function (err) {
      var errMessage = _lodash2.default.get(err, 'err.response.data.message', 'Internal error');
      dispatch({
        type: 'GET_INTEGRATOR_ERROR',
        payload: errMessage
      });
    });
  };
}

function changeCustomer(customerEmail) {
  return function (dispatch) {
    dispatch({ type: 'CHANGE_CUSTOMER', payload: customerEmail });
  };
}

function changeLocation(location) {
  return function (dispatch) {
    dispatch({ type: 'CHANGE_LOCATION', payload: location });
  };
}

function fetchCustomerInfo(integratorEmail, customerEmail, jwtToken) {
  return function (dispatch) {
    dispatch({ type: 'GET_CUSTOMER_LOADING' });
    dispatch({ type: 'CHANGE_CUSTOMR', payload: customerEmail });
    var url = 'https://h2gf88qrka.execute-api.us-east-1.amazonaws.com/v1/integrator/' + integratorEmail + '/customer/' + customerEmail;
    _axios2.default.get(url, {
      headers: { Authorization: jwtToken }
    }).then(function (response) {
      var customer = response.data.customer || {};
      console.log('customer:', customer);
      dispatch({ type: 'GET_CUSTOMER', payload: customer });
      _reactRouter.hashHistory.push('/integrator/customer');
    }).catch(function (err) {
      console.log('err:', err);
      var errMessage = _lodash2.default.get(err, 'err.response.data.message', 'Internal error');
      dispatch({
        type: 'GET_CUSTOMER_ERROR',
        payload: errMessage
      });
    });
  };
}

function fetchDevices(integratorEmail, customerEmail, location, jwtToken) {
  return function (dispatch) {
    dispatch({ type: 'GET_DEVICE_LOADING' });
    dispatch({ type: 'CHANGE_LOCATION', payload: location });
    var url = 'https://au91xvgwng.execute-api.us-east-1.amazonaws.com/v1/integrator/' + integratorEmail + '/customer/' + customerEmail + '/device?room=' + location;
    _axios2.default.get(url, {
      headers: { Authorization: jwtToken }
    }).then(function (response) {
      var devices = response.data.devices || [];
      console.log('devices:', devices);
      dispatch({ type: 'GET_DEVICE', payload: devices });
      _reactRouter.hashHistory.push('/integrator/customer/device');
    }).catch(function (err) {
      console.log('err:', err);
      var errMessage = _lodash2.default.get(err, 'err.response.data.message', 'Internal error');
      dispatch({ type: 'GET_DEVICE_ERROR', payload: errMessage });
    });
  };
}

function customerDeleteModalShow(isOpen) {
  return function (dispatch) {
    dispatch({ type: 'CUSTOMER_DELETE_MODAL_CHANGE', payload: isOpen });
  };
}

function customerAddModalShow(isOpen) {
  return function (dispatch) {
    dispatch({ type: 'CUSTOMER_ADD_MODAL_CHANGE', payload: isOpen });
  };
}

function controlSystemModalShow(isOpen) {
  return function (dispatch) {
    dispatch({ type: 'CUSTOMER_ADD_CONTROLSYSTEM_MODAL_CHANGE', payload: isOpen });
  };
}

function editControlSystemModalShow(controlSystem, isOpen) {
  return function (dispatch) {
    dispatch({ type: 'CHANGE_CURRENT_CONTROLSYSTEM', payload: controlSystem });
    dispatch({ type: 'CUSTOMER_EDIT_CONTROLSYSTEM_MODAL_CHANGE', payload: isOpen });
  };
}

function deviceModalShow(isOpen) {
  return function (dispatch) {
    dispatch({ type: 'CUSTOMER_ADD_DEVICE_MODAL_CHANGE', payload: isOpen });
  };
}

function integratorLogout() {
  return function (dispatch) {
    dispatch({ type: 'GET_CUSTOMER_LOGOUT' });
    dispatch({ type: 'GET_INTEGRATOR_LOGOUT' });
    dispatch({ type: 'AUTH_LOGOUT' });
    localStorage.removeItem('jwtToken');
    _reactRouter.hashHistory.push('/login');
  };
}

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var AddCustomerForm = function (_Component) {
	_inherits(AddCustomerForm, _Component);

	function AddCustomerForm(props) {
		_classCallCheck(this, AddCustomerForm);

		var _this = _possibleConstructorReturn(this, (AddCustomerForm.__proto__ || Object.getPrototypeOf(AddCustomerForm)).call(this, props));

		_this.handleConfirmBlur = function (e) {
			var value = e.target.value;
			_this.setState({ confirmDirty: _this.state.confirmDirty || !!value });
		};

		_this.checkPassword = function (rule, value, callback) {
			var form = _this.props.form;
			if (value && value !== form.getFieldValue('password')) {
				callback('Two passwords that you enter is inconsistent!');
			} else {
				callback();
			}
		};

		_this.checkConfirm = function (rule, value, callback) {
			var form = _this.props.form;
			if (value && _this.state.confirmDirty) {
				form.validateFields(['confirm'], { force: true });
			}
			callback();
		};

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}
	/*componentDidMount() {
    	this.props.form.validateFields();
  	}*/


	_createClass(AddCustomerForm, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var jwt = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integrator.email;
			this.props.form.validateFields(function (err, values) {
				if (!err) {
					_this2.setState({ loading: true });
					var url = 'https://h2gf88qrka.execute-api.us-east-1.amazonaws.com/v1/integrator/' + integratorEmail + '/customer';
					_axios2.default.post(url, values, {
						headers: { Authorization: jwt }
					}).then(function (response) {
						_this2.props.customerAddModalShow(false);
						_this2.props.fetchIntegratorInfo(integratorEmail, jwt);
					}).catch(function (err) {
						console.log('error:', JSON.parse(err.response.data.errorMessage).message);
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'handleCancel',
		value: function handleCancel() {
			this.state = {
				loading: false,
				errMessage: ''
			};
			this.props.form.resetFields();
			this.props.customerAddModalShow(false);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched;
			//const userNameError = isFieldTouched('userName') && getFieldError('userName');
			//const passwordError = isFieldTouched('password') && getFieldError('password');

			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Customer Name'
					},
					getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please input your customer name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'Customer Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Customer Address'
					},
					getFieldDecorator('address', {
						rules: [{ required: true, message: 'Please input your customer address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'Customer Address'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Contact Email'
					},
					getFieldDecorator('email', {
						rules: [{ type: 'email', message: 'email is not valid!' }, { required: true, message: 'Please input your customer email!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'mail' }),
						placeholder: 'Customer contact email'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Password'
					},
					getFieldDecorator('password', {
						rules: [{ min: 6, message: 'Password min length is 6' }, { required: true, message: 'Please input your password!' }, { pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/, message: 'Password should contains upper case, lower case and number' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						label: 'Confirm Password',
						hasFeedback: true
					},
					getFieldDecorator('confirm', {
						rules: [{
							required: true, message: 'Please confirm your password!'
						}, {
							validator: this.checkPassword
						}]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						onBlur: this.handleConfirmBlur
					}))
				),
				_react2.default.createElement(
					'p',
					{ className: 'add-customer-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-customer-submit-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							onClick: this.handleCancel.bind(this)
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return AddCustomerForm;
}(_react.Component);

var WrappedAddCustomerForm = _form2.default.create()(AddCustomerForm);
function mapStateToProps(state) {
	return {
		integrator: state.integrator.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedAddCustomerForm);

/***/ },

/***/ 235:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 26:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

exports.argumentContainer = argumentContainer;
exports.getValueFromEvent = getValueFromEvent;
exports.getErrorStrs = getErrorStrs;
exports.isEmptyObject = isEmptyObject;
exports.flattenArray = flattenArray;
exports.mirror = mirror;
exports.hasRules = hasRules;
exports.startsWith = startsWith;
exports.getParams = getParams;
exports.getNameIfNested = getNameIfNested;
exports.flatFieldNames = flatFieldNames;
exports.clearVirtualField = clearVirtualField;
exports.getVirtualPaths = getVirtualPaths;
exports.normalizeValidateRules = normalizeValidateRules;

var _hoistNonReactStatics = __webpack_require__(142);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function argumentContainer(Container, WrappedComponent) {
  /* eslint no-param-reassign:0 */
  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
  Container.WrappedComponent = WrappedComponent;
  return (0, _hoistNonReactStatics2['default'])(Container, WrappedComponent);
}

function getValueFromEvent(e) {
  // support custom element
  if (!e || !e.target) {
    return e;
  }
  var target = e.target;

  return target.type === 'checkbox' ? target.checked : target.value;
}

function getErrorStrs(errors) {
  if (errors) {
    return errors.map(function (e) {
      if (e && e.message) {
        return e.message;
      }
      return e;
    });
  }
  return errors;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}

function mirror(obj) {
  return obj;
}

function hasRules(validate) {
  if (validate) {
    return validate.some(function (item) {
      return !!item.rules && item.rules.length;
    });
  }
  return false;
}

function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}

function getParams(ns, opt, cb) {
  var names = ns;
  var callback = cb;
  var options = opt;
  if (cb === undefined) {
    if (typeof names === 'function') {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(ns)) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }
  return {
    names: names,
    callback: callback,
    options: options
  };
}

var NAME_KEY_SEP = '.';
var NAME_INDEX_OPEN_SEP = '[';

function getNameIfNested(str) {
  var keyIndex = str.indexOf(NAME_KEY_SEP);
  var arrayIndex = str.indexOf(NAME_INDEX_OPEN_SEP);

  var index = void 0;

  if (keyIndex === -1 && arrayIndex === -1) {
    return {
      name: str
    };
  } else if (keyIndex === -1) {
    index = arrayIndex;
  } else if (arrayIndex === -1) {
    index = keyIndex;
  } else {
    index = Math.min(keyIndex, arrayIndex);
  }

  return {
    name: str.slice(0, index),
    isNested: true
  };
}

function flatFieldNames(names) {
  var ret = {};
  names.forEach(function (n) {
    ret[getNameIfNested(n).name] = 1;
  });
  return Object.keys(ret);
}

function clearVirtualField(name, fields, fieldsMeta) {
  if (fieldsMeta[name] && fieldsMeta[name].virtual) {
    /* eslint no-loop-func:0 */
    Object.keys(fields).forEach(function (ok) {
      if (getNameIfNested(ok).name === name) {
        delete fields[ok];
      }
    });
  }
}

function getVirtualPaths(fieldsMeta) {
  var virtualPaths = {};
  Object.keys(fieldsMeta).forEach(function (name) {
    var leadingName = fieldsMeta[name].leadingName;
    if (leadingName && fieldsMeta[leadingName].virtual) {
      if (leadingName in virtualPaths) {
        virtualPaths[leadingName].push(name);
      } else {
        virtualPaths[leadingName] = [name];
      }
    }
  });
  return virtualPaths;
}

function normalizeValidateRules(validate, rules, validateTrigger) {
  var validateRules = validate.map(function (item) {
    var newItem = (0, _extends3['default'])({}, item, {
      trigger: item.trigger || []
    });
    if (typeof newItem.trigger === 'string') {
      newItem.trigger = [newItem.trigger];
    }
    return newItem;
  });
  if (rules) {
    validateRules.push({
      trigger: validateTrigger ? [].concat(validateTrigger) : [],
      rules: rules
    });
  }
  return validateRules;
}

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(121);

var ReactCurrentOwner = __webpack_require__(198);

var invariant = __webpack_require__(11);
var warning = __webpack_require__(13);

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty
  // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,

  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
      // Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};

module.exports = ReactComponentTreeHook;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSelect = __webpack_require__(277);

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var SelectPropTypes = {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    size: _propTypes2['default'].oneOf(['default', 'large', 'small']),
    combobox: _propTypes2['default'].bool,
    notFoundContent: _propTypes2['default'].any,
    showSearch: _propTypes2['default'].bool,
    optionLabelProp: _propTypes2['default'].string,
    transitionName: _propTypes2['default'].string,
    choiceTransitionName: _propTypes2['default'].string
};
// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select = function (_React$Component) {
    (0, _inherits3['default'])(Select, _React$Component);

    function Select() {
        (0, _classCallCheck3['default'])(this, Select);
        return (0, _possibleConstructorReturn3['default'])(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Select, [{
        key: 'getLocale',
        value: function getLocale() {
            var antLocale = this.context.antLocale;

            if (antLocale && antLocale.Select) {
                return antLocale.Select;
            }
            return {
                notFoundContent: '无匹配结果'
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                _a$className = _a.className,
                className = _a$className === undefined ? '' : _a$className,
                size = _a.size,
                mode = _a.mode,
                multiple = _a.multiple,
                tags = _a.tags,
                combobox = _a.combobox,
                restProps = __rest(_a, ["prefixCls", "className", "size", "mode", "multiple", "tags", "combobox"]);
            (0, _warning2['default'])(!multiple && !tags && !combobox, '`Select[multiple|tags|combobox]` is deprecated, please use `Select[mode]` instead.');
            var cls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);
            var locale = this.getLocale();
            var _props = this.props,
                _props$notFoundConten = _props.notFoundContent,
                notFoundContent = _props$notFoundConten === undefined ? locale.notFoundContent : _props$notFoundConten,
                optionLabelProp = _props.optionLabelProp;

            var isCombobox = mode === 'combobox' || combobox;
            if (isCombobox) {
                notFoundContent = null;
                // children 带 dom 结构时，无法填入输入框
                optionLabelProp = optionLabelProp || 'value';
            }
            var modeConfig = {
                multiple: mode === 'multiple' || multiple,
                tags: mode === 'tags' || tags,
                combobox: isCombobox
            };
            return _react2['default'].createElement(_rcSelect2['default'], (0, _extends3['default'])({}, restProps, modeConfig, { prefixCls: prefixCls, className: cls, optionLabelProp: optionLabelProp || 'children', notFoundContent: notFoundContent }));
        }
    }]);
    return Select;
}(_react2['default'].Component);

exports['default'] = Select;

Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;
Select.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = getRequestAnimationFrame;
exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame;
var availablePrefixs = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    var lastTime = 0;
    return function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () {};
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    var prefix = availablePrefixs.filter(function (key) {
        return key + 'RequestAnimationFrame' in window;
    })[0];
    return prefix ? window[prefix + 'RequestAnimationFrame'] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    var prefix = availablePrefixs.filter(function (key) {
        return key + 'CancelAnimationFrame' in window || key + 'CancelRequestAnimationFrame' in window;
    })[0];
    return prefix ? (window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']).call(this, id) : clearTimeout(id);
}

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var BreadcrumbItem = function (_React$Component) {
    (0, _inherits3['default'])(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        (0, _classCallCheck3['default'])(this, BreadcrumbItem);
        return (0, _possibleConstructorReturn3['default'])(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(BreadcrumbItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                separator = _a.separator,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "separator", "children"]);
            var link = void 0;
            if ('href' in this.props) {
                link = _react2['default'].createElement(
                    'a',
                    (0, _extends3['default'])({ className: prefixCls + '-link' }, restProps),
                    children
                );
            } else {
                link = _react2['default'].createElement(
                    'span',
                    (0, _extends3['default'])({ className: prefixCls + '-link' }, restProps),
                    children
                );
            }
            if (children) {
                return _react2['default'].createElement(
                    'span',
                    null,
                    link,
                    _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-separator' },
                        separator
                    )
                );
            }
            return null;
        }
    }]);
    return BreadcrumbItem;
}(_react2['default'].Component);

exports['default'] = BreadcrumbItem;

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: _propTypes2['default'].string,
    separator: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element]),
    href: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Breadcrumb = __webpack_require__(785);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _BreadcrumbItem = __webpack_require__(342);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Breadcrumb2['default'].Item = _BreadcrumbItem2['default'];
exports['default'] = _Breadcrumb2['default'];
module.exports = exports['default'];

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1075);

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _rcCheckbox = __webpack_require__(189);

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _shallowequal = __webpack_require__(57);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Checkbox = function (_React$Component) {
    (0, _inherits3['default'])(Checkbox, _React$Component);

    function Checkbox() {
        (0, _classCallCheck3['default'])(this, Checkbox);
        return (0, _possibleConstructorReturn3['default'])(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Checkbox, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState) || !(0, _shallowequal2['default'])(this.context.checkboxGroup, nextContext.checkboxGroup);
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                indeterminate = props.indeterminate,
                style = props.style,
                onMouseEnter = props.onMouseEnter,
                onMouseLeave = props.onMouseLeave,
                restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);

            var checkboxGroup = context.checkboxGroup;

            var checkboxProps = (0, _extends3['default'])({}, restProps);
            if (checkboxGroup) {
                checkboxProps.onChange = function () {
                    return checkboxGroup.toggleOption({ label: children, value: props.value });
                };
                checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
                checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
            }
            var classString = (0, _classnames2['default'])(className, (0, _defineProperty3['default'])({}, prefixCls + '-wrapper', true));
            var checkboxClass = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-indeterminate', indeterminate));
            return _react2['default'].createElement(
                'label',
                { className: classString, style: style, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
                _react2['default'].createElement(_rcCheckbox2['default'], (0, _extends3['default'])({}, checkboxProps, { prefixCls: prefixCls, className: checkboxClass })),
                children !== undefined ? _react2['default'].createElement(
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);
    return Checkbox;
}(_react2['default'].Component);

exports['default'] = Checkbox;

Checkbox.defaultProps = {
    prefixCls: 'ant-checkbox',
    indeterminate: false
};
Checkbox.contextTypes = {
    checkboxGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcDropdown = __webpack_require__(583);

var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Dropdown = function (_React$Component) {
    (0, _inherits3['default'])(Dropdown, _React$Component);

    function Dropdown() {
        (0, _classCallCheck3['default'])(this, Dropdown);
        return (0, _possibleConstructorReturn3['default'])(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Dropdown, [{
        key: 'getTransitionName',
        value: function getTransitionName() {
            var _props$placement = this.props.placement,
                placement = _props$placement === undefined ? '' : _props$placement;

            if (placement.indexOf('top') >= 0) {
                return 'slide-down';
            }
            return 'slide-up';
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var overlay = this.props.overlay;

            var overlayProps = overlay.props;
            (0, _warning2['default'])(!overlayProps.mode || overlayProps.mode === 'vertical', 'mode="' + overlayProps.mode + '" is not supported for Dropdown\'s Menu.');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                prefixCls = _props.prefixCls,
                overlay = _props.overlay;

            var dropdownTrigger = (0, _react.cloneElement)(children, {
                className: (0, _classnames2['default'])(children.props.className, prefixCls + '-trigger')
            });
            var fixedModeOverlay = (0, _react.cloneElement)(overlay, {
                mode: 'vertical'
            });
            return _react2['default'].createElement(
                _rcDropdown2['default'],
                (0, _extends3['default'])({ transitionName: this.getTransitionName() }, this.props, { overlay: fixedModeOverlay }),
                dropdownTrigger
            );
        }
    }]);
    return Dropdown;
}(_react2['default'].Component);

exports['default'] = Dropdown;

Dropdown.defaultProps = {
    prefixCls: 'ant-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: 'bottomLeft'
};
module.exports = exports['default'];

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = __webpack_require__(346);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dropdownButton = __webpack_require__(794);

var _dropdownButton2 = _interopRequireDefault(_dropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_dropdown2['default'].Button = _dropdownButton2['default'];
exports['default'] = _dropdown2['default'];
module.exports = exports['default'];

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FIELD_META_PROP = exports.FIELD_META_PROP = 'data-__meta';

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(1);

var _extends4 = _interopRequireDefault(_extends3);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var stringOrNumber = _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]);
var objectOrNumber = _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].number]);

var Col = function (_React$Component) {
    (0, _inherits3['default'])(Col, _React$Component);

    function Col() {
        (0, _classCallCheck3['default'])(this, Col);
        return (0, _possibleConstructorReturn3['default'])(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Col, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var span = props.span,
                order = props.order,
                offset = props.offset,
                push = props.push,
                pull = props.pull,
                className = props.className,
                children = props.children,
                _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-col' : _props$prefixCls,
                others = __rest(props, ["span", "order", "offset", "push", "pull", "className", "children", "prefixCls"]);

            var sizeClassObj = {};
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
                var _extends2;

                var sizeProps = {};
                if (typeof props[size] === 'number') {
                    sizeProps.span = props[size];
                } else if ((0, _typeof3['default'])(props[size]) === 'object') {
                    sizeProps = props[size] || {};
                }
                delete others[size];
                sizeClassObj = (0, _extends4['default'])({}, sizeClassObj, (_extends2 = {}, (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order || sizeProps.order === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push || sizeProps.push === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull || sizeProps.pull === 0), _extends2));
            });
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + span, span !== undefined), (0, _defineProperty3['default'])(_classNames, prefixCls + '-order-' + order, order), (0, _defineProperty3['default'])(_classNames, prefixCls + '-offset-' + offset, offset), (0, _defineProperty3['default'])(_classNames, prefixCls + '-push-' + push, push), (0, _defineProperty3['default'])(_classNames, prefixCls + '-pull-' + pull, pull), _classNames), className, sizeClassObj);
            return _react2['default'].createElement(
                'div',
                (0, _extends4['default'])({}, others, { className: classes }),
                children
            );
        }
    }]);
    return Col;
}(_react2['default'].Component);

exports['default'] = Col;

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
    xl: objectOrNumber
};
module.exports = exports['default'];

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(863);

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__(351);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(349);

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Row = _row2['default'];
exports.Col = _col2['default'];

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Row = function (_React$Component) {
    (0, _inherits3['default'])(Row, _React$Component);

    function Row() {
        (0, _classCallCheck3['default'])(this, Row);
        return (0, _possibleConstructorReturn3['default'])(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Row, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                justify = _a.justify,
                align = _a.align,
                className = _a.className,
                gutter = _a.gutter,
                style = _a.style,
                children = _a.children,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-row' : _a$prefixCls,
                others = __rest(_a, ["type", "justify", "align", "className", "gutter", "style", "children", "prefixCls"]);
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, !type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + justify, type && justify), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + align, type && align), _classNames), className);
            var rowStyle = gutter > 0 ? (0, _extends3['default'])({ marginLeft: gutter / -2, marginRight: gutter / -2 }, style) : style;
            var cols = _react.Children.map(children, function (col) {
                if (!col) {
                    return null;
                }
                if (col.props && gutter > 0) {
                    return (0, _react.cloneElement)(col, {
                        style: (0, _extends3['default'])({ paddingLeft: gutter / 2, paddingRight: gutter / 2 }, col.props.style)
                    });
                }
                return col;
            });
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, others, { className: classes, style: rowStyle }),
                cols
            );
        }
    }]);
    return Row;
}(_react2['default'].Component);

exports['default'] = Row;

Row.defaultProps = {
    gutter: 0
};
Row.propTypes = {
    type: _propTypes2['default'].string,
    align: _propTypes2['default'].string,
    justify: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    gutter: _propTypes2['default'].number,
    prefixCls: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(32);

var _omit2 = _interopRequireDefault(_omit);

var _TextArea = __webpack_require__(353);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var Input = function (_Component) {
    (0, _inherits3['default'])(Input, _Component);

    function Input() {
        (0, _classCallCheck3['default'])(this, Input);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));

        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Input, [{
        key: 'focus',
        value: function focus() {
            this.refs.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.refs.input.blur();
        }
    }, {
        key: 'getInputClassName',
        value: function getInputClassName() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                disabled = _props.disabled;

            return (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));
        }
    }, {
        key: 'renderLabeledInput',
        value: function renderLabeledInput(children) {
            var props = this.props;
            // Not wrap when there is not addons
            if (!props.addonBefore && !props.addonAfter) {
                return children;
            }
            var wrapperClassName = props.prefixCls + '-group';
            var addonClassName = wrapperClassName + '-addon';
            var addonBefore = props.addonBefore ? _react2['default'].createElement(
                'span',
                { className: addonClassName },
                props.addonBefore
            ) : null;
            var addonAfter = props.addonAfter ? _react2['default'].createElement(
                'span',
                { className: addonClassName },
                props.addonAfter
            ) : null;
            var className = (0, _classnames2['default'])(props.prefixCls + '-wrapper', (0, _defineProperty3['default'])({}, wrapperClassName, addonBefore || addonAfter));
            // Need another wrapper for changing display:table to display:inline-block
            // and put style prop in wrapper
            if (addonBefore || addonAfter) {
                return _react2['default'].createElement(
                    'span',
                    { className: props.prefixCls + '-group-wrapper', style: props.style },
                    _react2['default'].createElement(
                        'span',
                        { className: className },
                        addonBefore,
                        (0, _react.cloneElement)(children, { style: null }),
                        addonAfter
                    )
                );
            }
            return _react2['default'].createElement(
                'span',
                { className: className },
                addonBefore,
                children,
                addonAfter
            );
        }
    }, {
        key: 'renderLabeledIcon',
        value: function renderLabeledIcon(children) {
            var props = this.props;

            if (!('prefix' in props || 'suffix' in props)) {
                return children;
            }
            var prefix = props.prefix ? _react2['default'].createElement(
                'span',
                { className: props.prefixCls + '-prefix' },
                props.prefix
            ) : null;
            var suffix = props.suffix ? _react2['default'].createElement(
                'span',
                { className: props.prefixCls + '-suffix' },
                props.suffix
            ) : null;
            return _react2['default'].createElement(
                'span',
                { className: (0, _classnames2['default'])(props.className, props.prefixCls + '-affix-wrapper'), style: props.style },
                prefix,
                (0, _react.cloneElement)(children, { style: null, className: this.getInputClassName() }),
                suffix
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _props2 = this.props,
                value = _props2.value,
                className = _props2.className;
            // Fix https://fb.me/react-unknown-prop

            var otherProps = (0, _omit2['default'])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
            if ('value' in this.props) {
                otherProps.value = fixControlledValue(value);
                // Input elements must be either controlled or uncontrolled,
                // specify either the value prop, or the defaultValue prop, but not both.
                delete otherProps.defaultValue;
            }
            return this.renderLabeledIcon(_react2['default'].createElement('input', (0, _extends3['default'])({}, otherProps, { className: (0, _classnames2['default'])(this.getInputClassName(), className), onKeyDown: this.handleKeyDown, ref: 'input' })));
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.type === 'textarea') {
                return _react2['default'].createElement(_TextArea2['default'], (0, _extends3['default'])({}, this.props, { ref: 'input' }));
            }
            return this.renderLabeledInput(this.renderInput());
        }
    }]);
    return Input;
}(_react.Component);

exports['default'] = Input;

Input.defaultProps = {
    prefixCls: 'ant-input',
    type: 'text',
    disabled: false
};
Input.propTypes = {
    type: _propTypes2['default'].string,
    id: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    disabled: _propTypes2['default'].bool,
    value: _propTypes2['default'].any,
    defaultValue: _propTypes2['default'].any,
    className: _propTypes2['default'].string,
    addonBefore: _propTypes2['default'].node,
    addonAfter: _propTypes2['default'].node,
    prefixCls: _propTypes2['default'].string,
    autosize: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
    onPressEnter: _propTypes2['default'].func,
    onKeyDown: _propTypes2['default'].func,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func,
    prefix: _propTypes2['default'].node,
    suffix: _propTypes2['default'].node
};
module.exports = exports['default'];

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _omit = __webpack_require__(32);

var _omit2 = _interopRequireDefault(_omit);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _calculateNodeHeight = __webpack_require__(801);

var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

var TextArea = function (_React$Component) {
    (0, _inherits3['default'])(TextArea, _React$Component);

    function TextArea() {
        (0, _classCallCheck3['default'])(this, TextArea);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));

        _this.state = {
            textareaStyles: null
        };
        _this.resizeTextarea = function () {
            var autosize = _this.props.autosize;

            if (!autosize || !_this.textAreaRef) {
                return;
            }
            var minRows = autosize ? autosize.minRows : null;
            var maxRows = autosize ? autosize.maxRows : null;
            var textareaStyles = (0, _calculateNodeHeight2['default'])(_this.textAreaRef, false, minRows, maxRows);
            _this.setState({ textareaStyles: textareaStyles });
        };
        _this.handleTextareaChange = function (e) {
            if (!('value' in _this.props)) {
                _this.resizeTextarea();
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(e);
            }
        };
        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.saveTextAreaRef = function (textArea) {
            _this.textAreaRef = textArea;
        };
        return _this;
    }

    (0, _createClass3['default'])(TextArea, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.resizeTextarea();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // Re-render with the new content then recalculate the height as required.
            if (this.props.value !== nextProps.value) {
                if (this.nextFrameActionId) {
                    clearNextFrameAction(this.nextFrameActionId);
                }
                this.nextFrameActionId = onNextFrame(this.resizeTextarea);
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.textAreaRef.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.textAreaRef.blur();
        }
    }, {
        key: 'getTextAreaClassName',
        value: function getTextAreaClassName() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                disabled = _props.disabled;

            return (0, _classnames2['default'])(prefixCls, className, (0, _defineProperty3['default'])({}, prefixCls + '-disabled', disabled));
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var otherProps = (0, _omit2['default'])(props, ['prefixCls', 'onPressEnter', 'autosize']);
            var style = (0, _extends3['default'])({}, props.style, this.state.textareaStyles);
            // Fix https://github.com/ant-design/ant-design/issues/6776
            // Make sure it could be reset when using form.getFieldDecorator
            if ('value' in otherProps) {
                otherProps.value = otherProps.value || '';
            }
            return _react2['default'].createElement('textarea', (0, _extends3['default'])({}, otherProps, { className: this.getTextAreaClassName(), style: style, onKeyDown: this.handleKeyDown, onChange: this.handleTextareaChange, ref: this.saveTextAreaRef }));
        }
    }]);
    return TextArea;
}(_react2['default'].Component);

exports['default'] = TextArea;

TextArea.defaultProps = {
    prefixCls: 'ant-input'
};
module.exports = exports['default'];

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcDialog = __webpack_require__(582);

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(117);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
    (0, _inherits3['default'])(Modal, _React$Component);

    function Modal() {
        (0, _classCallCheck3['default'])(this, Modal);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

        _this.handleCancel = function (e) {
            var onCancel = _this.props.onCancel;
            if (onCancel) {
                onCancel(e);
            }
        };
        _this.handleOk = function (e) {
            var onOk = _this.props.onOk;
            if (onOk) {
                onOk(e);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (mousePositionEventBinded) {
                return;
            }
            // 只有点击事件支持从鼠标位置动画展开
            (0, _addEventListener2['default'])(document.documentElement, 'click', function (e) {
                mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                // 100ms 内发生过点击事件，则从点击位置动画展示
                // 否则直接 zoom 展示
                // 这样可以兼容非点击方式展开
                setTimeout(function () {
                    return mousePosition = null;
                }, 100);
            });
            mousePositionEventBinded = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                okText = _props.okText,
                cancelText = _props.cancelText,
                confirmLoading = _props.confirmLoading,
                footer = _props.footer,
                visible = _props.visible;

            if (this.context.antLocale && this.context.antLocale.Modal) {
                okText = okText || this.context.antLocale.Modal.okText;
                cancelText = cancelText || this.context.antLocale.Modal.cancelText;
            }
            var defaultFooter = [_react2['default'].createElement(
                _button2['default'],
                { key: 'cancel', size: 'large', onClick: this.handleCancel },
                cancelText || '取消'
            ), _react2['default'].createElement(
                _button2['default'],
                { key: 'confirm', type: 'primary', size: 'large', loading: confirmLoading, onClick: this.handleOk },
                okText || '确定'
            )];
            return _react2['default'].createElement(_rcDialog2['default'], (0, _extends3['default'])({ onClose: this.handleCancel, footer: footer === undefined ? defaultFooter : footer }, this.props, { visible: visible, mousePosition: mousePosition }));
        }
    }]);
    return Modal;
}(_react2['default'].Component);

exports['default'] = Modal;

Modal.defaultProps = {
    prefixCls: 'ant-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false
};
Modal.propTypes = {
    prefixCls: _propTypes2['default'].string,
    onOk: _propTypes2['default'].func,
    onCancel: _propTypes2['default'].func,
    okText: _propTypes2['default'].node,
    cancelText: _propTypes2['default'].node,
    width: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
    confirmLoading: _propTypes2['default'].bool,
    visible: _propTypes2['default'].bool,
    align: _propTypes2['default'].object,
    footer: _propTypes2['default'].node,
    title: _propTypes2['default'].node,
    closable: _propTypes2['default'].bool
};
Modal.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcNotification = __webpack_require__(276);

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPlacement = 'topRight';
var defaultGetContainer = void 0;
function setNotificationConfig(options) {
    var duration = options.duration,
        placement = options.placement,
        bottom = options.bottom,
        top = options.top,
        getContainer = options.getContainer;

    if (duration !== undefined) {
        defaultDuration = duration;
    }
    if (placement !== undefined) {
        defaultPlacement = placement;
    }
    if (bottom !== undefined) {
        defaultBottom = bottom;
    }
    if (top !== undefined) {
        defaultTop = top;
    }
    if (getContainer !== undefined) {
        defaultGetContainer = getContainer;
    }
}
function getPlacementStyle(placement) {
    var style = void 0;
    switch (placement) {
        case 'topLeft':
            style = {
                left: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'topRight':
            style = {
                right: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'bottomLeft':
            style = {
                left: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
        default:
            style = {
                right: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
    }
    return style;
}
function getNotificationInstance(prefixCls, placement) {
    var cacheKey = prefixCls + '-' + placement;
    if (!notificationInstance[cacheKey]) {
        notificationInstance[cacheKey] = _rcNotification2['default'].newInstance({
            prefixCls: prefixCls,
            className: prefixCls + '-' + placement,
            style: getPlacementStyle(placement),
            getContainer: defaultGetContainer
        });
    }
    return notificationInstance[cacheKey];
}
var typeToIcon = {
    success: 'check-circle-o',
    info: 'info-circle-o',
    error: 'cross-circle-o',
    warning: 'exclamation-circle-o'
};
function notice(args) {
    var outerPrefixCls = args.prefixCls || 'ant-notification';
    var prefixCls = outerPrefixCls + '-notice';
    var duration = args.duration === undefined ? defaultDuration : args.duration;
    var iconNode = null;
    if (args.icon) {
        iconNode = _react2['default'].createElement(
            'span',
            { className: prefixCls + '-icon' },
            args.icon
        );
    } else if (args.type) {
        var iconType = typeToIcon[args.type];
        iconNode = _react2['default'].createElement(_icon2['default'], { className: prefixCls + '-icon ' + prefixCls + '-icon-' + args.type, type: iconType });
    }
    var autoMarginTag = !args.description && iconNode ? _react2['default'].createElement('span', { className: prefixCls + '-message-single-line-auto-margin' }) : null;
    getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement).notice({
        content: _react2['default'].createElement(
            'div',
            { className: iconNode ? prefixCls + '-with-icon' : '' },
            iconNode,
            _react2['default'].createElement(
                'div',
                { className: prefixCls + '-message' },
                autoMarginTag,
                args.message
            ),
            _react2['default'].createElement(
                'div',
                { className: prefixCls + '-description' },
                args.description
            ),
            args.btn ? _react2['default'].createElement(
                'span',
                { className: prefixCls + '-btn' },
                args.btn
            ) : null
        ),
        duration: duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: args.style || {},
        className: args.className
    });
}
var api = {
    open: notice,
    close: function close(key) {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            return notificationInstance[cacheKey].removeNotice(key);
        });
    },

    config: setNotificationConfig,
    destroy: function destroy() {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
    api[type] = function (args) {
        return api.open((0, _extends3['default'])({}, args, { type: type }));
    };
});
api.warn = api.warning;
exports['default'] = api;
module.exports = exports['default'];

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1087);

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1089);

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(54);
var settle = __webpack_require__(869);
var buildURL = __webpack_require__(872);
var parseHeaders = __webpack_require__(878);
var isURLSameOrigin = __webpack_require__(876);
var createError = __webpack_require__(363);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(871);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(874);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(868);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css2 = __webpack_require__(85);

var _layout = __webpack_require__(84);

var _layout2 = _interopRequireDefault(_layout);

var _css3 = __webpack_require__(158);

var _menu = __webpack_require__(129);

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var Sider = _layout2.default.Sider;

var Sidebar = function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	}

	_createClass(Sidebar, [{
		key: 'renderCustomersItem',
		value: function renderCustomersItem() {
			var customers = this.props.customers || [];
			console.log('customers:', customers);
			return customers.map(function (customer) {
				return _react2.default.createElement(
					_menu2.default.Item,
					{
						key: customer.Email
					},
					customer.Email
				);
			});
		}
	}, {
		key: 'renderLocations',
		value: function renderLocations() {
			var rooms = this.props.rooms || [];
			console.log('rooms:', rooms);
			return rooms.map(function (room) {
				return _react2.default.createElement(
					_menu2.default.Item,
					{ key: room.RoomName },
					room.RoomName
				);
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick(e) {
			console.log('click side menu:', e);
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken') || '';
			var key = '';
			var value = '';
			if (e.keyPath.length == 1) {
				key = e.keyPath[0];
			} else {
				key = e.keyPath[1];
				value = e.keyPath[0];
			}
			switch (key) {
				case 'customers':
					console.log('customers:', value);
					if (!integratorEmail || !value || !jwtToken) {
						return null;
					}
					this.props.fetchCustomerInfo(integratorEmail, value, jwtToken);
					break;
				case 'locations':
					console.log('locations:', value);
					var location = value.toLowerCase() || '';
					this.props.fetchDevices(integratorEmail, customerEmail, location, jwtToken);
					break;
				case 'profile':
					console.log('profile');
					break;
				case 'logout':
					console.log('logout');
					break;
				default:
					break;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Sider,
				{
					style: { background: '#fff', fontSize: '16px' },
					width: 280,
					breakpoint: 'lg',
					collapsedWidth: '0',
					onCollapse: function onCollapse(collapsed, type) {
						console.log(collapsed, type);
					}
				},
				_react2.default.createElement(
					_menu2.default,
					{
						mode: 'inline',
						defaultSelectedKeys: ['1'],
						defaultOpenKeys: ['sub1'],
						style: { height: '100%', borderRight: 0 },
						onClick: this.handleClick.bind(this)
					},
					_react2.default.createElement(
						SubMenu,
						{ key: 'customers', title: _react2.default.createElement(
								'span',
								null,
								_react2.default.createElement(_icon2.default, { type: 'user' }),
								'Customers'
							) },
						this.renderCustomersItem()
					),
					_react2.default.createElement(
						SubMenu,
						{ key: 'locations', title: _react2.default.createElement(
								'span',
								null,
								_react2.default.createElement(_icon2.default, { type: 'home' }),
								'Locations'
							) },
						this.renderLocations()
					),
					_react2.default.createElement(
						_menu2.default.Item,
						{ key: 'profile' },
						_react2.default.createElement(_icon2.default, { style: { fontSize: 16 }, type: 'contacts' }),
						_react2.default.createElement(
							'span',
							null,
							'Customer Profile'
						)
					),
					_react2.default.createElement(
						_menu2.default.Item,
						{ key: 'logout' },
						_react2.default.createElement(_icon2.default, { style: { fontSize: 16 }, type: 'logout' }),
						_react2.default.createElement(
							'span',
							null,
							'Logout'
						)
					)
				)
			);
		}
	}]);

	return Sidebar;
}(_react.Component);

function mapStateToProps(state) {
	return {
		customers: state.integrator.integrator.customers,
		rooms: state.customer.customer.rooms,
		integratorEmail: state.authentication.integrator,
		customerEmail: state.authentication.customer
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Sidebar);

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1082);

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1090);

__webpack_require__(38);

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(796);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Form2['default'];
module.exports = exports['default'];

/***/ },

/***/ 407:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 408:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1081);

__webpack_require__(798);

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = __webpack_require__(352);

var _Input2 = _interopRequireDefault(_Input);

var _Group = __webpack_require__(799);

var _Group2 = _interopRequireDefault(_Group);

var _Search = __webpack_require__(800);

var _Search2 = _interopRequireDefault(_Search);

var _TextArea = __webpack_require__(353);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Input2['default'].Group = _Group2['default'];
_Input2['default'].Search = _Search2['default'];
_Input2['default'].TextArea = _TextArea2['default'];
exports['default'] = _Input2['default'];
module.exports = exports['default'];

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(364);
var isBuffer = __webpack_require__(1155);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(28);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(42);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(16);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _asyncValidator = __webpack_require__(358);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _warning = __webpack_require__(30);

var _warning2 = _interopRequireDefault(_warning);

var _get = __webpack_require__(186);

var _get2 = _interopRequireDefault(_get);

var _has = __webpack_require__(112);

var _has2 = _interopRequireDefault(_has);

var _set = __webpack_require__(187);

var _set2 = _interopRequireDefault(_set);

var _createFieldsStore = __webpack_require__(1386);

var _createFieldsStore2 = _interopRequireDefault(_createFieldsStore);

var _utils = __webpack_require__(275);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DEFAULT_TRIGGER = 'onChange';

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var mapPropsToFields = option.mapPropsToFields,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      validateMessages = option.validateMessages,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? _utils.mirror : _option$mapProps,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      withRef = option.withRef;


  function decorate(WrappedComponent) {
    var Form = (0, _createReactClass2['default'])({
      displayName: 'Form',

      mixins: mixins,

      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = (0, _createFieldsStore2['default'])(fields || {});

        this.instances = {};
        this.cachedBind = {};
        // HACK: https://github.com/ant-design/ant-design/issues/6406
        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          return _this[key] = function () {
            var _fieldsStore;

            (0, _warning2['default'])(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });

        return {
          submitting: false
        };
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.replaceFields(mapPropsToFields(nextProps));
        }
      },
      onCollectCommon: function onCollectCommon(name_, action, args) {
        var name = name_;
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, (0, _toConsumableArray3['default'])(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, (0, _toConsumableArray3['default'])(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, (0, _toConsumableArray3['default'])(args)) : _utils.getValueFromEvent.apply(undefined, (0, _toConsumableArray3['default'])(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          onValuesChange(this.props, (0, _set2['default'])({}, name, value));
        }
        var nameKeyObj = (0, _utils.getNameIfNested)(name);
        if (this.fieldsStore.getFieldMeta(nameKeyObj.name).exclusive) {
          name = nameKeyObj.name;
        }
        var field = this.fieldsStore.getField(name);
        return { name: name, field: (0, _extends3['default'])({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;

        var fieldContent = (0, _extends3['default'])({}, field, {
          dirty: (0, _utils.hasRules)(validate)
        });
        this.setFields((0, _defineProperty3['default'])({}, name, fieldContent));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var fieldContent = (0, _extends3['default'])({}, field, {
          dirty: true
        });
        this.validateFieldsInternal([fieldContent], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
          cache[action] = fn.bind(this, name, action);
        }
        return cache[action];
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          if (process.env.NODE_ENV !== 'production') {
            var valuePropName = fieldMeta.valuePropName;
            (0, _warning2['default'])(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            (0, _warning2['default'])(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return _react2['default'].cloneElement(fieldElem, (0, _extends3['default'])({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }

        var nameIfNested = (0, _utils.getNameIfNested)(name);
        var leadingName = nameIfNested.name;
        var fieldOption = (0, _extends3['default'])({
          valuePropName: 'value',
          validate: [],
          trigger: DEFAULT_TRIGGER,
          leadingName: leadingName,
          name: name
        }, usersFieldOption);

        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            exclusive = fieldOption.exclusive,
            validate = fieldOption.validate;


        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var leadingFieldMeta = this.fieldsStore.getFieldMeta(leadingName);
        if (nameIfNested.isNested) {
          leadingFieldMeta.virtual = !exclusive;
          // exclusive allow getFieldProps('x', {initialValue})
          // non-exclusive does not allow getFieldProps('x', {initialValue})
          leadingFieldMeta.hidden = !exclusive;
          leadingFieldMeta.exclusive = exclusive;
        }

        var inputProps = (0, _extends3['default'])({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = name;
        }

        var validateRules = (0, _utils.normalizeValidateRules)(validate, rules, validateTrigger);
        var validateTriggers = validateRules.filter(function (item) {
          return !!item.rules && item.rules.length;
        }).map(function (item) {
          return item.trigger;
        }).reduce(function (pre, curr) {
          return pre.concat(curr);
        }, []);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });

        // make sure that the value will be collect
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = (0, _extends3['default'])({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return (0, _utils.flattenArray)(actionRules);
      },
      setFields: function setFields(fields) {
        var _this4 = this;

        this.fieldsStore.setFields(fields);
        if (onFieldsChange) {
          var changedFields = {};
          Object.keys(fields).forEach(function (f) {
            changedFields[f] = _this4.fieldsStore.getField(f);
          });
          onFieldsChange(this.props, changedFields);
        }
        this.forceUpdate();
      },
      resetFields: function resetFields(ns) {
        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
      },
      setFieldsValue: function setFieldsValue(fieldsValue) {
        if (onValuesChange) {
          onValuesChange(this.props, fieldsValue);
        }
        var newFields = {};
        var _fieldsStore2 = this.fieldsStore,
            fieldsMeta = _fieldsStore2.fieldsMeta,
            fields = _fieldsStore2.fields;

        var virtualPaths = (0, _utils.getVirtualPaths)(fieldsMeta);
        Object.keys(fieldsValue).forEach(function (name) {
          var value = fieldsValue[name];
          if (fieldsMeta[name] && fieldsMeta[name].virtual) {
            (0, _utils.clearVirtualField)(name, fields, fieldsMeta);
            for (var i = 0, len = virtualPaths[name].length; i < len; i++) {
              var path = virtualPaths[name][i];
              if ((0, _has2['default'])(fieldsValue, path)) {
                newFields[path] = {
                  name: path,
                  value: (0, _get2['default'])(fieldsValue, path)
                };
              }
            }
          } else if (fieldsMeta[name]) {
            newFields[name] = {
              name: name,
              value: value
            };
          } else {
            (0, _warning2['default'])(false, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
          }
        });
        this.setFields(newFields);
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          // after destroy, delete data
          this.fieldsStore.clearField(name);
          delete this.instances[name];
          delete this.cachedBind[name];
          return;
        }
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            }
            ref(component);
          }
        }
        this.instances[name] = component;
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this5 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;

        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              (0, _set2['default'])(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this5.fieldsStore.getFieldMeta(name);
          var newField = (0, _extends3['default'])({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this5.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        // in case normalize
        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this5.fieldsStore.getFieldValue(f);
        });
        if (callback && (0, _utils.isEmptyObject)(allFields)) {
          callback((0, _utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
          return;
        }
        var validator = new _asyncValidator2['default'](allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function (errors) {
          var errorsGroup = (0, _extends3['default'])({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function (e) {
              var fieldName = e.field;
              if (!(0, _has2['default'])(errorsGroup, fieldName)) {
                (0, _set2['default'])(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = (0, _get2['default'])(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = (0, _get2['default'])(errorsGroup, name);
            var nowField = _this5.fieldsStore.getField(name);
            // avoid concurrency problems
            if (nowField.value !== allValues[name]) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this5.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref2) {
                var name = _ref2.name;

                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                (0, _set2['default'])(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback((0, _utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this5.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this6 = this;

        var _getParams = (0, _utils.getParams)(ns, opt, cb),
            names = _getParams.names,
            callback = _getParams.callback,
            options = _getParams.options;

        var fieldNames = names || this.fieldsStore.getValidFieldsName();
        var fields = fieldNames.filter(function (name) {
          var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
          return (0, _utils.hasRules)(fieldMeta.validate);
        }).map(function (name) {
          var field = _this6.fieldsStore.getField(name);
          field.value = _this6.fieldsStore.getFieldValue(name);
          return field;
        });
        if (!fields.length) {
          if (callback) {
            callback(null, this.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
          }
          return;
        }
        if (!('firstFields' in options)) {
          options.firstFields = fieldNames.filter(function (name) {
            var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
            return !!fieldMeta.validateFirst;
          });
        }
        this.validateFieldsInternal(fields, {
          fieldNames: fieldNames,
          options: options
        }, callback);
      },
      isSubmitting: function isSubmitting() {
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this7 = this;

        var fn = function fn() {
          _this7.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['wrappedComponentRef']);

        var formProps = (0, _defineProperty3['default'])({}, formPropName, this.getForm());
        function innerestWrappedComponentRef() {
          if (wrappedComponentRef && !innerestWrappedComponentRef.called) {
            wrappedComponentRef.apply(undefined, arguments);
            innerestWrappedComponentRef.called = true;
          }
        }
        if (withRef) {
          (0, _warning2['default'])(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = innerestWrappedComponentRef;
        }
        var props = mapProps.call(this, (0, _extends3['default'])({}, formProps, restProps, {
          wrappedComponentRef: innerestWrappedComponentRef
        }));
        return _react2['default'].createElement(WrappedComponent, props);
      }
    });

    return (0, _utils.argumentContainer)(Form, WrappedComponent);
  }

  return decorate;
}

exports['default'] = createBaseForm;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

var shallowEqual = __webpack_require__(619);

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(121),
    _assign = __webpack_require__(14);

var ReactNoopUpdateQueue = __webpack_require__(646);

var canDefineProperty = __webpack_require__(199);
var emptyObject = __webpack_require__(91);
var invariant = __webpack_require__(11);
var lowPriorityWarning = __webpack_require__(299);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */



var ReactCurrentOwner = __webpack_require__(198);
var ReactComponentTreeHook = __webpack_require__(298);
var ReactElement = __webpack_require__(98);

var checkReactTypeSpec = __webpack_require__(1580);

var canDefineProperty = __webpack_require__(199);
var getIteratorFn = __webpack_require__(647);
var warning = __webpack_require__(13);
var lowPriorityWarning = __webpack_require__(299);

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook.getCurrentStackAddendum();

        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
        ReactComponentTreeHook.popNonStandardWarningStack();
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

module.exports = ReactElementValidator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var warning = __webpack_require__(13);

function warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _warning = __webpack_require__(30);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var warned = {};

exports['default'] = function (valid, message) {
    if (!valid && !warned[message]) {
        (0, _warning2['default'])(false, message);
        warned[message] = true;
    }
};

module.exports = exports['default'];

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(83);

var _authentication = __webpack_require__(925);

var _authentication2 = _interopRequireDefault(_authentication);

var _modalOpen = __webpack_require__(930);

var _modalOpen2 = _interopRequireDefault(_modalOpen);

var _customer = __webpack_require__(927);

var _customer2 = _interopRequireDefault(_customer);

var _integrator = __webpack_require__(929);

var _integrator2 = _interopRequireDefault(_integrator);

var _controlSystem = __webpack_require__(926);

var _controlSystem2 = _interopRequireDefault(_controlSystem);

var _device = __webpack_require__(928);

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  authentication: _authentication2.default,
  modalOpen: _modalOpen2.default,
  integrator: _integrator2.default,
  customer: _customer2.default,
  controlSystem: _controlSystem2.default,
  device: _device2.default
});

exports.default = rootReducer;

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(48);

var _Home = __webpack_require__(880);

var _Home2 = _interopRequireDefault(_Home);

var _Main = __webpack_require__(921);

var _Main2 = _interopRequireDefault(_Main);

var _RegisterInterest = __webpack_require__(924);

var _RegisterInterest2 = _interopRequireDefault(_RegisterInterest);

var _ApprovedIntegrators = __webpack_require__(884);

var _ApprovedIntegrators2 = _interopRequireDefault(_ApprovedIntegrators);

var _ContactUs = __webpack_require__(887);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Login = __webpack_require__(916);

var _Login2 = _interopRequireDefault(_Login);

var _IntegratorHome = __webpack_require__(915);

var _IntegratorHome2 = _interopRequireDefault(_IntegratorHome);

var _CustomerHome = __webpack_require__(896);

var _CustomerHome2 = _interopRequireDefault(_CustomerHome);

var _Resource = __webpack_require__(903);

var _Resource2 = _interopRequireDefault(_Resource);

var _DeviceHome = __webpack_require__(901);

var _DeviceHome2 = _interopRequireDefault(_DeviceHome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory, onUpdate: function onUpdate() {
        return window.scrollTo(0, 0);
      } },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _Home2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Main2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/registerInterest', component: _RegisterInterest2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/approvedIntegrators', component: _ApprovedIntegrators2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _ContactUs2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/integrator', component: _IntegratorHome2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/integrator/customer', component: _CustomerHome2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/integrator/resource', component: _Resource2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/integrator/customer/device', component: _DeviceHome2.default })
    )
  );
};

exports.default = Routes;

/***/ },

/***/ 683:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var animation = void 0;
function isCssAnimationSupported() {
    if (animation !== undefined) {
        return animation;
    }
    var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
    var elm = document.createElement('div');
    if (elm.style.animationName !== undefined) {
        animation = true;
    }
    if (animation !== undefined) {
        for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                animation = true;
                break;
            }
        }
    }
    animation = animation || false;
    return animation;
}
exports['default'] = isCssAnimationSupported;
module.exports = exports['default'];

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = isFlexSupported;
function isFlexSupported() {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        var documentElement = window.document.documentElement;

        return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
    }
    return false;
}
module.exports = exports['default'];

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cssAnimation = __webpack_require__(165);

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

var _getRequestAnimationFrame = __webpack_require__(341);

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var reqAnimFrame = (0, _getRequestAnimationFrame2['default'])();
function animate(node, show, done) {
    var height = void 0;
    var requestAnimationFrameId = void 0;
    return (0, _cssAnimation2['default'])(node, 'ant-motion-collapse', {
        start: function start() {
            if (!show) {
                node.style.height = node.offsetHeight + 'px';
                node.style.opacity = 1;
            } else {
                height = node.offsetHeight;
                node.style.height = 0;
                node.style.opacity = 0;
            }
        },
        active: function active() {
            if (requestAnimationFrameId) {
                (0, _getRequestAnimationFrame.cancelRequestAnimationFrame)(requestAnimationFrameId);
            }
            requestAnimationFrameId = reqAnimFrame(function () {
                node.style.height = (show ? height : 0) + 'px';
                node.style.opacity = show ? 1 : 0;
            });
        },
        end: function end() {
            if (requestAnimationFrameId) {
                (0, _getRequestAnimationFrame.cancelRequestAnimationFrame)(requestAnimationFrameId);
            }
            node.style.height = '';
            node.style.opacity = '';
            done();
        }
    });
}
var animation = {
    enter: function enter(node, done) {
        return animate(node, true, done);
    },
    leave: function leave(node, done) {
        return animate(node, false, done);
    },
    appear: function appear(node, done) {
        return animate(node, true, done);
    }
};
exports['default'] = animation;
module.exports = exports['default'];

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(42);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports['default'] = throttleByAnimationFrame;
exports.throttleByAnimationFrameDecorator = throttleByAnimationFrameDecorator;

var _getRequestAnimationFrame = __webpack_require__(341);

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var reqAnimFrame = (0, _getRequestAnimationFrame2['default'])();
function throttleByAnimationFrame(fn) {
    var requestId = void 0;
    var later = function later(args) {
        return function () {
            requestId = null;
            fn.apply(undefined, (0, _toConsumableArray3['default'])(args));
        };
    };
    var throttled = function throttled() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    throttled.cancel = function () {
        return (0, _getRequestAnimationFrame.cancelRequestAnimationFrame)(requestId);
    };
    return throttled;
}
function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        var definingProperty = false;
        return {
            configurable: true,
            get: function get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Avatar = function (_React$Component) {
    (0, _inherits3['default'])(Avatar, _React$Component);

    function Avatar(props) {
        (0, _classCallCheck3['default'])(this, Avatar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

        _this.setScale = function () {
            var childrenNode = _this.avatarChildren;
            if (childrenNode) {
                var childrenWidth = childrenNode.offsetWidth;
                var avatarWidth = _reactDom2['default'].findDOMNode(_this).getBoundingClientRect().width;
                // add 4px gap for each side to get better performance
                if (avatarWidth - 8 < childrenWidth) {
                    _this.setState({
                        scale: (avatarWidth - 8) / childrenWidth
                    });
                } else {
                    _this.setState({
                        scale: 1
                    });
                }
            }
        };
        _this.handleImgLoadError = function () {
            return _this.setState({ isImgExist: false });
        };
        _this.state = {
            scale: 1,
            isImgExist: true
        };
        return _this;
    }

    (0, _createClass3['default'])(Avatar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setScale();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.children !== this.props.children || prevState.scale !== this.state.scale && this.state.scale === 1) {
                this.setScale();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _classNames2,
                _this2 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                shape = _a.shape,
                size = _a.size,
                src = _a.src,
                icon = _a.icon,
                className = _a.className,
                others = __rest(_a, ["prefixCls", "shape", "size", "src", "icon", "className"]);
            var sizeCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), _classNames));
            var classString = (0, _classnames2['default'])(prefixCls, className, sizeCls, (_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-' + shape, shape), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-image', src), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-icon', icon), _classNames2));
            var children = this.props.children;
            if (src && this.state.isImgExist) {
                children = _react2['default'].createElement('img', { src: src, onError: this.handleImgLoadError });
            } else if (icon) {
                children = _react2['default'].createElement(_icon2['default'], { type: icon });
            } else {
                var childrenNode = this.avatarChildren;
                if (childrenNode || this.state.scale !== 1) {
                    var childrenStyle = {
                        msTransform: 'scale(' + this.state.scale + ')',
                        WebkitTransform: 'scale(' + this.state.scale + ')',
                        transform: 'scale(' + this.state.scale + ')',
                        position: 'absolute',
                        display: 'inline-block',
                        left: 'calc(50% - ' + Math.round(childrenNode.offsetWidth / 2) + 'px)'
                    };
                    children = _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-string', ref: function ref(span) {
                                return _this2.avatarChildren = span;
                            }, style: childrenStyle },
                        children
                    );
                } else {
                    children = _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-string', ref: function ref(span) {
                                return _this2.avatarChildren = span;
                            } },
                        children
                    );
                }
            }
            return _react2['default'].createElement(
                'span',
                (0, _extends3['default'])({}, others, { className: classString }),
                children
            );
        }
    }]);
    return Avatar;
}(_react2['default'].Component);

exports['default'] = Avatar;

Avatar.defaultProps = {
    prefixCls: 'ant-avatar',
    shape: 'circle',
    size: 'default'
};
module.exports = exports['default'];

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1074);

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

var _BreadcrumbItem = __webpack_require__(342);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getBreadcrumbName(route, params) {
    if (!route.breadcrumbName) {
        return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
        return params[key] || replacement;
    });
    return name;
}
function defaultItemRender(route, params, routes, paths) {
    var isLastItem = routes.indexOf(route) === routes.length - 1;
    var name = getBreadcrumbName(route, params);
    return isLastItem ? _react2['default'].createElement(
        'span',
        null,
        name
    ) : _react2['default'].createElement(
        'a',
        { href: '#/' + paths.join('/') },
        name
    );
}

var Breadcrumb = function (_React$Component) {
    (0, _inherits3['default'])(Breadcrumb, _React$Component);

    function Breadcrumb() {
        (0, _classCallCheck3['default'])(this, Breadcrumb);
        return (0, _possibleConstructorReturn3['default'])(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Breadcrumb, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            (0, _warning2['default'])(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
        }
    }, {
        key: 'render',
        value: function render() {
            var crumbs = void 0;
            var _props = this.props,
                separator = _props.separator,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                routes = _props.routes,
                _props$params = _props.params,
                params = _props$params === undefined ? {} : _props$params,
                children = _props.children,
                _props$itemRender = _props.itemRender,
                itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

            if (routes && routes.length > 0) {
                var paths = [];
                crumbs = routes.map(function (route) {
                    route.path = route.path || '';
                    var path = route.path.replace(/^\//, '');
                    Object.keys(params).forEach(function (key) {
                        path = path.replace(':' + key, params[key]);
                    });
                    if (path) {
                        paths.push(path);
                    }
                    return _react2['default'].createElement(
                        _BreadcrumbItem2['default'],
                        { separator: separator, key: route.breadcrumbName || path },
                        itemRender(route, params, routes, paths)
                    );
                });
            } else if (children) {
                crumbs = _react2['default'].Children.map(children, function (element, index) {
                    if (!element) {
                        return element;
                    }
                    (0, _warning2['default'])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb only accepts Breadcrumb.Item as it\'s children');
                    return (0, _react.cloneElement)(element, {
                        separator: separator,
                        key: index
                    });
                });
            }
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(className, prefixCls), style: style },
                crumbs
            );
        }
    }]);
    return Breadcrumb;
}(_react2['default'].Component);

exports['default'] = Breadcrumb;

Breadcrumb.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
Breadcrumb.propTypes = {
    prefixCls: _propTypes2['default'].string,
    separator: _propTypes2['default'].node,
    routes: _propTypes2['default'].array,
    params: _propTypes2['default'].object,
    linkRender: _propTypes2['default'].func,
    nameRender: _propTypes2['default'].func
};
module.exports = exports['default'];

/***/ },

/***/ 786:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var ButtonGroup = function ButtonGroup(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-btn-group' : _props$prefixCls,
        _props$size = props.size,
        size = _props$size === undefined ? '' : _props$size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);
    // large => lg
    // small => sm


    var sizeCls = '';
    switch (size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
        default:
            break;
    }
    var classes = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + sizeCls, sizeCls), className);
    return _react2['default'].createElement('div', (0, _extends3['default'])({}, others, { className: classes }));
};
exports['default'] = ButtonGroup;
module.exports = exports['default'];

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(32);

var _omit2 = _interopRequireDefault(_omit);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
    // Check the child if is undefined or null.
    if (child == null) {
        return;
    }
    var SPACE = needInserted ? ' ' : '';
    // strictNullChecks oops.
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
        return _react2['default'].cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return _react2['default'].createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button(props) {
        (0, _classCallCheck3['default'])(this, Button);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleClick = function (e) {
            // Add click effect
            _this.setState({ clicked: true });
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                return _this.setState({ clicked: false });
            }, 500);
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick(e);
            }
        };
        _this.state = {
            loading: props.loading
        };
        return _this;
    }

    (0, _createClass3['default'])(Button, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentLoading = this.props.loading;
            var loading = nextProps.loading;
            if (currentLoading) {
                clearTimeout(this.delayTimeout);
            }
            if (typeof loading !== 'boolean' && loading && loading.delay) {
                this.delayTimeout = setTimeout(function () {
                    return _this2.setState({ loading: loading });
                }, loading.delay);
            } else {
                this.setState({ loading: loading });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                shape = _a.shape,
                _a$size = _a.size,
                size = _a$size === undefined ? '' : _a$size,
                className = _a.className,
                htmlType = _a.htmlType,
                children = _a.children,
                icon = _a.icon,
                prefixCls = _a.prefixCls,
                ghost = _a.ghost,
                others = __rest(_a, ["type", "shape", "size", "className", "htmlType", "children", "icon", "prefixCls", "ghost"]);var _state = this.state,
                loading = _state.loading,
                clicked = _state.clicked;
            // large => lg
            // small => sm

            var sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                default:
                    break;
            }
            var classes = (0, _classnames2['default'])(prefixCls, className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3['default'])(_classNames, prefixCls + '-icon-only', !children && icon && !loading), (0, _defineProperty3['default'])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classNames, prefixCls + '-clicked', clicked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-background-ghost', ghost), _classNames));
            var iconType = loading ? 'loading' : icon;
            var iconNode = iconType ? _react2['default'].createElement(_icon2['default'], { type: iconType }) : null;
            var needInserted = _react2['default'].Children.count(children) === 1 && (!iconType || iconType === 'loading');
            var kids = _react2['default'].Children.map(children, function (child) {
                return insertSpace(child, needInserted);
            });
            return _react2['default'].createElement(
                'button',
                (0, _extends3['default'])({}, (0, _omit2['default'])(others, ['loading', 'clicked']), { type: htmlType || 'button', className: classes, onClick: this.handleClick }),
                iconNode,
                kids
            );
        }
    }]);
    return Button;
}(_react2['default'].Component);

exports['default'] = Button;

Button.__ANT_BUTTON = true;
Button.defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    clicked: false,
    ghost: false
};
Button.propTypes = {
    type: _propTypes2['default'].string,
    shape: _propTypes2['default'].oneOf(['circle', 'circle-outline']),
    size: _propTypes2['default'].oneOf(['large', 'default', 'small']),
    htmlType: _propTypes2['default'].oneOf(['submit', 'button', 'reset']),
    onClick: _propTypes2['default'].func,
    loading: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
    className: _propTypes2['default'].string,
    icon: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

exports['default'] = function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        others = __rest(props, ["prefixCls", "className"]);

    var classString = (0, _classnames2['default'])(prefixCls + '-grid', className);
    return _react2['default'].createElement('div', (0, _extends3['default'])({}, others, { className: classString }));
};

module.exports = exports['default'];

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(111);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
// Use require over import (will be lifted up)
// make sure matchMedia polyfill run before require('react-slick')
// Fix https://github.com/ant-design/ant-design/issues/6560
// Fix https://github.com/ant-design/ant-design/issues/3308
var SlickCarousel = __webpack_require__(659)['default'];

var Carousel = function (_React$Component) {
    (0, _inherits3['default'])(Carousel, _React$Component);

    function Carousel() {
        (0, _classCallCheck3['default'])(this, Carousel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));

        _this.onWindowResized = function () {
            // Fix https://github.com/ant-design/ant-design/issues/2550
            var slick = _this.refs.slick;
            var autoplay = _this.props.autoplay;

            if (autoplay && slick && slick.innerSlider && slick.innerSlider.autoPlay) {
                slick.innerSlider.autoPlay();
            }
        };
        _this.onWindowResized = (0, _lodash2['default'])(_this.onWindowResized, 500, {
            leading: false
        });
        return _this;
    }

    (0, _createClass3['default'])(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var autoplay = this.props.autoplay;

            if (autoplay) {
                window.addEventListener('resize', this.onWindowResized);
            }
            var slick = this.refs.slick;
            // https://github.com/ant-design/ant-design/issues/7191

            this.innerSlider = slick && slick.innerSlider;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var autoplay = this.props.autoplay;

            if (autoplay) {
                window.removeEventListener('resize', this.onWindowResized);
                this.onWindowResized.cancel();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var props = (0, _extends3['default'])({}, this.props);
            if (props.effect === 'fade') {
                props.fade = true;
            }
            var className = props.prefixCls;
            if (props.vertical) {
                className = className + ' ' + className + '-vertical';
            }
            return _react2['default'].createElement(
                'div',
                { className: className },
                _react2['default'].createElement(SlickCarousel, (0, _extends3['default'])({ ref: 'slick' }, props))
            );
        }
    }]);
    return Carousel;
}(_react2['default'].Component);

exports['default'] = Carousel;

Carousel.defaultProps = {
    dots: true,
    arrows: false,
    prefixCls: 'ant-carousel',
    draggable: false
};
module.exports = exports['default'];

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1078);

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(42);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(57);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _Checkbox = __webpack_require__(345);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CheckboxGroup = function (_React$Component) {
    (0, _inherits3['default'])(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        (0, _classCallCheck3['default'])(this, CheckboxGroup);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

        _this.toggleOption = function (option) {
            var optionIndex = _this.state.value.indexOf(option.value);
            var value = [].concat((0, _toConsumableArray3['default'])(_this.state.value));
            if (optionIndex === -1) {
                value.push(option.value);
            } else {
                value.splice(optionIndex, 1);
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(value);
            }
        };
        _this.state = {
            value: props.value || props.defaultValue || []
        };
        return _this;
    }

    (0, _createClass3['default'])(CheckboxGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                checkboxGroup: {
                    toggleOption: this.toggleOption,
                    value: this.state.value,
                    disabled: this.props.disabled
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value || []
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState);
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            var options = this.props.options;
            // https://github.com/Microsoft/TypeScript/issues/7960

            return options.map(function (option) {
                if (typeof option === 'string') {
                    return {
                        label: option,
                        value: option
                    };
                }
                return option;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props,
                state = this.state;
            var prefixCls = props.prefixCls,
                className = props.className,
                options = props.options;

            var children = props.children;
            if (options && options.length > 0) {
                children = this.getOptions().map(function (option) {
                    return _react2['default'].createElement(
                        _Checkbox2['default'],
                        { key: option.value, disabled: 'disabled' in option ? option.disabled : props.disabled, value: option.value, checked: state.value.indexOf(option.value) !== -1, onChange: function onChange() {
                                return _this2.toggleOption(option);
                            }, className: prefixCls + '-item' },
                        option.label
                    );
                });
            }
            var classString = (0, _classnames2['default'])(prefixCls, className);
            return _react2['default'].createElement(
                'div',
                { className: classString },
                children
            );
        }
    }]);
    return CheckboxGroup;
}(_react2['default'].Component);

exports['default'] = CheckboxGroup;

CheckboxGroup.defaultProps = {
    options: [],
    prefixCls: 'ant-checkbox-group'
};
CheckboxGroup.propTypes = {
    defaultValue: _propTypes2['default'].array,
    value: _propTypes2['default'].array,
    options: _propTypes2['default'].array.isRequired,
    onChange: _propTypes2['default'].func
};
CheckboxGroup.childContextTypes = {
    checkboxGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(350);

exports['default'] = _grid.Col;
module.exports = exports['default'];

/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(235);

/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = __webpack_require__(346);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var ButtonGroup = _button2['default'].Group;

var DropdownButton = function (_React$Component) {
    (0, _inherits3['default'])(DropdownButton, _React$Component);

    function DropdownButton() {
        (0, _classCallCheck3['default'])(this, DropdownButton);
        return (0, _possibleConstructorReturn3['default'])(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).apply(this, arguments));
    }

    (0, _createClass3['default'])(DropdownButton, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                disabled = _a.disabled,
                onClick = _a.onClick,
                children = _a.children,
                prefixCls = _a.prefixCls,
                className = _a.className,
                overlay = _a.overlay,
                trigger = _a.trigger,
                align = _a.align,
                visible = _a.visible,
                onVisibleChange = _a.onVisibleChange,
                placement = _a.placement,
                getPopupContainer = _a.getPopupContainer,
                restProps = __rest(_a, ["type", "disabled", "onClick", "children", "prefixCls", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer"]);
            var dropdownProps = {
                align: align,
                overlay: overlay,
                trigger: disabled ? [] : trigger,
                onVisibleChange: onVisibleChange,
                placement: placement,
                getPopupContainer: getPopupContainer
            };
            if ('visible' in this.props) {
                dropdownProps.visible = visible;
            }
            return _react2['default'].createElement(
                ButtonGroup,
                (0, _extends3['default'])({}, restProps, { className: (0, _classnames2['default'])(prefixCls, className) }),
                _react2['default'].createElement(
                    _button2['default'],
                    { type: type, disabled: disabled, onClick: onClick },
                    children
                ),
                _react2['default'].createElement(
                    _dropdown2['default'],
                    dropdownProps,
                    _react2['default'].createElement(
                        _button2['default'],
                        { type: type, disabled: disabled },
                        _react2['default'].createElement(_icon2['default'], { type: 'down' })
                    )
                )
            );
        }
    }]);
    return DropdownButton;
}(_react2['default'].Component);

exports['default'] = DropdownButton;

DropdownButton.defaultProps = {
    placement: 'bottomRight',
    type: 'default',
    prefixCls: 'ant-dropdown-button'
};
module.exports = exports['default'];

/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1080);

__webpack_require__(19);

/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _createDOMForm = __webpack_require__(1385);

var _createDOMForm2 = _interopRequireDefault(_createDOMForm);

var _PureRenderMixin = __webpack_require__(618);

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _omit = __webpack_require__(32);

var _omit2 = _interopRequireDefault(_omit);

var _createReactClass = __webpack_require__(16);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

var _FormItem = __webpack_require__(797);

var _FormItem2 = _interopRequireDefault(_FormItem);

var _constants = __webpack_require__(348);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Form = function (_React$Component) {
    (0, _inherits3['default'])(Form, _React$Component);

    function Form(props) {
        (0, _classCallCheck3['default'])(this, Form);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        (0, _warning2['default'])(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
        return _this;
    }

    (0, _createClass3['default'])(Form, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _PureRenderMixin2['default'].shouldComponentUpdate.apply(this, args);
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            var _props = this.props,
                layout = _props.layout,
                vertical = _props.vertical;

            return {
                vertical: layout === 'vertical' || vertical
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                hideRequiredMark = _props2.hideRequiredMark,
                _props2$className = _props2.className,
                className = _props2$className === undefined ? '' : _props2$className,
                layout = _props2.layout,
                inline = _props2.inline,
                horizontal = _props2.horizontal,
                vertical = _props2.vertical;

            (0, _warning2['default'])(!inline && !horizontal && !vertical, '`Form[inline|horizontal|vertical]` is deprecated, please use `Form[layout]` instead.');
            var formClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-horizontal', !inline && !vertical && layout === 'horizontal' || horizontal), (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', layout === 'vertical' || vertical), (0, _defineProperty3['default'])(_classNames, prefixCls + '-inline', layout === 'inline' || inline), (0, _defineProperty3['default'])(_classNames, prefixCls + '-hide-required-mark', hideRequiredMark), _classNames), className);
            var formProps = (0, _omit2['default'])(this.props, ['prefixCls', 'className', 'layout', 'inline', 'horizontal', 'vertical', 'form', 'hideRequiredMark']);
            return _react2['default'].createElement('form', (0, _extends3['default'])({}, formProps, { className: formClassName }));
        }
    }]);
    return Form;
}(_react2['default'].Component);

exports['default'] = Form;

Form.defaultProps = {
    prefixCls: 'ant-form',
    layout: 'horizontal',
    hideRequiredMark: false,
    onSubmit: function onSubmit(e) {
        e.preventDefault();
    }
};
Form.propTypes = {
    prefixCls: _propTypes2['default'].string,
    layout: _propTypes2['default'].oneOf(['horizontal', 'inline', 'vertical']),
    children: _propTypes2['default'].any,
    onSubmit: _propTypes2['default'].func,
    hideRequiredMark: _propTypes2['default'].bool
};
Form.childContextTypes = {
    vertical: _propTypes2['default'].bool
};
Form.Item = _FormItem2['default'];
Form.create = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var formWrapper = (0, _createDOMForm2['default'])((0, _extends3['default'])({ fieldNameProp: 'id' }, options, { fieldMetaProp: _constants.FIELD_META_PROP }));
    /* eslint-disable react/prefer-es6-class */
    return function (Component) {
        return formWrapper((0, _createReactClass2['default'])({
            propTypes: {
                form: _propTypes2['default'].object.isRequired
            },
            childContextTypes: {
                form: _propTypes2['default'].object.isRequired
            },
            getChildContext: function getChildContext() {
                return {
                    form: this.props.form
                };
            },
            componentWillMount: function componentWillMount() {
                this.__getFieldProps = this.props.form.getFieldProps;
            },
            deprecatedGetFieldProps: function deprecatedGetFieldProps(name, option) {
                (0, _warning2['default'])(false, '`getFieldProps` is not recommended, please use `getFieldDecorator` instead, ' + 'see: https://u.ant.design/get-field-decorator');
                return this.__getFieldProps(name, option);
            },
            render: function render() {
                this.props.form.getFieldProps = this.deprecatedGetFieldProps;
                var withRef = {};
                if (options.withRef) {
                    withRef.ref = 'formWrappedComponent';
                } else if (this.props.wrappedComponentRef) {
                    withRef.ref = this.props.wrappedComponentRef;
                }
                return _react2['default'].createElement(Component, (0, _extends3['default'])({}, this.props, withRef));
            }
        }));
    };
};
module.exports = exports['default'];

/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRenderMixin = __webpack_require__(618);

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _row = __webpack_require__(351);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(349);

var _col2 = _interopRequireDefault(_col);

var _constants = __webpack_require__(348);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FormItem = function (_React$Component) {
    (0, _inherits3['default'])(FormItem, _React$Component);

    function FormItem() {
        (0, _classCallCheck3['default'])(this, FormItem);
        return (0, _possibleConstructorReturn3['default'])(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(FormItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _warning2['default'])(this.getControls(this.props.children, true).length <= 1, '`Form.Item` cannot generate `validateStatus` and `help` automatically, ' + 'while there are more than one `getFieldDecorator` in it.');
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _PureRenderMixin2['default'].shouldComponentUpdate.apply(this, args);
        }
    }, {
        key: 'getHelpMsg',
        value: function getHelpMsg() {
            var context = this.context;
            var props = this.props;
            if (props.help === undefined && context.form) {
                return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
            }
            return props.help;
        }
    }, {
        key: 'getControls',
        value: function getControls(children, recursively) {
            var controls = [];
            var childrenArray = _react2['default'].Children.toArray(children);
            for (var i = 0; i < childrenArray.length; i++) {
                if (!recursively && controls.length > 0) {
                    break;
                }
                var child = childrenArray[i];
                if (child.type === FormItem) {
                    continue;
                }
                if (!child.props) {
                    continue;
                }
                if (_constants.FIELD_META_PROP in child.props) {
                    controls.push(child);
                } else if (child.props.children) {
                    controls = controls.concat(this.getControls(child.props.children, recursively));
                }
            }
            return controls;
        }
    }, {
        key: 'getOnlyControl',
        value: function getOnlyControl() {
            var child = this.getControls(this.props.children, false)[0];
            return child !== undefined ? child : null;
        }
    }, {
        key: 'getChildProp',
        value: function getChildProp(prop) {
            var child = this.getOnlyControl();
            return child && child.props && child.props[prop];
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.getChildProp('id');
        }
    }, {
        key: 'getMeta',
        value: function getMeta() {
            return this.getChildProp(_constants.FIELD_META_PROP);
        }
    }, {
        key: 'renderHelp',
        value: function renderHelp() {
            var prefixCls = this.props.prefixCls;
            var help = this.getHelpMsg();
            return help ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-explain', key: 'help' },
                help
            ) : null;
        }
    }, {
        key: 'renderExtra',
        value: function renderExtra() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                extra = _props.extra;

            return extra ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-extra' },
                extra
            ) : null;
        }
    }, {
        key: 'getValidateStatus',
        value: function getValidateStatus() {
            var _context$form = this.context.form,
                isFieldValidating = _context$form.isFieldValidating,
                getFieldError = _context$form.getFieldError,
                getFieldValue = _context$form.getFieldValue;

            var fieldId = this.getId();
            if (!fieldId) {
                return '';
            }
            if (isFieldValidating(fieldId)) {
                return 'validating';
            }
            if (!!getFieldError(fieldId)) {
                return 'error';
            }
            var fieldValue = getFieldValue(fieldId);
            if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
                return 'success';
            }
            return '';
        }
    }, {
        key: 'renderValidateWrapper',
        value: function renderValidateWrapper(c1, c2, c3) {
            var classes = '';
            var form = this.context.form;
            var props = this.props;
            var validateStatus = props.validateStatus === undefined && form ? this.getValidateStatus() : props.validateStatus;
            if (validateStatus) {
                classes = (0, _classnames2['default'])({
                    'has-feedback': props.hasFeedback,
                    'has-success': validateStatus === 'success',
                    'has-warning': validateStatus === 'warning',
                    'has-error': validateStatus === 'error',
                    'is-validating': validateStatus === 'validating'
                });
            }
            return _react2['default'].createElement(
                'div',
                { className: this.props.prefixCls + '-item-control ' + classes },
                c1,
                c2,
                c3
            );
        }
    }, {
        key: 'renderWrapper',
        value: function renderWrapper(children) {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                wrapperCol = _props2.wrapperCol;

            var className = (0, _classnames2['default'])(prefixCls + '-item-control-wrapper', wrapperCol && wrapperCol.className);
            return _react2['default'].createElement(
                _col2['default'],
                (0, _extends3['default'])({}, wrapperCol, { className: className, key: 'wrapper' }),
                children
            );
        }
    }, {
        key: 'isRequired',
        value: function isRequired() {
            var required = this.props.required;

            if (required !== undefined) {
                return required;
            }
            if (this.context.form) {
                var meta = this.getMeta() || {};
                var validate = meta.validate || [];
                return validate.filter(function (item) {
                    return !!item.rules;
                }).some(function (item) {
                    return item.rules.some(function (rule) {
                        return rule.required;
                    });
                });
            }
            return false;
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                label = _props3.label,
                labelCol = _props3.labelCol,
                colon = _props3.colon,
                id = _props3.id;

            var context = this.context;
            var required = this.isRequired();
            var labelColClassName = (0, _classnames2['default'])(prefixCls + '-item-label', labelCol && labelCol.className);
            var labelClassName = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-item-required', required));
            var labelChildren = label;
            // Keep label is original where there should have no colon
            var haveColon = colon && !context.vertical;
            // Remove duplicated user input colon
            if (haveColon && typeof label === 'string' && label.trim() !== '') {
                labelChildren = label.replace(/[：|:]\s*$/, '');
            }
            return label ? _react2['default'].createElement(
                _col2['default'],
                (0, _extends3['default'])({}, labelCol, { className: labelColClassName, key: 'label' }),
                _react2['default'].createElement(
                    'label',
                    { htmlFor: id || this.getId(), className: labelClassName, title: typeof label === 'string' ? label : '' },
                    labelChildren
                )
            ) : null;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var props = this.props;
            var children = _react2['default'].Children.map(props.children, function (child) {
                if (child && typeof child.type === 'function' && !child.props.size) {
                    return _react2['default'].cloneElement(child, { size: 'large' });
                }
                return child;
            });
            return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
        }
    }, {
        key: 'renderFormItem',
        value: function renderFormItem(children) {
            var _itemClassName;

            var props = this.props;
            var prefixCls = props.prefixCls;
            var style = props.style;
            var itemClassName = (_itemClassName = {}, (0, _defineProperty3['default'])(_itemClassName, prefixCls + '-item', true), (0, _defineProperty3['default'])(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg()), (0, _defineProperty3['default'])(_itemClassName, prefixCls + '-item-no-colon', !props.colon), (0, _defineProperty3['default'])(_itemClassName, '' + props.className, !!props.className), _itemClassName);
            return _react2['default'].createElement(
                _row2['default'],
                { className: (0, _classnames2['default'])(itemClassName), style: style },
                children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.renderChildren();
            return this.renderFormItem(children);
        }
    }]);
    return FormItem;
}(_react2['default'].Component);

exports['default'] = FormItem;

FormItem.defaultProps = {
    hasFeedback: false,
    prefixCls: 'ant-form',
    colon: true
};
FormItem.propTypes = {
    prefixCls: _propTypes2['default'].string,
    label: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
    labelCol: _propTypes2['default'].object,
    help: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].bool]),
    validateStatus: _propTypes2['default'].oneOf(['', 'success', 'warning', 'error', 'validating']),
    hasFeedback: _propTypes2['default'].bool,
    wrapperCol: _propTypes2['default'].object,
    className: _propTypes2['default'].string,
    id: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    colon: _propTypes2['default'].bool
};
FormItem.contextTypes = {
    form: _propTypes2['default'].object,
    vertical: _propTypes2['default'].bool
};
module.exports = exports['default'];

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(235);

/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Group = function Group(props) {
    var _classNames;

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-input-group' : _props$prefixCls,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className;

    var cls = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', props.size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-compact', props.compact), _classNames), className);
    return _react2['default'].createElement(
        'span',
        { className: cls, style: props.style },
        props.children
    );
};
exports['default'] = Group;
module.exports = exports['default'];

/***/ },

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = __webpack_require__(352);

var _Input2 = _interopRequireDefault(_Input);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Search = function (_React$Component) {
    (0, _inherits3['default'])(Search, _React$Component);

    function Search() {
        (0, _classCallCheck3['default'])(this, Search);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));

        _this.onSearch = function () {
            var onSearch = _this.props.onSearch;

            if (onSearch) {
                onSearch(_this.input.refs.input.value);
            }
            _this.input.focus();
        };
        return _this;
    }

    (0, _createClass3['default'])(Search, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                others = __rest(_a, ["className", "prefixCls"]);
            delete others.onSearch;
            var searchSuffix = _react2['default'].createElement(_icon2['default'], { className: prefixCls + '-icon', onClick: this.onSearch, type: 'search' });
            return _react2['default'].createElement(_Input2['default'], (0, _extends3['default'])({ onPressEnter: this.onSearch }, others, { className: (0, _classnames2['default'])(prefixCls, className), suffix: searchSuffix, ref: function ref(node) {
                    return _this2.input = node;
                } }));
        }
    }]);
    return Search;
}(_react2['default'].Component);

exports['default'] = Search;

Search.defaultProps = {
    prefixCls: 'ant-input-search'
};
module.exports = exports['default'];

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = calculateNodeHeight;
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea = void 0;
function calculateNodeStyling(node) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    var style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    var sizingStyle = SIZING_STYLE.map(function (name) {
        return name + ':' + style.getPropertyValue(name);
    }).join(';');
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox

    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        sizingStyle = _calculateNodeStyling.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content


    hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    var minHeight = -Infinity;
    var maxHeight = Infinity;
    var height = hiddenTextarea.scrollHeight;
    var overflowY = void 0;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = '';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }
    return { height: height, minHeight: minHeight, maxHeight: maxHeight, overflowY: overflowY };
}
module.exports = exports['default'];

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(32);

var _omit2 = _interopRequireDefault(_omit);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var dimensionMap = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px'
};

var Sider = function (_React$Component) {
    (0, _inherits3['default'])(Sider, _React$Component);

    function Sider(props) {
        (0, _classCallCheck3['default'])(this, Sider);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

        _this.responsiveHandler = function (mql) {
            _this.setState({ below: mql.matches });
            if (_this.state.collapsed !== mql.matches) {
                _this.setCollapsed(mql.matches, 'responsive');
            }
        };
        _this.setCollapsed = function (collapsed, type) {
            if (!('collapsed' in _this.props)) {
                _this.setState({
                    collapsed: collapsed
                });
            }
            var onCollapse = _this.props.onCollapse;

            if (onCollapse) {
                onCollapse(collapsed, type);
            }
        };
        _this.toggle = function () {
            var collapsed = !_this.state.collapsed;
            _this.setCollapsed(collapsed, 'clickTrigger');
        };
        _this.belowShowChange = function () {
            _this.setState({ belowShow: !_this.state.belowShow });
        };
        var matchMedia = void 0;
        if (typeof window !== 'undefined') {
            matchMedia = window.matchMedia;
        }
        if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
            _this.mql = matchMedia('(max-width: ' + dimensionMap[props.breakpoint] + ')');
        }
        var collapsed = void 0;
        if ('collapsed' in props) {
            collapsed = props.collapsed;
        } else {
            collapsed = props.defaultCollapsed;
        }
        _this.state = {
            collapsed: collapsed,
            below: false
        };
        return _this;
    }

    (0, _createClass3['default'])(Sider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                siderCollapsed: this.props.collapsed
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('collapsed' in nextProps) {
                this.setState({
                    collapsed: nextProps.collapsed
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.mql) {
                this.mql.addListener(this.responsiveHandler);
                this.responsiveHandler(this.mql);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.mql) {
                this.mql.removeListener(this.responsiveHandler);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                collapsible = _a.collapsible,
                reverseArrow = _a.reverseArrow,
                trigger = _a.trigger,
                style = _a.style,
                width = _a.width,
                collapsedWidth = _a.collapsedWidth,
                others = __rest(_a, ["prefixCls", "className", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);
            var divProps = (0, _omit2['default'])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint']);
            var siderWidth = this.state.collapsed ? collapsedWidth : width;
            // special trigger when collapsedWidth == 0
            var zeroWidthTrigger = collapsedWidth === 0 || collapsedWidth === '0' ? _react2['default'].createElement(
                'span',
                { onClick: this.toggle, className: prefixCls + '-zero-width-trigger' },
                _react2['default'].createElement(_icon2['default'], { type: 'bars' })
            ) : null;
            var iconObj = {
                'expanded': reverseArrow ? _react2['default'].createElement(_icon2['default'], { type: 'right' }) : _react2['default'].createElement(_icon2['default'], { type: 'left' }),
                'collapsed': reverseArrow ? _react2['default'].createElement(_icon2['default'], { type: 'left' }) : _react2['default'].createElement(_icon2['default'], { type: 'right' })
            };
            var status = this.state.collapsed ? 'collapsed' : 'expanded';
            var defaultTrigger = iconObj[status];
            var triggerDom = trigger !== null ? zeroWidthTrigger || _react2['default'].createElement(
                'div',
                { className: prefixCls + '-trigger', onClick: this.toggle, style: { width: siderWidth } },
                trigger || defaultTrigger
            ) : null;
            var divStyle = (0, _extends3['default'])({}, style, { flex: '0 0 ' + siderWidth + 'px', maxWidth: siderWidth + 'px', minWidth: siderWidth + 'px', width: siderWidth + 'px' });
            var siderCls = (0, _classnames2['default'])(className, prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-collapsed', !!this.state.collapsed), (0, _defineProperty3['default'])(_classNames, prefixCls + '-has-trigger', !!trigger), (0, _defineProperty3['default'])(_classNames, prefixCls + '-below', !!this.state.below), (0, _defineProperty3['default'])(_classNames, prefixCls + '-zero-width', siderWidth === 0 || siderWidth === '0'), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: siderCls }, divProps, { style: divStyle }),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-children' },
                    this.props.children
                ),
                collapsible || this.state.below && zeroWidthTrigger ? triggerDom : null
            );
        }
    }]);
    return Sider;
}(_react2['default'].Component);

exports['default'] = Sider;

Sider.__ANT_LAYOUT_SIDER = true;
Sider.defaultProps = {
    prefixCls: 'ant-layout-sider',
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 64,
    style: {}
};
Sider.childContextTypes = {
    siderCollapsed: _propTypes2['default'].bool
};
module.exports = exports['default'];

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

function generator(props) {
    return function (BacicComponent) {
        return function (_React$Component) {
            (0, _inherits3['default'])(Adapter, _React$Component);

            function Adapter() {
                (0, _classCallCheck3['default'])(this, Adapter);
                return (0, _possibleConstructorReturn3['default'])(this, (Adapter.__proto__ || Object.getPrototypeOf(Adapter)).apply(this, arguments));
            }

            (0, _createClass3['default'])(Adapter, [{
                key: 'render',
                value: function render() {
                    var prefixCls = props.prefixCls;

                    return _react2['default'].createElement(BacicComponent, (0, _extends3['default'])({ prefixCls: prefixCls }, this.props));
                }
            }]);
            return Adapter;
        }(_react2['default'].Component);
    };
}

var Basic = function (_React$Component2) {
    (0, _inherits3['default'])(Basic, _React$Component2);

    function Basic() {
        (0, _classCallCheck3['default'])(this, Basic);
        return (0, _possibleConstructorReturn3['default'])(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Basic, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                others = __rest(_a, ["prefixCls", "className", "children"]);
            var hasSider = void 0;
            _react2['default'].Children.forEach(children, function (element) {
                if (element && element.type && element.type.__ANT_LAYOUT_SIDER) {
                    hasSider = true;
                }
            });
            var divCls = (0, _classnames2['default'])(className, prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-has-sider', hasSider));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: divCls }, others),
                children
            );
        }
    }]);
    return Basic;
}(_react2['default'].Component);

var Layout = generator({
    prefixCls: 'ant-layout'
})(Basic);
var Header = generator({
    prefixCls: 'ant-layout-header'
})(Basic);
var Footer = generator({
    prefixCls: 'ant-layout-footer'
})(Basic);
var Content = generator({
    prefixCls: 'ant-layout-content'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
exports['default'] = Layout;
module.exports = exports['default'];

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (componentName, defaultLocale) {
    return function (Component) {
        var ComponentWithStatics = Component;
        return _a = function (_Component) {
            (0, _inherits3['default'])(_a, _Component);

            function _a() {
                (0, _classCallCheck3['default'])(this, _a);
                return (0, _possibleConstructorReturn3['default'])(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));
            }

            (0, _createClass3['default'])(_a, [{
                key: 'getLocale',
                value: function getLocale() {
                    var antLocale = this.context.antLocale;

                    var localeFromContext = antLocale && antLocale[componentName];
                    var localeFromProps = this.props.locale || {};
                    return (0, _extends3['default'])({}, defaultLocale, localeFromContext || {}, localeFromProps);
                }
            }]);
            return _a;
        }(Component), _a.propTypes = ComponentWithStatics.propTypes, _a.defaultProps = ComponentWithStatics.defaultProps, _a.contextTypes = (0, _extends3['default'])({}, ComponentWithStatics.context || {}, { antLocale: _propTypes2['default'].object }), _a;
        var _a;
    };
};

module.exports = exports['default'];

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcEditorMention = __webpack_require__(585);

var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(57);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Mention = function (_React$Component) {
    (0, _inherits3['default'])(Mention, _React$Component);

    function Mention(props) {
        (0, _classCallCheck3['default'])(this, Mention);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Mention.__proto__ || Object.getPrototypeOf(Mention)).call(this, props));

        _this.onSearchChange = function (value, prefix) {
            if (_this.props.onSearchChange) {
                return _this.props.onSearchChange(value, prefix);
            }
            return _this.defaultSearchChange(value);
        };
        _this.onChange = function (editorState) {
            if (_this.props.onChange) {
                _this.props.onChange(editorState);
            }
        };
        _this.onFocus = function (ev) {
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
        };
        _this.onBlur = function (ev) {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this.focus = function () {
            _this.mentionEle._editor.focus();
        };
        _this.mentionRef = function (ele) {
            _this.mentionEle = ele;
        };
        _this.state = {
            suggestions: props.suggestions,
            focus: false
        };
        return _this;
    }

    (0, _createClass3['default'])(Mention, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var suggestions = nextProps.suggestions;

            if (!(0, _shallowequal2['default'])(suggestions, this.props.suggestions)) {
                this.setState({
                    suggestions: suggestions
                });
            }
        }
    }, {
        key: 'defaultSearchChange',
        value: function defaultSearchChange(value) {
            var searchValue = value.toLowerCase();
            var filteredSuggestions = (this.props.suggestions || []).filter(function (suggestion) {
                return suggestion.toLowerCase().indexOf(searchValue) !== -1;
            });
            this.setState({
                suggestions: filteredSuggestions
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                prefixCls = _props.prefixCls,
                loading = _props.loading;
            var _state = this.state,
                suggestions = _state.suggestions,
                focus = _state.focus;

            var cls = (0, _classnames2['default'])(className, (0, _defineProperty3['default'])({}, prefixCls + '-active', focus));
            var notFoundContent = loading ? _react2['default'].createElement(_icon2['default'], { type: 'loading' }) : this.props.notFoundContent;
            return _react2['default'].createElement(_rcEditorMention2['default'], (0, _extends3['default'])({}, this.props, { className: cls, ref: this.mentionRef, onSearchChange: this.onSearchChange, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, suggestions: suggestions, notFoundContent: notFoundContent }));
        }
    }]);
    return Mention;
}(_react2['default'].Component);

exports['default'] = Mention;

Mention.getMentions = _rcEditorMention.getMentions;
Mention.defaultProps = {
    prefixCls: 'ant-mention',
    notFoundContent: '无匹配结果，轻敲空格完成输入',
    loading: false,
    multiLines: false
};
Mention.Nav = _rcEditorMention.Nav;
Mention.toString = _rcEditorMention.toString;
Mention.toContentState = _rcEditorMention.toEditorState;
Mention.toEditorState = function (text) {
    console.warn('Mention.toEditorState is deprecated. Use toContentState instead.');
    return (0, _rcEditorMention.toEditorState)(text);
};
module.exports = exports['default'];

/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1084);

/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcMenu = __webpack_require__(78);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tooltip = __webpack_require__(838);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MenuItem = function MenuItem(props, _ref) {
    var inlineCollapsed = _ref.inlineCollapsed;

    return _react2['default'].createElement(
        _tooltip2['default'],
        { title: inlineCollapsed && props.level === 1 ? props.children : '', placement: 'right', overlayClassName: props.rootPrefixCls + '-inline-collapsed-tooltip' },
        _react2['default'].createElement(_rcMenu.Item, props)
    );
};
MenuItem.contextTypes = {
    inlineCollapsed: _propTypes2['default'].bool
};
MenuItem.isMenuItem = 1;
exports['default'] = MenuItem;
module.exports = exports['default'];

/***/ },

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ActionButton = function (_React$Component) {
    (0, _inherits3['default'])(ActionButton, _React$Component);

    function ActionButton(props) {
        (0, _classCallCheck3['default'])(this, ActionButton);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                actionFn = _this$props.actionFn,
                closeModal = _this$props.closeModal;

            if (actionFn) {
                var ret = void 0;
                if (actionFn.length) {
                    ret = actionFn(closeModal);
                } else {
                    ret = actionFn();
                    if (!ret) {
                        closeModal();
                    }
                }
                if (ret && ret.then) {
                    _this.setState({ loading: true });
                    ret.then(function () {
                        // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
                        // this.setState({ loading: false });
                        closeModal.apply(undefined, arguments);
                    }, function () {
                        // See: https://github.com/ant-design/ant-design/issues/6183
                        _this.setState({ loading: false });
                    });
                }
            } else {
                closeModal();
            }
        };
        _this.state = {
            loading: false
        };
        return _this;
    }

    (0, _createClass3['default'])(ActionButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.autoFocus) {
                var $this = _reactDom2['default'].findDOMNode(this);
                this.timeoutId = setTimeout(function () {
                    return $this.focus();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                children = _props.children;

            var loading = this.state.loading;
            return _react2['default'].createElement(
                _button2['default'],
                { type: type, size: 'large', onClick: this.onClick, loading: loading },
                children
            );
        }
    }]);
    return ActionButton;
}(_react2['default'].Component);

exports['default'] = ActionButton;
module.exports = exports['default'];

/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = confirm;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _Modal = __webpack_require__(354);

var _Modal2 = _interopRequireDefault(_Modal);

var _ActionButton = __webpack_require__(808);

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _locale = __webpack_require__(810);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function confirm(config) {
    var props = (0, _extends3['default'])({ iconType: 'question-circle' }, config);
    var prefixCls = props.prefixCls || 'ant-confirm';
    var div = document.createElement('div');
    document.body.appendChild(div);
    var width = props.width || 416;
    var style = props.style || {};
    // 默认为 false，保持旧版默认行为
    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
    // 默认为 true，保持向下兼容
    if (!('okCancel' in props)) {
        props.okCancel = true;
    }
    var runtimeLocale = (0, _locale.getConfirmLocale)();
    props.okText = props.okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    props.cancelText = props.cancelText || runtimeLocale.cancelText;
    function close() {
        var unmountResult = _reactDom2['default'].unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var triggerCancel = args && args.length && args.some(function (param) {
            return param && param.triggerCancel;
        });
        if (props.onCancel && triggerCancel) {
            props.onCancel.apply(props, args);
        }
    }
    var body = _react2['default'].createElement(
        'div',
        { className: prefixCls + '-body' },
        _react2['default'].createElement(_icon2['default'], { type: props.iconType }),
        _react2['default'].createElement(
            'span',
            { className: prefixCls + '-title' },
            props.title
        ),
        _react2['default'].createElement(
            'div',
            { className: prefixCls + '-content' },
            props.content
        )
    );
    var footer = null;
    if (props.okCancel) {
        footer = _react2['default'].createElement(
            'div',
            { className: prefixCls + '-btns' },
            _react2['default'].createElement(
                _ActionButton2['default'],
                { actionFn: props.onCancel, closeModal: close },
                props.cancelText
            ),
            _react2['default'].createElement(
                _ActionButton2['default'],
                { type: 'primary', actionFn: props.onOk, closeModal: close, autoFocus: true },
                props.okText
            )
        );
    } else {
        footer = _react2['default'].createElement(
            'div',
            { className: prefixCls + '-btns' },
            _react2['default'].createElement(
                _ActionButton2['default'],
                { type: 'primary', actionFn: props.onOk, closeModal: close, autoFocus: true },
                props.okText
            )
        );
    }
    var classString = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + props.type, true), props.className);
    _reactDom2['default'].render(_react2['default'].createElement(
        _Modal2['default'],
        { className: classString, onCancel: close.bind(this, { triggerCancel: true }), visible: true, title: '', transitionName: 'zoom', footer: '', maskTransitionName: 'fade', maskClosable: maskClosable, style: style, width: width },
        _react2['default'].createElement(
            'div',
            { className: prefixCls + '-body-wrapper' },
            body,
            ' ',
            footer
        )
    ), div);
    return {
        destroy: close
    };
}
module.exports = exports['default'];

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultLocale = {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了'
};
var runtimeLocale = (0, _extends3['default'])({}, defaultLocale);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = (0, _extends3['default'])({}, runtimeLocale, newLocale);
    } else {
        runtimeLocale = (0, _extends3['default'])({}, defaultLocale);
    }
}
function getConfirmLocale() {
    return runtimeLocale;
}

/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MiniSelect = function (_React$Component) {
    (0, _inherits3['default'])(MiniSelect, _React$Component);

    function MiniSelect() {
        (0, _classCallCheck3['default'])(this, MiniSelect);
        return (0, _possibleConstructorReturn3['default'])(this, (MiniSelect.__proto__ || Object.getPrototypeOf(MiniSelect)).apply(this, arguments));
    }

    (0, _createClass3['default'])(MiniSelect, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_select2['default'], (0, _extends3['default'])({ size: 'small' }, this.props));
        }
    }]);
    return MiniSelect;
}(_react2['default'].Component);

exports['default'] = MiniSelect;

MiniSelect.Option = _select2['default'].Option;
module.exports = exports['default'];

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcPagination = __webpack_require__(593);

var _rcPagination2 = _interopRequireDefault(_rcPagination);

var _zh_CN = __webpack_require__(1404);

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _injectLocale = __webpack_require__(804);

var _injectLocale2 = _interopRequireDefault(_injectLocale);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _MiniSelect = __webpack_require__(811);

var _MiniSelect2 = _interopRequireDefault(_MiniSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Pagination = function (_React$Component) {
    (0, _inherits3['default'])(Pagination, _React$Component);

    function Pagination() {
        (0, _classCallCheck3['default'])(this, Pagination);
        return (0, _possibleConstructorReturn3['default'])(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Pagination, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                className = _a.className,
                size = _a.size,
                restProps = __rest(_a, ["className", "size"]);
            var locale = this.getLocale();
            var isSmall = size === 'small';
            return _react2['default'].createElement(_rcPagination2['default'], (0, _extends3['default'])({}, restProps, { className: (0, _classnames2['default'])(className, { mini: isSmall }), selectComponentClass: isSmall ? _MiniSelect2['default'] : _select2['default'], locale: locale }));
        }
    }]);
    return Pagination;
}(_react2['default'].Component);

Pagination.defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select'
};
var injectPaginationLocale = (0, _injectLocale2['default'])('Pagination', _zh_CN2['default']);
exports['default'] = injectPaginationLocale(Pagination);
module.exports = exports['default'];

/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pagination = __webpack_require__(812);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Pagination2['default'];
module.exports = exports['default'];

/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1088);

__webpack_require__(39);

__webpack_require__(38);

/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(57);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _radio = __webpack_require__(207);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getCheckedValue(children) {
    var value = null;
    var matched = false;
    _react2['default'].Children.forEach(children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
    (0, _inherits3['default'])(RadioGroup, _React$Component);

    function RadioGroup(props) {
        (0, _classCallCheck3['default'])(this, RadioGroup);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

        _this.onRadioChange = function (ev) {
            var lastValue = _this.state.value;
            var value = ev.target.value;

            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            var onChange = _this.props.onChange;
            if (onChange && value !== lastValue) {
                onChange(ev);
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            var checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    (0, _createClass3['default'])(RadioGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                radioGroup: {
                    onChange: this.onRadioChange,
                    value: this.state.value,
                    disabled: this.props.disabled
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            } else {
                var checkedValue = getCheckedValue(nextProps.children);
                if (checkedValue) {
                    this.setState({
                        value: checkedValue.value
                    });
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-radio-group' : _props$prefixCls,
                _props$className = props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classString = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + props.size, props.size), className);
            var children = props.children;
            // 如果存在 options, 优先使用
            if (props.options && props.options.length > 0) {
                children = props.options.map(function (option, index) {
                    if (typeof option === 'string') {
                        return _react2['default'].createElement(
                            _radio2['default'],
                            { key: index, disabled: _this2.props.disabled, value: option, onChange: _this2.onRadioChange, checked: _this2.state.value === option },
                            option
                        );
                    } else {
                        return _react2['default'].createElement(
                            _radio2['default'],
                            { key: index, disabled: option.disabled || _this2.props.disabled, value: option.value, onChange: _this2.onRadioChange, checked: _this2.state.value === option.value },
                            option.label
                        );
                    }
                });
            }
            return _react2['default'].createElement(
                'div',
                { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                children
            );
        }
    }]);
    return RadioGroup;
}(_react2['default'].Component);

exports['default'] = RadioGroup;

RadioGroup.defaultProps = {
    disabled: false
};
RadioGroup.childContextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ },

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radio = __webpack_require__(207);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RadioButton = function (_React$Component) {
    (0, _inherits3['default'])(RadioButton, _React$Component);

    function RadioButton() {
        (0, _classCallCheck3['default'])(this, RadioButton);
        return (0, _possibleConstructorReturn3['default'])(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    (0, _createClass3['default'])(RadioButton, [{
        key: 'render',
        value: function render() {
            var radioProps = (0, _extends3['default'])({}, this.props);
            if (this.context.radioGroup) {
                radioProps.onChange = this.context.radioGroup.onChange;
                radioProps.checked = this.props.value === this.context.radioGroup.value;
                radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
            }
            return _react2['default'].createElement(_radio2['default'], radioProps);
        }
    }]);
    return RadioButton;
}(_react2['default'].Component);

exports['default'] = RadioButton;

RadioButton.defaultProps = {
    prefixCls: 'ant-radio-button'
};
RadioButton.contextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ },

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(350);

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(235);

/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = __webpack_require__(45);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _isCssAnimationSupported = __webpack_require__(779);

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _omit = __webpack_require__(32);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Spin = function (_React$Component) {
    (0, _inherits3['default'])(Spin, _React$Component);

    function Spin(props) {
        (0, _classCallCheck3['default'])(this, Spin);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

        var spinning = props.spinning;
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    (0, _createClass3['default'])(Spin, [{
        key: 'isNestedPattern',
        value: function isNestedPattern() {
            return !!(this.props && this.props.children);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!(0, _isCssAnimationSupported2['default'])()) {
                // Show text in IE8/9
                this.setState({
                    notCssAnimationSupported: true
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentSpinning = this.props.spinning;
            var spinning = nextProps.spinning;
            var delay = this.props.delay;

            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (currentSpinning && !spinning) {
                this.debounceTimeout = setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, 300);
                if (this.delayTimeout) {
                    clearTimeout(this.delayTimeout);
                }
            } else {
                if (spinning && delay && !isNaN(Number(delay))) {
                    if (this.delayTimeout) {
                        clearTimeout(this.delayTimeout);
                    }
                    this.delayTimeout = setTimeout(function () {
                        return _this2.setState({ spinning: spinning });
                    }, delay);
                } else {
                    this.setState({ spinning: spinning });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                className = _a.className,
                size = _a.size,
                prefixCls = _a.prefixCls,
                tip = _a.tip,
                wrapperClassName = _a.wrapperClassName,
                restProps = __rest(_a, ["className", "size", "prefixCls", "tip", "wrapperClassName"]);var _state = this.state,
                spinning = _state.spinning,
                notCssAnimationSupported = _state.notCssAnimationSupported;

            var spinClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-spinning', spinning), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-text', !!tip || notCssAnimationSupported), _classNames), className);
            // fix https://fb.me/react-unknown-prop
            var divProps = (0, _omit2['default'])(restProps, ['spinning', 'delay']);
            var spinElement = _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, divProps, { className: spinClassName }),
                _react2['default'].createElement(
                    'span',
                    { className: prefixCls + '-dot' },
                    _react2['default'].createElement('i', null),
                    _react2['default'].createElement('i', null),
                    _react2['default'].createElement('i', null),
                    _react2['default'].createElement('i', null)
                ),
                tip ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-text' },
                    tip
                ) : null
            );
            if (this.isNestedPattern()) {
                var _classNames2;

                var animateClassName = prefixCls + '-nested-loading';
                if (wrapperClassName) {
                    animateClassName += ' ' + wrapperClassName;
                }
                var containerClassName = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-container', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-blur', spinning), _classNames2));
                return _react2['default'].createElement(
                    _rcAnimate2['default'],
                    (0, _extends3['default'])({}, divProps, { component: 'div', className: animateClassName, style: null, transitionName: 'fade' }),
                    spinning && _react2['default'].createElement(
                        'div',
                        { key: 'loading' },
                        spinElement
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: containerClassName, key: 'container' },
                        this.props.children
                    )
                );
            }
            return spinElement;
        }
    }]);
    return Spin;
}(_react2['default'].Component);

exports['default'] = Spin;

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true,
    size: 'default',
    wrapperClassName: ''
};
Spin.propTypes = {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    spinning: _propTypes2['default'].bool,
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    wrapperClassName: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1091);

/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSwitch = __webpack_require__(601);

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Switch = function (_React$Component) {
    (0, _inherits3['default'])(Switch, _React$Component);

    function Switch() {
        (0, _classCallCheck3['default'])(this, Switch);
        return (0, _possibleConstructorReturn3['default'])(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Switch, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classes = (0, _classnames2['default'])(className, (0, _defineProperty3['default'])({}, prefixCls + '-small', size === 'small'));
            return _react2['default'].createElement(_rcSwitch2['default'], (0, _extends3['default'])({}, this.props, { className: classes }));
        }
    }]);
    return Switch;
}(_react2['default'].Component);

exports['default'] = Switch;

Switch.defaultProps = {
    prefixCls: 'ant-switch'
};
Switch.propTypes = {
    prefixCls: _propTypes2['default'].string,
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    className: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1092);

/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Column = function (_React$Component) {
  (0, _inherits3['default'])(Column, _React$Component);

  function Column() {
    (0, _classCallCheck3['default'])(this, Column);
    return (0, _possibleConstructorReturn3['default'])(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  return Column;
}(_react2['default'].Component);

exports['default'] = Column;
module.exports = exports['default'];

/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ColumnGroup = function (_React$Component) {
  (0, _inherits3['default'])(ColumnGroup, _React$Component);

  function ColumnGroup() {
    (0, _classCallCheck3['default'])(this, ColumnGroup);
    return (0, _possibleConstructorReturn3['default'])(this, (ColumnGroup.__proto__ || Object.getPrototypeOf(ColumnGroup)).apply(this, arguments));
  }

  return ColumnGroup;
}(_react2['default'].Component);

exports['default'] = ColumnGroup;

ColumnGroup.__ANT_TABLE_COLUMN_GROUP = true;
module.exports = exports['default'];

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (props) {
    return _react2['default'].createElement(
        'div',
        { className: props.className, onClick: props.onClick },
        props.children
    );
};

module.exports = exports['default'];

/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checkbox = __webpack_require__(104);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__(206);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SelectionBox = function (_React$Component) {
    (0, _inherits3['default'])(SelectionBox, _React$Component);

    function SelectionBox(props) {
        (0, _classCallCheck3['default'])(this, SelectionBox);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SelectionBox.__proto__ || Object.getPrototypeOf(SelectionBox)).call(this, props));

        _this.state = {
            checked: _this.getCheckState(props)
        };
        return _this;
    }

    (0, _createClass3['default'])(SelectionBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                var checked = _this2.getCheckState(_this2.props);
                _this2.setState({ checked: checked });
            });
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                defaultSelection = props.defaultSelection,
                rowIndex = props.rowIndex;

            var checked = false;
            if (store.getState().selectionDirty) {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
            }
            return checked;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                rowIndex = _props.rowIndex,
                disabled = _props.disabled,
                onChange = _props.onChange;
            var checked = this.state.checked;

            if (type === 'radio') {
                return _react2['default'].createElement(_radio2['default'], { disabled: disabled, onChange: onChange, value: rowIndex, checked: checked });
            }
            return _react2['default'].createElement(_checkbox2['default'], { checked: checked, disabled: disabled, onChange: onChange });
        }
    }]);
    return SelectionBox;
}(_react2['default'].Component);

exports['default'] = SelectionBox;
module.exports = exports['default'];

/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checkbox = __webpack_require__(104);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _dropdown = __webpack_require__(347);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__(129);

var _menu2 = _interopRequireDefault(_menu);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SelectionCheckboxAll = function (_React$Component) {
    (0, _inherits3['default'])(SelectionCheckboxAll, _React$Component);

    function SelectionCheckboxAll(props) {
        (0, _classCallCheck3['default'])(this, SelectionCheckboxAll);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SelectionCheckboxAll.__proto__ || Object.getPrototypeOf(SelectionCheckboxAll)).call(this, props));

        _this.handleSelectAllChagne = function (e) {
            var checked = e.target.checked;
            _this.props.onSelect(checked ? 'all' : 'removeAll', 0, null);
        };
        _this.defaultSelections = [{
            key: 'all',
            text: props.locale.selectAll,
            onSelect: function onSelect() {}
        }, {
            key: 'invert',
            text: props.locale.selectInvert,
            onSelect: function onSelect() {}
        }];
        _this.state = {
            checked: _this.getCheckState(props),
            indeterminate: _this.getIndeterminateState(props)
        };
        return _this;
    }

    (0, _createClass3['default'])(SelectionCheckboxAll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setCheckState(nextProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                _this2.setCheckState(_this2.props);
            });
        }
    }, {
        key: 'checkSelection',
        value: function checkSelection(data, type, byDefaultChecked) {
            var _props = this.props,
                store = _props.store,
                getCheckboxPropsByItem = _props.getCheckboxPropsByItem,
                getRecordKey = _props.getRecordKey;
            // type should be 'every' | 'some'

            if (type === 'every' || type === 'some') {
                return byDefaultChecked ? data[type](function (item, i) {
                    return getCheckboxPropsByItem(item, i).defaultChecked;
                }) : data[type](function (item, i) {
                    return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
                });
            }
            return false;
        }
    }, {
        key: 'setCheckState',
        value: function setCheckState(props) {
            var checked = this.getCheckState(props);
            var indeterminate = this.getIndeterminateState(props);
            if (checked !== this.state.checked) {
                this.setState({ checked: checked });
            }
            if (indeterminate !== this.state.indeterminate) {
                this.setState({ indeterminate: indeterminate });
            }
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                data = props.data;

            var checked = void 0;
            if (!data.length) {
                checked = false;
            } else {
                checked = store.getState().selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
            }
            return checked;
        }
    }, {
        key: 'getIndeterminateState',
        value: function getIndeterminateState(props) {
            var store = props.store,
                data = props.data;

            var indeterminate = void 0;
            if (!data.length) {
                indeterminate = false;
            } else {
                indeterminate = store.getState().selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
            }
            return indeterminate;
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(selections) {
            var _this3 = this;

            return selections.map(function (selection, index) {
                return _react2['default'].createElement(
                    _menu2['default'].Item,
                    { key: selection.key || index },
                    _react2['default'].createElement(
                        'div',
                        { onClick: function onClick() {
                                _this3.props.onSelect(selection.key, index, selection.onSelect);
                            } },
                        selection.text
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                disabled = _props2.disabled,
                prefixCls = _props2.prefixCls,
                selections = _props2.selections,
                getPopupContainer = _props2.getPopupContainer;
            var _state = this.state,
                checked = _state.checked,
                indeterminate = _state.indeterminate;

            var selectionPrefixCls = prefixCls + '-selection';
            var customSelections = null;
            if (selections) {
                var newSelections = Array.isArray(selections) ? this.defaultSelections.concat(selections) : this.defaultSelections;
                var menu = _react2['default'].createElement(
                    _menu2['default'],
                    { className: selectionPrefixCls + '-menu', selectedKeys: [] },
                    this.renderMenus(newSelections)
                );
                customSelections = _react2['default'].createElement(
                    _dropdown2['default'],
                    { overlay: menu, getPopupContainer: getPopupContainer },
                    _react2['default'].createElement(
                        'div',
                        { className: selectionPrefixCls + '-down' },
                        _react2['default'].createElement(_icon2['default'], { type: 'down' })
                    )
                );
            }
            return _react2['default'].createElement(
                'div',
                { className: selectionPrefixCls },
                _react2['default'].createElement(_checkbox2['default'], { className: (0, _classnames2['default'])((0, _defineProperty3['default'])({}, selectionPrefixCls + '-select-all-custom', customSelections)), checked: checked, indeterminate: indeterminate, disabled: disabled, onChange: this.handleSelectAllChagne }),
                customSelections
            );
        }
    }]);
    return SelectionCheckboxAll;
}(_react2['default'].Component);

exports['default'] = SelectionCheckboxAll;
module.exports = exports['default'];

/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__(1);

var _extends5 = _interopRequireDefault(_extends4);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _rcTable = __webpack_require__(602);

var _rcTable2 = _interopRequireDefault(_rcTable);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _pagination = __webpack_require__(813);

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _spin = __webpack_require__(819);

var _spin2 = _interopRequireDefault(_spin);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

var _filterDropdown = __webpack_require__(830);

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _createStore = __webpack_require__(829);

var _createStore2 = _interopRequireDefault(_createStore);

var _SelectionBox = __webpack_require__(826);

var _SelectionBox2 = _interopRequireDefault(_SelectionBox);

var _SelectionCheckboxAll = __webpack_require__(827);

var _SelectionCheckboxAll2 = _interopRequireDefault(_SelectionCheckboxAll);

var _Column = __webpack_require__(823);

var _Column2 = _interopRequireDefault(_Column);

var _ColumnGroup = __webpack_require__(824);

var _ColumnGroup2 = _interopRequireDefault(_ColumnGroup);

var _util = __webpack_require__(831);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

function noop() {}
function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}
var defaultLocale = {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: _react2['default'].createElement(
        'span',
        null,
        _react2['default'].createElement(_icon2['default'], { type: 'frown-o' }),
        '\u6682\u65E0\u6570\u636E'
    ),
    selectAll: '全选当页',
    selectInvert: '反选当页'
};
var defaultPagination = {
    onChange: noop,
    onShowSizeChange: noop
};
/**
 * Avoid creating new object, so that parent component's shouldComponentUpdate
 * can works appropriately。
 */
var emptyObject = {};

var Table = function (_React$Component) {
    (0, _inherits3['default'])(Table, _React$Component);

    function Table(props) {
        (0, _classCallCheck3['default'])(this, Table);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.getCheckboxPropsByItem = function (item, index) {
            var _this$props$rowSelect = _this.props.rowSelection,
                rowSelection = _this$props$rowSelect === undefined ? {} : _this$props$rowSelect;

            if (!rowSelection.getCheckboxProps) {
                return {};
            }
            var key = _this.getRecordKey(item, index);
            // Cache checkboxProps
            if (!_this.CheckboxPropsCache[key]) {
                _this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
            }
            return _this.CheckboxPropsCache[key];
        };
        _this.handleFilter = function (column, nextFilters) {
            var props = _this.props;
            var pagination = (0, _extends5['default'])({}, _this.state.pagination);
            var filters = (0, _extends5['default'])({}, _this.state.filters, (0, _defineProperty3['default'])({}, _this.getColumnKey(column), nextFilters));
            // Remove filters not in current columns
            var currentColumnKeys = [];
            (0, _util.treeMap)(_this.columns, function (c) {
                if (!c.children) {
                    currentColumnKeys.push(_this.getColumnKey(c));
                }
            });
            Object.keys(filters).forEach(function (columnKey) {
                if (currentColumnKeys.indexOf(columnKey) < 0) {
                    delete filters[columnKey];
                }
            });
            if (props.pagination) {
                // Reset current prop
                pagination.current = 1;
                pagination.onChange(pagination.current);
            }
            var newState = {
                pagination: pagination,
                filters: {}
            };
            var filtersToSetState = (0, _extends5['default'])({}, filters);
            // Remove filters which is controlled
            _this.getFilteredValueColumns().forEach(function (col) {
                var columnKey = _this.getColumnKey(col);
                if (columnKey) {
                    delete filtersToSetState[columnKey];
                }
            });
            if (Object.keys(filtersToSetState).length > 0) {
                newState.filters = filtersToSetState;
            }
            // Controlled current prop will not respond user interaction
            if ((0, _typeof3['default'])(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = (0, _extends5['default'])({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState, function () {
                _this.store.setState({
                    selectionDirty: false
                });
                var onChange = _this.props.onChange;
                if (onChange) {
                    onChange.apply(null, _this.prepareParamsArguments((0, _extends5['default'])({}, _this.state, { selectionDirty: false, filters: filters,
                        pagination: pagination })));
                }
            });
        };
        _this.handleSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            if (checked) {
                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
            } else {
                selectedRowKeys = selectedRowKeys.filter(function (i) {
                    return key !== i;
                });
            }
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked
            });
        };
        _this.handleRadioSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            selectedRowKeys = [key];
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked
            });
        };
        _this.handleSelectRow = function (selectionKey, index, onSelectFunc) {
            var data = _this.getFlatCurrentPageData();
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var changeableRowKeys = data.filter(function (item, i) {
                return !_this.getCheckboxPropsByItem(item, i).disabled;
            }).map(function (item, i) {
                return _this.getRecordKey(item, i);
            });
            var changeRowKeys = [];
            var selectWay = '';
            var checked = void 0;
            // handle default selection
            switch (selectionKey) {
                case 'all':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = true;
                    break;
                case 'removeAll':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) >= 0) {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = false;
                    break;
                case 'invert':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                        } else {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        }
                        changeRowKeys.push(key);
                        selectWay = 'onSelectInvert';
                    });
                    break;
                default:
                    break;
            }
            _this.store.setState({
                selectionDirty: true
            });
            // when select custom selection, callback selections[n].onSelect
            if (index > 1 && typeof onSelectFunc === 'function') {
                return onSelectFunc(changeableRowKeys);
            }
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: selectWay,
                checked: checked,
                changeRowKeys: changeRowKeys
            });
        };
        _this.handlePageChange = function (current) {
            for (var _len = arguments.length, otherArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                otherArguments[_key - 1] = arguments[_key];
            }

            var props = _this.props;
            var pagination = (0, _extends5['default'])({}, _this.state.pagination);
            if (current) {
                pagination.current = current;
            } else {
                pagination.current = pagination.current || 1;
            }
            pagination.onChange.apply(pagination, [pagination.current].concat(otherArguments));
            var newState = {
                pagination: pagination
            };
            // Controlled current prop will not respond user interaction
            if (props.pagination && (0, _typeof3['default'])(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = (0, _extends5['default'])({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState);
            _this.store.setState({
                selectionDirty: false
            });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments((0, _extends5['default'])({}, _this.state, { selectionDirty: false, pagination: pagination })));
            }
        };
        _this.renderSelectionBox = function (type) {
            return function (_, record, index) {
                var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
                var props = _this.getCheckboxPropsByItem(record, index);
                var handleChange = function handleChange(e) {
                    type === 'radio' ? _this.handleRadioSelect(record, rowIndex, e) : _this.handleSelect(record, rowIndex, e);
                };
                return _react2['default'].createElement(
                    'span',
                    { onClick: stopPropagation },
                    _react2['default'].createElement(_SelectionBox2['default'], { type: type, store: _this.store, rowIndex: rowIndex, disabled: props.disabled, onChange: handleChange, defaultSelection: _this.getDefaultSelection() })
                );
            };
        };
        _this.getRecordKey = function (record, index) {
            var rowKey = _this.props.rowKey;
            var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
            (0, _warning2['default'])(recordKey !== undefined, 'Each record in dataSource of table should have a unique `key` prop, or set `rowKey` to an unique primary key,' + 'see https://u.ant.design/table-row-key');
            return recordKey === undefined ? index : recordKey;
        };
        _this.getPopupContainer = function () {
            return (0, _reactDom.findDOMNode)(_this);
        };
        _this.handleShowSizeChange = function (current, pageSize) {
            var pagination = _this.state.pagination;
            pagination.onShowSizeChange(current, pageSize);
            var nextPagination = (0, _extends5['default'])({}, pagination, { pageSize: pageSize,
                current: current });
            _this.setState({ pagination: nextPagination });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments((0, _extends5['default'])({}, _this.state, { pagination: nextPagination })));
            }
        };
        (0, _warning2['default'])(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + 'fixed columns instead, see: https://u.ant.design/fixed-columns.');
        _this.columns = props.columns || (0, _util.normalizeColumns)(props.children);
        _this.state = (0, _extends5['default'])({}, _this.getSortStateFromColumns(), {
            // 减少状态
            filters: _this.getFiltersFromColumns(), pagination: _this.getDefaultPagination(props) });
        _this.CheckboxPropsCache = {};
        _this.store = (0, _createStore2['default'])({
            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
            selectionDirty: false
        });
        return _this;
    }

    (0, _createClass3['default'])(Table, [{
        key: 'getDefaultSelection',
        value: function getDefaultSelection() {
            var _this2 = this;

            var _props$rowSelection = this.props.rowSelection,
                rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

            if (!rowSelection.getCheckboxProps) {
                return [];
            }
            return this.getFlatData().filter(function (item, rowIndex) {
                return _this2.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
            }).map(function (record, rowIndex) {
                return _this2.getRecordKey(record, rowIndex);
            });
        }
    }, {
        key: 'getDefaultPagination',
        value: function getDefaultPagination(props) {
            var pagination = props.pagination || {};
            return this.hasPagination(props) ? (0, _extends5['default'])({}, defaultPagination, pagination, { current: pagination.defaultCurrent || pagination.current || 1, pageSize: pagination.defaultPageSize || pagination.pageSize || 10 }) : {};
        }
    }, {
        key: 'getLocale',
        value: function getLocale() {
            var locale = {};
            if (this.context.antLocale && this.context.antLocale.Table) {
                locale = this.context.antLocale.Table;
            }
            return (0, _extends5['default'])({}, defaultLocale, locale, this.props.locale);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.columns = nextProps.columns || (0, _util.normalizeColumns)(nextProps.children);
            if ('pagination' in nextProps || 'pagination' in this.props) {
                this.setState(function (previousState) {
                    var newPagination = (0, _extends5['default'])({}, defaultPagination, previousState.pagination, nextProps.pagination);
                    newPagination.current = newPagination.current || 1;
                    newPagination.pageSize = newPagination.pageSize || 10;
                    return { pagination: nextProps.pagination !== false ? newPagination : emptyObject };
                });
            }
            if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
                this.store.setState({
                    selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
                });
                var rowSelection = this.props.rowSelection;

                if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
                    this.CheckboxPropsCache = {};
                }
            }
            if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
                this.store.setState({
                    selectionDirty: false
                });
                this.CheckboxPropsCache = {};
            }
            if (this.getSortOrderColumns(this.columns).length > 0) {
                var sortState = this.getSortStateFromColumns(this.columns);
                if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                    this.setState(sortState);
                }
            }
            var filteredValueColumns = this.getFilteredValueColumns(this.columns);
            if (filteredValueColumns.length > 0) {
                var filtersFromColumns = this.getFiltersFromColumns(this.columns);
                var newFilters = (0, _extends5['default'])({}, this.state.filters);
                Object.keys(filtersFromColumns).forEach(function (key) {
                    newFilters[key] = filtersFromColumns[key];
                });
                if (this.isFiltersChanged(newFilters)) {
                    this.setState({ filters: newFilters });
                }
            }
        }
    }, {
        key: 'setSelectedRowKeys',
        value: function setSelectedRowKeys(selectedRowKeys, _ref) {
            var _this3 = this;

            var selectWay = _ref.selectWay,
                record = _ref.record,
                checked = _ref.checked,
                changeRowKeys = _ref.changeRowKeys;
            var _props$rowSelection2 = this.props.rowSelection,
                rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

            if (rowSelection && !('selectedRowKeys' in rowSelection)) {
                this.store.setState({ selectedRowKeys: selectedRowKeys });
            }
            var data = this.getFlatData();
            if (!rowSelection.onChange && !rowSelection[selectWay]) {
                return;
            }
            var selectedRows = data.filter(function (row, i) {
                return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
            });
            if (rowSelection.onChange) {
                rowSelection.onChange(selectedRowKeys, selectedRows);
            }
            if (selectWay === 'onSelect' && rowSelection.onSelect) {
                rowSelection.onSelect(record, checked, selectedRows);
            } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
                var changeRows = data.filter(function (row, i) {
                    return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
                });
                rowSelection.onSelectAll(checked, selectedRows, changeRows);
            } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
                rowSelection.onSelectInvert(selectedRowKeys);
            }
        }
    }, {
        key: 'hasPagination',
        value: function hasPagination(props) {
            return (props || this.props).pagination !== false;
        }
    }, {
        key: 'isFiltersChanged',
        value: function isFiltersChanged(filters) {
            var _this4 = this;

            var filtersChanged = false;
            if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
                filtersChanged = true;
            } else {
                Object.keys(filters).forEach(function (columnKey) {
                    if (filters[columnKey] !== _this4.state.filters[columnKey]) {
                        filtersChanged = true;
                    }
                });
            }
            return filtersChanged;
        }
    }, {
        key: 'getSortOrderColumns',
        value: function getSortOrderColumns(columns) {
            return (0, _util.flatFilter)(columns || this.columns || [], function (column) {
                return 'sortOrder' in column;
            });
        }
    }, {
        key: 'getFilteredValueColumns',
        value: function getFilteredValueColumns(columns) {
            return (0, _util.flatFilter)(columns || this.columns || [], function (column) {
                return typeof column.filteredValue !== 'undefined';
            });
        }
    }, {
        key: 'getFiltersFromColumns',
        value: function getFiltersFromColumns(columns) {
            var _this5 = this;

            var filters = {};
            this.getFilteredValueColumns(columns).forEach(function (col) {
                filters[_this5.getColumnKey(col)] = col.filteredValue;
            });
            return filters;
        }
    }, {
        key: 'getSortStateFromColumns',
        value: function getSortStateFromColumns(columns) {
            // return fisrt column which sortOrder is not falsy
            var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
                return col.sortOrder;
            })[0];
            if (sortedColumn) {
                return {
                    sortColumn: sortedColumn,
                    sortOrder: sortedColumn.sortOrder
                };
            }
            return {
                sortColumn: null,
                sortOrder: null
            };
        }
    }, {
        key: 'getSorterFn',
        value: function getSorterFn() {
            var _state = this.state,
                sortOrder = _state.sortOrder,
                sortColumn = _state.sortColumn;

            if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
                return;
            }
            return function (a, b) {
                var result = sortColumn.sorter(a, b);
                if (result !== 0) {
                    return sortOrder === 'descend' ? -result : result;
                }
                return 0;
            };
        }
    }, {
        key: 'toggleSortOrder',
        value: function toggleSortOrder(order, column) {
            var _state2 = this.state,
                sortColumn = _state2.sortColumn,
                sortOrder = _state2.sortOrder;
            // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

            var isSortColumn = this.isSortColumn(column);
            if (!isSortColumn) {
                sortOrder = order;
                sortColumn = column;
            } else {
                if (sortOrder === order) {
                    sortOrder = '';
                    sortColumn = null;
                } else {
                    sortOrder = order;
                }
            }
            var newState = {
                sortOrder: sortOrder,
                sortColumn: sortColumn
            };
            // Controlled
            if (this.getSortOrderColumns().length === 0) {
                this.setState(newState);
            }
            var onChange = this.props.onChange;
            if (onChange) {
                onChange.apply(null, this.prepareParamsArguments((0, _extends5['default'])({}, this.state, newState)));
            }
        }
    }, {
        key: 'renderRowSelection',
        value: function renderRowSelection() {
            var _this6 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                rowSelection = _props.rowSelection;

            var columns = this.columns.concat();
            if (rowSelection) {
                var data = this.getFlatCurrentPageData().filter(function (item, index) {
                    if (rowSelection.getCheckboxProps) {
                        return !_this6.getCheckboxPropsByItem(item, index).disabled;
                    }
                    return true;
                });
                var selectionColumnClass = (0, _classnames2['default'])(prefixCls + '-selection-column', (0, _defineProperty3['default'])({}, prefixCls + '-selection-column-custom', rowSelection.selections));
                var selectionColumn = {
                    key: 'selection-column',
                    render: this.renderSelectionBox(rowSelection.type),
                    className: selectionColumnClass
                };
                if (rowSelection.type !== 'radio') {
                    var checkboxAllDisabled = data.every(function (item, index) {
                        return _this6.getCheckboxPropsByItem(item, index).disabled;
                    });
                    selectionColumn.title = _react2['default'].createElement(_SelectionCheckboxAll2['default'], { store: this.store, locale: this.getLocale(), data: data, getCheckboxPropsByItem: this.getCheckboxPropsByItem, getRecordKey: this.getRecordKey, disabled: checkboxAllDisabled, prefixCls: prefixCls, onSelect: this.handleSelectRow, selections: rowSelection.selections, getPopupContainer: this.getPopupContainer });
                }
                if (columns.some(function (column) {
                    return column.fixed === 'left' || column.fixed === true;
                })) {
                    selectionColumn.fixed = 'left';
                }
                if (columns[0] && columns[0].key === 'selection-column') {
                    columns[0] = selectionColumn;
                } else {
                    columns.unshift(selectionColumn);
                }
            }
            return columns;
        }
    }, {
        key: 'getColumnKey',
        value: function getColumnKey(column, index) {
            return column.key || column.dataIndex || index;
        }
    }, {
        key: 'getMaxCurrent',
        value: function getMaxCurrent(total) {
            var _state$pagination = this.state.pagination,
                current = _state$pagination.current,
                pageSize = _state$pagination.pageSize;

            if ((current - 1) * pageSize >= total) {
                return Math.floor((total - 1) / pageSize) + 1;
            }
            return current;
        }
    }, {
        key: 'isSortColumn',
        value: function isSortColumn(column) {
            var sortColumn = this.state.sortColumn;

            if (!column || !sortColumn) {
                return false;
            }
            return this.getColumnKey(sortColumn) === this.getColumnKey(column);
        }
    }, {
        key: 'renderColumnsDropdown',
        value: function renderColumnsDropdown(columns) {
            var _this7 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                dropdownPrefixCls = _props2.dropdownPrefixCls;
            var sortOrder = this.state.sortOrder;

            var locale = this.getLocale();
            return (0, _util.treeMap)(columns, function (originColumn, i) {
                var column = (0, _extends5['default'])({}, originColumn);
                var key = _this7.getColumnKey(column, i);
                var filterDropdown = void 0;
                var sortButton = void 0;
                if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                    var colFilters = _this7.state.filters[key] || [];
                    filterDropdown = _react2['default'].createElement(_filterDropdown2['default'], { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this7.handleFilter, prefixCls: prefixCls + '-filter', dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown', getPopupContainer: _this7.getPopupContainer });
                }
                if (column.sorter) {
                    var isSortColumn = _this7.isSortColumn(column);
                    if (isSortColumn) {
                        column.className = column.className || '';
                        if (sortOrder) {
                            column.className += ' ' + prefixCls + '-column-sort';
                        }
                    }
                    var isAscend = isSortColumn && sortOrder === 'ascend';
                    var isDescend = isSortColumn && sortOrder === 'descend';
                    sortButton = _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-column-sorter' },
                        _react2['default'].createElement(
                            'span',
                            { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '\u2191', onClick: function onClick() {
                                    return _this7.toggleSortOrder('ascend', column);
                                } },
                            _react2['default'].createElement(_icon2['default'], { type: 'caret-up' })
                        ),
                        _react2['default'].createElement(
                            'span',
                            { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '\u2193', onClick: function onClick() {
                                    return _this7.toggleSortOrder('descend', column);
                                } },
                            _react2['default'].createElement(_icon2['default'], { type: 'caret-down' })
                        )
                    );
                }
                column.title = _react2['default'].createElement(
                    'span',
                    null,
                    column.title,
                    sortButton,
                    filterDropdown
                );
                return column;
            });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            // 强制不需要分页
            if (!this.hasPagination()) {
                return null;
            }
            var size = 'default';
            var pagination = this.state.pagination;

            if (pagination.size) {
                size = pagination.size;
            } else if (this.props.size === 'middle' || this.props.size === 'small') {
                size = 'small';
            }
            var total = pagination.total || this.getLocalData().length;
            return total > 0 ? _react2['default'].createElement(_pagination2['default'], (0, _extends5['default'])({ key: 'pagination' }, pagination, { className: (0, _classnames2['default'])(pagination.className, this.props.prefixCls + '-pagination'), onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
        }
        // Get pagination, filters, sorter

    }, {
        key: 'prepareParamsArguments',
        value: function prepareParamsArguments(state) {
            var pagination = (0, _extends5['default'])({}, state.pagination);
            // remove useless handle function in Table.onChange
            delete pagination.onChange;
            delete pagination.onShowSizeChange;
            var filters = state.filters;
            var sorter = {};
            if (state.sortColumn && state.sortOrder) {
                sorter.column = state.sortColumn;
                sorter.order = state.sortOrder;
                sorter.field = state.sortColumn.dataIndex;
                sorter.columnKey = this.getColumnKey(state.sortColumn);
            }
            return [pagination, filters, sorter];
        }
    }, {
        key: 'findColumn',
        value: function findColumn(myKey) {
            var _this8 = this;

            var column = void 0;
            (0, _util.treeMap)(this.columns, function (c) {
                if (_this8.getColumnKey(c) === myKey) {
                    column = c;
                }
            });
            return column;
        }
    }, {
        key: 'getCurrentPageData',
        value: function getCurrentPageData() {
            var data = this.getLocalData();
            var current = void 0;
            var pageSize = void 0;
            var state = this.state;
            // 如果没有分页的话，默认全部展示
            if (!this.hasPagination()) {
                pageSize = Number.MAX_VALUE;
                current = 1;
            } else {
                pageSize = state.pagination.pageSize;
                current = this.getMaxCurrent(state.pagination.total || data.length);
            }
            // 分页
            // ---
            // 当数据量少于等于每页数量时，直接设置数据
            // 否则进行读取分页数据
            if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
                data = data.filter(function (_, i) {
                    return i >= (current - 1) * pageSize && i < current * pageSize;
                });
            }
            return data;
        }
    }, {
        key: 'getFlatData',
        value: function getFlatData() {
            return (0, _util.flatArray)(this.getLocalData());
        }
    }, {
        key: 'getFlatCurrentPageData',
        value: function getFlatCurrentPageData() {
            return (0, _util.flatArray)(this.getCurrentPageData());
        }
    }, {
        key: 'recursiveSort',
        value: function recursiveSort(data, sorterFn) {
            var _this9 = this;

            var _props$childrenColumn = this.props.childrenColumnName,
                childrenColumnName = _props$childrenColumn === undefined ? 'children' : _props$childrenColumn;

            return data.sort(sorterFn).map(function (item) {
                return item[childrenColumnName] ? (0, _extends5['default'])({}, item, (0, _defineProperty3['default'])({}, childrenColumnName, _this9.recursiveSort(item[childrenColumnName], sorterFn))) : item;
            });
        }
    }, {
        key: 'getLocalData',
        value: function getLocalData() {
            var _this10 = this;

            var state = this.state;
            var dataSource = this.props.dataSource;

            var data = dataSource || [];
            // 优化本地排序
            data = data.slice(0);
            var sorterFn = this.getSorterFn();
            if (sorterFn) {
                data = this.recursiveSort(data, sorterFn);
            }
            // 筛选
            if (state.filters) {
                Object.keys(state.filters).forEach(function (columnKey) {
                    var col = _this10.findColumn(columnKey);
                    if (!col) {
                        return;
                    }
                    var values = state.filters[columnKey] || [];
                    if (values.length === 0) {
                        return;
                    }
                    var onFilter = col.onFilter;
                    data = onFilter ? data.filter(function (record) {
                        return values.some(function (v) {
                            return onFilter(v, record);
                        });
                    }) : data;
                });
            }
            return data;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames2,
                _this11 = this;

            var _a = this.props,
                style = _a.style,
                className = _a.className,
                prefixCls = _a.prefixCls,
                showHeader = _a.showHeader,
                restProps = __rest(_a, ["style", "className", "prefixCls", "showHeader"]);
            var data = this.getCurrentPageData();
            var columns = this.renderRowSelection();
            var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
            var locale = this.getLocale();
            var classString = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-' + this.props.size, true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-bordered', this.props.bordered), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-empty', !data.length), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-without-column-header', !showHeader), _classNames2));
            columns = this.renderColumnsDropdown(columns);
            columns = columns.map(function (column, i) {
                var newColumn = (0, _extends5['default'])({}, column);
                newColumn.key = _this11.getColumnKey(newColumn, i);
                return newColumn;
            });
            var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
            if ('expandIconColumnIndex' in restProps) {
                expandIconColumnIndex = restProps.expandIconColumnIndex;
            }
            var table = _react2['default'].createElement(_rcTable2['default'], (0, _extends5['default'])({ key: 'table' }, restProps, { prefixCls: prefixCls, data: data, columns: columns, showHeader: showHeader, className: classString, expandIconColumnIndex: expandIconColumnIndex, expandIconAsCell: expandIconAsCell, emptyText: function emptyText() {
                    return locale.emptyText;
                } }));
            // if there is no pagination or no data,
            // the height of spin should decrease by half of pagination
            var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
            var loading = this.props.loading;
            if (typeof loading === 'boolean') {
                loading = {
                    spinning: loading
                };
            }
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(prefixCls + '-wrapper', className), style: style },
                _react2['default'].createElement(
                    _spin2['default'],
                    (0, _extends5['default'])({}, loading, { className: loading ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '' }),
                    table,
                    this.renderPagination()
                )
            );
        }
    }]);
    return Table;
}(_react2['default'].Component);

exports['default'] = Table;

Table.Column = _Column2['default'];
Table.ColumnGroup = _ColumnGroup2['default'];
Table.propTypes = {
    dataSource: _propTypes2['default'].array,
    columns: _propTypes2['default'].array,
    prefixCls: _propTypes2['default'].string,
    useFixedHeader: _propTypes2['default'].bool,
    rowSelection: _propTypes2['default'].object,
    className: _propTypes2['default'].string,
    size: _propTypes2['default'].string,
    loading: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
    bordered: _propTypes2['default'].bool,
    onChange: _propTypes2['default'].func,
    locale: _propTypes2['default'].object,
    dropdownPrefixCls: _propTypes2['default'].string
};
Table.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-table',
    useFixedHeader: false,
    rowSelection: null,
    className: '',
    size: 'large',
    loading: false,
    bordered: false,
    indentSize: 20,
    locale: {},
    rowKey: 'key',
    showHeader: true
};
Table.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];

/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

exports["default"] = createStore;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createStore(initialState) {
    var state = initialState;
    var listeners = [];
    function setState(partial) {
        state = (0, _extends3["default"])({}, state, partial);
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }
    return {
        setState: setState,
        getState: getState,
        subscribe: subscribe
    };
}
module.exports = exports["default"];

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcMenu = __webpack_require__(78);

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _domClosest = __webpack_require__(384);

var _domClosest2 = _interopRequireDefault(_domClosest);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _dropdown = __webpack_require__(347);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = __webpack_require__(104);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__(206);

var _radio2 = _interopRequireDefault(_radio);

var _FilterDropdownMenuWrapper = __webpack_require__(825);

var _FilterDropdownMenuWrapper2 = _interopRequireDefault(_FilterDropdownMenuWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FilterMenu = function (_React$Component) {
    (0, _inherits3['default'])(FilterMenu, _React$Component);

    function FilterMenu(props) {
        (0, _classCallCheck3['default'])(this, FilterMenu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (FilterMenu.__proto__ || Object.getPrototypeOf(FilterMenu)).call(this, props));

        _this.setSelectedKeys = function (_ref) {
            var selectedKeys = _ref.selectedKeys;

            _this.setState({ selectedKeys: selectedKeys });
        };
        _this.handleClearFilters = function () {
            _this.setState({
                selectedKeys: []
            }, _this.handleConfirm);
        };
        _this.handleConfirm = function () {
            _this.setVisible(false);
            _this.confirmFilter();
        };
        _this.onVisibleChange = function (visible) {
            _this.setVisible(visible);
            if (!visible) {
                _this.confirmFilter();
            }
        };
        _this.handleMenuItemClick = function (info) {
            if (info.keyPath.length <= 1) {
                return;
            }
            var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
            if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
                // deselect SubMenu child
                delete keyPathOfSelectedItem[info.key];
            } else {
                // select SubMenu child
                keyPathOfSelectedItem[info.key] = info.keyPath;
            }
            _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
        };
        _this.renderFilterIcon = function () {
            var _this$props = _this.props,
                column = _this$props.column,
                locale = _this$props.locale,
                prefixCls = _this$props.prefixCls;

            var filterIcon = column.filterIcon;
            var dropdownSelectedClass = _this.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';
            return filterIcon ? _react2['default'].cloneElement(filterIcon, {
                title: locale.filterTitle,
                className: (0, _classnames2['default'])(filterIcon.className, (0, _defineProperty3['default'])({}, prefixCls + '-icon', true))
            }) : _react2['default'].createElement(_icon2['default'], { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass });
        };
        var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
        _this.state = {
            selectedKeys: props.selectedKeys,
            keyPathOfSelectedItem: {},
            visible: visible
        };
        return _this;
    }

    (0, _createClass3['default'])(FilterMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var column = this.props.column;

            var rootNode = _reactDom2['default'].findDOMNode(this);
            var filterBelongToScrollBody = !!(0, _domClosest2['default'])(rootNode, '.ant-table-scroll');
            if (filterBelongToScrollBody && column.fixed) {
                // When fixed column have filters, there will be two dropdown menus
                // Filter dropdown menu inside scroll body should never be shown
                // To fix https://github.com/ant-design/ant-design/issues/5010
                this.neverShown = true;
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var column = nextProps.column;

            var newState = {};
            if ('selectedKeys' in nextProps) {
                newState.selectedKeys = nextProps.selectedKeys;
            }
            if ('filterDropdownVisible' in column) {
                newState.visible = column.filterDropdownVisible;
            }
            if (Object.keys(newState).length > 0) {
                this.setState(newState);
            }
        }
    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            var column = this.props.column;

            if (!('filterDropdownVisible' in column)) {
                this.setState({ visible: visible });
            }
            if (column.onFilterDropdownVisibleChange) {
                column.onFilterDropdownVisibleChange(visible);
            }
        }
    }, {
        key: 'confirmFilter',
        value: function confirmFilter() {
            if (this.state.selectedKeys !== this.props.selectedKeys) {
                this.props.confirmFilter(this.props.column, this.state.selectedKeys);
            }
        }
    }, {
        key: 'renderMenuItem',
        value: function renderMenuItem(item) {
            var column = this.props.column;

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var input = multiple ? _react2['default'].createElement(_checkbox2['default'], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : _react2['default'].createElement(_radio2['default'], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 });
            return _react2['default'].createElement(
                _rcMenu.Item,
                { key: item.value },
                input,
                _react2['default'].createElement(
                    'span',
                    null,
                    item.text
                )
            );
        }
    }, {
        key: 'hasSubMenu',
        value: function hasSubMenu() {
            var _props$column$filters = this.props.column.filters,
                filters = _props$column$filters === undefined ? [] : _props$column$filters;

            return filters.some(function (item) {
                return !!(item.children && item.children.length > 0);
            });
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(items) {
            var _this2 = this;

            return items.map(function (item) {
                if (item.children && item.children.length > 0) {
                    var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

                    var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
                        return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
                    });
                    var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
                    return _react2['default'].createElement(
                        _rcMenu.SubMenu,
                        { title: item.text, className: subMenuCls, key: item.value.toString() },
                        _this2.renderMenus(item.children)
                    );
                }
                return _this2.renderMenuItem(item);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                column = _props.column,
                locale = _props.locale,
                prefixCls = _props.prefixCls,
                dropdownPrefixCls = _props.dropdownPrefixCls,
                getPopupContainer = _props.getPopupContainer;
            // default multiple selection in filter dropdown

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var dropdownMenuClass = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, dropdownPrefixCls + '-menu-without-submenu', !this.hasSubMenu()));
            var menus = column.filterDropdown ? _react2['default'].createElement(
                _FilterDropdownMenuWrapper2['default'],
                null,
                column.filterDropdown
            ) : _react2['default'].createElement(
                _FilterDropdownMenuWrapper2['default'],
                { className: prefixCls + '-dropdown' },
                _react2['default'].createElement(
                    _rcMenu2['default'],
                    { multiple: multiple, onClick: this.handleMenuItemClick, prefixCls: dropdownPrefixCls + '-menu', className: dropdownMenuClass, onSelect: this.setSelectedKeys, onDeselect: this.setSelectedKeys, selectedKeys: this.state.selectedKeys },
                    this.renderMenus(column.filters)
                ),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-dropdown-btns' },
                    _react2['default'].createElement(
                        'a',
                        { className: prefixCls + '-dropdown-link confirm', onClick: this.handleConfirm },
                        locale.filterConfirm
                    ),
                    _react2['default'].createElement(
                        'a',
                        { className: prefixCls + '-dropdown-link clear', onClick: this.handleClearFilters },
                        locale.filterReset
                    )
                )
            );
            return _react2['default'].createElement(
                _dropdown2['default'],
                { trigger: ['click'], overlay: menus, visible: this.neverShown ? false : this.state.visible, onVisibleChange: this.onVisibleChange, getPopupContainer: getPopupContainer },
                this.renderFilterIcon()
            );
        }
    }]);
    return FilterMenu;
}(_react2['default'].Component);

exports['default'] = FilterMenu;

FilterMenu.defaultProps = {
    handleFilter: function handleFilter() {},

    column: {}
};
module.exports = exports['default'];

/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(42);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

exports.flatArray = flatArray;
exports.treeMap = treeMap;
exports.flatFilter = flatFilter;
exports.normalizeColumns = normalizeColumns;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function flatArray() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

    var result = [];
    var loop = function loop(array) {
        array.forEach(function (item) {
            if (item[childrenName]) {
                var newItem = (0, _extends3['default'])({}, item);
                delete newItem[childrenName];
                result.push(newItem);
                if (item[childrenName].length > 0) {
                    loop(item[childrenName]);
                }
            } else {
                result.push(item);
            }
        });
    };
    loop(data);
    return result;
}
function treeMap(tree, mapper) {
    var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

    return tree.map(function (node, index) {
        var extra = {};
        if (node[childrenName]) {
            extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
        }
        return (0, _extends3['default'])({}, mapper(node, index), extra);
    });
}
function flatFilter(tree, callback) {
    return tree.reduce(function (acc, node) {
        if (callback(node)) {
            acc.push(node);
        }
        if (node.children) {
            var children = flatFilter(node.children, callback);
            acc.push.apply(acc, (0, _toConsumableArray3['default'])(children));
        }
        return acc;
    }, []);
}
function normalizeColumns(elements) {
    var columns = [];
    _react2['default'].Children.forEach(elements, function (element) {
        if (!_react2['default'].isValidElement(element)) {
            return;
        }
        var column = (0, _extends3['default'])({}, element.props);
        if (element.key) {
            column.key = element.key;
        }
        if (element.type && element.type.__ANT_TABLE_COLUMN_GROUP) {
            column.children = normalizeColumns(column.children);
        }
        columns.push(column);
    });
    return columns;
}

/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _rcTabs = __webpack_require__(605);

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _ScrollableInkTabBar = __webpack_require__(1443);

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _TabContent = __webpack_require__(1446);

var _TabContent2 = _interopRequireDefault(_TabContent);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

var _isFlexSupported = __webpack_require__(780);

var _isFlexSupported2 = _interopRequireDefault(_isFlexSupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tabs = function (_React$Component) {
    (0, _inherits3['default'])(Tabs, _React$Component);

    function Tabs() {
        (0, _classCallCheck3['default'])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.createNewTab = function (targetKey) {
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'add');
            }
        };
        _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'remove');
            }
        };
        _this.handleChange = function (activeKey) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(activeKey);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NO_FLEX = ' no-flex';
            var tabNode = (0, _reactDom.findDOMNode)(this);
            if (tabNode && !(0, _isFlexSupported2['default'])() && tabNode.className.indexOf(NO_FLEX) === -1) {
                tabNode.className += NO_FLEX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                size = _props.size,
                _props$type = _props.type,
                type = _props$type === undefined ? 'line' : _props$type,
                tabPosition = _props.tabPosition,
                children = _props.children,
                tabBarExtraContent = _props.tabBarExtraContent,
                tabBarStyle = _props.tabBarStyle,
                hideAdd = _props.hideAdd,
                onTabClick = _props.onTabClick,
                onPrevClick = _props.onPrevClick,
                onNextClick = _props.onNextClick,
                _props$animated = _props.animated,
                animated = _props$animated === undefined ? true : _props$animated;

            var _ref = (typeof animated === 'undefined' ? 'undefined' : (0, _typeof3['default'])(animated)) === 'object' ? {
                inkBarAnimated: animated.inkBar, tabPaneAnimated: animated.tabPane
            } : {
                inkBarAnimated: animated, tabPaneAnimated: animated
            },
                inkBarAnimated = _ref.inkBarAnimated,
                tabPaneAnimated = _ref.tabPaneAnimated;
            // card tabs should not have animation


            if (type !== 'line') {
                tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
            }
            (0, _warning2['default'])(!(type.indexOf('card') >= 0 && size === 'small'), 'Tabs[type=card|editable-card] doesn\'t have small size, it\'s by designed.');
            var cls = (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-mini', size === 'small' || size === 'mini'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-no-animation', !tabPaneAnimated), _classNames));
            // only card type tabs can be added and closed
            var childrenWithClose = void 0;
            if (type === 'editable-card') {
                childrenWithClose = [];
                _react2['default'].Children.forEach(children, function (child, index) {
                    var closable = child.props.closable;
                    closable = typeof closable === 'undefined' ? true : closable;
                    var closeIcon = closable ? _react2['default'].createElement(_icon2['default'], { type: 'close', onClick: function onClick(e) {
                            return _this2.removeTab(child.key, e);
                        } }) : null;
                    childrenWithClose.push((0, _react.cloneElement)(child, {
                        tab: _react2['default'].createElement(
                            'div',
                            { className: closable ? undefined : prefixCls + '-tab-unclosable' },
                            child.props.tab,
                            closeIcon
                        ),
                        key: child.key || index
                    }));
                });
                // Add new tab handler
                if (!hideAdd) {
                    tabBarExtraContent = _react2['default'].createElement(
                        'span',
                        null,
                        _react2['default'].createElement(_icon2['default'], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                        tabBarExtraContent
                    );
                }
            }
            tabBarExtraContent = tabBarExtraContent ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-extra-content' },
                tabBarExtraContent
            ) : null;
            var renderTabBar = function renderTabBar() {
                return _react2['default'].createElement(_ScrollableInkTabBar2['default'], { inkBarAnimated: inkBarAnimated, extraContent: tabBarExtraContent, onTabClick: onTabClick, onPrevClick: onPrevClick, onNextClick: onNextClick, style: tabBarStyle });
            };
            return _react2['default'].createElement(
                _rcTabs2['default'],
                (0, _extends3['default'])({}, this.props, { className: cls, tabBarPosition: tabPosition, renderTabBar: renderTabBar, renderTabContent: function renderTabContent() {
                        return _react2['default'].createElement(_TabContent2['default'], { animated: tabPaneAnimated, animatedWithMargin: true });
                    }, onChange: this.handleChange }),
                childrenWithClose || children
            );
        }
    }]);
    return Tabs;
}(_react2['default'].Component);

exports['default'] = Tabs;

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
    prefixCls: 'ant-tabs',
    hideAdd: false
};
module.exports = exports['default'];

/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1094);

/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _TimelineItem = __webpack_require__(835);

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Timeline = function (_React$Component) {
    (0, _inherits3['default'])(Timeline, _React$Component);

    function Timeline() {
        (0, _classCallCheck3['default'])(this, Timeline);
        return (0, _possibleConstructorReturn3['default'])(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Timeline, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                children = _a.children,
                pending = _a.pending,
                className = _a.className,
                restProps = __rest(_a, ["prefixCls", "children", "pending", "className"]);
            var pendingNode = typeof pending === 'boolean' ? null : pending;
            var classString = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-pending', !!pending), className);
            var items = _react2['default'].Children.map(children, function (ele, idx) {
                return _react2['default'].cloneElement(ele, {
                    last: idx === _react2['default'].Children.count(children) - 1
                });
            });
            var pendingItem = !!pending ? _react2['default'].createElement(
                _TimelineItem2['default'],
                { pending: !!pending },
                pendingNode
            ) : null;
            return _react2['default'].createElement(
                'ul',
                (0, _extends3['default'])({}, restProps, { className: classString }),
                items,
                pendingItem
            );
        }
    }]);
    return Timeline;
}(_react2['default'].Component);

exports['default'] = Timeline;

Timeline.Item = _TimelineItem2['default'];
Timeline.defaultProps = {
    prefixCls: 'ant-timeline'
};
module.exports = exports['default'];

/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var TimelineItem = function (_React$Component) {
    (0, _inherits3['default'])(TimelineItem, _React$Component);

    function TimelineItem() {
        (0, _classCallCheck3['default'])(this, TimelineItem);
        return (0, _possibleConstructorReturn3['default'])(this, (TimelineItem.__proto__ || Object.getPrototypeOf(TimelineItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TimelineItem, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                _a$color = _a.color,
                color = _a$color === undefined ? '' : _a$color,
                last = _a.last,
                children = _a.children,
                pending = _a.pending,
                dot = _a.dot,
                restProps = __rest(_a, ["prefixCls", "className", "color", "last", "children", "pending", "dot"]);
            var itemClassName = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-item-last', last), (0, _defineProperty3['default'])(_classNames, prefixCls + '-item-pending', pending), _classNames), className);
            var dotClassName = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-head', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-head-custom', dot), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-head-' + color, true), _classNames2));
            return _react2['default'].createElement(
                'li',
                (0, _extends3['default'])({}, restProps, { className: itemClassName }),
                _react2['default'].createElement('div', { className: prefixCls + '-item-tail' }),
                _react2['default'].createElement(
                    'div',
                    { className: dotClassName, style: { borderColor: /blue|red|green/.test(color) ? null : color } },
                    dot
                ),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-item-content' },
                    children
                )
            );
        }
    }]);
    return TimelineItem;
}(_react2['default'].Component);

exports['default'] = TimelineItem;

TimelineItem.defaultProps = {
    prefixCls: 'ant-timeline',
    color: 'blue',
    last: false,
    pending: false
};
module.exports = exports['default'];

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Timeline = __webpack_require__(834);

var _Timeline2 = _interopRequireDefault(_Timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Timeline2['default'];
module.exports = exports['default'];

/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1095);

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = __webpack_require__(607);

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _placements = __webpack_require__(839);

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var splitObject = function splitObject(obj, keys) {
    var picked = {};
    var omited = (0, _extends3['default'])({}, obj);
    keys.forEach(function (key) {
        if (obj && key in obj) {
            picked[key] = obj[key];
            delete omited[key];
        }
    });
    return { picked: picked, omited: omited };
};

var Tooltip = function (_React$Component) {
    (0, _inherits3['default'])(Tooltip, _React$Component);

    function Tooltip(props) {
        (0, _classCallCheck3['default'])(this, Tooltip);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.onVisibleChange = function (visible) {
            var onVisibleChange = _this.props.onVisibleChange;

            if (!('visible' in _this.props)) {
                _this.setState({ visible: _this.isNoTitle() ? false : visible });
            }
            if (onVisibleChange && !_this.isNoTitle()) {
                onVisibleChange(visible);
            }
        };
        // 动态设置动画点
        _this.onPopupAlign = function (domNode, align) {
            var placements = _this.getPlacements();
            // 当前返回的位置
            var placement = Object.keys(placements).filter(function (key) {
                return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
            })[0];
            if (!placement) {
                return;
            }
            // 根据当前坐标设置动画点
            var rect = domNode.getBoundingClientRect();
            var transformOrigin = {
                top: '50%',
                left: '50%'
            };
            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
                transformOrigin.top = rect.height - align.offset[1] + 'px';
            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
                transformOrigin.top = -align.offset[1] + 'px';
            }
            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
                transformOrigin.left = rect.width - align.offset[0] + 'px';
            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
                transformOrigin.left = -align.offset[0] + 'px';
            }
            domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
        };
        _this.state = {
            visible: !!props.visible
        };
        return _this;
    }

    (0, _createClass3['default'])(Tooltip, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('visible' in nextProps) {
                this.setState({ visible: nextProps.visible });
            }
        }
    }, {
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            return this.refs.tooltip.getPopupDomNode();
        }
    }, {
        key: 'getPlacements',
        value: function getPlacements() {
            var _props = this.props,
                builtinPlacements = _props.builtinPlacements,
                arrowPointAtCenter = _props.arrowPointAtCenter,
                autoAdjustOverflow = _props.autoAdjustOverflow;

            return builtinPlacements || (0, _placements2['default'])({
                arrowPointAtCenter: arrowPointAtCenter,
                verticalArrowShift: 8,
                autoAdjustOverflow: autoAdjustOverflow
            });
        }
    }, {
        key: 'isHoverTrigger',
        value: function isHoverTrigger() {
            var trigger = this.props.trigger;

            if (!trigger || trigger === 'hover') {
                return true;
            }
            if (Array.isArray(trigger)) {
                return trigger.indexOf('hover') >= 0;
            }
            return false;
        }
        // Fix Tooltip won't hide at disabled button
        // mouse events don't trigger at disabled button in Chrome
        // https://github.com/react-component/tooltip/issues/18

    }, {
        key: 'getDisabledCompatibleChildren',
        value: function getDisabledCompatibleChildren(element) {
            if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled && this.isHoverTrigger()) {
                // Pick some layout related style properties up to span
                // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
                var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
                    picked = _splitObject.picked,
                    omited = _splitObject.omited;

                var spanStyle = (0, _extends3['default'])({ display: 'inline-block' }, picked, { cursor: 'not-allowed' });
                var buttonStyle = (0, _extends3['default'])({}, omited, { pointerEvents: 'none' });
                var child = (0, _react.cloneElement)(element, {
                    style: buttonStyle,
                    className: null
                });
                return _react2['default'].createElement(
                    'span',
                    { style: spanStyle, className: element.props.className },
                    child
                );
            }
            return element;
        }
    }, {
        key: 'isNoTitle',
        value: function isNoTitle() {
            var _props2 = this.props,
                title = _props2.title,
                overlay = _props2.overlay;

            return !title && !overlay; // overlay for old version compatibility
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state;
            var prefixCls = props.prefixCls,
                title = props.title,
                overlay = props.overlay,
                openClassName = props.openClassName,
                getPopupContainer = props.getPopupContainer,
                getTooltipContainer = props.getTooltipContainer;

            var children = props.children;
            var visible = state.visible;
            // Hide tooltip when there is no title
            if (!('visible' in props) && this.isNoTitle()) {
                visible = false;
            }
            var child = this.getDisabledCompatibleChildren(_react2['default'].isValidElement(children) ? children : _react2['default'].createElement(
                'span',
                null,
                children
            ));
            var childProps = child.props;
            var childCls = (0, _classnames2['default'])(childProps.className, (0, _defineProperty3['default'])({}, openClassName || prefixCls + '-open', true));
            return _react2['default'].createElement(
                _rcTooltip2['default'],
                (0, _extends3['default'])({}, this.props, { getTooltipContainer: getPopupContainer || getTooltipContainer, ref: 'tooltip', builtinPlacements: this.getPlacements(), overlay: overlay || title || '', visible: visible, onVisibleChange: this.onVisibleChange, onPopupAlign: this.onPopupAlign }),
                visible ? (0, _react.cloneElement)(child, { className: childCls }) : child
            );
        }
    }]);
    return Tooltip;
}(_react2['default'].Component);

exports['default'] = Tooltip;

Tooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
};
module.exports = exports['default'];

/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

exports.getOverflowOptions = getOverflowOptions;
exports['default'] = getPlacements;

var _placements = __webpack_require__(1453);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var autoAdjustOverflowEnabled = {
    adjustX: 1,
    adjustY: 1
};
var autoAdjustOverflowDisabled = {
    adjustX: 0,
    adjustY: 0
};
var targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow) {
    if (typeof autoAdjustOverflow === 'boolean') {
        return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
    }
    return (0, _extends3['default'])({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}
function getPlacements() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _config$arrowWidth = config.arrowWidth,
        arrowWidth = _config$arrowWidth === undefined ? 5 : _config$arrowWidth,
        _config$horizontalArr = config.horizontalArrowShift,
        horizontalArrowShift = _config$horizontalArr === undefined ? 16 : _config$horizontalArr,
        _config$verticalArrow = config.verticalArrowShift,
        verticalArrowShift = _config$verticalArrow === undefined ? 12 : _config$verticalArrow,
        _config$autoAdjustOve = config.autoAdjustOverflow,
        autoAdjustOverflow = _config$autoAdjustOve === undefined ? true : _config$autoAdjustOve;

    var placementMap = {
        left: {
            points: ['cr', 'cl'],
            offset: [-4, 0]
        },
        right: {
            points: ['cl', 'cr'],
            offset: [4, 0]
        },
        top: {
            points: ['bc', 'tc'],
            offset: [0, -4]
        },
        bottom: {
            points: ['tc', 'bc'],
            offset: [0, 4]
        },
        topLeft: {
            points: ['bl', 'tc'],
            offset: [-(horizontalArrowShift + arrowWidth), -4]
        },
        leftTop: {
            points: ['tr', 'cl'],
            offset: [-4, -(verticalArrowShift + arrowWidth)]
        },
        topRight: {
            points: ['br', 'tc'],
            offset: [horizontalArrowShift + arrowWidth, -4]
        },
        rightTop: {
            points: ['tl', 'cr'],
            offset: [4, -(verticalArrowShift + arrowWidth)]
        },
        bottomRight: {
            points: ['tr', 'bc'],
            offset: [horizontalArrowShift + arrowWidth, 4]
        },
        rightBottom: {
            points: ['bl', 'cr'],
            offset: [4, verticalArrowShift + arrowWidth]
        },
        bottomLeft: {
            points: ['tl', 'bc'],
            offset: [-(horizontalArrowShift + arrowWidth), 4]
        },
        leftBottom: {
            points: ['br', 'cl'],
            offset: [-4, verticalArrowShift + arrowWidth]
        }
    };
    Object.keys(placementMap).forEach(function (key) {
        placementMap[key] = config.arrowPointAtCenter ? (0, _extends3['default'])({}, placementMap[key], { overflow: getOverflowOptions(autoAdjustOverflow), targetOffset: targetOffset }) : (0, _extends3['default'])({}, _placements.placements[key], { overflow: getOverflowOptions(autoAdjustOverflow) });
    });
    return placementMap;
}

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(803);

var _layout2 = _interopRequireDefault(_layout);

var _Sider = __webpack_require__(802);

var _Sider2 = _interopRequireDefault(_Sider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_layout2['default'].Sider = _Sider2['default'];
exports['default'] = _layout2['default'];
module.exports = exports['default'];

/***/ },

/***/ 840:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1096);

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(1083);

/***/ },

/***/ 863:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);
var bind = __webpack_require__(364);
var Axios = __webpack_require__(865);
var defaults = __webpack_require__(209);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(361);
axios.CancelToken = __webpack_require__(864);
axios.isCancel = __webpack_require__(362);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(879);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ },

/***/ 864:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(361);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ },

/***/ 865:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(209);
var utils = __webpack_require__(54);
var InterceptorManager = __webpack_require__(866);
var dispatchRequest = __webpack_require__(867);
var isAbsoluteURL = __webpack_require__(875);
var combineURLs = __webpack_require__(873);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ },

/***/ 866:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ },

/***/ 867:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);
var transformData = __webpack_require__(870);
var isCancel = __webpack_require__(362);
var defaults = __webpack_require__(209);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ },

/***/ 868:
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ },

/***/ 869:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(363);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ },

/***/ 870:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ },

/***/ 871:
/***/ function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ },

/***/ 872:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ },

/***/ 873:
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ },

/***/ 874:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ },

/***/ 875:
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ },

/***/ 876:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ },

/***/ 877:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ },

/***/ 878:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(54);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ },

/***/ 879:
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ },

/***/ 880:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(85);

var _layout = __webpack_require__(84);

var _layout2 = _interopRequireDefault(_layout);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SmartVoiceHeader = __webpack_require__(911);

var _SmartVoiceHeader2 = _interopRequireDefault(_SmartVoiceHeader);

var _SmartVoiceFooter = __webpack_require__(910);

var _SmartVoiceFooter2 = _interopRequireDefault(_SmartVoiceFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _layout2.default,
    null,
    _react2.default.createElement(_SmartVoiceHeader2.default, null),
    children,
    _react2.default.createElement(_SmartVoiceFooter2.default, null)
  );
};

exports.default = Home;

/***/ },

/***/ 881:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(131);

var _modal = __webpack_require__(130);

var _modal2 = _interopRequireDefault(_modal);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css3 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _AddCustomerForm = __webpack_require__(210);

var _AddCustomerForm2 = _interopRequireDefault(_AddCustomerForm);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _LightsCBUS = __webpack_require__(882);

var _LightsCBUS2 = _interopRequireDefault(_LightsCBUS);

var _LightsPUSH = __webpack_require__(883);

var _LightsPUSH2 = _interopRequireDefault(_LightsPUSH);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
//import '../../../styles/control-system.css';


var deviceNameData = {
	Lights: ["lights", "main", "down", "pendant", "bench", "strip", "wall", "side", "left", "right", "front", "rear", "bulkhead", "kitchenette", "cabinet", "skylight", "hallway", "sensor", "courtyard", "floor", "up", "bay", "feature", "spot", "desk", "mirror", "robe", "wardrobe", "walk in robe", "cupboard"],
	Blinds: ["blinds", "main", "north", "south", "east", "west", "left", "right", "door", "side", "desk", "kitchenette", "block out", "sheer", "front", "back", "garden", "feature", "courtyard", "picture", "window", "deck"],
	AV: ["Foxtel", "DVD", "Blu Ray", "TV", "Roku", "Western Digital", "WDTV", "Apple", "Apple TV", "Movie", "Music", "Netflix", "Kodie", "Stan", "Plex", "Sonos", "Radio", "Blue Sound", "Cameras", "Spotify", "Xbox", "play station", "air play"],
	AC: ["Climate Control"],
	Fans: ["fans", "main", "down", "pendant", "bench", "strip", "wall", "side", "left", "right", "front", "rear", "bulkhead", "kitchenette", "cabinet", "skylight", "hallway", "sensor", "courtyard", "floor", "up", "bay", "feature", "spot", "desk", "north", "south", "east", "west", "door", "block out", "sheer", "front", "back", "garden", "picture", "window", "deck"]
};

var DeviceModal = function (_Component) {
	_inherits(DeviceModal, _Component);

	function DeviceModal(props) {
		_classCallCheck(this, DeviceModal);

		var _this = _possibleConstructorReturn(this, (DeviceModal.__proto__ || Object.getPrototypeOf(DeviceModal)).call(this, props));

		_this.state = {
			controlSystem: '',
			itemType: '',
			itemName: '',
			controlSystemStyle: 'control-system-selection-button'
		};
		return _this;
	}

	_createClass(DeviceModal, [{
		key: 'handleCancel',
		value: function handleCancel() {
			console.log('handleCancel...');
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var location = this.props.location || '';
			this.setState({
				controlSystem: '',
				itemType: '',
				itemName: '',
				controlSystemStyle: 'control-system-selection-button'
			});
			this.props.deviceModalShow(false);
			this.props.fetchDevices(integratorEmail, customerEmail, location, jwtToken);
		}
	}, {
		key: 'controlSystemOnChange',
		value: function controlSystemOnChange(value) {
			console.log(value);
			this.setState({
				controlSystem: value,
				controlSystemStyle: 'hidden'
			});
		}
	}, {
		key: 'itemTypeOnChange',
		value: function itemTypeOnChange(value) {
			var itemNames = deviceNameData[value] || [];
			var itemName = itemNames[0] || '';
			this.setState({
				itemType: value,
				itemName: itemName
			});
		}
	}, {
		key: 'itemNameOnChange',
		value: function itemNameOnChange(value) {
			this.setState({
				itemName: value
			});
		}
	}, {
		key: 'renderDeviceComponent',
		value: function renderDeviceComponent() {
			var controlSystem = this.state.controlSystem || '';
			var itemType = this.state.itemType || '';
			var itemName = this.state.itemName || '';
			var controlSystems = this.props.controlSystems || [];
			var selectedControlSystem = controlSystems.find(function (item) {
				return item.Name == controlSystem;
			});
			console.log('select control sytem:', selectedControlSystem);
			var controlSystemComponent = null;
			if (selectedControlSystem) {
				var controlSystemType = selectedControlSystem.ControlSystem || '';
				var componentType = itemType + controlSystemType;
				console.log('compoentType:', componentType);
				switch (componentType) {
					case 'LightsCBUS':
						controlSystemComponent = _react2.default.createElement(_LightsCBUS2.default, { itemType: itemType, itemName: itemName, controlSystemName: controlSystem });
						break;
					case 'LightsPUSH':
						controlSystemComponent = _react2.default.createElement(_LightsPUSH2.default, { itemType: itemType, itemName: itemName, controlSystemName: controlSystem });
						break;
				}
			}
			return controlSystemComponent;
		}
	}, {
		key: 'itemNamerender',
		value: function itemNamerender() {
			var itemType = this.state.itemType || '';
			if (!itemType) {
				return null;
			}
			var itemNameList = deviceNameData[itemType] || [];
			return itemNameList.map(function (item) {
				return _react2.default.createElement(
					Option,
					{ key: item, value: item },
					item
				);
			});
		}
	}, {
		key: 'controlSystemRender',
		value: function controlSystemRender() {
			var controlSystems = this.props.controlSystems || [];
			return controlSystems.map(function (controlSystem) {
				return _react2.default.createElement(
					Option,
					{ key: controlSystem.Name, value: controlSystem.Name },
					controlSystem.Name
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var controlSystem = this.state.controlSystem || '';
			var name = this.state.name || '';
			var itemType = this.state.itemType || '';
			return _react2.default.createElement(
				_modal2.default,
				{ title: 'Add Device',
					visible: this.props.isOpen,
					onCancel: this.handleCancel.bind(this),
					footer: null
				},
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: 'ant-form-item-label' },
						_react2.default.createElement(
							'label',
							null,
							'Item Type'
						)
					),
					_react2.default.createElement(
						_select2.default,
						{
							size: 'large',
							value: this.state.itemType,
							style: { width: '100%' },
							onChange: this.itemTypeOnChange.bind(this)
						},
						_react2.default.createElement(
							Option,
							{ value: 'Lights' },
							'Lights'
						),
						_react2.default.createElement(
							Option,
							{ value: 'Blinds' },
							'Blinds'
						),
						_react2.default.createElement(
							Option,
							{ value: 'AV' },
							'Audio Visual'
						),
						_react2.default.createElement(
							Option,
							{ value: 'AC' },
							'Climate Control'
						),
						_react2.default.createElement(
							Option,
							{ value: 'Fans' },
							'Fans'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: 'ant-form-item-label' },
						_react2.default.createElement(
							'label',
							null,
							'Item Name'
						)
					),
					_react2.default.createElement(
						_select2.default,
						{
							size: 'large',
							value: this.state.itemName,
							style: { width: '100%' },
							onChange: this.itemNameOnChange.bind(this)
						},
						this.itemNamerender()
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: 'ant-form-item-label' },
						_react2.default.createElement(
							'label',
							null,
							'Control System'
						)
					),
					_react2.default.createElement(
						_select2.default,
						{
							size: 'large',
							value: this.state.controlSystem,
							style: { width: '100%' },
							onChange: this.controlSystemOnChange.bind(this)
						},
						this.controlSystemRender()
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: this.state.controlSystemStyle },
						_react2.default.createElement(
							_button2.default,
							{ type: 'primary' },
							'Submit'
						),
						_react2.default.createElement(
							_button2.default,
							{ type: 'default', onClick: this.handleCancel.bind(this) },
							'Cancel'
						)
					)
				),
				this.renderDeviceComponent()
			);
		}
	}]);

	return DeviceModal;
}(_react.Component);

function mapStateToProps(state) {
	return {
		isOpen: state.modalOpen.addDeviceModal,
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		location: state.authentication.location,
		controlSystems: state.customer.customer.controlSystems
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(DeviceModal);

/***/ },

/***/ 882:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(822);

var _switch = __webpack_require__(821);

var _switch2 = _interopRequireDefault(_switch);

var _css3 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css4 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css5 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css6 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var LightsCBUS = function (_Component) {
	_inherits(LightsCBUS, _Component);

	function LightsCBUS(props) {
		_classCallCheck(this, LightsCBUS);

		var _this = _possibleConstructorReturn(this, (LightsCBUS.__proto__ || Object.getPrototypeOf(LightsCBUS)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(LightsCBUS, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			var controlSystemName = this.props.controlSystemName || '';
			var itemType = this.props.itemType || '';
			var itemName = this.props.itemName || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			this.props.form.validateFields(function (err, values) {
				console.log('values:', values);
				var aa = values.applicationAddress || '';
				var ga1 = values.groupAddress1 || '';
				var ga2 = values.groupAddress2 || '';
				var ga3 = values.groupAddress3 || '';
				var dimmable = values.dimmable || false;
				if (!err) {
					var data = {
						name: itemName,
						type: itemType,
						controlSystemName: controlSystemName,
						params: {
							AA: aa,
							GA1: ga1,
							Dimmabel: dimmable
						}
					};
					if (ga2) {
						data.params.GA2 = ga2;
					}
					if (ga3) {
						data.params.GA3 = ga3;
					}
					console.log('data:', data);
					/*const url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/"+
     			integratorEmail+"/customer/"+customerEmail+"/controlsystem"
     console.log('data:',data);
     this.setState({
     	loading:true,
     	errMessage:''
     });
     axios.post(url,data,{
     	headers:{Authorization:jwtToken}
     })
     .then(response=>{
     	this.setState({
     		loading:false,
     		errMessage:''
     	})
     	this.props.controlSystemModalShow(false);
     	this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
     })
     .catch(err=>{
      	const errMessage = _.get(err,'response.data.errorMessage','');
      	let message = '';
      	if (!errMessage){
      		message = 'internal error';
      	}else {
      		message = JSON.parse(errMessage).message||'internal error';
      	}
      	this.setState({loading:false,errMessage:message});
     })*/
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var controlSystemType = this.props.controlSystem || '';
			var name = this.props.name || '';
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Application Address'
					},
					getFieldDecorator('applicationAddress', {
						rules: [{ required: true, message: 'Please input application address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Application Address'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Group Address 1'
					},
					getFieldDecorator('groupAddress1', {
						rules: [{ required: true, message: 'Please input group address 1!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Group Address 1'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Group Address 2'
					},
					getFieldDecorator('groupAddress2', {
						rules: []
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Group Address 2'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Group Address 3'
					},
					getFieldDecorator('groupAddress3', {
						rules: []
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Group Address 3'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						label: 'Dimmable'
					},
					getFieldDecorator('dimmable', {
						initialValue: false,
						rules: []
					})(_react2.default.createElement(_switch2.default, null))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return LightsCBUS;
}(_react.Component);

var WrappedLightsCBUS = _form2.default.create()(LightsCBUS);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedLightsCBUS);

/***/ },

/***/ 883:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var LightsPUSH = function (_Component) {
	_inherits(LightsPUSH, _Component);

	function LightsPUSH(props) {
		_classCallCheck(this, LightsPUSH);

		var _this = _possibleConstructorReturn(this, (LightsPUSH.__proto__ || Object.getPrototypeOf(LightsPUSH)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(LightsPUSH, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			var controlSystemName = this.props.controlSystemName || '';
			var itemType = this.props.itemType || '';
			var itemName = this.props.itemName || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			this.props.form.validateFields(function (err, values) {
				console.log('values:', values);
				var turnOn = values.turnOn || '';
				var turnOff = values.turnOff || '';
				var turnLow = values.turnLow || '';
				var turnBright = values.turnBright || '';
				if (!err) {
					var data = {
						name: itemName,
						type: itemType,
						controlSystemName: controlSystemName,
						params: {
							TurnOn: turnOn,
							TurnOff: turnOff
						}
					};
					if (turnLow) {
						data.params.TurnLow = turnLow;
					}
					if (turnBright) {
						data.params.TurnBright = turnBright;
					}
					console.log('data:', data);
					/*const url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/"+
     			integratorEmail+"/customer/"+customerEmail+"/controlsystem"
     console.log('data:',data);
     this.setState({
     	loading:true,
     	errMessage:''
     });
     axios.post(url,data,{
     	headers:{Authorization:jwtToken}
     })
     .then(response=>{
     	this.setState({
     		loading:false,
     		errMessage:''
     	})
     	this.props.controlSystemModalShow(false);
     	this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
     })
     .catch(err=>{
      	const errMessage = _.get(err,'response.data.errorMessage','');
      	let message = '';
      	if (!errMessage){
      		message = 'internal error';
      	}else {
      		message = JSON.parse(errMessage).message||'internal error';
      	}
      	this.setState({loading:false,errMessage:message});
     })*/
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var controlSystemType = this.props.controlSystem || '';
			var name = this.props.name || '';
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Turn On'
					},
					getFieldDecorator('turnOn', {
						rules: [{ required: true, message: 'Please input macro number of turn on!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Macro Number'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Turn Off'
					},
					getFieldDecorator('turnOff', {
						rules: [{ required: true, message: 'Please input macro number of turn off!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Macro Number'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Turn Low'
					},
					getFieldDecorator('turnLow', {
						rules: []
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Macro Number'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Turn Bright'
					},
					getFieldDecorator('turnBright', {
						rules: []
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'Macro Number'
					}))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return LightsPUSH;
}(_react.Component);

var WrappedLightsPUSH = _form2.default.create()(LightsPUSH);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedLightsPUSH);

/***/ },

/***/ 884:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(48);

__webpack_require__(1097);

var _IntegratorsData = __webpack_require__(886);

var _IntegratorsData2 = _interopRequireDefault(_IntegratorsData);

var _IntegratorInfo = __webpack_require__(885);

var _IntegratorInfo2 = _interopRequireDefault(_IntegratorInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var countryData = ['Australia', 'New Zealand', 'Hong Kong', 'Singapore', 'United Kingdom'];
var areaData = {
	'Australia': ['Victoria & Tasmania', 'South Australia & Northern Territory', 'New South Wales', 'Western Australia', 'Queensland'],
	'New Zealand': [],
	'Hong Kong': [],
	'Singapore': [],
	'United Kingdom': []
};

var ApprovedIntegrators = function (_Component) {
	_inherits(ApprovedIntegrators, _Component);

	function ApprovedIntegrators() {
		_classCallCheck(this, ApprovedIntegrators);

		return _possibleConstructorReturn(this, (ApprovedIntegrators.__proto__ || Object.getPrototypeOf(ApprovedIntegrators)).apply(this, arguments));
	}

	_createClass(ApprovedIntegrators, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.state = {
				country: countryData[0],
				area: areaData[countryData[0]][0]
			};
		}
	}, {
		key: 'onChangeCountry',
		value: function onChangeCountry(value) {
			console.log('coutry value:', value);
			this.setState({
				country: value
			});
		}
	}, {
		key: 'onChangeArea',
		value: function onChangeArea(value) {
			console.log('area value:', value);
			this.setState({
				area: value
			});
		}
	}, {
		key: 'renderIntegratorList',
		value: function renderIntegratorList() {
			var country = this.state.country;
			var area = this.state.area;
			var countryData = _IntegratorsData2.default.country.find(function (item) {
				return item.countryName === country;
			});
			if (countryData.isCityCountry) {
				var integrators = countryData.integrators || [];
				if (integrators.length == 0) {
					return _react2.default.createElement(
						'div',
						{ className: 'approved-integrator-contact-div' },
						_react2.default.createElement(
							'p',
							{ className: 'approved-integrator-message' },
							'We are looking for quality C-Bus integrators with a passion for voice control. Please contact Smart Voice.'
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/contact' },
							_react2.default.createElement(
								_button2.default,
								{ type: 'primary', className: 'contact-button' },
								'Contact US'
							)
						)
					);
				}
				integrators.sort(function (a, b) {
					return a["Company Name"] > b["Company Name"] ? 1 : a["Company Name"] < b["Company Name"] ? -1 : 0;
				});
				console.log('integrators:', JSON.stringify(integrators));
				return integrators.map(function (integrator) {
					return _react2.default.createElement(_IntegratorInfo2.default, { key: integrator.Email, integrator: integrator });
				});
			} else {
				var _areaData = countryData.areas.find(function (item) {
					return item.name === area;
				});
				if (_areaData) {
					var _integrators = _areaData.integrators || [];
					_integrators.sort(function (a, b) {
						return a["Company Name"] > b["Company Name"] ? 1 : a["Company Name"] < b["Company Name"] ? -1 : 0;
					});
					console.log('integrators:', JSON.stringify(_integrators));
					return _integrators.map(function (integrator) {
						return _react2.default.createElement(_IntegratorInfo2.default, { key: integrator.Email, integrator: integrator });
					});
				} else {
					return _react2.default.createElement(
						'div',
						{ className: 'approved-integrator-contact-div' },
						_react2.default.createElement(
							'p',
							{ className: 'approved-integrator-message' },
							'We are looking for quality C-Bus integrators with a passion for voice control. Please contact Smart Voice.'
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/contact' },
							_react2.default.createElement(
								_button2.default,
								{ type: 'primary', className: 'contact-button' },
								'Contact US'
							)
						)
					);
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var countryOptions = countryData.map(function (item) {
				return _react2.default.createElement(
					Option,
					{ key: item },
					item
				);
			});
			var country = this.state.country;
			var areaOptions = areaData[country].map(function (item) {
				return _react2.default.createElement(
					Option,
					{ key: item },
					item
				);
			});
			var areaSelect = areaOptions.length ? _react2.default.createElement(
				_select2.default,
				{
					value: this.state.area,
					className: 'approved-integrator-area',
					onChange: this.onChangeArea.bind(this)
				},
				areaOptions
			) : '';
			return _react2.default.createElement(
				'div',
				{ className: 'approved-integrator-div' },
				_react2.default.createElement(
					_select2.default,
					{
						defaultValue: this.state.country,
						className: 'approved-integrator-country',
						onChange: this.onChangeCountry.bind(this)
					},
					countryOptions
				),
				areaSelect,
				_react2.default.createElement(
					'div',
					{ className: 'integrators-list' },
					this.renderIntegratorList()
				)
			);
		}
	}]);

	return ApprovedIntegrators;
}(_react.Component);

exports.default = ApprovedIntegrators;

/***/ },

/***/ 885:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(128);

var _card = __webpack_require__(127);

var _card2 = _interopRequireDefault(_card);

var _css2 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegratorInfo = function (_Component) {
	_inherits(IntegratorInfo, _Component);

	function IntegratorInfo() {
		_classCallCheck(this, IntegratorInfo);

		return _possibleConstructorReturn(this, (IntegratorInfo.__proto__ || Object.getPrototypeOf(IntegratorInfo)).apply(this, arguments));
	}

	_createClass(IntegratorInfo, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_card2.default,
				{
					title: this.props.integrator["Company Name"],
					bordered: true,
					className: 'integrator-info'
				},
				_react2.default.createElement(
					'div',
					{ className: 'integrator-info-location' },
					_react2.default.createElement(_icon2.default, { type: 'environment', className: 'integrator-info-icon' }),
					_react2.default.createElement(
						'p',
						null,
						this.props.integrator["Location"]
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'integrator-info-name' },
					_react2.default.createElement(_icon2.default, { type: 'user', className: 'integrator-info-icon' }),
					_react2.default.createElement(
						'p',
						null,
						this.props.integrator["Contact Name"]
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'integrator-info-email' },
					_react2.default.createElement(_icon2.default, { type: 'mail', className: 'integrator-info-icon' }),
					_react2.default.createElement(
						'p',
						null,
						this.props.integrator["Email"]
					)
				)
			);
		}
	}]);

	return IntegratorInfo;
}(_react.Component);

exports.default = IntegratorInfo;

/***/ },

/***/ 886:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"country": [{
		"countryName": "Australia",
		"isCityCountry": false,
		"areas": [{
			"name": "Victoria & Tasmania",
			"integrators": [{

				"Company Name": "BAT Electrics",
				"Location": "Pakenham",
				"Contact Name": "Ben Grist",
				"Email": "ben@batelectrics.com.au"
			}, {
				"Company Name": "ProFX",
				"Location": "Cheltenham",
				"Contact Name": "Shane Gregory",
				"Email": "shaneg@profx.com.au"
			}, {
				"Company Name": "Tech2Home",
				"Location": "Melbourne",
				"Contact Name": "Peter Wilson",
				"Email": "peter.wilson@tech2home.com.au"
			}, {
				"Company Name": "Bugden Trimac Group",
				"Location": "Burwood",
				"Contact Name": "Ian Michelson",
				"Email": "kristy.m@btgroup.net.au"
			}, {
				"Company Name": "Airtopia",
				"Location": "Melbourne",
				"Contact Name": "Dom Cannalonga",
				"Email": "dom@iconnectbms.com.au"
			}, {
				"Company Name": "Middy's Techenergy",
				"Location": "Clayton",
				"Contact Name": "Wes Collins",
				"Email": "wes@middys.com.au"
			}, {
				"Company Name": "Boutique AV Solutions Pty Ltd",
				"Location": "West Melbourne",
				"Contact Name": "Reuben Rego",
				"Email": "accounts@boutiqueav.com.au"
			}]
		}, {
			"name": "South Australia & Northern Territory",
			"integrators": [{
				"Company Name": "Proselec, Protective Security & Electrical",
				"Location": "Grange",
				"Contact Name": "Mario Nicou",
				"Email": "proselec@optusnet.com.au"
			}, {
				"Company Name": "Holeshot Electrical",
				"Location": "Brooklyn Park",
				"Contact Name": "Durand Bartlett",
				"Email": "holeshot1@senet.com.au"
			}, {
				"Company Name": "M&E Electrical",
				"Location": "Underdale",
				"Contact Name": "Michael Scamoni",
				"Email": "michael@me-electrical.net"
			}, {
				"Company Name": "Port Lincoln Data & Electrical",
				"Location": "Port Lincon",
				"Contact Name": "Paul Stewart",
				"Email": "paul@plde.com.au"
			}, {
				"Company Name": "E-Nstall",
				"Location": "Adelaide",
				"Contact Name": "Marcus",
				"Email": "marcus@e-nstall.com"
			}]
		}, {
			"name": "New South Wales",
			"integrators": [{
				"Company Name": "Urban Synergy Pty Ltd",
				"Location": "Warriewood",
				"Contact Name": "Andrew Carruthers",
				"Email": "andrew@urbansynergy.com.au"
			}, {
				"Company Name": "Holeshot Electrical",
				"Location": "Brooklyn Park",
				"Contact Name": "Durand Bartlett",
				"Email": "holeshot1@senet.com.au"
			}, {
				"Company Name": "GB Electrical Contractors",
				"Location": "Mayfield West",
				"Contact Name": "Paul Richards",
				"Email": "paul.richards@gbelectrical.com.au"
			}, {
				"Company Name": "Amped Automation",
				"Location": "Brookvale",
				"Contact Name": "Ryan Anderson",
				"Email": "ryan@ampedautomation.com"
			}, {
				"Company Name": "Automated Lifestyles",
				"Location": "Annangrove",
				"Contact Name": "David Symons",
				"Email": "david@autolife.com.au"
			}, {
				"Company Name": "The Home Automation Company",
				"Location": "Castlecrag",
				"Contact Name": "John Frost",
				"Email": "john.frost@HomeAutomationCo.com.au"
			}, {
				"Company Name": "Safe Energy",
				"Location": "Kingswood",
				"Contact Name": "Rick Sudulic",
				"Email": "rick@safeenergynsw.com.au"
			}, {
				"Company Name": "Divine Electrics",
				"Location": "Curl Curl",
				"Contact Name": "Dave Vineburg",
				"Email": "dave@divineelectrics.com.au"
			}, {
				"Company Name": "Tower Automation Pty Ltd",
				"Location": "Manly",
				"Contact Name": "Corin van Poppel",
				"Email": "corin@towerautomation.com.au"
			}, {
				"Company Name": "Professional Automation Pty Ltd",
				"Location": "Macquarie Park",
				"Contact Name": "Rita Riddiough",
				"Email": "rita@proautomate.com.au"
			}, {
				"Company Name": "Complete Systems Integration",
				"Location": "Charlestown",
				"Contact Name": "Stephen Yorke",
				"Email": "steve@csintegration.com.au"
			}, {
				"Company Name": "NOUS HOUSE",
				"Location": "Hunters Hill",
				"Contact Name": "BRAD MERRICK",
				"Email": "bradmerrick@noushouse.com.au"
			}, {
				"Company Name": "Micron Group",
				"Location": "Lime St, Sydney",
				"Contact Name": "Andrew Savva",
				"Email": "andrew.s@microngroup.com.au"
			}, {
				"Company Name": "Professional Automation Pty Ltd",
				"Location": "Talavera Road Macquarie Park",
				"Contact Name": "Mark Riddiough",
				"Email": "mark@proautomate.com.au"
			}, {
				"Company Name": "Blakemore Electrical",
				"Location": "North Narrabeen",
				"Contact Name": "Andrew Merritt",
				"Email": "andrew.merritt1@optusnet.com.au"
			}, {
				"Company Name": "Electromaster Holdings(NSW) Pty Ltd",
				"Location": "Marrickville",
				"Contact Name": "Anthony Calavrias",
				"Email": "anthony@electromaster.com.au"
			}, {
				"Company Name": "Technology on Tap",
				"Location": "Marrickville",
				"Contact Name": "George Kosmas",
				"Email": "gkosmas@techontap.com.au"
			}, {
				"Company Name": "Ampelect",
				"Location": "Cronulla",
				"Contact Name": "Paul Grey",
				"Email": "paul@ampelect.com.au"
			}, {
				"Company Name": "Custom Electrical Solutions Pty Ltd",
				"Location": "Hoxton Park",
				"Contact Name": "Simon Poles",
				"Email": "sp@customelectricalsolutions.com.au"
			}, {
				"Company Name": "Industry Audio Visual",
				"Location": "Mosman",
				"Contact Name": "Scott Irvin",
				"Email": "scott@industryaudiovisual.com.au"
			}, {
				"Company Name": "Creation Home Cinemas",
				"Location": "Dural DC",
				"Contact Name": "Brendan McAdam",
				"Email": "bjm@creationhomecinemas.com.au"
			}, {
				"Company Name": "John Walsh Electrical",
				"Location": "Rozelle",
				"Contact Name": "John Walsh",
				"Email": "johnwalshelectrical@gmail.com"
			}]
		}, {
			"name": "Western Australia",
			"integrators": [{
				"Company Name": "Fly Industries",
				"Location": "Padbury",
				"Contact Name": "Lewis Famlonga",
				"Email": "lewisf@iinet.net.au"
			}, {
				"Company Name": "Intelligent Home",
				"Location": "Osbourne Park",
				"Contact Name": "Simon Brncic",
				"Email": "simonb@intelligenthome.com.au"
			}, {
				"Company Name": "Hot Electrics Pty Ltd",
				"Location": "Hillarys",
				"Contact Name": "Gary Dunn",
				"Email": "hotelect@bigpond.net.au"
			}, {
				"Company Name": "ADCO Platinum",
				"Location": "Ravenswood",
				"Contact Name": "Luke Depane",
				"Email": "luked@adcoplatinum.com.au"
			}]
		}, {
			"name": "Queensland",
			"integrators": [{
				"Company Name": "Omega Technologies",
				"Location": "Hannam St, Carins",
				"Contact Name": "Vas Allayialis",
				"Email": "vas@omegait.com.au"
			}, {
				"Company Name": "CustomLink Pty Ltd",
				"Location": "Doolandella",
				"Contact Name": "Lee Ngo",
				"Email": "lee@customlink.com.au"
			}, {
				"Company Name": "Stratus Integrated Systems",
				"Location": "Robina",
				"Contact Name": "David Tattersall",
				"Email": "david@stratus.com.au"
			}, {
				"Company Name": "Connect Power & Cabling",
				"Location": "Robina Town Centre",
				"Contact Name": "Richard Cooke",
				"Email": "richard@connecting.com.au"
			}, {
				"Company Name": "Laser Electrical Loganholme ",
				"Location": "Loganholme",
				"Contact Name": "Phillip Kelly",
				"Email": "loganholme@laserelectrical.com.au"
			}, {
				"Company Name": "Extreme Home Automation",
				"Location": "Ballina",
				"Contact Name": "Max",
				"Email": "extremeha@bigpond.com"
			}, {
				"Company Name": "Amped Automation",
				"Location": "Brookvale",
				"Contact Name": "Gez",
				"Email": "gez@ampedautomation.com"
			}, {
				"Company Name": "Intechsys",
				"Location": "Wakerley",
				"Contact Name": "Stephen Cooper",
				"Email": "stephen@intechsys.com.au"
			}, {
				"Company Name": "Edge Audio Visual",
				"Location": "Cashmere",
				"Contact Name": "Mark Blyton",
				"Email": "mark@edgeaudiovisual.com.au"
			}]
		}]
	}, {
		"countryName": "New Zealand",
		"isCityCountry": false,
		"areas": []
	}, {
		"countryName": "Hong Kong",
		"isCityCountry": true,
		"integrators": [{
			"Company Name": "Living Tech(Asia) Limited",
			"Location": "Hong kong",
			"Contact Name": "KaHo Yeung",
			"Email": "kaho.yeung@livingtech-asia.com"
		}]
	}, {
		"countryName": "Singapore",
		"isCityCountry": true,
		"integrators": []
	}, {
		"countryName": "United Kingdom",
		"isCityCountry": false,
		"areas": []
	}]
};

/***/ },

/***/ 887:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(128);

var _card = __webpack_require__(127);

var _card2 = _interopRequireDefault(_card);

var _css2 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1098);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs = function (_Component) {
	_inherits(ContactUs, _Component);

	function ContactUs() {
		_classCallCheck(this, ContactUs);

		return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
	}

	_createClass(ContactUs, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'contact-us-div' },
				_react2.default.createElement(
					_card2.default,
					{
						title: 'Contact US',
						className: 'contact-us-card'
					},
					_react2.default.createElement(
						'p',
						{ className: 'margin-20' },
						'For New Sales & Integrator Enquiries:'
					),
					_react2.default.createElement(
						'div',
						{ className: 'sales-inquiry' },
						_react2.default.createElement(_icon2.default, { type: 'mail' }),
						_react2.default.createElement(
							'p',
							{ className: 'contact-us-p-item' },
							'sales@smartvoice.com.au'
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'margin-20' },
						'For Existing Integrators & Training Enquiries:'
					),
					_react2.default.createElement(
						'div',
						{ className: 'existed-support-inquiry' },
						_react2.default.createElement(_icon2.default, { type: 'mail' }),
						_react2.default.createElement(
							'p',
							{ className: 'contact-us-p-item' },
							'support@smartvoice.com.au'
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'margin-20' },
						'For Immediate Enquiries,please call:'
					),
					_react2.default.createElement(
						'div',
						{ className: 'immediate-inquiry' },
						_react2.default.createElement(_icon2.default, { type: 'phone' }),
						_react2.default.createElement(
							'p',
							{ className: 'contact-us-p-item' },
							'1300-211-644'
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'margin-20' },
						'Physical Office/Showroom Address:'
					),
					_react2.default.createElement(
						'p',
						null,
						'220 Osborne Street, Williamstown, VIC 3016'
					),
					_react2.default.createElement('iframe', { src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.8559866464016!2d144.88756795089245!3d-37.863659979643884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad666bf4a6972f3%3A0x6068e8c464ab572c!2s220+Osborne+St%2C+Williamstown+VIC+3016!5e0!3m2!1sen!2sau!4v1482373345599' })
				)
			);
		}
	}]);

	return ContactUs;
}(_react.Component);

exports.default = ContactUs;

/***/ },

/***/ 888:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var AirtopiaComponent = function (_Component) {
	_inherits(AirtopiaComponent, _Component);

	function AirtopiaComponent(props) {
		_classCallCheck(this, AirtopiaComponent);

		var _this = _possibleConstructorReturn(this, (AirtopiaComponent.__proto__ || Object.getPrototypeOf(AirtopiaComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(AirtopiaComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var controlSystem = this.props.controlSystem || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			this.props.form.validateFields(function (err, values) {
				var id = values.id || '';
				var owner = values.owner || '';
				var key = values.key || '';
				var name = values.name || '';
				var ip = "http://oauth.airtopia.com";
				var params = { id: id, owner: owner, key: key, ip: ip };
				if (!err) {
					var data = {
						controlSystem: controlSystem,
						name: name,
						params: params
					};
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem";
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.post(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.controlSystemModalShow(false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var controlSystemType = this.props.controlSystem || '';
			var name = this.props.name || '';
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ID'
					},
					getFieldDecorator('id', {
						rules: [{ required: true, message: 'Please input id!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'key' }),
						placeholder: 'Airtopia ID'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Owner'
					},
					getFieldDecorator('owner', {
						rules: [{ required: true, message: 'Please input onwer!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'key' }),
						placeholder: 'Airtopia Owner'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Key'
					},
					getFieldDecorator('key', {
						rules: [{ required: true, message: 'Please input key!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'key' }),
						placeholder: 'Airtopia Key'
					}))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return AirtopiaComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(AirtopiaComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 889:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var ControlSystemComponent = function (_Component) {
	_inherits(ControlSystemComponent, _Component);

	function ControlSystemComponent(props) {
		_classCallCheck(this, ControlSystemComponent);

		var _this = _possibleConstructorReturn(this, (ControlSystemComponent.__proto__ || Object.getPrototypeOf(ControlSystemComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(ControlSystemComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var controlSystem = this.props.controlSystem || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			this.props.form.validateFields(function (err, values) {
				var ip = values.ip || '';
				var port = values.port || '';
				var name = values.name || '';
				if (!err) {
					var data = {
						name: name,
						controlSystem: controlSystem,
						params: {
							IP: ip,
							PortNo: port
						}
					};
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem";
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.post(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.controlSystemModalShow(false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var controlSystemType = this.props.controlSystem || '';
			var name = this.props.name || '';
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'IP Address'
					},
					getFieldDecorator('ip', {
						rules: [{ required: true, message: 'Please input ip address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'IP Address'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Port No'
					},
					getFieldDecorator('port', {
						rules: [{ required: true, message: 'Please input your password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'hdd' }),
						placeholder: 'Port No'
					}))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return ControlSystemComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(ControlSystemComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 890:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(131);

var _modal = __webpack_require__(130);

var _modal2 = _interopRequireDefault(_modal);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css3 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _AddCustomerForm = __webpack_require__(210);

var _AddCustomerForm2 = _interopRequireDefault(_AddCustomerForm);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

__webpack_require__(407);

var _ControlSystemComponent = __webpack_require__(889);

var _ControlSystemComponent2 = _interopRequireDefault(_ControlSystemComponent);

var _AirtopiaComponent = __webpack_require__(888);

var _AirtopiaComponent2 = _interopRequireDefault(_AirtopiaComponent);

var _WISERComponent = __webpack_require__(893);

var _WISERComponent2 = _interopRequireDefault(_WISERComponent);

var _NeroCloudComponent = __webpack_require__(892);

var _NeroCloudComponent2 = _interopRequireDefault(_NeroCloudComponent);

var _NACComponent = __webpack_require__(891);

var _NACComponent2 = _interopRequireDefault(_NACComponent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var ControlSystemModal = function (_Component) {
	_inherits(ControlSystemModal, _Component);

	function ControlSystemModal(props) {
		_classCallCheck(this, ControlSystemModal);

		var _this = _possibleConstructorReturn(this, (ControlSystemModal.__proto__ || Object.getPrototypeOf(ControlSystemModal)).call(this, props));

		_this.state = {
			controlSystem: '',
			controlSystemStyle: 'control-system-selection-button'
		};
		return _this;
	}

	_createClass(ControlSystemModal, [{
		key: 'handleCancel',
		value: function handleCancel() {
			console.log('handleCancel...');
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			this.setState({
				controlSystem: '',
				name: '',
				controlSystemStyle: 'control-system-selection-button'
			});
			this.props.controlSystemModalShow(false);
			this.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
		}
	}, {
		key: 'controlSystemOnChange',
		value: function controlSystemOnChange(value) {
			console.log(value);
			this.setState({
				controlSystem: value,
				controlSystemStyle: 'hidden'
			});
		}
	}, {
		key: 'renderControlSystemComponent',
		value: function renderControlSystemComponent() {
			var controlSystem = this.state.controlSystem || '';
			var controlSystemComponent = null;
			switch (controlSystem) {
				case 'CBUS':
					controlSystemComponent = _react2.default.createElement(_ControlSystemComponent2.default, { handleCancel: this.handleCancel.bind(this), controlSystem: controlSystem });
					break;
				case 'PUSH':
					controlSystemComponent = _react2.default.createElement(_ControlSystemComponent2.default, { handleCancel: this.handleCancel.bind(this), controlSystem: controlSystem });
					break;
				case 'Airtopia':
					controlSystemComponent = _react2.default.createElement(_AirtopiaComponent2.default, { handleCancel: this.handleCancel.bind(this), controlSystem: controlSystem });
					break;
				case 'WISER':
					controlSystemComponent = _react2.default.createElement(_WISERComponent2.default, { handleCancel: this.handleCancel.bind(this), controlSystem: controlSystem });
					break;
				case 'NeroCloud':
					controlSystemComponent = _react2.default.createElement(_NeroCloudComponent2.default, { handleCancel: this.handleCancel.bind(this), controlSystem: controlSystem });
					break;
				case 'NAC':
					controlSystemComponent = _react2.default.createElement(_NACComponent2.default, { handleCancel: this.handleCancel.bind(this), controlSystem: controlSystem });
					break;
				default:
					break;
			}
			return controlSystemComponent;
		}
	}, {
		key: 'render',
		value: function render() {
			var controlSystem = this.state.controlSystem || '';
			var name = this.state.name || '';
			return _react2.default.createElement(
				_modal2.default,
				{ title: 'Add Control System',
					visible: this.props.isOpen,
					onCancel: this.handleCancel.bind(this),
					footer: null
				},
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: 'ant-form-item-label' },
						_react2.default.createElement(
							'label',
							null,
							'Control System'
						)
					),
					_react2.default.createElement(
						_select2.default,
						{
							size: 'large',
							value: this.state.controlSystem,
							style: { width: '100%' },
							onChange: this.controlSystemOnChange.bind(this)
						},
						_react2.default.createElement(
							Option,
							{ value: 'CBUS' },
							'CBUS Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'PUSH' },
							'PUSH Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'Airtopia' },
							'Airtopia Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'WISER' },
							'WISER Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'NeroCloud' },
							'NeroCloud Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'NAC' },
							'NAC Systems'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: this.state.controlSystemStyle },
						_react2.default.createElement(
							_button2.default,
							{ type: 'primary' },
							'Submit'
						),
						_react2.default.createElement(
							_button2.default,
							{ type: 'default', onClick: this.handleCancel.bind(this) },
							'Cancel'
						)
					)
				),
				this.renderControlSystemComponent()
			);
		}
	}]);

	return ControlSystemModal;
}(_react.Component);

function mapStateToProps(state) {
	return {
		isOpen: state.modalOpen.addControlSystemModal,
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ControlSystemModal);

/***/ },

/***/ 891:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var NACComponent = function (_Component) {
	_inherits(NACComponent, _Component);

	function NACComponent(props) {
		_classCallCheck(this, NACComponent);

		var _this = _possibleConstructorReturn(this, (NACComponent.__proto__ || Object.getPrototypeOf(NACComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(NACComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var controlSystem = this.props.controlSystem || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			this.props.form.validateFields(function (err, values) {
				var ip = values.ip || '';
				var port = values.port || '';
				var username = values.username || '';
				var password = values.password || '';
				var name = values.name || '';
				var params = {
					IP: ip,
					PortNo: port,
					Username: username,
					Password: password
				};
				if (!err) {
					var data = {
						controlSystem: controlSystem,
						name: name,
						params: params
					};
					console.log('data:', data);
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem";
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.post(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.controlSystemModalShow(false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var controlSystemType = this.props.controlSystem || '';
			var name = this.props.name || '';
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'IP Address'
					},
					getFieldDecorator('ip', {
						rules: [{ required: true, message: 'Please input ip address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'IP Address'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Port No'
					},
					getFieldDecorator('port', {
						rules: [{ required: true, message: 'Please input port no!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'hdd' }),
						placeholder: 'Port No'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Name'
					},
					getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input username!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'User Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Password'
					},
					getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return NACComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(NACComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 892:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var NeroCloudComponent = function (_Component) {
	_inherits(NeroCloudComponent, _Component);

	function NeroCloudComponent(props) {
		_classCallCheck(this, NeroCloudComponent);

		var _this = _possibleConstructorReturn(this, (NeroCloudComponent.__proto__ || Object.getPrototypeOf(NeroCloudComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: '',
			continueButtonStyle: 'add-control-system-button',
			submitButtonStyle: 'hidden',
			deviceNumbers: [],
			deviceNumberStyle: 'hidden',
			neroParams: {}
		};
		return _this;
	}

	_createClass(NeroCloudComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var controlSystem = this.props.controlSystem || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var neroParams = this.state.neroParams;
			console.log('nero params:', neroParams);
			this.props.form.validateFields(function (err, values) {
				var name = values.name || '';
				var neroUserName = values.username || '';
				var MMSAuth = _lodash2.default.get(neroParams, 'MMSAuth', '');
				var MMSAuthSig = _lodash2.default.get(neroParams, 'MMSAuthSig', '');
				var NeroAccountNumber = _lodash2.default.get(neroParams, 'accountNum', '');
				var NeroDeviceNumber = values.deviceNumber || '';
				var SHA1Key = _lodash2.default.get(neroParams, 'SHA1', '');
				var validTil = _lodash2.default.get(neroParams, 'validTil', '');
				var params = {
					MMSAuth: MMSAuth,
					MMSAuthSig: MMSAuthSig,
					NeroAccountNumber: NeroAccountNumber,
					NeroDeviceNumber: NeroDeviceNumber,
					neroUserName: neroUserName,
					SHA1Key: SHA1Key,
					validTil: validTil
				};
				if (!err) {
					var data = {
						controlSystem: controlSystem,
						name: name,
						params: params
					};
					console.log('data:', data);
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem";
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.post(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.controlSystemModalShow(false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'getDeviceNumber',
		value: function getDeviceNumber() {
			var _this3 = this;

			var jwtToken = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			this.props.form.validateFields(function (err, values) {
				if (!err) {
					console.log('username and password are valid');
					var username = values.username || '';
					var password = values.password || '';
					var url = 'https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/' + integratorEmail + '/customer/' + customerEmail + '/controlsystem/getdevicenumber?username=' + username + '&password=' + password;
					_this3.setState({
						loading: true
					});
					_axios2.default.get(url, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						var deviceNumbers = JSON.parse(response.data.data.devices).Devices || [];
						var neroParams = response.data.data.params || {};
						console.log('deviceNumbers:', deviceNumbers);
						_this3.setState({
							errMessage: '',
							loading: false,
							continueButtonStyle: 'hidden',
							submitButtonStyle: 'add-control-system-button',
							deviceNumbers: deviceNumbers,
							deviceNumberStyle: '',
							neroParams: neroParams
						});
					}).catch(function (err) {
						console.log('error:', err);
						_this3.setState({
							errMessage: 'get device number error,confirm username and password',
							loading: false
						});
					});
				}
			});
		}
	}, {
		key: 'renderDeviceNumberSelect',
		value: function renderDeviceNumberSelect() {
			var deviceNumbers = this.state.deviceNumbers || [];
			var getFieldDecorator = this.props.form.getFieldDecorator;

			if (deviceNumbers.length == 0) {
				return null;
			}
			var optionList = deviceNumbers.map(function (device) {
				return _react2.default.createElement(
					Option,
					{ key: device.PK_Device, value: device.PK_Device },
					'Device Number,',
					device.PK_Device
				);
			});
			return _react2.default.createElement(
				FormItem,
				{
					hasFeedback: true,
					label: 'Device Number',
					className: this.state.deviceNumberStyle
				},
				getFieldDecorator('deviceNumber', {
					rules: [{ required: true, message: 'Please select device number!' }]
				})(_react2.default.createElement(
					_select2.default,
					{
						size: 'large',
						style: { width: '100%' }
					},
					optionList
				))
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue,
			    getFieldValue = _props$form.getFieldValue;

			var controlSystemType = this.props.controlSystem || '';
			var name = this.props.name || '';
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Name'
					},
					getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input username!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'User Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Password'
					},
					getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				this.renderDeviceNumberSelect(),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							loading: this.state.loading,
							className: this.state.continueButtonStyle,
							onClick: this.getDeviceNumber.bind(this)
						},
						'Continue'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: this.state.submitButtonStyle
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: this.state.submitButtonStyle,
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return NeroCloudComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(NeroCloudComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 893:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var WISERComponent = function (_Component) {
	_inherits(WISERComponent, _Component);

	function WISERComponent(props) {
		_classCallCheck(this, WISERComponent);

		var _this = _possibleConstructorReturn(this, (WISERComponent.__proto__ || Object.getPrototypeOf(WISERComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(WISERComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var controlSystem = this.props.controlSystem || '';
			var name = this.props.name || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			this.props.form.validateFields(function (err, values) {
				var ip = values.ip || '';
				var port = values.port || '';
				var username = values.username || '';
				var userpassword = values.password || '';
				var security = values.security || '';
				var name = values.name || '';
				var params = {
					IP: ip,
					PortNo: port,
					username: username,
					userpassword: userpassword,
					Security: security
				};
				if (!err) {
					var data = {
						controlSystem: controlSystem,
						name: name,
						params: params
					};
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem";
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.post(url, data, {
						headers: { Authorization: jwtToken },
						timeout: 10000
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.controlSystemModalShow(false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						console.log('error:', JSON.stringify(err));
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = 'internal error,please check username and password';
						if (!errMessage) {
							message = 'internal error,please check username and password';
						} else {
							message = JSON.parse(errMessage).message || 'internal error,please check username and password';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var controlSystemType = this.props.controlSystem || '';
			var name = this.props.name || '';
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'IP Address'
					},
					getFieldDecorator('ip', {
						rules: [{ required: true, message: 'Please input ip address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'IP Address'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Port No'
					},
					getFieldDecorator('port', {
						rules: [{ required: true, message: 'Please input port no!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'hdd' }),
						placeholder: 'Port No'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Name'
					},
					getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input username!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'User Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Password'
					},
					getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Security'
					},
					getFieldDecorator('security', {
						rules: [{ required: true, message: 'Please select security!' }]
					})(_react2.default.createElement(
						_select2.default,
						{
							size: 'large',
							style: { width: '100%' }
						},
						_react2.default.createElement(
							Option,
							{ value: 'SSL' },
							'SSL'
						),
						_react2.default.createElement(
							Option,
							{ value: 'TCP' },
							'TCP'
						)
					))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return WISERComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(WISERComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 894:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(356);

var _notification = __webpack_require__(355);

var _notification2 = _interopRequireDefault(_notification);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _ControlSystemDetailTable = __webpack_require__(895);

var _ControlSystemDetailTable2 = _interopRequireDefault(_ControlSystemDetailTable);

__webpack_require__(1099);

var _ControlSystemModal = __webpack_require__(890);

var _ControlSystemModal2 = _interopRequireDefault(_ControlSystemModal);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlSystemDetail = function (_Component) {
	_inherits(ControlSystemDetail, _Component);

	function ControlSystemDetail() {
		_classCallCheck(this, ControlSystemDetail);

		return _possibleConstructorReturn(this, (ControlSystemDetail.__proto__ || Object.getPrototypeOf(ControlSystemDetail)).apply(this, arguments));
	}

	_createClass(ControlSystemDetail, [{
		key: 'handleAddClick',
		value: function handleAddClick() {
			console.log('add controlsystem click');
			if (this.props.freeControlSystemSlots <= 0) {
				var args = {
					message: 'Alert Message',
					description: 'There is no free controlSystem slot for you, please contact us',
					duration: 0
				};
				_notification2.default.open(args);
			} else {
				this.props.controlSystemModalShow(true);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'control-system-detail-div' },
				_react2.default.createElement(
					'p',
					{ className: 'control-system-detail-title' },
					'ControlSystem Details'
				),
				_react2.default.createElement(_ControlSystemModal2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'control-system-detail-content' },
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							onClick: this.handleAddClick.bind(this)
						},
						'Add'
					)
				),
				_react2.default.createElement(_ControlSystemDetailTable2.default, null)
			);
		}
	}]);

	return ControlSystemDetail;
}(_react.Component);

function mapStateToProps(state) {
	var freeControlSystemSlots = state.integrator.integrator.freeControlSystemSlots;
	return {
		freeControlSystemSlots: freeControlSystemSlots
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ControlSystemDetail);

/***/ },

/***/ 895:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(160);

var _table = __webpack_require__(159);

var _table2 = _interopRequireDefault(_table);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _EditControlSystemModal = __webpack_require__(906);

var _EditControlSystemModal2 = _interopRequireDefault(_EditControlSystemModal);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlSystemDetailTable = function (_Component) {
	_inherits(ControlSystemDetailTable, _Component);

	function ControlSystemDetailTable(props) {
		_classCallCheck(this, ControlSystemDetailTable);

		var _this = _possibleConstructorReturn(this, (ControlSystemDetailTable.__proto__ || Object.getPrototypeOf(ControlSystemDetailTable)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(ControlSystemDetailTable, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var columns = [{
				title: 'Control Systems',
				dataIndex: 'name',
				key: 'name'
			}, {
				title: 'Types',
				dataIndex: 'type',
				key: 'type'
			}, {
				title: 'Action',
				key: 'action',
				render: function render(text, record) {
					console.log('record', record);
					if (record.type == 'WISER' || record.type == 'NeroCloud') {
						return _react2.default.createElement(
							'span',
							null,
							_react2.default.createElement(
								_button2.default,
								{
									type: 'primary',
									icon: 'edit',
									onClick: function onClick() {
										var name = record.key || '';
										var type = record.type || '';
										var controlSystem = _this2.props.controlSystems.find(function (item) {
											return item.Name == name && item.ControlSystem == type;
										});
										_this2.props.editControlSystemModalShow(controlSystem, true);
									}
								},
								'Edit'
							),
							_react2.default.createElement(
								_button2.default,
								{
									type: 'primary',
									icon: 'upload'
								},
								'load Device'
							)
						);
					}
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_button2.default,
							{
								type: 'primary',
								icon: 'edit',
								onClick: function onClick() {
									var name = record.key || '';
									var type = record.type || '';

									var controlSystem = _this2.props.controlSystems.find(function (item) {
										return item.Name == name && item.ControlSystem == type;
									});
									console.log('control system:', controlSystem);
									_this2.props.editControlSystemModalShow(controlSystem, true);
								}
							},
							'Edit'
						)
					);
				}
			}];
			var controlSystems = this.props.controlSystems || [];
			controlSystems.sort();
			var dataSource = controlSystems.map(function (controlSystem) {
				return {
					key: controlSystem.Name,
					name: controlSystem.Name,
					type: controlSystem.ControlSystem
				};
			});
			var locale = {};
			if (dataSource.length == 0) {
				locale = {
					emptyText: 'No Data'
				};
			}
			var type = this.props.currentControlSystem.ControlSystem || '';
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_table2.default, {
					dataSource: dataSource,
					columns: columns,
					locale: locale
				}),
				_react2.default.createElement(_EditControlSystemModal2.default, { type: type })
			);
		}
	}]);

	return ControlSystemDetailTable;
}(_react.Component);

function mapStateToProps(state) {
	return {
		controlSystems: state.customer.customer.controlSystems,
		currentControlSystem: state.controlSystem.controlSystem
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ControlSystemDetailTable);

/***/ },

/***/ 896:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(818);

var _row = __webpack_require__(817);

var _row2 = _interopRequireDefault(_row);

var _css3 = __webpack_require__(793);

var _col = __webpack_require__(792);

var _col2 = _interopRequireDefault(_col);

var _css4 = __webpack_require__(344);

var _breadcrumb = __webpack_require__(343);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _css5 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css6 = __webpack_require__(85);

var _layout = __webpack_require__(84);

var _layout2 = _interopRequireDefault(_layout);

var _css7 = __webpack_require__(158);

var _menu = __webpack_require__(129);

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _reactRouter = __webpack_require__(48);

__webpack_require__(1100);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _CustomerSimpleInfo = __webpack_require__(897);

var _CustomerSimpleInfo2 = _interopRequireDefault(_CustomerSimpleInfo);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

var _RoomDetail = __webpack_require__(898);

var _RoomDetail2 = _interopRequireDefault(_RoomDetail);

var _ControlSystemDetail = __webpack_require__(894);

var _ControlSystemDetail2 = _interopRequireDefault(_ControlSystemDetail);

var _Sidebar = __webpack_require__(365);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;

var CustomerHome = function (_Component) {
	_inherits(CustomerHome, _Component);

	function CustomerHome() {
		_classCallCheck(this, CustomerHome);

		return _possibleConstructorReturn(this, (CustomerHome.__proto__ || Object.getPrototypeOf(CustomerHome)).apply(this, arguments));
	}

	_createClass(CustomerHome, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var jwtToken = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integratorEmail;
			var customerEmail = this.props.customerEmail;
			this.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
		}
	}, {
		key: 'render',
		value: function render() {
			var jwtToken = localStorage.getItem('jwtToken') || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var address = _lodash2.default.get(this.props.customer, 'address', '');
			var contactName = _lodash2.default.get(this.props.customer, 'contactName', '');
			var email = _lodash2.default.get(this.props.customer, 'email', '');
			console.log('customerEmail:', customerEmail);
			console.log('address:', address);
			console.log('contactName:', contactName);
			if (!jwtToken || !integratorEmail || !customerEmail) {
				_reactRouter.hashHistory.push('/');
			}
			if (this.props.loading) {
				console.log('loading:', this.props.loading);
				window.scrollTo(0, 0);
				return _react2.default.createElement(
					'div',
					{ className: 'customer-home-div' },
					_react2.default.createElement(_icon2.default, { type: 'loading', className: 'loading-icon' })
				);
			}
			if (this.props.errMessage) {
				return _react2.default.createElement(
					'div',
					{ className: 'customer-home-div' },
					_react2.default.createElement(
						'p',
						null,
						this.props.errMessage,
						' try again or contact us'
					)
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'customer-home-div' },
				_react2.default.createElement(
					_layout2.default,
					{ className: 'customer-home-layout' },
					_react2.default.createElement(_Sidebar2.default, null),
					_react2.default.createElement(
						_layout2.default,
						{ style: { padding: '0 24px 24px' } },
						_react2.default.createElement(
							_breadcrumb2.default,
							{ style: { margin: '12px 0' } },
							_react2.default.createElement(
								_breadcrumb2.default.Item,
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/integrator' },
									'Integrator'
								)
							),
							_react2.default.createElement(
								_breadcrumb2.default.Item,
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/integrator/customer' },
									'customer'
								)
							)
						),
						_react2.default.createElement(
							Content,
							{ style: { background: '#fff', padding: 24, margin: 0, minHeight: 800 } },
							_react2.default.createElement(_CustomerSimpleInfo2.default, {
								email: customerEmail,
								address: address,
								contactName: contactName
							}),
							_react2.default.createElement(
								_row2.default,
								null,
								_react2.default.createElement(
									_col2.default,
									{ xs: 24, sm: 24, md: 10, lg: 10, xl: 10 },
									_react2.default.createElement(_RoomDetail2.default, null)
								),
								_react2.default.createElement(
									_col2.default,
									{ xs: 24, sm: 24, md: 14, lg: 14, xl: 14 },
									_react2.default.createElement(_ControlSystemDetail2.default, null)
								)
							),
							_react2.default.createElement(
								_button2.default,
								{
									type: 'primary',
									onClick: function onClick() {
										return _reactRouter.hashHistory.push('/integrator');
									},
									className: 'customer-home-back-button'
								},
								'Back'
							)
						)
					)
				)
			);
		}
	}]);

	return CustomerHome;
}(_react.Component);

function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		loading: state.customer.loading,
		errMessage: state.customer.errMessage,
		customers: state.integrator.integrator.customers,
		rooms: state.customer.customer.rooms,
		customer: state.customer.customer

	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(CustomerHome);

/***/ },

/***/ 897:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerSimpleInfo = function (_Component) {
	_inherits(CustomerSimpleInfo, _Component);

	function CustomerSimpleInfo(props) {
		_classCallCheck(this, CustomerSimpleInfo);

		return _possibleConstructorReturn(this, (CustomerSimpleInfo.__proto__ || Object.getPrototypeOf(CustomerSimpleInfo)).call(this, props));
	}

	_createClass(CustomerSimpleInfo, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'customer-simple-info-div' },
				_react2.default.createElement(
					'p',
					{ className: 'customer-contact-name' },
					this.props.contactName
				),
				_react2.default.createElement(
					'div',
					{ className: 'customer-email' },
					_react2.default.createElement(_icon2.default, { type: 'mail' }),
					_react2.default.createElement(
						'p',
						null,
						this.props.email
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'customer-address' },
					_react2.default.createElement(_icon2.default, { type: 'environment-o' }),
					_react2.default.createElement(
						'p',
						null,
						this.props.address
					)
				)
			);
		}
	}]);

	return CustomerSimpleInfo;
}(_react.Component);

exports.default = CustomerSimpleInfo;

/***/ },

/***/ 898:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _RoomDetailTable = __webpack_require__(899);

var _RoomDetailTable2 = _interopRequireDefault(_RoomDetailTable);

__webpack_require__(1111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoomDetail = function (_Component) {
	_inherits(RoomDetail, _Component);

	function RoomDetail() {
		_classCallCheck(this, RoomDetail);

		return _possibleConstructorReturn(this, (RoomDetail.__proto__ || Object.getPrototypeOf(RoomDetail)).apply(this, arguments));
	}

	_createClass(RoomDetail, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'room-detail-div' },
				_react2.default.createElement(
					'p',
					{ className: 'room-detail-title' },
					'Room Details'
				),
				_react2.default.createElement(
					'div',
					{ className: 'room-detail-content' },
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary'
						},
						'Add'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary'
						},
						'Scenes'
					)
				),
				_react2.default.createElement(_RoomDetailTable2.default, null)
			);
		}
	}]);

	return RoomDetail;
}(_react.Component);

exports.default = RoomDetail;

/***/ },

/***/ 899:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(160);

var _table = __webpack_require__(159);

var _table2 = _interopRequireDefault(_table);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _reactRouter = __webpack_require__(48);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoomDetailTable = function (_Component) {
	_inherits(RoomDetailTable, _Component);

	function RoomDetailTable() {
		_classCallCheck(this, RoomDetailTable);

		return _possibleConstructorReturn(this, (RoomDetailTable.__proto__ || Object.getPrototypeOf(RoomDetailTable)).apply(this, arguments));
	}

	_createClass(RoomDetailTable, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var columns = [{
				title: 'Location',
				dataIndex: 'location',
				key: 'location'
			}, {
				title: 'Action',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_button2.default,
							{
								type: 'primary',
								icon: 'edit',
								onClick: function onClick() {
									var location = record.location.toLowerCase() || '';
									_this2.props.changeLocation(location);
									_reactRouter.hashHistory.push('/integrator/customer/device');
								}
							},
							'Edit'
						),
						_react2.default.createElement(
							_button2.default,
							{
								type: 'danger',
								icon: 'delete'
							},
							'Delete'
						)
					);
				}
			}];
			var dataSource = this.props.rooms.map(function (room) {
				return {
					key: room.RoomName,
					location: room.RoomName
				};
			});
			return _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns });
		}
	}]);

	return RoomDetailTable;
}(_react.Component);

function mapStateToProps(state) {
	return {
		rooms: state.customer.customer.rooms
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(RoomDetailTable);

/***/ },

/***/ 900:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(160);

var _table = __webpack_require__(159);

var _table2 = _interopRequireDefault(_table);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _reactRouter = __webpack_require__(48);

var _Parameters = __webpack_require__(902);

var _Parameters2 = _interopRequireDefault(_Parameters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceDetailTable = function (_Component) {
	_inherits(DeviceDetailTable, _Component);

	function DeviceDetailTable() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, DeviceDetailTable);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeviceDetailTable.__proto__ || Object.getPrototypeOf(DeviceDetailTable)).call.apply(_ref, [this].concat(args))), _this), _this.expandedRowRender = function (record) {
			console.log('record:', JSON.stringify(record));
			return _react2.default.createElement(_Parameters2.default, { params: record.parameters });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(DeviceDetailTable, [{
		key: 'render',
		value: function render() {
			var columns = [{
				title: 'Name',
				dataIndex: 'name',
				key: 'name'
			}, {
				title: 'Type',
				dataIndex: 'type',
				key: 'type'
			}, {
				title: 'Control System',
				dataIndex: 'controlSystem',
				key: 'controlSystem'
			}, {
				title: 'Action',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_button2.default,
							{
								type: 'primary',
								icon: 'edit'
							},
							'Edit'
						),
						_react2.default.createElement(
							_button2.default,
							{
								type: 'danger',
								icon: 'delete'
							},
							'Delete'
						)
					);
				}
			}];
			var dataSource = this.props.devices.map(function (device) {
				return {
					key: device.Name + device.Type,
					name: device.Name,
					type: device.Type,
					controlSystem: device.ControlSystems,
					parameters: JSON.stringify(device.Params)
				};
			});
			var locale = {};
			if (dataSource.length == 0) {
				locale = {
					emptyText: 'No Data'
				};
			}
			return _react2.default.createElement(_table2.default, {
				expandedRowRender: this.expandedRowRender,
				dataSource: dataSource,
				columns: columns,
				locale: locale
			});
		}
	}]);

	return DeviceDetailTable;
}(_react.Component);

function mapStateToProps(state) {
	return {
		devices: state.device.devices
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(DeviceDetailTable);

/***/ },

/***/ 901:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(344);

var _breadcrumb = __webpack_require__(343);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(85);

var _layout = __webpack_require__(84);

var _layout2 = _interopRequireDefault(_layout);

var _css5 = __webpack_require__(158);

var _menu = __webpack_require__(129);

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _reactRouter = __webpack_require__(48);

__webpack_require__(1102);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

var _Sidebar = __webpack_require__(365);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _DeviceDetailTable = __webpack_require__(900);

var _DeviceDetailTable2 = _interopRequireDefault(_DeviceDetailTable);

var _DeviceModal = __webpack_require__(881);

var _DeviceModal2 = _interopRequireDefault(_DeviceModal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;

var DeviceHome = function (_Component) {
	_inherits(DeviceHome, _Component);

	function DeviceHome() {
		_classCallCheck(this, DeviceHome);

		return _possibleConstructorReturn(this, (DeviceHome.__proto__ || Object.getPrototypeOf(DeviceHome)).apply(this, arguments));
	}

	_createClass(DeviceHome, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var jwtToken = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var location = this.props.location || '';
			this.props.fetchDevices(integratorEmail, customerEmail, location, jwtToken);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.props.loading) {
				console.log('loading:', this.props.loading);
				window.scrollTo(0, 0);
				return _react2.default.createElement(
					'div',
					{ className: 'device-home-div' },
					_react2.default.createElement(_icon2.default, { type: 'loading', className: 'loading-icon' })
				);
			}
			if (this.props.errMessage) {
				return _react2.default.createElement(
					'div',
					{ className: 'device-home-div' },
					_react2.default.createElement(
						'p',
						null,
						this.props.errMessage,
						' try again or contact us'
					)
				);
			}
			var location = this.props.location || '';
			return _react2.default.createElement(
				'div',
				{ className: 'device-home-div' },
				_react2.default.createElement(
					_layout2.default,
					{ className: 'device-home-layout' },
					_react2.default.createElement(_Sidebar2.default, null),
					_react2.default.createElement(
						_layout2.default,
						{ style: { padding: '0 24px 24px' } },
						_react2.default.createElement(
							_breadcrumb2.default,
							{ style: { margin: '12px 0' } },
							_react2.default.createElement(
								_breadcrumb2.default.Item,
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/integrator' },
									'Integrator'
								)
							),
							_react2.default.createElement(
								_breadcrumb2.default.Item,
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/integrator/customer' },
									'customer'
								)
							),
							_react2.default.createElement(
								_breadcrumb2.default.Item,
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/integrator/customer/device' },
									location
								)
							)
						),
						_react2.default.createElement(
							Content,
							{ style: { background: '#fff', padding: 24, margin: 0, minHeight: 800 } },
							_react2.default.createElement(
								'p',
								{ className: 'device-home-location-title' },
								location
							),
							_react2.default.createElement(
								'div',
								{ className: 'device-home-add' },
								_react2.default.createElement(
									_button2.default,
									{
										type: 'primary',
										className: 'device-home-add-button',
										onClick: function onClick() {
											return _this2.props.deviceModalShow(true);
										}
									},
									'Add'
								)
							),
							_react2.default.createElement(_DeviceModal2.default, null),
							_react2.default.createElement(_DeviceDetailTable2.default, null),
							_react2.default.createElement(
								_button2.default,
								{
									type: 'primary',
									onClick: function onClick() {
										return _reactRouter.hashHistory.push('/integrator/customer');
									},
									className: 'device-home-back-button'
								},
								'Back'
							)
						)
					)
				)
			);
		}
	}]);

	return DeviceHome;
}(_react.Component);

function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		location: state.authentication.location,
		loading: state.device.loading,
		errMessage: state.device.errMessage,
		devices: state.device.devices
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(DeviceHome);

/***/ },

/***/ 902:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parameters = function (_Component) {
	_inherits(Parameters, _Component);

	function Parameters(props) {
		_classCallCheck(this, Parameters);

		return _possibleConstructorReturn(this, (Parameters.__proto__ || Object.getPrototypeOf(Parameters)).call(this, props));
	}

	_createClass(Parameters, [{
		key: 'renderParameters',
		value: function renderParameters() {
			var params = JSON.parse(this.props.params) || {};
			console.log('parameters:', params);
			var data = [];
			for (var prop in params) {
				var key = prop;
				var value = params[prop].toString();
				console.log('key:', key);
				console.log('value:', value);
				if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
					for (var childProp in value) {
						var childkey = childProp;
						var childValue = value[childKey];
						data.push(_react2.default.createElement(
							'p',
							{ className: 'parameters-item', key: childKey },
							childKey,
							':',
							childValue
						));
					}
				} else {
					data.push(_react2.default.createElement(
						'p',
						{ className: 'parameters-item', key: key },
						key,
						':',
						value
					));
				}
			}
			return data;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'parameters-div' },
				_react2.default.createElement(
					'p',
					{ className: 'parameters-item', key: this.props.params },
					'Parameters:'
				),
				this.renderParameters()
			);
		}
	}]);

	return Parameters;
}(_react.Component);

exports.default = Parameters;

/***/ },

/***/ 903:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(128);

var _card = __webpack_require__(127);

var _card2 = _interopRequireDefault(_card);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css3 = __webpack_require__(784);

var _avatar = __webpack_require__(783);

var _avatar2 = _interopRequireDefault(_avatar);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(48);

__webpack_require__(1103);

var _amazonEchoBlack = __webpack_require__(1138);

var _amazonEchoBlack2 = _interopRequireDefault(_amazonEchoBlack);

var _remoteSetup = __webpack_require__(1146);

var _remoteSetup2 = _interopRequireDefault(_remoteSetup);

var _examplePhrase = __webpack_require__(1143);

var _examplePhrase2 = _interopRequireDefault(_examplePhrase);

var _cheatSheet = __webpack_require__(1140);

var _cheatSheet2 = _interopRequireDefault(_cheatSheet);

var _brochure = __webpack_require__(1139);

var _brochure2 = _interopRequireDefault(_brochure);

var _alexaApp = __webpack_require__(1137);

var _alexaApp2 = _interopRequireDefault(_alexaApp);

var _orderForm = __webpack_require__(1145);

var _orderForm2 = _interopRequireDefault(_orderForm);

var _location = __webpack_require__(1144);

var _location2 = _interopRequireDefault(_location);

var _essentialSkill = __webpack_require__(1142);

var _essentialSkill2 = _interopRequireDefault(_essentialSkill);

var _Amazon_Echo_setup = __webpack_require__(1148);

var _Amazon_Echo_setup2 = _interopRequireDefault(_Amazon_Echo_setup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadResource = function (_Component) {
	_inherits(DownloadResource, _Component);

	function DownloadResource() {
		_classCallCheck(this, DownloadResource);

		return _possibleConstructorReturn(this, (DownloadResource.__proto__ || Object.getPrototypeOf(DownloadResource)).apply(this, arguments));
	}

	_createClass(DownloadResource, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'download-resource-div' },
				_react2.default.createElement(
					'div',
					{ className: 'download-resource-content' },
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _amazonEchoBlack2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Echo Setup PDF'
						),
						_react2.default.createElement(
							'a',
							{ href: '', download: true },
							_react2.default.createElement(
								_button2.default,
								{ size: 'large', type: 'primary', icon: 'cloud-download' },
								'Download'
							)
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _remoteSetup2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Remote Access Setup PDF'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _examplePhrase2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Example Phrase PDF'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _cheatSheet2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Example Smart Voice Cheat Sheet PDF'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _brochure2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Brochure'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _alexaApp2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Alexa App(Android)'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _orderForm2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Smart Voice Order Form'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _location2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Default Location Setup PDF'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _cheatSheet2.default }),
						_react2.default.createElement(
							'p',
							null,
							'Example Smart Voice Cheat Sheet PUB(edited)'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					),
					_react2.default.createElement(
						_card2.default,
						{ className: 'download-resource-card' },
						_react2.default.createElement(_avatar2.default, { shape: 'square', size: 'large', src: _essentialSkill2.default }),
						_react2.default.createElement(
							'p',
							null,
							'How to: Smart Voice - Essentials PDF'
						),
						_react2.default.createElement(
							_button2.default,
							{ size: 'large', type: 'primary', icon: 'cloud-download' },
							'Download'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'download-resource-back-button' },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/integrator' },
						_react2.default.createElement(
							_button2.default,
							{ type: 'primary' },
							'Back'
						)
					)
				)
			);
		}
	}]);

	return DownloadResource;
}(_react.Component);

exports.default = DownloadResource;

/***/ },

/***/ 904:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var EditAirtopiaComponent = function (_Component) {
	_inherits(EditAirtopiaComponent, _Component);

	function EditAirtopiaComponent(props) {
		_classCallCheck(this, EditAirtopiaComponent);

		var _this = _possibleConstructorReturn(this, (EditAirtopiaComponent.__proto__ || Object.getPrototypeOf(EditAirtopiaComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(EditAirtopiaComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var type = this.props.type || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var controlSystemName = this.props.currentControlSystem.Name || '';
			this.props.form.validateFields(function (err, values) {
				var id = values.id || '';
				var owner = values.owner || '';
				var key = values.key || '';
				var name = values.name || '';
				var ip = "http://oauth.airtopia.com";
				var params = { id: id, owner: owner, key: key, ip: ip };
				if (!err) {
					var data = {
						controlSystem: type,
						name: name,
						params: params
					};
					console.log('data:', data);
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem?name=" + controlSystemName;
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.put(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.editControlSystemModalShow({ Name: '', ControlSystem: '', Params: {} }, false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var type = this.props.type || '';
			var name = '';
			var owner = '';
			var id = '';
			var key = '';
			if (type == this.props.currentControlSystem.ControlSystem) {
				name = this.props.currentControlSystem.Name;
				owner = this.props.currentControlSystem.Params.owner || '';
				id = this.props.currentControlSystem.Params.id || '';
				key = this.props.currentControlSystem.Params.key || '';
			}
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						initialValue: name,
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ID'
					},
					getFieldDecorator('id', {
						initialValue: id,
						rules: [{ required: true, message: 'Please input id!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'key' }),
						placeholder: 'Airtopia ID'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Owner'
					},
					getFieldDecorator('owner', {
						initialValue: owner,
						rules: [{ required: true, message: 'Please input onwer!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'key' }),
						placeholder: 'Airtopia Owner'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Key'
					},
					getFieldDecorator('key', {
						initialValue: key,
						rules: [{ required: true, message: 'Please input key!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'key' }),
						placeholder: 'Airtopia Key'
					}))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return EditAirtopiaComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(EditAirtopiaComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		controlSystems: state.customer.customer.controlSystems,
		currentControlSystem: state.controlSystem.controlSystem
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 905:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var EditControlSystemComponent = function (_Component) {
	_inherits(EditControlSystemComponent, _Component);

	function EditControlSystemComponent(props) {
		_classCallCheck(this, EditControlSystemComponent);

		var _this = _possibleConstructorReturn(this, (EditControlSystemComponent.__proto__ || Object.getPrototypeOf(EditControlSystemComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(EditControlSystemComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var type = this.props.type || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var controlSystemName = this.props.currentControlSystem.Name || '';
			this.props.form.validateFields(function (err, values) {
				var ip = values.ip || '';
				var port = values.port || '';
				var name = values.name || '';
				if (!err) {
					var data = {
						name: name,
						controlSystem: type,
						params: {
							IP: ip,
							PortNo: port
						}
					};
					console.log('data:', data);
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem?name=" + controlSystemName;
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.put(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.editControlSystemModalShow({ Name: '', ControlSystem: '', Params: {} }, false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var type = this.props.type || '';
			var name = '';
			var ip = '';
			var port = '';
			if (type == this.props.currentControlSystem.ControlSystem) {
				name = this.props.currentControlSystem.Name;
				ip = this.props.currentControlSystem.Params.IP || '';
				port = this.props.currentControlSystem.Params.PortNo || '';
			}
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						initialValue: name,
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'IP Address'
					},
					getFieldDecorator('ip', {
						initialValue: ip,
						rules: [{ required: true, message: 'Please input ip address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'IP Address'

					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Port No'
					},
					getFieldDecorator('port', {
						initialValue: port,
						rules: [{ required: true, message: 'Please input your password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'hdd' }),
						placeholder: 'Port No'
					}))
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return EditControlSystemComponent;
}(_react.Component);

var EditWrappedControlSystemComponent = _form2.default.create()(EditControlSystemComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		controlSystems: state.customer.customer.controlSystems,
		currentControlSystem: state.controlSystem.controlSystem
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(EditWrappedControlSystemComponent);

/***/ },

/***/ 906:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(131);

var _modal = __webpack_require__(130);

var _modal2 = _interopRequireDefault(_modal);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css3 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

__webpack_require__(407);

var _EditControlSystemComponent = __webpack_require__(905);

var _EditControlSystemComponent2 = _interopRequireDefault(_EditControlSystemComponent);

var _EditAirtopiaComponent = __webpack_require__(904);

var _EditAirtopiaComponent2 = _interopRequireDefault(_EditAirtopiaComponent);

var _EditWISERComponent = __webpack_require__(909);

var _EditWISERComponent2 = _interopRequireDefault(_EditWISERComponent);

var _EditNeroCloudComponent = __webpack_require__(908);

var _EditNeroCloudComponent2 = _interopRequireDefault(_EditNeroCloudComponent);

var _EditNACComponent = __webpack_require__(907);

var _EditNACComponent2 = _interopRequireDefault(_EditNACComponent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var EditControlSystemModal = function (_Component) {
	_inherits(EditControlSystemModal, _Component);

	function EditControlSystemModal(props) {
		_classCallCheck(this, EditControlSystemModal);

		var _this = _possibleConstructorReturn(this, (EditControlSystemModal.__proto__ || Object.getPrototypeOf(EditControlSystemModal)).call(this, props));

		_this.state = {
			type: '',
			controlSystemStyle: 'control-system-selection-button'
		};
		return _this;
	}

	_createClass(EditControlSystemModal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				type: nextProps.type,
				controlSystemStyle: 'hidden'
			});
		}
	}, {
		key: 'handleCancel',
		value: function handleCancel() {
			console.log('handleCancel...');
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var controlSystem = this.props.currentControlSystem;
			this.setState({
				type: '',
				controlSystemStyle: 'control-system-selection-button'
			});
			this.props.editControlSystemModalShow(controlSystem, false);
			this.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
		}
	}, {
		key: 'controlSystemOnChange',
		value: function controlSystemOnChange(value) {
			console.log(value);
			this.setState({
				type: value,
				controlSystemStyle: 'hidden'
			});
		}
	}, {
		key: 'renderControlSystemComponent',
		value: function renderControlSystemComponent() {
			var type = this.state.type || '';
			var editControlSystemComponent = null;
			switch (type) {
				case 'CBUS':
					editControlSystemComponent = _react2.default.createElement(_EditControlSystemComponent2.default, {
						handleCancel: this.handleCancel.bind(this),
						type: type
					});
					break;
				case 'PUSH':
					editControlSystemComponent = _react2.default.createElement(_EditControlSystemComponent2.default, {
						handleCancel: this.handleCancel.bind(this),
						type: type
					});
					break;
				case 'Airtopia':
					editControlSystemComponent = _react2.default.createElement(_EditAirtopiaComponent2.default, {
						handleCancel: this.handleCancel.bind(this),
						type: type
					});
					break;
				case 'WISER':
					editControlSystemComponent = _react2.default.createElement(_EditWISERComponent2.default, {
						handleCancel: this.handleCancel.bind(this),
						type: type
					});
					break;
				case 'NAC':
					editControlSystemComponent = _react2.default.createElement(_EditNACComponent2.default, {
						handleCancel: this.handleCancel.bind(this),
						type: type
					});
					break;
				case 'NeroCloud':
					editControlSystemComponent = _react2.default.createElement(_EditNeroCloudComponent2.default, {
						handleCancel: this.handleCancel.bind(this),
						type: type
					});
					break;
				default:
					break;
			}
			return editControlSystemComponent;
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('controlsystem:', this.state.controlSystem);
			var controlSystem = this.state.controlSystem || '';
			var name = this.state.name || '';
			return _react2.default.createElement(
				_modal2.default,
				{ title: 'Add Control System',
					visible: this.props.isOpen,
					onCancel: this.handleCancel.bind(this),
					footer: null
				},
				_react2.default.createElement(
					'label',
					null,
					'* If you change the control system name or type, you will have to re-associate the new devices with the new control system'
				),
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: 'ant-form-item-label' },
						_react2.default.createElement(
							'label',
							null,
							'Control System'
						)
					),
					_react2.default.createElement(
						_select2.default,
						{
							size: 'large',
							value: this.state.type,
							style: { width: '100%' },
							onChange: this.controlSystemOnChange.bind(this)
						},
						_react2.default.createElement(
							Option,
							{ value: 'CBUS' },
							'CBUS Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'PUSH' },
							'PUSH Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'Airtopia' },
							'Airtopia Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'WISER' },
							'WISER Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'NeroCloud' },
							'NeroCloud Systems'
						),
						_react2.default.createElement(
							Option,
							{ value: 'NAC' },
							'NAC Systems'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'ant-row ant-form-item' },
					_react2.default.createElement(
						'div',
						{ className: this.state.controlSystemStyle },
						_react2.default.createElement(
							_button2.default,
							{ type: 'primary' },
							'Submit'
						),
						_react2.default.createElement(
							_button2.default,
							{ type: 'default', onClick: this.handleCancel.bind(this) },
							'Cancel'
						)
					)
				),
				this.renderControlSystemComponent()
			);
		}
	}]);

	return EditControlSystemModal;
}(_react.Component);

function mapStateToProps(state) {
	return {
		isOpen: state.modalOpen.editControlSystemModal,
		currentControlSystem: state.controlSystem.controlSystem,
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(EditControlSystemModal);

/***/ },

/***/ 907:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var EditNACComponent = function (_Component) {
	_inherits(EditNACComponent, _Component);

	function EditNACComponent(props) {
		_classCallCheck(this, EditNACComponent);

		var _this = _possibleConstructorReturn(this, (EditNACComponent.__proto__ || Object.getPrototypeOf(EditNACComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(EditNACComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var type = this.props.type || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var controlSystemName = this.props.currentControlSystem.Name || '';
			this.props.form.validateFields(function (err, values) {
				var ip = values.ip || '';
				var port = values.port || '';
				var username = values.username || '';
				var password = values.password || '';
				var name = values.name || '';
				var params = {
					IP: ip,
					PortNo: port,
					Username: username,
					Password: password
				};
				if (!err) {
					var data = {
						controlSystem: type,
						name: name,
						params: params
					};
					console.log('data:', data);
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem?name=" + controlSystemName;
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.put(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.editControlSystemModalShow({ Name: '', ControlSystem: '', Params: {} }, false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var type = this.props.type || '';
			var name = '';
			var ip = '';
			var port = '';
			var username = '';
			var password = '';
			if (type == this.props.currentControlSystem.ControlSystem) {
				name = this.props.currentControlSystem.Name;
				ip = this.props.currentControlSystem.Params.IP || '';
				port = this.props.currentControlSystem.Params.PortNo || '';
				username = this.props.currentControlSystem.Params.Username || '';
				password = this.props.currentControlSystem.Params.Password || '';
			}
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						initialValue: name,
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'IP Address'
					},
					getFieldDecorator('ip', {
						initialValue: ip,
						rules: [{ required: true, message: 'Please input ip address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'IP Address'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Port No'
					},
					getFieldDecorator('port', {
						initialValue: port,
						rules: [{ required: true, message: 'Please input port no!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'hdd' }),
						placeholder: 'Port No'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Name'
					},
					getFieldDecorator('username', {
						initialValue: username,
						rules: [{ required: true, message: 'Please input username!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'User Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Password'
					},
					getFieldDecorator('password', {
						initialValue: password,
						rules: [{ required: true, message: 'Please input password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return EditNACComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(EditNACComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		controlSystems: state.customer.customer.controlSystems,
		currentControlSystem: state.controlSystem.controlSystem
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 908:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var EditNeroCloudComponent = function (_Component) {
	_inherits(EditNeroCloudComponent, _Component);

	function EditNeroCloudComponent(props) {
		_classCallCheck(this, EditNeroCloudComponent);

		var _this = _possibleConstructorReturn(this, (EditNeroCloudComponent.__proto__ || Object.getPrototypeOf(EditNeroCloudComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: '',
			continueButtonStyle: 'hidden',
			submitButtonStyle: 'add-control-system-button',
			deviceNumbers: [],
			deviceNumberStyle: 'hidden',
			neroParams: null
		};
		return _this;
	}

	_createClass(EditNeroCloudComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var type = this.props.type || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var neroParams = this.state.neroParams;
			var controlSystemName = this.props.currentControlSystem.Name || '';
			this.props.form.validateFields(function (err, values) {
				var name = values.name || '';
				var neroUserName = values.username || '';
				var MMSAuth = '';
				var MMSAuthSig = '';
				var NeroAccountNumber = '';
				var NeroDeviceNumber = '';
				var SHA1Key = '';
				var validTil = '';
				if (!neroParams) {
					MMSAuth = _this2.props.currentControlSystem.Params.MMSAuth || '';
					MMSAuthSig = _this2.props.currentControlSystem.Params.MMSAuthSig || '';
					NeroAccountNumber = _this2.props.currentControlSystem.Params.NeroAccountNumber || '';
					NeroDeviceNumber = _this2.props.currentControlSystem.Params.NeroDeviceNumber || '';
					SHA1Key = _this2.props.currentControlSystem.Params.SHA1Key || '';
					validTil = _this2.props.currentControlSystem.Params.validTil || '';
				} else {
					MMSAuth = _lodash2.default.get(neroParams, 'MMSAuth', '');
					MMSAuthSig = _lodash2.default.get(neroParams, 'MMSAuthSig', '');
					NeroAccountNumber = _lodash2.default.get(neroParams, 'accountNum', '');
					NeroDeviceNumber = values.deviceNumber || '';
					SHA1Key = _lodash2.default.get(neroParams, 'SHA1', '');
					validTil = _lodash2.default.get(neroParams, 'validTil', '');
				}
				var params = {
					MMSAuth: MMSAuth,
					MMSAuthSig: MMSAuthSig,
					NeroAccountNumber: NeroAccountNumber,
					NeroDeviceNumber: NeroDeviceNumber,
					neroUserName: neroUserName,
					SHA1Key: SHA1Key,
					validTil: validTil
				};
				if (!err) {
					var data = {
						controlSystem: type,
						name: name,
						params: params
					};
					console.log('data:', data);
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem?name=" + controlSystemName;
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.put(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.editControlSystemModalShow({ Name: '', ControlSystem: '', Params: {} }, false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'getDeviceNumber',
		value: function getDeviceNumber() {
			var _this3 = this;

			var jwtToken = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			this.props.form.validateFields(function (err, values) {
				if (!err) {
					console.log('username and password are valid');
					var username = values.username || '';
					var password = values.password || '';
					var url = 'https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/' + integratorEmail + '/customer/' + customerEmail + '/controlsystem/getdevicenumber?username=' + username + '&password=' + password;
					_this3.setState({
						loading: true
					});
					_axios2.default.get(url, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						var deviceNumbers = JSON.parse(response.data.data.devices).Devices || [];
						var neroParams = response.data.data.params || {};
						console.log('deviceNumbers:', deviceNumbers);
						_this3.setState({
							errMessage: '',
							loading: false,
							continueButtonStyle: 'hidden',
							submitButtonStyle: 'add-control-system-button',
							deviceNumbers: deviceNumbers,
							deviceNumberStyle: '',
							neroParams: neroParams
						});
					}).catch(function (err) {
						console.log('error:', err);
						_this3.setState({
							errMessage: 'get device number error,confirm username and password',
							loading: false
						});
					});
				}
			});
		}
	}, {
		key: 'renderDeviceNumberSelect',
		value: function renderDeviceNumberSelect() {
			var deviceNumbers = this.state.deviceNumbers || [];
			var getFieldDecorator = this.props.form.getFieldDecorator;

			if (deviceNumbers.length == 0) {
				return null;
			}
			var optionList = deviceNumbers.map(function (device) {
				return _react2.default.createElement(
					Option,
					{ key: device.PK_Device, value: device.PK_Device },
					'Device Number,',
					device.PK_Device
				);
			});
			return _react2.default.createElement(
				FormItem,
				{
					hasFeedback: true,
					label: 'Device Number',
					className: this.state.deviceNumberStyle
				},
				getFieldDecorator('deviceNumber', {
					rules: [{ required: true, message: 'Please select device number!' }]
				})(_react2.default.createElement(
					_select2.default,
					{
						size: 'large',
						style: { width: '100%' }
					},
					optionList
				))
			);
		}
	}, {
		key: 'onPasswordChange',
		value: function onPasswordChange(e) {
			this.setState({
				continueButtonStyle: 'add-control-system-button',
				submitButtonStyle: 'hidden'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue,
			    getFieldValue = _props$form.getFieldValue;

			var type = this.props.type || '';
			var name = '';
			var username = '';
			var password = '';
			if (type == this.props.currentControlSystem.ControlSystem) {
				name = this.props.currentControlSystem.Name;
				username = this.props.currentControlSystem.Params.neroUserName || '';
				password = 'fakepassword';
			}
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						initialValue: name,
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Name'
					},
					getFieldDecorator('username', {
						initialValue: username,
						rules: [{ required: true, message: 'Please input username!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'User Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Password'
					},
					getFieldDecorator('password', {
						initialValue: password,
						rules: [{ required: true, message: 'Please input password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						placeholder: 'Password',
						onChange: this.onPasswordChange.bind(this)
					}))
				),
				this.renderDeviceNumberSelect(),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							loading: this.state.loading,
							className: this.state.continueButtonStyle,
							onClick: this.getDeviceNumber.bind(this)
						},
						'Continue'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: this.state.submitButtonStyle
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: this.state.submitButtonStyle,
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return EditNeroCloudComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(EditNeroCloudComponent);

function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		controlSystems: state.customer.customer.controlSystems,
		currentControlSystem: state.controlSystem.controlSystem
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 909:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var EditWISERComponent = function (_Component) {
	_inherits(EditWISERComponent, _Component);

	function EditWISERComponent(props) {
		_classCallCheck(this, EditWISERComponent);

		var _this = _possibleConstructorReturn(this, (EditWISERComponent.__proto__ || Object.getPrototypeOf(EditWISERComponent)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}

	_createClass(EditWISERComponent, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var type = this.props.type || '';
			var name = this.props.name || '';
			var integratorEmail = this.props.integratorEmail || '';
			var customerEmail = this.props.customerEmail || '';
			var jwtToken = localStorage.getItem('jwtToken');
			var controlSystemName = this.props.currentControlSystem.Name || '';
			this.props.form.validateFields(function (err, values) {
				var ip = values.ip || '';
				var port = values.port || '';
				var username = values.username || '';
				var userpassword = values.password || '';
				var security = values.security || '';
				var name = values.name || '';
				var params = {
					IP: ip,
					PortNo: port,
					username: username,
					userpassword: userpassword,
					Security: security
				};
				if (!err) {
					var data = {
						controlSystem: type,
						name: name,
						params: params
					};
					console.log('data:', data);
					var url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/" + integratorEmail + "/customer/" + customerEmail + "/controlsystem?name=" + controlSystemName;
					console.log('data:', data);
					_this2.setState({
						loading: true,
						errMessage: ''
					});
					_axios2.default.put(url, data, {
						headers: { Authorization: jwtToken }
					}).then(function (response) {
						_this2.setState({
							loading: false,
							errMessage: ''
						});
						_this2.props.editControlSystemModalShow({ Name: '', ControlSystem: '', Params: {} }, false);
						_this2.props.fetchCustomerInfo(integratorEmail, customerEmail, jwtToken);
					}).catch(function (err) {
						var errMessage = _lodash2.default.get(err, 'response.data.errorMessage', '');
						var message = '';
						if (!errMessage) {
							message = 'internal error';
						} else {
							message = JSON.parse(errMessage).message || 'internal error';
						}
						_this2.setState({ loading: false, errMessage: message });
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched,
			    setFieldsValue = _props$form.setFieldsValue;

			var type = this.props.type || '';
			var name = '';
			var ip = '';
			var port = '';
			var security = '';
			var username = '';
			var userpassword = '';
			if (type == this.props.currentControlSystem.ControlSystem) {
				name = this.props.currentControlSystem.Name;
				ip = this.props.currentControlSystem.Params.IP || '';
				port = this.props.currentControlSystem.Params.PortNo || '';
				security = this.props.currentControlSystem.Params.Security || '';
				username = this.props.currentControlSystem.Params.username || '';
				userpassword = this.props.currentControlSystem.Params.userpassword || '';
			}
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'ControlSystem Name'
					},
					getFieldDecorator('name', {
						initialValue: name,
						rules: [{ required: true, message: 'Please input name!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'ControlSystem Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'IP Address'
					},
					getFieldDecorator('ip', {
						initialValue: ip,
						rules: [{ required: true, message: 'Please input ip address!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'home' }),
						placeholder: 'IP Address'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Port No'
					},
					getFieldDecorator('port', {
						initialValue: port,
						rules: [{ required: true, message: 'Please input port no!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'hdd' }),
						placeholder: 'Port No'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Name'
					},
					getFieldDecorator('username', {
						initialValue: username,
						rules: [{ required: true, message: 'Please input username!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'user' }),
						placeholder: 'User Name'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'User Password'
					},
					getFieldDecorator('password', {
						initialValue: userpassword,
						rules: [{ required: true, message: 'Please input password!' }]
					})(_react2.default.createElement(_input2.default, {
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock' }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{
						hasFeedback: true,
						label: 'Security'
					},
					getFieldDecorator('security', {
						initialValue: security,
						rules: [{ required: true, message: 'Please select security!' }]
					})(_react2.default.createElement(
						_select2.default,
						{
							size: 'large',
							style: { width: '100%' }
						},
						_react2.default.createElement(
							Option,
							{ value: 'SSL' },
							'SSL'
						),
						_react2.default.createElement(
							Option,
							{ value: 'TCP' },
							'TCP'
						)
					))
				),
				_react2.default.createElement(
					'p',
					{ className: 'control-system-error-message' },
					this.state.errMessage
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							loading: this.state.loading,
							className: 'add-control-system-button'
						},
						'Submit'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'default',
							className: 'add-control-system-button',
							onClick: this.props.handleCancel
						},
						'Cancel'
					)
				)
			);
		}
	}]);

	return EditWISERComponent;
}(_react.Component);

var WrappedControlSystemComponent = _form2.default.create()(EditWISERComponent);
function mapStateToProps(state) {
	return {
		customerEmail: state.authentication.customer,
		integratorEmail: state.authentication.integrator,
		controlSystems: state.customer.customer.controlSystems,
		currentControlSystem: state.controlSystem.controlSystem
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedControlSystemComponent);

/***/ },

/***/ 910:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(85);

var _layout = __webpack_require__(84);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSocialIcons = __webpack_require__(315);

__webpack_require__(1112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = _layout2.default.Footer;

var SmartVoiceFooter = function (_Component) {
	_inherits(SmartVoiceFooter, _Component);

	function SmartVoiceFooter() {
		_classCallCheck(this, SmartVoiceFooter);

		return _possibleConstructorReturn(this, (SmartVoiceFooter.__proto__ || Object.getPrototypeOf(SmartVoiceFooter)).apply(this, arguments));
	}

	_createClass(SmartVoiceFooter, [{
		key: 'render',
		value: function render() {
			var urls = ['https://linkedin.com/in/', 'https://facebook.com', 'https://youtube.com', 'http://twitter.com'];
			return _react2.default.createElement(
				Footer,
				{
					className: 'smartvoice-footer'
				},
				_react2.default.createElement(_reactSocialIcons.SocialIcons, { urls: urls }),
				_react2.default.createElement(
					'p',
					null,
					'Smart Voice \xA92017 Created by Smart Automation Systems'
				)
			);
		}
	}]);

	return SmartVoiceFooter;
}(_react.Component);

exports.default = SmartVoiceFooter;

/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(158);

var _menu = __webpack_require__(129);

var _menu2 = _interopRequireDefault(_menu);

var _css2 = __webpack_require__(85);

var _layout = __webpack_require__(84);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBurgerMenu = __webpack_require__(314);

var _reactRouter = __webpack_require__(48);

__webpack_require__(1113);

var _smartvoiceLogo = __webpack_require__(1147);

var _smartvoiceLogo2 = _interopRequireDefault(_smartvoiceLogo);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header;

var SmartVoiceHeader = function (_Component) {
  _inherits(SmartVoiceHeader, _Component);

  function SmartVoiceHeader() {
    _classCallCheck(this, SmartVoiceHeader);

    return _possibleConstructorReturn(this, (SmartVoiceHeader.__proto__ || Object.getPrototypeOf(SmartVoiceHeader)).apply(this, arguments));
  }

  _createClass(SmartVoiceHeader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.state = {
        isOpen: false
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      console.log('click me');
    }
  }, {
    key: 'handleLogout',
    value: function handleLogout(e) {
      e.preventDefault();
      this.props.integratorLogout();
    }
  }, {
    key: 'render',
    value: function render() {
      var authenticated = this.props.authenticated || false;
      console.log('authenticated:', authenticated);
      if (authenticated) {
        return _react2.default.createElement(
          Header,
          { className: 'smartvoice-header' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            _react2.default.createElement('img', { className: 'logo', src: _smartvoiceLogo2.default })
          ),
          _react2.default.createElement(
            _menu2.default,
            {
              theme: 'light',
              mode: 'horizontal',
              style: { lineHeight: '96px' },
              className: 'header-nav'
            },
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '1' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/integrator/resource' },
                'Resources'
              )
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '2' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/integrator/updateProfile' },
                'Update Porfile'
              )
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '3' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '#', onClick: this.handleLogout.bind(this) },
                'Logout'
              )
            )
          ),
          _react2.default.createElement(
            _reactBurgerMenu.slide,
            { right: true },
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/resource' },
              'Resource'
            ),
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/updateProfile' },
              'Update Porfile'
            ),
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/logout' },
              'Logout'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          Header,
          { className: 'smartvoice-header' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            _react2.default.createElement('img', { className: 'logo', src: _smartvoiceLogo2.default })
          ),
          _react2.default.createElement(
            _menu2.default,
            {
              theme: 'light',
              mode: 'horizontal',
              style: { lineHeight: '96px' },
              className: 'header-nav'
            },
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '1' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/getOurBrochure' },
                'Get Our Brochure'
              )
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '2' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/registerInterest' },
                'Register Interest'
              )
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '3' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/approvedIntegrators' },
                'Approved Integrators'
              )
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '4' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/contact' },
                'Contact'
              )
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '5' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/login' },
                'Portal Login'
              )
            )
          ),
          _react2.default.createElement(
            _reactBurgerMenu.slide,
            { right: true },
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/' },
              'Get Our Brochure'
            ),
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/registerInterest' },
              'Register Interest'
            ),
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/approvedIntegrators' },
              'Approved Integrators'
            ),
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/contact' },
              'Contact'
            ),
            _react2.default.createElement(
              'a',
              { className: 'menu-item', href: '/login' },
              'Portal Login'
            )
          )
        );
      }
    }
  }]);

  return SmartVoiceHeader;
}(_react.Component);

;
function mapStateToProps(state) {
  console.log('authentication state:', state);
  return { authenticated: state.authentication.authenticated };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(SmartVoiceHeader);

/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(131);

var _modal = __webpack_require__(130);

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _AddCustomerForm = __webpack_require__(210);

var _AddCustomerForm2 = _interopRequireDefault(_AddCustomerForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCustomerModal = function (_Component) {
	_inherits(AddCustomerModal, _Component);

	function AddCustomerModal(props) {
		_classCallCheck(this, AddCustomerModal);

		return _possibleConstructorReturn(this, (AddCustomerModal.__proto__ || Object.getPrototypeOf(AddCustomerModal)).call(this, props));
	}
	/*handleOk(){
 	const jwt = localStorage.getItem('jwtToken');
 	const integrator = this.props.integrator;
 	this.setState({
       confirmLoading: true,
     });
     setTimeout(() => {
       this.setState({
         confirmLoading: false,
       });
       this.props.customerAddModalShow(false);
     }, 2000);
 }*/


	_createClass(AddCustomerModal, [{
		key: 'handleCancel',
		value: function handleCancel() {
			var jwt = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integrator.email;
			this.props.customerAddModalShow(false);
			this.props.fetchIntegratorInfo(integratorEmail, jwt);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_modal2.default,
				{ title: 'Add New Customer',
					visible: this.props.isOpen,
					onCancel: this.handleCancel.bind(this),
					footer: null
				},
				_react2.default.createElement(_AddCustomerForm2.default, null)
			);
		}
	}]);

	return AddCustomerModal;
}(_react.Component);

function mapStateToProps(state) {
	console.log('state:', state);
	return {
		isOpen: state.modalOpen.addCustomerModal,
		integrator: state.integrator.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(AddCustomerModal);

/***/ },

/***/ 913:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(131);

var _modal = __webpack_require__(130);

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(37);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerDeleteModal = function (_Component) {
	_inherits(CustomerDeleteModal, _Component);

	function CustomerDeleteModal(props) {
		_classCallCheck(this, CustomerDeleteModal);

		var _this = _possibleConstructorReturn(this, (CustomerDeleteModal.__proto__ || Object.getPrototypeOf(CustomerDeleteModal)).call(this, props));

		_this.state = {
			confirmLoading: false
		};
		return _this;
	}

	_createClass(CustomerDeleteModal, [{
		key: 'handleOk',
		value: function handleOk() {
			var _this2 = this;

			var jwt = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integrator.email;
			var customerEmail = this.props.customer || '';
			this.setState({
				confirmLoading: true
			});
			var url = 'https://h2gf88qrka.execute-api.us-east-1.amazonaws.com/v1/integrator/' + integratorEmail + '/customer/' + customerEmail;
			_axios2.default.delete(url, {
				headers: { Authorization: jwt }
			}).then(function (response) {
				_this2.props.customerDeleteModalShow(false);
				_this2.props.fetchIntegratorInfo(integratorEmail, jwt);
			}).catch(function (err) {
				console.log('error:', JSON.stringify(err));
				_this2.setState({ loading: false, errMessage: message });
			});
		}
	}, {
		key: 'handleCancel',
		value: function handleCancel() {
			this.props.customerDeleteModalShow(false);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_modal2.default,
				{ title: 'Customer Delete',
					okText: 'Confirm',
					cancelText: 'Cancel',
					visible: this.props.isOpen,
					onOk: this.handleOk.bind(this),
					confirmLoading: this.state.confirmLoading,
					onCancel: this.handleCancel.bind(this)
				},
				_react2.default.createElement(
					'p',
					null,
					'Do you confirm to delete customer ',
					this.props.customer
				)
			);
		}
	}]);

	return CustomerDeleteModal;
}(_react.Component);

function mapStateToProps(state) {
	return {
		isOpen: state.modalOpen.customerDeleteModal,
		integrator: state.integrator.integrator
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(CustomerDeleteModal);

/***/ },

/***/ 914:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(160);

var _table = __webpack_require__(159);

var _table2 = _interopRequireDefault(_table);

var _css2 = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CustomerDeleteModal = __webpack_require__(913);

var _CustomerDeleteModal2 = _interopRequireDefault(_CustomerDeleteModal);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _reactRouter = __webpack_require__(48);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomersTable = function (_Component) {
	_inherits(CustomersTable, _Component);

	function CustomersTable(props) {
		_classCallCheck(this, CustomersTable);

		var _this = _possibleConstructorReturn(this, (CustomersTable.__proto__ || Object.getPrototypeOf(CustomersTable)).call(this, props));

		_this.state = {
			deleteModalVisible: false,
			customerEmail: ''
		};
		var handleEdit = _this.handleEdit.bind(_this);
		var handleDelete = _this.handleDelete.bind(_this);
		return _this;
	}

	_createClass(CustomersTable, [{
		key: 'handleEdit',
		value: function handleEdit() {}
	}, {
		key: 'handleDelete',
		value: function handleDelete(e) {
			console.log('e target:', e.target);
			console.log('value:', e.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var columns = [{
				title: 'Name',
				dataIndex: 'name',
				key: 'name'
			}, {
				title: 'Address',
				dataIndex: 'address',
				key: 'address'
			}, {
				title: 'Email',
				dataIndex: 'email',
				key: 'email'
			}, {
				title: 'Action',
				key: 'action',
				render: function render(text, record) {
					return _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(
							_button2.default,
							{
								type: 'primary',
								onClick: function onClick() {
									_this2.props.changeCustomer(record.email);
									_reactRouter.hashHistory.push('/integrator/customer');
								},
								icon: 'edit'
							},
							'Edit'
						),
						_react2.default.createElement(
							_button2.default,
							{
								type: 'danger',
								onClick: function onClick() {
									_this2.setState({
										customerEmail: record.email
									});
									_this2.props.customerDeleteModalShow(true);
								},
								icon: 'delete'
							},
							'Delete'
						)
					);
				}
			}];
			var customers = this.props.customers;
			customers.sort(function (a, b) {
				if (a.contactName.toLowerCase() < b.contactName.toLowerCase()) return -1;
				if (a.contactName.toLowerCase() > b.contactName.toLowerCase()) return 1;
				return 0;
			});
			console.log('sorted customers:', customers);
			var dataSource = customers.map(function (customer) {
				return {
					key: customer.Email,
					name: customer.contactName,
					address: customer.address,
					email: customer.Email
				};
			});
			var _state = this.state,
			    deleteModalVisible = _state.deleteModalVisible,
			    customerEmail = _state.customerEmail;

			return _react2.default.createElement(
				'div',
				{ className: 'integrator-home-table-div' },
				_react2.default.createElement(_CustomerDeleteModal2.default, {
					customer: customerEmail
				}),
				_react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns })
			);
		}
	}]);

	return CustomersTable;
}(_react.Component);

function mapStateToProps(state) {
	return _extends({}, state);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(CustomersTable);

/***/ },

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _reactRouter = __webpack_require__(48);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _CustomersTable = __webpack_require__(914);

var _CustomersTable2 = _interopRequireDefault(_CustomersTable);

__webpack_require__(1104);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

var _AddCustomerModal = __webpack_require__(912);

var _AddCustomerModal2 = _interopRequireDefault(_AddCustomerModal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegratorHome = function (_Component) {
	_inherits(IntegratorHome, _Component);

	function IntegratorHome() {
		_classCallCheck(this, IntegratorHome);

		return _possibleConstructorReturn(this, (IntegratorHome.__proto__ || Object.getPrototypeOf(IntegratorHome)).apply(this, arguments));
	}

	_createClass(IntegratorHome, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('component did mount');
			var jwtToken = localStorage.getItem('jwtToken');
			var integratorEmail = this.props.integratorEmail;
			console.log('integratorEmail:', integratorEmail);
			this.props.fetchIntegratorInfo(integratorEmail, jwtToken);
		}
	}, {
		key: 'handleNewCustomer',
		value: function handleNewCustomer() {
			console.log('handle new customer');
			this.props.customerAddModalShow(true);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			window.scrollTo(0, 0);
			var integratorEmail = this.props.integratorEmail || '';
			console.log('render integrator:', integratorEmail);
			var jwtToken = localStorage.getItem('jwtToken') || '';
			if (!jwtToken || !integratorEmail) {
				_reactRouter.hashHistory.push('/');
			}
			if (this.props.loading) {
				return _react2.default.createElement(
					'div',
					{ className: 'integrator-home-div' },
					_react2.default.createElement(
						'p',
						{ className: 'integrator-home-title' },
						'Integrator'
					),
					_react2.default.createElement(
						'div',
						{ className: 'integrator-contact' },
						_react2.default.createElement(_icon2.default, { style: { fontSize: 16 }, type: 'mail' }),
						_react2.default.createElement(
							'p',
							{ style: { fontSize: 16, marginLeft: '10px' } },
							integratorEmail
						)
					),
					_react2.default.createElement(_icon2.default, { type: 'loading', className: 'loading-icon' })
				);
			}
			if (this.props.errMessage) {
				return _react2.default.createElement(
					'div',
					{ className: 'integrator-home-div' },
					_react2.default.createElement(
						'p',
						{ className: 'integrator-home-title' },
						'Integrator'
					),
					_react2.default.createElement(
						'div',
						{ className: 'integrator-contact' },
						_react2.default.createElement(_icon2.default, { style: { fontSize: 16 }, type: 'mail' }),
						_react2.default.createElement(
							'p',
							{ style: { fontSize: 16, marginLeft: '10px' } },
							integratorEmail
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'integrator-home-error-message' },
						_react2.default.createElement(
							'p',
							null,
							this.props.errMessage,
							' try again or contact us'
						),
						_react2.default.createElement(
							_button2.default,
							{
								type: 'primary',
								onClick: function onClick() {
									_this2.props.fetchIntegratorInfo(integratorEmail, jwtToken);
								}
							},
							'Try again'
						)
					)
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'integrator-home-div' },
				_react2.default.createElement(
					'p',
					{ className: 'integrator-home-title' },
					'Integrator'
				),
				_react2.default.createElement(
					'div',
					{ className: 'integrator-contact' },
					_react2.default.createElement(_icon2.default, { style: { fontSize: 16 }, type: 'mail' }),
					_react2.default.createElement(
						'p',
						{ style: { fontSize: 16, marginLeft: '10px' } },
						integratorEmail
					)
				),
				_react2.default.createElement(_AddCustomerModal2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'integrator-home-add-customer' },
					_react2.default.createElement(
						'p',
						null,
						'Customers'
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							className: 'add-customer-button',
							icon: 'plus',
							onClick: this.handleNewCustomer.bind(this)
						},
						'Add Customer'
					)
				),
				_react2.default.createElement(_CustomersTable2.default, { customers: this.props.customers })
			);
		}
	}]);

	return IntegratorHome;
}(_react.Component);

function mapStateToProps(state) {
	return {
		integrator: state.integrator.integrator,
		loading: state.integrator.loading,
		errMessage: state.integrator.errMessage,
		integratorEmail: state.authentication.integrator,
		customers: state.integrator.integrator.customers
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(IntegratorHome);

/***/ },

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(833);

var _tabs = __webpack_require__(832);

var _tabs2 = _interopRequireDefault(_tabs);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1107);

var _LoginForm = __webpack_require__(917);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _SignupForm = __webpack_require__(918);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _tabs2.default.TabPane;

var Login = function (_Component) {
	_inherits(Login, _Component);

	function Login() {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'login-div' },
				_react2.default.createElement(
					_tabs2.default,
					{
						className: 'tab-container'
					},
					_react2.default.createElement(
						TabPane,
						{ tab: 'Log in', key: '1' },
						_react2.default.createElement(_LoginForm2.default, null)
					),
					_react2.default.createElement(
						TabPane,
						{ tab: 'Sign up', key: '2' },
						_react2.default.createElement(_SignupForm2.default, null)
					)
				)
			);
		}
	}]);

	return Login;
}(_react.Component);

exports.default = Login;

/***/ },

/***/ 917:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(157);

var _checkbox = __webpack_require__(104);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _css3 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css4 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css5 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(408);

var _reactRouter = __webpack_require__(48);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

/*function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}*/

var LoginForm = function (_Component) {
	_inherits(LoginForm, _Component);

	function LoginForm(props) {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

		_this.state = {
			loading: false,
			errMessage: ''
		};
		return _this;
	}
	/*componentDidMount() {
    	this.props.form.validateFields();
  	}*/


	_createClass(LoginForm, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			//this.setState({loading:true});
			this.props.form.validateFields(function (err, values) {
				if (!err) {
					_this2.props.signinUser(values);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched;
			//const userNameError = isFieldTouched('userName') && getFieldError('userName');
			//const passwordError = isFieldTouched('password') && getFieldError('password');

			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this), className: 'login-form' },
				_react2.default.createElement(
					FormItem,
					{ hasFeedback: true },
					getFieldDecorator('email', {
						rules: [{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your email!' }]
					})(_react2.default.createElement(_input2.default, {
						className: 'login-form-input-mail',
						prefix: _react2.default.createElement(_icon2.default, { type: 'mail', style: { fontSize: 20 } }),
						placeholder: 'Email'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{ hasFeedback: true },
					getFieldDecorator('password', {
						rules: [{ min: 6, message: 'Password min length is 6' }, { pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/, message: 'Password should contains upper case, lower case and number' }]
					})(_react2.default.createElement(_input2.default, {
						className: 'login-form-input-password',
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { fontSize: 20 } }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					FormItem,
					null,
					getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true
					})(_react2.default.createElement(
						_checkbox2.default,
						null,
						'Remember me'
					)),
					_react2.default.createElement(
						_reactRouter.Link,
						{ className: 'login-form-forgot', to: '/forgetPassword' },
						'Forgot password'
					),
					_react2.default.createElement(
						'p',
						{ className: 'login-form-err-message' },
						this.props.authentication.error
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							className: 'login-form-button',
							loading: this.props.authentication.loading
						},
						'Log in'
					)
				)
			);
		}
	}]);

	return LoginForm;
}(_react.Component);

var WrappedLoginForm = _form2.default.create()(LoginForm);
function mapStateToProps(state) {
	return { authentication: state.authentication };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedLoginForm);

/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(157);

var _checkbox = __webpack_require__(104);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _css3 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css4 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css5 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(408);

var _reactRouter = __webpack_require__(48);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(function (field) {
		return fieldsError[field];
	});
}

var SignupForm = function (_Component) {
	_inherits(SignupForm, _Component);

	function SignupForm() {
		_classCallCheck(this, SignupForm);

		return _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).apply(this, arguments));
	}

	_createClass(SignupForm, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.state = {
				loading: false,
				errMessage: ''
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.form.validateFields();
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			this.setState({ loading: true });
			this.props.form.validateFields(function (err, values) {
				if (!err) {
					var username = values.email || '';
					var password = values.password || '';
					var rememberme = values.rememberme || false;
					console.log('values:', JSON.stringify(values));
					var url = "https://2y7j7iy0cf.execute-api.us-east-1.amazonaws.com/v1/integrator/signin";
					_axios2.default.post(url, { username: username, password: password, rememberme: rememberme }).then(function (response) {
						_this2.setState({ loading: false, errMessage: '' });
						console.log('response:', JSON.stringify(response));
						var jwt = response.data.jwtToken || '';
						localStorage.setItem('jwtToken', jwt);
						_this2.props.authenticate(true, username);
						console.log('state:', _this2.props);
					}).catch(function (err) {
						_this2.setState({ loading: false });
						_this2.setState({ errMessage: err.response.data.message });
					});
				}
			});
		}
	}, {
		key: 'checkPassword',
		value: function checkPassword(rule, value, callback) {
			var form = this.props.form;
			if (value && value !== form.getFieldValue('password')) {
				callback('Two passwords that you enter is inconsistent!');
			} else {
				callback();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$form = this.props.form,
			    getFieldDecorator = _props$form.getFieldDecorator,
			    getFieldsError = _props$form.getFieldsError,
			    getFieldError = _props$form.getFieldError,
			    isFieldTouched = _props$form.isFieldTouched;

			var userNameError = isFieldTouched('userName') && getFieldError('userName');
			var passwordError = isFieldTouched('password') && getFieldError('password');
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this), className: 'login-form' },
				_react2.default.createElement(
					FormItem,
					{ hasFeedback: true },
					getFieldDecorator('email', {
						rules: [{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your email!' }]
					})(_react2.default.createElement(_input2.default, {
						className: 'login-form-input-mail',
						prefix: _react2.default.createElement(_icon2.default, { type: 'mail', style: { fontSize: 20 } }),
						placeholder: 'Email'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{ hasFeedback: true },
					getFieldDecorator('password', {
						rules: [{ min: 6, message: 'Password min length is 6' }, { pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/, message: 'Password should contains upper case, lower case and number' }]
					})(_react2.default.createElement(_input2.default, {
						className: 'login-form-input-password',
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { fontSize: 20 } }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{ hasFeedback: true },
					getFieldDecorator('confirmPassword', {
						rules: [{
							required: true, message: 'Please confirm your password!'
						}, {
							validator: this.checkPassword.bind(this)
						}]
					})(_react2.default.createElement(_input2.default, {
						className: 'login-form-input-password',
						prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { fontSize: 20 } }),
						type: 'password',
						placeholder: 'Password'
					}))
				),
				_react2.default.createElement(
					FormItem,
					{ hasFeedback: true },
					getFieldDecorator('invitationKey', {
						rules: [{ required: true, message: 'Please input your invitation key!' }]
					})(_react2.default.createElement(_input2.default, {
						className: 'login-form-input-mail',
						prefix: _react2.default.createElement(_icon2.default, { type: 'key', style: { fontSize: 20 } }),
						placeholder: 'Invitation Key'
					}))
				),
				_react2.default.createElement(
					FormItem,
					null,
					getFieldDecorator('telstraCustomer', {
						valuePropName: 'checked',
						initialValue: false
					})(_react2.default.createElement(
						_checkbox2.default,
						null,
						'Telstra Customer'
					)),
					_react2.default.createElement(
						'p',
						{ className: 'login-form-err-message' },
						this.state.errMessage
					),
					_react2.default.createElement(
						_button2.default,
						{
							type: 'primary',
							htmlType: 'submit',
							className: 'login-form-button',
							loading: this.state.loading
						},
						'Sign Up'
					)
				)
			);
		}
	}]);

	return SignupForm;
}(_react.Component);

var WrappedSignupForm = _form2.default.create()(SignupForm);
function mapStateToProps(state) {
	return { authenticated: state.authenticated, integrator: state.integrator };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(WrappedSignupForm);

/***/ },

/***/ 919:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Introduction = function (_Component) {
	_inherits(Introduction, _Component);

	function Introduction() {
		_classCallCheck(this, Introduction);

		return _possibleConstructorReturn(this, (Introduction.__proto__ || Object.getPrototypeOf(Introduction)).apply(this, arguments));
	}

	_createClass(Introduction, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'introduction-div' },
				_react2.default.createElement(
					'h1',
					null,
					'What is Smart Voice?'
				),
				_react2.default.createElement(
					'p',
					{ className: 'animation', 'data-animation': 'zoomIn' },
					'Until now smart home control has always required contact with a physical device, be it a switch, app or remote. Smart Voice finally removes this need enabling control in the most natural, intuitive and convenient way, via Voice. Providing voice control for a range of home automation systems, Smart Voice changes any smart home into the home of the future, using an always listening smart speaker. With simple and adaptable commands, Smart Voice can operate virtually any device, system or appliance.'
				)
			);
		}
	}]);

	return Introduction;
}(_react.Component);

exports.default = Introduction;

/***/ },

/***/ 920:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(790);

var _carousel = __webpack_require__(789);

var _carousel2 = _interopRequireDefault(_carousel);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPicture = function (_Component) {
	_inherits(LandingPicture, _Component);

	function LandingPicture() {
		_classCallCheck(this, LandingPicture);

		return _possibleConstructorReturn(this, (LandingPicture.__proto__ || Object.getPrototypeOf(LandingPicture)).apply(this, arguments));
	}

	_createClass(LandingPicture, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_carousel2.default,
				{
					autoplay: true
				},
				_react2.default.createElement('div', { className: 'landing-picture-1' }),
				_react2.default.createElement('div', { className: 'landing-picture-2' }),
				_react2.default.createElement('div', { className: 'landing-picture-3' }),
				_react2.default.createElement('div', { className: 'landing-picture-4' })
			);
		}
	}]);

	return LandingPicture;
}(_react.Component);

exports.default = LandingPicture;

/***/ },

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(85);

var _layout = __webpack_require__(84);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1108);

var _LandingPicture = __webpack_require__(920);

var _LandingPicture2 = _interopRequireDefault(_LandingPicture);

var _Introduction = __webpack_require__(919);

var _Introduction2 = _interopRequireDefault(_Introduction);

var _WorkFLow = __webpack_require__(922);

var _WorkFLow2 = _interopRequireDefault(_WorkFLow);

var _reactModalVideo = __webpack_require__(1570);

var _reactModalVideo2 = _interopRequireDefault(_reactModalVideo);

__webpack_require__(1109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _layout2.default.Content;

var Main = function (_Component) {
	_inherits(Main, _Component);

	function Main() {
		_classCallCheck(this, Main);

		return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	}

	_createClass(Main, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.state = {
				isOpen: false
			};
		}
	}, {
		key: 'handleVideo',
		value: function handleVideo() {
			this.setState({
				isOpen: true
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				Content,
				null,
				_react2.default.createElement(_reactModalVideo2.default, { channel: 'youtube', isOpen: this.state.isOpen, videoId: 'IDgf-qXlNvM', onClose: function onClose() {
						return _this2.setState({ isOpen: false });
					} }),
				_react2.default.createElement(_LandingPicture2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'carousel-reminder-div' },
					_react2.default.createElement(
						'p',
						{ className: 'landing-picture-lg-title' },
						'VOICE THE NEXT GENERATION OF CONTROL'
					),
					_react2.default.createElement(
						'p',
						{ className: 'landing-picture-sm-title' },
						'Your Home&Electronics, under your Command'
					),
					_react2.default.createElement(
						_button2.default,
						{ onClick: this.handleVideo.bind(this), icon: 'play-circle', className: 'watch-video-button', type: 'primary' },
						'Watch Video'
					)
				),
				_react2.default.createElement(_Introduction2.default, null),
				_react2.default.createElement(_WorkFLow2.default, null)
			);
		}
	}]);

	return Main;
}(_react.Component);

exports.default = Main;

/***/ },

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(837);

var _timeline = __webpack_require__(836);

var _timeline2 = _interopRequireDefault(_timeline);

var _css2 = __webpack_require__(128);

var _card = __webpack_require__(127);

var _card2 = _interopRequireDefault(_card);

var _css3 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1114);

var _diagram = __webpack_require__(1141);

var _diagram2 = _interopRequireDefault(_diagram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkFlow = function (_Component) {
  _inherits(WorkFlow, _Component);

  function WorkFlow() {
    _classCallCheck(this, WorkFlow);

    return _possibleConstructorReturn(this, (WorkFlow.__proto__ || Object.getPrototypeOf(WorkFlow)).apply(this, arguments));
  }

  _createClass(WorkFlow, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'work-flow-div' },
        _react2.default.createElement(
          'h1',
          null,
          'How it Works'
        ),
        _react2.default.createElement(
          _timeline2.default,
          {
            className: 'time-line'
          },
          _react2.default.createElement(
            _timeline2.default.Item,
            {
              className: 'time-line-item',
              dot: _react2.default.createElement(_icon2.default, { type: 'message', style: { fontSize: '32px' } })
            },
            _react2.default.createElement(
              _card2.default,
              {
                title: 'Speack a Single Phrase',
                className: 'time-line-card animation',
                'data-animation': 'fadeInRight'
              },
              _react2.default.createElement(
                'p',
                null,
                'Smart Voice connects with a range of automation systems, providing voice control of almost any device within your smart home.'
              )
            )
          ),
          _react2.default.createElement(
            _timeline2.default.Item,
            {
              className: 'time-line-item',
              dot: _react2.default.createElement(_icon2.default, { type: 'bulb', style: { fontSize: '32px' } })
            },
            _react2.default.createElement(
              _card2.default,
              {
                title: 'Your Devices React',
                className: 'time-line-card animation',
                'data-animation': 'fadeInRight'
              },
              _react2.default.createElement(
                'p',
                null,
                'Smart Voice can turn on the lights, open the blinds, set the temperature, control your TV & AV systems or even make you a coffee.'
              )
            )
          ),
          _react2.default.createElement(
            _timeline2.default.Item,
            {
              className: 'time-line-item',
              dot: _react2.default.createElement(_icon2.default, { type: 'sound', style: { fontSize: '32px' } })
            },
            _react2.default.createElement(
              _card2.default,
              {
                title: 'Get Feedback',
                className: 'time-line-card animation',
                'data-animation': 'fadeInUp'
              },
              _react2.default.createElement(
                'p',
                null,
                'Smart Voice can also provide feedback from your smart devices, such as how much energy you are using or the current temperature.'
              )
            )
          ),
          _react2.default.createElement(_timeline2.default.Item, {
            className: 'time-line-item',
            dot: _react2.default.createElement(_icon2.default, { type: 'check-circle-o', style: { fontSize: '32px' } })
          })
        ),
        _react2.default.createElement('img', { className: 'work-flow-image', src: _diagram2.default })
      );
    }
  }]);

  return WorkFlow;
}(_react.Component);

exports.default = WorkFlow;

/***/ },

/***/ 923:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(19);

var _button = __webpack_require__(18);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(806);

var _mention = __webpack_require__(805);

var _mention2 = _interopRequireDefault(_mention);

var _css3 = __webpack_require__(38);

var _input = __webpack_require__(46);

var _input2 = _interopRequireDefault(_input);

var _css4 = __webpack_require__(27);

var _icon = __webpack_require__(17);

var _icon2 = _interopRequireDefault(_icon);

var _css5 = __webpack_require__(356);

var _notification = __webpack_require__(355);

var _notification2 = _interopRequireDefault(_notification);

var _css6 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var DetailForm = function (_Component) {
	_inherits(DetailForm, _Component);

	function DetailForm() {
		_classCallCheck(this, DetailForm);

		return _possibleConstructorReturn(this, (DetailForm.__proto__ || Object.getPrototypeOf(DetailForm)).apply(this, arguments));
	}

	_createClass(DetailForm, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.state = {
				loading: false
			};
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();
			var customerType = this.props.customerType || '';
			var environment = this.props.environment || '';
			var content = this.props.content;
			this.setState({ loading: true });
			this.props.form.validateFields(function (err, values) {
				if (!err) {
					var data = values;
					data.describe = customerType;
					data.environment = environment;
					var url = 'https://q1oqe5jm8c.execute-api.us-east-1.amazonaws.com/v1/registerinterest';
					_axios2.default.post(url, data).then(function (response) {
						_this2.setState({ loading: false });
						_notification2.default.open({
							message: 'Thank you for registering',
							description: content
						});
					}).catch(function (err) {
						_this2.setState({ loading: false });
						console.log('error:', err.toString());
						_notification2.default.open({
							message: 'Sorry for registering failed',
							description: 'try again or contact us by phone or email'
						});
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var getFieldDecorator = this.props.form.getFieldDecorator;

			var companyNameField = "";
			var postCodeField = "";
			if (this.props.customerType == "homeOwner" || this.props.customerType == 'other') {
				postCodeField = _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'label',
						null,
						'*Post Code:'
					),
					_react2.default.createElement(
						FormItem,
						null,
						getFieldDecorator('zipCode', {
							rules: [{
								type: 'string', message: 'The input is not valid post code'
							}, {
								required: true, message: 'Please input your post code!'
							}]
						})(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'mail', style: { fontSize: 13 } }), placeholder: 'Post Code' }))
					)
				);
			}
			if (this.props.customerType == 'builder' || this.props.customerType == 'integrator' || this.props.customerType == 'other') {
				companyNameField = _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'label',
						null,
						'*Company Name:'
					),
					_react2.default.createElement(
						FormItem,
						null,
						getFieldDecorator('companyName', {
							rules: [{ required: true, message: 'Please input the company name' }]
						})(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'contacts', style: { fontSize: 13 } }), placeholder: 'Company Name' }))
					)
				);
			}
			return _react2.default.createElement(
				_form2.default,
				{ onSubmit: this.handleSubmit.bind(this) },
				companyNameField,
				_react2.default.createElement(
					'label',
					null,
					'Name:'
				),
				_react2.default.createElement(
					FormItem,
					null,
					getFieldDecorator('name', {
						rules: [{ required: false }]
					})(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'user', style: { fontSize: 13 } }), placeholder: 'Username' }))
				),
				_react2.default.createElement(
					'label',
					null,
					'*Email:'
				),
				_react2.default.createElement(
					FormItem,
					null,
					getFieldDecorator('email', {
						rules: [{
							type: 'email', message: 'The input is not valid E-mail!'
						}, {
							required: true, message: 'Please input your E-mail!'
						}]
					})(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'mail', style: { fontSize: 13 } }), placeholder: 'Email' }))
				),
				_react2.default.createElement(
					'label',
					null,
					'Phone:'
				),
				_react2.default.createElement(
					FormItem,
					null,
					getFieldDecorator('phone', {
						rules: [{ required: false }]
					})(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'mobile', style: { fontSize: 13 } }), placeholder: 'Phone' }))
				),
				_react2.default.createElement(
					'label',
					null,
					'*State/s:'
				),
				_react2.default.createElement(
					FormItem,
					null,
					getFieldDecorator('states', {
						rules: [{ required: true, message: 'Please input the state' }]
					})(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'global', style: { fontSize: 13 } }), placeholder: 'States' }))
				),
				postCodeField,
				_react2.default.createElement(
					'label',
					null,
					'Addition Comment:'
				),
				_react2.default.createElement(
					FormItem,
					null,
					getFieldDecorator('postcode', {
						rules: [{ required: false }]
					})(_react2.default.createElement(_mention2.default, {
						style: { height: 100 }
					}))
				),
				_react2.default.createElement(
					FormItem,
					null,
					_react2.default.createElement(
						_button2.default,
						{ type: 'primary', loading: this.state.loading, htmlType: 'submit' },
						'Register'
					)
				)
			);
		}
	}]);

	return DetailForm;
}(_react.Component);

var WrappedDetailForm = _form2.default.create()(DetailForm);
exports.default = WrappedDetailForm;

/***/ },

/***/ 924:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(157);

var _checkbox = __webpack_require__(104);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _css2 = __webpack_require__(128);

var _card = __webpack_require__(127);

var _card2 = _interopRequireDefault(_card);

var _css3 = __webpack_require__(39);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _css4 = __webpack_require__(41);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

var _css5 = __webpack_require__(357);

var _radio = __webpack_require__(206);

var _radio2 = _interopRequireDefault(_radio);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1110);

var _DetailForm = __webpack_require__(923);

var _DetailForm2 = _interopRequireDefault(_DetailForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2.default.Group;
var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var RegisterInterest = function (_Component) {
	_inherits(RegisterInterest, _Component);

	function RegisterInterest() {
		_classCallCheck(this, RegisterInterest);

		return _possibleConstructorReturn(this, (RegisterInterest.__proto__ || Object.getPrototypeOf(RegisterInterest)).apply(this, arguments));
	}

	_createClass(RegisterInterest, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.state = {
				describe: '',
				residential: '',
				commercial: '',
				disability: '',
				other: '',
				name: '',
				email: '',
				companyName: '',
				phone: '',
				states: '',
				postCode: '',
				comments: '',
				errMessage: '',
				welcomeContent: '',
				registerDescribeStyle: 'register-interest',
				registerDetailsStyle: 'register-details',
				registerWelcomeStyle: 'hidden',
				registerButtonContent: 'Register',
				registerButtonStyle: 'btn btn-primary btn-lg',
				registerButtonDisabled: ''
			};
		}
	}, {
		key: 'onChangeDescribe',
		value: function onChangeDescribe(event) {
			var value = event.target.value;
			console.log("value:", value);
			switch (value) {
				case 'integrator':
					this.setState({
						describe: value,
						welcomeContent: 'You will soon be contacted by a member of the Smart Voice team to assist you in becoming a Smart Voice Installer.'
					});
					break;
				case 'builder':
					this.setState({
						describe: value,
						welcomeContent: 'You will soon be contacted by a member of the Smart Voice team to assist you in your Smart Voice enquiry.'
					});
					break;
				case 'other':
					this.setState({
						describe: value,
						welcomeContent: 'You will soon be contacted by a member of the Smart Voice team to assist you in your Smart Voice enquiry.'
					});
					break;
				case 'home owner':
					this.setState({
						describe: value,
						welcomeContent: 'You will soon be contacted by a Smart Voice registered installer to assist you in your Smart Voice service.'
					});
					break;
				default:
					break;
			}
		}
	}, {
		key: 'onChangeResidential',
		value: function onChangeResidential(event) {
			var flag = event.target.checked;
			this.setState({ residential: flag });
		}
	}, {
		key: 'onChangeCommercial',
		value: function onChangeCommercial(event) {
			var flag = event.target.checked;
			this.setState({ commercial: flag });
		}
	}, {
		key: 'onChangeDisability',
		value: function onChangeDisability(event) {
			var flag = event.target.checked;
			this.setState({ disability: flag });
		}
	}, {
		key: 'onChangeOther',
		value: function onChangeOther(event) {
			var flag = event.target.checked;
			this.setState({ other: flag });
		}
	}, {
		key: 'renderDetailsForm',
		value: function renderDetailsForm() {
			var describe = this.state.describe;
			var residential = this.state.residential;
			var commercial = this.state.commercial;
			var disability = this.state.disability;
			var other = this.state.other;
			var environmentArray = [];
			if (residential) {
				environmentArray.push(' ' + residential);
			}
			if (commercial) {
				environmentArray.push(' ' + commercial);
			}
			if (disability) {
				environmentArray.push(' ' + disability);
			}
			if (other) {
				environmentArray.push(' ' + other);
			}
			var environment = environmentArray.toString();
			if (describe && (residential || commercial || disability || other)) {
				return _react2.default.createElement(
					_card2.default,
					{ title: 'Your Detail',
						className: 'detail-card animated fadeInRight'
					},
					_react2.default.createElement(_DetailForm2.default, {
						customerType: describe,
						environment: environment,
						content: this.state.welcomeContent
					})
				);
			}
			return null;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'register-interest-div' },
				_react2.default.createElement(
					_card2.default,
					{ title: 'Register Your Interest',
						className: 'describe-card animated fadeInLeft'
					},
					_react2.default.createElement(
						'label',
						null,
						'Which best describes you?'
					),
					_react2.default.createElement(
						RadioGroup,
						{
							className: 'describe-radio-group',
							onChange: this.onChangeDescribe.bind(this)
						},
						_react2.default.createElement(
							_radio2.default,
							{
								className: 'describe-radio-item',
								value: 'home owner'
							},
							'A Home owner'
						),
						_react2.default.createElement(
							_radio2.default,
							{
								className: 'describe-radio-item',
								value: 'builder'
							},
							'A Builder'
						),
						_react2.default.createElement(
							_radio2.default,
							{
								className: 'describe-radio-item',
								value: 'integrator'
							},
							'An Integrator'
						),
						_react2.default.createElement(
							_radio2.default,
							{
								className: 'describe-radio-item',
								value: 'other'
							},
							'Other'
						)
					),
					_react2.default.createElement(
						'label',
						null,
						'Which environments are you looking to use Smart Voice in?'
					),
					_react2.default.createElement(
						_checkbox2.default,
						{
							className: 'describe-checkbox',
							onChange: this.onChangeResidential.bind(this)
						},
						'Residential'
					),
					_react2.default.createElement(
						_checkbox2.default,
						{
							className: 'describe-checkbox',
							onChange: this.onChangeCommercial.bind(this)
						},
						'Commercial'
					),
					_react2.default.createElement(
						_checkbox2.default,
						{
							className: 'describe-checkbox',
							onChange: this.onChangeDisability.bind(this)
						},
						'Disablity'
					),
					_react2.default.createElement(
						_checkbox2.default,
						{
							className: 'describe-checkbox',
							onChange: this.onChangeOther.bind(this)
						},
						'Other'
					)
				),
				this.renderDetailsForm()
			);
		}
	}]);

	return RegisterInterest;
}(_react.Component);

exports.default = RegisterInterest;

/***/ },

/***/ 925:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  console.log('action:', action);
  switch (action.type) {
    case 'AUTH_LOGIN':
      return _extends({}, state, { loading: true });
    case 'AUTH_USER':
      console.log('go to reducer');
      return _extends({}, state, { error: '', loading: false, authenticated: true, integrator: action.payload });
    case 'AUTH_ERROR':
      return _extends({}, state, { error: action.payload, loading: false, integrator: '' });
    case 'UNAUTH_USER':
      return _extends({}, state, { authenticated: false, loading: false, integrator: '' });
    case 'CHANGE_CUSTOMER':
      return _extends({}, state, { customer: action.payload });
    case 'CHANGE_LOCATION':
      return _extends({}, state, { location: action.payload });
    case 'AUTH_LOGOUT':
      return {};
  }

  return state;
};

/***/ },

/***/ 926:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_CURRENT_CONTROLSYSTEM':
      return _extends({}, state, { controlSystem: action.payload });
  }

  return state;
};

var initial_state = {
  errMessage: '',
  loading: false,
  controlSystem: {
    Name: '',
    ControlSystem: '',
    Params: {}
  }
};

/***/ },

/***/ 927:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments[1];

  switch (action.type) {
    case 'GET_CUSTOMER_LOADING':
      return _extends({}, state, { errMessage: '', customer: { rooms: [], controlSystems: [] }, loading: true });
    case 'GET_CUSTOMER':
      return _extends({}, state, { customer: action.payload, errMessage: '', loading: false });
    case 'GET_CUSTOMER_ERROR':
      return _extends({}, state, { customer: { rooms: [], controlSystems: [] }, errMessage: action.payload, loading: false });
    case 'GET_CUSTOMER_LOGOUT':
      return _extends({}, initial_state);
  }

  return state;
};

var initial_state = {
  errMessage: '',
  loading: false,
  customer: {
    rooms: [],
    controlSystems: []
  }
};

/***/ },

/***/ 928:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments[1];

  switch (action.type) {
    case 'GET_DEVICE_LOADING':
      return _extends({}, state, { errMessage: '', devices: [], loading: true });
    case 'GET_DEVICE':
      return _extends({}, state, { devices: action.payload, errMessage: '', loading: false });
    case 'GET_DEVICE_ERROR':
      return _extends({}, state, { devices: [], errMessage: action.payload, loading: false });
    case 'GET_DEVICE_LOGOUT':
      return _extends({}, initial_state);
  }

  return state;
};

var initial_state = {
  errMessage: '',
  loading: false,
  devices: []
};

/***/ },

/***/ 929:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments[1];

  switch (action.type) {
    case 'GET_INTEGRATOR_LOADING':
      return _extends({}, state, { errMessage: '', integrator: { customers: [] }, loading: true });
    case 'GET_INTEGRATOR':
      return _extends({}, state, { integrator: action.payload, errMessage: '', loading: false });
    case 'GET_INTEGRATOR_ERROR':
      return _extends({}, state, { integrator: { customers: [] }, errMessage: action.payload, loading: false });
    case 'GET_INTEGRATOR_LOGOUT':
      return initial_state;
  }

  return state;
};

var initial_state = {
  errMessage: '',
  loading: false,
  integrator: {
    customers: []
  }
};

/***/ },

/***/ 930:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments[1];

  switch (action.type) {
    case 'CUSTOMER_DELETE_MODAL_CHANGE':
      return _extends({}, state, { customerDeleteModal: action.payload });
    case 'CUSTOMER_ADD_MODAL_CHANGE':
      return _extends({}, state, { addCustomerModal: action.payload });
    case 'CUSTOMER_ADD_CONTROLSYSTEM_MODAL_CHANGE':
      return _extends({}, state, { addControlSystemModal: action.payload });
    case 'CUSTOMER_EDIT_CONTROLSYSTEM_MODAL_CHANGE':
      return _extends({}, state, { editControlSystemModal: action.payload });
    case 'CUSTOMER_ADD_DEVICE_MODAL_CHANGE':
      return _extends({}, state, { addDeviceModal: action.payload });
  }
  return state;
};

var initial_state = {
  customerDeleteModal: false,
  addCustomerModal: false,
  addControlSystemModal: false,
  editControlSystemModal: false,
  addDeviceModal: false
};

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(14);

var ReactCurrentOwner = __webpack_require__(198);

var warning = __webpack_require__(13);
var canDefineProperty = __webpack_require__(199);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(644);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },

/***/ 987:
/***/ function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(997);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ },

/***/ 997:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ },

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ },

/***/ 999:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(385);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }

},[1711]);