webpackJsonp([7],{heka:function(t,e,i){var s=i("mS+D");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("de613a28",s,!0,{})},"mS+D":function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"\n.tag:not(body).is-primary[data-v-416dcb42] {\n  background-color: #6d9f71;\n  color: white;\n}\n.timeline .timeline-item .timeline-marker.is-blue-bell[data-v-416dcb42] {\n  background-color: #A3A5C3!important;\n  border-color: #A3A5C3!important;\n}\n.purple-text[data-v-416dcb42] {\n  color: #9b4dca;\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg.github.io/vue-redesign/src/components/Education.vue"],names:[],mappings:";AACA;EACE,0BAA0B;EAC1B,aAAa;CACd;AACD;EACE,oCAAoC;EACpC,gCAAgC;CACjC;AACD;EACE,eAAe;CAChB",file:"Education.vue",sourcesContent:["\n.tag:not(body).is-primary[data-v-416dcb42] {\n  background-color: #6d9f71;\n  color: white;\n}\n.timeline .timeline-item .timeline-marker.is-blue-bell[data-v-416dcb42] {\n  background-color: #A3A5C3!important;\n  border-color: #A3A5C3!important;\n}\n.purple-text[data-v-416dcb42] {\n  color: #9b4dca;\n}\n"],sourceRoot:""}])},v4vk:function(t,e,i){"use strict";function s(t){i("heka")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),l=i("NYxO"),c={data:function(){return{status:!1,modalAttrs:null}},methods:{modalAction:function(t){this.modalAttrs=this.schoolData[t.target.dataset.id],this.modalAttrs.id=t.target.dataset.id,document.documentElement.classList.add("is-clipped"),this.updateModal()},updateModal:function(){this.status=!this.status}},components:{modal:function(){return i.e(13).then(i.bind(null,"/o5o"))}},computed:n()({},Object(l.c)(["schoolData"]))},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"education"}},[t._m(0),t._v(" "),i("div",{staticClass:"columns is-centered pb-4"},[i("div",{staticClass:"column is-two-fifths-desktop is-half-tablet"},[i("p",{staticClass:"has-text-centered title is-4"},[i("a",{attrs:{href:"#",id:"csun","data-id":"csun"},on:{click:function(e){return e.preventDefault(),t.modalAction(e)}}},[t._v(t._s(t.schoolData.csun.title))])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"column is-two-fifths-desktop is-half-tablet pb-4"},[i("p",{staticClass:"has-text-centered title is-4"},[i("a",{attrs:{href:"#",id:"gcc","data-id":"gcc"},on:{click:function(e){return e.preventDefault(),t.modalAction(e)}}},[t._v(t._s(t.schoolData.gcc.title))])]),t._v(" "),t._m(3)])]),t._v(" "),t.status?i("modal",{class:{"is-active":t.status},attrs:{modalAttrs:t.modalAttrs},on:{disable:t.updateModal}}):t._e()],1)},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("\n        Education\n      ")]),t._v(" "),i("p",{staticClass:"subtitle"},[t._v("\n        Where I Studied\n      ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline is-centered"},[i("header",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-medium is-primary"},[t._v("Start")])]),t._v(" "),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("August 2013")]),t._v(" "),i("p",[t._v("Became first generation enrolled in a Univeristy.")])])]),t._v(" "),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("February 2016")]),t._v(" "),i("p",[t._v("Student Assistant at "),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.metalab.csun.edu",rel:"noreferrer",target:"_blank","aria-label":"Visit the META+LAB website"}},[t._v("CSUN META"),i("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB")]),t._v(".")])])]),t._v(" "),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("May 2016")]),t._v(" "),i("p",[t._v("Earned a B.S. in Computer Science.")])])]),t._v(" "),i("div",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-medium is-primary"},[t._v("End")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column is-half-tablet is-hidden-tablet"},[i("div",{staticClass:"is-divider"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline is-centered"},[i("header",{staticClass:"timeline-header is-icon"},[i("span",{staticClass:"tag is-medium is-primary"},[t._v("Start")])]),t._v(" "),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("August 2005")]),t._v(" "),i("p",[t._v("Start General Education focusing on Math.")])])]),t._v(" "),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("August 2010")]),t._v(" "),i("p",[t._v("Start enrolling in classes for Computer Science.")])])]),t._v(" "),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),i("div",{staticClass:"timeline-content"},[i("p",{staticClass:"heading"},[t._v("May 2013")]),t._v(" "),i("p",[t._v("Completed the CSU General Education.")])])]),t._v(" "),i("div",{staticClass:"timeline-header"},[i("span",{staticClass:"tag is-medium is-primary"},[t._v("End")])])])}],o={render:r,staticRenderFns:d},v=o,m=i("VU/8"),u=s,C=m(c,v,!1,u,"data-v-416dcb42",null);e.default=C.exports}});
//# sourceMappingURL=7.e3ec531abc9678c562c0.js.map