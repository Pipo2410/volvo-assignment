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

/***/ "./components/searchbar.tsx":
/*!**********************************!*\
  !*** ./components/searchbar.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vcc_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vcc-ui */ \"./node_modules/vcc-ui/es/index.js\");\n/* harmony import */ var _volvo_cars_react_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @volvo-cars/react-utils */ \"./node_modules/@volvo-cars/react-utils/dist/index.m.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peterstrelec/Documents/GitHub/volvo-assignment/components/searchbar.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchBar = props => {\n  _s();\n\n  const {\n    0: inputValue,\n    1: setInputValue\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // can be used to prevent submit on enter\n\n  (0,_volvo_cars_react_utils__WEBPACK_IMPORTED_MODULE_2__.useKeyPress)('Enter', () => console.log('Enter Clicked'));\n\n  const searchCarHandler = event => {\n    // event.preventDefault();\n    const searchedPhrase = event.target.value.toLowerCase();\n    setInputValue(event.target.value);\n    props.onFilterCars(event.target.value);\n  };\n\n  const submitSearch = event => {\n    console.log(event);\n    console.log('halo');\n    event.preventDefault();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.View, {\n    as: \"form\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(vcc_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n      value: inputValue,\n      label: 'Filter cars by type',\n      placeholder: \"estate\",\n      type: \"search\",\n      onChange: searchCarHandler,\n      onSubmit: submitSearch\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(SearchBar, \"oPKGWR3XrofHvjRnv9lqmyoOPF0=\", false, function () {\n  return [_volvo_cars_react_utils__WEBPACK_IMPORTED_MODULE_2__.useKeyPress];\n});\n\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaGJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7OztBQUVBLE1BQU1LLFNBQTZELEdBQ2pFQyxLQURvRSxJQUVqRTtBQUFBOztBQUNILFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QlAsK0NBQVEsQ0FBUyxFQUFULENBQTVDLENBREcsQ0FHSDs7QUFDQUcsRUFBQUEsb0VBQVcsQ0FBQyxPQUFELEVBQVUsTUFBTUssT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixDQUFoQixDQUFYOztBQUVBLFFBQU1DLGdCQUFnQixHQUFJQyxLQUFELElBQWdCO0FBQ3ZDO0FBQ0EsVUFBTUMsY0FBYyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkMsV0FBbkIsRUFBdkI7QUFDQVIsSUFBQUEsYUFBYSxDQUFDSSxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0FBQ0FULElBQUFBLEtBQUssQ0FBQ1csWUFBTixDQUFtQkwsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWhDO0FBQ0QsR0FMRDs7QUFPQSxRQUFNRyxZQUFZLEdBQUlOLEtBQUQsSUFBZ0I7QUFDbkNILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0FILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUUsSUFBQUEsS0FBSyxDQUFDTyxjQUFOO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRSw4REFBQyx3Q0FBRDtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQUEsMkJBQ0UsOERBQUMsNkNBQUQ7QUFDRSxXQUFLLEVBQUVaLFVBRFQ7QUFFRSxXQUFLLEVBQUUscUJBRlQ7QUFHRSxpQkFBVyxFQUFDLFFBSGQ7QUFJRSxVQUFJLEVBQUMsUUFKUDtBQUtFLGNBQVEsRUFBRUksZ0JBTFo7QUFNRSxjQUFRLEVBQUVPO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBakNEOztHQUFNYjtVQU1KRDs7O0tBTklDO0FBbUNOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VhcmNoYmFyLnRzeD9lNjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVmlldywgVGV4dElucHV0IH0gZnJvbSAndmNjLXVpJztcblxuaW1wb3J0IHsgdXNlS2V5UHJlc3MgfSBmcm9tICdAdm9sdm8tY2Fycy9yZWFjdC11dGlscyc7XG5cbmNvbnN0IFNlYXJjaEJhcjogUmVhY3QuRkM8eyBvbkZpbHRlckNhcnM6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQgfT4gPSAoXG4gIHByb3BzXG4pID0+IHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgLy8gY2FuIGJlIHVzZWQgdG8gcHJldmVudCBzdWJtaXQgb24gZW50ZXJcbiAgdXNlS2V5UHJlc3MoJ0VudGVyJywgKCkgPT4gY29uc29sZS5sb2coJ0VudGVyIENsaWNrZWQnKSk7XG5cbiAgY29uc3Qgc2VhcmNoQ2FySGFuZGxlciA9IChldmVudDogYW55KSA9PiB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWFyY2hlZFBocmFzZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBwcm9wcy5vbkZpbHRlckNhcnMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRTZWFyY2ggPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZygnaGFsbycpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VmlldyBhcz1cImZvcm1cIj5cbiAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIGxhYmVsPXsnRmlsdGVyIGNhcnMgYnkgdHlwZSd9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZXN0YXRlXCJcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIG9uQ2hhbmdlPXtzZWFyY2hDYXJIYW5kbGVyfVxuICAgICAgICBvblN1Ym1pdD17c3VibWl0U2VhcmNofVxuICAgICAgLz5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlZpZXciLCJUZXh0SW5wdXQiLCJ1c2VLZXlQcmVzcyIsIlNlYXJjaEJhciIsInByb3BzIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoQ2FySGFuZGxlciIsImV2ZW50Iiwic2VhcmNoZWRQaHJhc2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwib25GaWx0ZXJDYXJzIiwic3VibWl0U2VhcmNoIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/searchbar.tsx\n");

/***/ })

});