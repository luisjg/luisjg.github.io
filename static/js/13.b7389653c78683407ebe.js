webpackJsonp([13],{"/o5o":function(t,e,s){"use strict";function a(t){s("A1Nk")}Object.defineProperty(e,"__esModule",{value:!0});var o={props:["modalAttrs"],mounted:function(){var t=this;document.addEventListener("keydown",function(e){27===e.keyCode&&t.closeModal()})},methods:{closeModal:function(){document.documentElement.classList.remove("is-clipped"),this.$emit("disable")}}},n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",attrs:{id:"modal"}},[s("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title",domProps:{innerHTML:t._s(t.modalAttrs.title)}}),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("strong",[t._v("Project Details")]),t._v(" "),s("p",{staticClass:"paragraph-styled pb",domProps:{innerHTML:t._s(t.modalAttrs.details)}}),t._v(" "),t.modalAttrs.tech_stack?[s("strong",[t._v("Technology Stack")]),t._v(" "),s("p",{staticClass:"paragraph-styled pb",domProps:{innerHTML:t._s(t.modalAttrs.tech_stack)}})]:t._e(),t._v(" "),t.modalAttrs.roles?s("div",{staticClass:"pb"},[s("strong",[t._v("Role in the project")]),t._v(" "),s("ul",{staticClass:"li-styled"},t._l(t.modalAttrs.roles,function(e,a){return s("li",{key:a,domProps:{innerHTML:t._s(e)}})}),0)]):t._e(),t._v(" "),t.modalAttrs.image?[s("strong",[t._v("Screen Shot")]),t._v(" "),s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.modalAttrs.image}})])]:t._e()],2),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("a",{staticClass:"button btn-color",attrs:{href:t.modalAttrs.url,rel:"noreferrer",title:t.modalAttrs.title+" link",target:"_blank"},domProps:{innerHTML:t._s("Visit "+t.modalAttrs.title)}})])])])},r=[],l={render:n,staticRenderFns:r},d=l,i=s("VU/8"),c=a,m=i(o,d,!1,c,"data-v-72746f5e",null);e.default=m.exports},A1Nk:function(t,e,s){var a=s("qKdB");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("44fab588",a,!0,{})},qKdB:function(t,e,s){e=t.exports=s("FZ+f")(!0),e.push([t.i,"\n.btn-color[data-v-72746f5e] {\n  background-color: #766C7F;\n  color: whitesmoke;\n}\n.paragraph-styled[data-v-72746f5e] {\n  line-heigh: 1rem;\n}\n.li-styled[data-v-72746f5e] {\n  padding-left: 1rem;\n}\n.pb[data-v-72746f5e] {\n  padding-bottom: 1rem;\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg.github.io/vue-redesign/src/components/Modal.vue"],names:[],mappings:";AACA;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB",file:"Modal.vue",sourcesContent:["\n.btn-color[data-v-72746f5e] {\n  background-color: #766C7F;\n  color: whitesmoke;\n}\n.paragraph-styled[data-v-72746f5e] {\n  line-heigh: 1rem;\n}\n.li-styled[data-v-72746f5e] {\n  padding-left: 1rem;\n}\n.pb[data-v-72746f5e] {\n  padding-bottom: 1rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=13.b7389653c78683407ebe.js.map