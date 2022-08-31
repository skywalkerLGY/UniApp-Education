"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/main.js?{"page":"pages%2Fcourse%2FsubNVue%2Fvideo"} ***!
  \**********************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/course/subNVue/video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/course/subNVue/video'\n        _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsb0ZBQUc7QUFDWCxRQUFRLG9GQUFHO0FBQ1gsUUFBUSxvRkFBRztBQUNYLGdCQUFnQixvRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9jb3Vyc2Uvc3ViTlZ1ZS92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2NvdXJzZS9zdWJOVnVlL3ZpZGVvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/main.js?{"type":"appStyle"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "center": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "row": {
    "flexDirection": "row"
  },
  "column": {
    "flexDirection": "column"
  },
  "space-between": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "one": {
    "flex": 1
  },
  "placeholder": {
    "color": "#999999"
  },
  "text-ellipsis": {
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "WebkitLineClamp": 2,
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical",
    "whiteSpace": "normal"
  },
  "mask": {
    "zIndex": 99,
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.7)"
  }
}

/***/ }),
/* 4 */
/*!**************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/video.nvue?mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=6a50de76&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5e544b62\",\n  false,\n  _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/course/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQzZMO0FBQzdMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTBkZTc2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLzAyLWRldkluc3RhbGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjVlNTQ0YjYyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvdXJzZS9zdWJOVnVlL3ZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/video.nvue?vue&type=template&id=6a50de76&mpType=page ***!
  \********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=6a50de76&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/video.nvue?vue&type=template&id=6a50de76&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    [
      _c("view", { style: { height: _vm.statusBarHeight + "rpx" } }),
      _c(
        "u-video",
        {
          ref: "video",
          staticClass: ["video"],
          attrs: {
            poster: _vm.videoMidea.mainImage,
            src: _vm.videoMidea.videoUrl,
            controls: false,
            showFullscreenBtn: false,
            showCenterPlayBtn: false,
            showProgress: false
          },
          on: { ended: _vm.nextPlay, timeupdate: _vm.timeupdate }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              _vm.showControls
                ? _c("cover-view", { staticClass: ["controls-top", "row"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["iconfont"],
                        on: { click: _vm.backHandler }
                      },
                      [_vm._v("")]
                    ),
                    _c("u-text", { staticClass: ["title"] }, [
                      _vm._v(_vm._s(_vm.videoMidea.title))
                    ])
                  ])
                : _vm._e(),
              _c(
                "cover-view",
                {
                  staticClass: ["controls-center", "center"],
                  on: { click: _vm.showHideControls }
                },
                [
                  _vm.showControls && !_vm.play
                    ? _c(
                        "u-text",
                        {
                          staticClass: ["stop", "iconfont"],
                          on: { click: _vm.playVideo }
                        },
                        [_vm._v("")]
                      )
                    : _vm._e()
                ]
              ),
              _vm.showControls
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["controls-bottom", "row", "center"],
                      style: { width: _vm.controlsWidth + "px" }
                    },
                    [
                      _c("view", { staticClass: ["row"] }, [
                        !_vm.play
                          ? _c(
                              "u-text",
                              {
                                staticClass: ["video-btn", "iconfont"],
                                on: { click: _vm.playVideo }
                              },
                              [_vm._v("")]
                            )
                          : _c(
                              "u-text",
                              {
                                staticClass: ["video-btn", "iconfont"],
                                on: { click: _vm.playVideo }
                              },
                              [_vm._v("")]
                            ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["video-btn", "iconfont"],
                            on: { click: _vm.nextPlay }
                          },
                          [_vm._v("")]
                        )
                      ]),
                      _c("u-text", { staticClass: ["time"] }, [
                        _vm._v(_vm._s(_vm.currentStr))
                      ]),
                      _c(
                        "view",
                        { staticClass: ["bottom-slider"] },
                        [
                          _c("slider-bar", {
                            attrs: {
                              duration: _vm.duration,
                              current: _vm.current,
                              sliderWidth: _vm.sliderWidth,
                              direction: _vm.fullScreen ? "screenY" : "screenX",
                              rate: parseFloat(_vm.currentRate)
                            },
                            on: { change: _vm.change }
                          })
                        ],
                        1
                      ),
                      _c("u-text", { staticClass: ["time"] }, [
                        _vm._v(_vm._s(_vm.durationStr))
                      ]),
                      _c("view", { staticClass: ["row"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["video-btn"],
                            on: { click: _vm.showHideRateView }
                          },
                          [_vm._v(_vm._s(_vm.currentRate) + "x")]
                        ),
                        !_vm.fullScreen
                          ? _c(
                              "u-text",
                              {
                                staticClass: ["video-btn", "iconfont"],
                                on: { click: _vm.fullScreenHandler }
                              },
                              [_vm._v("")]
                            )
                          : _c(
                              "u-text",
                              {
                                staticClass: ["video-btn", "iconfont"],
                                on: { click: _vm.fullScreenHandler }
                              },
                              [_vm._v("")]
                            )
                      ])
                    ]
                  )
                : _vm._e(),
              _vm.rateView
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["center"],
                      class: _vm.fullScreen ? "rate-list-full" : "rate-list"
                    },
                    _vm._l(_vm.rates, function(rate, index) {
                      return _c(
                        "u-text",
                        {
                          key: index,
                          class: {
                            "rate-item-full": _vm.fullScreen,
                            "rate-item": !_vm.fullScreen,
                            active: rate === _vm.currentRate
                          },
                          on: {
                            click: function($event) {
                              _vm.clickRate(rate)
                            }
                          }
                        },
                        [_vm._v(_vm._s(rate) + "x")]
                      )
                    }),
                    0
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!**************************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThmLENBQWdCLCtmQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vMDItZGV2SW5zdGFsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8wMi1kZXZJbnN0YWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vMDItZGV2SW5zdGFsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vMDItZGV2SW5zdGFsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8wMi1kZXZJbnN0YWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vMDItZGV2SW5zdGFsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _sliderBar = _interopRequireDefault(__webpack_require__(/*! ./components/slider-bar.nvue */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar videoContext = null; // 定时器对象\nvar timer = null;var _default = { components: { sliderBar: _sliderBar.default }, data: function data() {return { statusBarHeight: 0, videoMidea: { id: 1, title: '01-项目需求分析和功能介绍', mainImage: '', //'https://gd4.alicdn.com/imgextra/i4/3603079088/O1CN01dczOSM2H0LvTowhkl_!!3603079088.png',\n        videoUrl: '' //'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=164016&resourceType=video&editionType=low&source=aliyun&playUrlType=url_oss'\n      }, play: false, // 正在播放\n      showControls: true, // 显示控制按钮\n      duration: 60, //当前视频总时长（秒） \n      current: 0, // 当前播放所在的时长（秒）\n      fullScreen: false, //是否全屏\n      controlsHeight: 0, // 控制层占用高\n      controlsWidth: 0, // 控制层占用宽\n      rates: ['0.8', '1.0', '1.25', '1.5', '2.0'], currentRate: '1.0', // 当前倍速率\n      rateView: false, // 显示隐藏倍速窗口\n      chapterList: [], //课程列表数据\n      activeObj: {} // 当前选中的课程下标\n    };}, onLoad: function onLoad() {var res = uni.getSystemInfoSync();this.statusBarHeight = res.statusBarHeight; // 屏幕的宽高\n    this.controlsHeight = res.screenHeight;this.controlsWidth = res.screenWidth; // 监听其他页面传递的数据\n    uni.$on('video', this.videoHandlerEvent);}, onUnload: function onUnload() {// 卸载页面时，移除监听事件 \n    uni.$off('video');}, watch: { fullScreen: function fullScreen(newVal, oldVal) {// 获取当前的宽度，用于交换宽度\n      var width = this.controlsWidth;this.controlsWidth = this.controlsHeight;this.controlsHeight = width;} }, mounted: function mounted() {// 获取播放组件实例\n    videoContext = this.$refs.video; // console.log('videoContext', videoContext)\n  }, beforeCreate: function beforeCreate() {// uni.requireNativePlugin('dom')\n    var domModule = weex.requireModule('dom');domModule.addRule('fontFace', { 'fontFamily': \"iconfont\", 'src': \"url('~@/static/icon/iconfont.ttf')\" });}, methods: { // course-play页面会传递数据进行触发到此方法\n    videoHandlerEvent: function videoHandlerEvent(e) {// console.log('接收到其他页面传递的数据', e)\n      switch (e.type) {case 'init': // 初始化数据\n          var course = e.params.course;this.videoMidea.mainImage = course.mainImage;this.videoMidea.id = course.id;__f__(\"log\", 'this.videoMidea.mainImage', this.videoMidea.mainImage, \" at pages/course/subNVue/video.nvue:167\"); // 选中下标\n          this.activeObj = e.params.activeObj; // 课程列表\n          this.chapterList = e.params.chapterList; //获取第1节课\n          var chapter = this.chapterList[this.activeObj.chapterIndex];var section = chapter && chapter.sectionList[this.activeObj.sectionIndex];if (section) {this.videoMidea.videoUrl = section.videoUrl || '';this.videoMidea.title = section.name;}break;case 'change': // 当前播放的下标，为了播放下一节课\n          this.activeObj = e.params.activeObj; // 播放视频\n          this.playSection(e.params.section);break;default:break;}\n    },\n\n    // 播放指定视频\n    playSection: function playSection(section) {var _this = this;\n      if (section && section.videoUrl) {\n        // 暂停\n        videoContext.pause();\n        // 获取新的播放地址\n        this.videoMidea.videoUrl = section.videoUrl;\n        this.videoMidea.title = section.name;\n        // 播放\n        setTimeout(function () {\n          videoContext.play();\n          _this.play = true;\n        }, 300);\n      } else {\n        uni.showToast({\n          title: '视频资源不存在',\n          icon: 'none' });\n\n      }\n    },\n\n    // 播放到当前视频未尾，播放下一节\n    nextPlay: function nextPlay(e) {var _this2 = this;\n      //console.log('e', e)\n      if (e && e.type === 'ended') {\n        // 播放到未尾\n        var autoPlay = uni.getStorageSync('auto-play');\n        if (!autoPlay) {\n          uni.showModal({\n            content: '是否自动播放下个视频?',\n            success: function success(res) {\n              // 点击确定\n              if (res.confirm) {\n                uni.setStorageSync('auto-play', true);\n              }\n              // 播放下个视频\n              _this2.nextPlay();\n            } });\n\n          return;\n        }\n      }\n\n      // 1. 获取当前章的下一节课，有一下课，则播放一下节\n      var chapter = this.chapterList[this.activeObj.chapterIndex];\n      var section = chapter && chapter.sectionList[this.activeObj.sectionIndex + 1];\n      if (section && section.videoUrl) {\n        // 播放当前章的下一节课\n        this.activeObj.sectionIndex++;\n        this.playSection(section);\n      } else {\n        // 2. 当前章没有一下节课，播放下一章第一节课\n        chapter = this.chapterList[this.activeObj.chapterIndex + 1];\n        if (chapter && chapter.sectionList && chapter.sectionList.length > 0) {\n          // 下一章第1节课\n          this.activeObj.chapterIndex++;\n          this.activeObj.sectionIndex = 0;\n          section = chapter.sectionList[this.activeObj.sectionIndex];\n          // 播放视频\n          this.playSection(section);\n        } else {\n          // 3. 没有一下章节(末尾)，暂停视频，提示：已观看最后一节课\n          videoContext.pause();\n          uni.showToast({\n            title: '已观看最后一节课',\n            icon: 'none' });\n\n          this.play = false;\n          this.showControls = true;\n        }\n      }\n\n    },\n\n    // 获取播放进度变化，视频总时长duration，播放当前时长currentTime\n    timeupdate: function timeupdate(event) {\n      // console.log('event', event)\n      this.duration = event.detail.duration;\n      this.current = event.detail.currentTime;\n    },\n\n    // 点击后退按钮\n    backHandler: function backHandler() {\n      if (this.fullScreen) {\n        // 全屏时，退出全屏\n        this.fullScreenHandler();\n      } else {\n        // 非全屏，返回上一页\n        uni.navigateBack();\n      }\n    },\n\n    // 播放或暂停视频\n    playVideo: function playVideo() {\n      if (this.play) {\n        // 暂停\n        videoContext.pause();\n      } else {\n        // 播放\n        videoContext.play();\n        // 隐藏控制按钮\n        this.showHideControls();\n      }\n      this.play = !this.play;\n    },\n\n    // 显示或隐藏控制层\n    showHideControls: function showHideControls() {var _this3 = this;\n      this.showControls = !this.showControls;\n\n      // 隐藏倍速视图\n      this.rateView = false;\n\n      // 定时隐藏控制层\n      if (this.showControls) {\n        timer = timer ? clearTimeout(timer) : null;\n        timer = setTimeout(function () {\n          _this3.showControls = false;\n        }, 3000); // 3秒隐藏\n      }\n    },\n\n    // 切换或退出全屏\n    fullScreenHandler: function fullScreenHandler() {\n      if (this.fullScreen) {\n        //退出全屏\n        videoContext.exitFullScreen();\n      } else {\n        // 切换到全屏\n        videoContext.requestFullScreen();\n      }\n      this.fullScreen = !this.fullScreen;\n    },\n\n\n    // 格式化时间 分钟:秒 \n    formatSeconds: function formatSeconds(totalSecond) {\n      var minute = parseInt(totalSecond / 60);\n      if (minute < 10) minute = \"0\" + minute;\n      var second = parseInt(totalSecond % 60);\n      if (second < 10) second = \"0\" + second;\n      var time = minute + \":\" + second;\n      if (totalSecond >= 0) {\n        return time;\n      } else {\n        return \"00:00\";\n      }\n    },\n\n    // 拖动进度条结束时触发，传递当前位置的秒数\n    change: function change(currentSecond) {\n      this.current = currentSecond;\n      // 跳转到指定位置播放\n      videoContext.seek(currentSecond);\n    },\n\n    // 点击倍速\n    clickRate: function clickRate(rate) {\n      this.currentRate = rate;\n      // 设置倍速，进行播放\n      videoContext.playbackRate(parseFloat(rate));\n      this.showHideRateView();\n    },\n\n    // 显示隐藏倍速窗口\n    showHideRateView: function showHideRateView() {\n      this.rateView = !this.rateView;\n    } },\n\n\n  computed: {\n    durationStr: function durationStr() {\n      return this.formatSeconds(this.duration);\n    },\n    currentStr: function currentStr() {\n      return this.formatSeconds(this.current);\n    },\n\n    // 进度条宽度\n    sliderWidth: function sliderWidth() {\n      // (320+220) rpx 四个按钮+2个时间宽度, 转为px\n      return this.controlsWidth - uni.upx2px(320 + 220);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY291cnNlL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZBLHFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEEsd0IsQ0FFQTtBQUNBLGlCLGVBR0EsRUFDQSw2Q0FEQSxFQUdBLElBSEEsa0JBR0EsQ0FDQSxTQUNBLGtCQURBLEVBRUEsY0FDQSxLQURBLEVBRUEsdUJBRkEsRUFHQSxhQUhBLEVBR0E7QUFDQSxvQkFKQSxDQUlBO0FBSkEsT0FGQSxFQVNBLFdBVEEsRUFTQTtBQUNBLHdCQVZBLEVBVUE7QUFDQSxrQkFYQSxFQVdBO0FBQ0EsZ0JBWkEsRUFZQTtBQUNBLHVCQWJBLEVBYUE7QUFDQSx1QkFkQSxFQWNBO0FBQ0Esc0JBZkEsRUFlQTtBQUVBLGlEQWpCQSxFQWtCQSxrQkFsQkEsRUFrQkE7QUFDQSxxQkFuQkEsRUFtQkE7QUFFQSxxQkFyQkEsRUFxQkE7QUFDQSxtQkF0QkEsQ0FzQkE7QUF0QkEsTUF3QkEsQ0E1QkEsRUE4QkEsTUE5QkEsb0JBOEJBLENBQ0Esa0NBQ0EsMkNBRkEsQ0FJQTtBQUNBLDJDQUNBLHFDQU5BLENBUUE7QUFDQSw2Q0FDQSxDQXhDQSxFQTBDQSxRQTFDQSxzQkEwQ0EsQ0FDQTtBQUNBLHNCQUNBLENBN0NBLEVBK0NBLFNBR0EsVUFIQSxzQkFHQSxNQUhBLEVBR0EsTUFIQSxFQUdBLENBQ0E7QUFDQSxxQ0FDQSx5Q0FDQSw0QkFDQSxDQVJBLEVBL0NBLEVBMERBLE9BMURBLHFCQTBEQSxDQUNBO0FBQ0Esb0NBRkEsQ0FHQTtBQUNBLEdBOURBLEVBZ0VBLFlBaEVBLDBCQWdFQSxDQUNBO0FBQ0EsOENBQ0EsZ0NBQ0Esd0JBREEsRUFFQSwyQ0FGQSxJQUlBLENBdkVBLEVBeUVBLFdBQ0E7QUFDQSxxQkFGQSw2QkFFQSxDQUZBLEVBRUEsQ0FDQTtBQUNBLHVCQUNBLGFBQ0E7QUFDQSx1Q0FDQSw2Q0FDQSwrQkFDQSxnSEFMQSxDQU1BO0FBQ0EsOENBUEEsQ0FRQTtBQUNBLGtEQVRBLENBVUE7QUFDQSxzRUFDQSwwRUFDQSxjQUNBLGtEQUNBLHFDQUNBLENBQ0EsTUFDQSxlQUNBO0FBQ0EsOENBRkEsQ0FHQTtBQUNBLDZDQUNBLE1BQ0EsUUFDQSxNQTFCQTtBQTRCQSxLQWhDQTs7QUFrQ0E7QUFDQSxlQW5DQSx1QkFtQ0EsT0FuQ0EsRUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsRUFHQSxHQUhBO0FBSUEsT0FYQSxNQVdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0EsS0FyREE7O0FBdURBO0FBQ0EsWUF4REEsb0JBd0RBLENBeERBLEVBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBVEE7O0FBV0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQTFHQTs7QUE0R0E7QUFDQSxjQTdHQSxzQkE2R0EsS0E3R0EsRUE2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpIQTs7QUFtSEE7QUFDQSxlQXBIQSx5QkFvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVIQTs7QUE4SEE7QUFDQSxhQS9IQSx1QkErSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFJQTs7QUE0SUE7QUFDQSxvQkE3SUEsOEJBNklBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkEsRUFGQSxDQUlBO0FBQ0E7QUFDQSxLQTFKQTs7QUE0SkE7QUFDQSxxQkE3SkEsK0JBNkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRLQTs7O0FBeUtBO0FBQ0EsaUJBMUtBLHlCQTBLQSxXQTFLQSxFQTBLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBckxBOztBQXVMQTtBQUNBLFVBeExBLGtCQXdMQSxhQXhMQSxFQXdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUxBOztBQThMQTtBQUNBLGFBL0xBLHFCQStMQSxJQS9MQSxFQStMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwTUE7O0FBc01BO0FBQ0Esb0JBdk1BLDhCQXVNQTtBQUNBO0FBQ0EsS0F6TUEsRUF6RUE7OztBQXFSQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxjQUpBLHdCQUlBO0FBQ0E7QUFDQSxLQU5BOztBQVFBO0FBQ0EsZUFUQSx5QkFTQTtBQUNBO0FBQ0E7QUFDQSxLQVpBLEVBclJBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDwhLS0g54q25oCB5qCP6auY5bqm77yM5Li65LqG5pi+56S654q25oCB5qCPIC0tPlxyXG5cdFx0PHZpZXcgOnN0eWxlPVwie2hlaWdodDogc3RhdHVzQmFySGVpZ2h0ICsgJ3JweCd9XCI+PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlkZW8gcmVmPVwidmlkZW9cIiBjbGFzcz1cInZpZGVvXCIgIFxyXG5cdFx0XHQ6cG9zdGVyPVwidmlkZW9NaWRlYS5tYWluSW1hZ2VcIlxyXG5cdFx0XHQ6c3JjPVwidmlkZW9NaWRlYS52aWRlb1VybFwiXHJcblx0XHRcdDpjb250cm9scz1cImZhbHNlXCJcclxuXHRcdFx0OnNob3ctZnVsbHNjcmVlbi1idG49XCJmYWxzZVwiXHJcblx0XHRcdDpzaG93LWNlbnRlci1wbGF5LWJ0bj1cImZhbHNlXCJcclxuXHRcdFx0OnNob3ctcHJvZ3Jlc3M9XCJmYWxzZVwiXHJcblx0XHRcdEBlbmRlZD1cIm5leHRQbGF5XCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCJcclxuXHRcdFx0PlxyXG5cdFx0XHQ8IS0tIOWktOmDqCDlkI7pgIDvvIzmoIfpopggLS0+XHJcblx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY29udHJvbHMtdG9wIHJvd1wiIHYtaWY9XCJzaG93Q29udHJvbHNcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgQGNsaWNrLnN0b3A9XCJiYWNrSGFuZGxlclwiPiYjeGU2Nzk7PC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGVcIj57e3ZpZGVvTWlkZWEudGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLSDkuK3pl7TljLrln5/vvIzmkq3mlL7mjInpkq4gLS0+XHJcblx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY29udHJvbHMtY2VudGVyIGNlbnRlclwiIEBjbGljaz1cInNob3dIaWRlQ29udHJvbHNcIj5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwic2hvd0NvbnRyb2xzICYmICFwbGF5XCIgY2xhc3M9XCJzdG9wIGljb25mb250XCIgQGNsaWNrLnN0b3A9XCJwbGF5VmlkZW9cIj4mI3hlNjI1OzwvdGV4dD5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLSDlupXpg6jljLrln58gLS0+XHJcblx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY29udHJvbHMtYm90dG9tIHJvdyBjZW50ZXJcIiBcclxuXHRcdFx0XHR2LWlmPVwic2hvd0NvbnRyb2xzXCIgOnN0eWxlPVwie3dpZHRoOiBgJHtjb250cm9sc1dpZHRofXB4YH1cIj5cclxuXHRcdFx0XHQ8IS0tIOaSreaUvi/mmoLlgZzlkozkuIvkuIDoioIgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDwhLS0g5pKt5pS+IC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cIiFwbGF5XCIgQGNsaWNrPVwicGxheVZpZGVvXCIgY2xhc3M9XCJ2aWRlby1idG4gaWNvbmZvbnRcIj4mI3hlNjI1OzwvdGV4dD5cclxuXHRcdFx0XHRcdDwhLS0g5pqC5YGcIC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1lbHNlIEBjbGljaz1cInBsYXlWaWRlb1wiIGNsYXNzPVwidmlkZW8tYnRuIGljb25mb250XCI+JiN4ZTYyYzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8IS0tIOS4i+S4gOiKgiAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmlkZW8tYnRuIGljb25mb250XCIgQGNsaWNrPVwibmV4dFBsYXlcIj4mI3hlNjFiOzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PCEtLSDlvZPliY3mkq3mlL7ml7bplb8gLS0+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lXCI+e3tjdXJyZW50U3RyfX08L3RleHQ+XHJcblx0XHRcdFx0PCEtLSDov5vluqbmnaEgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tc2xpZGVyXCI+XHJcblx0XHRcdFx0XHQ8c2xpZGVyLWJhciA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpjdXJyZW50PVwiY3VycmVudFwiXHJcblx0XHRcdFx0XHRcdDpzbGlkZXJXaWR0aD1cInNsaWRlcldpZHRoXCIgOmRpcmVjdGlvbj1cImZ1bGxTY3JlZW4gPyAnc2NyZWVuWSc6ICdzY3JlZW5YJ1wiXHJcblx0XHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VcIlxyXG5cdFx0XHRcdFx0XHQ6cmF0ZT1cInBhcnNlRmxvYXQoY3VycmVudFJhdGUpXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvc2xpZGVyLWJhcj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDmgLvml7bplb8wMDowMCAtLT5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVcIj57e2R1cmF0aW9uU3RyfX08L3RleHQ+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDwhLS0g5YCN6YCfIC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aWRlby1idG5cIiBAY2xpY2s9XCJzaG93SGlkZVJhdGVWaWV3XCI+e3tjdXJyZW50UmF0ZX19eDwvdGV4dD5cclxuXHRcdFx0XHRcdDwhLS0g5YWo5bGPIC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cIiFmdWxsU2NyZWVuXCIgY2xhc3M9XCJ2aWRlby1idG4gaWNvbmZvbnRcIiBAY2xpY2s9XCJmdWxsU2NyZWVuSGFuZGxlclwiPiYjeGU2MjM7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSDpgIDlh7rlhajlsY8gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCB2LWVsc2UgY2xhc3M9XCJ2aWRlby1idG4gaWNvbmZvbnRcIiBAY2xpY2s9XCJmdWxsU2NyZWVuSGFuZGxlclwiPiYjeGU2MWU7PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLSDlgI3pgJ8gcmF0ZS1saXN0ICByYXRlLWl0ZW0tLT5cclxuXHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cInJhdGVWaWV3XCIgY2xhc3M9XCJjZW50ZXJcIiA6Y2xhc3M9XCJmdWxsU2NyZWVuID8gJ3JhdGUtbGlzdC1mdWxsJzogJ3JhdGUtbGlzdCcgXCI+XHJcblx0XHRcdFx0PHRleHQgdi1mb3I9XCIocmF0ZSwgaW5kZXgpIGluIHJhdGVzXCIgOmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRcdDpjbGFzcz1cIntcclxuXHRcdFx0XHRcdFx0J3JhdGUtaXRlbS1mdWxsJzogZnVsbFNjcmVlbiwgXHJcblx0XHRcdFx0XHRcdCdyYXRlLWl0ZW0nOiAhZnVsbFNjcmVlbixcclxuXHRcdFx0XHRcdFx0J2FjdGl2ZScgOiByYXRlID09PSBjdXJyZW50UmF0ZVxyXG5cdFx0XHRcdFx0IH1cIlxyXG5cdFx0XHRcdFx0QGNsaWNrLnN0b3A9XCJjbGlja1JhdGUocmF0ZSlcIj57e3JhdGV9fXg8L3RleHQ+XHJcblx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdDwvdmlkZW8+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRsZXQgdmlkZW9Db250ZXh0ID0gbnVsbFxyXG5cdFxyXG5cdC8vIOWumuaXtuWZqOWvueixoVxyXG5cdGxldCB0aW1lciA9IG51bGwgXHJcblx0XHJcblx0aW1wb3J0IHNsaWRlckJhciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLWJhci5udnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtzbGlkZXJCYXJ9LFxyXG5cdFx0XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCxcclxuXHRcdFx0XHR2aWRlb01pZGVhOiB7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdHRpdGxlOiAnMDEt6aG555uu6ZyA5rGC5YiG5p6Q5ZKM5Yqf6IO95LuL57uNJyxcclxuXHRcdFx0XHRcdG1haW5JbWFnZTogJycsIC8vJ2h0dHBzOi8vZ2Q0LmFsaWNkbi5jb20vaW1nZXh0cmEvaTQvMzYwMzA3OTA4OC9PMUNOMDFkY3pPU00ySDBMdlRvd2hrbF8hITM2MDMwNzkwODgucG5nJyxcclxuXHRcdFx0XHRcdHZpZGVvVXJsOiAnJywgLy8naHR0cDovL2Jhb2JhYi5rYWl5YW5hcHAuY29tL2FwaS92MS9wbGF5VXJsP3ZpZD0xNjQwMTYmcmVzb3VyY2VUeXBlPXZpZGVvJmVkaXRpb25UeXBlPWxvdyZzb3VyY2U9YWxpeXVuJnBsYXlVcmxUeXBlPXVybF9vc3MnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRwbGF5OiBmYWxzZSwgLy8g5q2j5Zyo5pKt5pS+XHJcblx0XHRcdFx0c2hvd0NvbnRyb2xzOiB0cnVlLCAvLyDmmL7npLrmjqfliLbmjInpkq5cclxuXHRcdFx0XHRkdXJhdGlvbjogNjAsIC8v5b2T5YmN6KeG6aKR5oC75pe26ZW/77yI56eS77yJIFxyXG5cdFx0XHRcdGN1cnJlbnQ6IDAsIC8vIOW9k+WJjeaSreaUvuaJgOWcqOeahOaXtumVv++8iOenku+8iVxyXG5cdFx0XHRcdGZ1bGxTY3JlZW46IGZhbHNlLCAvL+aYr+WQpuWFqOWxj1xyXG5cdFx0XHRcdGNvbnRyb2xzSGVpZ2h0OiAwLCAvLyDmjqfliLblsYLljaDnlKjpq5hcclxuXHRcdFx0XHRjb250cm9sc1dpZHRoOiAwLCAvLyDmjqfliLblsYLljaDnlKjlrr1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyYXRlczogWycwLjgnLCAnMS4wJywgJzEuMjUnLCAnMS41JywgJzIuMCddLFxyXG5cdFx0XHRcdGN1cnJlbnRSYXRlOiAnMS4wJywgLy8g5b2T5YmN5YCN6YCf546HXHJcblx0XHRcdFx0cmF0ZVZpZXc6IGZhbHNlLCAvLyDmmL7npLrpmpDol4/lgI3pgJ/nqpflj6NcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjaGFwdGVyTGlzdDogW10sIC8v6K++56iL5YiX6KGo5pWw5o2uXHJcblx0XHRcdFx0YWN0aXZlT2JqOiB7fSwgLy8g5b2T5YmN6YCJ5Lit55qE6K++56iL5LiL5qCHXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0Y29uc3QgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyDlsY/luZXnmoTlrr3pq5hcclxuXHRcdFx0dGhpcy5jb250cm9sc0hlaWdodCA9IHJlcy5zY3JlZW5IZWlnaHRcclxuXHRcdFx0dGhpcy5jb250cm9sc1dpZHRoID0gcmVzLnNjcmVlbldpZHRoXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDnm5HlkKzlhbbku5bpobXpnaLkvKDpgJLnmoTmlbDmja5cclxuXHRcdFx0dW5pLiRvbigndmlkZW8nLCB0aGlzLnZpZGVvSGFuZGxlckV2ZW50KVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdC8vIOWNuOi9vemhtemdouaXtu+8jOenu+mZpOebkeWQrOS6i+S7tiBcclxuXHRcdFx0dW5pLiRvZmYoJ3ZpZGVvJylcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0ZnVsbFNjcmVlbihuZXdWYWwsIG9sZFZhbCkge1xyXG5cdFx0XHRcdC8vIOiOt+WPluW9k+WJjeeahOWuveW6pu+8jOeUqOS6juS6pOaNouWuveW6plxyXG5cdFx0XHRcdGNvbnN0IHdpZHRoID0gdGhpcy5jb250cm9sc1dpZHRoXHJcblx0XHRcdFx0dGhpcy5jb250cm9sc1dpZHRoID0gdGhpcy5jb250cm9sc0hlaWdodFxyXG5cdFx0XHRcdHRoaXMuY29udHJvbHNIZWlnaHQgPSB3aWR0aFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHQvLyDojrflj5bmkq3mlL7nu4Tku7blrp7kvotcclxuXHRcdFx0dmlkZW9Db250ZXh0ID0gdGhpcy4kcmVmcy52aWRlb1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygndmlkZW9Db250ZXh0JywgdmlkZW9Db250ZXh0KVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0YmVmb3JlQ3JlYXRlKCkge1xyXG5cdFx0XHQvLyB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZG9tJylcclxuXHRcdFx0Y29uc3QgZG9tTW9kdWxlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxyXG5cdFx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdFx0J2ZvbnRGYW1pbHknOiBcImljb25mb250XCIsXHJcblx0XHRcdFx0J3NyYyc6IFwidXJsKCd+QC9zdGF0aWMvaWNvbi9pY29uZm9udC50dGYnKVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyBjb3Vyc2UtcGxheemhtemdouS8muS8oOmAkuaVsOaNrui/m+ihjOinpuWPkeWIsOatpOaWueazlVxyXG5cdFx0XHR2aWRlb0hhbmRsZXJFdmVudChlKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+aOpeaUtuWIsOWFtuS7lumhtemdouS8oOmAkueahOaVsOaNricsIGUpXHJcblx0XHRcdFx0c3dpdGNoIChlLnR5cGUpe1xyXG5cdFx0XHRcdFx0Y2FzZSAnaW5pdCc6XHJcblx0XHRcdFx0XHRcdC8vIOWIneWni+WMluaVsOaNrlxyXG5cdFx0XHRcdFx0XHRjb25zdCBjb3Vyc2UgPSBlLnBhcmFtcy5jb3Vyc2VcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb01pZGVhLm1haW5JbWFnZSA9IGNvdXJzZS5tYWluSW1hZ2VcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb01pZGVhLmlkID0gY291cnNlLmlkXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLnZpZGVvTWlkZWEubWFpbkltYWdlJywgdGhpcy52aWRlb01pZGVhLm1haW5JbWFnZSlcclxuXHRcdFx0XHRcdFx0Ly8g6YCJ5Lit5LiL5qCHXHJcblx0XHRcdFx0XHRcdHRoaXMuYWN0aXZlT2JqID0gZS5wYXJhbXMuYWN0aXZlT2JqXHJcblx0XHRcdFx0XHRcdC8vIOivvueoi+WIl+ihqFxyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXB0ZXJMaXN0ID0gZS5wYXJhbXMuY2hhcHRlckxpc3RcclxuXHRcdFx0XHRcdFx0Ly/ojrflj5bnrKwx6IqC6K++XHJcblx0XHRcdFx0XHRcdGNvbnN0IGNoYXB0ZXIgPSB0aGlzLmNoYXB0ZXJMaXN0W3RoaXMuYWN0aXZlT2JqLmNoYXB0ZXJJbmRleF1cclxuXHRcdFx0XHRcdFx0Y29uc3Qgc2VjdGlvbiA9IGNoYXB0ZXIgJiYgY2hhcHRlci5zZWN0aW9uTGlzdFt0aGlzLmFjdGl2ZU9iai5zZWN0aW9uSW5kZXhdXHJcblx0XHRcdFx0XHRcdGlmKHNlY3Rpb24pIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvTWlkZWEudmlkZW9VcmwgPSBzZWN0aW9uLnZpZGVvVXJsIHx8ICcnXHJcblx0XHRcdFx0XHRcdFx0dGhpcy52aWRlb01pZGVhLnRpdGxlID0gc2VjdGlvbi5uYW1lXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdjaGFuZ2UnOlxyXG5cdFx0XHRcdFx0XHQvLyDlvZPliY3mkq3mlL7nmoTkuIvmoIfvvIzkuLrkuobmkq3mlL7kuIvkuIDoioLor75cclxuXHRcdFx0XHRcdFx0dGhpcy5hY3RpdmVPYmogPSBlLnBhcmFtcy5hY3RpdmVPYmpcclxuXHRcdFx0XHRcdFx0Ly8g5pKt5pS+6KeG6aKRXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheVNlY3Rpb24oIGUucGFyYW1zLnNlY3Rpb24gKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOaSreaUvuaMh+WumuinhumikVxyXG5cdFx0XHRwbGF5U2VjdGlvbihzZWN0aW9uKSB7XHJcblx0XHRcdFx0aWYoc2VjdGlvbiAmJiBzZWN0aW9uLnZpZGVvVXJsKSB7XHJcblx0XHRcdFx0XHQvLyDmmoLlgZxcclxuXHRcdFx0XHRcdHZpZGVvQ29udGV4dC5wYXVzZSgpXHJcblx0XHRcdFx0XHQvLyDojrflj5bmlrDnmoTmkq3mlL7lnLDlnYBcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9NaWRlYS52aWRlb1VybCA9IHNlY3Rpb24udmlkZW9VcmxcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9NaWRlYS50aXRsZSA9IHNlY3Rpb24ubmFtZVxyXG5cdFx0XHRcdFx0Ly8g5pKt5pS+XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT4ge1xyXG5cdFx0XHRcdFx0XHR2aWRlb0NvbnRleHQucGxheSgpXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheSA9IHRydWVcclxuXHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfop4bpopHotYTmupDkuI3lrZjlnKgnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5pKt5pS+5Yiw5b2T5YmN6KeG6aKR5pyq5bC+77yM5pKt5pS+5LiL5LiA6IqCXHJcblx0XHRcdG5leHRQbGF5KGUpIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCdlJywgZSlcclxuXHRcdFx0XHRpZihlICYmIGUudHlwZSA9PT0gJ2VuZGVkJykge1xyXG5cdFx0XHRcdFx0Ly8g5pKt5pS+5Yiw5pyq5bC+XHJcblx0XHRcdFx0XHRjb25zdCBhdXRvUGxheSA9IHVuaS5nZXRTdG9yYWdlU3luYygnYXV0by1wbGF5JylcclxuXHRcdFx0XHRcdGlmKCFhdXRvUGxheSkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5piv5ZCm6Ieq5Yqo5pKt5pS+5LiL5Liq6KeG6aKRPycsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g54K55Ye756Gu5a6aXHJcblx0XHRcdFx0XHRcdFx0XHRpZihyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2F1dG8tcGxheScsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDmkq3mlL7kuIvkuKrop4bpopFcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubmV4dFBsYXkoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIDEuIOiOt+WPluW9k+WJjeeroOeahOS4i+S4gOiKguivvu+8jOacieS4gOS4i+ivvu+8jOWImeaSreaUvuS4gOS4i+iKglxyXG5cdFx0XHRcdGxldCBjaGFwdGVyID0gdGhpcy5jaGFwdGVyTGlzdFt0aGlzLmFjdGl2ZU9iai5jaGFwdGVySW5kZXhdXHJcblx0XHRcdFx0bGV0IHNlY3Rpb24gPSBjaGFwdGVyICYmIGNoYXB0ZXIuc2VjdGlvbkxpc3RbdGhpcy5hY3RpdmVPYmouc2VjdGlvbkluZGV4KzFdXHJcblx0XHRcdFx0aWYoc2VjdGlvbiAmJiBzZWN0aW9uLnZpZGVvVXJsKSB7XHJcblx0XHRcdFx0XHQvLyDmkq3mlL7lvZPliY3nq6DnmoTkuIvkuIDoioLor75cclxuXHRcdFx0XHRcdHRoaXMuYWN0aXZlT2JqLnNlY3Rpb25JbmRleCsrXHJcblx0XHRcdFx0XHR0aGlzLnBsYXlTZWN0aW9uKHNlY3Rpb24pXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHQvLyAyLiDlvZPliY3nq6DmsqHmnInkuIDkuIvoioLor77vvIzmkq3mlL7kuIvkuIDnq6DnrKzkuIDoioLor75cclxuXHRcdFx0XHRcdGNoYXB0ZXIgPSB0aGlzLmNoYXB0ZXJMaXN0W3RoaXMuYWN0aXZlT2JqLmNoYXB0ZXJJbmRleCsxXVxyXG5cdFx0XHRcdFx0aWYoY2hhcHRlciAmJiBjaGFwdGVyLnNlY3Rpb25MaXN0ICYmIGNoYXB0ZXIuc2VjdGlvbkxpc3QubGVuZ3RoPjApIHtcclxuXHRcdFx0XHRcdFx0Ly8g5LiL5LiA56ug56ysMeiKguivvlxyXG5cdFx0XHRcdFx0XHR0aGlzLmFjdGl2ZU9iai5jaGFwdGVySW5kZXgrK1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFjdGl2ZU9iai5zZWN0aW9uSW5kZXg9MFxyXG5cdFx0XHRcdFx0XHRzZWN0aW9uID0gY2hhcHRlci5zZWN0aW9uTGlzdFt0aGlzLmFjdGl2ZU9iai5zZWN0aW9uSW5kZXhdXHJcblx0XHRcdFx0XHRcdC8vIOaSreaUvuinhumikVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXlTZWN0aW9uKHNlY3Rpb24pXHJcblx0XHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIDMuIOayoeacieS4gOS4i+eroOiKgijmnKvlsL4p77yM5pqC5YGc6KeG6aKR77yM5o+Q56S677ya5bey6KeC55yL5pyA5ZCO5LiA6IqC6K++XHJcblx0XHRcdFx0XHRcdHZpZGVvQ29udGV4dC5wYXVzZSgpXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5bey6KeC55yL5pyA5ZCO5LiA6IqC6K++JyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q29udHJvbHMgPSB0cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6I635Y+W5pKt5pS+6L+b5bqm5Y+Y5YyW77yM6KeG6aKR5oC75pe26ZW/ZHVyYXRpb27vvIzmkq3mlL7lvZPliY3ml7bplb9jdXJyZW50VGltZVxyXG5cdFx0XHR0aW1ldXBkYXRlKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IGV2ZW50LmRldGFpbC5kdXJhdGlvblxyXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IGV2ZW50LmRldGFpbC5jdXJyZW50VGltZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g54K55Ye75ZCO6YCA5oyJ6ZKuXHJcblx0XHRcdGJhY2tIYW5kbGVyKCkge1xyXG5cdFx0XHRcdGlmKHRoaXMuZnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdFx0Ly8g5YWo5bGP5pe277yM6YCA5Ye65YWo5bGPXHJcblx0XHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW5IYW5kbGVyKClcclxuXHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDpnZ7lhajlsY/vvIzov5Tlm57kuIrkuIDpobVcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOaSreaUvuaIluaaguWBnOinhumikVxyXG5cdFx0XHRwbGF5VmlkZW8oKSB7XHJcblx0XHRcdFx0aWYodGhpcy5wbGF5KSB7XHJcblx0XHRcdFx0XHQvLyDmmoLlgZxcclxuXHRcdFx0XHRcdHZpZGVvQ29udGV4dC5wYXVzZSgpXHJcblx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8g5pKt5pS+XHJcblx0XHRcdFx0XHR2aWRlb0NvbnRleHQucGxheSgpXHJcblx0XHRcdFx0XHQvLyDpmpDol4/mjqfliLbmjInpkq5cclxuXHRcdFx0XHRcdHRoaXMuc2hvd0hpZGVDb250cm9scygpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGxheSA9ICF0aGlzLnBsYXlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOaYvuekuuaIlumakOiXj+aOp+WItuWxglxyXG5cdFx0XHRzaG93SGlkZUNvbnRyb2xzKCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0NvbnRyb2xzID0gIXRoaXMuc2hvd0NvbnRyb2xzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6ZqQ6JeP5YCN6YCf6KeG5Zu+XHJcblx0XHRcdFx0dGhpcy5yYXRlVmlldyA9IGZhbHNlXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g5a6a5pe26ZqQ6JeP5o6n5Yi25bGCXHJcblx0XHRcdFx0aWYodGhpcy5zaG93Q29udHJvbHMpIHtcclxuXHRcdFx0XHRcdHRpbWVyID0gdGltZXIgPyBjbGVhclRpbWVvdXQodGltZXIpIDogbnVsbFxyXG5cdFx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NvbnRyb2xzID0gZmFsc2VcclxuXHRcdFx0XHRcdH0sIDMwMDApIC8vIDPnp5LpmpDol49cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDliIfmjaLmiJbpgIDlh7rlhajlsY9cclxuXHRcdFx0ZnVsbFNjcmVlbkhhbmRsZXIoKSB7XHJcblx0XHRcdFx0aWYodGhpcy5mdWxsU2NyZWVuKSB7XHJcblx0XHRcdFx0XHQvL+mAgOWHuuWFqOWxj1xyXG5cdFx0XHRcdFx0dmlkZW9Db250ZXh0LmV4aXRGdWxsU2NyZWVuKClcclxuXHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDliIfmjaLliLDlhajlsY9cclxuXHRcdFx0XHRcdHZpZGVvQ29udGV4dC5yZXF1ZXN0RnVsbFNjcmVlbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZnVsbFNjcmVlbiA9ICF0aGlzLmZ1bGxTY3JlZW5cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQvLyDmoLzlvI/ljJbml7bpl7Qg5YiG6ZKfOuenkiBcclxuXHRcdFx0Zm9ybWF0U2Vjb25kcyh0b3RhbFNlY29uZCkge1xyXG5cdFx0XHRcdGxldCBtaW51dGUgPSBwYXJzZUludCh0b3RhbFNlY29uZC82MClcclxuXHRcdFx0XHRpZihtaW51dGU8MTApIG1pbnV0ZSA9IFwiMFwiK21pbnV0ZVxyXG5cdFx0XHRcdGxldCBzZWNvbmQgPSBwYXJzZUludCh0b3RhbFNlY29uZCU2MClcclxuXHRcdFx0XHRpZihzZWNvbmQ8MTApIHNlY29uZCA9IFwiMFwiK3NlY29uZFxyXG5cdFx0XHRcdGxldCB0aW1lID0gbWludXRlICsgXCI6XCIgKyBzZWNvbmRcclxuXHRcdFx0XHRpZih0b3RhbFNlY29uZCA+PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGltZVxyXG5cdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBcIjAwOjAwXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDmi5bliqjov5vluqbmnaHnu5PmnZ/ml7bop6blj5HvvIzkvKDpgJLlvZPliY3kvY3nva7nmoTnp5LmlbBcclxuXHRcdFx0Y2hhbmdlKGN1cnJlbnRTZWNvbmQpe1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnRTZWNvbmRcclxuXHRcdFx0XHQvLyDot7PovazliLDmjIflrprkvY3nva7mkq3mlL5cclxuXHRcdFx0XHR2aWRlb0NvbnRleHQuc2VlayhjdXJyZW50U2Vjb25kKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g54K55Ye75YCN6YCfXHJcblx0XHRcdGNsaWNrUmF0ZShyYXRlKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UmF0ZSA9IHJhdGVcclxuXHRcdFx0XHQvLyDorr7nva7lgI3pgJ/vvIzov5vooYzmkq3mlL5cclxuXHRcdFx0XHR2aWRlb0NvbnRleHQucGxheWJhY2tSYXRlKCBwYXJzZUZsb2F0KHJhdGUpIClcclxuXHRcdFx0XHR0aGlzLnNob3dIaWRlUmF0ZVZpZXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5pi+56S66ZqQ6JeP5YCN6YCf56qX5Y+jXHJcblx0XHRcdHNob3dIaWRlUmF0ZVZpZXcoKSB7XHJcblx0XHRcdFx0dGhpcy5yYXRlVmlldyA9ICF0aGlzLnJhdGVWaWV3XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGR1cmF0aW9uU3RyKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdFNlY29uZHModGhpcy5kdXJhdGlvbikgXHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnRTdHIoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0U2Vjb25kcyh0aGlzLmN1cnJlbnQpIFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6L+b5bqm5p2h5a695bqmXHJcblx0XHRcdHNsaWRlcldpZHRoKCkge1xyXG5cdFx0XHRcdC8vICgzMjArMjIwKSBycHgg5Zub5Liq5oyJ6ZKuKzLkuKrml7bpl7Tlrr3luqYsIOi9rOS4unB4XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNXaWR0aCAtIHVuaS51cHgycHgoMzIwKzIyMClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XHJcblx0Lmljb25mb250IHtcclxuXHRcdGZvbnQtZmFtaWx5OiBpY29uZm9udDtcclxuXHRcdGZvbnQtc2l6ZTogNTBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0LnZpZGVvIHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDIyNXB4O1xyXG5cdH1cclxuXHRcclxuXHQuY29udHJvbHMtdG9wIHtcclxuXHRcdGhlaWdodDogOTBycHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC44KSk7O1xyXG5cdH1cclxuXHQudGl0bGUge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0d2lkdGg6IDUwMHJweDtcclxuXHRcdGxpbmVzOiAxO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0fVxyXG5cdFxyXG5cdC8qIOS4remXtOWMuuWfnyAqL1xyXG5cdC5jb250cm9scy1jZW50ZXJ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDkwcnB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiA5MHJweDtcclxuXHRcdC8qIOmYsuatouaciea4kOWPmOmYtOW9sSAqL1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuXHR9XHJcblx0LnN0b3B7XHJcblx0XHRwYWRkaW5nOiAyMHJweCAzNXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIOW6lemDqOWMuuWfnyAqL1xyXG5cdC5jb250cm9scy1ib3R0b217XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC44KSk7O1xyXG5cdH1cclxuXHQudmlkZW8tYnRuIHtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA5MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHR9XHJcblx0LnRpbWUge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0d2lkdGg6IDExMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmJvdHRvbS1zbGlkZXIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0Lyog5YeP5Y675Zu65a6a55qE5a695bqm77yM5bCx5piv5q2k6L+b5bqm5p2h5a695bqmICovXHJcblx0XHRmbGV4OiAxOyBcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Lyog6Z2e5YWo5bGP5YCN6YCf5qC35byPICovXHJcblx0LnJhdGUtbGlzdHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogNzBycHg7XHJcblx0XHRyaWdodDogNjVycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xyXG5cdFx0d2lkdGg6IDExMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdH1cclxuXHQucmF0ZS1pdGVte1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDM1cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdH1cclxuXHQuYWN0aXZlIHtcclxuXHRcdGNvbG9yOiAjMzQ1ZGMyO1xyXG5cdH1cclxuXHRcclxuXHQvKiDlhajlsY/lgI3pgJ/moLflvI8gKi9cclxuXHQucmF0ZS1saXN0LWZ1bGwge1xyXG5cdFx0d2lkdGg6IDQwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNyk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblx0LnJhdGUtaXRlbS1mdWxsIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiA1MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMzBycHg7XHJcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/components/slider-bar.nvue ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-bar.nvue?vue&type=template&id=438818d0& */ 11);\n/* harmony import */ var _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-bar.nvue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./slider-bar.nvue?vue&type=style&index=0&lang=css& */ 15).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./slider-bar.nvue?vue&type=style&index=0&lang=css& */ 15).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6512e4e6\",\n  false,\n  _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/course/subNVue/components/slider-bar.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDREQUFvRDtBQUN4RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNERBQW9EO0FBQzdHOztBQUVBOztBQUVBO0FBQ2dNO0FBQ2hNLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2xpZGVyLWJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzODgxOGQwJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2xpZGVyLWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zbGlkZXItYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zbGlkZXItYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vc2xpZGVyLWJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8wMi1kZXZJbnN0YWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2NTEyZTRlNlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jb3Vyc2Uvc3ViTlZ1ZS9jb21wb25lbnRzL3NsaWRlci1iYXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/components/slider-bar.nvue?vue&type=template&id=438818d0& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./slider-bar.nvue?vue&type=template&id=438818d0& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/components/slider-bar.nvue?vue&type=template&id=438818d0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c(
      "view",
      {
        staticClass: ["slider", "row", "center"],
        style: { width: _vm.sliderWidth + "px" },
        on: {
          touchstart: _vm.blockTouchStart,
          touchend: _vm.blockTouchEnd,
          touchmove: _vm.blockTouchMove
        }
      },
      [
        _c("view", {
          staticClass: ["slider-left"],
          style: { width: _vm.leftWidth + "px" }
        }),
        _c("view", {
          staticClass: ["slider-right"],
          style: { width: _vm.sliderWidth - _vm.leftWidth + "px" }
        }),
        _c("view", {
          staticClass: ["block-inner"],
          style: { left: _vm.leftWidth - 5 + "px" }
        })
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/components/slider-bar.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./slider-bar.nvue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlnQixDQUFnQix5ZkFBRyxFQUFDIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8wMi1kZXZJbnN0YWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLzAyLWRldkluc3RhbGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8wMi1kZXZJbnN0YWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NsaWRlci1iYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8wMi1kZXZJbnN0YWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLzAyLWRldkluc3RhbGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8wMi1kZXZJbnN0YWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NsaWRlci1iYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/components/slider-bar.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    duration: { //总时长\n      type: Number,\n      default: 60 },\n\n\n    current: { // 当前播放时长\n      type: Number,\n      default: 0 },\n\n\n    sliderWidth: { //进度条宽度\n      type: Number,\n      default: 100 },\n\n\n    rate: { //倍速\n      type: Number,\n      default: 1 },\n\n\n    direction: { //判断屏幕方向，非全屏screenX，全屏screenY，用于计算滑动长度\n      type: String,\n      default: 'screenX' } },\n\n\n\n\n  data: function data() {\n    return {\n      oldToucesX: 0,\n      leftWidth: 0,\n      oldLeftWidth: 0,\n      touch: false };\n\n  },\n  methods: {\n    // 触摸开始，记录原坐标\n    blockTouchStart: function blockTouchStart(e) {\n      this.touch = true;\n      this.oldLeftWidth = this.leftWidth;\n      // screenX 点击点相对于屏幕左侧边缘的 X 轴坐标, screenY 点击点相对于屏幕顶部边缘的 Y 轴坐标\n      this.oldToucesX = e.changedTouches[0][this.direction];\n    },\n    // 计算方向\n    blockTouchMove: function blockTouchMove(e) {\n      var newToucesX = e.changedTouches[0][this.direction];\n      this.leftWidth = (newToucesX - this.oldToucesX) * this.rate + this.oldLeftWidth;\n      // 起出宽度，则移动进度条到右边缘，\n      this.leftWidth = this.leftWidth > this.sliderWidth ? this.sliderWidth : this.leftWidth;\n      // 小于0，则移动进度条到左边缘，\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n    },\n\n    // 结束触摸\n    blockTouchEnd: function blockTouchEnd(e) {\n      // 计算结束点，触发父组件，进行结束点位置播放\n      var currentSecond = this.leftWidth / this.sliderWidth * this.duration;\n      this.$emit('change', currentSecond);\n      this.touch = false;\n    } },\n\n\n  watch: {\n    // 监听播放时间变化，移动滚动点\n    current: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        if (this.touch) return;\n        this.leftWidth = newVal / this.duration * this.sliderWidth;\n        this.leftWidth = this.leftWidth > this.sliderWidth ? this.sliderWidth : this.leftWidth;\n      } } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY291cnNlL3N1Yk5WdWUvY29tcG9uZW50cy9zbGlkZXItYmFyLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBREE7OztBQU1BO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQU5BOzs7QUFXQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFYQTs7O0FBZ0JBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWhCQTs7O0FBcUJBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQXJCQSxFQURBOzs7OztBQTZCQSxNQTdCQSxrQkE2QkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQSxxQkFIQTtBQUlBLGtCQUpBOztBQU1BLEdBcENBO0FBcUNBO0FBQ0E7QUFDQSxtQkFGQSwyQkFFQSxDQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQTtBQUNBLGtCQVRBLDBCQVNBLENBVEEsRUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEJBOztBQWtCQTtBQUNBLGlCQW5CQSx5QkFtQkEsQ0FuQkEsRUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEJBLEVBckNBOzs7QUFnRUE7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxhQUZBLG1CQUVBLE1BRkEsRUFFQSxNQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BLEVBRkEsRUFoRUEsRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwic2xpZGVyIHJvdyBjZW50ZXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtzbGlkZXJXaWR0aH1weGB9XCJcclxuXHRcdFx0QHRvdWNoc3RhcnQ9XCJibG9ja1RvdWNoU3RhcnRcIiBAdG91Y2hlbmQ9XCJibG9ja1RvdWNoRW5kXCIgIEB0b3VjaG1vdmUuc3RvcD1cImJsb2NrVG91Y2hNb3ZlXCJcclxuXHRcdD5cclxuXHRcdFx0PCEtLSDlnIbngrnlt6bkvqflt7Lmkq3mlL7ov5vluqbmnaEgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2xpZGVyLWxlZnRcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtsZWZ0V2lkdGh9cHhgIH1cIiA+PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOWchueCueWPs+S+p+acquaSreaUvui/m+W6puadoSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzbGlkZXItcmlnaHRcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtzbGlkZXJXaWR0aC1sZWZ0V2lkdGh9cHhgIH1cIj48L3ZpZXc+XHJcblx0XHRcdDwhLS0g5ZyG54K5IC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJsb2NrLWlubmVyXCIgOnN0eWxlPVwie2xlZnQ6IGAke2xlZnRXaWR0aC01fXB4YH1cIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0e1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHRkdXJhdGlvbjp7IC8v5oC75pe26ZW/XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDYwXHJcblx0XHRcdH0sXG5cdFx0XHRcclxuXHRcdFx0Y3VycmVudDogeyAvLyDlvZPliY3mkq3mlL7ml7bplb9cclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXG5cdFx0XHRcclxuXHRcdFx0c2xpZGVyV2lkdGg6IHsgLy/ov5vluqbmnaHlrr3luqZcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAxMDBcclxuXHRcdFx0fSxcblx0XHRcdFxyXG5cdFx0XHRyYXRlOiB7IC8v5YCN6YCfXHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDFcclxuXHRcdFx0fSxcblx0XHRcdFxyXG5cdFx0XHRkaXJlY3Rpb246eyAvL+WIpOaWreWxj+W5leaWueWQke+8jOmdnuWFqOWxj3NjcmVlbljvvIzlhajlsY9zY3JlZW5Z77yM55So5LqO6K6h566X5ruR5Yqo6ZW/5bqmXHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ3NjcmVlblgnXHJcblx0XHRcdH0sXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJue1xyXG5cdFx0XHRcdG9sZFRvdWNlc1g6IDAsXHJcblx0XHRcdFx0bGVmdFdpZHRoOiAwLFxyXG5cdFx0XHRcdG9sZExlZnRXaWR0aDogMCxcclxuXHRcdFx0XHR0b3VjaDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHQvLyDop6bmkbjlvIDlp4vvvIzorrDlvZXljp/lnZDmoIdcclxuXHRcdFx0YmxvY2tUb3VjaFN0YXJ0KGUpIHtcblx0XHRcdFx0dGhpcy50b3VjaCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLm9sZExlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoXG5cdFx0XHRcdC8vIHNjcmVlblgg54K55Ye754K555u45a+55LqO5bGP5bmV5bem5L6n6L6557yY55qEIFgg6L205Z2Q5qCHLCBzY3JlZW5ZIOeCueWHu+eCueebuOWvueS6juWxj+W5lemhtumDqOi+uee8mOeahCBZIOi9tOWdkOagh1xyXG5cdFx0XHRcdHRoaXMub2xkVG91Y2VzWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF1bdGhpcy5kaXJlY3Rpb25dO1xuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6h566X5pa55ZCRXHJcblx0XHRcdGJsb2NrVG91Y2hNb3ZlKGUpIHtcblx0XHRcdFx0bGV0IG5ld1RvdWNlc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdW3RoaXMuZGlyZWN0aW9uXTtcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IChuZXdUb3VjZXNYIC0gdGhpcy5vbGRUb3VjZXNYKSAqIHRoaXMucmF0ZSArIHRoaXMub2xkTGVmdFdpZHRoXG5cdFx0XHRcdC8vIOi1t+WHuuWuveW6pu+8jOWImeenu+WKqOi/m+W6puadoeWIsOWPs+i+uee8mO+8jFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPiB0aGlzLnNsaWRlcldpZHRoID8gdGhpcy5zbGlkZXJXaWR0aCA6IHRoaXMubGVmdFdpZHRoXG5cdFx0XHRcdC8vIOWwj+S6jjDvvIzliJnnp7vliqjov5vluqbmnaHliLDlt6bovrnnvJjvvIxcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoIDwgMCA/IDAgOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHR9LFxuXHRcdFx0XHJcblx0XHRcdC8vIOe7k+adn+inpuaRuFxyXG5cdFx0XHRibG9ja1RvdWNoRW5kKGUpIHtcblx0XHRcdFx0Ly8g6K6h566X57uT5p2f54K577yM6Kem5Y+R54i257uE5Lu277yM6L+b6KGM57uT5p2f54K55L2N572u5pKt5pS+XG5cdFx0XHRcdGxldCBjdXJyZW50U2Vjb25kID0gdGhpcy5sZWZ0V2lkdGggLyB0aGlzLnNsaWRlcldpZHRoICogdGhpcy5kdXJhdGlvblxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIGN1cnJlbnRTZWNvbmQpXHJcblx0XHRcdFx0dGhpcy50b3VjaCA9IGZhbHNlXHJcblx0XHRcdH0sXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0d2F0Y2g6e1xuXHRcdFx0Ly8g55uR5ZCs5pKt5pS+5pe26Ze05Y+Y5YyW77yM56e75Yqo5rua5Yqo54K5XHJcblx0XHRcdGN1cnJlbnQ6e1xyXG5cdFx0XHRcdGltbWVkaWF0ZTp0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLCBvbGRWYWwpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy50b3VjaCkgcmV0dXJuXHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IG5ld1ZhbC90aGlzLmR1cmF0aW9uICogdGhpcy5zbGlkZXJXaWR0aFxyXG5cdFx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSB0aGlzLmxlZnRXaWR0aCA+IHRoaXMuc2xpZGVyV2lkdGg/IHRoaXMuc2xpZGVyV2lkdGggOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgPlxyXG5cdC5zbGlkZXIge1xuXHRcdGhlaWdodDogOTBycHg7XHJcblx0fVxuXHQuc2xpZGVyLWxlZnR7XHJcblx0XHQvKiBmbGV4OiAxOyAqL1xyXG5cdFx0aGVpZ2h0OiAzcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzM0NWRjMjtcblx0fVxyXG5cdC5zbGlkZXItcmlnaHR7XHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAxNzUsIDE3NSwgMSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuYmxvY2staW5uZXJ7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0aGVpZ2h0OiAyMHJweDtcclxuXHRcdHdpZHRoOiAyMHJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdHotaW5kZXg6IDEwO1xuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!***************************************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/components/slider-bar.nvue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./slider-bar.nvue?vue&type=style&index=0&lang=css& */ 16);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/components/slider-bar.nvue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "height": "90rpx"
  },
  "slider-left": {
    "height": "3",
    "borderRadius": "10rpx",
    "backgroundColor": "#345dc2"
  },
  "slider-right": {
    "height": "3",
    "backgroundColor": "rgba(175,175,175,1)",
    "borderRadius": "10rpx"
  },
  "block-inner": {
    "position": "absolute",
    "backgroundColor": "#ffffff",
    "height": "20rpx",
    "width": "20rpx",
    "borderRadius": 100,
    "zIndex": 10
  }
}

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!**********************************************************************************************************************************************************!*\
  !*** D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../02-devInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 19);
