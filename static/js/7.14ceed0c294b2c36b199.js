webpackJsonp([7],{"9xV7":function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"\n@media screen and (min-width: 769px) {\n.articles[data-v-57c5eb68] {\n    margin: 2rem 0;\n    margin-top: -0.5rem;\n}\n.article-body[data-v-57c5eb68] {\n    line-height: 1.4;\n    margin: 0 6rem;\n}\n.title[data-v-57c5eb68] {\n    margin: 0 4rem;\n}\n.tag[data-v-57c5eb68] {\n    margin-top: 2rem;\n}\n}\n@media screen and (max-width: 768px) {\n.articles[data-v-57c5eb68] {\n    margin: 5rem 0;\n    margin-top: -0.75rem;\n}\n.article-body[data-v-57c5eb68] {\n    line-height: 1.4;\n    margin: 0 3rem;\n}\n.title[data-v-57c5eb68] {\n    margin: 0 3rem;\n}\n.tag[data-v-57c5eb68] {\n    margin-top: 1rem;\n}\n.media-content[data-v-57c5eb68] {\n    overflow-x: unset;\n}\n}\n@media screen and (max-width: 591px) {\n.article-body[data-v-57c5eb68] {\n    line-height: 1.4;\n    margin: 0 1rem;\n}\n.title[data-v-57c5eb68] {\n    margin: 0 1rem;\n}\n}\n.card[data-v-57c5eb68] {\n  background-color: #fff;\n  color: #4a4a4a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  max-width: 100%;\n  position: relative;\n}\n.articles .content p[data-v-57c5eb68] {\n  line-height: 1.9;\n  margin: 5rem 0;\n}\n.author-image[data-v-57c5eb68] {\n  display: block;\n  margin-bottom: 1rem;\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-left: -30px;\n  border: 3px solid #ccc;\n  border-radius: 50%;\n}\n.author-image i.fas[data-v-57c5eb68] {\n  display: inline-block;\n  padding: 0.3em 0.2em;\n}\n.media-content[data-v-57c5eb68] {\n  margin-top: 2rem;\n}\n.article[data-v-57c5eb68] {\n  margin-top: 6rem;\n}\n.article-title[data-v-57c5eb68] {\n  font-size: 2rem;\n  font-style: italic;\n  line-height: 1.25;\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg-site-source/src/components/BlogPost.vue"],names:[],mappings:";AACA;AACA;IACI,eAAe;IACf,oBAAoB;CACvB;AACD;IACI,iBAAiB;IACjB,eAAe;CAClB;AACD;IACI,eAAe;CAClB;AACD;IACI,iBAAiB;CACpB;CACA;AACD;AACA;IACI,eAAe;IACf,qBAAqB;CACxB;AACD;IACI,iBAAiB;IACjB,eAAe;CAClB;AACD;IACI,eAAe;CAClB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;CACA;AACD;AACA;IACI,iBAAiB;IACjB,eAAe;CAClB;AACD;IACI,eAAe;CAClB;CACA;AACD;EACE,uBAAuB;EACvB,eAAe;EACf,yBAAyB;UACjB,iBAAiB;EACzB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,qBAAqB;CACtB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;CACnB",file:"BlogPost.vue",sourcesContent:["\n@media screen and (min-width: 769px) {\n.articles[data-v-57c5eb68] {\n    margin: 2rem 0;\n    margin-top: -0.5rem;\n}\n.article-body[data-v-57c5eb68] {\n    line-height: 1.4;\n    margin: 0 6rem;\n}\n.title[data-v-57c5eb68] {\n    margin: 0 4rem;\n}\n.tag[data-v-57c5eb68] {\n    margin-top: 2rem;\n}\n}\n@media screen and (max-width: 768px) {\n.articles[data-v-57c5eb68] {\n    margin: 5rem 0;\n    margin-top: -0.75rem;\n}\n.article-body[data-v-57c5eb68] {\n    line-height: 1.4;\n    margin: 0 3rem;\n}\n.title[data-v-57c5eb68] {\n    margin: 0 3rem;\n}\n.tag[data-v-57c5eb68] {\n    margin-top: 1rem;\n}\n.media-content[data-v-57c5eb68] {\n    overflow-x: unset;\n}\n}\n@media screen and (max-width: 591px) {\n.article-body[data-v-57c5eb68] {\n    line-height: 1.4;\n    margin: 0 1rem;\n}\n.title[data-v-57c5eb68] {\n    margin: 0 1rem;\n}\n}\n.card[data-v-57c5eb68] {\n  background-color: #fff;\n  color: #4a4a4a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  max-width: 100%;\n  position: relative;\n}\n.articles .content p[data-v-57c5eb68] {\n  line-height: 1.9;\n  margin: 5rem 0;\n}\n.author-image[data-v-57c5eb68] {\n  display: block;\n  margin-bottom: 1rem;\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-left: -30px;\n  border: 3px solid #ccc;\n  border-radius: 50%;\n}\n.author-image i.fas[data-v-57c5eb68] {\n  display: inline-block;\n  padding: 0.3em 0.2em;\n}\n.media-content[data-v-57c5eb68] {\n  margin-top: 2rem;\n}\n.article[data-v-57c5eb68] {\n  margin-top: 6rem;\n}\n.article-title[data-v-57c5eb68] {\n  font-size: 2rem;\n  font-style: italic;\n  line-height: 1.25;\n}\n"],sourceRoot:""}])},InHs:function(t,n,e){"use strict";function a(t){e("JQMX")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("PJh5"),r=e.n(o),A=e("NYxO"),c={name:"blog-post",watch:{$route:function(t,n){this.retrieveBlogPost(this.$route.params.slug)}},methods:s()({},Object(A.b)(["initializeButterCms","retrieveBlogPost"])),computed:s()({postCreatedAt:function(){return r()(this.post.data.published).format("MMM Do YYYY")},postBody:function(){if(this.post&&this.post.data.body)return this.post.data.body},postTitle:function(){if(this.post&&this.post.data.title)return this.post.data.title},authorImage:function(){if(this.post&&this.post.data.author.profile_image)return this.post.data.author.profile_image},postAuthor:function(){if(this.post&&this.post.data.author.first_name)return this.post.data.author.first_name},nextPost:function(){return null!=this.post&&null!=this.post.meta.next_post?this.post.meta.next_post:null},previousPost:function(){return null!=this.post&&null!=this.post.meta.previous_post?this.post.meta.previous_post:null},checkPosts:function(){return null!==this.nextPost||null!==this.previousPost||null}},Object(A.c)(["butter","post"])),components:{"coming-soon":function(){return e.e(1).then(e.bind(null,"oaL/"))}},created:function(){!1===this.butter&&this.initializeButterCms(),this.retrieveBlogPost(this.$route.params.slug)}},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"blog-post"}},[null===t.post?[e("coming-soon")]:e("div",{staticClass:"container"},[e("section",{staticClass:"articles"},[e("div",{staticClass:"card article"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"author-image"},[e("figure",{staticClass:"image"},[e("img",{staticClass:"is-rounded",attrs:{src:t.authorImage,alt:t.postAuthor+" profile image"}})])]),t._v(" "),e("div",{staticClass:"media-content has-text-centered"},[e("p",{staticClass:"title article-title"},[t._v(t._s(t.postTitle))]),t._v(" "),e("div",{staticClass:"tags has-addons level-item"},[e("div",{staticClass:"tag is-rounded"},[t._v(t._s(t.postCreatedAt))])])])]),t._v(" "),t.postBody?[e("div",{staticClass:"content article-body",domProps:{innerHTML:t._s(t.postBody)}})]:t._e()],2)]),t._v(" "),t.checkPosts?e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-offset-2"},[e("router-link",{staticClass:"button",attrs:{to:/blog/+t.previousPost}},[e("i",{staticClass:"far fa-chevron-left",staticStyle:{"margin-right":"0.5rem"}}),t._v("Previous\n              ")])],1),t._v(" "),e("div",{staticClass:"column"}),t._v(" "),e("div",{staticClass:"column"},[e("router-link",{staticClass:"button",attrs:{to:/blog/+t.nextPost}},[t._v("\n                Next "),e("i",{staticClass:"far fa-chevron-right",staticStyle:{"margin-left":"0.5rem"}})])],1)]):t._e()])])],2)},d=[],m={render:l,staticRenderFns:d},C=m,p=e("VU/8"),u=a,h=p(c,C,!1,u,"data-v-57c5eb68",null);n.default=h.exports},JQMX:function(t,n,e){var a=e("9xV7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("2560e723",a,!0,{})}});
//# sourceMappingURL=7.14ceed0c294b2c36b199.js.map