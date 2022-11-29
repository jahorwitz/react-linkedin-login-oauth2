import{useRef as e,useCallback as r,useEffect as n,useState as t}from"react";import{jsx as o}from"react/jsx-runtime";function i(t){var o=t.redirectUri,i=t.clientId,c=t.onSuccess,a=t.onError,s=t.scope,d=void 0===s?"r_emailaddress":s,l=t.state,u=void 0===l?"":l,w=t.closePopupMessage,p=void 0===w?"User closed the popup":w,g=e(null),v=e(null),f=r((function(e){var r=localStorage.getItem("linkedin_oauth2_state");if(e.origin===window.location.origin)if(e.data.errorMessage&&"Linked In"===e.data.from){if(e.data.state!==r)return void(g.current&&g.current.close());a&&a(e.data),g.current&&g.current.close()}else if(e.data.code&&"Linked In"===e.data.from){if(e.data.state!==r)return void(g.current&&g.current.close());c&&c(e.data.code),g.current&&g.current.close()}}),[a,c]);n((function(){return function(){window.removeEventListener("message",f,!1),g.current&&(g.current.close(),g.current=null),v.current&&(window.clearInterval(v.current),v.current=null)}}),[f]),n((function(){return window.addEventListener("message",f,!1),function(){window.removeEventListener("message",f,!1)}}),[f]);var h=function(){var e="&scope="+encodeURI(d),r=u||function(e){void 0===e&&(e=20);for(var r="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=n.length,o=0;o<e;o++)r+=n.charAt(Math.floor(Math.random()*t));return r}();return localStorage.setItem("linkedin_oauth2_state",r),"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+i+"&redirect_uri="+o+e+"&state="+r};return{linkedInLogin:function(){var e;null===(e=g.current)||void 0===e||e.close(),g.current=window.open(h(),"_blank",function(e){var r=e.width,n=void 0===r?600:r,t=e.height,o=void 0===t?600:t;return"left="+(screen.width/2-n/2)+",top="+(screen.height/2-o/2)+",width="+n+",height="+o}({width:600,height:600})),v.current&&(window.clearInterval(v.current),v.current=null),v.current=window.setInterval((function(){try{g.current&&g.current.closed&&(window.clearInterval(v.current),v.current=null,a&&a({error:"user_closed_popup",errorMessage:p}))}catch(e){window.clearInterval(v.current),v.current=null}}),1e3)}}}function c(e){return(0,e.children)({linkedInLogin:i({redirectUri:e.redirectUri,clientId:e.clientId,onSuccess:e.onSuccess,onError:e.onError,state:e.state,scope:e.scope,closePopupMessage:e.closePopupMessage}).linkedInLogin})}function a(){var e=t(""),r=e[0],i=e[1];return n((function(){var e=function(e){for(var r=e.substring(1).split("&"),n={},t=0;t<r.length;t++){var o=r[t].split("=");o.length>1&&(n[decodeURIComponent(o[0])]=decodeURIComponent(o[1]))}return n}(window.location.hash.split("/linkedin?")[1]);if(e.state!==localStorage.getItem("linkedin_oauth2_state"))i("State does not match");else if(e.error){var r=e.error_description||"Login failed. Please try again.";window.opener&&window.opener.postMessage({error:e.error,state:e.state,errorMessage:r,from:"Linked In"},window.location.origin),"user_cancelled_login"===e.error&&window.close()}e.code&&window.opener&&window.opener.postMessage({code:e.code,state:e.state,from:"Linked In"},window.location.origin)}),[]),o("div",{children:r},void 0)}export{c as LinkedIn,a as LinkedInCallback,i as useLinkedIn};
//# sourceMappingURL=index.esm.js.map