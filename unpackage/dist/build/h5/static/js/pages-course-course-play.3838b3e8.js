(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-course-course-play"],{"0452":function(t,e,n){"use strict";var i=n("f65b"),o=n.n(i);o.a},"133d":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5530")),a=i(n("54ac")),r={getAdvertList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return(0,a.default)({url:"/article/api/advert/show/".concat(t)})},getCategoryList:function(){return(0,a.default)({url:"/article/api/category/label/list"})},getList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return(0,a.default)({url:"/course/api/course/search",method:"POST",data:(0,o.default)((0,o.default)({},t),{},{current:e,size:n})})},getCourseById:function(t){return(0,a.default)({url:"/course/api/course/".concat(t),method:"GET"})},getChapterSectionList:function(t){return(0,a.default)({url:"/course/api/chapter/section/list/".concat(t),method:"GET"})},getCourseCommentList:function(t){return(0,a.default)({url:"/course/api/comment/list/".concat(t),method:"GET"})},getCourseGroupList:function(t){return(0,a.default)({url:"/course/api/group/list/".concat(t),method:"GET"})},getCourseIsBuy:function(t){return(0,a.default)({url:"/course/course/is-buy/".concat(t),method:"GET"})},getCourseBuyList:function(t){return(0,a.default)({url:"/course/course/buy/list/".concat(t),method:"GET"})},addCourseComment:function(t){return(0,a.default)({url:"/course/comment",method:"POST",data:t})},getCourseStudyList:function(){return(0,a.default)({url:"/course/course/study/list",method:"GET"})}};e.default=r},"1c58":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.course-play[data-v-7c028f40]{padding-bottom:%?100?%}.course-info[data-v-7c028f40]{padding:%?30?%;font-weight:700;border-bottom:.5px solid #efeff4}.course-info .title[data-v-7c028f40]{width:%?500?%;font-size:%?35?%;line-height:%?60?%;color:#333}.course-info .right > uni-text[data-v-7c028f40]{font-size:%?28?%;line-height:%?60?%;color:#333}.bottom[data-v-7c028f40]{position:fixed;left:0;right:0;bottom:0;height:%?100?%;background-color:#fff;border-top:.5px solid #efeff4}.btn-item uni-text[data-v-7c028f40]{text-align:center;color:#959da5;font-size:%?25?%}.btn-item .iconfont[data-v-7c028f40]{font-size:%?38?%}',""]),t.exports=e},"1d6b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"course-dir"},t._l(t.chapterList,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-text",{staticClass:"chapters text-ellipsis"},[t._v("第"+t._s(i+1)+"章 "+t._s(e.name))]),t._l(e.sectionList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"sections row ",class:{active:i===t.activeObj.chapterIndex&&o===t.activeObj.sectionIndex},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.playVideo(i,o,e)}}},[n("v-uni-text",{staticClass:"iconfont icon-roundrightfill"}),n("v-uni-view",{staticClass:"row"},[n("v-uni-text",[t._v(t._s(i+1)+"-"+t._s(o+1))]),n("v-uni-text",{staticClass:"title text-ellipsis"},[t._v(t._s(e.name))])],1),e.isFree&&!t.isBuy?n("v-uni-text",{staticClass:"see"},[t._v("试看")]):t._e()],1)}))],2)})),1)},a=[]},"1d82":function(t,e,n){var i=n("e618");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("452114c6",i,!0,{sourceMap:!1,shadowMode:!1})},"210e":function(t,e,n){"use strict";n.r(e);var i=n("6e31"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"257f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{isBuy:Boolean,chapterList:{type:Array,default:function(){return[{id:1,name:"项目内容介绍",sectionList:[{id:1,name:"什么是uniapp框架",isFree:1},{id:2,name:"安装开发工具和插件",isFree:1},{id:3,name:"开发第一个helloworld项目",isFree:0}]},{id:2,name:"初始化梦学谷在线教育项目",sectionList:[{id:3,name:"创建项目和完善配置",isFree:0},{id:4,name:"导入静态文件内容",isFree:0}]}]}},activeObj:{type:Object,default:function(){return{chapterIndex:-1,sectionIndex:-1}}}},methods:{playVideo:function(t,e,n){n.isFree||this.isBuy?(this.activeObj.chapterIndex=t,this.activeObj.sectionIndex=e,this.$emit("playVideo",{section:n,activeObj:this.activeObj})):this.$util.msg("请先购买")}}};e.default=i},"29fe":function(t,e,n){var i=n("1c58");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("69085700",i,!0,{sourceMap:!1,shadowMode:!1})},"372e":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("1da1")),a=i(n("804f")),r=i(n("133d")),s=null,c={components:{courseDir:a.default},data:function(){return{src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=164016&resourceType=video&editionType=low&source=aliyun&playUrlType=url_oss",poster:"https://gd4.alicdn.com/imgextra/i4/3603079088/O1CN01dczOSM2H0LvTowhkl_!!3603079088.png",id:null,course:{},chapterList:[],activeObj:{chapterIndex:0,sectionIndex:0}}},onReady:function(){s=uni.createVideoContext("myVideo",this)},onLoad:function(t){this.id=t.id,this.loadData()},methods:{loadData:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n,i,o,a,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.default.getCourseById(t.id);case 2:return n=e.sent,i=n.data,t.course=i,e.next=7,r.default.getCourseBuyList(t.id);case 7:o=e.sent,a=o.data,t.chapterList=a,t.poster=t.course.mainImage,s=t.chapterList[t.activeObj.chapterIndex],c=s&&s.sectionList[t.activeObj.sectionIndex],t.src=c&&c.videoUrl||"";case 14:case"end":return e.stop()}}),e)})))()},changeVideo:function(t){this.activeObj=t.activeObj,s.pause(),this.src=t.section.videoUrl,setTimeout((function(){s.play()}),300)},share:function(){},submitComment:function(e){var n=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return uni.showLoading({title:"提交中",mask:!0}),e.courseId=n.id,t("log","comment",e," at pages/course/course-play.vue:158"),i.next=5,r.default.addCourseComment(e);case 5:o=i.sent,uni.hideLoading(),2e4===o.code?(e.content="",n.$util.msg("评论成功"),n.$refs.comment.show()):n.$util.msg(o.message);case 8:case"end":return i.stop()}}),i)})))()},openComment:function(){this.$refs.comment.show()}}};e.default=c}).call(this,n("0de9")["log"])},"3b7f":function(t,e,n){"use strict";var i=n("1d82"),o=n.n(i);o.a},"41ce":function(t,e,n){"use strict";n.r(e);var i=n("a3dc"),o=n("210e");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0452");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"829b9ee6",null,!1,i["a"],r);e["default"]=c.exports},"502d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{ref:"uni-rate",staticClass:"uni-rate"},t._l(t.stars,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-rate__icon",style:{"margin-right":t.margin+"px"},on:{touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)}}},[n("v-uni-text",{class:t.isFill?"iconfont icon-star-filled":"iconfont icon-star",style:{color:t.color,fontSize:t.size+"px"}}),n("v-uni-view",{staticClass:"uni-rate__icon-on",style:{width:e.activeWitch}},[n("v-uni-text",{staticClass:"iconfont",style:{color:t.disabled?t.disabledColor:t.activeColor,fontSize:t.size+"px"}},[t._v("")])],1)],1)})),1)],1)},a=[]},6039:function(t,e,n){"use strict";n("a9e3"),n("e25e"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniRate",props:{isFill:{type:[Boolean,String],default:!0},color:{type:String,default:"#ececec"},activeColor:{type:String,default:"#007aff"},disabledColor:{type:String,default:"#c0c0c0"},size:{type:[Number,String],default:24},value:{type:[Number,String],default:1},max:{type:[Number,String],default:5},margin:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},readonly:{type:[Boolean,String],default:!1},allowHalf:{type:[Boolean,String],default:!1},touchable:{type:[Boolean,String],default:!0}},data:function(){return{valueSync:""}},watch:{value:function(t){this.valueSync=Number(t)}},computed:{stars:function(){for(var t=this.valueSync?this.valueSync:0,e=[],n=Math.floor(t),i=Math.ceil(t),o=0;o<this.max;o++)n>o?e.push({activeWitch:"100%"}):i-1===o?e.push({activeWitch:100*(t-n)+"%"}):e.push({activeWitch:"0"});return e}},created:function(){this.valueSync=Number(this.value),this._rateBoxLeft=0,this._oldValue=null},mounted:function(){var t=this;setTimeout((function(){t._getSize()}),100)},methods:{touchstart:function(t){if(!this.readonly&&!this.disabled){var e=t.changedTouches[0],n=e.clientX,i=e.screenX;this._getRateCount(n||i)}},touchmove:function(t){if(!this.readonly&&!this.disabled&&this.touchable){var e=t.changedTouches[0],n=e.clientX,i=e.screenX;this._getRateCount(n||i)}},_getRateCount:function(t){var e=t-this._rateBoxLeft,n=parseInt(e/(this.size+this.margin));n=n<0?0:n,n=n>this.max?this.max:n;var i=parseInt(e-(this.size+this.margin)*n),o=0;this._oldValue!==n&&(this._oldValue=n,o=this.allowHalf?i>this.size/2?n+1:n+.5:n+1,o=Math.max(.5,Math.min(o,this.max)),this.valueSync=o,this._onChange())},_onChange:function(){this.$emit("input",this.valueSync),this.$emit("change",{value:this.valueSync})},_getSize:function(){var t=this;uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((function(e){e&&(t._rateBoxLeft=e[0].left)}))}}};e.default=i},"62e2":function(t,e,n){"use strict";n.r(e);var i=n("983d"),o=n("87f1");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("b3b6");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"7c028f40",null,!1,i["a"],r);e["default"]=c.exports},"6e31":function(t,e,n){"use strict";n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{comment:{type:Object,default:function(){return{userId:1,nickName:"xxx梦",userImage:"xxx.png",content:"",score:5}}},descArr:{type:Array,default:function(){return["极差,课程很糟糕，我要吐槽。","差,我对课程不满意。","中评,课程一般。","良好,课程还可以。","推荐,课程非常棒。"]}}},data:function(){return{isShow:!1}},methods:{show:function(){this.isShow=!this.isShow},getContent:function(t){this.comment.content=t.detail.value},submitComment:function(){this.comment.content=this.comment.content.trim(),this.$emit("submitComment",this.comment)}}};e.default=i},"804f":function(t,e,n){"use strict";n.r(e);var i=n("1d6b"),o=n("85ea");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("3b7f");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"1e84f513",null,!1,i["a"],r);e["default"]=c.exports},"85ea":function(t,e,n){"use strict";n.r(e);var i=n("257f"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"87f1":function(t,e,n){"use strict";n.r(e);var i=n("372e"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"983d":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={mxgShare:n("b87e").default,mxgComment:n("41ce").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"course-play"},[n("v-uni-video",{staticStyle:{width:"750rpx",height:"423rpx"},attrs:{id:"myVideo",src:t.src,poster:t.poster}}),n("v-uni-view",{staticClass:"course-info space-between"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.course.title))]),n("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/course/course-details?id="+t.id)}}},[n("v-uni-text",[t._v("详情")]),n("v-uni-text",{staticClass:"iconfont icon-right"})],1)],1),n("course-dir",{attrs:{isBuy:!0,chapterList:t.chapterList,activeObj:t.activeObj},on:{playVideo:function(e){arguments[0]=e=t.$handleEvent(e),t.changeVideo.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"bottom center"},[n("v-uni-view",{staticClass:"btn-item one column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openComment.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-edit"}),n("v-uni-text",[t._v("评价")])],1)],1),n("mxg-share",{ref:"share",attrs:{shareData:t.course}}),n("mxg-comment",{ref:"comment",on:{submitComment:function(e){arguments[0]=e=t.$handleEvent(e),t.submitComment.apply(void 0,arguments)}}})],1)},a=[]},"9b59":function(t,e,n){"use strict";n.r(e);var i=n("6039"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"9d30":function(t,e,n){"use strict";n.r(e);var i=n("502d"),o=n("9b59");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c669");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"30d11402",null,!1,i["a"],r);e["default"]=c.exports},a3dc:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniRate:n("9d30").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.isShow?n("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)}}}):t._e(),t.isShow?n("v-uni-view",{staticClass:"course-comment center column"},[n("uni-rate",{attrs:{size:22},model:{value:t.comment.score,callback:function(e){t.$set(t.comment,"score",e)},expression:"comment.score"}}),n("v-uni-text",{staticClass:"desc"},[t._v(t._s(t.descArr[t.comment.score-1]))]),n("v-uni-view",{staticClass:"input-box center"},[n("v-uni-textarea",{staticClass:"textarea",attrs:{value:t.comment.content,placeholder:"请输入评价内容……"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getContent.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitComment.apply(void 0,arguments)}}},[t._v("提交")])],1)],1):t._e()],1)},a=[]},ae8a:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.course-comment[data-v-829b9ee6]{z-index:100;position:fixed;left:0;right:0;bottom:50%;width:%?650?%;margin:0 auto;padding-top:%?30?%;font-size:%?30?%;background-color:#fff;border-radius:%?20?%}.course-comment .desc[data-v-829b9ee6]{color:#333;letter-spacing:2px;padding:%?20?% 0}.course-comment .input-box[data-v-829b9ee6]{border-top:.5px solid #efeff4;width:100%;white-space:nowrap}.course-comment .textarea[data-v-829b9ee6]{background-color:#f8f9fb;border-radius:0 0 0 %?20?%;height:%?100?%;font-size:%?30?%;padding:%?10?%;width:100%}.course-comment .btn[data-v-829b9ee6]{padding:0 %?15?%;color:#007aff}',""]),t.exports=e},b3b6:function(t,e,n){"use strict";var i=n("29fe"),o=n.n(i);o.a},b3b8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n.iconfont[data-v-30d11402]{font-family:iconfont /* iconfont 对应上面 fontFamily 的值, */}\n.uni-rate[data-v-30d11402]{\ndisplay:flex;\nline-height:1;font-size:0;flex-direction:row}.uni-rate__icon[data-v-30d11402]{position:relative;line-height:1;font-size:0}.uni-rate__icon-on[data-v-30d11402]{overflow:hidden;position:absolute;top:0;left:0;line-height:1;text-align:left}",""]),t.exports=e},c669:function(t,e,n){"use strict";var i=n("cd57"),o=n.n(i);o.a},cd57:function(t,e,n){var i=n("b3b8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("21724324",i,!0,{sourceMap:!1,shadowMode:!1})},e618:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/*文本基本颜色*/\r\n/* 下划线 */.course-dir[data-v-1e84f513]{padding:0 %?36?%}.course-dir .chapters[data-v-1e84f513]{margin-top:%?30?%;margin-bottom:%?10?%;color:#333;font-size:%?35?%;font-weight:700}.course-dir .sections[data-v-1e84f513]{padding:%?20?% 0;font-size:%?30?%;border-bottom:.5px solid #efeff4;line-height:%?40?%;color:#3d3c40}.course-dir .sections uni-text[data-v-1e84f513]{margin-right:%?10?%}.course-dir .sections .title[data-v-1e84f513]{width:%?470?%}.course-dir .sections .see[data-v-1e84f513]{color:#007aff;font-size:%?25?%;flex:1;text-align:right}.course-dir .active[data-v-1e84f513]{color:#007aff}',""]),t.exports=e},f65b:function(t,e,n){var i=n("ae8a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("c66b0112",i,!0,{sourceMap:!1,shadowMode:!1})}}]);