"use strict";
(() => {
var exports = {};
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cars)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./helpers/api-util.tsx


const getAllData = () => {
  const filePath = external_path_default().join(process.cwd(), 'public', 'api', 'cars.json');
  const jsonData = external_fs_default().readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
};
;// CONCATENATED MODULE: ./pages/api/cars.tsx


const handler = (req, res) => {
  const data = getAllData();

  if (req.method === 'GET') {
    res.status(200).json({
      status: 'success',
      data
    });
  }
};

/* harmony default export */ const cars = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(309));
module.exports = __webpack_exports__;

})();