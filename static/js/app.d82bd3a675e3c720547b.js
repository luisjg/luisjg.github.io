webpackJsonp([1],{"0VK1":function(t,s){},C9tC:function(t,s){},E029:function(t,s,a){t.exports=a.p+"static/img/pexels-photo-1905741.0483475.jpg"},ET9s:function(t,s,a){t.exports=a.p+"static/img/aa2.e924a4c.png"},"F8+k":function(t,s,a){t.exports=a.p+"static/img/profile.ba1c175.jpg"},FS4n:function(t,s,a){t.exports=a.p+"static/img/rtdiii-retro-a6000-nikon-76524.d124c20.jpg"},FpUR:function(t,s){},HsSk:function(t,s,a){t.exports=a.p+"static/img/faculty.865beee.png"},NHnr:function(t,s,a){"use strict";function e(t){a("l7VK")}function i(t){a("C9tC")}function n(t){a("WHRH")}function r(t){a("TN8f")}function o(t){a("0VK1")}function c(t){a("ngtR")}function l(t){a("FpUR")}Object.defineProperty(s,"__esModule",{value:!0});var d=a("7+uW"),u=a("PJh5"),v=a.n(u),m={data:function(){return{currentYear:""}},created:function(){this.currentYear=v()().format("YYYY")}},p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v("\n        © luisjg "+t._s(t.currentYear)+"\n      ")]),t._v(" "),t._m(0,!1,!1)])])])},h=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("a",{staticClass:"icon",attrs:{href:"https://github.com/luisjg",target:"_blank"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{staticClass:"icon",attrs:{href:"https://www.linkedin.com/in/luis-guzman-a6b59866",target:"_blank"}},[a("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{staticClass:"icon",attrs:{href:"mailto:contact@luisjg.io",target:"_blank"}},[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])])}],g={render:p,staticRenderFns:h},f=g,_=a("VU/8"),j=e,C=_(m,f,!1,j,"data-v-5ee66e43",null),b=C.exports,k={data:function(){return{section:String,isActive:!1}},methods:{applyActive:function(){return"home"!==this.$route.name&&"404"!==this.$route.name?"is-active":""},checkActiveTab:function(t){return this.$route.name===t?"is-active":""},hamburgerToggle:function(){this.isActive=!this.isActive},toggleHeroFooter:function(){return"home"!==this.$route.name&&"404"!==this.$route.name}}},x=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"hero is-medium is-light is-bold"},[a("div",{staticClass:"hero-head"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("span",{staticClass:"is-size-4 has-text-weight-bold"},[t._v("luisjg.io")])]),t._v(" "),a("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},on:{click:function(s){t.hamburgerToggle()}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])],1),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/","exact-active-class":"is-active"},nativeOn:{click:function(s){t.hamburgerToggle()}}},[t._v("\n              Home\n            ")]),t._v(" "),a("router-link",{staticClass:"navbar-item",class:t.applyActive(),attrs:{to:"/portfolio"},nativeOn:{click:function(s){t.hamburgerToggle()}}},[t._v("\n              About\n            ")])],1)])])])]),t._v(" "),t._m(0,!1,!1),t._v(" "),t.toggleHeroFooter()?a("div",{staticClass:"hero-foot"},[a("nav",{staticClass:"tabs is-boxed is-fullwidth"},[a("div",{staticClass:"container"},[a("ul",[a("li",{class:t.checkActiveTab("portfolio")},[a("router-link",{attrs:{to:"portfolio"}},[t._v("Portfolio")])],1),t._v(" "),a("li",{class:t.checkActiveTab("experience")},[a("router-link",{attrs:{to:"experience"}},[t._v("Experience")])],1),t._v(" "),a("li",{class:t.checkActiveTab("hobbies")},[a("router-link",{attrs:{to:"hobbies"}},[t._v("Hobbies")])],1),t._v(" "),a("li",{class:t.checkActiveTab("education")},[a("router-link",{attrs:{to:"education"}},[t._v("Education")])],1)])])])]):t._e()])},w=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("figure",[e("img",{staticClass:"profile-img",attrs:{src:a("F8+k"),alt:"profile image",width:"10%"}})]),t._v(" "),e("ul",{staticClass:"subtitle"},[e("li",[e("i",{staticClass:"russian-green fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v(" Los Angeles, CA\n        ")]),t._v(" "),e("li",[e("i",{staticClass:"russian-green fa fa-graduation-cap",attrs:{"aria-hidden":"true"}}),t._v(" Computer Science, BS\n        ")]),t._v(" "),e("li",[e("i",{staticClass:"russian-green fa fa-briefcase",attrs:{"aria-hidden":"true"}}),t._v(" Web Developer & Mentor,\n          CSUN META"),e("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB\n        ")])])])])}],y={render:x,staticRenderFns:w},z=y,A=a("VU/8"),E=i,M=A(k,z,!1,E,"data-v-43736884",null),H=M.exports,L={created:function(){this.$store.dispatch("retrieveWorkData"),this.$store.dispatch("retrieveSchoolData")},components:{"footer-content":b,"nav-bar":H}},S=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("header",[a("nav-bar")],1),t._v(" "),a("main",[a("router-view"),t._v(" "),a("div",{staticClass:"has-text-centered"},[a("br"),t._v(" "),a("sup",[t._v("Built with")]),t._v(" "),a("br"),t._v(" "),a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 128 128",width:"4%"}},[a("path",{attrs:{d:"m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087",fill:"none"}}),t._v(" "),a("path",{attrs:{d:"m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z",fill:"#35495e"}}),t._v(" "),a("path",{attrs:{d:"m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z",fill:"#41b883"}})])]),t._v(" "),a("a",{attrs:{href:"https://github.com",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 128 128",width:"4%"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}}),t._v(" "),a("path",{attrs:{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}})])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(0,!1,!1)])],1),t._v(" "),a("footer-content")],1)},T=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"https://bulma.io"}},[e("img",{attrs:{src:a("waGJ"),alt:"Made with Bulma",width:"128",height:"24"}})])}],F={render:S,staticRenderFns:T},P=F,U=a("VU/8"),R=n,D=U(L,P,!1,R,null,null),V=D.exports,W=a("/ocq"),N={props:["modalAttrs"],mounted:function(){var t=this;document.addEventListener("keydown",function(s){27===s.keyCode&&t.close()})},methods:{closeModal:function(){this.close()},close:function(){document.documentElement.classList.remove("is-clipped"),this.$emit("disable")}}},O=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal",attrs:{id:"modal"}},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title",domProps:{innerHTML:t._s(t.modalAttrs.title)}}),t._v(" "),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){s.preventDefault(),t.closeModal(s)}}})]),t._v(" "),a("section",{staticClass:"modal-card-body",domProps:{innerHTML:t._s(t.modalAttrs.body)}}),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("a",{staticClass:"button btn-color",attrs:{href:t.modalAttrs.url,title:t.modalAttrs.title+" link",target:"_blank"},domProps:{innerHTML:t._s("Visit "+t.modalAttrs.title)}})])])])},$=[],I={render:O,staticRenderFns:$},q=I,B=a("VU/8"),X=r,Y=B(N,q,!1,X,"data-v-33a1db16",null),J=Y.exports,K={data:function(){return{json:null,status:!1,modalAttrs:{title:"",body:"",url:""}}},created:function(){this.json=this.$store.getters.getSchoolData},methods:{modalAction:function(t){this.modalAttrs.title=this.json[t.target.id].title,this.modalAttrs.body=this.json[t.target.id].details,this.modalAttrs.url=this.generateUrls(t.target.id),document.documentElement.classList.add("is-clipped"),this.updateModal()},generateUrls:function(t){return"gcc"===t?"https://www.glendale.edu/":"https://www.csun.edu"},updateModal:function(){this.status=!this.status}},components:{modal:J}},G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"education"}},[t._m(0,!1,!1),t._v(" "),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-one-quarter"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("Q1ny"),alt:t.json.gcc.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{attrs:{id:"gcc",href:"#"},domProps:{innerHTML:t._s(t.json.gcc.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.json.gcc.description)}})])])])]),t._v(" "),e("div",{staticClass:"column is-one-quarter"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("nLIz"),alt:t.json.gcc.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{attrs:{id:"csun",href:"#"},domProps:{innerHTML:t._s(t.json.csun.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.json.csun.description)}})])])])])]),t._v(" "),e("modal",{class:{"is-active":t.status},attrs:{modalAttrs:t.modalAttrs},on:{disable:t.updateModal}})],1)},Q=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[t._v("\n        Education\n      ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n        Where I Studied\n      ")])])])}],Z={render:G,staticRenderFns:Q},tt=Z,st=a("VU/8"),at=st(K,tt,!1,null,null,null),et=at.exports,it=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},nt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"experience"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[t._v("\n        Experience\n      ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n        Tools I Know\n      ")])])]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-5 is-offset-2"},[a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("LARAVEL")]),t._v(" "),a("progress",{staticClass:"progress is-deep-lilac",attrs:{value:"90",max:"100"}},[t._v("90%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("PHP")]),t._v(" "),a("progress",{staticClass:"progress is-blue-bell",attrs:{value:"78",max:"100"}},[t._v("78%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("HTML")]),t._v(" "),a("progress",{staticClass:"progress is-old-lavender",attrs:{value:"69",max:"100"}},[t._v("69%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("JQUERY")]),t._v(" "),a("progress",{staticClass:"progress is-russian-green",attrs:{value:"50",max:"100"}},[t._v("50%")])])]),t._v(" "),a("div",{staticClass:"column is-5"},[a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("LINUX")]),t._v(" "),a("progress",{staticClass:"progress is-deep-lilac",attrs:{value:"50",max:"100"}},[t._v("50%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("MYSQL")]),t._v(" "),a("progress",{staticClass:"progress is-blue-bell",attrs:{value:"45",max:"100"}},[t._v("45%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("VUE")]),t._v(" "),a("progress",{staticClass:"progress is-old-lavender",attrs:{value:"40",max:"100"}},[t._v("40%")])]),t._v(" "),a("div",{staticClass:"column is-6"},[a("span",{staticClass:"has-text-weight-bold"},[t._v("CSS")]),t._v(" "),a("progress",{staticClass:"progress is-russian-green",attrs:{value:"35",max:"100"}},[t._v("35%")])])])])])}],rt={render:it,staticRenderFns:nt},ot=rt,ct=a("VU/8"),lt=o,dt=ct(null,ot,!1,lt,"data-v-520d0857",null),ut=dt.exports,vt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},mt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"hobbies"}},[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title"},[t._v("\n        Hobbies\n      ")]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v("\n        Things I Enjoy\n      ")])])]),t._v(" "),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-3"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:a("E029"),alt:"cars"}})])]),t._v(" "),e("div",{staticClass:"column is-3"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:a("FS4n"),alt:"photography"}})])]),t._v(" "),e("div",{staticClass:"column is-3"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:a("O4Zp"),alt:"music"}})])])])])}],pt={render:vt,staticRenderFns:mt},ht=pt,gt=a("VU/8"),ft=gt(null,ht,!1,null,null,null),_t=ft.exports,jt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},Ct=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container",attrs:{id:"home"}},[a("h2",{staticClass:"title"},[t._v("Hello there!")]),t._v(" "),a("p",{staticClass:"is-size-4-desktop tab"},[t._v("\n    I'm a "),a("strong",[t._v("Web Developer")]),t._v(" from the\n    "),a("strong",[t._v("Los Angeles")]),t._v(" area. I currently work for\n    "),a("strong",[t._v("\n      CSUN\n      "),a("a",{attrs:{href:"https://www.metalab.csun.edu/",target:"_blank"}},[t._v("META"),a("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB")])]),t._v(" where we build "),a("strong",[t._v("job ready students")]),t._v(" and\n    "),a("strong",[t._v("web applications")]),t._v(". Our mission is to "),a("strong",[t._v("mentor")]),t._v("\n    the students by providing them with our\n    "),a("strong",[t._v("software engineering")]),t._v(" tool-set which revolves around\n    "),a("strong",[t._v("Laravel")]),t._v(", "),a("strong",[t._v("Git")]),t._v(", "),a("strong",[t._v("AWS")]),t._v(" and\n    "),a("strong",[t._v("Agile Scrum")]),t._v(".\n  ")])])}],bt={render:jt,staticRenderFns:Ct},kt=bt,xt=a("VU/8"),wt=c,yt=xt(null,kt,!1,wt,"data-v-9c9a74d8",null),zt=yt.exports,At=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container has-text-centered",attrs:{id:"not-found"}},[a("h2",{staticClass:"title"},[t._v("WARNING: Dragons Ahead!")]),t._v(" "),a("p",{staticClass:"is-size-4-desktop"},[t._v("\n    Uh oh something went wrong!"),a("br"),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Take me back to safety")])],1)])},Et=[],Mt={render:At,staticRenderFns:Et},Ht=Mt,Lt=a("VU/8"),St=l,Tt=Lt(null,Ht,!1,St,"data-v-5078fe87",null),Ft=Tt.exports,Pt={data:function(){return{json:null,status:!1,modalAttrs:{title:"",body:"",url:""}}},created:function(){this.json=this.$store.getters.getWorkData},methods:{modalAction:function(t){this.modalAttrs.title=this.json[t.target.id].title,this.modalAttrs.body=this.json[t.target.id].details,this.modalAttrs.url="//www.metalab.csun.edu/"+this.generateUrls(t.target.id),document.documentElement.classList.add("is-clipped"),this.updateModal()},updateModal:function(){this.status=!this.status},generateUrls:function(t){return"scholarship"===t?"faculty/beta/"+t:t}},components:{modal:J}},Ut=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"portfolio"}},[t._m(0,!1,!1),t._v(" "),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-quarter"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("HsSk"),alt:t.json.faculty.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"faculty",href:"#"},domProps:{innerHTML:t._s(t.json.faculty.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.json.faculty.description)}})])])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("Zvg4"),alt:t.json.scholarship.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"scholarship",href:"#"},domProps:{innerHTML:t._s(t.json.scholarship.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.json.scholarship.description)}})])])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("ET9s"),alt:t.json.aa2.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"aa2",href:"#"},domProps:{innerHTML:t._s(t.json.aa2.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.json.aa2.description)}})])])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a("s3lb"),alt:t.json.etd.title+" image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"has-text-centered title is-4"},[e("a",{staticClass:"app-links",attrs:{id:"etd",href:"#"},domProps:{innerHTML:t._s(t.json.etd.title)},on:{click:function(s){s.preventDefault(),t.modalAction(s)}}})]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.json.etd.description)}})])])])])])]),t._v(" "),e("modal",{class:{"is-active":t.status},attrs:{modalAttrs:t.modalAttrs},on:{disable:t.updateModal}})],1)},Rt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section",attrs:{id:"portfolio"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[t._v("\n          Portfolio\n        ")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("\n          What We Built\n        ")])])])}],Dt={render:Ut,staticRenderFns:Rt},Vt=Dt,Wt=a("VU/8"),Nt=Wt(Pt,Vt,!1,null,null,null),Ot=Nt.exports;d.a.use(W.a);var $t=new W.a({routes:[{path:"/",name:"home",component:zt},{path:"/education",name:"education",component:et},{path:"/experience",name:"experience",component:ut},{path:"/hobbies",name:"hobbies",component:_t},{path:"/portfolio",name:"portfolio",component:Ot},{path:"*",name:"404",component:Ft}]}),It=a("mvHQ"),qt=a.n(It),Bt=a("mtWM"),Xt=a.n(Bt),Yt=a("NYxO");d.a.use(Yt.a);var Jt=new Yt.a.Store({state:{work:null,school:null},actions:{retrieveWorkData:function(t){sessionStorage.getItem("work")?t.commit("storeWorkData",JSON.parse(sessionStorage.getItem("work"))):Xt.a.get("https://luisjg.io/json/work.json").then(function(s){t.commit("storeWorkData",s.data)}).catch(function(t){})},retrieveSchoolData:function(t){sessionStorage.getItem("school")?t.commit("storeSchoolData",JSON.parse(sessionStorage.getItem("school"))):Xt.a.get("https://luisjg.io/json/education.json").then(function(s){t.commit("storeSchoolData",s.data)}).catch(function(t){})}},getters:{getSchoolData:function(t){return t.school},getWorkData:function(t){return t.work}},mutations:{storeWorkData:function(t,s){sessionStorage.setItem("work",qt()(s)),t.work=s},storeSchoolData:function(t,s){sessionStorage.setItem("school",qt()(s)),t.school=s}}});d.a.config.productionTip=!1,new d.a({el:"#app",store:Jt,router:$t,template:"<App/>",components:{App:V}})},O4Zp:function(t,s,a){t.exports=a.p+"static/img/pexels-photo-358666.3daf21b.jpg"},Q1ny:function(t,s,a){t.exports=a.p+"static/img/gcc.0179e9c.png"},TN8f:function(t,s){},WHRH:function(t,s){},Zvg4:function(t,s,a){t.exports=a.p+"static/img/scholarship.c41451e.png"},l7VK:function(t,s){},nLIz:function(t,s,a){t.exports=a.p+"static/img/csun.567d690.png"},ngtR:function(t,s){},s3lb:function(t,s,a){t.exports=a.p+"static/img/etd.eb3c548.png"},uslO:function(t,s,a){function e(t){return a(i(t))}function i(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};e.keys=function(){return Object.keys(n)},e.resolve=i,t.exports=e,e.id="uslO"},waGJ:function(t,s,a){t.exports=a.p+"static/img/made-with-bulma.e0eab74.png"}},["NHnr"]);
//# sourceMappingURL=app.d82bd3a675e3c720547b.js.map