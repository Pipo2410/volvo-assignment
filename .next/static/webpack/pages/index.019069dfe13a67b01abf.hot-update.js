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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ \"./node_modules/pure-react-carousel/dist/react-carousel.es.css\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var _volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @volvo-cars/react-layout-utils */ \"./node_modules/@volvo-cars/react-layout-utils/dist/index.m.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car */ \"./components/car.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/carousel.tsx\",\n    _s = $RefreshSig$();\n\n // import {ReactComponent sa ArrowLogo } from '../docs/chevron-circled.svg'\n\n\n\n\n\n\n\n\nconst Carousel = props => {\n  _s();\n\n  const {\n    items\n  } = props;\n  const {\n    0: visibleItems,\n    1: setVisibleItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);\n  const {\n    0: isDesktop,\n    1: setIsDesktop\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth > 479);\n  const {\n    ref,\n    width,\n    height\n  } = (0,_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__.useResizeObserver)(); // console.log(ref);\n  // console.log(typeof ref);\n\n  console.log(width); // console.log(height);\n\n  useEffect(() => {\n    if (width !== undefined) {\n      if (width < 479) setVisibleItems(1);\n      if (width > 479) setVisibleItems(4);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.View, {\n    ref: ref,\n    marginTop: 5,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselProvider, {\n      naturalSlideWidth: 100,\n      naturalSlideHeight: 100,\n      totalSlides: items.length // visibleSlides={visibleItems}\n      // visibleSlides={width > 479 ? 4 : 1}\n      ,\n      visibleSlides: 4,\n      infinite: false,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slider, {\n        style: {\n          height: '400px'\n        },\n        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n          index: index,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            extend: {\n              flexDirection: 'row'\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_car__WEBPACK_IMPORTED_MODULE_3__.default, {\n              text: item\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, undefined)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, undefined), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        extend: {\n          flexDirection: 'row',\n          justifyContent: 'end'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonBack, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            style: {\n              transform: 'rotate(-180deg)'\n            },\n            height: 30,\n            src: \"https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonNext, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            height: 30,\n            src: \"https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, undefined), !isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.DotGroup, {\n        showAsSelectedForCurrentSlideOnly: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 24\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Carousel, \"EV+rBvuREKpFv2nsn9c3mF/pW8E=\", false, function () {\n  return [_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__.useResizeObserver];\n});\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJKLEVBZ0RHLENBQUNsQixTQUFELGlCQUFjLDhEQUFDLHlEQUFEO0FBQVUseUNBQWlDLEVBQUU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNERCxDQXhFRDs7R0FBTUw7VUFJMkJGOzs7S0FKM0JFO0FBMEVOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2Fyb3VzZWwudHN4P2M3YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQge1JlYWN0Q29tcG9uZW50IHNhIEFycm93TG9nbyB9IGZyb20gJy4uL2RvY3MvY2hldnJvbi1jaXJjbGVkLnN2ZydcbmltcG9ydCBEYXRhIGZyb20gJy4uL21vZGVscy9hcGlEYXRhJztcbmltcG9ydCB7XG4gIENhcm91c2VsUHJvdmlkZXIsXG4gIFNsaWRlcixcbiAgU2xpZGUsXG4gIEJ1dHRvbkJhY2ssXG4gIEJ1dHRvbk5leHQsXG4gIERvdEdyb3VwLFxufSBmcm9tICdwdXJlLXJlYWN0LWNhcm91c2VsJztcbmltcG9ydCAncHVyZS1yZWFjdC1jYXJvdXNlbC9kaXN0L3JlYWN0LWNhcm91c2VsLmVzLmNzcyc7XG5pbXBvcnQgeyBTcGFjZXIsIEZsZXgsIFZpZXcsIEJsb2NrIH0gZnJvbSAndmNjLXVpJztcbmltcG9ydCB7IHVzZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnQHZvbHZvLWNhcnMvcmVhY3QtbGF5b3V0LXV0aWxzJztcblxuaW1wb3J0IENhciBmcm9tICcuL2Nhcic7XG5cbmNvbnN0IENhcm91c2VsOiBSZWFjdC5GQzx7IGl0ZW1zOiBEYXRhW10gfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFt2aXNpYmxlSXRlbXMsIHNldFZpc2libGVJdGVtc10gPSB1c2VTdGF0ZSg0KTtcbiAgY29uc3QgW2lzRGVza3RvcCwgc2V0SXNEZXNrdG9wXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHdpbmRvdy5pbm5lcldpZHRoID4gNDc5KTtcbiAgY29uc3QgeyByZWYsIHdpZHRoLCBoZWlnaHQgfSA9IHVzZVJlc2l6ZU9ic2VydmVyPEhUTUxEaXZFbGVtZW50PigpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHJlZik7XG4gIC8vIGNvbnNvbGUubG9nKHR5cGVvZiByZWYpO1xuICBjb25zb2xlLmxvZyh3aWR0aCk7XG4gIC8vIGNvbnNvbGUubG9nKGhlaWdodCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHdpZHRoIDwgNDc5KSBzZXRWaXNpYmxlSXRlbXMoMSk7XG4gICAgICBpZiAod2lkdGggPiA0NzkpIHNldFZpc2libGVJdGVtcyg0KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IHJlZj17cmVmfSBtYXJnaW5Ub3A9ezV9PlxuICAgICAgPENhcm91c2VsUHJvdmlkZXJcbiAgICAgICAgbmF0dXJhbFNsaWRlV2lkdGg9ezEwMH1cbiAgICAgICAgbmF0dXJhbFNsaWRlSGVpZ2h0PXsxMDB9XG4gICAgICAgIHRvdGFsU2xpZGVzPXtpdGVtcy5sZW5ndGh9XG4gICAgICAgIC8vIHZpc2libGVTbGlkZXM9e3Zpc2libGVJdGVtc31cbiAgICAgICAgLy8gdmlzaWJsZVNsaWRlcz17d2lkdGggPiA0NzkgPyA0IDogMX1cbiAgICAgICAgdmlzaWJsZVNsaWRlcz17NH1cbiAgICAgICAgaW5maW5pdGU9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8U2xpZGVyIHN0eWxlPXt7IGhlaWdodDogJzQwMHB4JyB9fT5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFNsaWRlIGtleT17aXRlbS5pZH0gaW5kZXg9e2luZGV4fT5cbiAgICAgICAgICAgICAgey8qIHJlZmFjdG9yICovfVxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGV4dGVuZD17e1xuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXIgdGV4dD17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgICB7aXNEZXNrdG9wICYmIChcbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgZXh0ZW5kPXt7XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2VuZCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8QmxvY2s+ICovfVxuICAgICAgICAgICAgPEJ1dHRvbkJhY2s+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTE4MGRlZyknIH19XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BuZy5wbmd0cmVlLmNvbS9lbGVtZW50X29yaWdpbl9taW5fcGljLzE2LzA5LzAyLzExNTdjOGYwNTM5ODJhMy5qcGdcIlxuICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8L0J1dHRvbkJhY2s+XG4gICAgICAgICAgICA8QnV0dG9uTmV4dD5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vZWxlbWVudF9vcmlnaW5fbWluX3BpYy8xNi8wOS8wMi8xMTU3YzhmMDUzOTgyYTMuanBnXCJcbiAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPC9CdXR0b25OZXh0PlxuICAgICAgICAgICAgey8qIDwvQmxvY2s+ICovfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpc0Rlc2t0b3AgJiYgPERvdEdyb3VwIHNob3dBc1NlbGVjdGVkRm9yQ3VycmVudFNsaWRlT25seT17dHJ1ZX0gLz59XG4gICAgICA8L0Nhcm91c2VsUHJvdmlkZXI+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsUHJvdmlkZXIiLCJTbGlkZXIiLCJTbGlkZSIsIkJ1dHRvbkJhY2siLCJCdXR0b25OZXh0IiwiRG90R3JvdXAiLCJTcGFjZXIiLCJGbGV4IiwiVmlldyIsInVzZVJlc2l6ZU9ic2VydmVyIiwiQ2FyIiwiQ2Fyb3VzZWwiLCJwcm9wcyIsIml0ZW1zIiwidmlzaWJsZUl0ZW1zIiwic2V0VmlzaWJsZUl0ZW1zIiwiaXNEZXNrdG9wIiwic2V0SXNEZXNrdG9wIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlZiIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZsZXhEaXJlY3Rpb24iLCJpZCIsImp1c3RpZnlDb250ZW50IiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel.tsx\n");

/***/ })

});