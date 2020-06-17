webpackJsonp([3],{"41+9":function(e,t,n){(function(n){/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";function r(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function o(e){return"number"==typeof e&&Math.abs(e)<=l}function i(e){return f.test(e)||c.test(e)?e+"th":v.test(e)?e.replace(v,"ieth"):d.test(e)?e.replace(d,s):e}function s(e,t){return u[t]}function a(e,t){var n,s=parseInt(e,10);if(!r(s))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!o(s))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];return 0===t?o?o.join(" ").replace(/,$/,""):"zero":(o||(o=[]),t<0&&(o.push("minus"),t=Math.abs(t)),t<20?(n=0,r=x[t]):t<g?(n=t%h,r=A[Math.floor(t/h)],n&&(r+="-"+x[n],n=0)):t<_?(n=t%g,r=e(Math.floor(t/g))+" hundred"):t<m?(n=t%_,r=e(Math.floor(t/_))+" thousand,"):t<p?(n=t%m,r=e(Math.floor(t/m))+" million,"):t<b?(n=t%p,r=e(Math.floor(t/p))+" billion,"):t<w?(n=t%b,r=e(Math.floor(t/b))+" trillion,"):t<=y&&(n=t%w,r=e(Math.floor(t/w))+" quadrillion,"),o.push(r),e(n,o))}(s),t?i(n):n}var l=("object"==typeof self&&self.self===self&&self||"object"==typeof n&&n.global,9007199254740991),f=/(hundred|thousand|(m|b|tr|quadr)illion)$/,c=/teen$/,v=/y$/,d=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,u={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"},h=10,g=100,_=1e3,m=1e6,p=1e9,b=1e12,w=1e15,y=9007199254740992,x=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],A=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],C={toOrdinal:function(e){var t=parseInt(e,10);if(!r(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!o(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),i=Math.abs(t%100),s=11<=i&&i<=13,a=n.charAt(n.length-1);return n+(s?"th":"1"===a?"st":"2"===a?"nd":"3"===a?"rd":"th")},toWords:a,toWordsOrdinal:function(e){return i(a(e))}};void 0!==e&&e.exports&&(t=e.exports=C),t.numberToWords=C}()}).call(t,n("DuR2"))},SWFa:function(e,t,n){var r=n("WTVX");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("f5ec9490",r,!0,{})},WTVX:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.tab[data-v-344bcc98] {\n text-indent:5%;\n}\n@media screen and (min-width: 1024px) {\n.readability-fix[data-v-344bcc98] {\n    max-width: 68ch;\n}\n}\n","",{version:3,sources:["/Users/megingjord/Documents/luisjg-site-source/src/components/Home.vue"],names:[],mappings:";AACA;CACC,eAAe;CACf;AACD;AACA;IACI,gBAAgB;CACnB;CACA",file:"Home.vue",sourcesContent:["\n.tab[data-v-344bcc98] {\n text-indent:5%;\n}\n@media screen and (min-width: 1024px) {\n.readability-fix[data-v-344bcc98] {\n    max-width: 68ch;\n}\n}\n"],sourceRoot:""}])},lO7g:function(e,t,n){"use strict";function r(e){n("SWFa")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("PJh5"),i=n.n(o),s=n("41+9"),a=n.n(s),l={data:function(){return{now:i()(),then:i()("2016-02-14"),diff:String}},created:function(){this.diff=this.now.diff(this.then,"years").toString(),this.diff=a.a.toWords(this.diff)}},f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[e._m(0),e._v(" "),n("div",{staticClass:"columns is-centered is-mobile pb-4"},[n("div",{staticClass:"column is-half-tablet is-four-fifths-mobile"},[n("p",{staticClass:"is-size-5 tab readability-fix"},[e._v("\n        I'm a "),n("strong",[e._v("Software Engineer")]),e._v(" from the\n        "),n("strong",[e._v("Los Angeles")]),e._v(" area with "),n("strong",[e._v(e._s(this.diff)+" years")]),e._v("\n        of experience working as a "),n("strong",[e._v("Full Stack Web Developer")]),e._v("\n        who understands how to translate a "),n("strong",[e._v("client’s needs")]),e._v("\n        into a straightforward "),n("strong",[e._v("software design")]),e._v(" that follows\n        standard "),n("strong",[e._v("code conventions")]),e._v(",\n        "),n("strong",[e._v("unit testing")]),e._v(", and\n        "),n("strong",[e._v("extensive documentation")]),e._v(". I have a proven track\n        record of "),n("strong",[e._v("designing")]),e._v(" and "),n("strong",[e._v("developing")]),e._v("\n        modern and "),n("strong",[e._v("responsive web applications")]),e._v(" and\n        "),n("strong",[e._v("REST APIs")]),e._v(". Additionally, I'm also an experienced\n        "),n("strong",[e._v("team leader")]),e._v(" and "),n("strong",[e._v("mentor")]),e._v("\n        that understands software is built by a "),n("strong",[e._v("team")]),e._v(" of\n        unique "),n("strong",[e._v("individuals")]),e._v(" striving to solve one\n        "),n("strong",[e._v("goal")]),e._v(".\n      ")]),e._v(" "),e._m(1)])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section",attrs:{id:"home-section"}},[n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title"},[e._v("Hello there!")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"is-size-5 has-text-centered pt-1-half readability-fix"},[e._v(" If you would like to\n        know more about me or are interested in collaborating,\n        feel free and send me an "),n("strong",[n("a",{attrs:{href:"mailto:contact@luisjg.io",rel:"noopener noreferrer",target:"_blank","aria-label":"Send me an e-mail, let's talk."}},[n("u",[e._v("email")])])]),e._v(".\n      ")])}],v={render:f,staticRenderFns:c},d=v,u=n("VU/8"),h=r,g=u(l,d,!1,h,"data-v-344bcc98",null);t.default=g.exports}});
//# sourceMappingURL=3.d0efaaefd37bc345d393.js.map