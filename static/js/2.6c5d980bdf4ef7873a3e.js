webpackJsonp([2],{InHs:function(e,t,n){"use strict";function a(e){n("iOl/")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),o=n("NYxO"),r={name:"blog-post",watch:{$route:function(e,t){this.retrieveBlogPost(this.$route.params.slug)}},methods:s()({},Object(o.b)(["retrieveBlogPost"])),computed:s()({},Object(o.c)(["post"])),created:function(){this.retrieveBlogPost(this.$route.params.slug)}},A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"blog-post"}},[null!==e.post?n("div",{staticClass:"container"},[n("section",{staticClass:"articles"},[n("div",{staticClass:"column is-8 is-offset-2"},[n("div",{staticClass:"card article"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"author-image"},[n("figure",{staticClass:"image"},[n("img",{staticClass:"is-rounded",attrs:{src:this.post.data.author.profile_image,alt:""}})])]),e._v(" "),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title article-title has-text-centered"},[e._v(e._s(this.post.data.title))]),e._v(" "),n("div",{staticClass:"content article-body",domProps:{innerHTML:e._s(this.post.data.body)}}),e._v(" "),this.post.meta.previous_post?n("router-link",{staticClass:"button",attrs:{to:/blog/+this.post.meta.previous_post.slug}},[e._v("\n                    "+e._s(this.post.meta.previous_post.title)+"\n                  ")]):e._e(),e._v(" "),this.post.meta.next_post?n("router-link",{staticClass:"button",attrs:{to:/blog/+this.post.meta.next_post.slug}},[e._v("\n                    "+e._s(this.post.meta.next_post.title)+"\n                  ")]):e._e()],1)])])])])])]):e._e()])},c=[],l={render:A,staticRenderFns:c},d=l,m=n("VU/8"),C=a,p=m(r,d,!1,C,"data-v-e706c5ae",null);t.default=p.exports},"iOl/":function(e,t,n){var a=n("z81d");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("0ba9d87e",a,!0,{})},z81d:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n@media screen and (min-width: 769px) {\n.articles[data-v-e706c5ae] {\n    margin: 2rem 0;\n    margin-top: -0.5rem;\n}\n.article-body[data-v-e706c5ae] {\n    line-height: 1.4;\n    margin: 0 6rem;\n}\n}\n@media screen and (max-width: 768px) {\n.articles[data-v-e706c5ae] {\n    margin: 5rem 0;\n    margin-top: -0.75rem;\n}\n.article-body[data-v-e706c5ae] {\n    line-height: 1.4;\n    margin: 0 3rem;\n}\n}\n@media screen and (max-width: 591px) {\n.article-body[data-v-e706c5ae] {\n    line-height: 1.4;\n    margin: 0 1rem;\n}\n}\n.articles .content p[data-v-e706c5ae] {\n  line-height: 1.9;\n  margin: 5rem 0;\n}\n.author-image[data-v-e706c5ae] {\n  display: block;\n  margin-bottom: 1rem;\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-left: -30px;\n  border: 3px solid #ccc;\n  border-radius: 50%;\n}\n.author-image i.fas[data-v-e706c5ae] {\n  display: inline-block;\n  padding: 0.3em 0.2em;\n}\n.media-center[data-v-e706c5ae] {\n  display: block;\n  margin-bottom: 1rem;\n}\n.media-content[data-v-e706c5ae] {\n  margin-top: 3rem;\n}\n.article[data-v-e706c5ae] {\n  margin-top: 6rem;\n}\ndiv.column.is-8[data-v-e706c5ae]:first-child {\n  padding-top: 0;\n  margin-top: 0;\n}\n.article-title[data-v-e706c5ae] {\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 2;\n}\n.article-subtitle[data-v-e706c5ae] {\n  color: #909AA0;\n  margin-bottom: 3rem;\n}\n\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg.github.io/vue-redesign/src/components/BlogPost.vue"],names:[],mappings:";AACA;AACA;IACI,eAAe;IACf,oBAAoB;CACvB;AACD;IACI,iBAAiB;IACjB,eAAe;CAClB;CACA;AACD;AACA;IACI,eAAe;IACf,qBAAqB;CACxB;AACD;IACI,iBAAiB;IACjB,eAAe;CAClB;CACA;AACD;AACA;IACI,iBAAiB;IACjB,eAAe;CAClB;CACA;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,qBAAqB;CACtB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB",file:"BlogPost.vue",sourcesContent:["\n@media screen and (min-width: 769px) {\n.articles[data-v-e706c5ae] {\n    margin: 2rem 0;\n    margin-top: -0.5rem;\n}\n.article-body[data-v-e706c5ae] {\n    line-height: 1.4;\n    margin: 0 6rem;\n}\n}\n@media screen and (max-width: 768px) {\n.articles[data-v-e706c5ae] {\n    margin: 5rem 0;\n    margin-top: -0.75rem;\n}\n.article-body[data-v-e706c5ae] {\n    line-height: 1.4;\n    margin: 0 3rem;\n}\n}\n@media screen and (max-width: 591px) {\n.article-body[data-v-e706c5ae] {\n    line-height: 1.4;\n    margin: 0 1rem;\n}\n}\n.articles .content p[data-v-e706c5ae] {\n  line-height: 1.9;\n  margin: 5rem 0;\n}\n.author-image[data-v-e706c5ae] {\n  display: block;\n  margin-bottom: 1rem;\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-left: -30px;\n  border: 3px solid #ccc;\n  border-radius: 50%;\n}\n.author-image i.fas[data-v-e706c5ae] {\n  display: inline-block;\n  padding: 0.3em 0.2em;\n}\n.media-center[data-v-e706c5ae] {\n  display: block;\n  margin-bottom: 1rem;\n}\n.media-content[data-v-e706c5ae] {\n  margin-top: 3rem;\n}\n.article[data-v-e706c5ae] {\n  margin-top: 6rem;\n}\ndiv.column.is-8[data-v-e706c5ae]:first-child {\n  padding-top: 0;\n  margin-top: 0;\n}\n.article-title[data-v-e706c5ae] {\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 2;\n}\n.article-subtitle[data-v-e706c5ae] {\n  color: #909AA0;\n  margin-bottom: 3rem;\n}\n\n"],sourceRoot:""}])}});
//# sourceMappingURL=2.6c5d980bdf4ef7873a3e.js.map