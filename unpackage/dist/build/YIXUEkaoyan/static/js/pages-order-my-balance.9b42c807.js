(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-my-balance"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},3700:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.money[data-v-502e3a85]{height:%?288?%;background-color:#345dc2;color:#fff;font-size:%?88?%}.money uni-text[data-v-502e3a85]:first-child{color:#e7e4e9;font-size:%?30?%}.recharge[data-v-502e3a85]{margin:%?20?% 0 0 %?20?%;font-size:%?30?%;color:#999}.recharge .list[data-v-502e3a85]{margin-top:%?20?%;text-align:center}.recharge .list > uni-view[data-v-502e3a85]{float:left;width:%?225?%;border:1px solid #f8f9fb;border-radius:%?10?%;background-color:#fff;margin-right:%?10?%;margin-bottom:%?15?%;padding:%?20?% 0;flex-wrap:wrap}.recharge .list > uni-view uni-view[data-v-502e3a85]:first-child{color:#fa140e;font-size:%?36?%}.active[data-v-502e3a85]{box-shadow:0 0 0 .5px #fa140e}.desc[data-v-502e3a85]{clear:both;margin:0 %?20?%;font-size:%?30?%;line-height:%?45?%;color:#6e6d70}.desc uni-view[data-v-502e3a85]:first-child{font-weight:700;padding-top:%?50?%;padding-bottom:%?30?%}.desc uni-view[data-v-502e3a85]:last-child{padding-bottom:%?120?%}.bottom[data-v-502e3a85]{position:fixed;left:0;right:0;bottom:0;height:%?100?%;background-color:#fff;border-top:.5px solid #efeff4}.bottom .btn[data-v-502e3a85]{width:%?700?%;background-color:#345dc2;color:#fff;border-radius:%?50?%;line-height:%?80?%;font-size:%?30?%}.bottom .btn[data-v-502e3a85]::after{border:none}',""]),t.exports=e},"61bb":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"money column center"},[r("v-uni-text",[t._v("余额：")]),r("v-uni-text",[t._v(t._s(parseFloat(t.balance).toFixed(2))+"币")])],1),r("v-uni-view",{staticClass:"recharge"},[r("v-uni-view",[t._v("充值：")]),r("v-uni-view",{staticClass:"list"},t._l(t.moneyList,(function(e,n){return r("v-uni-view",{key:n,class:{active:n===t.activeIndex},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.clickItem(n,e)}}},[r("v-uni-view",[t._v(t._s(e)+"币")]),r("v-uni-view",[t._v("￥"+t._s(e))])],1)})),1)],1),r("v-uni-view",{staticClass:"desc"},[r("v-uni-view",[t._v("充值说明：")]),r("v-uni-view",[t._v("1.在IOS设备的APP要进行充值后，使用虚拟币消费。"),r("br"),t._v("2.充值后不能在非IOS设备使用，与安卓版和网站余额不通用。"),r("br"),t._v("3.充值后没有使用期限，但不可提现、退换、转让和申请发票。"),r("br"),t._v("4.如遇无法充值、充值失败等问题，可关注[梦学谷]公众号，联系我们解决。"),r("br")])],1),r("v-uni-view",{staticClass:"bottom center"},[r("v-uni-button",{staticClass:"btn",attrs:{loading:t.loading,disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.iosPayHandler.apply(void 0,arguments)}}},[t._v("立即充值")])],1)],1)},i=[]},7024:function(t,e,r){"use strict";var n=r("bf35"),o=r.n(n);o.a},"819e":function(t,e,r){"use strict";(function(t){var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("1da1")),i=n(r("dfc0")),a=null,c={data:function(){return{loading:!1,activeIndex:0,price:0,courseIds:[],balance:0,applePrice:0,moneyList:[],disabled:!0,orderId:null}},onLoad:function(e){var r=this;if(e.params){var n=JSON.parse(e.params);this.price=n.price,this.courseIds=n.courseIds,this.orderId=n.orderId}this.loadData(),plus.payment.getChannels((function(e){for(var n in t("log","获取到channel"+JSON.stringify(e)," at pages/order/my-balance.vue:73"),e){var o=e[n];"appleiap"===o.id&&(a=o,r.requestOrder())}a||r.errorMsg()}),(function(t){r.errorMsg()}))},methods:{requestOrder:function(){var e=this;uni.showLoading({title:"检测支付环境..."}),a.requestOrder(this.moneyList,(function(r){e.disabled=!1,t("log","requestOrder success666: "+JSON.stringify(r)," at pages/order/my-balance.vue:98"),uni.hideLoading()}),(function(r){t("log","requestOrder failed: "+JSON.stringify(r)," at pages/order/my-balance.vue:101"),uni.hideLoading(),e.errorMsg()}))},errorMsg:function(){uni.showModal({content:"暂不支持苹果 iap 支付",showCancel:!1})},clickItem:function(t,e){this.activeIndex=t,this.applePrice=e},loadData:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function r(){var n,o,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.default.getUserBalance();case 2:for(n=r.sent,o=n.data,e.balance=o,e.price&&(a=e.balance-e.price,e.applePrice=Math.ceil(Math.abs(a))),t("log","this.applePrice",e.applePrice," at pages/order/my-balance.vue:131"),c=0;c<6;c++)e.moneyList.push(e.applePrice+30*c);case 8:case"end":return r.stop()}}),r)})))()},iosPayHandler:function(){var e=this;this.loading=!0,uni.requestPayment({provider:"appleiap",orderInfo:{productid:this.applePrice},success:function(t){uni.showToast({title:"支付成功！"}),e.navTo("/pages/order/order")},fail:function(t){uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){t("log","payment结束"," at pages/order/my-balance.vue:161"),e.loading=!1}})}}};e.default=c}).call(this,r("0de9")["log"])},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(M([])));m&&m!==n&&o.call(m,a)&&(g=m);var w=O.prototype=L.prototype=Object.create(g);_.prototype=w.constructor=O,O.constructor=_,O[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(P.prototype),P.prototype[c]=function(){return this},l.AsyncIterator=P,l.async=function(t,e,r,n){var o=new P(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=M,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=I(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function _(){}function O(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function P(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function I(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a8f4:function(t,e,r){"use strict";r.r(e);var n=r("819e"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},bf35:function(t,e,r){var n=r("3700");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("794acb18",n,!0,{sourceMap:!1,shadowMode:!1})},d128:function(t,e,r){"use strict";r.r(e);var n=r("61bb"),o=r("a8f4");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("7024");var a,c=r("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"502e3a85",null,!1,n["a"],a);e["default"]=u.exports},dfc0:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("54ac")),i={getUserBalance:function(){return(0,o.default)({url:"/pay/user/balance",method:"GET"})},orderPay:function(t){return(0,o.default)({url:"/pay/order/pay",method:"POST",data:t})},getOrderInfoWxpay:function(t){return(0,o.default)({url:"/pay/orderInfo/wxpay",method:"POST",data:t})},getOrderInfoAlipay:function(t){return(0,o.default)({url:"/pay/orderInfo/alipay",method:"POST",data:t})},getUserOrderList:function(){return(0,o.default)({url:"/pay/order/user/list",method:"GET"})},deleteOrder:function(t){return(0,o.default)({url:"/pay/order/".concat(t),method:"DELETE"})},cancelOrder:function(t){return(0,o.default)({url:"/pay/order/cancel/".concat(t),method:"PUT"})}};e.default=i}}]);