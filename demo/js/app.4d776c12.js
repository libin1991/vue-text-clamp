!function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],n[r]&&p.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(h&&h(t);p.length;)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var h=l;i.push([0,"vue","chunk-vendors"]),s()}({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=s("2909"),i=(s("ac6a"),s("386d"),s("a481"),s("6c7b"),s("3835")),r=(s("c5f6"),s("406e")),o=["maxLines","maxHeight","ellipsis"],l=["tag","text","autoresize"],c={name:"vue-clamper",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},expanded:Boolean},data:function(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText:function(){return this.text.slice(0,this.offset)+this.ellipsis},isClamped:function(){return!!this.text&&this.offset!==this.text.length},realText:function(){return this.isClamped?this.clampedText:this.text},realMaxHeight:function(){if(this.localExpanded)return null;var e=this.maxHeight;return e?"number"==typeof e?"".concat(e,"px"):e:null}},watch:{expanded:function(e){this.localExpanded=e},localExpanded:function(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)}},mounted:function(){var e=this;this.init(),l.forEach(function(t){e.$watch(t,e.init)}),o.forEach(function(t){e.$watch(t,e.update)})},updated:function(){this.text=this.getText(),this.applyChange()},beforeDestroy:function(){this.cleanUp()},methods:{init:function(){var e=this;if(this.$slots.default){if(this.offset=this.text.length,this.cleanUp(),this.autoresize){var t=function(){e.update()};Object(r.a)(this.$el,t),this.unregisterResizeCallback=function(){Object(r.b)(e.$el,t)}}this.update()}},update:function(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand:function(){this.localExpanded=!0},collapse:function(){this.localExpanded=!1},toggle:function(){this.localExpanded=!this.localExpanded},isOverflow:function(){if(!this.maxLines&&!this.maxHeight)return!1;if(this.maxLines&&this.$refs.content.getClientRects().length>this.maxLines)return!0;return!!(this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight)},getText:function(){var e=(this.$slots.default||[]).filter(function(e){return!e.tag&&!e.isComment}),t=Object(i.a)(e,1)[0];return t?t.text:""},moveEdge:function(e){this.clampAt(this.offset+e)},clampAt:function(e){this.offset=e,this.applyChange()},applyChange:function(){this.$refs.text.textContent=this.realText},stepToFit:function(){this.fill(),this.clamp()},fill:function(){for(;!this.isOverflow()&&this.offset<this.text.length;)this.moveEdge(1)},clamp:function(){for(;this.isOverflow()&&this.offset>0;)this.moveEdge(-1)},search:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var a=t[0],n=void 0===a?0:a,i=t[1],r=void 0===i?this.offset:i;if(r-n<=3)this.stepToFit();else{var o=Math.floor((r+n)/2);this.clampAt(o),this.isOverflow()?this.search(n,o):this.search(o,r)}},cleanUp:function(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render:function(e){var t=[e("span",{ref:"text",attrs:{"aria-label":this.text.trim()}},this.realText)],s={expand:this.expand,collapse:this.collapse,toggle:this.toggle,clamped:this.isClamped,expanded:this.localExpanded},a=this.$scopedSlots.before?this.$scopedSlots.before(s):this.$slots.before;a&&t.unshift.apply(t,Object(n.a)(Array.isArray(a)?a:[a]));var i=this.$scopedSlots.after?this.$scopedSlots.after(s):this.$slots.after;i&&t.push.apply(t,Object(n.a)(Array.isArray(i)?i:[i]));var r=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},r)}},h=s("4328"),d=s.n(h),p=s("a70e"),u=s.n(p),v=s("4dd1"),m=s.n(v),f=s("48b8"),_=s.n(f),g=s("b65b"),x=s.n(g);u.a.registerLanguage("vue",function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{case_insensitive:!0,contains:[e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","less","scss","stylus"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["javascript"]}},{className:"tag",begin:"<template(?=\\s|>|$)",end:">",keywords:{name:"template"},contains:[t],starts:{end:"</template>",returnEnd:!0,subLanguage:["html"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}),u.a.registerLanguage("javascript",m.a),u.a.registerLanguage("diff",_.a),u.a.registerLanguage("shell",x.a);var b=location.search.replace(/^\?/,""),y=d.a.parse(b),C="zh"===y.lang,z={name:"app",components:{VClamp:c},data:function(){return{lines:3,width1:600,hyphens1:!0,expanded1:!1,height:"calc(48px + 12em)",width2:600,hyphens2:!0,text:"Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",textZh:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。",zh:C,pascal:!1}},computed:{defaultText:function(){return this.zh?"默认值：":"Default:"}},watch:{zh:function(e){e?y.lang="zh":delete y.lang;var t=d.a.stringify(y);t=t?"?".concat(t):t,history.pushState(null,null,"".concat(location.origin).concat(location.pathname).concat(t).concat(location.hash))}},mounted:function(){Object(n.a)(this.$el.querySelectorAll("pre.code")).forEach(function(e){u.a.highlightBlock(e)})}},w=(s("b3cd"),s("c859"),s("5e6d"),s("a1ab"),s("2877")),E=Object(w.a)(z,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{attrs:{id:"app"}},[s("h1",[s("span",{on:{click:function(t){e.pascal=!e.pascal}}},[e._v("<"+e._s(e.pascal?"VueClamp":"vue-clamp")+">")]),s("div",{staticClass:"lang btn-group"},[s("button",{staticClass:"btn btn-sm",class:{active:!e.zh},on:{click:function(t){e.zh=!1}}},[e._v("\n        English\n      ")]),s("button",{staticClass:"btn btn-sm",class:{active:e.zh},on:{click:function(t){e.zh=!0}}},[e._v("\n        中文\n      ")])])]),s("p",[e._v("\n    "+e._s(e.zh?"轻松实现多行文本截断。":"Clamping multiline text with ease.")+"\n  ")]),s("p",[s("a",{staticClass:"tooltip",attrs:{href:"https://github.com/Justineo/vue-clamp","data-tooltip":e.zh?"前往 GitHub 仓库":"Visit GitHub repo"}},[e._v("\n      GitHub →\n    ")])]),s("h2",{attrs:{id:"features"}},[s("a",{attrs:{href:"#features"}},[e._v("#")]),e._v(" "+e._s(e.zh?"功能":"Features"))]),s("ul",[s("li",[e._v(e._s(e.zh?"可以选择限制行数与/或最大高度，无需指定行高。":"Clamps text with max lines and/or max height. No need to specify line height."))]),s("li",[e._v(e._s(e.zh?"支持在布局变化时自动更新。":"Automatically updates upon layout change."))]),s("li",[e._v(e._s(e.zh?"支持展开/收起被截断部分内容。":"The clamped text can be expanded/collapsed."))]),s("li",[e._v(e._s(e.zh?"支持自定义截断文本前后内容，并且进行响应式更新。":"Customizable and responsive content before/after clamped text."))])]),e._m(0),s("div",{staticClass:"divider text-center",attrs:{"data-content":"↓ max-lines & slot `after`"}}),s("section",{staticClass:"case"},[s("div",{staticClass:"form-horizontal"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label col-5 col-sm-12",attrs:{for:"lines"}},[e._v("\n          "+e._s(e.zh?"最大行数":"Max lines")+"\n        ")]),s("div",{staticClass:"col-7 col-sm-12"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.lines,expression:"lines",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"lines",type:"number",min:"1",max:"8",step:"1"},domProps:{value:e.lines},on:{input:function(t){t.target.composing||(e.lines=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label col-5 col-sm-12",attrs:{for:"width1"}},[e._v("\n          "+e._s(e.zh?"容器宽度":"Container width")+"\n        ")]),s("div",{staticClass:"col-7 col-sm-12 tooltip",attrs:{"data-tooltip":e.width1+"px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.width1,expression:"width1"}],staticClass:"slider",attrs:{id:"width1",type:"range",min:"240",max:"600"},domProps:{value:e.width1},on:{__r:function(t){e.width1=t.target.value}}})])]),e.zh?e._e():s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-5 col-sm-12"},[s("label",{staticClass:"form-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hyphens1,expression:"hyphens1"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hyphens1)?e._i(e.hyphens1,null)>-1:e.hyphens1},on:{change:function(t){var s=e.hyphens1,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&(e.hyphens1=s.concat([null])):i>-1&&(e.hyphens1=s.slice(0,i).concat(s.slice(i+1)))}else e.hyphens1=n}}}),s("i",{staticClass:"form-icon"}),e._v("\n            CSS "),s("code",[e._v("hyphens")])])])])]),s("v-clamp",{class:{demo:!0,hyphens:e.hyphens1},style:{width:e.width1+"px"},attrs:{"max-lines":e.lines,autoresize:""},scopedSlots:e._u([{key:"after",fn:function(t){var a=t.toggle,n=t.expanded,i=t.clamped;return n||i?s("button",{staticClass:"toggle btn btn-sm",on:{click:a}},[e._v("\n        "+e._s(e.zh?"切换":"Toggle")+"\n      ")]):e._e()}}])},[e._v("\n      "+e._s(e.zh?e.textZh:e.text)+"\n      ")])],1),s("div",{staticClass:"divider text-center",attrs:{"data-content":"↓ max-height & slot `before`"}}),s("section",{staticClass:"case"},[s("div",{staticClass:"form-horizontal"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label col-5 col-sm-12",attrs:{for:"height"}},[e._v("\n          "+e._s(e.zh?"最大高度":"Max height")+"\n        ")]),s("div",{staticClass:"col-7 col-sm-12 tooltip",attrs:{"data-tooltip":e.zh?"任意 CSS 长度值":"Any valid CSS length value"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],staticClass:"form-input",attrs:{id:"height"},domProps:{value:e.height},on:{input:function(t){t.target.composing||(e.height=t.target.value)}}})])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label col-5 col-sm-12",attrs:{for:"width2"}},[e._v("\n          "+e._s(e.zh?"容器宽度":"Container width")+"\n        ")]),s("div",{staticClass:"col-7 col-sm-12 tooltip",attrs:{"data-tooltip":e.width2+"px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.width2,expression:"width2"}],staticClass:"slider",attrs:{id:"width2",type:"range",min:"240",max:"600"},domProps:{value:e.width2},on:{__r:function(t){e.width2=t.target.value}}})])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-5 col-sm-12"},[s("label",{staticClass:"form-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.expanded1,expression:"expanded1"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.expanded1)?e._i(e.expanded1,null)>-1:e.expanded1},on:{change:function(t){var s=e.expanded1,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&(e.expanded1=s.concat([null])):i>-1&&(e.expanded1=s.slice(0,i).concat(s.slice(i+1)))}else e.expanded1=n}}}),s("i",{staticClass:"form-icon"}),e._v("\n            "+e._s(e.zh?"展开内容":"Expanded")+"\n          ")])])]),e.zh?e._e():s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-5 col-sm-12"},[s("label",{staticClass:"form-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hyphens2,expression:"hyphens2"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hyphens2)?e._i(e.hyphens2,null)>-1:e.hyphens2},on:{change:function(t){var s=e.hyphens2,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&(e.hyphens2=s.concat([null])):i>-1&&(e.hyphens2=s.slice(0,i).concat(s.slice(i+1)))}else e.hyphens2=n}}}),s("i",{staticClass:"form-icon"}),e._v("\n            CSS "),s("code",[e._v("hyphens")])])])])]),s("v-clamp",{class:{demo:!0,hyphens:e.hyphens2},style:{width:e.width2+"px"},attrs:{"max-height":e.height,autoresize:"",expanded:e.expanded1},on:{"update:expanded":function(t){e.expanded1=t}}},[e._v("\n      "+e._s(e.zh?e.textZh:e.text)+"\n      "),s("span",{staticClass:"featured label label-rounded label-primary",attrs:{slot:"before"},slot:"before"},[e._v("\n        "+e._s(e.zh?"推荐":"Featured")+"\n      ")])])],1),s("h2",{attrs:{id:"usage"}},[s("a",{attrs:{href:"#usage"}},[e._v("#")]),e._v(" "+e._s(e.zh?"使用方法":"Usage"))]),s("div",{staticClass:"divider text-center",attrs:{"data-content":e.zh?"↓ 安装":"↓ Installation"}}),e._m(1),s("div",{staticClass:"divider text-center",attrs:{"data-content":e.zh?"↓ 配置":"↓ Configuration"}}),e.zh?s("p",[e._v("对于基于 webpack 的项目，"),s("code",[e._v("import")]),e._v(" 会自动引入未经转译的 ES Module 版本。请确保按如下指导配置相关工具。")]):s("p",[e._v("For project based on webpack, "),s("code",[e._v("import")]),e._v(" will load the untranspiled ES Module version. Please make sure to add the correct config according to following instructions.")]),s("details",{attrs:{open:""}},[e._m(2),e.zh?s("p",[e._v("对于使用 Vue CLI 3 创建的项目，请确保将 "),s("code",[e._v("vue-clamp")]),e._v(" 与 "),s("code",[e._v("resize-detector")]),e._v(" 加入 "),s("code",[e._v("vue.config.js")]),e._v(" 文件的 "),s("code",[e._v("transpileDependencies")]),e._v(" 选项中：")]):s("p",[e._v("For projects created with Vue CLI 3, remember to add "),s("code",[e._v("vue-clamp")]),e._v(" and "),s("code",[e._v("resize-detector")]),e._v(" into the "),s("code",[e._v("transpileDependencies")]),e._v(" option in "),s("code",[e._v("vue.config.js")]),e._v(":")]),e._m(3)]),s("details",[e._m(4),e.zh?s("p",[e._v("如果使用的是 Vue CLI 2 的 "),s("code",[e._v("webpack")]),e._v(" 模板，请按如下方式修改 "),s("code",[e._v("build/webpack.base.conf.js")]),e._v("：")]):s("p",[e._v("For Vue CLI 2 with the "),s("code",[e._v("webpack")]),e._v(" template, modify "),s("code",[e._v("build/webpack.base.conf.js")]),e._v(" like this:")]),e._m(5)]),s("details",[e._m(6),e.zh?s("p",[e._v("在 Nuxt.js 中使用时，请确保将 "),s("code",[e._v("vue-clamp")]),e._v(" 与 "),s("code",[e._v("resize-detector")]),e._v(" 加入 "),s("code",[e._v("nuxt.config.js")]),e._v(" 文件的 "),s("code",[e._v("build.transpile")]),e._v(" 选项中：")]):s("p",[e._v("When using in Nuxt.js, remember to add "),s("code",[e._v("vue-clamp")]),e._v(" and "),s("code",[e._v("resize-detector")]),e._v(" into the "),s("code",[e._v("build.transpile")]),e._v(" option in "),s("code",[e._v("nuxt.config.js")]),e._v(":")]),e._m(7)]),s("div",{staticClass:"divider text-center",attrs:{"data-content":e.zh?"↓ 代码样例":"↓ Code example"}}),e._m(8),e._m(9),s("div",{staticClass:"divider text-center",attrs:{"data-content":"↓ Props"}}),s("section",[s("ul",[s("li",[e._m(10),s("p",[e._v(e._s(e.zh?"生成的根元素的标签名。":"The tag name of the generated root element."))]),s("p",[e._v(e._s(e.defaultText)),s("code",[e._v("div")])])]),s("li",[e._m(11),s("p",[e._v(e._s(e.zh?"是否要自动适配根元素的尺寸变化。":"Whether to observe the root element's size."))]),s("p",[e._v(e._s(e.defaultText)),s("code",[e._v("false")])])]),s("li",[e._m(12),s("p",[e._v(e._s(e.zh?"可以显示的最大行数":"The max number of lines that can be displayed."))])]),s("li",[e._m(13),e.zh?s("p",[e._v("根元素的最大高度。数字值将被转换为 "),s("code",[e._v("px")]),e._v(" 单位；字符串值将直接作为 CSS 属性 "),s("code",[e._v("max-height")]),e._v(" 输出。")]):s("p",[e._v("The max height of the root element. Number values are converted to "),s("code",[e._v("px")]),e._v(" units. String values are used directly as the "),s("code",[e._v("max-height")]),e._v(" CSS property.")])]),s("li",[e._m(14),s("p",[e._v(e._s(e.zh?"当文字被截断时需要显示的省略号字符串。":"The ellipsis characters displayed when the text is clamped."))]),s("p",[e._v(e._s(e.defaultText)),s("code",[e._v("'…'")])])]),s("li",[e._m(15),s("p",[s("span",{staticClass:"label label-primary tooltip",attrs:{"data-tooltip":e.zh?"支持 .sync 修饰符":"Supports .sync modifier"}},[e._v("\n            .sync\n          ")])]),s("p",[e._v(e._s(e.zh?"是否展开显式被截断的文本。":"Whether the clamped area is expanded."))]),s("p",[e._v(e._s(e.defaultText)),s("code",[e._v("false")])])])])]),s("div",{staticClass:"divider text-center",attrs:{"data-content":"↓ Slots"}}),s("section",[s("ul",[s("li",[e._m(16),s("p",[e._v(e._s(e.zh?"需要截断的文本。只能包含纯文本内容。":"The text to clamp. Can only contain pure text."))])]),s("li",[e._m(17),s("p",[e._v("Slot "+e._s(e.zh?"作用域：":"scope:")),s("code",[e._v("{ expand, collapse, toggle }")])]),s("section",{staticClass:"secondary"},[s("p",[s("code",[e._v("expand: function(): void")]),e._v(" - "+e._s(e.zh?"展开被截断的文本。":"Expand the clamped text."))]),s("p",[s("code",[e._v("collapse: function(): void")]),e._v(" - "+e._s(e.zh?"收起展开后的文本。":"Collapse the expanded text."))]),s("p",[s("code",[e._v("toggle: function(): void")]),e._v(" - "+e._s(e.zh?"切换被截断文本的展开状态。":"Toggle the expand state of clamped text."))]),e._m(18),e._v(" - "+e._s(e.zh?"内容是否处于截断状态。":"Whether text content is being clamped.")+"\n          "),e._m(19),e._v(" - "+e._s(e.zh?"内容是否处于展开状态。":"Whether text content is being expanded.")+"\n        ")]),s("p",[e._v(e._s(e.zh?"在被截断的文本前显式的内容，可以包含任意类型内容。":"Content displayed before the clamped text. Can contain anything."))])]),s("li",[e._m(20),e.zh?s("p",[e._v("Slot 作用域：与 "),s("code",[e._v("before")]),e._v(" 相同。")]):s("p",[e._v("Slot scope: Same as "),s("code",[e._v("before")]),e._v(".")]),s("p",[e._v(e._s(e.zh?"在被截断的文本后显式的内容，可以包含任意类型内容。":"Content displayed after the clamped text. Can contain anything."))])])])]),s("footer",[e.zh?s("p",[e._v("由 "),s("a",{attrs:{href:"https://github.com/Justineo"}},[e._v("@Justineo")]),e._v(" 创作。")]):s("p",[e._v("Made by "),s("a",{attrs:{href:"https://github.com/Justineo"}},[e._v("@Justineo")]),e._v(".")]),s("p",[e.zh?s("small",[e._v("本页基于 "),s("a",{attrs:{href:"https://picturepan2.github.io/spectre.css"}},[e._v("Spectre.css")]),e._v(" 开发。")]):s("small",[e._v("This page is based on "),s("a",{attrs:{href:"https://picturepan2.github.io/spectre.css"}},[e._v("Spectre.css")]),e._v(".")])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"demo"}},[t("a",{attrs:{href:"#demo"}},[this._v("#")]),this._v(" Demo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{staticClass:"code shell",attrs:{"data-lang":"Shell"}},[t("code",[this._v("$ npm i --save vue-clamp")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",[t("h4",[this._v("Vue CLI "),t("small",[this._v("v3")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{staticClass:"code javascript",attrs:{"data-lang":"JavaScript"}},[t("code",[this._v("module.exports = {\n  transpileDependencies: ['vue-clamp', 'resize-detector']\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",[t("h4",[this._v("Vue CLI "),t("small",[this._v("v2")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{staticClass:"code diff",attrs:{"data-lang":"Diff"}},[t("code",[this._v("      {\n        test: /\\.js$/,\n        loader: 'babel-loader',\n-       include: [resolve('src'), resolve('test')]\n+       include: [\n+         resolve('src'),\n+         resolve('test'),\n+         resolve('node_modules/vue-clamp'),\n+         resolve('node_modules/resize-detector')\n+       ]\n      }\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",[t("h4",[this._v("Nuxt.js "),t("small",[this._v("v2")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{staticClass:"code javascript",attrs:{"data-lang":"JavaScript"}},[t("code",[this._v("module.exports = {\n  build: {\n    transpile: ['vue-clamp', 'resize-detector']\n  }\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"code vue","data-lang":"Vue"}},[t("code",[this._v("<template>\n<v-clamp autoresize :max-lines=\"3\">{{ text }}</v-clamp>\n</template>\n\n<script>\nimport VClamp from 'vue-clamp'\n\nexport default {\n  components: {\n    VClamp\n  },\n  data () {\n    return {\n      text: 'Some very very long text content.'\n    }\n  }\n}\n<\/script>\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"api"}},[t("a",{attrs:{href:"#api"}},[this._v("#")]),this._v(" API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("tag: string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("autoresize: boolean")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("max-lines: number")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("max-height: number|string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("ellipsis: string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("expanded: boolean")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("default")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("before")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("clamped: Boolean")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("expanded: Boolean")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("after")])])}],!1,null,null,null);E.options.__file="App.vue";var $=E.exports;a.a.config.productionTip=!1,new a.a({render:function(e){return e($)}}).$mount("#app")},a1ab:function(e,t,s){"use strict";var a=s("c697");s.n(a).a},c697:function(e,t,s){}});
//# sourceMappingURL=app.4d776c12.js.map