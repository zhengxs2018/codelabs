var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,a=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&c(e,t,r[t]);if(n)for(var t of n(r))i.call(r,t)&&c(e,t,r[t]);return e};function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduceRight((function(e,r){return r(e)}),e)}}function h(e){return function r(){for(var t=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,[].concat(o,n))}}}function b(e){return{}.toString.call(e).includes("Object")}function v(e){return"function"==typeof e}var m=h((function(e,r){throw new Error(e[r]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),P={changes:function(e,r){return b(r)||m("changeType"),Object.keys(r).some((function(r){return t=e,n=r,!Object.prototype.hasOwnProperty.call(t,n);var t,n}))&&m("changeField"),r},selector:function(e){v(e)||m("selectorType")},handler:function(e){v(e)||b(e)||m("handlerType"),b(e)&&Object.values(e).some((function(e){return!v(e)}))&&m("handlersType")},initial:function(e){var r;e||m("initialIsRequired"),b(e)||m("initialType"),r=e,Object.keys(r).length||m("initialContent")}};function w(e,r){return v(r)?r(e.current):r}function T(e,r){return e.current=y(y({},e.current),r),r}function O(e,r,t){return v(r)?r(e.current):Object.keys(t).forEach((function(t){var n;return null===(n=r[t])||void 0===n?void 0:n.call(r,e.current[t])})),t}var j={create:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};P.initial(e),P.handler(r);var t={current:e},n=h(O)(t,r),o=h(T)(t),i=h(P.changes)(e),c=h(w)(t);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return P.selector(e),e(t.current)}function s(e){g(n,o,i,c)(e)}return[a,s]}};var R,E={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},M=(R=function(e,r){throw new Error(e[r]||e.default)},function e(){for(var r=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.length>=R.length?R.apply(this,n):function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e.apply(r,[].concat(n,o))}})(E),S={config:function(e){var r;return e||M("configIsRequired"),r=e,{}.toString.call(r).includes("Object")||M("configType"),e.urls?(console.warn(E.deprecation),{paths:{vs:e.urls.monacoBase}}):e}};function k(e,r){return Object.keys(r).forEach((function(t){r[t]instanceof Object&&e[t]&&Object.assign(r[t],k(e[t],r[t]))})),l(l({},e),r)}var I={type:"cancelation",msg:"operation is manually canceled"};function C(e){var r=!1,t=new Promise((function(t,n){e.then((function(e){return r?n(I):t(e)})),e.catch(n)}));return t.cancel=function(){return r=!0},t}var V,A,N=j.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.25.2/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}),q=(A=2,function(e){if(Array.isArray(e))return e}(V=N)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}}(V,A)||function(e,r){if(e){if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,r):void 0}}(V,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),D=q[0],x=q[1];function L(e){return document.body.appendChild(e)}function _(e){var r,t,n=D((function(e){return{config:e.config,reject:e.reject}})),o=(r="".concat(n.config.paths.vs,"/loader.js"),t=document.createElement("script"),r&&(t.src=r),t);return o.onload=function(){return e()},o.onerror=n.reject,o}function B(){var e=D((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),r=window.require;r.config(e.config),r(["vs/editor/editor.main"],(function(r){z(r),e.resolve(r)}),(function(r){e.reject(r)}))}function z(e){D().monaco||x({monaco:e})}var $=new Promise((function(e,r){return x({resolve:e,reject:r})})),U={config:function(e){x((function(r){return{config:k(r.config,S.config(e))}}))},init:function(){if(!D((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return z(window.monaco),C(Promise.resolve(window.monaco));!function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduceRight((function(e,r){return r(e)}),e)}}(L,_)(B),x({isInitialized:!0})}return C($)},__getMonacoInstance:function(){return D((function(e){return e.monaco}))}};const F={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};function W({content:e}){return React.createElement("div",{style:F},e)}const Y={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function G({width:e,height:n,isEditorReady:o,loading:i,_ref:c,className:s,wrapperClassName:u}){return React.createElement("section",{style:(l=a({},Y.wrapper),p={width:e,height:n},r(l,t(p))),className:u},!o&&React.createElement(W,{content:i}),React.createElement("div",{ref:c,style:a(a({},Y.fullWidth),!o&&Y.hide),className:s}));var l,p}G.propTypes={width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,height:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,loading:PropTypes.oneOfType([PropTypes.element,PropTypes.string]).isRequired,isEditorReady:PropTypes.bool.isRequired,className:PropTypes.string,wrapperClassName:PropTypes.string};var H=React.memo(G);function J(e,r,t=!0){const n=React.useRef(!0);React.useEffect(n.current||!t?()=>{n.current=!1}:e,r)}function K(){}function Q(e,r,t,n){return function(e,r){return e.editor.getModel(X(e,r))}(e,n)||function(e,r,t,n){return e.editor.createModel(r,t,n&&X(e,n))}(e,r,t,n)}function X(e,r){return e.Uri.parse(r)}PropTypes.string,PropTypes.string,PropTypes.string,PropTypes.string,PropTypes.string,PropTypes.string,PropTypes.string,PropTypes.bool,PropTypes.bool,PropTypes.string,PropTypes.oneOfType([PropTypes.element,PropTypes.string]),PropTypes.object,PropTypes.oneOfType([PropTypes.number,PropTypes.string]),PropTypes.oneOfType([PropTypes.number,PropTypes.string]),PropTypes.string,PropTypes.string,PropTypes.func,PropTypes.func;const Z=new Map;function ee({defaultValue:e,defaultLanguage:r,defaultPath:t,value:n,language:o,path:i,theme:c,line:s,loading:u,options:l,overrideServices:p,saveViewState:f,keepCurrentModel:d,width:y,height:g,className:h,wrapperClassName:b,beforeMount:v,onMount:m,onChange:P,onValidate:w}){const[T,O]=React.useState(!1),[j,R]=React.useState(!0),E=React.useRef(null),M=React.useRef(null),S=React.useRef(null),k=React.useRef(m),I=React.useRef(v),C=React.useRef(null),V=React.useRef(n),A=function(e){const r=React.useRef();return React.useEffect((()=>{r.current=e}),[e]),r.current}(i);var N;N=()=>{const e=U.init();return e.then((e=>(E.current=e)&&R(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>{return M.current?(null===(r=C.current)||void 0===r||r.dispose(),d?f&&Z.set(i,M.current.saveViewState()):null===(t=M.current.getModel())||void 0===t||t.dispose(),void M.current.dispose()):e.cancel();var r,t}},React.useEffect(N,[]),J((()=>{const t=Q(E.current,e||n,r||o,i);t!==M.current.getModel()&&(f&&Z.set(A,M.current.saveViewState()),M.current.setModel(t),f&&M.current.restoreViewState(Z.get(i)))}),[i],T),J((()=>{M.current.updateOptions(l)}),[l],T),J((()=>{M.current.getOption(E.current.editor.EditorOption.readOnly)?M.current.setValue(n):n!==M.current.getValue()&&(M.current.executeEdits("",[{range:M.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),M.current.pushUndoStop())}),[n],T),J((()=>{E.current.editor.setModelLanguage(M.current.getModel(),o)}),[o],T),J((()=>{void 0!==s&&M.current.revealLine(s)}),[s],T),J((()=>{E.current.editor.setTheme(c)}),[c],T);const q=React.useCallback((()=>{I.current(E.current);const s=i||t,u=Q(E.current,n||e,r||o,s);M.current=E.current.editor.create(S.current,a({model:u,automaticLayout:!0},l),p),f&&M.current.restoreViewState(Z.get(s)),E.current.editor.setTheme(c),O(!0)}),[e,r,t,n,o,i,l,p,f,c]);return React.useEffect((()=>{T&&k.current(M.current,E.current)}),[T]),React.useEffect((()=>{!j&&!T&&q()}),[j,T,q]),V.current=n,React.useEffect((()=>{var e,r;T&&P&&(null===(e=C.current)||void 0===e||e.dispose(),C.current=null===(r=M.current)||void 0===r?void 0:r.onDidChangeModelContent((e=>{const r=M.current.getValue();V.current!==r&&P(r,e)})))}),[T,P]),React.useEffect((()=>{if(T){const e=E.current.editor.onDidChangeMarkers((e=>{var r;const t=null===(r=M.current.getModel())||void 0===r?void 0:r.uri;if(t){if(e.find((e=>e.path===t.path))){const e=E.current.editor.getModelMarkers({resource:t});null==w||w(e)}}}));return()=>{null==e||e.dispose()}}}),[T,w]),React.createElement(H,{width:y,height:g,isEditorReady:T,loading:u,_ref:S,className:h,wrapperClassName:b})}ee.propTypes={defaultValue:PropTypes.string,defaultPath:PropTypes.string,defaultLanguage:PropTypes.string,value:PropTypes.string,language:PropTypes.string,path:PropTypes.string,theme:PropTypes.string,line:PropTypes.number,loading:PropTypes.oneOfType([PropTypes.element,PropTypes.string]),options:PropTypes.object,overrideServices:PropTypes.object,saveViewState:PropTypes.bool,keepCurrentModel:PropTypes.bool,width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),className:PropTypes.string,wrapperClassName:PropTypes.string,beforeMount:PropTypes.func,onMount:PropTypes.func,onChange:PropTypes.func,onValidate:PropTypes.func},ee.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",beforeMount:K,onMount:K,onValidate:K};var re=React.memo(ee);const te=/^(@[^/]+\/[^/@]+)(?:\/([^@]+))?(?:@([\s\S]+))?/,ne=/^([^/@]+)(?:\/([^@]+))?(?:@([\s\S]+))?/;var oe=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");const r="@"===e.charAt(0)?e.match(te):e.match(ne);if(!r)throw new Error(`[parse-package-name] "${e}" is not a valid string`);return{name:r[1],path:r[2]||"",version:r[3]||""}},ie={};Object.defineProperty(ie,"__esModule",{value:!0});var ce=ie.declare=function(e){return(r,t,n)=>{var o;let i;for(const e of Object.keys(ae)){var c;r[e]||(i=null!=(c=i)?c:se(r),i[e]=ae[e](i))}return e(null!=(o=i)?o:r,t||{},n)}};const ae={assertVersion:e=>r=>{!function(e,r){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);let n;n="7."===r.slice(0,2)?new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${r}". You'll need to update your @babel/core version.`):new Error(`Requires Babel "${e}", but was loaded with "${r}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);"number"==typeof t&&(Error.stackTraceLimit=t);throw Object.assign(n,{code:"BABEL_VERSION_UNSUPPORTED",version:r,range:e})}(r,e.version)},targets:()=>()=>({}),assumption:()=>()=>{}};function se(e){let r=null;return"string"==typeof e.version&&/^7\./.test(e.version)&&(r=Object.getPrototypeOf(e),!r||ue(r,"version")&&ue(r,"transform")&&ue(r,"template")&&ue(r,"types")||(r=null)),Object.assign({},r,e)}function ue(e,r){return Object.prototype.hasOwnProperty.call(e,r)}export{ce as d,re as i,oe as p};
