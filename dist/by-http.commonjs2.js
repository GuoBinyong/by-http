module.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=require("done-count")},function(e,n){e.exports=require("axios")},function(e,n,t){"use strict";t.r(n),t.d(n,"ByHttp",(function(){return h}));var o=t(1),a=t.n(o),r=t(0);t(3);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=["urlAsDoneCountName","conflictPolicy","autoIncrTotalIfRepeat","autoDeleteTarget","autoDeleteMode","clearDelay"],h=function(){function e(n){var t=n.reqTransforms,o=n.publicData,r=n.resTransforms,i=n.mainData,s=n.mainDataGet,l=n.validateHttpStatus,c=n.validateDataStatus,h=n.successPrompt,f=n.failPrompt,p=n.promptHandle,D=n.showLoading,y=void 0===D||D,m=n.loadingDelay,v=void 0===m?0:m,C=n.loadText,b=n.startLoadingHandle,A=n.endLoadingHandle,q=n.dependent,O=n.dependentPro,S=n.dependResultHandle,w=n.addInfoInRes,M=n.doneAgain,_=n.loadingDoneAgain,k=n.requestDoneAgain,P=n.startRequestHandle,T=n.endRequestHandle,H=n.header,j=d(n,["reqTransforms","publicData","resTransforms","mainData","mainDataGet","validateHttpStatus","validateDataStatus","successPrompt","failPrompt","promptHandle","showLoading","loadingDelay","loadText","startLoadingHandle","endLoadingHandle","dependent","dependentPro","dependResultHandle","addInfoInRes","doneAgain","loadingDoneAgain","requestDoneAgain","startRequestHandle","endRequestHandle","header"]);!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"loadingShowCount",0),g(this,"propFormats",[{caseType:"N"},{caseType:"L"},{caseType:"U"},{separator:"-",caseType:"L"},{separator:"-",caseType:"U"},{separator:"-",caseType:"N"}]),g(this,"haveHttpBodyMethods",["post"]);var L=u({headers:H},j);l&&(L.validateStatus=l);var x=L.findValueForKeyFormats("responseType",this.propFormats);x&&(L.responsetype=x),this.axios=a.a.create(L),this.publicData=o,this.reqTransforms=t,this.resTransforms=r,this.mainDataGet=s,this.successPrompt=h,this.failPrompt=f,this.mainData=i,this.showLoading=y,this.loadingDelay=v,this.loadText=C,this.startLoadingHandle=b,this.endLoadingHandle=A,this.promptHandle=p,this.startRequestHandle=P,this.endRequestHandle=T,this.dependent=q,this.dependentPro=O,this.dependResultHandle=S,this.validateDataStatus=c,this.addInfoInRes=w,this.loadingDoneAgain=_||M,this.requestDoneAgain=k||M}var n,t,o;return n=e,o=[{key:"incrLoadingShowCount",value:function(e){return e=null==e?1:e,this.loadingShowCount+=e}},{key:"decrLoadingShowCount",value:function(e){return e=null==e?1:e,this.loadingShowCount-=e}},{key:"doneAgain",set:function(e){this.loadingDoneAgain=e,this.requestDoneAgain=e}},{key:"loadingDoneCountManager",get:function(){if(!this._loadingDoneCountManager){var e=new r.NamedDoneCountManager;e.urlAsDoneCountName=!0,this._loadingDoneCountManager=e}return this._loadingDoneCountManager}},{key:"loadingDoneAgain",get:function(){return Object.defineProxyProperties({},this.loadingDoneCountManager,c)},set:function(e){e&&Object.assign(this.loadingDoneCountManager,e)}},{key:"requestDoneCountManager",get:function(){if(!this._requestDoneCountManager){var e=new r.NamedDoneCountManager;e.urlAsDoneCountName=!0,this._requestDoneCountManager=e}return this._requestDoneCountManager}},{key:"requestDoneAgain",get:function(){return Object.defineProxyProperties({},this.requestDoneCountManager,c)},set:function(e){e&&Object.assign(this.requestDoneCountManager,e)}}],(t=[{key:"incrLoadingShowCount",value:function(e){return e=null==e?1:e,this.constructor.incrLoadingShowCount(e),this.loadingShowCount+=e}},{key:"decrLoadingShowCount",value:function(e){return e=null==e?1:e,this.constructor.decrLoadingShowCount(e),this.loadingShowCount-=e}},{key:"unsafeDoneAgain_Loading",value:function(e){if(null!=(e&&e.key))return e.global?this.constructor.loadingDoneCountManager.unsafeDoneAgain(e):this.loadingDoneCountManager.unsafeDoneAgain(e)}},{key:"doneAgain_Loading",value:function(e){if(null!=(e&&e.key))return e.global?this.constructor.loadingDoneCountManager.doneAgain(e):this.loadingDoneCountManager.doneAgain(e)}},{key:"registerDoneCount_Loading",value:function(e){if(null!=(e&&e.key))return e.global?this.constructor.loadingDoneCountManager.register(e):this.loadingDoneCountManager.register(e)}},{key:"unsafeDoneAgain_Request",value:function(e){if(null!=(e&&e.key))return e.global?this.constructor.requestDoneCountManager.unsafeDoneAgain(e):this.requestDoneCountManager.unsafeDoneAgain(e)}},{key:"doneAgain_Request",value:function(e){if(null!=(e&&e.key))return e.global?this.constructor.requestDoneCountManager.doneAgain(e):this.requestDoneCountManager.doneAgain(e)}},{key:"registerDoneCount_Request",value:function(e){if(null!=(e&&e.key))return e.global?this.constructor.requestDoneCountManager.register(e):this.requestDoneCountManager.register(e)}},{key:"setHeaders",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",o=this.axios.defaults.headers;Array.isArray(t)||(t=[t]),t.forEach((function(t){t=t.toLowerCase();var a=o[t];a||(a={}),a[e]=n,o[t]=a})),this.axios.defaults.headers=o}},{key:"getHeaders",value:function(e){var n=this.axios.defaults.headers,t=n.common;if(e)var o=n[e=e.toLowerCase()];if(t||o)var a=u({},t,{},o);return a}},{key:"addPublicData",value:function(e){var n=this.publicData;if("function"==typeof n&&(n=this.publicData(e)),!n)return e;n=Object.assign({},n);var t=e.params,o=e.data,a=e.method,r=void 0===a?this.method:a;return t&&(t=u({},n,{},t)),"object"==i(o)&&("Object"==o.constructor.name?o=u({},n,{},o):o instanceof FormData&&Object.keys(n).forEach((function(e){o.set(e,n[e])}))),t||o||(r&&this.haveHttpBodyMethods.includes(r.toLowerCase())?o=n:t=n),t&&(e.params=t),o&&(e.data=o),e}},{key:"_mergeDoneAgainOptions",value:function(e){var n={},t=e.doneAgain,o=e.urlPath,a=e.loadingDoneAgain,r=void 0===a?t:a,i=e.requestDoneAgain,s=void 0===i?t:i;return r&&(n.loadingDoneAgain=this._perfectDoneAgainOptions(r,o,!0)),s&&(n.requestDoneAgain=this._perfectDoneAgainOptions(s,o)),n}},{key:"_perfectDoneAgainOptions",value:function(e,n,t){if("object"==i(e))var o=e.failDoneAgain,a=d(e,["failDoneAgain"]);else a={key:e};var r=a,s=r.namesOrNum,u=r.names,l=r.doneNum,g=r.urlAsDoneCountName,c=d(r,["namesOrNum","names","doneNum","urlAsDoneCountName"]);if(g||(g=(a.global?t?this.constructor.loadingDoneAgain:this.constructor.requestDoneAgain:t?this.loadingDoneAgain:this.requestDoneAgain).urlAsDoneCountName),g&&null==(s||u||l)&&(a.names=n),o){var h=i(o);"number"==h?o={doneNum:o}:("string"==h||Array.isArray(o))&&(o={names:o}),o=Object.assign({},c,o),a.failDoneAgain=o}return a}},{key:"request",value:function(e){var n=this,t=e.dependent,o=void 0===t?this.dependent:t,a=e.dependResultHandle,r=void 0===a?this.dependResultHandle:a;return o?this.dependentPro.then((function(t){var o=r&&r.call(n,t,e);return 0==o?Promise.reject("请求被依赖阻止！"):(o=o||e,n._request(o))})):this._request(e)}},{key:"_request",value:function(e){var n=this,t=this.addPublicData(e),o=e=this.reqTransforms.reduce((function(e,t){return t.call(n,e)}),t),a=o.urlPath,r=o.validateHttpStatus,i=o.validateDataStatus,s=void 0===i?this.validateDataStatus:i,l=o.successPrompt,g=void 0===l?this.successPrompt:l,c=o.failPrompt,h=void 0===c?this.failPrompt:c,f=o.mainData,p=void 0===f?this.mainData:f,D=o.showLoading,y=void 0===D?this.showLoading:D,m=o.loadingDelay,v=void 0===m?this.loadingDelay:m,C=o.loadText,b=void 0===C?this.loadText:C,A=(o.dependent,o.dependResultHandle,o.doneAgain),q=o.loadingDoneAgain,O=o.requestDoneAgain,S=o.addInfoInRes,w=void 0===S?this.addInfoInRes:S,M=d(o,["urlPath","validateHttpStatus","validateDataStatus","successPrompt","failPrompt","mainData","showLoading","loadingDelay","loadText","dependent","dependResultHandle","doneAgain","loadingDoneAgain","requestDoneAgain","addInfoInRes"]),_=this._mergeDoneAgainOptions({urlPath:a,doneAgain:A,loadingDoneAgain:q,requestDoneAgain:O});q=_.loadingDoneAgain,O=_.requestDoneAgain;var k=this.registerDoneCount_Loading(q),P=q&&q.global?this.constructor.loadingDoneCountManager:this.loadingDoneCountManager,T=this.registerDoneCount_Request(O),H=O&&O.global?this.constructor.requestDoneCountManager:this.requestDoneCountManager,j=u({url:a},M),L=e.findValueOfKeys(["header","headers"]);L&&(j.headers=L);var x=e.findValueForKeyFormats("responseType",this.propFormats);if(x&&(j.responsetype=x),r){var R=r;Array.isArray(r)?R=function(e){return r.some((function(n){return n==e||Number(n)==Number(e)||String(n)==String(e)}))}:"function"!=typeof r&&(R=function(e){return r==e||Number(r)==Number(e)||String(r)==String(e)}),j.validateStatus=R}if(y&&this.startLoadingHandle){var N=!1,I=function(){N=!0;var t=n.startLoadingHandle.call(n,b,e,{showCount:n.loadingShowCount,globalShowCount:n.constructor.loadingShowCount,doneCount:k,doneCountManager:P,http:n});n.incrLoadingShowCount(t)};if(v>0)var F=setTimeout(I,v);else I()}this.startRequestHandle&&this.startRequestHandle(e,{loadText:b,showCount:this.loadingShowCount,globalShowCount:this.constructor.loadingShowCount,loadingDoneAgain:q,loadingDoneCount:k,loadingDoneCountManager:P,requestDoneAgain:O,requestDoneCount:T,requestDoneCountManager:H,http:this});var G=function(t,o){if(k=n.unsafeDoneAgain_Loading(q),T=n.unsafeDoneAgain_Request(O),!t){var a=q&&q.failDoneAgain;if(a)var r=n.doneAgain_Loading(a);var i=O&&O.failDoneAgain;if(i)var s=n.doneAgain_Loading(i)}if(y&&(F&&clearTimeout(F),N&&n.endLoadingHandle)){var u=n.endLoadingHandle.call(n,t,e,o,{showCount:n.loadingShowCount,globalShowCount:n.constructor.loadingShowCount,doneCount:k,doneCountOnFail:r,doneCountManager:P,http:n});n.decrLoadingShowCount(u)}n.endRequestHandle&&n.endRequestHandle(t,e,o,{loadText:b,showCount:n.loadingShowCount,globalShowCount:n.constructor.loadingShowCount,loadingDoneAgain:q,loadingDoneCount:k,loadingDoneCountOnFail:r,loadingDoneCountManager:P,requestDoneAgain:O,requestDoneCount:T,requestDoneCountOnFail:s,requestDoneCountManager:H,http:n})},E=this.axios.request(j);return E=E.then((function(t){var o=(t=n.resTransforms.reduce((function(t,o){return o.call(n,t,e)}),t)).data;if(s&&!s.call(n,o,e))throw o;return g&&n.promptHandle&&n.promptHandle(o,!0),p&&(o=n.mainDataGet(o)),G(!0,o),w&&(o=[o,{doneCount:T,doneCountManager:H,http:n}]),o})).catch((function(e){h&&n.promptHandle&&n.promptHandle(e,!1);var t=e.response||e;throw G(!1,t),w&&(t=[t,{doneCount:T,doneCountManager:H,http:n}]),t}))}},{key:"get",value:function(e){return e.method="get",this.request(e)}},{key:"post",value:function(e){var n=e.contentType,t=d(e,["contentType"]);return n&&(t.headers=u({},t.headers,{"Content-Type":n})),t.method="post",this.request(t)}},{key:"put",value:function(e){var n=e.contentType,t=d(e,["contentType"]);return n&&(t.headers=u({},t.headers,{"Content-Type":n})),t.method="put",this.request(t)}},{key:"patch",value:function(e){var n=e.contentType,t=d(e,["contentType"]);return n&&(t.headers=u({},t.headers,{"Content-Type":n})),t.method="patch",this.request(t)}},{key:"delete",value:function(e){return e.method="delete",this.request(e)}},{key:"head",value:function(e){return e.method="head",this.request(e)}},{key:"options",value:function(e){return e.method="head",this.request(e)}},{key:"doneAgain",set:function(e){this.loadingDoneAgain=e,this.requestDoneAgain=e}},{key:"loadingDoneCountManager",get:function(){if(!this._loadingDoneCountManager){var e=new r.NamedDoneCountManager;e.urlAsDoneCountName=!0,this._loadingDoneCountManager=e}return this._loadingDoneCountManager}},{key:"loadingDoneAgain",get:function(){return Object.defineProxyProperties({},this.loadingDoneCountManager,c)},set:function(e){e&&Object.assign(this.loadingDoneCountManager,e)}},{key:"requestDoneCountManager",get:function(){if(!this._requestDoneCountManager){var e=new r.NamedDoneCountManager;e.urlAsDoneCountName=!0,this._requestDoneCountManager=e}return this._requestDoneCountManager}},{key:"requestDoneAgain",get:function(){return Object.defineProxyProperties({},this.requestDoneCountManager,c)},set:function(e){e&&Object.assign(this.requestDoneCountManager,e)}},{key:"reqTransforms",set:function(e){e&&!Array.isArray(e)&&(e=[e]),this._reqTransforms=e},get:function(){return this._reqTransforms||(this._reqTransforms=[]),this._reqTransforms}},{key:"resTransforms",set:function(e){e&&!Array.isArray(e)&&(e=[e]),this._resTransforms=e},get:function(){return this._resTransforms||(this._resTransforms=[]),this._resTransforms}},{key:"validateHttpStatus",set:function(e){var n=e;Array.isArray(e)?n=function(n){return e.includes(n)}:"function"!=typeof e&&(n=function(n){return e==n}),this.axios.defaults.validateStatus=n},get:function(){return this.axios.defaults.validateStatus}},{key:"dependentPro",set:function(e){this._dependentResolve&&this._dependentResolve(e),this._dependentPro=e},get:function(){var e=this;return this._dependentPro||(this._dependentPro=new Promise((function(n,t){e._dependentResolve=n}))),this._dependentPro}},{key:"headers",set:function(e){var n=this;e&&Object.keys(e).forEach((function(t){Object.assign(n.axios.defaults.headers[t],e[t])}))},get:function(){return this.axios.defaults.headers}},{key:"mainDataGet",set:function(e){this._mainDataGet=e},get:function(){return this._mainDataGet||(this._mainDataGet=function(e){return e}),this._mainDataGet}},{key:"baseURL",set:function(e){this.axios.defaults.baseURL=e},get:function(){return this.axios.defaults.baseURL}},{key:"method",set:function(e){this.axios.defaults.method=e},get:function(){return this.axios.defaults.method}},{key:"authorization",set:function(e){e&&("object"==i(e)&&(e=JSON.stringify(e)),this.setHeaders("Authorization",e))}},{key:"contentType",set:function(e){e&&this.setHeaders("Content-Type",e,"post")}}])&&l(n.prototype,t),o&&l(n,o),e}();g(h,"loadingShowCount",0),n.default=h},function(e,n){e.exports=require("es-expand")}]).default;
//# sourceMappingURL=by-http.commonjs2.js.map