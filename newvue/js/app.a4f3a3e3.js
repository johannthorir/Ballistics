(function(e){function t(t){for(var s,r,a=t[0],c=t[1],u=t[2],p=0,d=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Ballistics/newvue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),i=n.n(s);i.a},"22d7":function(e,t,n){"use strict";var s=n("be87"),i=n.n(s);i.a},4147:function(e,t,n){"use strict";var s=n("6605"),i=n.n(s);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r={name:"App"},a=r,c=(n("034f"),n("2877")),u=Object(c["a"])(a,i,o,!1,null,null,null),l=u.exports,p=n("2f62"),d=n("9224");s["a"].use(p["a"]);var h=new p["a"].Store({state:{version:d["a"],loads:[{id:48,date:"2014-06-13T12:00:00.000Z",name:"Sierra 70gr HBPT MK",weight:.00454,system:"G1",bc:.26,tempSens:.94,speed:1045.1,range:200,offset:0,click:20,temperature:14,pressure:1024,windspeed:0,winddirection:0},{id:60,date:"2018-04-06T09:30:00.000Z",name:"Nosler 95gr BT",weight:.006155,system:"G1",bc:.379,tempSens:.55,speed:940.3,range:100,offset:.035,click:0,temperature:11,pressure:998,windspeed:4,winddirection:320/180*Math.PI},{id:59,date:"2018-04-06T09:30:00.000Z",name:"Nosler 95gr BT (magnetospeed)",weight:.006155,system:"G1",bc:.379,tempSens:.55,speed:932.6,range:100,offset:-.032,click:0,temperature:-1,pressure:1017,windspeed:4,winddirection:320/180*Math.PI},{id:58,date:"2017-07-27T09:00:00.000Z",name:"Berger FB 88gr",weight:.0057,system:"G1",bc:.38,tempSens:.55,speed:987.6,range:100,offset:.008,click:0,temperature:12,pressure:999,windspeed:4,winddirection:220/180*Math.PI},{id:49,date:"2014-06-22T10:30.00.000Z",name:"Lapua Scenar 90gr",weight:.0058,system:"G7",bc:.216,tempSens:.55,speed:938.8,range:100,offset:-.106,click:0,temperature:10,pressure:1020,windspeed:0,winddirection:0}]},getters:{}});h.subscribe((function(e,t){console.log(e),console.log(t),console.log("store updated...")}));var f=h,m=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.projectile.showLoadDialog?n("modal",{on:{close:function(t){e.projectile.showLoadDialog=!1}}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("Select load")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("ul",{staticClass:"load-list"},e._l(this.$store.state.loads,(function(t,s){return n("li",{key:t.id,on:{click:function(t){return e.selectLoad(s)}}},[e._v("(#"+e._s(t.id)+") - "+e._s(t.name))])})),0)]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("a",{on:{click:function(t){e.projectile.showLoadDialog=!1}}},[e._v("Cancel")])])]):e._e(),n("h1",[e._v(e._s(e.load.name))]),n("div",{staticClass:"s",staticStyle:{padding:"0px 10px"}},[n("p",[n("a",{on:{click:function(t){e.projectile.showLoadDialog=!0}}},[e._v("Click to select from known loads ")])])]),n("div",{staticStyle:{display:"block","min-width":"24em","vertical-align":"bottom"}},[n("div",{staticClass:"s"},[n("h3",{class:{active:e.projectile.show},on:{click:function(t){e.projectile.show=!e.projectile.show}}},[e._v(e._s(e.projectile.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.projectile.show,expression:"projectile.show"}],staticClass:"inputs"},[n("label",{staticClass:"field"},[n("span",{staticClass:"label"},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.load.name,expression:"load.name"}],attrs:{type:"text",size:"20"},domProps:{value:e.load.name},on:{input:function(t){t.target.composing||e.$set(e.load,"name",t.target.value)}}})]),n("number-input",{attrs:{name:"Bullet Weight",units:e.units.bulletWeight},on:{input:function(t){return e.refresh()}},model:{value:e.load.weight,callback:function(t){e.$set(e.load,"weight",e._n(t))},expression:"load.weight"}}),n("number-input",{attrs:{name:e.load.system+" BC",units:e.units.ballisticCoefficient},on:{input:function(t){return e.refresh()}},model:{value:e.load.bc,callback:function(t){e.$set(e.load,"bc",e._n(t))},expression:"load.bc"}}),n("number-input",{attrs:{name:"Temp. sens.  ",units:e.units.tempSens},on:{input:function(t){return e.refresh()}},model:{value:e.load.tempSens,callback:function(t){e.$set(e.load,"tempSens",e._n(t))},expression:"load.tempSens"}})],1)]),n("div",{staticClass:"s"},[n("h3",{class:{active:e.scopeInfo.show},on:{click:function(t){e.scopeInfo.show=!e.scopeInfo.show}}},[e._v(e._s(e.scopeInfo.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.scopeInfo.show,expression:"scopeInfo.show"}],staticClass:"inputs"},[n("number-input",{attrs:{name:"Current Click",units:e.units.scopeClick},on:{input:function(t){return e.refresh()}},model:{value:e.scopeInfo.currentClick,callback:function(t){e.$set(e.scopeInfo,"currentClick",e._n(t))},expression:"scopeInfo.currentClick"}}),n("number-input",{attrs:{name:"Scope Height ",units:e.units.offset},on:{input:function(t){return e.refresh()}},model:{value:e.scopeInfo.height,callback:function(t){e.$set(e.scopeInfo,"height",e._n(t))},expression:"scopeInfo.height      "}}),n("number-input",{attrs:{name:"Vert. click  ",units:e.units.clickSize},on:{input:function(t){return e.refresh()}},model:{value:e.scopeInfo.verClick,callback:function(t){e.$set(e.scopeInfo,"verClick",e._n(t))},expression:"scopeInfo.verClick    "}}),n("number-input",{attrs:{name:"Hor. click   ",units:e.units.clickSize},on:{input:function(t){return e.refresh()}},model:{value:e.scopeInfo.horClick,callback:function(t){e.$set(e.scopeInfo,"horClick",e._n(t))},expression:"scopeInfo.horClick    "}})],1)]),n("div",{staticClass:"s"},[n("h3",{class:{active:e.zeroInfo.show},on:{click:function(t){e.zeroInfo.show=!e.zeroInfo.show}}},[e._v(e._s(e.zeroInfo.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.zeroInfo.show,expression:"zeroInfo.show"}],staticClass:"inputs"},[n("number-input",{attrs:{name:"Speed",units:e.units.velocity},on:{input:function(t){return e.refresh()}},model:{value:e.load.speed,callback:function(t){e.$set(e.load,"speed",e._n(t))},expression:"load.speed"}}),n("number-input",{attrs:{name:"Range",units:e.units.range},on:{input:function(t){return e.refresh()}},model:{value:e.load.range,callback:function(t){e.$set(e.load,"range",e._n(t))},expression:"load.range"}}),n("number-input",{attrs:{name:"Offset",units:e.units.offset},on:{input:function(t){return e.refresh()}},model:{value:e.load.offset,callback:function(t){e.$set(e.load,"offset",e._n(t))},expression:"load.offset"}}),n("number-input",{attrs:{name:"Click",units:e.units.scopeClick},on:{input:function(t){return e.refresh()}},model:{value:e.load.click,callback:function(t){e.$set(e.load,"click",e._n(t))},expression:"load.click"}}),n("number-input",{attrs:{name:"Temperature",units:e.units.temperature},on:{input:function(t){return e.refresh()}},model:{value:e.load.temperature,callback:function(t){e.$set(e.load,"temperature",e._n(t))},expression:"load.temperature"}}),n("number-input",{attrs:{name:"Pressure",units:e.units.pressure},on:{input:function(t){return e.refresh()}},model:{value:e.load.pressure,callback:function(t){e.$set(e.load,"pressure",e._n(t))},expression:"load.pressure"}})],1)]),n("div",{staticClass:"s"},[n("h3",{class:{active:e.environment.show},on:{click:function(t){e.environment.show=!e.environment.show}}},[e._v(e._s(e.environment.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.environment.show,expression:"environment.show"}],staticClass:"inputs"},[n("number-input",{attrs:{name:"Wind speed        ",units:e.units.speed},on:{input:function(t){return e.refresh()}},model:{value:e.environment.windspeed,callback:function(t){e.$set(e.environment,"windspeed",e._n(t))},expression:"environment.windspeed     "}}),n("number-input",{attrs:{name:"Wind direction    ",units:e.units.direction},on:{input:function(t){return e.refresh()}},model:{value:e.environment.winddirection,callback:function(t){e.$set(e.environment,"winddirection",e._n(t))},expression:"environment.winddirection "}}),n("number-input",{attrs:{name:"Local temperature ",units:e.units.temperature},on:{input:function(t){return e.refresh()}},model:{value:e.environment.temperature,callback:function(t){e.$set(e.environment,"temperature",e._n(t))},expression:"environment.temperature   "}}),n("number-input",{attrs:{name:"Local pressure    ",units:e.units.pressure},on:{input:function(t){return e.refresh()}},model:{value:e.environment.pressure,callback:function(t){e.$set(e.environment,"pressure",e._n(t))},expression:"environment.pressure      "}}),n("number-input",{attrs:{name:"Shooting direction",units:e.units.direction},on:{input:function(t){return e.refresh()}},model:{value:e.environment.shootdirection,callback:function(t){e.$set(e.environment,"shootdirection",e._n(t))},expression:"environment.shootdirection"}}),n("label",{staticClass:"field center"},[n("button",{attrs:{id:"weatherbutton"},on:{click:e.fetchWeather}},[e._v("Get actual weather")])])],1)]),n("div",{staticClass:"s"},[n("h3",{class:{active:e.scopeInfo.showScopeAdjust},on:{click:function(t){e.scopeInfo.showScopeAdjust=!e.scopeInfo.showScopeAdjust}}},[e._v("Scope")]),e.scopeInfo.showScopeAdjust?n("Scope",{ref:"scope",attrs:{load:e.load,"scope-info":e.scopeInfo,solution:e.solution},on:{clickity:function(t){return e.refresh()}}}):e._e()],1),n("div",{staticClass:"s"},[n("h3",{class:{active:e.solution.show},on:{click:function(t){e.solution.show=!e.solution.show}}},[e._v(e._s(e.solution.title))]),e.solution.show?n("Solution",{attrs:{solution:e.solution}}):e._e()],1),n("div",{staticClass:"info"},[n("div",[e._v("Crosswind is "+e._s(e.crossWindStrength.toFixed(1))+" m/s from "+e._s(e.crossWindSide))]),n("div",[n("i",[e._v("Current zero at "+e._s(e.solution.envelope.zeros.far.toFixed(1))+" m for click "+e._s(e.scopeInfo.currentClick-e.load.click))])]),n("div",[e._v("Pbr: "+e._s(e.solution.envelope.pbr.near.toFixed(1))+" m - "+e._s(e.solution.envelope.pbr.far.toFixed(1))+" m "),e.solution.envelope.maxPoint.y>0?n("span",[e._v(" — Zone: "+e._s((2*e.solution.envelope.maxPoint.y*1e3).toFixed(0))+" mm.")]):e._e()])])])],1)},b=[],g=(n("2af1"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.solution.show?n("table",{staticClass:"solution"},[e._m(0),e._m(1),e._l(e.solution.path,(function(t){return n("tr",{key:t.x,class:t.u},[n("td",[e._v(e._s(t.x))]),n("td",[e._v(e._s((3.28084*t.v).toFixed(0)))]),n("td",[e._v(e._s((1e3*t.y).toFixed(0)))]),n("td",[e._v(e._s((-t.c).toFixed(1)))]),n("td",[e._v(e._s((1e3*t.z).toFixed(0)))]),n("td",[e._v(e._s((1e3*t.t).toFixed(0)))]),n("td",[e._v(e._s(t.e.toFixed(0)))])])}))],2):e._e()}),w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Range")]),e._v(" "),n("th",[e._v("Speed")]),n("th",[e._v("Path")]),e._v(" "),n("th",[e._v("Clicks")]),e._v(" "),n("th",[e._v("Wind")]),e._v(" "),n("th",[e._v("Time")]),n("th",[e._v("Energy")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("m")]),e._v(" "),n("th",[e._v("fps")]),n("th",[e._v("mm")]),e._v(" "),n("th"),e._v(" "),n("th",[e._v("mm")]),e._v(" "),n("th",[e._v("ms")]),e._v(" "),n("th",[e._v("Joule")])])}],_={name:"Solution",props:{solution:Object}},x=_,k=(n("e8d7"),Object(c["a"])(x,g,w,!1,null,"3d48c8bc",null)),I=k.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("span",{staticClass:"label",on:{click:e.toggleUnits}},[e._v(e._s(e.name))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.displayValue,expression:"displayValue"}],staticClass:"number",attrs:{type:"text"},domProps:{value:e.displayValue},on:{blur:function(t){e.isActive=!1},focus:function(t){e.isActive=!0},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.inc(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.dec(t)}],input:function(t){t.target.composing||(e.displayValue=t.target.value)}}}),e._v(" "),n("span",{staticClass:"unit",on:{click:e.toggleUnits}},[e._v(" "+e._s(e.unitString)+" ")])])},C=[],M=(n("a9e3"),n("b680"),n("2ef0")),S=n.n(M),P={name:"number-input",props:{name:String,value:Number,units:{type:Array,default:function(){return[{unit:"",step:1,precision:0,a:0,b:1}]}}},data:function(){return{isActive:!1,displayed:0,unitIndex:0}},methods:{inc:function(){var e=this.toBase(this.units[this.unitIndex].step);this.$emit("input",this.value+e)},dec:function(){var e=this.toBase(this.units[this.unitIndex].step);this.$emit("input",this.value-e)},toBase:function(e){return(e-this.units[this.unitIndex].a)/this.units[this.unitIndex].b},toDisplay:function(e){return this.units[this.unitIndex].a+e*this.units[this.unitIndex].b},changed:S.a.debounce((function(){this.$emit("input",parseFloat(this.value.toFixed(this.units[0].precision)))}),100,{leading:!0,maxWait:500}),toggleUnits:function(){this.unitIndex=(this.unitIndex+1)%this.units.length}},computed:{unitString:{get:function(){return this.units[this.unitIndex].unit}},displayValue:{get:function(){return parseFloat(this.toDisplay(this.value).toFixed(this.units[this.unitIndex].precision))},set:function(e){var t=this.toBase(parseFloat(e));isNaN(t)&&(t=0),this.$emit("input",t)}}}},A=P,z=(n("7424"),Object(c["a"])(A,y,C,!1,null,"285a02a2",null)),D=z.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scopecontainer"},[n("canvas",{ref:"canvas",staticClass:"scope",attrs:{width:"360",height:"360"},on:{pointermove:function(t){return t.preventDefault(),e.mmove(t)},pointerdown:function(t){return t.preventDefault(),e.mdown(t)},pointerup:e.mup,touchmove:function(t){return t.preventDefault(),e.touchmove(t)},touchstart:function(t){return t.preventDefault(),e.touchstart(t)}}})])},j=[],F=(n("cb29"),n("b65f"),{name:"Scope",props:["load","scopeInfo","solution"],mounted:function(){this.render()},data:function(){return{rotating:null,captured:!1}},created:function(){console.log("created"),this.rotating=new Image,this.rotating.src=n("7524"),this.rotating.onload=this.render},methods:{mmove:function(e){e&&e.preventDefault(),this.captured&&this.move(e,e.target.getBoundingClientRect())},mdown:function(e){e&&e.preventDefault,this.captured=!0,e.target.setPointerCapture(e.pointerId),this.start(e,e.target.getBoundingClientRect())},mup:function(e){e&&e.preventDefault,e.target.releasePointerCapture(e.pointerId),this.captured=!1},start:function(e,t){var n=e.clientX-t.x-this.scopeInfo.center.x,s=e.clientY-t.y-this.scopeInfo.center.y;this.scopeInfo.initial=Math.atan2(n,s),this.scopeInfo.accumulated=0},move:function(e,t){var n=e.clientX-t.x-this.scopeInfo.center.x,s=e.clientY-t.y-this.scopeInfo.center.y,i=Math.atan2(n,s),o=i-this.scopeInfo.initial;o>Math.PI&&(o-=2*Math.PI),o<-Math.PI&&(o+=2*Math.PI);var r=o*this.scopeInfo.clicksPrTurn/(2*Math.PI);if(this.scopeInfo.accumulated+=r,Math.abs(this.scopeInfo.accumulated)>1){var a=Math.trunc(this.scopeInfo.accumulated);this.scopeInfo.accumulated-=a,this.scopeInfo.currentClick+=a,this.$emit("clickity")}this.scopeInfo.initial=i},render:function(){if(this.scopeInfo.showScopeAdjust){var e=this.$refs.canvas,t=e.getContext("2d"),n=this.scopeInfo.center.x,s=this.scopeInfo.center.y;t.clearRect(0,0,360,360),t.save(),t.translate(n,s),t.rotate(360*-this.scopeInfo.currentClick/this.scopeInfo.clicksPrTurn*Math.PI/180),t.drawImage(this.rotating,-n,-s),t.restore(),t.fillStyle="rgb(255,225,0)",t.textAlign="center",t.textBaseline="bottom";var i=131,o=5,r=void 0;for(var a in this.solution.path){var c=this.solution.path[a].x,u=this.solution.path[a].u;"X"==u?(t.font="bold 16px Sans-Serif",o=4):"o"==u&&(t.font="14px Sans-Serif",o=2.5);var l=-this.solution.path[a].c;r=void 0===r||l<r?l:r,l-r>=this.scopeInfo.clicksPrTurn&&(i=144,t.fillStyle="rgb(255,125,0)"),t.save(),t.translate(n,s),t.rotate(2*l*Math.PI/this.scopeInfo.clicksPrTurn),"z"!=u?t.fillText(c,0,-i-6):o=2,t.beginPath(),t.arc(0,-i,o,0,2*Math.PI,!1),t.fill(),t.restore()}t.font="bold 18px sans-serif",t.fillStyle="rgb(240,240,255)",t.textBaseline="middle",t.fillText(this.scopeInfo.currentClick-this.load.click,n,s)}}}}),O=F,N=(n("997e"),Object(c["a"])(O,$,j,!1,null,"6ee508c0",null)),R=N.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("h3",[e._t("header",[e._v("default header")])],2)]),n("div",{staticClass:"modal-body"},[e._t("body",[n("ul",[n("li",[e._v("default body")]),n("li",[e._v("aoth")]),n("li",[e._v("fleh")])])])],2),n("div",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:function(t){return e.$emit("close")}}},[e._v(" OK ")])])],2)])])])])},W=[],B={name:"modal"},G=B,L=(n("22d7"),Object(c["a"])(G,T,W,!1,null,null,null)),E=L.exports,H=n("2b79"),K={KGasGrain:{unit:"gr",step:1,precision:0,a:0,b:15432.4},KGasGram:{unit:"g",step:.05,precision:2,a:0,b:1e3},NoneSmall:{unit:"",step:.001,precision:3,a:0,b:1},MPSprC:{unit:"m/s / °C",step:.01,precision:2,a:0,b:1},MPSprCasFPSprF:{unit:"fps / °F",step:.1,precision:1,a:0,b:1.82268888888889},MPSprCasFPSprC:{unit:"fps/°C",step:.1,precision:1,a:0,b:3.28084},MPSprCasMPSprF:{unit:"m/s / °F",step:.01,precision:2,a:0,b:.555555555555556},MPSasFPS:{unit:"fps",step:1,precision:0,a:0,b:3.28084},FPSasMPS:{unit:"m/s",step:.5,precision:1,a:0,b:.3048},Meters:{unit:"m",step:5,precision:0,a:0,b:1},MetersAsYards:{unit:"yd",step:5,precision:0,a:0,b:1.09361},MetersAsFeet:{unit:"ft",step:1,precision:0,a:0,b:3.28084},MPS:{unit:"m/s",step:.1,precision:1,a:0,b:1},MPSasKM:{unit:"km/h",step:.1,precision:1,a:0,b:3.6},MPSasMPH:{unit:"Mph",step:.1,precision:1,a:0,b:2.23694},MetersAsMM:{unit:"mm",step:1,precision:0,a:0,b:1e3},MetersAsCM:{unit:"cm",step:.5,precision:1,a:0,b:100},MetersAsIN:{unit:"in",step:.1,precision:1,a:0,b:39.3701},NoneInteger:{unit:"",step:1,precision:0,a:0,b:1},Celsius:{unit:"°C",step:.1,precision:1,a:0,b:1},CelsiusAsFahrenheit:{unit:"°F",step:.1,precision:1,a:32,b:1.8},RADasDegrees:{unit:"°",step:1,precision:0,a:0,b:180/Math.PI},RADasClock:{unit:"o'clock",step:1,precision:0,a:0,b:6/Math.PI},RADasMil:{unit:"MIL",step:1,precision:0,a:0,b:3200/Math.PI},Degrees:{unit:"°",step:1,precision:0,a:0,b:1},DegreesAsClock:{unit:"o'clock",step:1,precision:0,a:0,b:12/360},DegreesAsMil:{unit:"MIL",step:1,precision:0,a:0,b:6400/360},MRAD:{unit:"mrad",step:.01,precision:2,a:0,b:1},MRADasCM:{unit:"cm/100m",step:.1,precision:2,a:0,b:10},MRADasIN:{unit:"in/100yd",step:.05,precision:3,a:0,b:3.60000009259259},MRADasMOA:{unit:"MOA",step:.01,precision:3,a:0,b:3.43774677078494},RADasMRAD:{unit:"mrad",step:.001,precision:3,a:0,b:1e3},RADasCM:{unit:"cm/100m",step:.01,precision:2,a:0,b:1e4},RADasIN:{unit:"in/100yd",step:.005,precision:3,a:0,b:3600.00009259259},RADasMOA:{unit:"MOA",step:.01,precision:2,a:0,b:3437.74677078494},HPA:{unit:"hPa",step:1,precision:0,a:0,b:1},HPAasINHG:{unit:"inHg",step:.1,precision:1,a:0,b:.029529983071445}},Z=K;s["a"].component("Scope",R),s["a"].component("number-input",D),s["a"].component("Solution",I),s["a"].component("Modal",E);var X=new H["b"],V="https://vpn.kiesel.is/weather/keflavik.json",U={name:"standard",methods:{fetchWeather:function(){var e=this;s["a"].axios.get(V).then((function(t){var n=t.data,i={title:"KEF Environment at "+new Date(1e3*n.dt).toLocaleTimeString("IS-is"),show:!0,windspeed:n.wind.speed,winddirection:n.wind.deg/180*Math.PI,temperature:n.main.temp,pressure:n.main.pressure,shootdirection:e.environment.shootdirection};s["a"].set(e,"environment",i),e.refresh()}))},selectLoad:function(e){s["a"].set(this,"load",this.$store.state.loads[e]),this.projectile.showLoadDialog=!1,this.refresh()},refresh:function(){this.solve(),this.$refs.scope&&this.$refs.scope.render()},persist:function(){this.$store.dispatch("persist")},bound:function(e,t,n){return Math.max(t,Math.min(e,n))},solve:function(){var e=this.load.system,t=this.bound(this.load.bc,.1,1),n=this.bound(this.load.weight,.001,1),i=this.bound(this.scopeInfo.height,0,.2),o=this.bound(this.load.range,50,1e3),r=this.bound(this.load.speed,500,5e3),a=this.bound(this.load.pressure,910,1100),c=this.bound(this.load.temperature,-30,50),u=this.load.offset,l=this.bound(this.environment.temperature,-30,50),p=this.bound(this.environment.pressure,910,1100),d=r+(l-c)*this.load.tempSens,h=this.bound(this.environment.windspeed,0,40),f=this.environment.winddirection-this.environment.shootdirection,m=new H["a"](c,a,.5,0,0),v=new H["a"](l,p,.5,h,f);this.environment.crossWind=v.crossWind;for(var b=X.getZeroingAngle(o,u,r,n,t,e,i,m),g=(this.scopeInfo.currentClick-this.load.click)*this.scopeInfo.verClick,w=this.solution.path[this.solution.path.length-1].x,_=X.getTrajectory(w+.1,b+g,d,n,t,e,i,v),x=X.getEnvelope(_),k=0,I=[],y=Math.tan(this.scopeInfo.verClick),C=1;C<_.length&&k<this.solution.path.length;C++){var M=_[C];if(M.x>this.solution.path[k].x){var S=this.solution.path[k].x,P=X.linearInterpolate(S,_[C-1],M);I[k]={x:S,y:P.y,c:P.y/(y*S),z:P.w,v:P.v,e:P.e,t:P.t,u:this.solution.path[k].u},k++}}s["a"].set(this.solution,"envelope",x),s["a"].set(this.solution,"path",I)}},computed:{crossWindStrength:function(){return Math.abs(this.environment.crossWind)},crossWindDirection:function(){return Math.sign(this.environment.crossWind)},crossWindSide:function(){return this.environment.crossWind<0?"left to right":"right to left "}},created:function(){s["a"].set(this,"load",this.$store.state.loads[0]),this.solve(),console.log(X.pressureCorrection(10,500,1013.25))},data:function(){return{units:{bulletWeight:[Z.KGasGrain,Z.KGasGram],ballisticCoefficient:[Z.NoneSmall],tempSens:[Z.MPSprC,Z.MPSprCasFPSprF,Z.MPSprCasFPSprC,Z.MPSprCasMPSprF],velocity:[Z.MPSasFPS,Z.MPS],range:[Z.Meters,Z.MetersAsYards,Z.MetersAsFeet],speed:[Z.MPS,Z.MPSasKM,Z.MPSasMPH],offset:[Z.MetersAsMM,Z.MetersAsCM,Z.MetersAsIN],scopeClick:[Z.NoneInteger],temperature:[Z.Celsius,Z.CelsiusAsFahrenheit],direction:[Z.RADasDegrees,Z.RADasClock,Z.RADasMil],clickSize:[Z.RADasMRAD,Z.RADasCM,Z.RADasIN,Z.RADasMOA],pressure:[Z.HPA,Z.HPAasINHG]},showScopeAdjust:!0,load:{id:59,date:"2018-04-06T09:30:00.000Z",name:"Nosler 95gr BT",weight:.006155,system:"G7",bc:.19,tempSens:.94,speed:932.6,range:100,offset:-.032,click:0,temperature:-1,pressure:1017,windspeed:4,winddirection:320/180*Math.PI},projectile:{title:"Projectile",show:!1,showLoadDialog:!1,adjustedSpeed:3e3},zeroInfo:{title:"Zeroing conditions",show:!1},scopeInfo:{title:"Scope setup",show:!1,height:.044,verClick:7e-5,horClick:7e-5,clicksPrTurn:35,currentClick:0,accumulated:0,center:{x:181,y:179},showScopeAdjust:!0},environment:{title:"Environmentals",show:!1,windspeed:3,winddirection:.35*Math.PI,temperature:-1,pressure:1017,shootdirection:1*Math.PI,crossWindStrength:0,crossWindDirection:0},solution:{title:"Solution",show:!0,envelope:{maxPoint:{x:0,y:0,w:0,t:0},pbr:{near:0,far:0},zeros:{near:0,far:0}},path:[{x:25,y:-.032,c:-5.7,z:.015,v:2762,t:.113,e:0,u:"z"},{x:50,y:-.077,c:-7.3,z:.034,v:2628,t:.174,e:0,u:"o"},{x:75,y:-.16,c:-9.2,z:.061,v:2501,t:.238,e:0,u:"z"},{x:100,y:-.032,c:-4.6,z:.015,v:2762,t:.113,e:0,u:"X"},{x:125,y:-.032,c:-5.7,z:.015,v:2762,t:.113,e:0,u:"z"},{x:150,y:-.077,c:-7.3,z:.034,v:2628,t:.174,e:0,u:"o"},{x:175,y:-.16,c:-9.2,z:.061,v:2501,t:.238,e:0,u:"z"},{x:200,y:-.16,c:-11.4,z:.061,v:2501,t:.238,e:0,u:"X"},{x:225,y:-.16,c:-13.7,z:.061,v:2501,t:.238,e:0,u:"z"},{x:250,y:-.285,c:-16.3,z:.098,v:2380,t:.305,e:0,u:"o"},{x:275,y:-.457,c:-19,z:.143,v:2264,t:.376,e:0,u:"z"},{x:300,y:-.457,c:-21.8,z:.143,v:2264,t:.376,e:0,u:"X"},{x:325,y:-.68,c:-24.8,z:.199,v:2154,t:.45,e:0,u:"z"},{x:350,y:-.68,c:-28,z:.199,v:2154,t:.45,e:0,u:"o"},{x:375,y:-.961,c:-31.3,z:.265,v:2049,t:.528,e:0,u:"z"},{x:400,y:-.961,c:-34.7,z:.265,v:2049,t:.528,e:0,u:"X"},{x:425,y:-1.305,c:-38.3,z:.342,v:1949,t:.61,e:0,u:"z"},{x:450,y:-1.305,c:-42.1,z:.342,v:1949,t:.61,e:0,u:"o"},{x:475,y:-1.719,c:-46.1,z:.431,v:1853,t:.697,e:0,u:"z"},{x:500,y:-1.719,c:-50.2,z:.431,v:1853,t:.697,e:0,u:"X"}]}}}},J=U,Y=(n("4147"),Object(c["a"])(J,v,b,!1,null,"ff8f6c86",null)),q=Y.exports;s["a"].use(m["a"]);var Q=new m["a"]({routes:[{path:"/",name:"Main",component:q}]}),ee=n("bc3a"),te=n.n(ee),ne=n("a7fe"),se=n.n(ne);s["a"].use(se.a,te.a),s["a"].config.productionTip=!0,new s["a"]({render:function(e){return e(l)},router:Q,store:f}).$mount("#app")},6605:function(e,t,n){},"6a30":function(e,t,n){},7424:function(e,t,n){"use strict";var s=n("6a30"),i=n.n(s);i.a},7524:function(e,t,n){e.exports=n.p+"img/rotating.01ccb0bf.png"},"85ec":function(e,t,n){},8821:function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},"997e":function(e,t,n){"use strict";var s=n("8821"),i=n.n(s);i.a},"9ffe":function(e,t,n){},be87:function(e,t,n){},e8d7:function(e,t,n){"use strict";var s=n("9ffe"),i=n.n(s);i.a}});
//# sourceMappingURL=app.a4f3a3e3.js.map