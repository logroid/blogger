!function(t){function s(s){for(var i,r,o=s[0],l=s[1],c=s[2],p=0,b=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(u&&u(s);b.length;)b.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,o=1;o<e.length;o++){var l=e[o];0!==a[l]&&(i=!1)}i&&(n.splice(s--,1),t=r(r.s=e[0]))}return t}var i={},a={main:0},n=[];function r(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)r.d(e,i,function(s){return t[s]}.bind(null,i));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="https://logroid.github.io/blogger/tools/lastorigin_resource_farming_calculator/";var o=window.webpackJsonpLastoriginResourceFarmingCalculator=window.webpackJsonpLastoriginResourceFarmingCalculator||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var c=0;c<o.length;c++)s(o[c]);var u=l;n.push([0,"chunk-vendors"]),e()}({0:function(t,s,e){t.exports=e("cd49")},"5c0b":function(t,s,e){"use strict";e("b8d7")},"8bbf":function(t,s){t.exports=Vue},b8d7:function(t,s,e){},cd49:function(t,s,e){"use strict";e.r(s);var i=e("8bbf"),a=e.n(i),n=e("9ab4"),r=e("60a3"),o=function(){function t(){}return t.URL_BASE="https://logroid.github.io/lastorigin-map/",t.PRECISION_DISASSEMBLY_FACILITY={0:0,1:30,2:60,3:90,4:120,5:150},t.DISASSEMBLY_EFFICIENCY_LABORATORY={0:0,1:12.5,2:15,3:16.25,4:18.75,5:20,6:22.5,7:25,8:28.75,9:31.25,10:35,11:38.75,12:43.75,13:48.75,14:55,15:61.25,16:68.75,17:76.25,18:86.25,19:96.25,20:107.5,21:120,22:133.75,23:150,24:167.5,25:187.5},t.UNIT={"011":{name:"共振のアレクサンドラ",pattern:[{link:0,reality:"SS",cost:[16,27,16]},{link:1,reality:"SS",cost:[18,30,18]}],position:[0,-50]},"072":{name:"S12シェード",pattern:[{link:0,reality:"S",cost:[26,0,22]}],position:[-50,-350]},"093":{name:"P-22ハルピュイア",pattern:[{link:0,reality:"SS",cost:[11,27,32]},{link:1,reality:"SS",cost:[12,30,36]}],position:[-100,-450]},101:{name:"エイダーType-G",pattern:[{link:0,reality:"SS",cost:[32,0,16]},{link:1,reality:"SS",cost:[36,0,18]}],position:[0,-500]},174:{name:"クノイチ・ゼロ",pattern:[{link:0,reality:"S",cost:[9,22,26]}],position:[-150,-850]}},t.DISASSEMBLY_VALUE={unit:{b:5,a:25,s:50,ss:100},item:{b:3,a:5,s:10,ss:20}},t.STAGE_DATA={"2-4":{w:2,d:{u:{b:{rate:.1,pool:9},a:{rate:.003,pool:1},s:{rate:0,pool:0},ss:{rate:0,pool:0}},i:{b:[],a:[],s:[],ss:[]}}},"3-1Ex":{w:4,d:{u:{b:{rate:.1,pool:6},a:{rate:.0225,pool:3},s:{rate:.00375,pool:1},ss:{rate:0,pool:0}},i:{b:[],a:[],s:[],ss:[{rate:.00625,pool:1}]}}},"3-2Ex":{w:4,d:{u:{b:{rate:.1,pool:6},a:{rate:.0225,pool:3},s:{rate:.00375,pool:1},ss:{rate:0,pool:0}},i:{b:[],a:[],s:[],ss:[]}}},"4-4Ex":{w:3,d:{u:{b:{rate:.1,pool:6},a:{rate:.026666666,pool:1},s:{rate:.005333,pool:2},ss:{rate:.001,pool:1}},i:{b:[],a:[{rate:.0133333333,pool:1}],s:[{rate:.0066666,pool:1},{rate:.0033333,pool:1}],ss:[{rate:.00166666,pool:1},{rate:.0033333,pool:1}]}}}},t}(),l=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return s.buildTime="2021/10/05 23:56:50",s.loading=!0,s.stageData=o.STAGE_DATA,s.disassemblyEfficiencyLaboratory=o.DISASSEMBLY_EFFICIENCY_LABORATORY,s.precisionDisassemblyFacility=o.PRECISION_DISASSEMBLY_FACILITY,s.unit=o.UNIT,s.selectedStage="3-1Ex",s.isCalc=!1,s.costParts=0,s.costNutrients=0,s.costPower=0,s.precisionDisassemblyFacilityLv=5,s.disassemblyEfficiencyLaboratoryLv=0,s.unitDropUp=0,s.itemDropUp=0,s.resultParts=0,s.resultNutrients=0,s.resultPower=0,s.resultSleepParts=0,s.resultSleepNutrients=0,s.resultSleepPower=0,s.lapTime=0,s.battleCount=0,s.unitDropCount=0,s.totalTime=0,s.activeTab=0,s.templateUnit=-1,s.outputImage=null,s.isSleepRun=!1,s.sleepTime=8,s.breakTime=0,s.breakCount=0,s.sleepRunStopDetail="",s.repositoryUnitNow=300,s.repositoryUnitMax=600,s.repositoryItemNow=300,s.repositoryItemMax=550,s.lapTimeInDropUnit=0,s.dropUnitCount=0,s}return Object(n.c)(s,t),Object.defineProperty(s.prototype,"displayResultParts",{get:function(){return(Math.round(10*this.resultParts)/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"displayResultNutrients",{get:function(){return(Math.round(10*this.resultNutrients)/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"displayResultPower",{get:function(){return(Math.round(10*this.resultPower)/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"displayResultSleepParts",{get:function(){return(Math.round(10*this.resultSleepParts)/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"displayResultSleepNutrients",{get:function(){return(Math.round(10*this.resultSleepNutrients)/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"displayResultSleepPower",{get:function(){return(Math.round(10*this.resultSleepPower)/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"sleepBreakTime",{get:function(){var t=Math.floor(this.breakTime%86400/3600),s=Math.floor(this.breakTime%86400%3600/60),e=Math.floor(this.breakTime%86400%3600%60),i=[];return t>0&&i.push((""+t).padStart(2,"0")),s>0&&i.push((""+s).padStart(2,"0")),e>0&&i.push((""+e).padStart(2,"0")),i.join(":")},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"repositoryUnitCapacity",{get:function(){return this.repositoryUnitMax-this.repositoryUnitNow},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"repositoryItemCapacity",{get:function(){return this.repositoryItemMax-this.repositoryItemNow},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"sleepSec",{get:function(){return 3600*this.sleepTime},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"unitList",{get:function(){var t=this,s=[];return Object.keys(this.unit).sort().forEach((function(e){var i=t.unit[e];i.pattern.forEach((function(t){s.push({no:e,name:i.name,link:t.link,reality:t.reality,costParts:t.cost[0],costNutrients:t.cost[1],costPower:t.cost[2],style:"background-position: "+i.position[0]+"px "+i.position[1]+"px;"})}))})),s},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"precisionDisassemblyFacilityLvList",{get:function(){return Object.keys(this.precisionDisassemblyFacility)},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"precisionDisassemblyFacilityLvPer",{get:function(){return this.precisionDisassemblyFacility[this.precisionDisassemblyFacilityLv]},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"disassemblyEfficiencyLaboratoryLvList",{get:function(){return Object.keys(this.disassemblyEfficiencyLaboratory)},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"disassemblyEfficiencyLaboratoryLvPer",{get:function(){return this.disassemblyEfficiencyLaboratory[this.disassemblyEfficiencyLaboratoryLv]},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"resultTotal",{get:function(){return(Math.round(10*(this.resultParts+this.resultNutrients+this.resultPower))/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"resultSleepTotal",{get:function(){return(Math.round(10*(this.resultSleepParts+this.resultSleepNutrients+this.resultSleepPower))/10).toLocaleString()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"stages",{get:function(){return Object.keys(this.stageData).sort()},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"unitDropUpPer",{get:function(){return this.unitDropUp/100},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"itemDropUpPer",{get:function(){return this.itemDropUp/100},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"disassemblingPer",{get:function(){return this.precisionDisassemblyFacilityLvPer/100},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"itemDisassemblingPer",{get:function(){return this.disassemblyEfficiencyLaboratoryLvPer/100},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"selectedUnit",{get:function(){return this.unitList[this.templateUnit]},enumerable:!0,configurable:!0}),s.prototype.lapTimeChange=function(){0!=this.lapTimeInDropUnit&&(this.lapTime=this.lapTimeInDropUnit-3.7*this.dropUnitCount,this.calc())},s.prototype.unitChange=function(){1==this.activeTab&&(this.costParts=this.selectedUnit.costParts,this.costNutrients=this.selectedUnit.costNutrients,this.costPower=this.selectedUnit.costPower,this.calc())},s.prototype.conditionChange=function(){this.calc()},s.prototype.tabChange=function(){0==this.activeTab&&(this.templateUnit=-1)},s.prototype.calc=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,s,e,i,a,r,l,c,u,p,b,d,m,v,f,h,y,C,_,g,P,S,w,k,L,U,D,T,x,E,N,I,M,O,j,R,A,F,Y,B,V,H,$,z,G=this;return Object(n.d)(this,(function(n){switch(n.label){case 0:return this.isCalc=!1,this.totalTime=0,this.battleCount=0,this.resultParts=0,this.resultNutrients=0,this.resultPower=0,this.resultSleepParts=0,this.resultSleepNutrients=0,this.resultSleepPower=0,this.sleepRunStopDetail="",this.breakTime=0,this.breakCount=0,0==this.lapTime||0==this.costParts&&0==this.costNutrients&&0==this.costPower?[2]:(this.isCalc=!0,t=this.stageData[this.selectedStage],s=t.d.u,e=t.d.i,i=Math.min(1,s.b.rate+s.b.rate*this.unitDropUpPer),a=Math.min(1,s.a.rate+s.a.rate*this.unitDropUpPer),r=Math.min(1,s.s.rate+s.s.rate*this.unitDropUpPer),l=Math.min(1,s.ss.rate+s.ss.rate*this.unitDropUpPer),c=e.b.map((function(t){return Math.min(1,t.rate+t.rate*G.itemDropUpPer)})),u=e.a.map((function(t){return Math.min(1,t.rate+t.rate*G.itemDropUpPer)})),p=e.s.map((function(t){return Math.min(1,t.rate+t.rate*G.itemDropUpPer)})),b=e.ss.map((function(t){return Math.min(1,t.rate+t.rate*G.itemDropUpPer)})),d=i*s.b.pool,m=a*s.a.pool,v=r*s.s.pool,f=l*s.ss.pool,h=c.map((function(t,s){return t*e.b[s].pool})),y=u.map((function(t,s){return t*e.a[s].pool})),C=p.map((function(t,s){return t*e.s[s].pool})),_=b.map((function(t,s){return t*e.ss[s].pool})),g=d*(o.DISASSEMBLY_VALUE.unit.b*(1+this.disassemblingPer)),P=m*(o.DISASSEMBLY_VALUE.unit.a*(1+this.disassemblingPer)),S=v*(o.DISASSEMBLY_VALUE.unit.s*(1+this.disassemblingPer)),w=f*(o.DISASSEMBLY_VALUE.unit.ss*(1+this.disassemblingPer)),k=h.map((function(t){return t*(o.DISASSEMBLY_VALUE.item.b*(1+G.disassemblingPer+G.itemDisassemblingPer))})),L=y.map((function(t){return t*(o.DISASSEMBLY_VALUE.item.a*(1+G.disassemblingPer+G.itemDisassemblingPer))})),U=C.map((function(t){return t*(o.DISASSEMBLY_VALUE.item.s*(1+G.disassemblingPer+G.itemDisassemblingPer))})),D=_.map((function(t){return t*(o.DISASSEMBLY_VALUE.item.ss*(1+G.disassemblingPer+G.itemDisassemblingPer))})),T=g+P+S+w,x=function(t,s){return t+s},E=k.reduce(x,0)+L.reduce(x,0)+U.reduce(x,0)+D.reduce(x,0),N=d+m+v+f,I=h.reduce(x,0)+y.reduce(x,0)+C.reduce(x,0)+_.reduce(x,0),this.unitDropCount=t.w*N,M=t.w*I,O=T*t.w,j=E*t.w,this.totalTime=this.lapTime+3.7*this.unitDropCount,this.battleCount=3600/this.totalTime,R=O+j-this.costParts,A=O-this.costNutrients,F=O+j-this.costPower,this.resultParts=R*this.battleCount,this.resultNutrients=A*this.battleCount,this.resultPower=F*this.battleCount,this.isSleepRun&&(Y=this.repositoryUnitCapacity/this.unitDropCount,B=this.repositoryItemCapacity/M,V=this.sleepSec/this.totalTime,H=Math.min(Y,B,V),this.resultSleepParts=R*H,this.resultSleepNutrients=A*H,this.resultSleepPower=F*H,$=[],this.breakCount=0,H==Y&&(this.breakCount=Y,$.push("戦闘員待機室上限")),H==B&&(this.breakCount=B,$.push("装備倉庫上限")),H==V&&$.push("睡眠時間上限"),this.sleepRunStopDetail=$.join("\n"),H!=V&&(this.breakTime=this.breakCount*this.totalTime)),this.outputImage=null,z=this,[4,this.$html2canvas(this.$refs.resource_farming_result,{type:"dataURL",useCORS:!0})]);case 1:return z.outputImage=n.sent(),[2]}}))}))},s.prototype.download=function(){if(null!=this.outputImage){var t=document.createElement("a");t.href=this.outputImage+"";var s=["ラストオリジン",this.selectedStage];1==this.activeTab&&(s.push(this.selectedUnit.name),s.push(this.selectedUnit.link+"リンク")),s.push("部品"+this.costParts),s.push("栄養"+this.costNutrients),s.push("電力"+this.costPower),t.download=s.join("_"),t.click(),URL.revokeObjectURL(t.href)}},s.prototype.reset=function(){this.selectedStage="3-1Ex",this.costParts=0,this.costNutrients=0,this.costPower=0,this.precisionDisassemblyFacilityLv=5,this.disassemblyEfficiencyLaboratoryLv=0,this.unitDropUp=0,this.itemDropUp=0,this.resultParts=0,this.resultNutrients=0,this.resultPower=0,this.lapTime=0,this.lapTimeInDropUnit=0,this.dropUnitCount=0,this.activeTab=0,this.templateUnit=-1,this.outputImage=null,this.isSleepRun=!1,this.sleepTime=8,this.repositoryNow=400,this.repositoryMax=600,this.resultSleepParts=0,this.resultSleepNutrients=0,this.resultSleepPower=0,this.sleepRunStopDetail="",this.breakTime=0,this.breakCount=0,this.totalTime=0,this.battleCount=0},s.prototype.created=function(){},s.prototype.mounted=function(){this.loading=!1},s=Object(n.b)([Object(r.a)({components:{}})],s)}(r.b),c=(e("5c0b"),e("2877")),u=Object(c.a)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"lastorigin_resource_farming_calculator"}},[e("b-loading",{attrs:{active:t.loading},on:{"update:active":function(s){t.loading=s}}}),e("div",{staticClass:"build-time"},[t._v(t._s(t.buildTime))]),e("div",{staticClass:"subtitle is-4"},[t._v("対象ステージ")]),e("section",[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("ul",{staticClass:"float"},t._l(t.stages,(function(s){return e("li",[e("b-field",[e("b-radio",{attrs:{"native-value":s},on:{input:t.conditionChange},model:{value:t.selectedStage,callback:function(s){t.selectedStage=s},expression:"selectedStage"}},[t._v(t._s(s))])],1)],1)})),0)])])]),e("div",{staticClass:"subtitle is-4"},[t._v("研究")]),e("section",[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"精密分解施設"}},[e("div",{staticClass:"input-label"},[t._v("Lv")]),e("b-select",{attrs:{placeholder:"研究レベルを選択"},on:{input:t.conditionChange},model:{value:t.precisionDisassemblyFacilityLv,callback:function(s){t.precisionDisassemblyFacilityLv=s},expression:"precisionDisassemblyFacilityLv"}},t._l(t.precisionDisassemblyFacilityLvList,(function(s){return e("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})),0),e("div",{staticClass:"input-label"},[t._v("("+t._s(t.precisionDisassemblyFacilityLvPer)+" %増加)")])],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"装備分解効率研究室"}},[e("div",{staticClass:"input-label"},[t._v("Lv")]),e("b-select",{attrs:{placeholder:"施設レベルを選択"},on:{input:t.conditionChange},model:{value:t.disassemblyEfficiencyLaboratoryLv,callback:function(s){t.disassemblyEfficiencyLaboratoryLv=s},expression:"disassemblyEfficiencyLaboratoryLv"}},t._l(t.disassemblyEfficiencyLaboratoryLvList,(function(s){return e("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})),0),e("div",{staticClass:"input-label"},[t._v("("+t._s(t.disassemblyEfficiencyLaboratoryLvPer)+" %増加)")])],1)],1)])]),e("div",{staticClass:"subtitle is-4"},[t._v("ドロップアップ")]),e("section",[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"戦闘員"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:10,max:100},on:{input:t.conditionChange},model:{value:t.unitDropUp,callback:function(s){t.unitDropUp=s},expression:"unitDropUp"}}),e("div",{staticClass:"input-label"},[t._v("%増加")])],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"装備"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:10,max:100},on:{input:t.conditionChange},model:{value:t.itemDropUp,callback:function(s){t.itemDropUp=s},expression:"itemDropUp"}}),e("div",{staticClass:"input-label"},[t._v("%増加")])],1)],1)])]),e("div",{staticClass:"subtitle is-4"},[t._v("出撃コスト")]),e("section",[e("b-tabs",{attrs:{type:"is-boxed",size:"is-small"},on:{input:t.tabChange},model:{value:t.activeTab,callback:function(s){t.activeTab=s},expression:"activeTab"}},[e("b-tab-item",{attrs:{label:"直接入力",icon:"pen","icon-pack":"fas"}},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"resource parts",attrs:{label:"部品"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:1,max:999},on:{input:t.conditionChange},model:{value:t.costParts,callback:function(s){t.costParts=s},expression:"costParts"}})],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"resource nutrients",attrs:{label:"栄養"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:1,max:999},on:{input:t.conditionChange},model:{value:t.costNutrients,callback:function(s){t.costNutrients=s},expression:"costNutrients"}})],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"resource power",attrs:{label:"電力"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:1,max:999},on:{input:t.conditionChange},model:{value:t.costPower,callback:function(s){t.costPower=s},expression:"costPower"}})],1)],1)])]),e("b-tab-item",{attrs:{label:"テンプレート",icon:"user","icon-pack":"fas"}},[e("ul",{staticClass:"float unit-list"},t._l(t.unitList,(function(s,i){return e("li",[e("div",{staticClass:"unit"},[e("div",{staticClass:"rank",class:s.reality}),e("div",{staticClass:"unit-no"},[t._v("No."+t._s(s.no))]),e("div",{staticClass:"unit-name"},[t._v(t._s(s.name))]),e("div",{staticClass:"unit-icon",style:s.style}),e("div",{staticClass:"unit-link"},[t._v("リンク: "+t._s(s.link))]),e("div",{staticClass:"unit-cost"},[e("div",{staticClass:"parts"},[t._v(t._s(s.costParts))]),e("div",{staticClass:"nutrients"},[t._v(t._s(s.costNutrients))]),e("div",{staticClass:"power"},[t._v(t._s(s.costPower))])]),e("b-radio-button",{staticClass:"unit-select",attrs:{type:"is-success is-light is-outlined","native-value":i},on:{input:t.unitChange},model:{value:t.templateUnit,callback:function(s){t.templateUnit=s},expression:"templateUnit"}},[t._v("選択")])],1)])})),0)])],1)],1),e("div",{staticClass:"subtitle is-4"},[t._v("周回時間")]),e("section",[e("b-tabs",{attrs:{type:"is-boxed",size:"is-small"}},[e("b-tab-item",{attrs:{label:"直接入力",icon:"pen","icon-pack":"fas"}},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:.1,max:999},on:{input:t.conditionChange},model:{value:t.lapTime,callback:function(s){t.lapTime=s},expression:"lapTime"}}),e("div",{staticClass:"input-label"},[t._v("秒")])],1)],1)])]),e("b-tab-item",{attrs:{label:"自動計算",icon:"magic","icon-pack":"fas"}},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"ドロップ込みの周回時間"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:.1,max:999},on:{input:t.lapTimeChange},model:{value:t.lapTimeInDropUnit,callback:function(s){t.lapTimeInDropUnit=s},expression:"lapTimeInDropUnit"}}),e("div",{staticClass:"input-label"},[t._v("秒")])],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"ドロップ戦闘員数"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:1,max:20},on:{input:t.lapTimeChange},model:{value:t.dropUnitCount,callback:function(s){t.dropUnitCount=s},expression:"dropUnitCount"}}),e("div",{staticClass:"input-label"},[t._v("人")])],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"ドロップを除外した周回時間"}},[e("span",[t._v(t._s(t.lapTime)+" 秒")])])],1)])])],1)],1),e("section",[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"睡眠ラン"}},[e("b-switch",{on:{input:t.conditionChange},model:{value:t.isSleepRun,callback:function(s){t.isSleepRun=s},expression:"isSleepRun"}},[t._v(t._s(t.isSleepRun?"計算する":"計算しない"))])],1)],1)]),t.isSleepRun?e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"睡眠時間"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:.5,max:24},on:{input:t.conditionChange},model:{value:t.sleepTime,callback:function(s){t.sleepTime=s},expression:"sleepTime"}}),e("div",{staticClass:"input-label"},[t._v("時間")])],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"戦闘員待機室"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:1,max:t.repositoryUnitMax},on:{input:t.conditionChange},model:{value:t.repositoryUnitNow,callback:function(s){t.repositoryUnitNow=s},expression:"repositoryUnitNow"}}),e("div",{staticClass:"input-label"},[t._v("/")]),e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:10,max:600},on:{input:t.conditionChange},model:{value:t.repositoryUnitMax,callback:function(s){t.repositoryUnitMax=s},expression:"repositoryUnitMax"}})],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"装備倉庫"}},[e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:1,max:t.repositoryItemMax},on:{input:t.conditionChange},model:{value:t.repositoryItemNow,callback:function(s){t.repositoryItemNow=s},expression:"repositoryItemNow"}}),e("div",{staticClass:"input-label"},[t._v("/")]),e("b-numberinput",{attrs:{"icon-pack":"fas",type:"is-success","controls-position":"compact",min:0,step:20,max:550},on:{input:t.conditionChange},model:{value:t.repositoryItemMax,callback:function(s){t.repositoryItemMax=s},expression:"repositoryItemMax"}})],1)],1)]):t._e()]),e("div",{staticClass:"resource-farming-result"},[e("div",{staticClass:"subtitle is-4"},[t._v("資源ラン結果")]),e("section",[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"戦闘員ドロップ期待値/1週"}},[t._v("約 "+t._s(Math.floor(t.unitDropCount))+" 体")])],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"戦闘員ドロップ込みの周回時間/1週"}},[t._v("約 "+t._s(Math.floor(t.totalTime))+" 秒")])],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"周回回数/1H"}},[t._v("約 "+t._s(Math.floor(t.battleCount))+" 回")])],1)]),e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("b-field",{staticClass:"resource parts",attrs:{label:"部品/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultParts<0}},[t._v(t._s(t.displayResultParts))])])],1),e("div",{staticClass:"column"},[e("b-field",{staticClass:"resource nutrients",attrs:{label:"栄養/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultNutrients<0}},[t._v(t._s(t.displayResultNutrients))])])],1),e("div",{staticClass:"column"},[e("b-field",{staticClass:"resource power",attrs:{label:"電力/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultPower<0}},[t._v(t._s(t.displayResultPower))])])],1)]),e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("b-field",{staticClass:"total",attrs:{label:"総合資源/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultParts+this.resultNutrients+this.resultPower<0}},[t._v(t._s(t.resultTotal))])])],1)])]),t.isSleepRun?[e("div",{staticClass:"subtitle is-4"},[t._v("睡眠ラン結果")]),e("section",[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("b-field",{staticClass:"inline-block",attrs:{label:"周回停止理由:"}},[e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.sleepRunStopDetail))])])],1),this.breakTime>0?e("div",{staticClass:"column"},[e("b-field",{staticClass:"inline-block",attrs:{label:"周回回数:"}},[e("span",{staticStyle:{color:"red"}},[t._v(t._s(Math.floor(t.breakCount)))])])],1):t._e(),this.breakTime>0?e("div",{staticClass:"column"},[e("b-field",{staticClass:"inline-block",attrs:{label:"周回停止時間:"}},[e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.sleepBreakTime))])])],1):t._e()]),e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("b-field",{staticClass:"resource parts",attrs:{label:"部品:"}},[e("div",{staticClass:"result",class:{minus:this.resultSleepParts<0}},[t._v(t._s(t.displayResultSleepParts))])])],1),e("div",{staticClass:"column"},[e("b-field",{staticClass:"resource nutrients",attrs:{label:"栄養:"}},[e("div",{staticClass:"result",class:{minus:this.resultSleepNutrients<0}},[t._v(t._s(t.displayResultSleepNutrients))])])],1),e("div",{staticClass:"column"},[e("b-field",{staticClass:"resource power",attrs:{label:"電力:"}},[e("div",{staticClass:"result",class:{minus:this.resultSleepPower<0}},[t._v(t._s(t.displayResultSleepPower))])])],1)]),e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("b-field",{staticClass:"total",attrs:{label:"総合資源:"}},[e("div",{staticClass:"result",class:{minus:this.resultSleepParts+this.resultSleepNutrients+this.resultSleepPower<0}},[t._v(t._s(t.resultSleepTotal))])])],1)])])]:t._e()],2),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-narrow"},[e("b-button",{attrs:{size:"is-small","icon-pack":"fas","icon-left":"eraser",type:"is-danger"},on:{click:t.reset}},[t._v("リセット")])],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-narrow"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-narrow"},[e("b-button",{attrs:{disabled:null==t.outputImage,size:"is-small","icon-pack":"fas","icon-left":"download",type:"is-primary"},on:{click:t.download}},[t._v("ダウンロード")])],1)]),t._m(0)]),e("div",{staticClass:"column is-narrow"},[e("div",{ref:"resource_farming_result",staticClass:"resource-farming-result-image"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"精密分解施設"}},[t._v("Lv "+t._s(t.precisionDisassemblyFacilityLv)+" ("+t._s(t.precisionDisassemblyFacilityLvPer)+" %増加)")])],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"装備分解効率研究室"}},[t._v("Lv "+t._s(t.disassemblyEfficiencyLaboratoryLv)+" ("+t._s(t.disassemblyEfficiencyLaboratoryLvPer)+" %増加)")])],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"戦闘員ドロップアップ"}},[t._v(t._s(t.unitDropUp)+" %増加")])],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{attrs:{label:"装備ドロップアップ"}},[t._v(t._s(t.itemDropUp)+" %増加")])],1)]),e("hr"),0==t.activeTab||1==t.activeTab&&null==t.selectedUnit?[e("div",{staticClass:"subtitle is-6"},[t._v("出撃コスト")]),e("div",{staticClass:"unit-cost"},[e("b-field",{attrs:{label:"部品:"}},[e("div",{staticClass:"parts"},[t._v(t._s(t.costParts))])]),e("b-field",{attrs:{label:"栄養:"}},[e("div",{staticClass:"nutrients"},[t._v(t._s(t.costNutrients))])]),e("b-field",{attrs:{label:"電力:"}},[e("div",{staticClass:"power"},[t._v(t._s(t.costPower))])])],1)]:[e("div",{staticClass:"unit"},[e("div",{staticClass:"rank",class:t.selectedUnit.reality}),e("div",{staticClass:"unit-no"},[t._v("No."+t._s(t.selectedUnit.no))]),e("div",{staticClass:"unit-name"},[t._v(t._s(t.selectedUnit.name))]),e("div",{staticClass:"unit-icon",style:t.selectedUnit.style}),e("div",{staticClass:"unit-link"},[t._v("リンク: "+t._s(t.selectedUnit.link))])]),e("div",{staticClass:"unit-cost"},[e("b-field",{attrs:{label:"部品:"}},[e("div",{staticClass:"parts"},[t._v(t._s(t.selectedUnit.costParts))])]),e("b-field",{attrs:{label:"栄養:"}},[e("div",{staticClass:"nutrients"},[t._v(t._s(t.selectedUnit.costNutrients))])]),e("b-field",{attrs:{label:"電力:"}},[e("div",{staticClass:"power"},[t._v(t._s(t.selectedUnit.costPower))])])],1)],e("hr"),e("div",{staticClass:"columns is-vcentered",staticStyle:{"margin-top":"5px"}},[e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"inline-block",attrs:{label:"ステージ:"}},[e("span",[t._v(t._s(t.selectedStage))])])],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"inline-block",attrs:{label:"周回時間:"}},[e("span",[t._v(t._s(t.lapTime)+" 秒")])])],1)]),e("hr"),e("div",{staticClass:"columns is-vcentered",staticStyle:{"margin-top":"5px"}},[e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"resource parts",attrs:{label:"部品/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultParts<0}},[t._v(t._s(t.displayResultParts))])])],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"resource nutrients",attrs:{label:"栄養/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultNutrients<0}},[t._v(t._s(t.displayResultNutrients))])])],1),e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"resource power",attrs:{label:"電力/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultPower<0}},[t._v(t._s(t.displayResultPower))])])],1)]),e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-narrow"},[e("b-field",{staticClass:"total",attrs:{label:"総合資源/1H:"}},[e("div",{staticClass:"result",class:{minus:this.resultParts+this.resultNutrients+this.resultPower<0}},[t._v(t._s(t.resultTotal))])])],1)])],2)])])],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-narrow"},[e("div",{staticClass:"explanation"},[t._v("右に表示されている内容を画像でダウンロードできます")])])])}],!1,null,null,null).exports,p=e("63d6"),b=e.n(p);e("db4d"),a.a.use(b.a),a.a.config.productionTip=!1,new a.a({render:function(t){return t(u)}}).$mount("#lastorigin_resource_farming_calculator")}});