(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/song/player"],{

/***/ 69:
/*!*************************************************************************!*\
  !*** F:/workSpace/wx/wx-music/main.js?{"page":"pages%2Fsong%2Fplayer"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _player = _interopRequireDefault(__webpack_require__(/*! ./pages/song/player.vue */ 70));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_player.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 70:
/*!******************************************************!*\
  !*** F:/workSpace/wx/wx-music/pages/song/player.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.vue?vue&type=template&id=108ee09c&scoped=true& */ 71);
/* harmony import */ var _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.vue?vue&type=script&lang=js& */ 73);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _player_vue_vue_type_style_index_0_id_108ee09c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.vue?vue&type=style&index=0&id=108ee09c&lang=scss&scoped=true& */ 76);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "108ee09c",
  null,
  false,
  _player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/song/player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/*!*************************************************************************************************!*\
  !*** F:/workSpace/wx/wx-music/pages/song/player.vue?vue&type=template&id=108ee09c&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./player.vue?vue&type=template&id=108ee09c&scoped=true& */ 72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_template_id_108ee09c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 72:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/workSpace/wx/wx-music/pages/song/player.vue?vue&type=template&id=108ee09c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    navBar: function() {
      return __webpack_require__.e(/*! import() | components/nav-bar/nav-bar */ "components/nav-bar/nav-bar").then(__webpack_require__.bind(null, /*! @/components/nav-bar/nav-bar.vue */ 93))
    },
    uniIcons: function() {
      return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 100))
    },
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 108))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 73:
/*!*******************************************************************************!*\
  !*** F:/workSpace/wx/wx-music/pages/song/player.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./player.vue?vue&type=script&lang=js& */ 74);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/workSpace/wx/wx-music/pages/song/player.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















































































var _vuex = __webpack_require__(/*! vuex */ 8);



var _player = __webpack_require__(/*! ../../api/player.js */ 75);







