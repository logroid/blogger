!function(t){function e(e){for(var s,i,a=e[0],u=e[1],c=e[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);for(l&&l(e);d.length;)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},o={main:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://logroid.github.io/blogger/tools/lastorigin_unit_production_checker/";var a=window.webpackJsonpLastoriginUnitProductionChecker=window.webpackJsonpLastoriginUnitProductionChecker||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;n.push([0,"chunk-vendors"]),r()}({0:function(t,e,r){t.exports=r("cd49")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"8bbf":function(t,e){t.exports=Vue},"9c0c":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var s=r("8bbf"),o=r.n(s),n=r("9ab4"),i=r("60a3"),a=function(){function t(){}return t.STRING_MAP={ss:"SS",s:"S",a:"A",light:"軽装",heavy:"重装",flying:"機動",attacker:"攻撃",defender:"保護",suppoter:"支援"},t.RARITY=["SS","S","A","B"],t}(),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loading=!0,e.parts=90,e.nutrients=90,e.power=90,e.advancedModule=10,e.production="normal",e}return Object(n.b)(e,t),Object.defineProperty(e.prototype,"resourceParts",{get:function(){return this.resourceValue(this.parts)},set:function(t){this.parts=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resourceNutrients",{get:function(){return this.resourceValue(this.nutrients)},set:function(t){this.nutrients=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resourcePower",{get:function(){return this.resourceValue(this.power)},set:function(t){this.power=t},enumerable:!0,configurable:!0}),e.prototype.resourceValue=function(t){var e=t%this.resourceStep;return 0!=e&&(t-=e),t>=this.resourceMin&&t<=this.resourceMax?t:t>this.resourceMax?this.resourceMax:t<this.resourceMin?this.resourceMin:t},Object.defineProperty(e.prototype,"resourceMin",{get:function(){return this.isSpecial?900:90},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resourceStep",{get:function(){return this.isSpecial?100:10},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resourceMax",{get:function(){return this.isSpecial?9900:990},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSpecial",{get:function(){return"special"==this.production},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"total",{get:function(){return this.parts+this.nutrients+this.power},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rateData",{get:function(){var t=this,e=[];return this.isSpecial?a.RARITY.forEach((function(r){"B"!=r&&e.push({rank:r,rate:t.getSpecialRate(r),memo:t.getSpecialMemo()})})):a.RARITY.forEach((function(r){e.push({rank:r,rate:t.getNormalRate(r),memo:t.getNormalMemo()})})),e},enumerable:!0,configurable:!0}),e.prototype.rowClass=function(t){return 0==t.rate?"none":""},e.prototype.getSpecialRate=function(t){return"A"==t?20==this.advancedModule?55:50==this.advancedModule?35:100==this.advancedModule?0:65:"S"==t?20==this.advancedModule?35:50==this.advancedModule?50:100==this.advancedModule?80:30:"SS"==t?20==this.advancedModule?10:50==this.advancedModule?15:100==this.advancedModule?20:5:0},e.prototype.getNormalRate=function(t){return"B"==t?this.total<=300?95:this.total<=600?70:this.total<=999?60:this.total<=1999?50:40:"A"==t?this.total<=300?5:this.total<=600?28:this.total<=999?35:this.total<=1999?40:45:"S"==t?this.total<=600?2:this.total<=999?5:this.total<=1999?8:12:"SS"==t?this.total<1e3?0:this.total>=1e3&&this.total<=1999?2:3:0},e.prototype.getNormalMemo=function(){var t=[];return this.parts+this.power>=1400&&t.push("支援排除"),this.parts<400&&t.push("保護排除"),this.parts<this.nutrients&&this.power<this.nutrients?this.parts+this.power<1400?t.push("軽装支援優遇"):this.parts>=400&&this.power<this.parts?t.push("軽装保護優遇"):this.power>this.parts?t.push("軽装攻撃優遇"):t.push("軽装優遇"):this.parts<this.power&&this.nutrients<this.power&&(this.parts+this.power<1400?t.push("機動支援優遇"):this.parts>=400&&this.power<this.parts?t.push("機動保護優遇"):this.power>this.parts?t.push("機動攻撃優遇"):t.push("機動優遇")),t},e.prototype.getSpecialMemo=function(){var t=[];return this.parts+this.power>=14e3&&t.push("支援排除"),this.parts<4e3&&t.push("保護排除"),this.parts<this.nutrients&&this.power<this.nutrients?this.parts+this.power<14e3?t.push("軽装支援優遇"):this.parts>=4e3&&this.power<this.parts?t.push("軽装保護優遇"):this.power>this.parts?t.push("軽装攻撃優遇"):t.push("軽装優遇"):this.parts<this.power&&this.nutrients<this.power?this.parts+this.power<14e3?t.push("機動支援優遇"):this.parts>=4e3&&this.power<this.parts?t.push("機動保護優遇"):this.power>this.parts?t.push("機動攻撃優遇"):t.push("機動優遇"):this.parts+this.power<14e3?t.push("重装支援優遇"):this.parts>=4e3&&this.power<this.parts?t.push("重装保護優遇"):this.power>this.parts&&t.push("重装攻撃優遇"),t},e.prototype.created=function(){this.clear()},e.prototype.mounted=function(){this.loading=!1},e.prototype.clear=function(){this.production="normal",this.parts=90,this.nutrients=90,this.power=90,this.advancedModule=10},e=Object(n.a)([i.a],e)}(i.b),c=(r("5c0b"),r("2877")),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"lastorigin_unit_production_checker"}},[r("b-loading",{attrs:{active:t.loading},on:{"update:active":function(e){t.loading=e}}}),r("div",{staticClass:"subtitle is-4"},[t._v("製造")]),r("section",[r("div",{staticClass:"columns is-vcentered is-mobile"},[r("div",{staticClass:"column is-narrow"},[r("b-radio",{attrs:{name:"production","native-value":"normal"},on:{input:t.updateProduction},model:{value:t.production,callback:function(e){t.production=e},expression:"production"}},[t._v("一般")])],1),r("div",{staticClass:"column is-narrow"},[r("b-radio",{attrs:{name:"production","native-value":"special"},on:{input:t.updateProduction},model:{value:t.production,callback:function(e){t.production=e},expression:"production"}},[t._v("特殊")])],1)])]),r("div",{staticClass:"subtitle is-4"},[t._v("投入資源")]),r("section",[r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource parts",attrs:{label:"部品"}},[r("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:t.resourceMin,step:t.resourceStep,max:t.resourceMax},model:{value:t.resourceParts,callback:function(e){t.resourceParts=e},expression:"resourceParts"}})],1)],1),r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource nutrients",attrs:{label:"栄養"}},[r("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:t.resourceMin,step:t.resourceStep,max:t.resourceMax},model:{value:t.resourceNutrients,callback:function(e){t.resourceNutrients=e},expression:"resourceNutrients"}})],1)],1),r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource power",attrs:{label:"電力"}},[r("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:t.resourceMin,step:t.resourceStep,max:t.resourceMax},model:{value:t.resourcePower,callback:function(e){t.resourcePower=e},expression:"resourcePower"}})],1)],1),t.isSpecial?r("div",{staticClass:"column is-narrow"},[r("b-field",{staticClass:"resource advanced-module",attrs:{label:"高級モジュール"}},[r("b-radio",{attrs:{name:"advanced-module","native-value":"10"},model:{value:t.advancedModule,callback:function(e){t.advancedModule=e},expression:"advancedModule"}},[t._v("10")]),r("b-radio",{attrs:{name:"advanced-module","native-value":"20"},model:{value:t.advancedModule,callback:function(e){t.advancedModule=e},expression:"advancedModule"}},[t._v("20")]),r("b-radio",{attrs:{name:"advanced-module","native-value":"50"},model:{value:t.advancedModule,callback:function(e){t.advancedModule=e},expression:"advancedModule"}},[t._v("50")]),r("b-radio",{attrs:{name:"advanced-module","native-value":"100"},model:{value:t.advancedModule,callback:function(e){t.advancedModule=e},expression:"advancedModule"}},[t._v("100")])],1)],1):t._e()])]),r("div",{staticClass:"subtitle is-4"},[t._v("確率")]),r("section",[r("b-table",{attrs:{data:t.rateData,"row-class":t.rowClass}},[r("b-table-column",{attrs:{label:"レアリティ"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"rarity",class:e.row.rank},[t._v(t._s(e.row.rank))])]}}])}),r("b-table-column",{attrs:{label:"確率"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.rate)+"%")]}}])}),r("b-table-column",{attrs:{label:"備考"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.rate>0?r("ul",{staticClass:"memo"},t._l(e.row.memo,(function(e,s){return r("li",{key:e},[t._v(t._s(e))])})),0):t._e()]}}])})],1)],1),r("section",[r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-half"},[r("b-button",{attrs:{type:"is-danger",expanded:"true"},on:{click:function(e){return e.preventDefault(),t.clear(e)}}},[t._v("クリア")])],1)])])],1)}),[],!1,null,null,null).exports;o.a.config.productionTip=!1,new o.a({render:function(t){return t(l)}}).$mount("#lastorigin_unit_production_checker")}});