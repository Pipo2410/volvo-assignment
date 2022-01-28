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

/***/ "./components/UI/carousel.tsx":
/*!************************************!*\
  !*** ./components/UI/carousel.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var _volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @volvo-cars/react-layout-utils */ \"./node_modules/@volvo-cars/react-layout-utils/dist/index.m.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car */ \"./components/car.tsx\");\n/* harmony import */ var _docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../docs/chevron-circled.svg */ \"./docs/chevron-circled.svg\");\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ \"./node_modules/pure-react-carousel/dist/react-carousel.es.css\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/UI/carousel.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Carousel = props => {\n  _s();\n\n  const {\n    items,\n    current\n  } = props;\n  const {\n    0: visibleItems,\n    1: setVisibleItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);\n  const {\n    0: isDesktop,\n    1: setIsDesktop\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth > 500);\n  const {\n    ref,\n    width\n  } = (0,_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__.useResizeObserver)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (width !== undefined) {\n      if (width < 600) {\n        setVisibleItems(1);\n        setIsDesktop(false);\n      }\n\n      if (width > 600) {\n        setVisibleItems(4);\n        setIsDesktop(true);\n      }\n    }\n  }, [width]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.View, {\n    ref: ref,\n    marginTop: 5,\n    children: [!items.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Text, {\n      as: \"h2\",\n      variant: \"ootah\",\n      extend: {\n        textAlign: 'center',\n        untilM: {\n          fontSize: '16px'\n        }\n      },\n      children: \"No cars available with this body type\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, undefined), !!items.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselProvider, {\n      naturalSlideWidth: 100,\n      naturalSlideHeight: 115,\n      totalSlides: items.length,\n      visibleSlides: visibleItems,\n      infinite: false,\n      currentSlide: props.current,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.Slider, {\n        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.Slide, {\n          index: index,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n            extend: {\n              flexDirection: 'row'\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_car__WEBPACK_IMPORTED_MODULE_1__.default, {\n              text: item,\n              index: index\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 19\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 17\n          }, undefined)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 15\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, undefined), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        extend: {\n          flexDirection: 'row',\n          justifyContent: 'flex-end'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.ButtonBack, {\n          tabIndex: items.length + 1,\n          \"aria-label\": \"back to previous\",\n          style: {\n            background: 'none',\n            border: 'none',\n            width: '40px',\n            height: '40px',\n            padding: 0,\n            transform: 'rotate(-180deg)'\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Spacer, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.ButtonNext, {\n          \"aria-label\": \"next\",\n          tabIndex: items.length + 1,\n          style: {\n            background: 'none',\n            border: 'none',\n            width: '40px',\n            height: '40px',\n            padding: 0\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, undefined), !isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        extend: {\n          flexDirection: 'row',\n          justifyContent: 'center'\n        },\n        children: items.map((item, itemIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.Dot, {\n          slide: itemIndex,\n          style: {\n            border: 'none',\n            padding: '0',\n            width: '8px',\n            height: '8px',\n            borderRadius: '100px',\n            margin: '0 4px'\n          }\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 17\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Carousel, \"oecdndBPFuHt1/IZawpZkEk+qec=\", false, function () {\n  return [_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__.useResizeObserver];\n});\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUMsb0RBQUQ7QUFFRSxlQUFLLEVBQUVBLFNBRlQ7QUFHRSxlQUFLLEVBQUU7QUFDTEosWUFBQUEsTUFBTSxFQUFFLE1BREg7QUFFTEUsWUFBQUEsT0FBTyxFQUFFLEdBRko7QUFHTGYsWUFBQUEsS0FBSyxFQUFFLEtBSEY7QUFJTGMsWUFBQUEsTUFBTSxFQUFFLEtBSkg7QUFLTEksWUFBQUEsWUFBWSxFQUFFLE9BTFQ7QUFNTEMsWUFBQUEsTUFBTSxFQUFFO0FBTkg7QUFIVCxXQUNPWixJQUFJLENBQUNHLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1R0QsQ0ExSEQ7O0dBQU1yQjtVQUltQlQ7OztLQUpuQlM7QUE0SE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9jYXJvdXNlbC50c3g/ZTEyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNwYWNlciwgRmxleCwgVmlldywgVGV4dCB9IGZyb20gJ3ZjYy11aSc7XG5pbXBvcnQgeyB1c2VSZXNpemVPYnNlcnZlciB9IGZyb20gJ0B2b2x2by1jYXJzL3JlYWN0LWxheW91dC11dGlscyc7XG5pbXBvcnQgQ2FyIGZyb20gJy4uL2Nhcic7XG5pbXBvcnQgQXJyb3dJY29uIGZyb20gJy4uLy4uL2RvY3MvY2hldnJvbi1jaXJjbGVkLnN2Zyc7XG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpRGF0YSc7XG5pbXBvcnQge1xuICBDYXJvdXNlbFByb3ZpZGVyLFxuICBTbGlkZXIsXG4gIFNsaWRlLFxuICBCdXR0b25CYWNrLFxuICBCdXR0b25OZXh0LFxuICBEb3QsXG59IGZyb20gJ3B1cmUtcmVhY3QtY2Fyb3VzZWwnO1xuaW1wb3J0ICdwdXJlLXJlYWN0LWNhcm91c2VsL2Rpc3QvcmVhY3QtY2Fyb3VzZWwuZXMuY3NzJztcblxuY29uc3QgQ2Fyb3VzZWw6IFJlYWN0LkZDPHsgaXRlbXM6IERhdGFbXTsgY3VycmVudDogbnVtYmVyIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMsIGN1cnJlbnQgfSA9IHByb3BzO1xuICBjb25zdCBbdmlzaWJsZUl0ZW1zLCBzZXRWaXNpYmxlSXRlbXNdID0gdXNlU3RhdGUoNCk7XG4gIGNvbnN0IFtpc0Rlc2t0b3AsIHNldElzRGVza3RvcF0gPSB1c2VTdGF0ZTxib29sZWFuPih3aW5kb3cuaW5uZXJXaWR0aCA+IDUwMCk7XG4gIGNvbnN0IHsgcmVmLCB3aWR0aCB9ID0gdXNlUmVzaXplT2JzZXJ2ZXI8SFRNTERpdkVsZW1lbnQ+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHdpZHRoIDwgNjAwKSB7XG4gICAgICAgIHNldFZpc2libGVJdGVtcygxKTtcbiAgICAgICAgc2V0SXNEZXNrdG9wKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aCA+IDYwMCkge1xuICAgICAgICBzZXRWaXNpYmxlSXRlbXMoNCk7XG4gICAgICAgIHNldElzRGVza3RvcCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt3aWR0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgcmVmPXtyZWZ9IG1hcmdpblRvcD17NX0+XG4gICAgICB7IWl0ZW1zLmxlbmd0aCAmJiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgYXM9XCJoMlwiXG4gICAgICAgICAgdmFyaWFudD1cIm9vdGFoXCJcbiAgICAgICAgICBleHRlbmQ9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB1bnRpbE06IHtcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE5vIGNhcnMgYXZhaWxhYmxlIHdpdGggdGhpcyBib2R5IHR5cGVcbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICAgIHshIWl0ZW1zLmxlbmd0aCAmJiAoXG4gICAgICAgIDxDYXJvdXNlbFByb3ZpZGVyXG4gICAgICAgICAgbmF0dXJhbFNsaWRlV2lkdGg9ezEwMH1cbiAgICAgICAgICBuYXR1cmFsU2xpZGVIZWlnaHQ9ezExNX1cbiAgICAgICAgICB0b3RhbFNsaWRlcz17aXRlbXMubGVuZ3RofVxuICAgICAgICAgIHZpc2libGVTbGlkZXM9e3Zpc2libGVJdGVtc31cbiAgICAgICAgICBpbmZpbml0ZT17ZmFsc2V9XG4gICAgICAgICAgY3VycmVudFNsaWRlPXtwcm9wcy5jdXJyZW50fVxuICAgICAgICA+XG4gICAgICAgICAgPFNsaWRlcj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxTbGlkZSBrZXk9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgIGV4dGVuZD17e1xuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENhciB0ZXh0PXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAge2lzRGVza3RvcCAmJiAoXG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBleHRlbmQ9e3tcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbkJhY2tcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17aXRlbXMubGVuZ3RoICsgMX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYmFjayB0byBwcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtMTgwZGVnKScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b25CYWNrPlxuICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25OZXh0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm5leHRcIlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpdGVtcy5sZW5ndGggKyAxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b25OZXh0PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFpc0Rlc2t0b3AgJiYgKFxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgZXh0ZW5kPXt7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RG90XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICBzbGlkZT17aXRlbUluZGV4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgNHB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxuICAgICAgKX1cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3BhY2VyIiwiRmxleCIsIlZpZXciLCJUZXh0IiwidXNlUmVzaXplT2JzZXJ2ZXIiLCJDYXIiLCJBcnJvd0ljb24iLCJDYXJvdXNlbFByb3ZpZGVyIiwiU2xpZGVyIiwiU2xpZGUiLCJCdXR0b25CYWNrIiwiQnV0dG9uTmV4dCIsIkRvdCIsIkNhcm91c2VsIiwicHJvcHMiLCJpdGVtcyIsImN1cnJlbnQiLCJ2aXNpYmxlSXRlbXMiLCJzZXRWaXNpYmxlSXRlbXMiLCJpc0Rlc2t0b3AiLCJzZXRJc0Rlc2t0b3AiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVmIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJ1bnRpbE0iLCJmb250U2l6ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZsZXhEaXJlY3Rpb24iLCJpZCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImhlaWdodCIsInBhZGRpbmciLCJ0cmFuc2Zvcm0iLCJpdGVtSW5kZXgiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UI/carousel.tsx\n");

/***/ })

});