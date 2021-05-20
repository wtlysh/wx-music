(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/popList"],{

/***/ 184:
/*!*******************************************************!*\
  !*** F:/workSpace/wx/wx-music/components/popList.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popList.vue?vue&type=template&id=593ad0b8&scoped=true& */ 185);
/* harmony import */ var _popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popList.vue?vue&type=script&lang=js& */ 187);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _popList_vue_vue_type_style_index_0_id_593ad0b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popList.vue?vue&type=style&index=0&id=593ad0b8&lang=scss&scoped=true& */ 189);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "593ad0b8",
  null,
  false,
  _popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/popList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/*!**************************************************************************************************!*\
  !*** F:/workSpace/wx/wx-music/components/popList.vue?vue&type=template&id=593ad0b8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./popList.vue?vue&type=template&id=593ad0b8&scoped=true& */ 186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_template_id_593ad0b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 186:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/workSpace/wx/wx-music/components/popList.vue?vue&type=template&id=593ad0b8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 187:
/*!********************************************************************************!*\
  !*** F:/workSpace/wx/wx-music/components/popList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./popList.vue?vue&type=script&lang=js& */ 188);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/workSpace/wx/wx-music/components/popList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































var _vuex = __webpack_require__(/*! vuex */ 8);



var _player = __webpack_require__(/*! ../api/player.js */ 74);



var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  props: {
    isOpentList: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      playModel: 0, //播放模式
      isPlay: false, //当前是否播放	
      playTime: 0 };

  },
  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapGetters)(['playdetail', 'audiolist'])), {}, {
    playTimeNum: function playTimeNum() {
      return this.$util.formatTime(this.playTime);
    } }),

  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['setPlaydetail', 'setIsplayingmusic', 'setIsplayactive'])), {}, {
    //设置播放模式
    setPlayModel: function setPlayModel() {
      this.playModel = this.playModel == 2 ? 0 : this.playModel + 1;
      uni.showToast({
        icon: 'none',
        title: ['列表循环', '随机播放', '单曲循环'][this.playModel] });

    },
    getIndex: function getIndex(type, isAuto) {
      //['列表循环', '随机播放', '单曲循环']
      var next = 0;
      var prev = 0;
      var cur = this.playdetail.index;
      var last = this.audiolist.length - 1;
      if (this.playModel === 0 || this.playModel === 2) {
        next = cur == last ? 0 : cur + 1;
        prev = cur == 0 ? last : cur - 1;
      }
      if (this.playModel === 1) {
        next = Math.floor(Math.random() * (last + 1));
        prev = Math.floor(Math.random() * (last + 1));
      }
      if (isAuto && this.playModel === 2) {
        next = cur;
      }
      return type == 'next' ? next : prev;
    },
    //初始化播放
    initPlay: function initPlay(id, index) {var _this = this;
      // Vue.prototype.cusPlay = this.onPlayFn
      // Vue.prototype.cusEnded = this.onEndedFn
      var pages = getCurrentPages();
      var page = pages[pages.length - 1].route;
      if (page == 'pages/song/player') {
        this.$emit('play', id);
        return;
      }
      Promise.all([(0, _player.apiSong)({
        id: id }),
      (0, _player.apiSongDetail)({
        ids: id })]).
      then(function (res) {
        // console.log(res[0])
        var surl = res[0].data[0].url;
        if (!surl) {
          setTimeout(function () {
            uni.showToast({
              icon: 'none',
              title: '资源已失效!请返回' });

          }, 1000);
          return;
        }
        var sdetail = res[1].songs[0];
        var singer = sdetail.ar[0].name;
        var song = {
          id: id,
          url: surl,
          name: sdetail.name,
          picUrl: sdetail.al.picUrl,
          singer: singer,
          time: Math.floor(sdetail.dt / 1000) // 播放时长
        };
        _this.setPlaydetail({
          index: index,
          id: id,
          picUrl: song.picUrl,
          desc: song.name,
          time: song.time // 播放时长
        });
        _this.$au_player.url = song.url;
        _this.$au_player.title = song.name;
        _this.$au_player.coverImgUrl = song.picUrl;
        _this.$au_player.singer = song.singer;
        //h5
        _this.$au_player.autoplay = true;
        //app
        _this.$au_player.src = surl;

        var OldSong = {
          id: id,
          name: sdetail.name,
          ar: sdetail.ar };

        _this.saveSong(OldSong);
      }).catch(function (e) {
        // console.info(e)
        _this.setIsplayactive(false);
      });
    },
    //歌曲正在播放
    onPlayFn: function onPlayFn() {
      this.playTime = this.song.time;
      this.isPlay = true;
      this.setIsplayingmusic(true);
      this.setIsplayactive(true);
      // console.log('onplaying')
    },
    //歌曲播放结束
    onEndedFn: function onEndedFn() {
      // console.log('ended')
      this.isPlay = false;
      this.setIsplayingmusic(false);
      this.setIsplayactive(false);
      this.next(true);
    },
    next: function next(isAuto) {
      var index = this.getIndex('next', isAuto);
      this.initPlay(this.audiolist[index].id);
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
    //关闭列表弹窗
    closeList: function closeList() {
      this.$emit('close');
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 189:
/*!*****************************************************************************************************************!*\
  !*** F:/workSpace/wx/wx-music/components/popList.vue?vue&type=style&index=0&id=593ad0b8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_style_index_0_id_593ad0b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./popList.vue?vue&type=style&index=0&id=593ad0b8&lang=scss&scoped=true& */ 190);
/* harmony import */ var _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_style_index_0_id_593ad0b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_style_index_0_id_593ad0b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_style_index_0_id_593ad0b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_style_index_0_id_593ad0b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_SoftWare_HBuilderX_3_1_7_20210330_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_popList_vue_vue_type_style_index_0_id_593ad0b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 190:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/workSpace/wx/wx-music/components/popList.vue?vue&type=style&index=0&id=593ad0b8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/popList.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/popList-create-component',
    {
        'components/popList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(184))
        })
    },
    [['components/popList-create-component']]
]);
