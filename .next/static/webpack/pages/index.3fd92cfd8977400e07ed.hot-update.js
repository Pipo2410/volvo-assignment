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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ \"./node_modules/pure-react-carousel/dist/react-carousel.es.css\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var _volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @volvo-cars/react-layout-utils */ \"./node_modules/@volvo-cars/react-layout-utils/dist/index.m.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car */ \"./components/car.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/carousel.tsx\",\n    _s = $RefreshSig$();\n\n // import {ReactComponent sa ArrowLogo } from '../docs/chevron-circled.svg'\n\n\n\n\n\n\n\n\nconst Carousel = props => {\n  _s();\n\n  const {\n    items\n  } = props;\n  const {\n    ref,\n    width,\n    height\n  } = (0,_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__.useResizeObserver)();\n  const {\n    0: visibleItems,\n    1: setVisibleItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);\n  const {\n    0: isDesktop,\n    1: setIsDesktop\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(width > 479);\n  console.log(isDesktop);\n  console.log(ref);\n  console.log(typeof ref);\n  console.log(width);\n  console.log(height); // if (width !== undefined) {\n  //   if (width < 479) setVisibleItems(1);\n  //   if (width > 479) setVisibleItems(4);\n  // }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.View, {\n    ref: ref,\n    marginTop: 5,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselProvider, {\n      naturalSlideWidth: 100,\n      naturalSlideHeight: 100,\n      totalSlides: items.length // visibleSlides={visibleItems}\n      // visibleSlides={width > 479 ? 4 : 1}\n      ,\n      visibleSlides: 4,\n      infinite: false,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slider, {\n        style: {\n          height: '400px'\n        },\n        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide // style={{ float: 'none' }}\n        , {\n          index: index,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            extend: {\n              flexDirection: 'row'\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_car__WEBPACK_IMPORTED_MODULE_3__.default, {\n              text: item\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_6__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 15\n          }, undefined)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonBack, {\n          style: styles,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            style: {\n              transform: 'rotate(-180deg)'\n            },\n            height: 30,\n            src: \"https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonNext, {\n          style: styles,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            height: 30,\n            src: \"https://png.pngtree.com/element_origin_min_pic/16/09/02/1157c8f053982a3.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, undefined), width < 479 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.DotGroup, {\n        showAsSelectedForCurrentSlideOnly: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 25\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Carousel, \"WjMZTkfyFs7zdLCDo3w5HkSI60I=\", false, function () {\n  return [_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_5__.useResizeObserver];\n});\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxtQkEzQ2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlERCxDQWxFRDs7R0FBTUo7VUFFMkJGOzs7S0FGM0JFO0FBb0VOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2Fyb3VzZWwudHN4P2M3YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQge1JlYWN0Q29tcG9uZW50IHNhIEFycm93TG9nbyB9IGZyb20gJy4uL2RvY3MvY2hldnJvbi1jaXJjbGVkLnN2ZydcbmltcG9ydCBEYXRhIGZyb20gJy4uL21vZGVscy9hcGlEYXRhJztcbmltcG9ydCB7XG4gIENhcm91c2VsUHJvdmlkZXIsXG4gIFNsaWRlcixcbiAgU2xpZGUsXG4gIEJ1dHRvbkJhY2ssXG4gIEJ1dHRvbk5leHQsXG4gIERvdEdyb3VwLFxufSBmcm9tICdwdXJlLXJlYWN0LWNhcm91c2VsJztcbmltcG9ydCAncHVyZS1yZWFjdC1jYXJvdXNlbC9kaXN0L3JlYWN0LWNhcm91c2VsLmVzLmNzcyc7XG5pbXBvcnQgeyBTcGFjZXIsIEZsZXgsIFZpZXcgfSBmcm9tICd2Y2MtdWknO1xuaW1wb3J0IHsgdXNlUmVzaXplT2JzZXJ2ZXIgfSBmcm9tICdAdm9sdm8tY2Fycy9yZWFjdC1sYXlvdXQtdXRpbHMnO1xuXG5pbXBvcnQgQ2FyIGZyb20gJy4vY2FyJztcblxuY29uc3QgQ2Fyb3VzZWw6IFJlYWN0LkZDPHsgaXRlbXM6IERhdGFbXSB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBwcm9wcztcbiAgY29uc3QgeyByZWYsIHdpZHRoLCBoZWlnaHQgfSA9IHVzZVJlc2l6ZU9ic2VydmVyPEhUTUxEaXZFbGVtZW50PigpO1xuICBjb25zdCBbdmlzaWJsZUl0ZW1zLCBzZXRWaXNpYmxlSXRlbXNdID0gdXNlU3RhdGUoNCk7XG4gIGNvbnN0IFtpc0Rlc2t0b3AsIHNldElzRGVza3RvcF0gPSB1c2VTdGF0ZTxib29sZWFuPih3aWR0aCA+IDQ3OSk7XG4gIGNvbnNvbGUubG9nKGlzRGVza3RvcCk7XG5cbiAgY29uc29sZS5sb2cocmVmKTtcbiAgY29uc29sZS5sb2codHlwZW9mIHJlZik7XG4gIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgY29uc29sZS5sb2coaGVpZ2h0KTtcblxuICAvLyBpZiAod2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAvLyAgIGlmICh3aWR0aCA8IDQ3OSkgc2V0VmlzaWJsZUl0ZW1zKDEpO1xuICAvLyAgIGlmICh3aWR0aCA+IDQ3OSkgc2V0VmlzaWJsZUl0ZW1zKDQpO1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8VmlldyByZWY9e3JlZn0gbWFyZ2luVG9wPXs1fT5cbiAgICAgIDxDYXJvdXNlbFByb3ZpZGVyXG4gICAgICAgIG5hdHVyYWxTbGlkZVdpZHRoPXsxMDB9XG4gICAgICAgIG5hdHVyYWxTbGlkZUhlaWdodD17MTAwfVxuICAgICAgICB0b3RhbFNsaWRlcz17aXRlbXMubGVuZ3RofVxuICAgICAgICAvLyB2aXNpYmxlU2xpZGVzPXt2aXNpYmxlSXRlbXN9XG4gICAgICAgIC8vIHZpc2libGVTbGlkZXM9e3dpZHRoID4gNDc5ID8gNCA6IDF9XG4gICAgICAgIHZpc2libGVTbGlkZXM9ezR9XG4gICAgICAgIGluZmluaXRlPXtmYWxzZX1cbiAgICAgID5cbiAgICAgICAgPFNsaWRlciBzdHlsZT17eyBoZWlnaHQ6ICc0MDBweCcgfX0+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTbGlkZVxuICAgICAgICAgICAgICAvLyBzdHlsZT17eyBmbG9hdDogJ25vbmUnIH19XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogcmVmYWN0b3IgKi99XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgZXh0ZW5kPXt7XG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhciB0ZXh0PXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvbkJhY2sgc3R5bGU9e3N0eWxlc30+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtMTgwZGVnKScgfX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vZWxlbWVudF9vcmlnaW5fbWluX3BpYy8xNi8wOS8wMi8xMTU3YzhmMDUzOTgyYTMuanBnXCJcbiAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICA8L0J1dHRvbkJhY2s+XG4gICAgICAgICAgPEJ1dHRvbk5leHQgc3R5bGU9e3N0eWxlc30+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL2VsZW1lbnRfb3JpZ2luX21pbl9waWMvMTYvMDkvMDIvMTE1N2M4ZjA1Mzk4MmEzLmpwZ1wiXG4gICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgPC9CdXR0b25OZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3dpZHRoIDwgNDc5ICYmIDxEb3RHcm91cCBzaG93QXNTZWxlY3RlZEZvckN1cnJlbnRTbGlkZU9ubHk9e3RydWV9IC8+fVxuICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbFByb3ZpZGVyIiwiU2xpZGVyIiwiU2xpZGUiLCJCdXR0b25CYWNrIiwiQnV0dG9uTmV4dCIsIkRvdEdyb3VwIiwiU3BhY2VyIiwiRmxleCIsIlZpZXciLCJ1c2VSZXNpemVPYnNlcnZlciIsIkNhciIsIkNhcm91c2VsIiwicHJvcHMiLCJpdGVtcyIsInJlZiIsIndpZHRoIiwiaGVpZ2h0IiwidmlzaWJsZUl0ZW1zIiwic2V0VmlzaWJsZUl0ZW1zIiwiaXNEZXNrdG9wIiwic2V0SXNEZXNrdG9wIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZsZXhEaXJlY3Rpb24iLCJpZCIsInN0eWxlcyIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/carousel.tsx\n");

/***/ })

});