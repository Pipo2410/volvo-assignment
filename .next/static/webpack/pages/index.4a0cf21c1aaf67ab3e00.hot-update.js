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

/***/ "./components/car.tsx":
/*!****************************!*\
  !*** ./components/car.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/car.tsx\";\n\n\n\n\n\nconst Car = props => {\n  const {\n    id,\n    modelName,\n    bodyType,\n    modelType,\n    imageUrl\n  } = props.text;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n        variant: \"bates\",\n        children: bodyType.toUpperCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.View, {\n        as: \"span\",\n        extend: {\n          flexDirection: 'row'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n          children: [modelName, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n            variant: \"bates\",\n            children: modelType\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: imageUrl,\n      alt: modelName,\n      width: 300,\n      height: 300\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n      extend: {\n        flexDirection: 'row',\n        justifyContent: 'space-evenly'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {\n        href: `/learn/${id}`,\n        arrow: \"right\",\n        children: \"Learn\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {\n        href: `/shop/${id}`,\n        arrow: \"right\",\n        children: \"Shop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = Car;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\n\nvar _c;\n\n$RefreshReg$(_c, \"Car\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7O0FBRUEsTUFBTU0sR0FBNkIsR0FBSUMsS0FBRCxJQUFXO0FBQy9DLFFBQU07QUFBRUMsSUFBQUEsRUFBRjtBQUFNQyxJQUFBQSxTQUFOO0FBQWlCQyxJQUFBQSxRQUFqQjtBQUEyQkMsSUFBQUEsU0FBM0I7QUFBc0NDLElBQUFBO0FBQXRDLE1BQW1ETCxLQUFLLENBQUNNLElBQS9EO0FBRUEsc0JBQ0UsOERBQUMsd0NBQUQ7QUFBQSw0QkFDRSw4REFBQyx3Q0FBRDtBQUFBLDhCQUNFLDhEQUFDLHdDQUFEO0FBQU0sZUFBTyxFQUFDLE9BQWQ7QUFBQSxrQkFBdUJILFFBQVEsQ0FBQ0ksV0FBVDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsd0NBQUQ7QUFBTSxVQUFFLEVBQUMsTUFBVDtBQUFnQixjQUFNLEVBQUU7QUFBRUMsVUFBQUEsYUFBYSxFQUFFO0FBQWpCLFNBQXhCO0FBQUEsK0JBQ0UsOERBQUMsd0NBQUQ7QUFBQSxxQkFDR04sU0FESCxlQUdFLDhEQUFDLHdDQUFEO0FBQU0sbUJBQU8sRUFBQyxPQUFkO0FBQUEsc0JBQXVCRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0UsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVDLFFBQVo7QUFBc0IsU0FBRyxFQUFFSCxTQUEzQjtBQUFzQyxXQUFLLEVBQUUsR0FBN0M7QUFBa0QsWUFBTSxFQUFFO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFZRSw4REFBQyx3Q0FBRDtBQUNFLFlBQU0sRUFBRTtBQUNOTSxRQUFBQSxhQUFhLEVBQUUsS0FEVDtBQUVOQyxRQUFBQSxjQUFjLEVBQUU7QUFGVixPQURWO0FBQUEsOEJBTUUsOERBQUMsd0NBQUQ7QUFBTSxZQUFJLEVBQUcsVUFBU1IsRUFBRyxFQUF6QjtBQUE0QixhQUFLLEVBQUMsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFTRSw4REFBQyx3Q0FBRDtBQUFNLFlBQUksRUFBRyxTQUFRQSxFQUFHLEVBQXhCO0FBQTJCLGFBQUssRUFBQyxPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0QkQsQ0EvQkQ7O0tBQU1GO0FBaUNOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyLnRzeD8yMGUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCBEYXRhIGZyb20gJy4uL21vZGVscy9hcGlEYXRhJztcbmltcG9ydCB7IExpbmssIFZpZXcsIEJsb2NrLCBGbGV4LCBUZXh0LCBTcGFjZXIgfSBmcm9tICd2Y2MtdWknO1xuXG5jb25zdCBDYXI6IFJlYWN0LkZDPHsgdGV4dDogRGF0YSB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlkLCBtb2RlbE5hbWUsIGJvZHlUeXBlLCBtb2RlbFR5cGUsIGltYWdlVXJsIH0gPSBwcm9wcy50ZXh0O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXg+XG4gICAgICA8RmxleD5cbiAgICAgICAgPFRleHQgdmFyaWFudD1cImJhdGVzXCI+e2JvZHlUeXBlLnRvVXBwZXJDYXNlKCl9PC9UZXh0PlxuICAgICAgICA8VmlldyBhcz1cInNwYW5cIiBleHRlbmQ9e3sgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7bW9kZWxOYW1lfVxuICAgICAgICAgICAgey8qIDxTcGFjZXIgLz4gKi99XG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYmF0ZXNcIj57bW9kZWxUeXBlfTwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlVXJsfSBhbHQ9e21vZGVsTmFtZX0gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IC8+XG4gICAgICA8RmxleFxuICAgICAgICBleHRlbmQ9e3tcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvbGVhcm4vJHtpZH1gfSBhcnJvdz1cInJpZ2h0XCI+XG4gICAgICAgICAgTGVhcm5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvJHtpZH1gfSBhcnJvdz1cInJpZ2h0XCI+XG4gICAgICAgICAgU2hvcFxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwiVmlldyIsIkZsZXgiLCJUZXh0IiwiQ2FyIiwicHJvcHMiLCJpZCIsIm1vZGVsTmFtZSIsImJvZHlUeXBlIiwibW9kZWxUeXBlIiwiaW1hZ2VVcmwiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/car.tsx\n");

/***/ })

});