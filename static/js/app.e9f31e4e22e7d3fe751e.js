webpackJsonp([1],{"0VK1":function(t,s){},"8pe0":function(t,s){},E029:function(t,s,a){t.exports=a.p+"static/img/pexels-photo-1905741.0483475.jpg"},ET9s:function(t,s,a){t.exports=a.p+"static/img/aa2.e924a4c.png"},"F8+k":function(t,s,a){t.exports=a.p+"static/img/profile.ba1c175.jpg"},FS4n:function(t,s,a){t.exports=a.p+"static/img/rtdiii-retro-a6000-nikon-76524.d124c20.jpg"},FpUR:function(t,s){},Gr4r:function(t,s){},HsSk:function(t,s,a){t.exports=a.p+"static/img/faculty.865beee.png"},NHnr:function(t,s,a){"use strict";function e(t){a("lq0D")}function i(t){a("Gr4r")}function n(t){a("w9cG")}function r(t){a("SLbD")}function l(t){a("a2Md")}function o(t){a("0VK1")}function c(t){a("8pe0")}function d(t){a("FpUR")}Object.defineProperty(s,"__esModule",{value:!0});var v=a("7+uW"),u=a("PJh5"),m=a.n(u),h={data:function(){return{currentYear:""}},created:function(){this.currentYear=m()().format("YYYY")}},p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v("\n        © luisjg "+t._s(t.currentYear)+"\n      ")]),t._v(" "),t._m(0,!1,!1)])])])},_=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("a",{staticClass:"icon",attrs:{href:"https://github.com/luisjg",target:"_blank"}},[a("i",{staticClass:"fab fa-github-square",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{staticClass:"icon",attrs:{href:"https://www.linkedin.com/in/luis-guzman-a6b59866",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{staticClass:"icon",attrs:{href:"mailto:contact@luisjg.io",target:"_blank"}},[a("i",{staticClass:"fas fa-envelope-square",attrs:{"aria-hidden":"true"}})])])}],f={render:p,staticRenderFns:_},g=f,C=a("VU/8"),b=e,j=C(h,g,!1,b,"data-v-76e05a14",null),k=j.exports,w={data:function(){return{section:String,isActive:!1}},methods:{applyActive:function(){return"home"!==this.$route.name&&"404"!==this.$route.name?"is-active has-text-weight-bold":""},hamburgerToggle:function(){this.isActive=!this.isActive},toggleHeroFooter:function(){return"home"!==this.$route.name&&"404"!==this.$route.name}}},x=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"hero is-medium is-light is-bold"},[a("div",{staticClass:"hero-head"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("span",{staticClass:"is-size-4 has-text-weight-bold"},[t._v("luisjg.io")])]),t._v(" "),a("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},on:{click:function(s){t.hamburgerToggle()}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])],1),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/","exact-active-class":"is-active has-text-weight-bold"},nativeOn:{click:function(s){t.hamburgerToggle()}}},[t._v("\n              Home\n            ")]),t._v(" "),a("router-link",{staticClass:"navbar-item",class:t.applyActive(),attrs:{to:"/portfolio"},nativeOn:{click:function(s){t.hamburgerToggle()}}},[t._v("\n              About\n            ")])],1)])])])]),t._v(" "),t._m(0,!1,!1),t._v(" "),t.toggleHeroFooter()?a("div",{staticClass:"hero-foot"},[a("transition",{attrs:{name:"fade"}},[a("nav",{staticClass:"tabs is-boxed is-fullwidth"},[a("div",{staticClass:"container"},[a("ul",[a("router-link",{attrs:{tag:"li",to:"portfolio","active-class":"is-active has-text-weight-bold"}},[a("a",[t._v("Portfolio")])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"experience","active-class":"is-active has-text-weight-bold"}},[a("a",[t._v("Experience")])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"hobbies","active-class":"is-active has-text-weight-bold"}},[a("a",[t._v("Hobbies")])]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"education","active-class":"is-active has-text-weight-bold"}},[a("a",[t._v("Education")])])],1)])])])],1):t._e()])},E=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("figure",[e("img",{staticClass:"profile-img",attrs:{src:a("F8+k"),alt:"profile image",width:"10%"}})]),t._v(" "),e("ul",{staticClass:"subtitle"},[e("li",[e("i",{staticClass:"russian-green fas fa-map-marker-alt",attrs:{"aria-hidden":"true"}}),t._v(" Los Angeles, CA\n        ")]),t._v(" "),e("li",[e("i",{staticClass:"russian-green fas fa-graduation-cap",attrs:{"aria-hidden":"true"}}),t._v(" Computer Science, BS\n        ")]),t._v(" "),e("li",[e("i",{staticClass:"russian-green fas fa-briefcase",attrs:{"aria-hidden":"true"}}),t._v(" Web Developer & Mentor,\n          CSUN META"),e("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB\n        ")])])])])}],y={render:x,staticRenderFns:E},z=y,A=a("VU/8"),M=i,D=A(w,z,!1,M,"data-v-e4e1743a",null),S=D.exports,L={created:function(){this.$store.dispatch("retrieveWorkData"),this.$store.dispatch("retrieveSchoolData")},components:{"footer-content":k,"nav-bar":S}},F=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("header",[a("nav-bar")],1),t._v(" "),a("main",[a("transition",{attrs:{name:"fade"}},[a("router-view")],1),t._v(" "),a("div",{staticClass:"has-text-centered"},[a("br"),t._v(" "),a("sup",[t._v("Built with")]),t._v(" "),a("br"),t._v(" "),a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 128 128",width:"4%"}},[a("path",{attrs:{d:"m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087",fill:"none"}}),t._v(" "),a("path",{attrs:{d:"m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z",fill:"#35495e"}}),t._v(" "),a("path",{attrs:{d:"m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z",fill:"#41b883"}})])]),t._v(" "),a("a",{attrs:{href:"https://github.com",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 128 128",width:"4%"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}}),t._v(" "),a("path",{attrs:{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}})])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(0,!1,!1)])],1),t._v(" "),a("footer-content")],1)},H=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"https://bulma.io",target:"_blank"}},[e("img",{attrs:{src:a("waGJ"),alt:"Made with Bulma",width:"128",height:"24"}})])}],U={render:F,staticRenderFns:H},P=U,T=a("VU/8"),R=n,O=T(L,P,!1,R,null,null),q=O.exports,V=a("/ocq"),N=a("Dd8w"),W=a.n(N),$={props:["modalAttrs"],mounted:function(){var t=this;document.addEventListener("keydown",function(s){27===s.keyCode&&t.close()})},methods:{closeModal:function(){this.close()},close:function(){document.documentElement.classList.remove("is-clipped"),this.$emit("disable")}}},B=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal",attrs:{id:"modal"}},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title",domProps:{innerHTML:t._s(t.modalAttrs.title)}}),t._v(" "),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){s.preventDefault(),t.closeModal(s)}}})]),t._v(" "),a("section",{staticClass:"modal-card-body",domProps:{innerHTML:t._s(t.modalAttrs.details)}}),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("a",{staticClass:"button btn-color",attrs:{href:t.modalAttrs.url,title:t.modalAttrs.title+" link",target:"_blank"},domProps:{innerHTML:t._s("Visit "+t.modalAttrs.title)}})])])])},I=[],G={render:B,staticRenderFns:I},X=G,Y=a("VU/8"),J=r,K=Y($,X,!1,J,"data-v-acaf4d0a",null),Z=K.exports,Q=a("NYxO"),tt={data:function(){return{status:!1,modalAttrs:null}},methods:{modalAction:function(t){this.modalAttrs=this.schoolData[t.target.id],document.documentElement.classList.add("is-clipped"),this.updateModal()},updateModal:function(){this.status=!this.status}},components:{modal:Z},computed:W()({},Object(Q.b)(["schoolData"]))},st=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"education"}},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-one-quarter"},[a("p",{staticClass:"has-text-centered title is-4"},[a("a",{attrs:{href:"#",id:"csun"},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}},[t._v(t._s(t.schoolData.csun.title))])]),t._v(" "),t._m(1,!1,!1)]),t._v(" "),t._m(2,!1,!1),t._v(" "),a("div",{staticClass:"column is-one-quarter"},[a("p",{staticClass:"has-text-centered title is-4"},[a("a",{attrs:{href:"#",id:"gcc"},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}},[t._v(t._s(t.schoolData.gcc.title))])]),t._v(" "),t._m(3,!1,!1)])]),t._v(" "),t.status?a("modal",{class:{"is-active":t.status},attrs:{modalAttrs:t.modalAttrs},on:{disable:t.updateModal}}):t._e()],1)},at=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[t._v("\n        Education\n      ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n        Where I Studied\n      ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"timeline is-centered"},[a("header",{staticClass:"timeline-header"},[a("span",{staticClass:"tag is-medium is-primary"},[t._v("Start")])]),t._v(" "),a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),a("div",{staticClass:"timeline-content"},[a("p",{staticClass:"heading"},[t._v("August 2013")]),t._v(" "),a("p",[t._v("Became first generation enrolled in a Univeristy.")])])]),t._v(" "),a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),a("div",{staticClass:"timeline-content"},[a("p",{staticClass:"heading"},[t._v("February 2016")]),t._v(" "),a("p",[t._v("Student Assistant at "),a("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.metalab.csun.edu"}},[t._v("CSUN META"),a("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB")]),t._v(".")])])]),t._v(" "),a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),a("div",{staticClass:"timeline-content"},[a("p",{staticClass:"heading"},[t._v("May 2016")]),t._v(" "),a("p",[t._v("Earned a B.S. in Computer Science.")])])]),t._v(" "),a("div",{staticClass:"timeline-header"},[a("span",{staticClass:"tag is-medium is-primary"},[t._v("End")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"column is-one-quarter is-hidden-desktop"},[a("div",{staticClass:"is-divider"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"timeline is-centered"},[a("header",{staticClass:"timeline-header is-icon"},[a("span",{staticClass:"tag is-medium is-primary"},[t._v("Start")])]),t._v(" "),a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),a("div",{staticClass:"timeline-content"},[a("p",{staticClass:"heading"},[t._v("August 2005")]),t._v(" "),a("p",[t._v("Start General Education focusing on Math.")])])]),t._v(" "),a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),a("div",{staticClass:"timeline-content"},[a("p",{staticClass:"heading"},[t._v("August 2010")]),t._v(" "),a("p",[t._v("Start enrolling in classes for Computer Science.")])])]),t._v(" "),a("div",{staticClass:"timeline-item"},[a("div",{staticClass:"timeline-marker is-blue-bell"}),t._v(" "),a("div",{staticClass:"timeline-content"},[a("p",{staticClass:"heading"},[t._v("May 2013")]),t._v(" "),a("p",[t._v("Completed the CSU General Education.")])])]),t._v(" "),a("div",{staticClass:"timeline-header"},[a("span",{staticClass:"tag is-medium is-primary"},[t._v("End")])])])}],et={render:st,staticRenderFns:at},it=et,nt=a("VU/8"),rt=l,lt=nt(tt,it,!1,rt,"data-v-15fddc2a",null),ot=lt.exports,ct=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},dt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"experience"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[t._v("\n        Experience\n      ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n        Tools I Know\n      ")])])]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-5 is-offset-2"},[a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("LARAVEL")]),t._v(" "),a("progress",{staticClass:"progress is-deep-lilac",attrs:{value:"90",max:"100"}},[t._v("90%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("PHP")]),t._v(" "),a("progress",{staticClass:"progress is-blue-bell",attrs:{value:"78",max:"100"}},[t._v("78%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("HTML")]),t._v(" "),a("progress",{staticClass:"progress is-old-lavender",attrs:{value:"69",max:"100"}},[t._v("69%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("JQUERY")]),t._v(" "),a("progress",{staticClass:"progress is-russian-green",attrs:{value:"50",max:"100"}},[t._v("50%")])])]),t._v(" "),a("div",{staticClass:"column is-5"},[a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("LINUX")]),t._v(" "),a("progress",{staticClass:"progress is-deep-lilac",attrs:{value:"50",max:"100"}},[t._v("50%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("MYSQL")]),t._v(" "),a("progress",{staticClass:"progress is-blue-bell",attrs:{value:"45",max:"100"}},[t._v("45%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("VUE")]),t._v(" "),a("progress",{staticClass:"progress is-old-lavender",attrs:{value:"40",max:"100"}},[t._v("40%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("CSS")]),t._v(" "),a("progress",{staticClass:"progress is-russian-green",attrs:{value:"35",max:"100"}},[t._v("35%")])])])])])}],vt={render:ct,staticRenderFns:dt},ut=vt,mt=a("VU/8"),ht=o,pt=mt(null,ut,!1,ht,"data-v-520d0857",null),_t=pt.exports,ft=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},gt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"hobbies"}},[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title"},[t._v("\n        Hobbies\n      ")]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v("\n        Things I Enjoy\n      ")])])]),t._v(" "),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-3"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:a("E029"),alt:"cars"}})])]),t._v(" "),e("div",{staticClass:"column is-3"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:a("FS4n"),alt:"photography"}})])]),t._v(" "),e("div",{staticClass:"column is-3"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:a("O4Zp"),alt:"music"}})])])])])}],Ct={render:ft,staticRenderFns:gt},bt=Ct,jt=a("VU/8"),kt=jt(null,bt,!1,null,null,null),wt=kt.exports,xt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},Et=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container",attrs:{id:"home"}},[a("h2",{staticClass:"title"},[t._v("Hello there!")]),t._v(" "),a("p",{staticClass:"is-size-4-desktop tab"},[t._v("\n    I'm a "),a("strong",[t._v("Web Developer")]),t._v(" from the\n    "),a("strong",[t._v("Los Angeles")]),t._v(" area. I currently work for\n    "),a("strong",[t._v("\n      CSUN\n      "),a("a",{attrs:{href:"https://www.metalab.csun.edu/",target:"_blank"}},[t._v("META"),a("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB")])]),t._v(" where we build "),a("strong",[t._v("job ready students")]),t._v(" and\n    "),a("strong",[t._v("web applications")]),t._v(". Our "),a("span",[t._v("mission")]),t._v(" is to "),a("strong",[t._v("mentor")]),t._v("\n    the students by providing them with our\n    "),a("strong",[t._v("software engineering")]),t._v(" tool-set which revolves around\n    "),a("strong",[t._v("Laravel")]),t._v(", "),a("strong",[t._v("Git")]),t._v(", "),a("strong",[t._v("AWS")]),t._v(" and\n    "),a("strong",[t._v("Agile Scrum")]),t._v(".\n  ")])])}],yt={render:xt,staticRenderFns:Et},zt=yt,At=a("VU/8"),Mt=c,Dt=At(null,zt,!1,Mt,"data-v-8263dd06",null),St=Dt.exports,Lt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container has-text-centered",attrs:{id:"not-found"}},[a("h2",{staticClass:"title"},[t._v("WARNING: Dragons Ahead!")]),t._v(" "),a("p",{staticClass:"is-size-4-desktop"},[t._v("\n    Uh oh something went wrong!"),a("br"),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Take me back to safety")])],1)])},Ft=[],Ht={render:Lt,staticRenderFns:Ft},Ut=Ht,Pt=a("VU/8"),Tt=d,Rt=Pt(null,Ut,!1,Tt,"data-v-5078fe87",null),Ot=Rt.exports,qt={data:function(){return{status:!1,modalAttrs:null}},methods:{modalAction:function(t){this.modalAttrs=this.workData[t.target.id],document.documentElement.classList.add("is-clipped"),this.updateModal()},updateModal:function(){this.status=!this.status},generateUrls:function(t){return"scholarship"===t?"faculty/beta/"+t:t}},components:{modal:Z},computed:W()({},Object(Q.b)(["workData"]))},Vt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"portfolio"}},[t._m(0,!1,!1),t._v(" "),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-quarter"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("HsSk"),alt:t.workData.faculty.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"faculty",href:"#"},domProps:{innerHTML:t._s(t.workData.faculty.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.workData.faculty.description)}})])])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("Zvg4"),alt:t.workData.scholarship.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"scholarship",href:"#"},domProps:{innerHTML:t._s(t.workData.scholarship.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.workData.scholarship.description)}})])])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("ET9s"),alt:t.workData.aa2.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"aa2",href:"#"},domProps:{innerHTML:t._s(t.workData.aa2.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.workData.aa2.description)}})])])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("s3lb"),alt:t.workData.etd.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"etd",href:"#"},domProps:{innerHTML:t._s(t.workData.etd.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.workData.etd.description)}})])])])])])]),t._v(" "),t.status?e("modal",{class:{"is-active":t.status},attrs:{modalAttrs:t.modalAttrs},on:{disable:t.updateModal}}):t._e()],1)},Nt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section",attrs:{id:"portfolio"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[t._v("\n        Portfolio\n      ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n        What We Built\n      ")])])])}],Wt={render:Vt,staticRenderFns:Nt},$t=Wt,Bt=a("VU/8"),It=Bt(qt,$t,!1,null,null,null),Gt=It.exports;v.a.use(V.a);var Xt=new V.a({routes:[{path:"/",name:"home",component:St},{path:"/education",name:"education",component:ot},{path:"/experience",name:"experience",component:_t},{path:"/hobbies",name:"hobbies",component:wt},{path:"/portfolio",name:"portfolio",component:Gt},{path:"*",name:"404",component:Ot}]}),Yt=a("mvHQ"),Jt=a.n(Yt),Kt=a("mtWM"),Zt=a.n(Kt);v.a.use(Q.a);var Qt=new Q.a.Store({state:{work:null,school:null},actions:{retrieveWorkData:function(t){sessionStorage.getItem("work")?t.commit("storeWorkData",JSON.parse(sessionStorage.getItem("work"))):Zt.a.get("https://luisjg.io/json/work.json").then(function(s){t.commit("storeWorkData",s.data)}).catch(function(t){})},retrieveSchoolData:function(t){sessionStorage.getItem("school")?t.commit("storeSchoolData",JSON.parse(sessionStorage.getItem("school"))):Zt.a.get("https://luisjg.io/json/education.json").then(function(s){t.commit("storeSchoolData",s.data)}).catch(function(t){})}},getters:{schoolData:function(t){return t.school},workData:function(t){return t.work}},mutations:{storeWorkData:function(t,s){sessionStorage.setItem("work",Jt()(s)),t.work=s},storeSchoolData:function(t,s){sessionStorage.setItem("school",Jt()(s)),t.school=s}}});v.a.config.productionTip=!1,new v.a({el:"#app",store:Qt,router:Xt,template:"<App/>",components:{App:q}})},O4Zp:function(t,s,a){t.exports=a.p+"static/img/pexels-photo-358666.3daf21b.jpg"},SLbD:function(t,s){},Zvg4:function(t,s,a){t.exports=a.p+"static/img/scholarship.c41451e.png"},a2Md:function(t,s){},lq0D:function(t,s){},s3lb:function(t,s,a){t.exports=a.p+"static/img/etd.eb3c548.png"},uslO:function(t,s,a){function e(t){return a(i(t))}function i(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};e.keys=function(){return Object.keys(n)},e.resolve=i,t.exports=e,e.id="uslO"},w9cG:function(t,s){},waGJ:function(t,s,a){t.exports=a.p+"static/img/made-with-bulma.e0eab74.png"}},["NHnr"]);
//# sourceMappingURL=app.e9f31e4e22e7d3fe751e.js.map