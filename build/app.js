(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.application.demo","name":"quickapp-test","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1070,"icon":"/Common/logo.png","deviceTypeList":["phone"],"features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.device"},{"name":"system.storage"},{"name":"system.page"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"log"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"Demo":{"titleBarText":"示例页","menu":false}}}}
    var createAppHandler = function() {
      return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/yuhan/Documents/codes/playground/quickapp-long-list/src!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/yuhan/Documents/codes/playground/quickapp-long-list&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/yuhan/Documents/codes/playground/quickapp-long-list/src!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib?cwd=/Users/yuhan/Documents/codes/playground/quickapp-long-list&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n__webpack_require__(/*! ./global */ \"./src/global.js\");\n\nvar _util = _interopRequireDefault(__webpack_require__(/*! ./util */ \"./src/util.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  showMenu: _util.default.showMenu,\n  createShortcut: _util.default.createShortcut\n};\nexports.default = _default;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPS9Vc2Vycy95dWhhbi9Eb2N1bWVudHMvY29kZXMvcGxheWdyb3VuZC9xdWlja2FwcC1sb25nLWxpc3Qvc3JjIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPS9Vc2Vycy95dWhhbi9Eb2N1bWVudHMvY29kZXMvcGxheWdyb3VuZC9xdWlja2FwcC1sb25nLWxpc3QmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT0vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L3BhY2thZ2VyL2JhYmVsLmNvbmZpZy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL3NyYy9hcHAudXg/dXhUeXBlPWFwcC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Vc2Vycy95dWhhbi9Eb2N1bWVudHMvY29kZXMvcGxheWdyb3VuZC9xdWlja2FwcC1sb25nLWxpc3Qvc3JjL2FwcC51eD8xNzY3Il0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIC8qKlxuICAgKiBAZmlsZSDlupTnlKjnuqfliKvnmoTphY3nva7vvIzkvpvmiYDmnInpobXpnaLlhaznlKhcbiAgICovXG5cbiAgaW1wb3J0ICcuL2dsb2JhbCdcbiAgaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93TWVudTogdXRpbC5zaG93TWVudSxcbiAgICBjcmVhdGVTaG9ydGN1dDogdXRpbC5jcmVhdGVTaG9ydGN1dFxuICB9XG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/yuhan/Documents/codes/playground/quickapp-long-list/src!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/yuhan/Documents/codes/playground/quickapp-long-list&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar $app_style$ = {}\nvar $app_script$ = __webpack_require__(/*! ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/yuhan/Documents/codes/playground/quickapp-long-list/src!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib?cwd=/Users/yuhan/Documents/codes/playground/quickapp-long-list&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/yuhan/Documents/codes/playground/quickapp-long-list/src!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/yuhan/Documents/codes/playground/quickapp-long-list&cacheDirectory&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {\n  \n  $app_script$($app_module$, $app_exports$, $app_require$)\n  if ($app_exports$.__esModule && $app_exports$.default) {\n    $app_module$.exports = $app_exports$.default\n  }\n  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ \"./src/manifest.json\")\n  $app_module$.exports.style = { list: [ $app_style$ ] }\n  \n})\n$app_bootstrap$('@app-application/app', { packagerVersion: \"1.8.2\" })\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4P2E5OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgJGFwcF9zdHlsZSQgPSB7fVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPS9Vc2Vycy95dWhhbi9Eb2N1bWVudHMvY29kZXMvcGxheWdyb3VuZC9xdWlja2FwcC1sb25nLWxpc3Qvc3JjIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/lv6vlupTnlKjlvIDlj5Hlt6XlhbcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPS9Vc2Vycy95dWhhbi9Eb2N1bWVudHMvY29kZXMvcGxheWdyb3VuZC9xdWlja2FwcC1sb25nLWxpc3QmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT0vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L3BhY2thZ2VyL2JhYmVsLmNvbmZpZy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2FwcC51eD91eFR5cGU9YXBwXCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLCBbXSwgZnVuY3Rpb24gKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICBcbiAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICB9XG4gICRhcHBfbW9kdWxlJC5leHBvcnRzLm1hbmlmZXN0ID0gcmVxdWlyZShcIi4vbWFuaWZlc3QuanNvblwiKVxuICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHsgbGlzdDogWyAkYXBwX3N0eWxlJCBdIH1cbiAgXG59KVxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcsIHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setGlobalData = setGlobalData;\nexports.getGlobalData = getGlobalData;\n\n/**\n * @file 全局能力的配置与获取\n */\nfunction getGlobalRef() {\n  return Object.getPrototypeOf(global) || global;\n}\n\nconst quickappGlobal = getGlobalRef();\n/**\n * 设置全局(被APP与Page共享)数据；\n * @param key {string}\n * @param val {*}\n */\n\nfunction setGlobalData(key, val) {\n  quickappGlobal[key] = val;\n}\n/**\n * 获取全局(被APP与Page共享)数据；\n * @param key {string}\n * @return {*}\n */\n\n\nfunction getGlobalData(key) {\n  return quickappGlobal[key];\n} // 两个方法默认定义在全局\n\n\nsetGlobalData('setGlobalData', setGlobalData);\nsetGlobalData('getGlobalData', getGlobalData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2xvYmFsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcz8yOTE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUg5YWo5bGA6IO95Yqb55qE6YWN572u5LiO6I635Y+WXG4gKi9cblxuZnVuY3Rpb24gZ2V0R2xvYmFsUmVmKCkge1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCkgfHwgZ2xvYmFsXG59XG5cbmNvbnN0IHF1aWNrYXBwR2xvYmFsID0gZ2V0R2xvYmFsUmVmKClcblxuLyoqXG4gKiDorr7nva7lhajlsYAo6KKrQVBQ5LiOUGFnZeWFseS6qynmlbDmja7vvJtcbiAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAqIEBwYXJhbSB2YWwgeyp9XG4gKi9cbmZ1bmN0aW9uIHNldEdsb2JhbERhdGEoa2V5LCB2YWwpIHtcbiAgcXVpY2thcHBHbG9iYWxba2V5XSA9IHZhbFxufVxuXG4vKipcbiAqIOiOt+WPluWFqOWxgCjooqtBUFDkuI5QYWdl5YWx5LqrKeaVsOaNru+8m1xuICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gZ2V0R2xvYmFsRGF0YShrZXkpIHtcbiAgcmV0dXJuIHF1aWNrYXBwR2xvYmFsW2tleV1cbn1cblxuLy8g5Lik5Liq5pa55rOV6buY6K6k5a6a5LmJ5Zyo5YWo5bGAXG5zZXRHbG9iYWxEYXRhKCdzZXRHbG9iYWxEYXRhJywgc2V0R2xvYmFsRGF0YSlcbnNldEdsb2JhbERhdGEoJ2dldEdsb2JhbERhdGEnLCBnZXRHbG9iYWxEYXRhKVxuXG5leHBvcnQgeyBzZXRHbG9iYWxEYXRhLCBnZXRHbG9iYWxEYXRhIH1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/global.js\n");

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/*! exports provided: package, name, versionName, versionCode, minPlatformVersion, icon, deviceTypeList, features, permissions, config, router, display, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"package\\\":\\\"com.application.demo\\\",\\\"name\\\":\\\"quickapp-test\\\",\\\"versionName\\\":\\\"1.0.0\\\",\\\"versionCode\\\":1,\\\"minPlatformVersion\\\":1070,\\\"icon\\\":\\\"/Common/logo.png\\\",\\\"deviceTypeList\\\":[\\\"phone\\\"],\\\"features\\\":[{\\\"name\\\":\\\"system.prompt\\\"},{\\\"name\\\":\\\"system.router\\\"},{\\\"name\\\":\\\"system.shortcut\\\"},{\\\"name\\\":\\\"system.device\\\"},{\\\"name\\\":\\\"system.storage\\\"},{\\\"name\\\":\\\"system.page\\\"}],\\\"permissions\\\":[{\\\"origin\\\":\\\"*\\\"}],\\\"config\\\":{\\\"logLevel\\\":\\\"log\\\"},\\\"router\\\":{\\\"entry\\\":\\\"Demo\\\",\\\"pages\\\":{\\\"Demo\\\":{\\\"component\\\":\\\"index\\\"}}},\\\"display\\\":{\\\"titleBarBackgroundColor\\\":\\\"#f2f2f2\\\",\\\"titleBarTextColor\\\":\\\"#414141\\\",\\\"pages\\\":{\\\"Demo\\\":{\\\"titleBarText\\\":\\\"示例页\\\",\\\"menu\\\":false}}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFuaWZlc3QuanNvbi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/manifest.json\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n/**\n * 显示菜单\n */\nfunction showMenu() {\n  const prompt = $app_require$('@app-module/system.prompt');\n\n  const router = $app_require$('@app-module/system.router');\n\n  const appInfo = $app_require$('@app-module/system.app').getInfo();\n\n  prompt.showContextMenu({\n    itemList: ['保存桌面', '关于', '取消'],\n    success: function (ret) {\n      switch (ret.index) {\n        case 0:\n          // 保存桌面\n          createShortcut();\n          break;\n\n        case 1:\n          // 关于\n          router.push({\n            uri: '/About',\n            params: {\n              name: appInfo.name,\n              icon: appInfo.icon\n            }\n          });\n          break;\n\n        case 2:\n          // 取消\n          break;\n\n        default:\n          prompt.showToast({\n            message: 'error'\n          });\n      }\n    }\n  });\n}\n/**\n * 创建桌面图标\n * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限\n */\n\n\nfunction createShortcut() {\n  const prompt = $app_require$('@app-module/system.prompt');\n\n  const shortcut = $app_require$('@app-module/system.shortcut');\n\n  shortcut.hasInstalled({\n    success: function (ret) {\n      if (ret) {\n        prompt.showToast({\n          message: '已创建桌面图标'\n        });\n      } else {\n        shortcut.install({\n          success: function () {\n            prompt.showToast({\n              message: '成功创建桌面图标'\n            });\n          },\n          fail: function (errmsg, errcode) {\n            prompt.showToast({\n              message: `${errcode}: ${errmsg}`\n            });\n          }\n        });\n      }\n    }\n  });\n}\n\nvar _default = {\n  showMenu,\n  createShortcut\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmmL7npLroj5zljZVcbiAqL1xuZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gIGNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ0BzeXN0ZW0ucHJvbXB0JylcbiAgY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnQHN5c3RlbS5yb3V0ZXInKVxuICBjb25zdCBhcHBJbmZvID0gcmVxdWlyZSgnQHN5c3RlbS5hcHAnKS5nZXRJbmZvKClcbiAgcHJvbXB0LnNob3dDb250ZXh0TWVudSh7XG4gICAgaXRlbUxpc3Q6IFsn5L+d5a2Y5qGM6Z2iJywgJ+WFs+S6jicsICflj5bmtognXSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXQpIHtcbiAgICAgIHN3aXRjaCAocmV0LmluZGV4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAvLyDkv53lrZjmoYzpnaJcbiAgICAgICAgICBjcmVhdGVTaG9ydGN1dCgpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIC8vIOWFs+S6jlxuICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHVyaTogJy9BYm91dCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgbmFtZTogYXBwSW5mby5uYW1lLFxuICAgICAgICAgICAgICBpY29uOiBhcHBJbmZvLmljb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAvLyDlj5bmtohcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ2Vycm9yJ1xuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIOWIm+W7uuahjOmdouWbvuagh1xuICog5rOo5oSP77ya5L2/55So5Yqg6L295Zmo5rWL6K+VYOWIm+W7uuahjOmdouW/q+aNt+aWueW8j2Dlip/og73ml7bvvIzor7flhYjlnKhg57O757uf6K6+572uYOS4reaJk+W8gGDlupTnlKjliqDovb3lmahg55qEYOahjOmdouW/q+aNt+aWueW8j2DmnYPpmZBcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2hvcnRjdXQoKSB7XG4gIGNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ0BzeXN0ZW0ucHJvbXB0JylcbiAgY29uc3Qgc2hvcnRjdXQgPSByZXF1aXJlKCdAc3lzdGVtLnNob3J0Y3V0JylcbiAgc2hvcnRjdXQuaGFzSW5zdGFsbGVkKHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXQpIHtcbiAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+W3suWIm+W7uuahjOmdouWbvuaghydcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3J0Y3V0Lmluc3RhbGwoe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfmiJDlip/liJvlu7rmoYzpnaLlm77moIcnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24oZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogYCR7ZXJyY29kZX06ICR7ZXJybXNnfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TWVudSxcbiAgY3JlYXRlU2hvcnRjdXRcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBbkJBO0FBdUJBO0FBMUJBO0FBNEJBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFWQTtBQVlBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ })

/******/ });
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();