(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04a6e4df"],{"02f4":function(t,e,r){var n=r("4588"),i=r("be13");t.exports=function(t){return function(e,r){var a,c,o=String(i(e)),s=n(r),u=o.length;return s<0||s>=u?t?"":void 0:(a=o.charCodeAt(s),a<55296||a>56319||s+1===u||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):a:t?o.slice(s,s+2):c-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"106b":function(t,e,r){"use strict";var n=r("cb5b"),i=r.n(n);i.a},"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),a=r("6821"),c=r("6a99"),o=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=a(t),e=c(e,!0),s)try{return u(t,e)}catch(r){}if(o(t,e))return i(!n.f.call(t,e),t[e])}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),i=r("32e9"),a=r("79e5"),c=r("be13"),o=r("2b4c"),s=r("520a"),u=o("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var d=o(t),h=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=h?!a((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[d](""),!e})):void 0;if(!h||!p||"replace"===t&&!l||"split"===t&&!f){var g=/./[d],v=r(c,d,""[t],(function(t,e,r,n,i){return e.exec===s?h&&!i?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),b=v[0],m=v[1];n(String.prototype,t,b),i(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},2994:function(t,e,r){"use strict";r("68ef"),r("c0c2")},"2bdd":function(t,e,r){"use strict";var n=r("d282"),i=r("02de"),a=r("5fbe"),c=r("a8c1"),o=r("543e"),s=Object(n["a"])("list"),u=s[0],l=s[1],f=s[2];e["a"]=u({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(c["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},direction:{type:String,default:"down"}},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.loading||t.finished||t.error)){var e,r=t.$el,n=t.scroller,a=t.offset,c=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(i["a"])(r))return!1;var s=!1,u=t.$refs.placeholder.getBoundingClientRect();s="up"===c?u.top-e.top<=a:u.bottom-e.bottom<=a,s&&(t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:l("placeholder")});return t("div",{class:l(),attrs:{role:"feed","aria-busy":this.loading}},["down"===this.direction?this.slots():e,this.loading&&t("div",{class:l("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||f("loading")])]),this.finished&&this.finishedText&&t("div",{class:l("finished-text")},[this.finishedText]),this.error&&this.errorText&&t("div",{on:{click:this.clickErrorText},class:l("error-text")},[this.errorText]),"up"===this.direction?this.slots():e])}})},"371e":function(t,e,r){"use strict";r.r(e);var n,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item_list"},[r("van-tabs",{on:{click:t.handleTabClick},model:{value:t.navActive,callback:function(e){t.navActive=e},expression:"navActive"}},t._l(t.navList,(function(e,n){return r("van-tab",{key:n,attrs:{title:e.name}},[r("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了"},on:{load:t.getGoodsList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("div",{staticClass:"h"},[r("div",{staticClass:"name"},[t._v(t._s(t.currentCategory.name))]),r("div",{staticClass:"desc"},[t._v(t._s(t.currentCategory.desc))])]),t._l(t.goodsList,(function(e,n){return r("van-card",{key:n,attrs:{desc:e.brief,title:e.name,thumb:e.picUrl,price:e.retailPrice,"origin-price":e.counterPrice},on:{click:function(r){return t.itemClick(e.id)}}})}))],2)],1)})),1)],1)},a=[],c=r("bd86"),o=(r("bda7"),r("5e46")),s=(r("da3c"),r("0b33")),u=(r("9cb7"),r("66fd")),l=(r("7f7f"),r("2994"),r("2bdd")),f=r("75fc"),d=(r("a481"),r("c5f6"),r("4ec3")),h={name:"Item-list",props:{itemClass:{type:[String,Number],default:""}},data:function(){return{categoryId:this.itemClass,goodsList:[],page:0,limit:10,currentCategory:{},navList:[],navActive:0,loading:!1,finished:!1}},created:function(){this.init()},methods:{handleTabClick:function(t){this.categoryId=this.navList[t].id,this.$router.replace({name:"category",query:{itemClass:this.categoryId}}),this.init()},init:function(){var t=this;Object(d["E"])({id:this.categoryId}).then((function(e){t.navList=e.data.data.brotherCategory,t.currentCategory=e.data.data.currentCategory,e.data.data.parentCategory.id==t.categoryId&&(t.categoryId=e.data.data.currentCategory.id);for(var r=0;r<t.navList.length;r++)if(t.navList[r].id==t.categoryId){t.navActive=r;break}t.page=0,t.goodsList=[],t.getGoodsList()}))},getGoodsList:function(){var t=this;this.page++,Object(d["G"])({categoryId:this.categoryId,page:this.page,limit:this.limit}).then((function(e){var r;(r=t.goodsList).push.apply(r,Object(f["a"])(e.data.data.list)),t.loading=!1,t.finished=e.data.data.page>=e.data.data.pages}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:(n={},Object(c["a"])(n,l["a"].name,l["a"]),Object(c["a"])(n,u["a"].name,u["a"]),Object(c["a"])(n,s["a"].name,s["a"]),Object(c["a"])(n,o["a"].name,o["a"]),n)},p=h,g=(r("106b"),r("2877")),v=Object(g["a"])(p,i,a,!1,null,"138cf2ce",null);e["default"]=v.exports},"520a":function(t,e,r){"use strict";var n=r("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,o="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(t){var e,r,c,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(e=f[o]),c=i.call(f,t),s&&c&&(f[o]=f.global?c.index+c[0].length:e),u&&c&&c.length>1&&a.call(c[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var a,c=e.constructor;return c!==r&&"function"==typeof c&&(a=c.prototype)!==r.prototype&&n(a)&&i&&i(t,a),t}},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),a=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},a481:function(t,e,r){"use strict";var n=r("cb7c"),i=r("4bf8"),a=r("9def"),c=r("4588"),o=r("0390"),s=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,(function(t,e,r,g){return[function(n,i){var a=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,a,i):r.call(String(a),n,i)},function(t,e){var i=g(r,t,this,e);if(i.done)return i.value;var f=n(t),d=String(this),h="function"===typeof e;h||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var x=[];while(1){var y=s(f,d);if(null===y)break;if(x.push(y),!b)break;var k=String(y[0]);""===k&&(f.lastIndex=o(d,a(f.lastIndex),m))}for(var I="",C=0,E=0;E<x.length;E++){y=x[E];for(var _=String(y[0]),A=u(l(c(y.index),d.length),0),O=[],S=1;S<y.length;S++)O.push(p(y[S]));var N=y.groups;if(h){var T=[_].concat(O,A,d);void 0!==N&&T.push(N);var w=String(e.apply(void 0,T))}else w=v(_,d,A,O,N,e);A>=C&&(I+=d.slice(C,A)+w,C=A+_.length)}return I+d.slice(C)}];function v(t,e,n,a,c,o){var s=n+t.length,u=a.length,l=h;return void 0!==c&&(c=i(c),l=d),r.call(o,l,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":o=c[i.slice(1,-1)];break;default:var l=+i;if(0===l)return r;if(l>u){var d=f(l/10);return 0===d?r:d<=u?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):r}o=a[l-1]}return void 0===o?"":o}))}}))},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),a=r("79e5"),c=r("fdef"),o="["+c+"]",s="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t,e,r){var i={},o=a((function(){return!!c[t]()||s[t]()!=s})),u=i[t]=o?e(d):c[t];r&&(i[r]=u),n(n.P+n.F*o,"String",i)},d=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},bda7:function(t,e,r){"use strict";r("68ef"),r("ae9e"),r("b807")},c0c2:function(t,e,r){},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("2d95"),c=r("5dbc"),o=r("6a99"),s=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,d=r("aa77").trim,h="Number",p=n[h],g=p,v=p.prototype,b=a(r("2aeb")(v))==h,m="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():d(e,3);var r,n,i,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var c,s=e.slice(2),u=0,l=s.length;u<l;u++)if(c=s.charCodeAt(u),c<48||c>i)return NaN;return parseInt(s,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(b?s((function(){v.valueOf.call(r)})):a(r)!=h)?c(new g(x(e)),r,p):x(e)};for(var y,k=r("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;k.length>I;I++)i(g,y=k[I])&&!i(p,y)&&f(p,y,l(g,y));p.prototype=v,v.constructor=p,r("2aba")(n,h,p)}},cb5b:function(t,e,r){},da3c:function(t,e,r){"use strict";r("68ef"),r("f319")},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);