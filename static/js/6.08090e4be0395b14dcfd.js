webpackJsonp([6],{Y23T:function(a,t,e){var n=e("rVBD");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("7eb1a1ef",n,!0,{})},"g2+m":function(a,t,e){"use strict";function n(a){e("Y23T")}Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{section:String,isActive:!1}},methods:{applyActive:function(){return"home"!==this.$route.name&&"404"!==this.$route.name&&"blog"!==this.$route.name?"is-active has-text-weight-bold":""},hamburgerToggle:function(){this.getWidth()<=1087&&(this.isActive=!this.isActive)},getWidth:function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)},switchImageStyle:function(){return this.getWidth()<=480?"is-96x96":"is-128x128"}}},r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"hero is-medium is-light is-bold"},[e("div",{staticClass:"hero-head"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/","exact-active-class":"is-active"}},[e("span",{staticClass:"is-size-5"},[a._v("luisjg.io")])]),a._v(" "),e("span",{staticClass:"navbar-burger burger",class:{"is-active":a.isActive},on:{click:function(t){return a.hamburgerToggle()}}},[e("span"),a._v(" "),e("span"),a._v(" "),e("span")])],1),a._v(" "),e("div",{staticClass:"navbar-menu",class:{"is-active":a.isActive}},[e("div",{staticClass:"navbar-end"},[e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"portfolio"},"active-class":"is-active"},nativeOn:{click:function(t){return a.hamburgerToggle()}}},[a._v("\n              Portfolio\n            ")]),a._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"experience"},"active-class":"is-active"},nativeOn:{click:function(t){return a.hamburgerToggle()}}},[a._v("\n              Experience\n            ")]),a._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"skills"},"active-class":"is-active"},nativeOn:{click:function(t){return a.hamburgerToggle()}}},[a._v("\n              Skills\n            ")]),a._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"education"},"active-class":"is-active"},nativeOn:{click:function(t){return a.hamburgerToggle()}}},[a._v("\n              Education\n            ")]),a._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"blog"},"exact-active-class":"is-active"},nativeOn:{click:function(t){return a.hamburgerToggle()}}},[a._v("\n              Blog\n            ")])],1)])])])]),a._v(" "),e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("figure",{staticClass:"image",class:a.switchImageStyle()},[e("img",{staticClass:"is-rounded",attrs:{src:"https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432443/luisjg/profile.jpg",alt:"profile image"}})]),a._v(" "),a._m(0)])])])},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ul",{staticClass:"is-size-5",attrs:{id:"tag-lines"}},[e("li",[e("i",{staticClass:"russian-green fad fa-map-marker-alt",attrs:{"aria-hidden":"true"}}),a._v(" Los Angeles, CA\n        ")]),a._v(" "),e("li",[e("i",{staticClass:"russian-green fad fa-graduation-cap",attrs:{"aria-hidden":"true"}}),a._v(" Computer Science, BS\n        ")]),a._v(" "),e("li",[e("i",{staticClass:"russian-green fad fa-briefcase",attrs:{"aria-hidden":"true"}}),a._v(" Web Developer, CSUN IT\n        ")])])}],s={render:r,staticRenderFns:o},c=s,d=e("VU/8"),l=n,v=d(i,c,!1,l,"data-v-1cae3a98",null);t.default=v.exports},rVBD:function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,"\n.is-rounded[data-v-1cae3a98] {\n  -webkit-box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n  box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n}\n@media screen and (min-width: 769px), print {\n.hero.is-medium .hero-body[data-v-1cae3a98] {\n      padding-bottom: 3rem;\n      padding-top: 3rem;\n}\n}\n@media screen and (max-width: 1087px) {\n.hero.is-light .navbar-menu[data-v-1cae3a98] {\n      background-color: #f6f8fa;\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-light.is-bold .navbar-menu[data-v-1cae3a98] {\n      background-image: none;\n}\n}\n#tag-lines[data-v-1cae3a98] {\n  padding-top: .5rem;\n}\n.image[data-v-1cae3a98] {\n  margin: auto;\n}\n.hero.is-light.is-bold[data-v-1cae3a98] {\n  background-image: none;\n  background-color: #f6f8fa;\n}\n.hero.is-light .navbar-item[data-v-1cae3a98] {\n  border-color: #f6f8fa;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n}\n.hero.is-light a.navbar-item.is-active[data-v-1cae3a98] {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light a.navbar-item[data-v-1cae3a98]:hover, .navbar-link[data-v-1cae3a98]:hover {\n  background-color: #f6f8fa;\n  border-color: #766C7F;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n.hero.is-light a.navbar-item.is-active[data-v-1cae3a98],\n.hero.is-light .navbar-link.is-active[data-v-1cae3a98] {\n  background-color: #f6f8fa;\n  border-bottom-color: #766C7F;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg.github.io/vue-redesign/src/components/NavBar.vue"],names:[],mappings:";AACA;EACE,kDAAkD;EAClD,0CAA0C;CAC3C;AACD;AACA;MACM,qBAAqB;MACrB,kBAAkB;CACvB;CACA;AACD;AACA;MACM,0BAA0B;CAC/B;CACA;AACD;AACA;MACM,uBAAuB;CAC5B;CACA;AACD;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;CACd;AACD;EACE,uBAAuB;EACvB,0BAA0B;CAC3B;AACD;EACE,sBAAsB;EACtB,yBAAyB;EACzB,2BAA2B;CAC5B;AACD;EACE,wCAAwC;CACzC;AACD;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;;EAEE,0BAA0B;EAC1B,6BAA6B;EAC7B,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;CACpB",file:"NavBar.vue",sourcesContent:["\n.is-rounded[data-v-1cae3a98] {\n  -webkit-box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n  box-shadow: 4px 4px 10px rgba(0,0,0, 0.5);\n}\n@media screen and (min-width: 769px), print {\n.hero.is-medium .hero-body[data-v-1cae3a98] {\n      padding-bottom: 3rem;\n      padding-top: 3rem;\n}\n}\n@media screen and (max-width: 1087px) {\n.hero.is-light .navbar-menu[data-v-1cae3a98] {\n      background-color: #f6f8fa;\n}\n}\n@media screen and (max-width: 768px) {\n.hero.is-light.is-bold .navbar-menu[data-v-1cae3a98] {\n      background-image: none;\n}\n}\n#tag-lines[data-v-1cae3a98] {\n  padding-top: .5rem;\n}\n.image[data-v-1cae3a98] {\n  margin: auto;\n}\n.hero.is-light.is-bold[data-v-1cae3a98] {\n  background-image: none;\n  background-color: #f6f8fa;\n}\n.hero.is-light .navbar-item[data-v-1cae3a98] {\n  border-color: #f6f8fa;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n}\n.hero.is-light a.navbar-item.is-active[data-v-1cae3a98] {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light a.navbar-item[data-v-1cae3a98]:hover, .navbar-link[data-v-1cae3a98]:hover {\n  background-color: #f6f8fa;\n  border-color: #766C7F;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n.hero.is-light a.navbar-item.is-active[data-v-1cae3a98],\n.hero.is-light .navbar-link.is-active[data-v-1cae3a98] {\n  background-color: #f6f8fa;\n  border-bottom-color: #766C7F;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=6.08090e4be0395b14dcfd.js.map