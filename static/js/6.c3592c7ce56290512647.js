webpackJsonp([6],{"g2+m":function(t,a,n){"use strict";function e(t){n("tB3B")}Object.defineProperty(a,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),s=n("NYxO"),o={data:function(){return{section:String,isActive:!1}},computed:r()({hideNav:function(){return null==this.$route.name||!this.$route.name.includes("blog-post")&&!this.$route.name.includes("blog")}},Object(s.c)(["post"]),{nextPost:function(){return null!=this.post&&null!=this.post.meta.next_post?this.post.meta.next_post:null},previousPost:function(){return null!=this.post&&null!=this.post.meta.previous_post?this.post.meta.previous_post:null},checkPosts:function(){return null!==this.nextPost||null!==this.previousPost||null}}),methods:{hamburgerToggle:function(){this.getWidth()<=1087&&(this.isActive=!this.isActive)},closeHamburger:function(){this.getWidth()<=1087&&(this.isActive=!1)},getWidth:function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}}},c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"hero is-medium is-light is-bold"},[n("div",{staticClass:"hero-head"},[n("nav",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"home-logo navbar-item",attrs:{to:{name:"home"}},nativeOn:{click:function(a){return t.closeHamburger()}}},[t.hideNav?[n("span",{staticClass:"is-size-5"},[t._v("luisjg.io")])]:[n("span",{staticClass:"is-size-5"},[t._v("< back to luisjg.io")])]],2),t._v(" "),n("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},on:{click:function(a){return t.hamburgerToggle()}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])],1),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[n("div",{staticClass:"navbar-end"},[t.hideNav?[n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"home"},"exact-active-class":"is-active"},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[n("span",{staticClass:"has-text-weight-bold"},[t._v("01")]),t._v(" Home\n                  ")]),t._v(" "),n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"portfolio"},"active-class":"is-active"},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[n("span",{staticClass:"has-text-weight-bold"},[t._v("02")]),t._v(" Portfolio\n                  ")]),t._v(" "),n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"experience"},"active-class":"is-active"},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[n("span",{staticClass:"has-text-weight-bold"},[t._v("03")]),t._v(" Experience\n                  ")]),t._v(" "),n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"skills"},"active-class":"is-active"},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[n("span",{staticClass:"has-text-weight-bold"},[t._v("04")]),t._v(" Skills\n                  ")]),t._v(" "),n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"blog"},"active-class":"is-active"},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[n("span",{staticClass:"has-text-weight-bold"},[t._v("05")]),t._v(" Blog\n                  ")])]:[n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"blog"},"active-class":"is-active"},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[t._v("\n                    Posts\n                  ")])]],2)]),t._v(" "),t.checkPosts?[n("div",{staticClass:"navbar-menu"},[n("div",{staticClass:"navbar-end"},[n("router-link",{staticClass:"navbar-item",attrs:{to:/blog/+t.previousPost},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[n("i",{staticClass:"far fa-chevron-left",staticStyle:{"margin-right":"0.5rem"}}),t._v(" Previous\n                  ")]),t._v(" "),n("router-link",{staticClass:"navbar-item",attrs:{to:/blog/+t.nextPost},nativeOn:{click:function(a){return t.hamburgerToggle()}}},[t._v("\n                    Next "),n("i",{staticClass:"far fa-chevron-right",staticStyle:{"margin-left":"0.5rem"}})])],1)])]:t._e()],2)])]),t._v(" "),t.hideNav?n("div",{staticClass:"hero-body"},[t._m(0)]):t._e()])},d=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container has-text-centered"},[n("figure",{staticClass:"image is-responsive"},[n("img",{staticClass:"is-rounded",attrs:{src:"https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432443/luisjg/profile.jpg",alt:"profile image"}})]),t._v(" "),n("ul",{staticClass:"is-size-5",attrs:{id:"tag-lines"}},[n("li",[n("i",{staticClass:"russian-green fad fa-map-marker-alt",attrs:{"aria-hidden":"true"}}),t._v(" Los Angeles, CA\n            ")]),t._v(" "),n("li",[n("i",{staticClass:"russian-green fad fa-graduation-cap",attrs:{"aria-hidden":"true"}}),t._v(" Computer Science, BS\n            ")]),t._v(" "),n("li",[n("i",{staticClass:"russian-green fad fa-briefcase",attrs:{"aria-hidden":"true"}}),t._v(" Web Developer, CSUN IT\n            ")])])])}],l={render:c,staticRenderFns:d},v=l,A=n("VU/8"),m=e,u=A(o,v,!1,m,"data-v-51c61ce7",null);a.default=u.exports},ktGb:function(t,a,n){a=t.exports=n("FZ+f")(!0),a.push([t.i,"\n.is-rounded[data-v-51c61ce7] {\n  -webkit-box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n  box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n}\n#tag-lines[data-v-51c61ce7] {\n  padding-top: .5rem;\n}\n.brand-image[data-v-51c61ce7] {\n  padding-top: .025em;\n  border-radius: 50%;\n}\n.brand-text[data-v-51c61ce7] {\n  padding-left: .3em;\n}\n.image[data-v-51c61ce7] {\n  margin: auto;\n}\n.image.is-responsive[data-v-51c61ce7] {\n  height: 110px;\n  width: 110px;\n}\n.hero.is-light.is-bold[data-v-51c61ce7] {\n  background-image: none;\n  background-color: #f7f8fa;\n}\n.hero.is-light .navbar-item[data-v-51c61ce7] {\n  background-color: #f7f8fa;\n  border-color: transparent;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n}\n.hero.is-light a.navbar-item.is-active[data-v-51c61ce7] {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light a.navbar-item[data-v-51c61ce7]:hover, .navbar-link[data-v-51c61ce7]:hover {\n  background-color: #f7f8fa;\n  border-color: #9164bc;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n.hero.is-light a.navbar-item.is-active[data-v-51c61ce7],\n.hero.is-light .navbar-link.is-active[data-v-51c61ce7] {\n  background-color: #f7f8fa;\n  border-bottom-color: #766C7F;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n.hero.is-light a.home-logo.navbar-item[data-v-51c61ce7]:hover {\n  border-color: transparent;\n}\n@media screen and (min-width: 769px), print {\n.hero.is-medium .hero-body[data-v-51c61ce7] {\n      padding-bottom: 3rem;\n      padding-top: 3rem;\n}\n}\n@media screen and (max-width: 1087px) {\n.hero.is-light .navbar-menu[data-v-51c61ce7] {\n      background-color: #f7f8fa;\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-light.is-bold .navbar-menu[data-v-51c61ce7] {\n      background-image: none;\n}\n}\n@media screen and (max-width: 480px) {\n.image.is-responsive[data-v-51c61ce7] {\n    height: 96px;\n    width: 96px;\n}\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg-site-source/src/components/NavBar.vue"],names:[],mappings:";AACA;EACE,kDAAkD;EAClD,0CAA0C;CAC3C;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;EACd,aAAa;CACd;AACD;EACE,uBAAuB;EACvB,0BAA0B;CAC3B;AACD;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,yBAAyB;EACzB,2BAA2B;CAC5B;AACD;EACE,wCAAwC;CACzC;AACD;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;;EAEE,0BAA0B;EAC1B,6BAA6B;EAC7B,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;EACE,0BAA0B;CAC3B;AACD;AACA;MACM,qBAAqB;MACrB,kBAAkB;CACvB;CACA;AACD;AACA;MACM,0BAA0B;CAC/B;CACA;AACD;AACA;MACM,uBAAuB;CAC5B;CACA;AACD;AACA;IACI,aAAa;IACb,YAAY;CACf;CACA",file:"NavBar.vue",sourcesContent:["\n.is-rounded[data-v-51c61ce7] {\n  -webkit-box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n  box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n}\n#tag-lines[data-v-51c61ce7] {\n  padding-top: .5rem;\n}\n.brand-image[data-v-51c61ce7] {\n  padding-top: .025em;\n  border-radius: 50%;\n}\n.brand-text[data-v-51c61ce7] {\n  padding-left: .3em;\n}\n.image[data-v-51c61ce7] {\n  margin: auto;\n}\n.image.is-responsive[data-v-51c61ce7] {\n  height: 110px;\n  width: 110px;\n}\n.hero.is-light.is-bold[data-v-51c61ce7] {\n  background-image: none;\n  background-color: #f7f8fa;\n}\n.hero.is-light .navbar-item[data-v-51c61ce7] {\n  background-color: #f7f8fa;\n  border-color: transparent;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n}\n.hero.is-light a.navbar-item.is-active[data-v-51c61ce7] {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light a.navbar-item[data-v-51c61ce7]:hover, .navbar-link[data-v-51c61ce7]:hover {\n  background-color: #f7f8fa;\n  border-color: #9164bc;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n.hero.is-light a.navbar-item.is-active[data-v-51c61ce7],\n.hero.is-light .navbar-link.is-active[data-v-51c61ce7] {\n  background-color: #f7f8fa;\n  border-bottom-color: #766C7F;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n.hero.is-light a.home-logo.navbar-item[data-v-51c61ce7]:hover {\n  border-color: transparent;\n}\n@media screen and (min-width: 769px), print {\n.hero.is-medium .hero-body[data-v-51c61ce7] {\n      padding-bottom: 3rem;\n      padding-top: 3rem;\n}\n}\n@media screen and (max-width: 1087px) {\n.hero.is-light .navbar-menu[data-v-51c61ce7] {\n      background-color: #f7f8fa;\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-light.is-bold .navbar-menu[data-v-51c61ce7] {\n      background-image: none;\n}\n}\n@media screen and (max-width: 480px) {\n.image.is-responsive[data-v-51c61ce7] {\n    height: 96px;\n    width: 96px;\n}\n}\n"],sourceRoot:""}])},tB3B:function(t,a,n){var e=n("ktGb");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("4b84bf5f",e,!0,{})}});
//# sourceMappingURL=6.c3592c7ce56290512647.js.map