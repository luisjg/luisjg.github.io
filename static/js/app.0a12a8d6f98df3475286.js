webpackJsonp([13],{NHnr:function(t,e,n){"use strict";function o(t){n("hemm")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("Dd8w"),a=n.n(i),s=n("NYxO"),c={created:function(){this.initializeButterCms(),this.retrieveBlogPosts(),this.retrieveExperienceData(),this.retrieveSchoolData(),this.retrieveWorkData()},components:{"footer-content":function(){return n.e(1).then(n.bind(null,"TVmP"))},"nav-bar":function(){return n.e(6).then(n.bind(null,"g2+m"))}},computed:{adjustSvgSize:function(){return this.getWidth()<=480?"10%":"4%"}},methods:a()({},Object(s.b)(["initializeButterCms","retrieveBlogPosts","retrieveExperienceData","retrieveSchoolData","retrieveWorkData"]),{registerServiceWorker:function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(t){console.log("SW registered: ",t)}).catch(function(t){console.log("SW registration failed: ",t)})})},getWidth:function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}})},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("nav-bar")],1),t._v(" "),n("main",[n("transition",{attrs:{name:"fade"}},[n("router-view")],1),t._v(" "),n("div",{staticClass:"has-text-centered"},[t._m(0),t._v(" "),n("div",{staticClass:"pt-1-half",staticStyle:{"letter-spacing":".2rem"}},[n("a",{attrs:{href:"https://vuejs.org",rel:"noreferrer",target:"_blank","aria-label":"Visit the Vue homepage to find out more"}},[n("svg",{attrs:{arialabelledby:"vue-logo",viewBox:"0 0 128 128",role:"img"}},[n("title",{attrs:{id:"vue-logo"}},[t._v("Vue JS Logo")]),t._v(" "),n("path",{attrs:{d:"m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087",fill:"none"}}),t._v(" "),n("path",{attrs:{d:"m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z",fill:"#35495e"}}),t._v(" "),n("path",{attrs:{d:"m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z",fill:"#41b883"}})])]),t._v(" "),n("a",{attrs:{href:"https://github.com",rel:"noreferrer",target:"_blank","aria-label":"Visit the GitHub homepage to find out more"}},[n("svg",{attrs:{arialabelledby:"github-logo",viewBox:"0 0 128 128",role:"img"}},[n("title",{attrs:{id:"github-logo"}},[t._v("GitHub Logo")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}}),t._v(" "),n("path",{attrs:{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}})])])]),t._v(" "),t._m(1)])],1),t._v(" "),n("footer-content")],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sup",[t._v("Built with")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-1-half"},[n("a",{attrs:{href:"https://bulma.io",rel:"noreferrer",target:"_blank","aria-label":"Visit the Bulma homepage to find out more"}},[n("img",{attrs:{src:"https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432623/luisjg/made-with-bulma.e0eab74.png",alt:"Made with Bulma",width:"128",height:"24"}})]),t._v(" "),n("a",{attrs:{href:"https://buttercms.com",rel:"noreferrer",target:"_blank","aria-label":"Visit the ButterCMS homepage to find out more"}},[n("img",{attrs:{src:"https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH",alt:"Blog powered by ButterCMS",width:"128"}})])])}],m={render:l,staticRenderFns:u},h=m,p=n("VU/8"),d=o,f=p(c,h,!1,d,null,null),g=f.exports,v=n("/ocq"),b=function(){return n.e(2).then(n.bind(null,"quGU"))},_=function(){return n.e(9).then(n.bind(null,"InHs"))},S=function(){return n.e(0).then(n.bind(null,"oaL/"))},k=function(){return n.e(8).then(n.bind(null,"v4vk"))},w=function(){return n.e(4).then(n.bind(null,"YPbc"))},x=function(){return n.e(11).then(n.bind(null,"OoNo"))},D=function(){return n.e(7).then(n.bind(null,"lO7g"))},B=function(){return n.e(10).then(n.bind(null,"YcJa"))},W=function(){return n.e(3).then(n.bind(null,"yRJc"))},z=function(){return n.e(5).then(n.bind(null,"O36n"))};r.a.use(v.a);var j=new v.a({routes:[{path:"/",name:"home",component:D},{path:"/education",name:"education",component:k},{path:"/experience",name:"experience",component:w},{path:"/hobbies",name:"hobbies",component:x},{path:"/portfolio",name:"portfolio",component:W},{path:"/blog",name:"blog",component:b},{path:"/blog/:slug",name:"blog-post",component:_},{path:"/projects",name:"projects",component:S},{path:"/skills",name:"skills",component:z},{path:"*",name:"404",component:B}]}),M=n("mvHQ"),E=n.n(M),P=n("mtWM"),y=n.n(P),I=n("a19Z"),C=n.n(I);r.a.use(s.a);var O=new s.a.Store({state:{butter:null,posts:null,post:null,experience:null,school:null,work:null,errors:[]},actions:{initializeButterCms:function(t){t.commit("initButter","2bc5de9c5ffa303c5928dfbc228ddb4d2073fe74")},retrieveBlogPosts:function(t){var e=t.context;t.state.butter.post.list({page:1,page_size:10}).then(function(t){t.data.data.length>0&&e.commit("storeBlogPosts",t.data.data)})},retrieveBlogPost:function(t,e){var n=t.context;t.state.butter.post.retrieve(e).then(function(t){n.commit("storeBlogPost",t.data)})},retrieveExperienceData:function(t){var e=this;sessionStorage.getItem("experience")?t.commit("storeExperienceData",JSON.parse(sessionStorage.getItem("experience"))):y.a.get("https://luisjg.io/json/experience.json").then(function(e){t.commit("storeExperienceData",e.data)}).catch(function(t){e.errors.push(t)})},retrieveSchoolData:function(t){var e=this;sessionStorage.getItem("school")?t.commit("storeSchoolData",JSON.parse(sessionStorage.getItem("school"))):y.a.get("https://luisjg.io/json/education.json").then(function(e){t.commit("storeSchoolData",e.data)}).catch(function(t){e.errors.push(t)})},retrieveWorkData:function(t){var e=this;sessionStorage.getItem("work")?t.commit("storeWorkData",JSON.parse(sessionStorage.getItem("work"))):y.a.get("https://luisjg.io/json/work.json").then(function(e){t.commit("storeWorkData",e.data)}).catch(function(t){e.errors.push(t)})}},getters:{butter:function(t){return null!=t.butter},posts:function(t){return t.posts},post:function(t){return t.post},experienceData:function(t){return t.experience},schoolData:function(t){return t.school},workData:function(t){return t.work}},mutations:{initButter:function(t,e){t.butter=C()(e)},storeExperienceData:function(t,e){sessionStorage.setItem("experience",E()(e)),t.experience=e},storeSchoolData:function(t,e){sessionStorage.setItem("school",E()(e)),t.school=e},storeWorkData:function(t,e){sessionStorage.setItem("work",E()(e)),t.work=e},storeBlogPosts:function(t,e){t.posts=e},storeBlogPost:function(t,e){t.post=e}}});r.a.config.productionTip=!1,new r.a({el:"#app",store:O,router:j,template:"<App/>",components:{App:g}})},hemm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0a12a8d6f98df3475286.js.map