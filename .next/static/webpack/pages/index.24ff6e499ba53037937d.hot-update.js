"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/carousel.tsx":
/*!*********************************!*\
  !*** ./components/carousel.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ \"./node_modules/pure-react-carousel/dist/react-carousel.es.css\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var _volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @volvo-cars/react-layout-utils */ \"./node_modules/@volvo-cars/react-layout-utils/dist/index.m.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car */ \"./components/car.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/carousel.tsx\",\n    _s = $RefreshSig$();\n\n // import {ReactComponent sa ArrowLogo } from '../docs/chevron-circled.svg'\n\n\n\n\n\n\n\n\nconst Carousel = props => {\n  _s();\n\n  const {\n    items\n  } = props;\n  const {\n    0: visibleItems,\n    1: setVisibleItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);\n  const {\n    0: isDesktop,\n    1: setIsDesktop\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth > 479);\n  const {\n    ref,\n    width,\n    height\n  } = (0,_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__.useResizeObserver)();\n  console.log(ref); // console.log(typeof ref);\n\n  console.log(width); // console.log(height);\n\n  if (!width) {\n    if (width < 479) setVisibleItems(1);\n    if (width > 479) setVisibleItems(4);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.View, {\n    ref: ref,\n    marginTop: 5,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselProvider, {\n      naturalSlideWidth: 100,\n      naturalSlideHeight: 100,\n      totalSlides: items.length // visibleSlides={visibleItems}\n      // visibleSlides={width > 479 ? 4 : 1}\n      ,\n      visibleSlides: 4,\n      infinite: false,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slider, {\n        style: {\n          height: '400px'\n        },\n        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n          index: index,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            extend: {\n              flexDirection: 'row'\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_car__WEBPACK_IMPORTED_MODULE_3__.default, {\n              text: item\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, undefined)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, undefined), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        extend: {\n          flexDirection: 'row',\n          justifyContent: 'end'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonBack, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            style: {\n              transform: 'rotate(-180deg)'\n            },\n            height: 30,\n            src: \"https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonNext, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            height: 30,\n            src: \"https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, undefined), !isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.DotGroup, {\n        showAsSelectedForCurrentSlideOnly: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 24\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Carousel, \"fttnraCYF+amY/mFBz+lJj4vUJI=\", false, function () {\n  return [_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__.useResizeObserver];\n});\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixFQWdERyxDQUFDaEIsU0FBRCxpQkFBYyw4REFBQyx5REFBRDtBQUFVLHlDQUFpQyxFQUFFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaERqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzREQsQ0F0RUQ7O0dBQU1MO1VBSTJCRjs7O0tBSjNCRTtBQXdFTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nhcm91c2VsLnRzeD9jN2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gaW1wb3J0IHtSZWFjdENvbXBvbmVudCBzYSBBcnJvd0xvZ28gfSBmcm9tICcuLi9kb2NzL2NoZXZyb24tY2lyY2xlZC5zdmcnXG5pbXBvcnQgRGF0YSBmcm9tICcuLi9tb2RlbHMvYXBpRGF0YSc7XG5pbXBvcnQge1xuICBDYXJvdXNlbFByb3ZpZGVyLFxuICBTbGlkZXIsXG4gIFNsaWRlLFxuICBCdXR0b25CYWNrLFxuICBCdXR0b25OZXh0LFxuICBEb3RHcm91cCxcbn0gZnJvbSAncHVyZS1yZWFjdC1jYXJvdXNlbCc7XG5pbXBvcnQgJ3B1cmUtcmVhY3QtY2Fyb3VzZWwvZGlzdC9yZWFjdC1jYXJvdXNlbC5lcy5jc3MnO1xuaW1wb3J0IHsgU3BhY2VyLCBGbGV4LCBWaWV3LCBCbG9jayB9IGZyb20gJ3ZjYy11aSc7XG5pbXBvcnQgeyB1c2VSZXNpemVPYnNlcnZlciB9IGZyb20gJ0B2b2x2by1jYXJzL3JlYWN0LWxheW91dC11dGlscyc7XG5cbmltcG9ydCBDYXIgZnJvbSAnLi9jYXInO1xuXG5jb25zdCBDYXJvdXNlbDogUmVhY3QuRkM8eyBpdGVtczogRGF0YVtdIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHByb3BzO1xuICBjb25zdCBbdmlzaWJsZUl0ZW1zLCBzZXRWaXNpYmxlSXRlbXNdID0gdXNlU3RhdGUoNCk7XG4gIGNvbnN0IFtpc0Rlc2t0b3AsIHNldElzRGVza3RvcF0gPSB1c2VTdGF0ZTxib29sZWFuPih3aW5kb3cuaW5uZXJXaWR0aCA+IDQ3OSk7XG4gIGNvbnN0IHsgcmVmLCB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VSZXNpemVPYnNlcnZlcjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICBjb25zb2xlLmxvZyhyZWYpO1xuICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgcmVmKTtcbiAgY29uc29sZS5sb2cod2lkdGgpO1xuICAvLyBjb25zb2xlLmxvZyhoZWlnaHQpO1xuXG4gIGlmICghd2lkdGgpIHtcbiAgICBpZiAod2lkdGggPCA0NzkpIHNldFZpc2libGVJdGVtcygxKTtcbiAgICBpZiAod2lkdGggPiA0NzkpIHNldFZpc2libGVJdGVtcyg0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgcmVmPXtyZWZ9IG1hcmdpblRvcD17NX0+XG4gICAgICA8Q2Fyb3VzZWxQcm92aWRlclxuICAgICAgICBuYXR1cmFsU2xpZGVXaWR0aD17MTAwfVxuICAgICAgICBuYXR1cmFsU2xpZGVIZWlnaHQ9ezEwMH1cbiAgICAgICAgdG90YWxTbGlkZXM9e2l0ZW1zLmxlbmd0aH1cbiAgICAgICAgLy8gdmlzaWJsZVNsaWRlcz17dmlzaWJsZUl0ZW1zfVxuICAgICAgICAvLyB2aXNpYmxlU2xpZGVzPXt3aWR0aCA+IDQ3OSA/IDQgOiAxfVxuICAgICAgICB2aXNpYmxlU2xpZGVzPXs0fVxuICAgICAgICBpbmZpbml0ZT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxTbGlkZXIgc3R5bGU9e3sgaGVpZ2h0OiAnNDAwcHgnIH19PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U2xpZGUga2V5PXtpdGVtLmlkfSBpbmRleD17aW5kZXh9PlxuICAgICAgICAgICAgICB7LyogcmVmYWN0b3IgKi99XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgZXh0ZW5kPXt7XG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhciB0ZXh0PXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIHtpc0Rlc2t0b3AgJiYgKFxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBleHRlbmQ9e3tcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZW5kJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIDxCbG9jaz4gKi99XG4gICAgICAgICAgICA8QnV0dG9uQmFjaz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtMTgwZGVnKScgfX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL2VsZW1lbnRfb3JpZ2luX21pbl9waWMvMTYvMDkvMDIvMTE1N2M4ZjA1Mzk4MmEzLmpwZ1wiXG4gICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDwvQnV0dG9uQmFjaz5cbiAgICAgICAgICAgIDxCdXR0b25OZXh0PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BuZy5wbmd0cmVlLmNvbS9lbGVtZW50X29yaWdpbl9taW5fcGljLzE2LzA5LzAyLzExNTdjOGYwNTM5ODJhMy5qcGdcIlxuICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8L0J1dHRvbk5leHQ+XG4gICAgICAgICAgICB7LyogPC9CbG9jaz4gKi99XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICApfVxuICAgICAgICB7IWlzRGVza3RvcCAmJiA8RG90R3JvdXAgc2hvd0FzU2VsZWN0ZWRGb3JDdXJyZW50U2xpZGVPbmx5PXt0cnVlfSAvPn1cbiAgICAgIDwvQ2Fyb3VzZWxQcm92aWRlcj5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2Fyb3VzZWxQcm92aWRlciIsIlNsaWRlciIsIlNsaWRlIiwiQnV0dG9uQmFjayIsIkJ1dHRvbk5leHQiLCJEb3RHcm91cCIsIlNwYWNlciIsIkZsZXgiLCJWaWV3IiwidXNlUmVzaXplT2JzZXJ2ZXIiLCJDYXIiLCJDYXJvdXNlbCIsInByb3BzIiwiaXRlbXMiLCJ2aXNpYmxlSXRlbXMiLCJzZXRWaXNpYmxlSXRlbXMiLCJpc0Rlc2t0b3AiLCJzZXRJc0Rlc2t0b3AiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVmIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZmxleERpcmVjdGlvbiIsImlkIiwianVzdGlmeUNvbnRlbnQiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel.tsx\n");

/***/ })

});