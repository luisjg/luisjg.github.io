webpackJsonp([14],{"/o5o":function(t,e,a){"use strict";function s(t){a("k+yy")}Object.defineProperty(e,"__esModule",{value:!0});var o={props:["modalAttrs"],mounted:function(){var t=this;document.addEventListener("keydown",function(e){27===e.keyCode&&t.closeModal()})},methods:{closeModal:function(){document.documentElement.classList.remove("is-clipped"),this.$emit("disable")}},computed:{displayDetailsOrHighlights:function(){return"gcc"!==this.modalAttrs.id&&"csun"!==this.modalAttrs.id},modifyModalTitle:function(){return"csun"===this.modalAttrs.id?"Cal State Northridge":this.modalAttrs.title}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",attrs:{id:"modal"}},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title",domProps:{innerHTML:t._s(t.modifyModalTitle)}}),t._v(" "),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}})]),t._v(" "),a("section",{staticClass:"modal-card-body"},[t.displayDetailsOrHighlights?a("strong",[t._v("Project Details")]):a("strong",[t._v("Highlights")]),t._v(" "),a("p",{staticClass:"paragraph-styled pb-1",domProps:{innerHTML:t._s(t.modalAttrs.details)}}),t._v(" "),t.modalAttrs.tech_stack?[a("strong",[t._v("Technology Stack")]),t._v(" "),a("p",{staticClass:"paragraph-styled pb-1",domProps:{innerHTML:t._s(t.modalAttrs.tech_stack)}})]:t._e(),t._v(" "),t.modalAttrs.roles?a("div",{staticClass:"pb-1"},[a("strong",[t._v("Roles in the project")]),t._v(" "),a("ul",{staticClass:"li-styled"},t._l(t.modalAttrs.roles,function(e,s){return a("li",{key:s,domProps:{innerHTML:t._s(e)}})}),0)]):t._e(),t._v(" "),t.modalAttrs.image?[a("strong",[t._v("Screen Shot")]),t._v(" "),a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.modalAttrs.image}})])]:t._e()],2),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("a",{staticClass:"button btn-color",attrs:{href:t.modalAttrs.url,rel:"noopener noreferrer",title:t.modifyModalTitle+" link",target:"_blank"},domProps:{innerHTML:t._s("Visit "+t.modifyModalTitle)}})])])])},l=[],r={render:n,staticRenderFns:l},i=r,d=a("VU/8"),c=s,m=d(o,i,!1,c,"data-v-284e29ac",null);e.default=m.exports},M7jR:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.btn-color[data-v-284e29ac] {\n  background-color: #766C7F;\n  color: whitesmoke;\n}\n.paragraph-styled[data-v-284e29ac] {\n  line-heigh: 1rem;\n}\n.li-styled[data-v-284e29ac] {\n  padding-left: 1rem;\n}\n.pb-1[data-v-284e29ac] {\n  padding-bottom: 1rem;\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg-site-source/src/components/Modal.vue"],names:[],mappings:";AACA;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qBAAqB;CACtB",file:"Modal.vue",sourcesContent:["\n.btn-color[data-v-284e29ac] {\n  background-color: #766C7F;\n  color: whitesmoke;\n}\n.paragraph-styled[data-v-284e29ac] {\n  line-heigh: 1rem;\n}\n.li-styled[data-v-284e29ac] {\n  padding-left: 1rem;\n}\n.pb-1[data-v-284e29ac] {\n  padding-bottom: 1rem;\n}\n"],sourceRoot:""}])},"k+yy":function(t,e,a){var s=a("M7jR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("8112d1b8",s,!0,{})}});
//# sourceMappingURL=14.4ac44fa2a399cf7e24be.js.map