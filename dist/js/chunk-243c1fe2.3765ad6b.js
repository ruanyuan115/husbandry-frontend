(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-243c1fe2"],{"20f6":function(t,a,e){},"35fd":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[e("base-v-component",{attrs:{heading:"Simple Tables",link:"components/simple-tables"}}),e("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"mdi-clipboard-text",title:"Simple Table"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",{staticClass:"primary--text"},[t._v(" ID ")]),e("th",{staticClass:"primary--text"},[t._v(" Name ")]),e("th",{staticClass:"primary--text"},[t._v(" Country ")]),e("th",{staticClass:"primary--text"},[t._v(" City ")]),e("th",{staticClass:"text-right primary--text"},[t._v(" Salary ")])])]),e("tbody",[e("tr",[e("td",[t._v("1")]),e("td",[t._v("Dakota Rice")]),e("td",[t._v("Niger")]),e("td",[t._v("Oud-Turnhout")]),e("td",{staticClass:"text-right"},[t._v(" $36,738 ")])]),e("tr",[e("td",[t._v("2")]),e("td",[t._v("Minverva Hooper")]),e("td",[t._v("Curaçao")]),e("td",[t._v("Sinaas-Waas")]),e("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),e("tr",[e("td",[t._v("3")]),e("td",[t._v("Sage Rodriguez")]),e("td",[t._v("Netherlands")]),e("td",[t._v("Baileux")]),e("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),e("tr",[e("td",[t._v("4")]),e("td",[t._v("Philip Chaney")]),e("td",[t._v("Korea, South")]),e("td",[t._v("Overland Park")]),e("td",{staticClass:"text-right"},[t._v(" $38,735 ")])]),e("tr",[e("td",[t._v("5")]),e("td",[t._v("Doris Greene")]),e("td",[t._v("Malawi")]),e("td",[t._v("Feldkirchen in Kärnten")]),e("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),e("tr",[e("td",[t._v("6")]),e("td",[t._v("Mason Porter")]),e("td",[t._v("Chile")]),e("td",[t._v("Gloucester")]),e("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1),e("div",{staticClass:"py-3"}),e("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",dark:"",icon:"mdi-clipboard-plus",title:"Table on Dark Background"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",[t._v("ID")]),e("th",[t._v("Name")]),e("th",[t._v("Country")]),e("th",[t._v("City")]),e("th",{staticClass:"text-right"},[t._v(" Salary ")])])]),e("tbody",[e("tr",[e("td",[t._v("1")]),e("td",[t._v("Dakota Rice")]),e("td",[t._v("Niger")]),e("td",[t._v("Oud-Turnhout")]),e("td",{staticClass:"text-right"},[t._v(" $36,738 ")])]),e("tr",[e("td",[t._v("2")]),e("td",[t._v("Minverva Hooper")]),e("td",[t._v("Curaçao")]),e("td",[t._v("Sinaas-Waas")]),e("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),e("tr",[e("td",[t._v("3")]),e("td",[t._v("Sage Rodriguez")]),e("td",[t._v("Netherlands")]),e("td",[t._v("Baileux")]),e("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),e("tr",[e("td",[t._v("4")]),e("td",[t._v("Philip Chaney")]),e("td",[t._v("Korea, South")]),e("td",[t._v("Overland Park")]),e("td",{staticClass:"text-right"},[t._v(" $38,735 ")])]),e("tr",[e("td",[t._v("5")]),e("td",[t._v("Doris Greene")]),e("td",[t._v("Malawi")]),e("td",[t._v("Feldkirchen in Kärnten")]),e("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),e("tr",[e("td",[t._v("6")]),e("td",[t._v("Mason Porter")]),e("td",[t._v("Chile")]),e("td",[t._v("Gloucester")]),e("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1)],1)},r=[],i=e("2877"),d=e("6544"),n=e.n(d),l=e("a523"),o=(e("a9e3"),e("5530")),v=(e("8b37"),e("80d2")),c=e("7560"),h=e("58df"),_=Object(h["a"])(c["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(o["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(v["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),u={},p=Object(i["a"])(u,s,r,!1,null,null,null);a["default"]=p.exports;n()(p,{VContainer:l["a"],VSimpleTable:_})},"8b37":function(t,a,e){},a523:function(t,a,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85"),e("a15b"),e("498a");var s=e("a026");function r(t){return s["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var s=e.props,r=e.data,i=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var d=r.attrs;if(d){r.attrs={};var n=Object.keys(d).filter((function(t){if("slot"===t)return!1;var a=d[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}));n.length&&(r.staticClass+=" ".concat(n.join(" ")))}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),a(s.tag,r,i)}})}var i=e("d9f7");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,s=a.props,r=a.data,d=a.children,n=r.attrs;return n&&(r.attrs={},e=Object.keys(n).filter((function(t){if("slot"===t)return!1;var a=n[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),t(s.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(e||[])}),d)}})}}]);
//# sourceMappingURL=chunk-243c1fe2.3765ad6b.js.map