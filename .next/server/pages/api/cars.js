"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cars";
exports.ids = ["pages/api/cars"];
exports.modules = {

/***/ "./helpers/api-util.tsx":
/*!******************************!*\
  !*** ./helpers/api-util.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllData\": () => (/* binding */ getAllData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getAllData = () => {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'public', 'api', 'cars.json');\n  const jsonData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n  const data = JSON.parse(jsonData.toString());\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS11dGlsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxVQUFVLEdBQUcsTUFBTTtBQUM5QixRQUFNQyxRQUFRLEdBQUdGLGdEQUFBLENBQVVJLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLFFBQXpCLEVBQW1DLEtBQW5DLEVBQTBDLFdBQTFDLENBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHUCxzREFBQSxDQUFnQkcsUUFBaEIsQ0FBakI7QUFDQSxRQUFNTSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixRQUFRLENBQUNLLFFBQVQsRUFBWCxDQUFiO0FBQ0EsU0FBT0gsSUFBUDtBQUNELENBTE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1jb2RlLXRlc3QvLi9oZWxwZXJzL2FwaS11dGlsLnRzeD82ZTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IGdldEFsbERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAnYXBpJywgJ2NhcnMuanNvbicpO1xuICBjb25zdCBqc29uRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhLnRvU3RyaW5nKCkpO1xuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiZ2V0QWxsRGF0YSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJqc29uRGF0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/api-util.tsx\n");

/***/ }),

/***/ "./pages/api/cars.tsx":
/*!****************************!*\
  !*** ./pages/api/cars.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/api-util */ \"./helpers/api-util.tsx\");\n\n\nconst handler = (req, res) => {\n  const data = (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_0__.getAllData)();\n\n  if (req.method === 'GET') {\n    res.status(200).json({\n      status: 'success',\n      data\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2Fycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZEMsR0FEYyxFQUVkQyxHQUZjLEtBR1g7QUFDSCxRQUFNQyxJQUFJLEdBQUdKLDZEQUFVLEVBQXZCOztBQUVBLE1BQUlFLEdBQUcsQ0FBQ0csTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCRixJQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkQsTUFBQUEsTUFBTSxFQUFFLFNBRFc7QUFFbkJGLE1BQUFBO0FBRm1CLEtBQXJCO0FBSUQ7QUFDRixDQVpEOztBQWNBLGlFQUFlSCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtY29kZS10ZXN0Ly4vcGFnZXMvYXBpL2NhcnMudHN4PzQ5ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBnZXRBbGxEYXRhIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcGktdXRpbCc7XG5cbmNvbnN0IGhhbmRsZXIgPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPHsgc3RhdHVzOiBzdHJpbmc7IGRhdGE6IHt9IH0+XG4pID0+IHtcbiAgY29uc3QgZGF0YSA9IGdldEFsbERhdGEoKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiZ2V0QWxsRGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/cars.tsx\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/cars.tsx"));
module.exports = __webpack_exports__;

})();