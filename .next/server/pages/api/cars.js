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

/***/ "./pages/api/cars.tsx":
/*!****************************!*\
  !*** ./pages/api/cars.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst handler = (req, res) => {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'public', 'api', 'cars.json');\n  const jsonData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n  const data = JSON.parse(jsonData.toString());\n\n  if (req.method === 'GET') {\n    res.status(200).json({\n      status: 'success',\n      data\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2Fycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1FLE9BQU8sR0FBRyxDQUNkQyxHQURjLEVBRWRDLEdBRmMsS0FHWDtBQUNILFFBQU1DLFFBQVEsR0FBR0osZ0RBQUEsQ0FBVU0sT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsUUFBekIsRUFBbUMsS0FBbkMsRUFBMEMsV0FBMUMsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdULHNEQUFBLENBQWdCSyxRQUFoQixDQUFqQjtBQUNBLFFBQU1NLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFFBQVEsQ0FBQ0ssUUFBVCxFQUFYLENBQWI7O0FBRUEsTUFBSVgsR0FBRyxDQUFDWSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEJYLElBQUFBLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CRCxNQUFBQSxNQUFNLEVBQUUsU0FEVztBQUVuQkwsTUFBQUE7QUFGbUIsS0FBckI7QUFJRDtBQUNGLENBZEQ7O0FBZ0JBLGlFQUFlVCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtY29kZS10ZXN0Ly4vcGFnZXMvYXBpL2NhcnMudHN4PzQ5ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IGhhbmRsZXIgPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPHsgc3RhdHVzOiBzdHJpbmc7IGRhdGE6IHt9IH0+XG4pID0+IHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycsICdhcGknLCAnY2Fycy5qc29uJyk7XG4gIGNvbnN0IGpzb25EYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEudG9TdHJpbmcoKSk7XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwianNvbkRhdGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwidG9TdHJpbmciLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/cars.tsx\n");

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