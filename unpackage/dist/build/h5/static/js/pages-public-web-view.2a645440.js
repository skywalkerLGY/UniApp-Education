(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-web-view"],{"0727":function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.tip[data-v-6f24906c]{position:relative;top:%?200?%;width:%?500?%;margin:0 auto;\r\n  /* 自动换行 */word-wrap:break-word;font-size:%?30?%;text-align:center}.tip uni-text[data-v-6f24906c]:first-child{font-size:%?40?%;font-weight:700;margin-bottom:%?30?%}',""]),t.exports=n},"093d":function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",[t.isOpen(t.url)?r("v-uni-web-view",{attrs:{src:t.url}}):r("v-uni-view",{staticClass:"tip column"},[r("v-uni-text",[t._v("如需浏览，请长按网址复制后使用浏览器访问：")]),r("v-uni-text",{attrs:{selectable:!0}},[t._v(t._s(t.url))])],1)],1)},u=[]},7303:function(t,n,r){"use strict";var e=r("9638"),i=r.n(e);i.a},"902f":function(t,n,r){"use strict";r.r(n);var e=r("093d"),i=r("a8e7");for(var u in i)"default"!==u&&function(t){r.d(n,t,(function(){return i[t]}))}(u);r("7303");var a,c=r("f0c5"),o=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"6f24906c",null,!1,e["a"],a);n["default"]=o.exports},9638:function(t,n,r){var e=r("0727");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=r("4f06").default;i("18ade3f6",e,!0,{sourceMap:!1,shadowMode:!1})},a8e7:function(t,n,r){"use strict";r.r(n);var e=r("ce86"),i=r.n(e);for(var u in e)"default"!==u&&function(t){r.d(n,t,(function(){return e[t]}))}(u);n["default"]=i.a},ce86:function(t,n,r){"use strict";r("c975"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{url:null}},onLoad:function(t){this.url=t.url},methods:{isOpen:function(){if(this.url)return-1!==this.url.indexOf("mengxuegu.com")}}};n.default=e}}]);