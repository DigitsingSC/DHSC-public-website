/*! For license information please see 02-molecules-cta-banner-cta-banner-stories.6be4fba0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdhsc_theme=self.webpackChunkdhsc_theme||[]).push([[3764],{"./.storybook/drupalAttributes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var drupal_attribute__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/drupal-attribute/src/index.js"),drupal_attribute__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(drupal_attribute__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=class DrupalAttribute{constructor(){this.drupalAttribute=new(drupal_attribute__WEBPACK_IMPORTED_MODULE_0___default())}addClass(stringOrMap){let stringOrArray;return stringOrArray=stringOrMap instanceof Map?Array.from(stringOrMap.values()):stringOrMap,this.drupalAttribute.addClass(stringOrArray),this}hasClass(value){return this.drupalAttribute.hasClass(value)}removeAttribute(key){return this.drupalAttribute.removeAttribute(key),this}removeClass(value){return this.drupalAttribute.removeClass(value),this}setAttribute(key,value){return this.drupalAttribute.setAttribute(key,value),this}toString(){return this.drupalAttribute.toString()}}},"./stories/02-molecules/cta-banner/cta-banner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CTABanner:()=>CTABanner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cta_banner_stories});__webpack_require__("./node_modules/react/index.js");var drupalAttributes=__webpack_require__("./.storybook/drupalAttributes.js"),cta_banner=__webpack_require__("./stories/02-molecules/cta-banner/cta-banner.twig"),cta_banner_default=__webpack_require__.n(cta_banner),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cta_banner_cta_banner=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[4]!./stories/02-molecules/cta-banner/cta-banner.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cta_banner_cta_banner.Z,options);cta_banner_cta_banner.Z&&cta_banner_cta_banner.Z.locals&&cta_banner_cta_banner.Z.locals;const imgTag=`<img src=${__webpack_require__("./stories/assets/images/content-card.jpg")} alt='Digital Social Care'/>`,cta_banner_stories={title:"Design System/Molecules/CTA Banner",component:cta_banner_default(),argTypes:{layout:{options:["left","right"],control:{type:"radio"},defaultValue:"left"}}},CTABanner=(({attributes,layout,title,description,link,media})=>cta_banner_default()({attributes,layout,title,description,link,media})).bind({});CTABanner.args={attributes:new drupalAttributes.Z,layout:"left",title:"CTA Banner",description:"This is a CTA Banner",link:"<a href='#'>This is a link</a>",media:imgTag},CTABanner.parameters={...CTABanner.parameters,docs:{...CTABanner.parameters?.docs,source:{originalSource:"({\n  attributes,\n  layout,\n  title,\n  description,\n  link,\n  media\n}) => ctaBanner({\n  attributes,\n  layout,\n  title,\n  description,\n  link,\n  media\n})",...CTABanner.parameters?.docs?.source}}};const __namedExportsOrder=["CTABanner"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[4]!./stories/02-molecules/cta-banner/cta-banner.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media (min-width: 767px) {\n    .m-cta-banner--left .m-cta-banner__content {\n        order: 2\n    }\n    .m-cta-banner--left .m-cta-banner__media {\n        order: 1\n    }\n    .m-cta-banner--right .m-cta-banner__content {\n        order: 1\n    }\n    .m-cta-banner--right .m-cta-banner__media {\n        order: 2\n    }\n}","",{version:3,sources:["webpack://./stories/02-molecules/cta-banner/cta-banner.scss"],names:[],mappings:"AAGM;IAAA;QAAA;IAAA;IAGA;QAAA;IAAA;IAKA;QAAA;IAAA;IAGA;QAAA;IAAA;AAXA",sourcesContent:[".m-cta-banner {\r\n  &--left {\r\n    .m-cta-banner__content {\r\n      @apply tablet:order-2;\r\n    }\r\n    .m-cta-banner__media {\r\n      @apply tablet:order-1;\r\n    }\r\n  }\r\n  &--right {\r\n    .m-cta-banner__content {\r\n      @apply tablet:order-1;\r\n    }\r\n    .m-cta-banner__media {\r\n      @apply tablet:order-2;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/drupal-attribute/src/index.js":module=>{class DrupalAttribute extends Map{constructor(it){super(it)}addClass(args){let self=this,values=[];for(let i=0;i<arguments.length;i++)values.push(arguments[i]);return values.forEach((function(value){Array.isArray(value)||(value=[value]),self.has("class")||self.setAttribute("class",[]);let classes=self.get("class");value.forEach((function(d){classes.indexOf(d)<0&&classes.push(d)}))})),this}removeClass(value){let classes=[];return this.has("class")&&(classes=this.get("class")),Array.isArray(value)||(value=[value]),value.forEach((function(v){let index=classes.indexOf(v);index>-1&&classes.splice(index,1)})),this}hasClass(value){let classes=[];return this.has("class")&&(classes=this.get("class")),classes.indexOf(value)>-1}setAttribute(key,value){return this.set(key,value),this}removeAttribute(key){return this.delete(key),this}toString(){let result="",components=[];this.forEach((function(value,key){Array.isArray(value)&&(value=value.join(" ")),components.push([key,'"'+value+'"'].join("="))}));let rendered=components.join(" ");return rendered&&(result+=" "+rendered),result}}module.exports=DrupalAttribute},"./node_modules/react/cjs/react.production.min.js":(__unused_webpack_module,exports)=>{"use strict";var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}function F(){}function G(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}E.prototype.isReactComponent={},E.prototype.setState=function(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")},E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},F.prototype=E.prototype;var H=G.prototype=new F;H.constructor=G,C(H,E.prototype),H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}function O(a){return"object"==typeof a&&null!==a&&a.$$typeof===l}var P=/\/+/g;function Q(a,b){return"object"==typeof a&&null!==a&&null!=a.key?function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,(function(a){return b[a]}))}(""+a.key):b.toString(36)}function R(a,b,e,d,c){var k=typeof a;"undefined"!==k&&"boolean"!==k||(a=null);var h=!1;if(null===a)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return c=c(h=a),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",(function(a){return a}))):null!=c&&(O(c)&&(c=function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;if(h=0,d=""===d?".":d+":",I(a))for(var g=0;g<a.length;g++){var f=d+Q(k=a[g],g);h+=R(k,b,e,f,c)}else if(f=function A(a){return null===a||"object"!=typeof a?null:"function"==typeof(a=z&&a[z]||a["@@iterator"])?a:null}(a),"function"==typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)h+=R(k=k.value,b,e,f=d+Q(k,g++),c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function S(a,b,e){if(null==a)return a;var d=[],c=0;return R(a,d,"","",(function(a){return b.call(e,a,c++)})),d}function T(a){if(-1===a._status){var b=a._result;(b=b()).then((function(b){0!==a._status&&-1!==a._status||(a._status=1,a._result=b)}),(function(b){0!==a._status&&-1!==a._status||(a._status=2,a._result=b)})),-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result}var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,(function(){b.apply(this,arguments)}),e)},count:function(a){var b=0;return S(a,(function(){b++})),b},toArray:function(a){return S(a,(function(a){return a}))||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},exports.Component=E,exports.Fragment=p,exports.Profiler=r,exports.PureComponent=G,exports.StrictMode=q,exports.Suspense=w,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,exports.cloneElement=function(a,b,e){if(null==a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){if(void 0!==b.ref&&(k=b.ref,h=K.current),void 0!==b.key&&(c=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}},exports.createContext=function(a){return(a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:t,_context:a},a.Consumer=a},exports.createElement=M,exports.createFactory=function(a){var b=M.bind(null,a);return b.type=a,b},exports.createRef=function(){return{current:null}},exports.forwardRef=function(a){return{$$typeof:v,render:a}},exports.isValidElement=O,exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}},exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}},exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}},exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},exports.useCallback=function(a,b){return U.current.useCallback(a,b)},exports.useContext=function(a){return U.current.useContext(a)},exports.useDebugValue=function(){},exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)},exports.useEffect=function(a,b){return U.current.useEffect(a,b)},exports.useId=function(){return U.current.useId()},exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)},exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)},exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)},exports.useMemo=function(a,b){return U.current.useMemo(a,b)},exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)},exports.useRef=function(a){return U.current.useRef(a)},exports.useState=function(a){return U.current.useState(a)},exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)},exports.useTransition=function(){return U.current.useTransition()},exports.version="18.2.0"},"./node_modules/react/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react.production.min.js")},"./stories/02-molecules/cta-banner/cta-banner.twig":(module,__unused_webpack_exports,__webpack_require__)=>{var tpl=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"m-cta-banner"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"m-cta-banner--"},{type:"Twig.expression.type.variable",value:"layout",match:["layout"]},{type:"Twig.expression.type.filter",value:"clean_class",match:["|clean_class","clean_class"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"py-4"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}]}},{type:"raw",value:"<div"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.key.period",key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]}]}]},{type:"raw",value:'>\n  <div class="m-cta-banner__container tablet:flex tablet:gap-4">\n    <div class="m-cta-banner__content tablet:w-6/12 tablet:flex tablet:flex-col tablet:justify-between">\n      <h2 class="m-cta-banner__title">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"]}]},{type:"raw",value:'</h2>\n      <div class="m-cta-banner__description tablet:grow">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"description",match:["description"]}]},{type:"raw",value:'</div>\n      <div class="m-cta-banner__link">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]}]},{type:"raw",value:'</div>\n    </div>\n    <div class="m-cta-banner__media tablet:w-6/12">\n      '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"media",match:["media"]}]},{type:"raw",value:"\n    </div>\n  </div>\n</div>\n"}],id:"stories/02-molecules/cta-banner/cta-banner.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="stories/02-molecules/cta-banner/cta-banner.twig",module.exports.default=module.exports},"./stories/assets/images/content-card.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/content-card.53fe3bfd.jpg"}}]);