webpackJsonp([8],{"75Qm":function(t,e){},EPwd:function(t,e){},GupK:function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("EPwd")}function n(t){s("75Qm")}function r(t){s("GupK")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),o=s("Dd8w"),c=s.n(o),l=s("PJh5"),u=s.n(l),h={data:function(){return{currentYear:""}},created:function(){this.currentYear=u()().format("YYYY")}},m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"has-text-centered"},[s("p",[t._v("\n          © luisjg "+t._s(t.currentYear)+"\n        ")]),t._v(" "),t._m(0)])])])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"has-text-centered contact-icons-container"},[s("p",{staticClass:"contact-icons"},[s("a",{staticClass:"icon",attrs:{href:"https://github.com/luisjg",rel:"noreferrer",target:"_blank","aria-label":"View my GitHub profile"}},[s("i",{staticClass:"fab fa-github-square fa-fw fa-2x",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("a",{staticClass:"icon",attrs:{href:"https://www.linkedin.com/in/luis-guzman-a6b59866",rel:"noreferrer",target:"_blank","aria-label":"Visit my LinkedIn profile"}},[s("i",{staticClass:"fab fa-linkedin fa-fw fa-2x",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("a",{staticClass:"icon",attrs:{href:"mailto:contact@luisjg.io",rel:"noreferrer",target:"_blank","aria-label":"Send me an e-mail to get in touch"}},[s("i",{staticClass:"fas fa-envelope-square fa-fw fa-2x",attrs:{"aria-hidden":"true"}})])])])}],v={render:m,staticRenderFns:d},f=v,g=s("VU/8"),j=a,p=g(h,f,!1,j,"data-v-89e65c38",null),b=p.exports,k={data:function(){return{section:String,isActive:!1}},methods:{applyActive:function(){return"home"!==this.$route.name&&"404"!==this.$route.name&&"blog"!==this.$route.name&&"resume"!==this.$route.name?"is-active has-text-weight-bold has-text-white":""},hamburgerToggle:function(){this.getWidth()<=1087&&(this.isActive=!this.isActive)},toggleHeroFooter:function(){return"home"!==this.$route.name&&"404"!==this.$route.name&&"blog"!==this.$route.name&&"resume"!==this.$route.name},getWidth:function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)},switchImageStyle:function(){return this.getWidth()<=480?"is-96x96":"is-128x128"}}},w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-medium is-light is-bold"},[s("div",{staticClass:"hero-head"},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[s("span",{staticClass:"is-size-4 has-text-weight-bold"},[t._v("luisjg.io")])]),t._v(" "),s("span",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},on:{click:function(e){t.hamburgerToggle()}}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])],1),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[s("div",{staticClass:"navbar-end"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/","exact-active-class":"is-active has-text-weight-bold has-text-white"},nativeOn:{click:function(e){t.hamburgerToggle()}}},[t._v("\n              Home\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/portfolio","active-class":"is-active has-text-weight-bold has-text-white"},nativeOn:{click:function(e){t.hamburgerToggle()}}},[t._v("\n              Portfolio\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/experience","active-class":"is-active has-text-weight-bold has-text-white"},nativeOn:{click:function(e){t.hamburgerToggle()}}},[t._v("\n              Experience\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/hobbies","active-class":"is-active has-text-weight-bold has-text-white"},nativeOn:{click:function(e){t.hamburgerToggle()}}},[t._v("\n              Hobbies\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/education","active-class":"is-active has-text-weight-bold has-text-white"},nativeOn:{click:function(e){t.hamburgerToggle()}}},[t._v("\n              Education\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/blog","exact-active-class":"is-active has-text-weight-bold has-text-white"},nativeOn:{click:function(e){t.hamburgerToggle()}}},[t._v("\n              Blog\n            ")])],1)])])])]),t._v(" "),s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("figure",{staticClass:"image",class:t.switchImageStyle()},[s("img",{staticClass:"is-rounded",attrs:{src:"https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432443/luisjg/profile.jpg",alt:"profile image"}})]),t._v(" "),t._m(0)])])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"is-size-4-desktop",attrs:{id:"tag-lines"}},[s("li",{staticStyle:{"padding-top":"0.4rem","padding-bottom":"0.3rem"}},[s("a",{staticClass:"button is-primary",attrs:{href:"https://drive.google.com/file/d/1LV7U0QFGkmNHzw6lV_IGIku2QhcCnQMs/view?usp=sharing",target:"_blank",rel:"noreferrer"}},[s("i",{staticClass:"fas fa-file-download",attrs:{"aria-disabled":"true"}}),t._v("  View Resume")])]),t._v(" "),s("li",[s("i",{staticClass:"russian-green fas fa-map-marker-alt",attrs:{"aria-hidden":"true"}}),t._v(" Los Angeles, CA\n        ")]),t._v(" "),s("li",[s("i",{staticClass:"russian-green fas fa-graduation-cap",attrs:{"aria-hidden":"true"}}),t._v(" Computer Science, BS\n        ")]),t._v(" "),s("li",[s("i",{staticClass:"russian-green fas fa-briefcase",attrs:{"aria-hidden":"true"}}),t._v(" Web Developer & Mentor,\n          CSUN META"),s("span",{staticClass:"red-text"},[t._v("+")]),t._v("LAB\n        ")])])}],_={render:w,staticRenderFns:x},z=_,C=s("VU/8"),S=n,y=C(k,z,!1,S,"data-v-3fc48240",null),E=y.exports,W=s("NYxO"),O={created:function(){this.retrieveExperienceData(),this.retrieveSchoolData(),this.retrieveWorkData()},components:{"footer-content":b,"nav-bar":E},computed:{adjustSvgSize:function(){return this.getWidth()<=480?"10%":"4%"}},methods:c()({},Object(W.b)(["retrieveExperienceData","retrieveSchoolData","retrieveWorkData"]),{registerServiceWorker:function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(t){console.log("SW registered: ",t)}).catch(function(t){console.log("SW registration failed: ",t)})})},getWidth:function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}})},D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",[s("nav-bar")],1),t._v(" "),s("main",[s("transition",{attrs:{name:"fade"}},[s("router-view")],1),t._v(" "),s("div",{staticClass:"has-text-centered"},[t._m(0),t._v(" "),s("div",{staticStyle:{"padding-top":"1rem","letter-spacing":".2rem"}},[s("a",{attrs:{href:"https://vuejs.org",rel:"noreferrer",target:"_blank","aria-label":"Visit the Vue homepage to find out more"}},[s("svg",{attrs:{viewBox:"0 0 128 128",width:t.adjustSvgSize}},[s("path",{attrs:{d:"m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087",fill:"none"}}),t._v(" "),s("path",{attrs:{d:"m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z",fill:"#35495e"}}),t._v(" "),s("path",{attrs:{d:"m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z",fill:"#41b883"}})])]),t._v(" "),s("a",{attrs:{href:"https://github.com",rel:"noreferrer",target:"_blank","aria-label":"Visit the GitHub homepage to find out more"}},[s("svg",{attrs:{viewBox:"0 0 128 128",width:t.adjustSvgSize}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}}),t._v(" "),s("path",{attrs:{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}})])])]),t._v(" "),t._m(1)])],1),t._v(" "),s("footer-content")],1)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("sup",[t._v("Built with")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"padding-top":"1.5rem"}},[s("a",{attrs:{href:"https://bulma.io",rel:"noreferrer",target:"_blank","aria-label":"Visit the Bulma homepage to find out more"}},[s("img",{attrs:{src:"https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432623/luisjg/made-with-bulma.e0eab74.png",alt:"Made with Bulma",width:"128",height:"24"}})]),t._v(" "),s("a",{attrs:{href:"https://buttercms.com",rel:"noreferrer",target:"_blank","aria-label":"Visit the ButterCMS homepage to find out more"}},[s("img",{attrs:{src:"https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH",alt:"Blog powered by ButterCMS",width:"128"}})])])}],q={render:D,staticRenderFns:M},F=q,I=s("VU/8"),N=r,V=I(O,F,!1,N,null,null),H=V.exports,P=s("/ocq"),B=function(){return s.e(6).then(s.bind(null,"oaL/"))},R=function(){return s.e(1).then(s.bind(null,"v4vk"))},L=function(){return s.e(3).then(s.bind(null,"YPbc"))},T=function(){return s.e(5).then(s.bind(null,"OoNo"))},U=function(){return s.e(2).then(s.bind(null,"lO7g"))},A=function(){return s.e(4).then(s.bind(null,"YcJa"))},G=function(){return s.e(0).then(s.bind(null,"yRJc"))};i.a.use(P.a);var J=new P.a({routes:[{path:"/",name:"home",component:U},{path:"/education",name:"education",component:R},{path:"/experience",name:"experience",component:L},{path:"/hobbies",name:"hobbies",component:T},{path:"/portfolio",name:"portfolio",component:G},{path:"/blog",name:"blog",component:B},{path:"/resume",name:"resume",component:B},{path:"*",name:"404",component:A}]}),X=s("mvHQ"),Y=s.n(X),Q=s("mtWM"),K=s.n(Q);i.a.use(W.a);var $=new W.a.Store({state:{experience:null,school:null,work:null,errors:[]},actions:{retrieveExperienceData:function(t){var e=this;sessionStorage.getItem("experience")?t.commit("storeExperienceData",JSON.parse(sessionStorage.getItem("experience"))):K.a.get("https://luisjg.io/json/experience.json").then(function(e){t.commit("storeExperienceData",e.data)}).catch(function(t){e.errors.push(t)})},retrieveSchoolData:function(t){var e=this;sessionStorage.getItem("school")?t.commit("storeSchoolData",JSON.parse(sessionStorage.getItem("school"))):K.a.get("https://luisjg.io/json/education.json").then(function(e){t.commit("storeSchoolData",e.data)}).catch(function(t){e.errors.push(t)})},retrieveWorkData:function(t){var e=this;sessionStorage.getItem("work")?t.commit("storeWorkData",JSON.parse(sessionStorage.getItem("work"))):K.a.get("https://luisjg.io/json/work.json").then(function(e){t.commit("storeWorkData",e.data)}).catch(function(t){e.errors.push(t)})}},getters:{experienceData:function(t){return t.experience},schoolData:function(t){return t.school},workData:function(t){return t.work}},mutations:{storeExperienceData:function(t,e){sessionStorage.setItem("experience",Y()(e)),t.experience=e},storeSchoolData:function(t,e){sessionStorage.setItem("school",Y()(e)),t.school=e},storeWorkData:function(t,e){sessionStorage.setItem("work",Y()(e)),t.work=e}}});i.a.config.productionTip=!1,new i.a({el:"#app",store:$,router:J,template:"<App/>",components:{App:H}})},uslO:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.ee5d4d0308dfafe9910e.js.map