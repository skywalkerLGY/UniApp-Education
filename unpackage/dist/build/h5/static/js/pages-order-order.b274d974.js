(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"0b14":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var a=n(r("1da1")),i=n(r("5acb")),o=n(r("dfc0")),s={components:{courseItem:i.default},data:function(){return{orderList:[],isShow:!1,isIOS:!1,loading:!1,balance:0,order:{}}},computed:{isPay:function(){return this.balance>=(this.order.priceDiscount||this.order.pricePayable)}},onLoad:function(){this.loadData()},methods:{loadData:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.getUserOrderList();case 2:r=t.sent,n=r.data,e.orderList=n;case 5:case"end":return t.stop()}}),t)})))()},orderCancel:function(e){var t=this;uni.showModal({content:"确定取消该订单记录？",success:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=5;break}return r.next=3,o.default.cancelOrder(e);case 3:a=r.sent,2e4===a.code?(t.$util.msg("取消成功"),t.loadData()):t.$util.msg("取消失败，请重试");case 5:case"end":return r.stop()}}),r)})));function n(e){return r.apply(this,arguments)}return n}()})},orderDelete:function(e){var t=this;uni.showModal({content:"确定删除该订单记录？",success:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=5;break}return r.next=3,o.default.deleteOrder(e);case 3:a=r.sent,2e4===a.code?(t.$util.msg("删除成功"),t.loadData()):t.$util.msg("删除失败，请重试");case 5:case"end":return r.stop()}}),r)})));function n(e){return r.apply(this,arguments)}return n}()})},orderPay:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var n,a,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.order=e,!t.isIOS){r.next=12;break}return t.showHidePay(),t.loading=!0,r.next=6,o.default.getUserBalance();case 6:n=r.sent,a=n.data,t.balance=a,t.loading=!1,r.next=15;break;case 12:i=t.order.priceDiscount||t.order.pricePayable,s={price:i,orderId:t.order.orderId},t.navTo("/pages/order/order-pay?params=".concat(JSON.stringify(s)));case 15:case"end":return r.stop()}}),r)})))()},iosPay:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.order.priceDiscount||e.order.pricePayable,n={price:r,orderId:e.order.orderId},!e.isPay){t.next=12;break}return e.loading=!0,uni.showLoading({title:"支付中，请勿离开此页面",mask:!0}),t.next=7,o.default.orderPay(n);case 7:a=t.sent,uni.hideLoading(),2e4===a.code?(e.showHidePay(),uni.showToast({title:"支付成功"}),e.loadData()):uni.showModal({content:"支付失败，请重试！原因："+a.message,showCancel:!1}),t.next=13;break;case 12:e.navTo("/pages/order/my-balance?params=".concat(JSON.stringify(n)));case 13:case"end":return t.stop()}}),t)})))()},showHidePay:function(){this.isShow=!this.isShow}}};t.default=s},3308:function(e,t,r){"use strict";r.r(t);var n=r("607e"),a=r("6c3c");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("5c8a");var o,s=r("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f4e6e5ea",null,!1,n["a"],o);t["default"]=u.exports},"5c8a":function(e,t,r){"use strict";var n=r("e755"),a=r.n(n);a.a},"607e":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",[e._l(e.orderList,(function(t,n){return r("v-uni-view",{key:n,staticClass:"order-item"},[r("v-uni-view",{staticClass:"base-info"},[r("v-uni-text",[e._v(e._s(t.updateDate))]),r("v-uni-text",[e._v("订单号："+e._s(t.orderId))])],1),e._l(t.courseList,(function(e,t){return r("course-item",{key:t,attrs:{item:e}})})),r("v-uni-view",{staticClass:"shifu"},[r("v-uni-text",[e._v("实付：")]),r("v-uni-text",[e._v("￥"+e._s(t.priceDiscount||t.pricePayable))])],1),r("v-uni-view",{staticClass:"option center space-between"},[1===t.status?r("v-uni-text",{staticClass:"red"},[e._v("待支付")]):e._e(),3===t.status?r("v-uni-text",{staticClass:"grey"},[e._v("交易关闭")]):e._e(),2===t.status?r("v-uni-text",{staticClass:"grey"},[e._v("交易成功")]):e._e(),r("v-uni-view",[1===t.status?r("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.orderCancel(t.orderId)}}},[e._v("取消订单")]):e._e(),1===t.status?r("v-uni-button",{attrs:{type:"warn",size:"mini"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.orderPay(t)}}},[e._v("立即支付")]):e._e(),3===t.status?r("v-uni-button",{attrs:{size:"mini"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.orderDelete(t.orderId)}}},[e._v("删除订单")]):e._e()],1)],1)],2)})),e.isShow?r("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"true"},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),function(){}.apply(void 0,arguments)}}}):e._e(),e.isShow?r("v-uni-view",{staticClass:"bottom-ios",attrs:{catchtouchmove:"true"},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),function(){}.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title center"},[r("v-uni-text",[e._v("确定支付")]),r("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showHidePay.apply(void 0,arguments)}}},[e._v("取消")])],1),r("v-uni-view",{staticClass:"price space-between"},[r("v-uni-text",[e._v("支付金额")]),r("v-uni-text",[e._v(e._s(e.order.priceDiscount||e.order.pricePayable))])],1),r("v-uni-view",{staticClass:"price space-between"},[r("v-uni-text",[e._v("当前余额")]),r("v-uni-text",[e._v(e._s(e.balance))])],1),r("v-uni-button",{staticClass:"btn",attrs:{type:"default",loading:e.loading,disabled:e.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.iosPay.apply(void 0,arguments)}}},[e._v(e._s(e.isPay?"立即支付":"余额不足，立即充值"))])],1):e._e()],2)},i=[]},"6c3c":function(e,t,r){"use strict";r.r(t);var n=r("0b14"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},"7cb5":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.order-item[data-v-f4e6e5ea]{background-color:#fff;padding:%?20?% %?30?%;margin-bottom:%?20?%;font-size:%?25?%;border-bottom:.5px solid #efeff4}.order-item .base-info[data-v-f4e6e5ea]{color:#333}.order-item .base-info uni-text[data-v-f4e6e5ea]:first-child{margin-right:%?20?%}.order-item .shifu[data-v-f4e6e5ea]{text-align:right;line-height:%?70?%}.order-item .shifu uni-text[data-v-f4e6e5ea]:last-child{font-size:%?35?%;color:#fa140e}.order-item .option uni-button[data-v-f4e6e5ea]{font-size:%?20?%;margin-left:%?10?%}.order-item .option .red[data-v-f4e6e5ea]{color:#fa140e}.order-item .option .grey[data-v-f4e6e5ea]{color:#959da5}.bottom-ios[data-v-f4e6e5ea]{z-index:100;position:fixed;left:0;right:0;bottom:0;background-color:#fff;padding:%?30?% %?40?%;border-top:.5px solid #efeff4}.bottom-ios .title[data-v-f4e6e5ea]{font-size:%?38?%;margin-bottom:%?20?%;text-align:center}.bottom-ios .title uni-text[data-v-f4e6e5ea]:first-child{flex:1;margin-left:%?70?%}.bottom-ios .title uni-text[data-v-f4e6e5ea]:last-child{color:#959da5;font-size:%?35?%}.bottom-ios .price[data-v-f4e6e5ea]{font-size:%?30?%;line-height:%?90?%}.bottom-ios .price uni-text[data-v-f4e6e5ea]:last-child{color:#fa140e}.bottom-ios .btn[data-v-f4e6e5ea]{background-color:#345dc2;color:#fff;border-radius:%?50?%;line-height:%?80?%;font-size:%?30?%;margin-top:%?30?%}.bottom-ios .btn[data-v-f4e6e5ea]::after{border:none}',""]),e.exports=t},dfc0:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("54ac")),i={getUserBalance:function(){return(0,a.default)({url:"/pay/user/balance",method:"GET"})},orderPay:function(e){return(0,a.default)({url:"/pay/order/pay",method:"POST",data:e})},getOrderInfoWxpay:function(e){return(0,a.default)({url:"/pay/orderInfo/wxpay",method:"POST",data:e})},getOrderInfoAlipay:function(e){return(0,a.default)({url:"/pay/orderInfo/alipay",method:"POST",data:e})},getUserOrderList:function(){return(0,a.default)({url:"/pay/order/user/list",method:"GET"})},deleteOrder:function(e){return(0,a.default)({url:"/pay/order/".concat(e),method:"DELETE"})},cancelOrder:function(e){return(0,a.default)({url:"/pay/order/cancel/".concat(e),method:"PUT"})}};t.default=i},e755:function(e,t,r){var n=r("7cb5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("9db784cc",n,!0,{sourceMap:!1,shadowMode:!1})}}]);