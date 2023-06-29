/*! For license information please see 02-molecules-menus-menu-main-stories.70c02ab3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdhsc_theme=self.webpackChunkdhsc_theme||[]).push([[4324,6095,9369,4769],{"./.storybook/drupalAttributes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var drupal_attribute__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/drupal-attribute/src/index.js"),drupal_attribute__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(drupal_attribute__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=class DrupalAttribute{constructor(){this.drupalAttribute=new(drupal_attribute__WEBPACK_IMPORTED_MODULE_0___default())}addClass(stringOrMap){let stringOrArray;return stringOrArray=stringOrMap instanceof Map?Array.from(stringOrMap.values()):stringOrMap,this.drupalAttribute.addClass(stringOrArray),this}hasClass(value){return this.drupalAttribute.hasClass(value)}removeAttribute(key){return this.drupalAttribute.removeAttribute(key),this}removeClass(value){return this.drupalAttribute.removeClass(value),this}setAttribute(key,value){return this.drupalAttribute.setAttribute(key,value),this}toString(){return this.drupalAttribute.toString()}}},"./stories/01-atoms/svg/svg.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>svg_stories,svgIcon:()=>svgIcon});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./.storybook/drupalAttributes.js");var svg=__webpack_require__("./stories/01-atoms/svg/svg.twig"),svg_default=__webpack_require__.n(svg);const sprite_namespaceObject=__webpack_require__.p+"static/media/sprite.555c8f15.svg",svg_stories={title:"Design System/Atoms/Svg Icons"},svgIcon=(({sprite,icon})=>svg_default()({sprite,icon})).bind({});svgIcon.args={sprite:sprite_namespaceObject,icon:"chevron-right"},svgIcon.parameters={...svgIcon.parameters,docs:{...svgIcon.parameters?.docs,source:{originalSource:"({\n  sprite,\n  icon\n}) => svg({\n  sprite,\n  icon\n})",...svgIcon.parameters?.docs?.source}}};const __namedExportsOrder=["svgIcon"]},"./stories/02-molecules/menus/menu-main.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MainMenu:()=>MainMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>menu_main_stories});__webpack_require__("./node_modules/react/index.js");var drupalAttributes=__webpack_require__("./.storybook/drupalAttributes.js"),menu_main=__webpack_require__("./stories/02-molecules/menus/menu-main.twig"),menu_main_default=__webpack_require__.n(menu_main),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),menus_menu_main=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[4]!./stories/02-molecules/menus/menu-main.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(menus_menu_main.Z,options);menus_menu_main.Z&&menus_menu_main.Z.locals&&menus_menu_main.Z.locals;var svg_stories=__webpack_require__("./stories/01-atoms/svg/svg.stories.js"),svg=__webpack_require__("./stories/01-atoms/svg/svg.twig"),svg_default=__webpack_require__.n(svg);const menu_main_stories={title:"Design System/Molecules/Main Menu"},MainMenu=(({items,attributes,svgIconUp,svgIconDown})=>menu_main_default()({items,attributes,svgIconUp,svgIconDown})).bind({});MainMenu.args={attributes:new drupalAttributes.Z,items:[{title:"Item 1",url:"#"},{title:"Item 2",url:"#",below:[{title:"subitem 1",url:"#"},{title:"subitem 2",url:"#"}]},{title:"Item 3",url:"#",below:[{title:"subitem A",url:"#"},{title:"subitem B",url:"#"}]}],svgIconUp:args=>svg_default()({...svg_stories.svgIcon.args,icon:"chevron-up"}),svgIconDown:args=>svg_default()({...svg_stories.svgIcon.args,icon:"chevron-down"})},MainMenu.parameters={...MainMenu.parameters,docs:{...MainMenu.parameters?.docs,source:{originalSource:"({\n  items,\n  attributes,\n  svgIconUp,\n  svgIconDown\n}) => menuTwig({\n  items,\n  attributes,\n  svgIconUp,\n  svgIconDown\n})",...MainMenu.parameters?.docs?.source}}};const __namedExportsOrder=["MainMenu"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[4]!./stories/02-molecules/menus/menu-main.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".m-menu--main .m-menu--level-0 li svg {\n    height: 0.625rem;\n    width: 0.625rem\n}","",{version:3,sources:["webpack://./stories/02-molecules/menus/menu-main.scss"],names:[],mappings:"AAEI;IAAA,gBAAA;IAAA;AAAA",sourcesContent:[".m-menu--main {\n  .m-menu--level-0 li svg {\n    @apply h-2 w-2;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/drupal-attribute/src/index.js":module=>{class DrupalAttribute extends Map{constructor(it){super(it)}addClass(args){let self=this,values=[];for(let i=0;i<arguments.length;i++)values.push(arguments[i]);return values.forEach((function(value){Array.isArray(value)||(value=[value]),self.has("class")||self.setAttribute("class",[]);let classes=self.get("class");value.forEach((function(d){classes.indexOf(d)<0&&classes.push(d)}))})),this}removeClass(value){let classes=[];return this.has("class")&&(classes=this.get("class")),Array.isArray(value)||(value=[value]),value.forEach((function(v){let index=classes.indexOf(v);index>-1&&classes.splice(index,1)})),this}hasClass(value){let classes=[];return this.has("class")&&(classes=this.get("class")),classes.indexOf(value)>-1}setAttribute(key,value){return this.set(key,value),this}removeAttribute(key){return this.delete(key),this}toString(){let result="",components=[];this.forEach((function(value,key){Array.isArray(value)&&(value=value.join(" ")),components.push([key,'"'+value+'"'].join("="))}));let rendered=components.join(" ");return rendered&&(result+=" "+rendered),result}}module.exports=DrupalAttribute},"./node_modules/react/cjs/react.production.min.js":(__unused_webpack_module,exports)=>{"use strict";var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}function F(){}function G(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}E.prototype.isReactComponent={},E.prototype.setState=function(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")},E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},F.prototype=E.prototype;var H=G.prototype=new F;H.constructor=G,C(H,E.prototype),H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}function O(a){return"object"==typeof a&&null!==a&&a.$$typeof===l}var P=/\/+/g;function Q(a,b){return"object"==typeof a&&null!==a&&null!=a.key?function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,(function(a){return b[a]}))}(""+a.key):b.toString(36)}function R(a,b,e,d,c){var k=typeof a;"undefined"!==k&&"boolean"!==k||(a=null);var h=!1;if(null===a)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return c=c(h=a),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",(function(a){return a}))):null!=c&&(O(c)&&(c=function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;if(h=0,d=""===d?".":d+":",I(a))for(var g=0;g<a.length;g++){var f=d+Q(k=a[g],g);h+=R(k,b,e,f,c)}else if(f=function A(a){return null===a||"object"!=typeof a?null:"function"==typeof(a=z&&a[z]||a["@@iterator"])?a:null}(a),"function"==typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)h+=R(k=k.value,b,e,f=d+Q(k,g++),c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function S(a,b,e){if(null==a)return a;var d=[],c=0;return R(a,d,"","",(function(a){return b.call(e,a,c++)})),d}function T(a){if(-1===a._status){var b=a._result;(b=b()).then((function(b){0!==a._status&&-1!==a._status||(a._status=1,a._result=b)}),(function(b){0!==a._status&&-1!==a._status||(a._status=2,a._result=b)})),-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result}var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,(function(){b.apply(this,arguments)}),e)},count:function(a){var b=0;return S(a,(function(){b++})),b},toArray:function(a){return S(a,(function(a){return a}))||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},exports.Component=E,exports.Fragment=p,exports.Profiler=r,exports.PureComponent=G,exports.StrictMode=q,exports.Suspense=w,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,exports.cloneElement=function(a,b,e){if(null==a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){if(void 0!==b.ref&&(k=b.ref,h=K.current),void 0!==b.key&&(c=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}},exports.createContext=function(a){return(a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:t,_context:a},a.Consumer=a},exports.createElement=M,exports.createFactory=function(a){var b=M.bind(null,a);return b.type=a,b},exports.createRef=function(){return{current:null}},exports.forwardRef=function(a){return{$$typeof:v,render:a}},exports.isValidElement=O,exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}},exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}},exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}},exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},exports.useCallback=function(a,b){return U.current.useCallback(a,b)},exports.useContext=function(a){return U.current.useContext(a)},exports.useDebugValue=function(){},exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)},exports.useEffect=function(a,b){return U.current.useEffect(a,b)},exports.useId=function(){return U.current.useId()},exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)},exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)},exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)},exports.useMemo=function(a,b){return U.current.useMemo(a,b)},exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)},exports.useRef=function(a){return U.current.useRef(a)},exports.useState=function(a){return U.current.useState(a)},exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)},exports.useTransition=function(){return U.current.useTransition()},exports.version="18.2.0"},"./node_modules/react/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react.production.min.js")},"./stories/01-atoms/svg/svg.twig":(module,__unused_webpack_exports,__webpack_require__)=>{var tpl=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<svg class="icon icon--'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]}]},{type:"raw",value:'">\n  <use href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"sprite",match:["sprite"]}]},{type:"raw",value:"#"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]}]},{type:"raw",value:'"></use>\n</svg>\n'}],id:"stories/01-atoms/svg/svg.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="stories/01-atoms/svg/svg.twig",module.exports.default=module.exports},"./stories/02-molecules/menus/menu-main.twig":(module,__unused_webpack_exports,__webpack_require__)=>{var tpl=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"m-menu m-menu--main"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"text-black"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"sort",match:["| sort","sort"]},{type:"Twig.expression.type.filter",value:"join",match:["| join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["| trim","trim"]}]}},{type:"raw",value:"\n"},{type:"raw",value:"\n<nav"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.key.period",key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]}]}]},{type:"raw",value:'>\n  <div class="m-menu__container w-full">\n    <ul class="m-menu--level-0 relative tablet:flex" x-data="{ isSelected: false }" @activedropdownmain.window="isSelected = $event.detail.active">\n      '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"items",match:["items"]}],output:[{type:"raw",value:'        <li class="tablet:mr-8 flex items-center" x-data="">\n          '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"below"}],output:[{type:"raw",value:'            <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'" class="block underline hover:no-underline mr-2">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"title"}]},{type:"raw",value:'</a>\n            <a href="#"\n               x-show="isSelected == false || isSelected != '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index"}]},{type:"raw",value:"\"\n               @click.prevent=\"$dispatch('activedropdownmain', { active: "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index"}]},{type:"raw",value:" }); $dispatch('closesearchtrigger')\"\n               @keydown.enter=\"$dispatch('activedropdownmain', { active: "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index"}]},{type:"raw",value:" }); $dispatch('closesearchtrigger')\"\n            >"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"svgIconDown",match:["svgIconDown"]}]},{type:"raw",value:'</a>\n            <a href="#"\n               x-show="isSelected == '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index"}]},{type:"raw",value:'"\n               @click.prevent="$dispatch(\'activedropdownmain\', { active: false })"\n               @keydown.enter="$dispatch(\'activedropdownmain\', { active: false })"\n            >'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"svgIconUp",match:["svgIconUp"]}]},{type:"raw",value:"</a>\n          "}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:'            <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'"\n               class="block mr-2 underline hover:no-underline"\n               @click="$dispatch(\'activedropdownmain\', { active: '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index"}]},{type:"raw",value:" })\"\n               @keydown.enter=\"$dispatch('activedropdownmain', { active: "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index"}]},{type:"raw",value:' })"\n            >\n              '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"title"}]},{type:"raw",value:"\n            </a>\n          "}]}},{type:"raw",value:"        </li>\n      "}]}},{type:"raw",value:'    </ul>\n    <div x-data="{ isActive: false }">\n      '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"items",match:["items"]}],output:[{type:"raw",value:'        <div x-show="isActive == '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index"}]},{type:"raw",value:'" class="relative mt-4 -mb-4 w-[100vw] left-[50%] -translate-x-[50%] bg-white">\n          <div class="container mx-auto">\n            <ul class="m-menu--level-1 flex flex-col py-4 -mb-4"\n                @activedropdownmain.window="isActive = $event.detail.active"\n            >\n              '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"subItem",expression:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"below"}],output:[{type:"raw",value:'                <li class="tablet:mr-8 flex items-center">\n                  <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"subItem",match:["subItem"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'" class="block underline hover:no-underline mb-2">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"subItem",match:["subItem"]},{type:"Twig.expression.type.key.period",key:"title"}]},{type:"raw",value:"</a>\n                </li>\n              "}]}},{type:"raw",value:"            </ul>\n          </div>\n        </div>\n      "}]}},{type:"raw",value:"    </div>\n  </div>\n</nav>\n"}],id:"stories/02-molecules/menus/menu-main.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="stories/02-molecules/menus/menu-main.twig",module.exports.default=module.exports}}]);