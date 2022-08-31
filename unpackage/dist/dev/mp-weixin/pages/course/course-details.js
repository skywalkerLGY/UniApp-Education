(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/course/course-details"],{

/***/ 79:
/*!*********************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/main.js?{"page":"pages%2Fcourse%2Fcourse-details"} ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _courseDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/course/course-details.vue */ 80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_courseDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 80:
/*!**************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/course-details.vue ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-details.vue?vue&type=template&id=0c09be5b& */ 81);
/* harmony import */ var _course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-details.vue?vue&type=script&lang=js& */ 83);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _course_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-details.vue?vue&type=style&index=0&lang=scss& */ 86);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/course/course-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/*!*********************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/course-details.vue?vue&type=template&id=0c09be5b& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./course-details.vue?vue&type=template&id=0c09be5b& */ 82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_template_id_0c09be5b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 82:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/course-details.vue?vue&type=template&id=0c09be5b& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      $event.stopPropagation()
      $event.preventDefault()
      return (function() {})($event)
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 83:
/*!***************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/course-details.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./course-details.vue?vue&type=script&lang=js& */ 84);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 84:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/course-details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 23));












































var _courseDetailsTabs = _interopRequireDefault(__webpack_require__(/*! @/config/course-details-tabs.js */ 85));







var _course = _interopRequireDefault(__webpack_require__(/*! @/api/course.js */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var courseHeader = function courseHeader() {__webpack_require__.e(/*! require.ensure | pages/course/components/course-header */ "pages/course/components/course-header").then((function () {return resolve(__webpack_require__(/*! ./components/course-header.vue */ 330));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tabBar = function tabBar() {__webpack_require__.e(/*! require.ensure | components/common/tab-bar */ "components/common/tab-bar").then((function () {return resolve(__webpack_require__(/*! @/components/common/tab-bar.vue */ 275));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var courseInfo = function courseInfo() {__webpack_require__.e(/*! require.ensure | pages/course/components/course-info */ "pages/course/components/course-info").then((function () {return resolve(__webpack_require__(/*! ./components/course-info.vue */ 337));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var courseDir = function courseDir() {__webpack_require__.e(/*! require.ensure | pages/course/components/course-dir */ "pages/course/components/course-dir").then((function () {return resolve(__webpack_require__(/*! ./components/course-dir.vue */ 344));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var courseComment = function courseComment() {__webpack_require__.e(/*! require.ensure | pages/course/components/course-comment */ "pages/course/components/course-comment").then((function () {return resolve(__webpack_require__(/*! ./components/course-comment.vue */ 351));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var courseGroup = function courseGroup() {Promise.all(/*! require.ensure | pages/course/components/course-group */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/course/components/course-group")]).then((function () {return resolve(__webpack_require__(/*! ./components/course-group.vue */ 358));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var bottomBtn = function bottomBtn() {__webpack_require__.e(/*! require.ensure | pages/course/components/bottom-btn */ "pages/course/components/bottom-btn").then((function () {return resolve(__webpack_require__(/*! ./components/bottom-btn.vue */ 366));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  components: {
    courseHeader: courseHeader,
    tabBar: tabBar,
    courseInfo: courseInfo,
    courseDir: courseDir,
    courseComment: courseComment,
    courseGroup: courseGroup,
    bottomBtn: bottomBtn },


  data: function data() {
    return {
      tabs: _courseDetailsTabs.default, // tabs:tabs 标签选项卡数据
      tabIndex: 0, //当前所在选项下标
      pageHeight: 3000, // 手机的视口高度
      statusNavHeight: 0, // 状态栏+导航栏高度
      enableScroll: false, //详情区域是否允许纵向滚动，false不允许
      detailTop: 0, //详情区域距离顶部距离

      id: null, //课程id
      course: {}, // 课程基本信息
      chapterList: [], //章节信息
      commentList: [], //评论信息
      groupList: [], //套餐信息
      isBuy: false, // 是否购买，默认未购买

      videoUrl: null, // 播放视频地址
      videoContext: null, // 播放器实例
      activeObj: {} // 当前点击的第几节下标
    };
  },

  onLoad: function onLoad(option) {
    // console.log(option.id)
    this.getPageHeight();

    //禁用点击状态栏回到顶部




    // 获取课程id，查询课程数据
    // this.id = option.id
    this.loadData();
  },

  // 第1次页面渲染完后触发
  onReady: function onReady() {var _this = this;
    // 获取详情区域距离顶部高度
    var view = uni.createSelectorQuery().in(this).select(".course-details");
    view.fields({
      rect: true },
    function (data) {
      // console.log("节点的顶部高度为" + data.top);
      _this.detailTop = data.top;
    }).exec();

    // 获取当前播放实例
    this.videoContext = uni.createVideoContext('playVideo', this);
  },

  // 监听页面滚动到底部
  onReachBottom: function onReachBottom() {
    console.log('监听页面滚动到底部');
    //页面到达底部，开启详情区域滚动
    this.enableScroll = true;
  },

  // 监听页面滚动
  onPageScroll: function onPageScroll(e) {
    // console.log('监听页面滚动', e, this.detailTop)
    // console.log(this.detailTop - this.statusNavHeight)
    if (this.detailTop - this.statusNavHeight <= e.scrollTop) {
      // 页面到达底部则将详情区域滚动条开启
      this.enableScroll = true;
      return;
    }


    // 当前滚动条距离顶部距离 小于 详情区域到达顶部高度
    if (this.enableScroll && e.scrollTop < this.detailTop) {
      // 禁用详情滚动
      this.enableScroll = false;
    }

  },

  // 监听app端右上角分享按钮

































  // 小程序端分享（onLoad)
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: this.course.title,
      path: this.$util.routePath() };

  },


  methods: {
    // 左右切换
    changeTab: function changeTab(e) {
      this.tabIndex = e.detail.current;

      // 页面回到底部
      uni.pageScrollTo({
        scrollTop: this.detailTop,
        duration: 300 });

    },

    // 获取当前页面视口高度
    getPageHeight: function getPageHeight() {
      var res = uni.getSystemInfoSync();
      // 平台
      var system = res.platform;
      // 状态栏高度
      var statusBarHeight = res.statusBarHeight;
      if (system === 'android') {
        // 状态导航高度
        this.statusNavHeight = statusBarHeight + 48;
      } else if (system === 'ios') {
        this.statusNavHeight = statusBarHeight + 44;
      }
      // console.log(res.screenHeight , res.windowHeight)
      this.pageHeight = res.screenHeight - this.statusNavHeight;
    },

    // scrollView组件滚动到顶部
    scrolltoupper: function scrolltoupper() {
      // 1. 让页面滚动条回到顶部
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 150 });

      // 2. 禁用详情scrollView滚动
      this.enableScroll = false;
    },

    // 禁用点击状态栏回到顶部
    noStatusScrollTop: function noStatusScrollTop() {
      // 获取当前页面实例
      var webView = this.$scope.$getAppWebview();
      webView.setStyle({ 'scrollsToTop': false });
    },

    // 初始化课程数据
    loadData: function loadData() {
      // 0. 判断是否已购买
      this.getCourseIsBuy();
      // 1. 查询课程基本信息
      this.getCourseById();
      // 2. 查询章节列表
      this.getChapterSectionList();
      // 3. 查询评论列表
      this.getCourseCommentList();
      // 4. 查询组合套餐列表
      this.getCourseGroupList();
    },

    getCourseIsBuy: function getCourseIsBuy() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var isLogin, _yield$api$getCourseI, data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                //未登录不用跳转登录页
                isLogin = _this2.$util.isLogin({ nav: false });if (!
                isLogin) {_context.next = 7;break;}_context.next = 4;return (

                  _course.default.getCourseIsBuy(_this2.id));case 4:_yield$api$getCourseI = _context.sent;data = _yield$api$getCourseI.data;
                _this2.isBuy = data.isBuy;
                // console.log('isBuy', this.isBuy)
              case 7:case "end":return _context.stop();}}}, _callee);}))();
    },

    // 1. 查询课程基本信息
    getCourseById: function getCourseById() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _yield$api$getCourseB, data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  _course.default.getCourseById(_this3.id));case 2:_yield$api$getCourseB = _context2.sent;data = _yield$api$getCourseB.data;
                // console.log('查询课程基本信息', data)
                _this3.course = data;
                // 将当前课程标题动态传递给导航
                uni.setNavigationBarTitle({
                  title: data.title });case 6:case "end":return _context2.stop();}}}, _callee2);}))();

    },

    // 2. 查询章节列表
    getChapterSectionList: function getChapterSectionList() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _yield$api$getChapter, data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _course.default.getChapterSectionList(_this4.id));case 2:_yield$api$getChapter = _context3.sent;data = _yield$api$getChapter.data;
                // console.log('查询章节列表', data)
                _this4.chapterList = data;case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },

    // 3. 查询评论列表
    getCourseCommentList: function getCourseCommentList() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var _yield$api$getCourseC, data;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                  _course.default.getCourseCommentList(_this5.id));case 2:_yield$api$getCourseC = _context4.sent;data = _yield$api$getCourseC.data;
                // console.log('查询评论列表', data)
                _this5.commentList = data;case 5:case "end":return _context4.stop();}}}, _callee4);}))();
    },

    // 4. 查询组合套餐列表
    getCourseGroupList: function getCourseGroupList() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _yield$api$getCourseG, data;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  _course.default.getCourseGroupList(_this6.id));case 2:_yield$api$getCourseG = _context5.sent;data = _yield$api$getCourseG.data;
                // console.log('查询组合套餐列表', data)
                _this6.groupList = data;case 5:case "end":return _context5.stop();}}}, _callee5);}))();
    },

    // 点击底部按钮触发
    clickBottom: function clickBottom() {
      if (this.isBuy || this.course.isFree) {
        // 已购买过或免费，跳转视频播放页面
        this.navTo("/pages/course/course-play?id=".concat(this.id), { login: true });
      } else {
        // 未购买过，跳转确认购买页
        this.navTo("/pages/order/confirm-buy?course=" + encodeURIComponent(JSON.stringify(this.course)), { login: true });
      }
    },

    // 关闭播放窗口
    closePlay: function closePlay() {
      this.videoContext.stop();
      this.videoUrl = null;
    },

    // 试看视频
    playVideo: function playVideo(obj) {var _this7 = this;
      // console.log( obj.section.videoUrl )
      if (this.isBuy) {
        // 已经购买，则直接跳转到视频播放列表页面
        this.navTo("/pages/course/course-play?id=".concat(this.id), { login: true });
        return;
      }
      //解决小程序高亮显示问题
      this.activeObj = obj.activeObj;
      // 弹出播放窗口
      this.videoUrl = obj.section.videoUrl;
      this.$nextTick(function () {
        // 播放
        _this7.videoContext.play();
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 86:
/*!************************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/course-details.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./course-details.vue?vue&type=style&index=0&lang=scss& */ 87);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_course_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 87:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/course-details.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[79,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/course/course-details.js.map