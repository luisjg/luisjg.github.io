webpackJsonp([13],{NHnr:function(e,t,o){"use strict";function n(e){o("vFjX")}Object.defineProperty(t,"__esModule",{value:!0});var r=o("7+uW"),a=o("Dd8w"),i=o.n(a),s=o("NYxO"),l={created:function(){this.initializeButterCms(),this.retrieveBlogPosts(),this.retrieveExperienceData(),this.retrieveSchoolData(),this.retrieveWorkData()},components:{"footer-content":function(){return Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"TVmP"))},"nav-bar":function(){return o.e(6).then(o.bind(null,"g2+m"))}},methods:i()({},Object(s.b)(["initializeButterCms","retrieveBlogPosts","retrieveExperienceData","retrieveSchoolData","retrieveWorkData"]),{registerServiceWorker:function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})}})},c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("header",[o("nav-bar")],1),e._v(" "),o("main",[o("transition",{attrs:{name:"fade"}},[o("router-view")],1),e._v(" "),o("div",{staticClass:"has-text-centered"},[e._m(0),e._v(" "),o("div",{staticClass:"pt-1-half",staticStyle:{"letter-spacing":".2rem"}},[o("a",{attrs:{href:"https://vuejs.org",rel:"noopener noreferrer",target:"_blank","aria-label":"Visit the Vue homepage to find out more"}},[o("svg",{attrs:{arialabelledby:"vue-logo",viewBox:"0 0 128 128",role:"img"}},[o("title",{attrs:{id:"vue-logo"}},[e._v("Vue JS Logo")]),e._v(" "),o("path",{attrs:{d:"m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087",fill:"none"}}),e._v(" "),o("path",{attrs:{d:"m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z",fill:"#35495e"}}),e._v(" "),o("path",{attrs:{d:"m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z",fill:"#41b883"}})])]),e._v(" "),o("a",{attrs:{href:"https://github.com",rel:"noopener noreferrer",target:"_blank","aria-label":"Visit the GitHub homepage to find out more"}},[o("svg",{attrs:{arialabelledby:"github-logo",viewBox:"0 0 128 128",role:"img"}},[o("title",{attrs:{id:"github-logo"}},[e._v("GitHub Logo")]),e._v(" "),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}}),e._v(" "),o("path",{attrs:{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}})])])]),e._v(" "),e._m(1)])],1),e._v(" "),o("footer-content")],1)},u=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("sup",[e._v("Built with")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pt-1-half"},[o("a",{attrs:{href:"https://bulma.io",rel:"noopener noreferrer",target:"_blank","aria-label":"Visit the Bulma homepage to find out more"}},[o("img",{attrs:{src:"https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432623/luisjg/made-with-bulma.e0eab74.png",alt:"Made with Bulma",width:"128",height:"24"}})]),e._v(" "),o("a",{attrs:{href:"https://buttercms.com",rel:"noopener noreferrer",target:"_blank","aria-label":"Visit the ButterCMS homepage to find out more"}},[o("img",{attrs:{src:"https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH",alt:"Blog powered by ButterCMS",width:"128"}})])])}],m={render:c,staticRenderFns:u},p=m,h=o("VU/8"),g=n,f=h(l,p,!1,g,null,null),d=f.exports,v=o("/ocq"),b=function(){return Promise.all([o.e(0),o.e(11)]).then(o.bind(null,"SGec"))},S=function(){return Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"InHs"))},_=function(){return o.e(1).then(o.bind(null,"oaL/"))},k=function(){return o.e(4).then(o.bind(null,"v4vk"))},w=function(){return o.e(7).then(o.bind(null,"YPbc"))},B=function(){return Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"lO7g"))},D=function(){return o.e(10).then(o.bind(null,"YcJa"))},x=function(){return o.e(2).then(o.bind(null,"yRJc"))},P=function(){return o.e(9).then(o.bind(null,"O36n"))};r.a.use(v.a);var j=new v.a({routes:[{path:"/",name:"home",component:B},{path:"/education",name:"education",component:k},{path:"/experience",name:"experience",component:w},{path:"/portfolio",name:"portfolio",component:x},{path:"/blog",name:"blog",component:b},{path:"/blog/:slug",name:"blog-post",component:S},{path:"/projects",name:"projects",component:_},{path:"/skills",name:"skills",component:P},{path:"*",name:"404",component:D}]}),z=o("mvHQ"),I=o.n(z),M=o("mtWM"),W=o.n(M),O=o("a19Z"),C=o.n(O);r.a.use(s.a);var E=new s.a.Store({state:{butter:null,posts:null,post:null,experience:null,school:null,work:null,errors:[]},actions:{initializeButterCms:function(e){e.commit("initButter","2bc5de9c5ffa303c5928dfbc228ddb4d2073fe74")},retrieveBlogPosts:function(e){var t=e.commit,o=e.state;sessionStorage.getItem("posts")?t("storeBlogPosts",JSON.parse(sessionStorage.getItem("posts"))):o.butter.post.list({page:1,page_size:10}).then(function(e){e.data.data.length>0&&t("storeBlogPosts",e.data.data)})},retrieveBlogPost:function(e,t){var o=e.commit,n=e.state;sessionStorage.getItem(t)?o("storeBlogPost",JSON.parse(sessionStorage.getItem(t))):n.butter.post.retrieve(t).then(function(e){o("storeBlogPost",e.data)})},retrieveExperienceData:function(e){var t=this;sessionStorage.getItem("experience")?e.commit("storeExperienceData",JSON.parse(sessionStorage.getItem("experience"))):W.a.get("https://luisjg.io/json/experience.json").then(function(t){e.commit("storeExperienceData",t.data)}).catch(function(e){t.errors.push(e)})},retrieveSchoolData:function(e){var t=this;sessionStorage.getItem("school")?e.commit("storeSchoolData",JSON.parse(sessionStorage.getItem("school"))):W.a.get("https://luisjg.io/json/education.json").then(function(t){e.commit("storeSchoolData",t.data)}).catch(function(e){t.errors.push(e)})},retrieveWorkData:function(e){var t=this;sessionStorage.getItem("work")?e.commit("storeWorkData",JSON.parse(sessionStorage.getItem("work"))):W.a.get("https://luisjg.io/json/work.json").then(function(t){e.commit("storeWorkData",t.data)}).catch(function(e){t.errors.push(e)})}},getters:{butter:function(e){return null!=e.butter},posts:function(e){return e.posts},post:function(e){return e.post},experienceData:function(e){return e.experience},schoolData:function(e){return e.school},workData:function(e){return e.work}},mutations:{initButter:function(e,t){e.butter=C()(t)},storeExperienceData:function(e,t){sessionStorage.setItem("experience",I()(t)),e.experience=t},storeSchoolData:function(e,t){sessionStorage.setItem("school",I()(t)),e.school=t},storeWorkData:function(e,t){sessionStorage.setItem("work",I()(t)),e.work=t},storeBlogPosts:function(e,t){sessionStorage.setItem("posts",I()(t)),e.posts=t},storeBlogPost:function(e,t){sessionStorage.setItem(t.data.slug,I()(t)),e.post=t}}});r.a.config.productionTip=!1,new r.a({el:"#app",store:E,router:j,template:"<App/>",components:{App:d}})},vFjX:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5f4b8dc3edae1acc776e.js.map