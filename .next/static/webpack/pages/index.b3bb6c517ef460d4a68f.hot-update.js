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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ \"./node_modules/pure-react-carousel/dist/react-carousel.es.css\");\n/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var _volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @volvo-cars/react-layout-utils */ \"./node_modules/@volvo-cars/react-layout-utils/dist/index.m.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car */ \"./components/car.tsx\");\n/* harmony import */ var _docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../docs/chevron-circled.svg */ \"./docs/chevron-circled.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/carousel.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Carousel = props => {\n  _s();\n\n  const {\n    items\n  } = props;\n  const {\n    0: visibleItems,\n    1: setVisibleItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);\n  const {\n    0: isDesktop,\n    1: setIsDesktop\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth > 479);\n  const {\n    ref,\n    width,\n    height\n  } = (0,_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__.useResizeObserver)(); // console.log(ref);\n  // console.log(typeof ref);\n  // console.log(width);\n  // console.log(height);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (width !== undefined) {\n      if (width < 479) {\n        setVisibleItems(1);\n        setIsDesktop(false);\n      }\n\n      if (width > 479) {\n        setVisibleItems(4);\n        setIsDesktop(true);\n      }\n    }\n  }, [width]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.View, {\n    ref: ref,\n    marginTop: 5,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselProvider, {\n      naturalSlideWidth: 100,\n      naturalSlideHeight: 100,\n      totalSlides: items.length,\n      visibleSlides: visibleItems,\n      infinite: false,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slider, {\n        style: {\n          height: '400px'\n        },\n        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n          index: index,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n            extend: {\n              flexDirection: 'row'\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_car__WEBPACK_IMPORTED_MODULE_3__.default, {\n              text: item\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, undefined)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, undefined), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        extend: {\n          flexDirection: 'row',\n          justifyContent: 'end'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonBack, {\n          style: {\n            background: 'none',\n            border: 'none',\n            width: '40px',\n            height: '40px',\n            transform: ''\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.ButtonNext, {\n          style: {\n            background: 'none',\n            border: 'none',\n            width: '40px',\n            height: '40px',\n            transform: ''\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_docs_chevron_circled_svg__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 11\n      }, undefined), !isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.DotGroup, {\n        showAsSelectedForCurrentSlideOnly: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 24\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Carousel, \"EV+rBvuREKpFv2nsn9c3mF/pW8E=\", false, function () {\n  return [_volvo_cars_react_layout_utils__WEBPACK_IMPORTED_MODULE_6__.useResizeObserver];\n});\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLHFCQU5GLGVBaUJFLDhEQUFDLDJEQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQ0xGLFlBQUFBLFVBQVUsRUFBRSxNQURQO0FBRUxDLFlBQUFBLE1BQU0sRUFBRSxNQUZIO0FBR0xYLFlBQUFBLEtBQUssRUFBRSxNQUhGO0FBSUxDLFlBQUFBLE1BQU0sRUFBRSxNQUpIO0FBS0xXLFlBQUFBLFNBQVMsRUFBRTtBQUxOLFdBRFQ7QUFBQSxpQ0FTRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZCSixFQXFERyxDQUFDakIsU0FBRCxpQkFBYyw4REFBQyx5REFBRDtBQUFVLHlDQUFpQyxFQUFFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckRqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyREQsQ0FuRkQ7O0dBQU1MO1VBSTJCSDs7O0tBSjNCRztBQXFGTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nhcm91c2VsLnRzeD9jN2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG4vLyBpbXBvcnQge1JlYWN0Q29tcG9uZW50IHNhIEFycm93TG9nbyB9IGZyb20gJy4uL2RvY3MvY2hldnJvbi1jaXJjbGVkLnN2ZydcbmltcG9ydCBEYXRhIGZyb20gJy4uL21vZGVscy9hcGlEYXRhJztcbmltcG9ydCB7XG4gIENhcm91c2VsUHJvdmlkZXIsXG4gIFNsaWRlcixcbiAgU2xpZGUsXG4gIEJ1dHRvbkJhY2ssXG4gIEJ1dHRvbk5leHQsXG4gIERvdEdyb3VwLFxufSBmcm9tICdwdXJlLXJlYWN0LWNhcm91c2VsJztcbmltcG9ydCAncHVyZS1yZWFjdC1jYXJvdXNlbC9kaXN0L3JlYWN0LWNhcm91c2VsLmVzLmNzcyc7XG5pbXBvcnQgeyBTcGFjZXIsIEZsZXgsIFZpZXcsIEJsb2NrIH0gZnJvbSAndmNjLXVpJztcbmltcG9ydCB7IHVzZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnQHZvbHZvLWNhcnMvcmVhY3QtbGF5b3V0LXV0aWxzJztcblxuaW1wb3J0IENhciBmcm9tICcuL2Nhcic7XG5pbXBvcnQgQXJyb3dJY29uIGZyb20gJy4uL2RvY3MvY2hldnJvbi1jaXJjbGVkLnN2Zyc7XG5cbmNvbnN0IENhcm91c2VsOiBSZWFjdC5GQzx7IGl0ZW1zOiBEYXRhW10gfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFt2aXNpYmxlSXRlbXMsIHNldFZpc2libGVJdGVtc10gPSB1c2VTdGF0ZSg0KTtcbiAgY29uc3QgW2lzRGVza3RvcCwgc2V0SXNEZXNrdG9wXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHdpbmRvdy5pbm5lcldpZHRoID4gNDc5KTtcbiAgY29uc3QgeyByZWYsIHdpZHRoLCBoZWlnaHQgfSA9IHVzZVJlc2l6ZU9ic2VydmVyPEhUTUxEaXZFbGVtZW50PigpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHJlZik7XG4gIC8vIGNvbnNvbGUubG9nKHR5cGVvZiByZWYpO1xuICAvLyBjb25zb2xlLmxvZyh3aWR0aCk7XG4gIC8vIGNvbnNvbGUubG9nKGhlaWdodCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHdpZHRoIDwgNDc5KSB7XG4gICAgICAgIHNldFZpc2libGVJdGVtcygxKTtcbiAgICAgICAgc2V0SXNEZXNrdG9wKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aCA+IDQ3OSkge1xuICAgICAgICBzZXRWaXNpYmxlSXRlbXMoNCk7XG4gICAgICAgIHNldElzRGVza3RvcCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt3aWR0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgcmVmPXtyZWZ9IG1hcmdpblRvcD17NX0+XG4gICAgICA8Q2Fyb3VzZWxQcm92aWRlclxuICAgICAgICBuYXR1cmFsU2xpZGVXaWR0aD17MTAwfVxuICAgICAgICBuYXR1cmFsU2xpZGVIZWlnaHQ9ezEwMH1cbiAgICAgICAgdG90YWxTbGlkZXM9e2l0ZW1zLmxlbmd0aH1cbiAgICAgICAgdmlzaWJsZVNsaWRlcz17dmlzaWJsZUl0ZW1zfVxuICAgICAgICBpbmZpbml0ZT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxTbGlkZXIgc3R5bGU9e3sgaGVpZ2h0OiAnNDAwcHgnIH19PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U2xpZGUga2V5PXtpdGVtLmlkfSBpbmRleD17aW5kZXh9PlxuICAgICAgICAgICAgICB7LyogcmVmYWN0b3IgKi99XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgZXh0ZW5kPXt7XG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhciB0ZXh0PXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIHtpc0Rlc2t0b3AgJiYgKFxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBleHRlbmQ9e3tcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZW5kJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbkJhY2tcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXJyb3dJY29uIC8+XG4gICAgICAgICAgICA8L0J1dHRvbkJhY2s+XG4gICAgICAgICAgICA8QnV0dG9uTmV4dFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cbiAgICAgICAgICAgIDwvQnV0dG9uTmV4dD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICl9XG4gICAgICAgIHshaXNEZXNrdG9wICYmIDxEb3RHcm91cCBzaG93QXNTZWxlY3RlZEZvckN1cnJlbnRTbGlkZU9ubHk9e3RydWV9IC8+fVxuICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJvdXNlbFByb3ZpZGVyIiwiU2xpZGVyIiwiU2xpZGUiLCJCdXR0b25CYWNrIiwiQnV0dG9uTmV4dCIsIkRvdEdyb3VwIiwiU3BhY2VyIiwiRmxleCIsIlZpZXciLCJ1c2VSZXNpemVPYnNlcnZlciIsIkNhciIsIkFycm93SWNvbiIsIkNhcm91c2VsIiwicHJvcHMiLCJpdGVtcyIsInZpc2libGVJdGVtcyIsInNldFZpc2libGVJdGVtcyIsImlzRGVza3RvcCIsInNldElzRGVza3RvcCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZWYiLCJ3aWR0aCIsImhlaWdodCIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZsZXhEaXJlY3Rpb24iLCJpZCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/carousel.tsx\n");

/***/ })

});