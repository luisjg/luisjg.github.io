webpackJsonp([1],{"/o5o":function(t,e,s){"use strict";function a(t){s("VUxQ")}var i={props:["modalAttrs"],mounted:function(){var t=this;document.addEventListener("keydown",function(e){27===e.keyCode&&t.closeModal()})},methods:{closeModal:function(){document.documentElement.classList.remove("is-clipped"),this.$emit("disable")}}},n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",attrs:{id:"modal"}},[s("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title",domProps:{innerHTML:t._s(t.modalAttrs.title)}}),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("strong",[t._v("Project Details")]),t._v(" "),s("div",{staticStyle:{"line-height":"1.5rem","padding-bottom":"1rem"},domProps:{innerHTML:t._s(t.modalAttrs.details)}}),t._v(" "),t.modalAttrs.tech_stack?[s("strong",[t._v("Technology Stack")]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.modalAttrs.tech_stack)}})]:t._e(),t._v(" "),t.modalAttrs.roles?s("div",{staticStyle:{"padding-bottom":"1rem"}},[s("strong",[t._v("Role in the project")]),t._v(" "),s("ul",{staticStyle:{"padding-left":"1rem"}},t._l(t.modalAttrs.roles,function(e,a){return s("li",{key:a},[t._v(t._s(e))])}),0)]):t._e(),t._v(" "),t.modalAttrs.image?[s("strong",[t._v("Screen Shot")]),t._v(" "),s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.modalAttrs.image}})])]:t._e()],2),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("a",{staticClass:"button btn-color",attrs:{href:t.modalAttrs.url,rel:"noreferrer",title:t.modalAttrs.title+" link",target:"_blank"},domProps:{innerHTML:t._s("Visit "+t.modalAttrs.title)}})])])])},l=[],o={render:n,staticRenderFns:l},r=o,c=s("VU/8"),d=a,m=c(i,r,!1,d,"data-v-f6577574",null);e.a=m.exports},"8P+y":function(t,e,s){e=t.exports=s("FZ+f")(!0),e.push([t.i,"\n.btn-color[data-v-f6577574] {\n  background-color: #766C7F;\n  color: whitesmoke;\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg.github.io/vue-redesign/src/components/Modal.vue"],names:[],mappings:";AACA;EACE,0BAA0B;EAC1B,kBAAkB;CACnB",file:"Modal.vue",sourcesContent:["\n.btn-color[data-v-f6577574] {\n  background-color: #766C7F;\n  color: whitesmoke;\n}\n"],sourceRoot:""}])},UOG4:function(t,e,s){var a=s("eNyJ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("8e2e5974",a,!0,{})},VUxQ:function(t,e,s){var a=s("8P+y");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("27a3e8b1",a,!0,{})},eNyJ:function(t,e,s){e=t.exports=s("FZ+f")(!0),e.push([t.i,"\n.tag:not(body).is-primary[data-v-3aaeb2cc] {\n  background-color: #6d9f71;\n  color: white;\n}\n.timeline .timeline-item .timeline-marker.is-blue-bell[data-v-3aaeb2cc] {\n  background-color: #A3A5C3!important;\n  border-color: #A3A5C3!important;\n}\n.purple-text[data-v-3aaeb2cc] {\n  color: #9b4dca;\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg.github.io/vue-redesign/src/components/Education.vue"],names:[],mappings:";AACA;EACE,0BAA0B;EAC1B,aAAa;CACd;AACD;EACE,oCAAoC;EACpC,gCAAgC;CACjC;AACD;EACE,eAAe;CAChB",file:"Education.vue",sourcesContent:["\n.tag:not(body).is-primary[data-v-3aaeb2cc] {\n  background-color: #6d9f71;\n  color: white;\n}\n.timeline .timeline-item .timeline-marker.is-blue-bell[data-v-3aaeb2cc] {\n  background-color: #A3A5C3!important;\n  border-color: #A3A5C3!important;\n}\n.purple-text[data-v-3aaeb2cc] {\n  color: #9b4dca;\n}\n"],sourceRoot:""}])},v4vk:function(t,e,s){"use strict";function a(t){s("UOG4")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),l=s("/o5o"),o=s("NYxO"),r={data:function(){return{status:!1,modalAttrs:null}},methods:{modalAction:function(t){this.modalAttrs=this.schoolData[t.target.id],document.documentElement.classList.add("is-clipped"),this.updateModal()},updateModal:function(){this.status=!this.status}},components:{modal:l.a},computed:n()({},Object(o.c)(["schoolData"]))},c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"education"}},[t._m(0),t._v(" "),s("div",{staticClass:"columns is-centered pb"},[s("div",{staticClass:"column is-two-fifths-desktop is-half-tablet"},[s("p",{staticClass:"has-text-centered title is-4"},[s("a",{attrs:{href:"#",id:"csun"},on:{click:function(e){return e.preventDefault(),t.modalAction(e)}}},[t._v(t._s(t.schoolData.csun.title))])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"column is-two-fifths-desktop is-half-tablet"},[s("p",{staticClass:"has-text-centered title is-4"},[s("a",{attrs:{href:"#",id:"gcc"},on:{click:function(e){return e.preventDefault(),t.modalAction(e)}}},[t._v(t._s(t.schoolData.gcc.title))])]),t._v(" "),t._m(3)])]),t._v(" "),t.status?s("modal",{class:{"is-active":t.status},attrs:{modalAttrs:t.modalAttrs},on:{disable:t.updateModal}}):t._e()],1)},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"title"},[t._v("\n        Education\n      ")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n        Where I Studied\n      ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timeline is-centered"},[s("header",{staticClass:"timeline-header"},[s("span",{staticClass:"tag is-medium is-primary"},[t._v("Start")])]),t._v(" "),s("div",{staticClass:"timeline-item"},[s("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),s("div",{staticClass:"timeline-content"},[s("p",{staticClass:"heading"},[t._v("August 2013")]),t._v(" "),s("p",[t._v("Became first generation enrolled in a Univeristy.")])])]),t._v(" "),s("div",{staticClass:"timeline-item"},[s("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),s("div",{staticClass:"timeline-content"},[s("p",{staticClass:"heading"},[t._v("February 2016")]),t._v(" "),s("p",[t._v("Student Assistant at "),s("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.metalab.csun.edu",rel:"noreferrer",target:"_blank","aria-label":"Visit the META+LAB website"}},[t._v("CSUN META"),s("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB")]),t._v(".")])])]),t._v(" "),s("div",{staticClass:"timeline-item"},[s("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),s("div",{staticClass:"timeline-content"},[s("p",{staticClass:"heading"},[t._v("May 2016")]),t._v(" "),s("p",[t._v("Earned a B.S. in Computer Science.")])])]),t._v(" "),s("div",{staticClass:"timeline-header"},[s("span",{staticClass:"tag is-medium is-primary"},[t._v("End")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-half-tablet is-hidden-tablet"},[s("div",{staticClass:"is-divider"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timeline is-centered"},[s("header",{staticClass:"timeline-header is-icon"},[s("span",{staticClass:"tag is-medium is-primary"},[t._v("Start")])]),t._v(" "),s("div",{staticClass:"timeline-item"},[s("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),s("div",{staticClass:"timeline-content"},[s("p",{staticClass:"heading"},[t._v("August 2005")]),t._v(" "),s("p",[t._v("Start General Education focusing on Math.")])])]),t._v(" "),s("div",{staticClass:"timeline-item"},[s("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),s("div",{staticClass:"timeline-content"},[s("p",{staticClass:"heading"},[t._v("August 2010")]),t._v(" "),s("p",[t._v("Start enrolling in classes for Computer Science.")])])]),t._v(" "),s("div",{staticClass:"timeline-item"},[s("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),s("div",{staticClass:"timeline-content"},[s("p",{staticClass:"heading"},[t._v("May 2013")]),t._v(" "),s("p",[t._v("Completed the CSU General Education.")])])]),t._v(" "),s("div",{staticClass:"timeline-header"},[s("span",{staticClass:"tag is-medium is-primary"},[t._v("End")])])])}],m={render:c,staticRenderFns:d},v=m,u=s("VU/8"),_=a,C=u(r,v,!1,_,"data-v-3aaeb2cc",null);e.default=C.exports}});
//# sourceMappingURL=1.70468b6a2ab697b7f668.js.map