/* harmony import */ var _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_02_devInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/03-projectCode/teacherProject/frontProject/uniapp/mxg-education-app/pages/course/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "50rpx",
    "color": "#FFFFFF"
  },
  "video": {
    "width": "750rpx",
    "height": "225"
  },
  "controls-top": {
    "height": "90rpx",
    "paddingTop": 0,
    "paddingRight": "15rpx",
    "paddingBottom": 0,
    "paddingLeft": "15rpx",
    "alignItems": "center",
    "backgroundImage": "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))"
  },
  "title": {
    "color": "#FFFFFF",
    "fontSize": "30rpx",
    "width": "500rpx",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "controls-center": {
    "position": "absolute",
    "top": "90rpx",
    "left": 0,
    "right": 0,
    "bottom": "90rpx",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "stop": {
    "paddingTop": "20rpx",
    "paddingRight": "35rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "35rpx",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "borderRadius": "10"
  },
  "controls-bottom": {
    "position": "absolute",
    "bottom": 0,
    "height": "90rpx",
    "width": "750rpx",
    "backgroundImage": "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))"
  },
  "video-btn": {
    "width": "80rpx",
    "lineHeight": "90rpx",
    "textAlign": "center",
    "color": "#FFFFFF",
    "fontSize": "30rpx"
  },
  "time": {
    "fontSize": "28rpx",
    "color": "#FFFFFF",
    "width": "110rpx",
    "textAlign": "center"
  },
  "bottom-slider": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "90rpx",
    "flex": 1,
    "textAlign": "center"
  },
  "rate-list": {
    "position": "absolute",
    "bottom": "70rpx",
    "right": "65rpx",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "width": "110rpx",
    "borderRadius": "10rpx"
  },
  "rate-item": {
    "color": "#FFFFFF",
    "fontSize": "35rpx",
    "lineHeight": "60rpx"
  },
  "active": {
    "color": "#345dc2"
  },
  "rate-list-full": {
    "width": "400rpx",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "position": "absolute",
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "rate-item-full": {
    "color": "#FFFFFF",
    "fontSize": "50rpx",
    "lineHeight": "130rpx"
  }
}

/***/ })
/******/ ]);