var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var popupShare = function popupShare() {Promise.all(/*! require.ensure | components/uni-popup/popupShare */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/popupShare")]).then((function () {return resolve(__webpack_require__(/*! ../../components/uni-popup/popupShare.vue */ 185));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var playBottom = function playBottom() {__webpack_require__.e(/*! require.ensure | pages/song/components/playBottom */ "pages/song/components/playBottom").then((function () {return resolve(__webpack_require__(/*! ./components/playBottom.vue */ 192));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var popList = function popList() {Promise.all(/*! require.ensure | components/popList */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/popList")]).then((function () {return resolve(__webpack_require__(/*! ../../components/popList.vue */ 199));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
var update = true;
var db = wx.cloud.database();var _default =
{
  components: {
    playBottom: playBottom,
    popList: popList,
    popupShare: popupShare },

  data: function data() {
    return {
      color: '#fff',
      bgColor: "",
      song: {
        id: '',
        url: '',
        name: '',
        singer: '',
        time: 0,
        picUrl: '' },

      isCanPlay: true, //资源是否有用
      isPlay: true, //是否播放
      lyric: [], //歌词
      lycur: '',
      isLyric: false, //是否显示全部歌词
      lyricIndex: 0, //定位当前歌词
      lyIndex: 0, //显示部分时控制高亮歌词
      ctrolIndex: 0, //全部显示时控制高亮歌词
      curPlayIndex: 0, //当前播放歌曲在list内的索引
      playTime: 0,
      curPlayTime: 0,
      height: 0, //内容高度
      leftIcon: 'back',
      likeSong: {}, //收藏歌曲
      isLike: false, //是否收藏
      userId: "" //用户收藏id
    };
  },
  onLoad: function onLoad(param) {var _this = this;
    if (!param.songId) {
      return;
    }
    uni.getSystemInfo({
      success: function success(res) {
        _this.height = res.windowHeight * (750 / res.windowWidth) - _this.
        topHeight; //将高度乘以换算后的该设备的rpx与px的比例
      } });

    var id = param.songId;
    this.curPlayIndex = Number(param.index);
    this.initPlay(id);
    this.judgeLike(id);
    if (param.list) {
      var list = JSON.parse(decodeURIComponent(param.list));
      this.setAudiolist(list);
      // console.log(list)
    }
  },
  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapGetters)(['topHeight', 'playdetail', 'audiolist', 'isplayingmusic'])), {}, {
    playTimeNum: function playTimeNum() {
      return this.$util.formatTime(this.playTime);
    },
    curPlayTimeNum: function curPlayTimeNum() {
      return this.$util.formatTime(this.curPlayTime);
    } }),

  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['setAudiolist', 'setPlaydetail', 'setIsplayingmusic', 'setIsplayactive'])), {}, {
    shareWX: function shareWX() {var _this2 = this;
      uni.getStorage({
        key: 'userInfo',
        success: function success(res) {
          uni.share({
            provider: "weixin",
            scene: "WXSceneSession",
            type: 0,
            href: "http://uniapp.dcloud.io/",
            title: "uni-app分享",
            summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
            imageUrl: "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png",
            success: function success(res) {
              console.log("success:" + JSON.stringify(res));
            },
            fail: function fail(err) {
              console.log("fail:" + JSON.stringify(err));
            } });

        }, fail: function fail(err) {
          _this2.authority();
        } });

    },
    openShare: function openShare() {var _this3 = this;
      uni.getStorage({
        key: 'userInfo',
        success: function success(res) {
          _this3.$refs.share.open('bottom');
        }, fail: function fail(err) {
          uni.getUserProfile({
            desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: function success(res) {
              _this3.$refs.share.open('bottom');
              var userInfo = {
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl };

              uni.setStorage({
                key: 'userInfo',
                data: userInfo });

            },
            fail: function fail() {
              uni.showToast({
                title: "为了更好的功能体验,请先登录授权",
                icon: "none" });

            } });

        } });

    },
    opentList: function opentList() {
      this.$refs.popup.open('bottom');
    },
    closeList: function closeList() {
      this.$refs.popup.close();
    },
    //进度条
    sliderChange: function sliderChange(e) {
      this.curPlayTime = e.detail.value;
      this.$au_player.seek(this.curPlayTime);
    },
    //上一首播放
    prev: function prev() {
      var index = this.$refs.child.getIndex('prev');
      this.curPlayIndex = index;
      this.initPlay(this.audiolist[index].id);
    },
    //下一首播放
    next: function next(isAuto) {
      var index = this.$refs.child.getIndex('next', isAuto);
      this.curPlayIndex = index;
      // console.log(this.audiolist[index])
      this.initPlay(this.audiolist[index].id);
    },
    //获取歌曲数据并开始播放
    initPlay: function initPlay(id) {var _this4 = this;
      _vue.default.prototype.cusPlay = this.onPlayFn;
      _vue.default.prototype.cusTimeUpdate = this.onTimeUpdateFn;
      _vue.default.prototype.cusEnded = this.onEndedFn;
      Promise.all([(0, _player.apiSong)({
        id: id }),
      (0, _player.apiSongDetail)({
        ids: id })]).
      then(function (res) {
        // console.log(res[0])
        var surl = res[0].data[0].url;
        if (!surl) {
          _this4.isCanPlay = false;
          setTimeout(function () {
            uni.showToast({
              icon: 'none',
              title: '资源已失效!请返回' });

          }, 1000);
          return;
        }
        var sdetail = res[1].songs[0];
        // console.log(sdetail)
        var singer = sdetail.ar.map(function (t) {
          return t.name;
        }).join('/');
        _this4.lycur = '';
        _this4.song = {
          id: id,
          url: surl,
          name: sdetail.name,
          picUrl: sdetail.al.picUrl,
          singer: singer,
          time: Math.floor(sdetail.dt / 1000) // 播放时长
        };
        // console.log(this.song)
        uni.setNavigationBarTitle({
          title: _this4.song.name });

        _this4.setPlaydetail({
          index: _this4.curPlayIndex,
          id: id,
          picUrl: sdetail.al.picUrl,
          desc: sdetail.name,
          time: Math.floor(sdetail.dt / 1000) // 播放时长
        });
        _this4.$au_player.url = _this4.song.url;
        _this4.$au_player.title = _this4.song.name;
        _this4.$au_player.coverImgUrl = _this4.song.picUrl;
        _this4.$au_player.singer = _this4.song.singer;
        //h5
        _this4.$au_player.autoplay = true;
        //app
        _this4.$au_player.src = _this4.song.url;

        var OldSong = {
          id: id,
          name: sdetail.name,
          singer: singer };

        // console.log(OldSong)
        _this4.saveSong(OldSong);
        _this4.likeSong = OldSong;
        // console.log(this.likeSong)

      }).catch(function (e) {
        console.info(e);
        _this4.setIsplayactive(false);
      });
      //歌词可以 不用同步加载
      (0, _player.apiLyic)({
        id: id }).
      then(function (res) {
        // console.log(res)
        if (res.uncollected) {
          console.log('暂未收录歌词');
          _this4.lycur = '~暂未收录歌词~';
          return;
        }
        if (res.nolyric) {
          _this4.lycur = '~此歌曲为纯音乐，请欣赏~';
          return;
        }
        var lines = res.lrc.lyric.split('\n');
        var target = [];
        for (var k in lines) {
          var timeMatch = lines[k].match(/\[(\d+:\d+\.\d+)\]/);
          var time = null;
          if (timeMatch) {
            var ts = timeMatch[1].split(':');
            time = Number(ts[0]) * 60 + Number(ts[1]);
          }
          target.push({
            time: time,
            text: lines[k].replace(/^.+?\]/, '') });

        }
        _this4.lyric = target;
        // console.log(this.lyric)
      });
      this.$forceUpdate();
    },
    //歌曲正在播放
    onPlayFn: function onPlayFn() {
      this.playTime = this.song.time;
      this.isPlay = true;
      this.setIsplayingmusic(true);
      this.setIsplayactive(true);
      // console.log('onplaying')
    },
    //根据时间处理歌词，显示高亮
    onTimeUpdateFn: function onTimeUpdateFn() {
      var curtime = this.$au_player.currentTime;
      this.curPlayTime = Math.floor(curtime);
      var lyric = this.lyric;
      if (update && lyric.length > 0) {
        for (var i = 0; i < lyric.length - 1; i++) {
          if (lyric[i] !== null && curtime - lyric[i].time < 0.15) {
            this.lyricIndex = i - 1;
            if (this.lyricIndex > 2) {
              this.lyIndex = this.lyricIndex - 2;
            } else if (this.lyricIndex > 6) {
              this.ctrolIndex = this.lyricIndex - 6;
            } else {
              this.lyIndex = 0;
              this.ctrolIndex = 0;
            }
            break;
          }
        }
      }
      this.$forceUpdate();
    },
    // //歌曲播放结束
    onEndedFn: function onEndedFn() {
      // console.log('ended')
      this.setIsplayingmusic(false);
      this.setIsplayactive(false);
      this.next(true);
    },
    //保存歌曲到历史记录
    saveSong: function saveSong(OldSong) {
      uni.getStorage({
        key: 'OldSongs',
        success: function success(res) {
          // console.log(res.data)
          var list = res.data;
          list.forEach(function (item, index) {
            if (item.id == OldSong.id) {
              list.splice(index, 1);
            }
          });
          list.unshift(OldSong);
          uni.setStorage({
            key: 'OldSongs',
            data: list });

        },
        fail: function fail(err) {
          uni.setStorage({
            key: 'OldSongs',
            data: [OldSong] });

        } });

    },
    like: function like() {
      this.isLike = true;
      var id = this.userId;
      var likeSong = this.likeSong;
      db.collection('userLike').doc(id).get({
        success: function success(res) {
          // console.log("成功："+res);
          var song = res.data.like_songs;
          // console.log(re.data);
          song.unshift(likeSong);
          // console.log(song);
          db.collection('userLike').doc(id).update({
            data: {
              like_songs: song },

            success: function success(res) {
              // console.log(es.data)
            },
            fail: function fail(err) {
              // console.log(er);
            } });

        },
        fail: function fail(err) {
          // console.log("失败："+err);
          db.collection('userLike').add({
            data: {
              _id: id,
              like_songs: [likeSong] },

            success: function success(res) {
              // console.log(res)
            } });

        } });

    },
    //添加收藏
    addLike: function addLike() {var _this5 = this;
      uni.getStorage({
        key: 'userInfo',
        success: function success(res) {
          _this5.like();
        }, fail: function fail(err) {
          uni.getUserProfile({
            desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: function success(res) {
              _this5.like();
              var userInfo = {
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl };

              uni.setStorage({
                key: 'userInfo',
                data: userInfo });

            },
            fail: function fail() {
              uni.showToast({
                title: "为了更好的功能体验,请先登录授权",
                icon: "none" });

            } });

        } });

    },
    //取消收藏
    cancleLike: function cancleLike() {
      this.isLike = false;
      var id = this.userId;
      var _id = this.song.id;
      db.collection('userLike').doc(id).get({
        success: function success(res) {
          var song = res.data.like_songs;
          song.forEach(function (item, index) {
            if (item.id == _id) {
              song.splice(index, 1);
            }
          });
          // console.log(song);
          db.collection('userLike').doc(id).update({
            data: {
              like_songs: song },

            success: function success(res) {
              // console.log(es.data)
            },
            fail: function fail(err) {
              // console.log(er);
            } });

        } });

    },
    //判断歌曲是否收藏
    judgeLike: function judgeLike(id) {var _this6 = this;
      uni.getStorage({
        key: "userId",
        success: function success(res) {
          var _id = res.data;
          _this6.userId = _id;
          db.collection('userLike').doc(_id).get({
            success: function success(res) {
              console.log("成功：");
              var song = res.data.like_songs;
              song.forEach(function (item) {
                if (item.id == id) {
                  _this6.isLike = true;
                }
              });
            } });

        } });

      this.$forceUpdate();
      // console.log(this.isLike);
    },
    //控制歌曲播放
    playCtrol: function playCtrol() {
      if (this.isPlay) {
        this.$au_player.pause();
      } else {
        this.$au_player.play();
      }
      this.isPlay = !this.isPlay;
      this.setIsplayingmusic(this.isPlay);
    },
    //显示或隐藏全部歌词
    toLyric: function toLyric() {
      this.isLyric = !this.isLyric;
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 76:
/*!****************************************************************************************************************!*\
  !*** F:/workSpace/wx/wx-music/pages/song/player.vue?vue&type=style&index=0&id=108ee09c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_style_index_0_id_108ee09c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./player.vue?vue&type=style&index=0&id=108ee09c&lang=scss&scoped=true& */ 77);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_style_index_0_id_108ee09c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_style_index_0_id_108ee09c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_style_index_0_id_108ee09c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_style_index_0_id_108ee09c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_player_vue_vue_type_style_index_0_id_108ee09c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/workSpace/wx/wx-music/pages/song/player.vue?vue&type=style&index=0&id=108ee09c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[69,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/song/player.js.map