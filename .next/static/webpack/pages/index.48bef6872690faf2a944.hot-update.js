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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ \"./node_modules/pure-react-carousel/dist/react-carousel.es.css\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var _volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @volvo-cars/react-layout-utils */ \"./node_modules/@volvo-cars/react-layout-utils/dist/index.m.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car */ \"./components/car.tsx\");\n/* harmony import */ var _docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../docs/chevron-circled.svg */ \"./docs/chevron-circled.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/carousel.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Carousel = props => {\n  _s();\n\n  const {\n    items\n  } = props;\n  const {\n    0: visibleItems,\n    1: setVisibleItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);\n  const {\n    0: isDesktop,\n    1: setIsDesktop\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth > 479);\n  const {\n    ref,\n    width,\n    height\n  } = (0,_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__.useResizeObserver)(); // console.log(ref);\n  // console.log(typeof ref);\n  // console.log(width);\n  // console.log(height);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (width !== undefined) {\n      if (width < 479) {\n        setVisibleItems(1);\n        setIsDesktop(false);\n      }\n\n      if (width > 479) {\n        setVisibleItems(4);\n        setIsDesktop(true);\n      }\n    }\n  }, [width]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.View, {\n    ref: ref,\n    marginTop: 5,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselProvider, {\n      naturalSlideWidth: 100,\n      naturalSlideHeight: 100,\n      totalSlides: items.length,\n      visibleSlides: visibleItems,\n      infinite: false,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slider, {\n        style: {\n          height: '400px'\n        },\n        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n          index: index,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n            extend: {\n              flexDirection: 'row'\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_car__WEBPACK_IMPORTED_MODULE_3__.default, {\n              text: item\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, undefined)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, undefined), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        extend: {\n          flexDirection: 'row',\n          justifyContent: 'end'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonBack, {\n          style: {\n            background: 'none',\n            border: 'none',\n            width: '40px',\n            height: '40px',\n            transform: 'translate(-180deg)'\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_4__.default, {\n            style: {\n              transform: 'translate(-180deg)'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonNext, {\n          style: {\n            background: 'none',\n            border: 'none',\n            width: '40px',\n            height: '40px',\n            transform: ''\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 11\n      }, undefined), !isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.DotGroup, {\n        showAsSelectedForCurrentSlideOnly: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 24\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Carousel, \"EV+rBvuREKpFv2nsn9c3mF/pW8E=\", false, function () {\n  return [_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__.useResizeObserver];\n});\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLE1BQU1lLFFBQXFDLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUN2RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBWUQsS0FBbEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0UsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NsQiwrQ0FBUSxDQUFDLENBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ21CLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCcEIsK0NBQVEsQ0FBVXFCLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUE5QixDQUExQztBQUNBLFFBQU07QUFBRUMsSUFBQUEsR0FBRjtBQUFPQyxJQUFBQSxLQUFQO0FBQWNDLElBQUFBO0FBQWQsTUFBeUJkLGlGQUFpQixFQUFoRCxDQUp1RCxDQU12RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQVYsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSXVCLEtBQUssS0FBS0UsU0FBZCxFQUF5QjtBQUN2QixVQUFJRixLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNmTixRQUFBQSxlQUFlLENBQUMsQ0FBRCxDQUFmO0FBQ0FFLFFBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDRDs7QUFDRCxVQUFJSSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNmTixRQUFBQSxlQUFlLENBQUMsQ0FBRCxDQUFmO0FBQ0FFLFFBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGO0FBQ0YsR0FYUSxFQVdOLENBQUNJLEtBQUQsQ0FYTSxDQUFUO0FBYUEsc0JBQ0UsOERBQUMsd0NBQUQ7QUFBTSxPQUFHLEVBQUVELEdBQVg7QUFBZ0IsYUFBUyxFQUFFLENBQTNCO0FBQUEsMkJBQ0UsOERBQUMsaUVBQUQ7QUFDRSx1QkFBaUIsRUFBRSxHQURyQjtBQUVFLHdCQUFrQixFQUFFLEdBRnRCO0FBR0UsaUJBQVcsRUFBRVAsS0FBSyxDQUFDVyxNQUhyQjtBQUlFLG1CQUFhLEVBQUVWLFlBSmpCO0FBS0UsY0FBUSxFQUFFLEtBTFo7QUFBQSw4QkFPRSw4REFBQyx1REFBRDtBQUFRLGFBQUssRUFBRTtBQUFFUSxVQUFBQSxNQUFNLEVBQUU7QUFBVixTQUFmO0FBQUEsa0JBQ0dULEtBQUssQ0FBQ1ksR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsS0FBUCxrQkFDVCw4REFBQyxzREFBRDtBQUFxQixlQUFLLEVBQUVBLEtBQTVCO0FBQUEsaUNBRUUsOERBQUMsd0NBQUQ7QUFDRSxrQkFBTSxFQUFFO0FBQ05DLGNBQUFBLGFBQWEsRUFBRTtBQURULGFBRFY7QUFBQSxvQ0FLRSw4REFBQyx5Q0FBRDtBQUFLLGtCQUFJLEVBQUVGO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQU1FLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsV0FBWUEsSUFBSSxDQUFDRyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixFQXNCR2IsU0FBUyxpQkFDUiw4REFBQyx3Q0FBRDtBQUNFLGNBQU0sRUFBRTtBQUNOWSxVQUFBQSxhQUFhLEVBQUUsS0FEVDtBQUVORSxVQUFBQSxjQUFjLEVBQUU7QUFGVixTQURWO0FBQUEsZ0NBTUUsOERBQUMsMkRBQUQ7QUFDRSxlQUFLLEVBQUU7QUFDTEMsWUFBQUEsVUFBVSxFQUFFLE1BRFA7QUFFTEMsWUFBQUEsTUFBTSxFQUFFLE1BRkg7QUFHTFgsWUFBQUEsS0FBSyxFQUFFLE1BSEY7QUFJTEMsWUFBQUEsTUFBTSxFQUFFLE1BSkg7QUFLTFcsWUFBQUEsU0FBUyxFQUFFO0FBTE4sV0FEVDtBQUFBLGlDQVNFLDhEQUFDLDhEQUFEO0FBQVcsaUJBQUssRUFBRTtBQUFFQSxjQUFBQSxTQUFTLEVBQUU7QUFBYjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQWlCRSw4REFBQywyREFBRDtBQUNFLGVBQUssRUFBRTtBQUNMRixZQUFBQSxVQUFVLEVBQUUsTUFEUDtBQUVMQyxZQUFBQSxNQUFNLEVBQUUsTUFGSDtBQUdMWCxZQUFBQSxLQUFLLEVBQUUsTUFIRjtBQUlMQyxZQUFBQSxNQUFNLEVBQUUsTUFKSDtBQUtMVyxZQUFBQSxTQUFTLEVBQUU7QUFMTixXQURUO0FBQUEsaUNBU0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkosRUFxREcsQ0FBQ2pCLFNBQUQsaUJBQWMsOERBQUMseURBQUQ7QUFBVSx5Q0FBaUMsRUFBRTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkRELENBbkZEOztHQUFNTDtVQUkyQkg7OztLQUozQkc7QUFxRk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC50c3g/YzdjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuLy8gaW1wb3J0IHtSZWFjdENvbXBvbmVudCBzYSBBcnJvd0xvZ28gfSBmcm9tICcuLi9kb2NzL2NoZXZyb24tY2lyY2xlZC5zdmcnXG5pbXBvcnQgRGF0YSBmcm9tICcuLi9tb2RlbHMvYXBpRGF0YSc7XG5pbXBvcnQge1xuICBDYXJvdXNlbFByb3ZpZGVyLFxuICBTbGlkZXIsXG4gIFNsaWRlLFxuICBCdXR0b25CYWNrLFxuICBCdXR0b25OZXh0LFxuICBEb3RHcm91cCxcbn0gZnJvbSAncHVyZS1yZWFjdC1jYXJvdXNlbCc7XG5pbXBvcnQgJ3B1cmUtcmVhY3QtY2Fyb3VzZWwvZGlzdC9yZWFjdC1jYXJvdXNlbC5lcy5jc3MnO1xuaW1wb3J0IHsgU3BhY2VyLCBGbGV4LCBWaWV3LCBCbG9jayB9IGZyb20gJ3ZjYy11aSc7XG5pbXBvcnQgeyB1c2VSZXNpemVPYnNlcnZlciB9IGZyb20gJ0B2b2x2by1jYXJzL3JlYWN0LWxheW91dC11dGlscyc7XG5cbmltcG9ydCBDYXIgZnJvbSAnLi9jYXInO1xuaW1wb3J0IEFycm93SWNvbiBmcm9tICcuLi9kb2NzL2NoZXZyb24tY2lyY2xlZC5zdmcnO1xuXG5jb25zdCBDYXJvdXNlbDogUmVhY3QuRkM8eyBpdGVtczogRGF0YVtdIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHByb3BzO1xuICBjb25zdCBbdmlzaWJsZUl0ZW1zLCBzZXRWaXNpYmxlSXRlbXNdID0gdXNlU3RhdGUoNCk7XG4gIGNvbnN0IFtpc0Rlc2t0b3AsIHNldElzRGVza3RvcF0gPSB1c2VTdGF0ZTxib29sZWFuPih3aW5kb3cuaW5uZXJXaWR0aCA+IDQ3OSk7XG4gIGNvbnN0IHsgcmVmLCB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VSZXNpemVPYnNlcnZlcjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAvLyBjb25zb2xlLmxvZyhyZWYpO1xuICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgcmVmKTtcbiAgLy8gY29uc29sZS5sb2cod2lkdGgpO1xuICAvLyBjb25zb2xlLmxvZyhoZWlnaHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh3aWR0aCA8IDQ3OSkge1xuICAgICAgICBzZXRWaXNpYmxlSXRlbXMoMSk7XG4gICAgICAgIHNldElzRGVza3RvcChmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAod2lkdGggPiA0NzkpIHtcbiAgICAgICAgc2V0VmlzaWJsZUl0ZW1zKDQpO1xuICAgICAgICBzZXRJc0Rlc2t0b3AodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbd2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IHJlZj17cmVmfSBtYXJnaW5Ub3A9ezV9PlxuICAgICAgPENhcm91c2VsUHJvdmlkZXJcbiAgICAgICAgbmF0dXJhbFNsaWRlV2lkdGg9ezEwMH1cbiAgICAgICAgbmF0dXJhbFNsaWRlSGVpZ2h0PXsxMDB9XG4gICAgICAgIHRvdGFsU2xpZGVzPXtpdGVtcy5sZW5ndGh9XG4gICAgICAgIHZpc2libGVTbGlkZXM9e3Zpc2libGVJdGVtc31cbiAgICAgICAgaW5maW5pdGU9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8U2xpZGVyIHN0eWxlPXt7IGhlaWdodDogJzQwMHB4JyB9fT5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFNsaWRlIGtleT17aXRlbS5pZH0gaW5kZXg9e2luZGV4fT5cbiAgICAgICAgICAgICAgey8qIHJlZmFjdG9yICovfVxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGV4dGVuZD17e1xuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXIgdGV4dD17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgICB7aXNEZXNrdG9wICYmIChcbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgZXh0ZW5kPXt7XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2VuZCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25CYWNrXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0xODBkZWcpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFycm93SWNvbiBzdHlsZT17eyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTE4MGRlZyknIH19IC8+XG4gICAgICAgICAgICA8L0J1dHRvbkJhY2s+XG4gICAgICAgICAgICA8QnV0dG9uTmV4dFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cbiAgICAgICAgICAgIDwvQnV0dG9uTmV4dD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICl9XG4gICAgICAgIHshaXNEZXNrdG9wICYmIDxEb3RHcm91cCBzaG93QXNTZWxlY3RlZEZvckN1cnJlbnRTbGlkZU9ubHk9e3RydWV9IC8+fVxuICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJvdXNlbFByb3ZpZGVyIiwiU2xpZGVyIiwiU2xpZGUiLCJCdXR0b25CYWNrIiwiQnV0dG9uTmV4dCIsIkRvdEdyb3VwIiwiU3BhY2VyIiwiRmxleCIsIlZpZXciLCJ1c2VSZXNpemVPYnNlcnZlciIsIkNhciIsIkFycm93SWNvbiIsIkNhcm91c2VsIiwicHJvcHMiLCJpdGVtcyIsInZpc2libGVJdGVtcyIsInNldFZpc2libGVJdGVtcyIsImlzRGVza3RvcCIsInNldElzRGVza3RvcCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZWYiLCJ3aWR0aCIsImhlaWdodCIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZsZXhEaXJlY3Rpb24iLCJpZCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/carousel.tsx\n");

/***/ })

});