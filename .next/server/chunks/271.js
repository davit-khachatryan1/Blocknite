exports.id=271,exports.ids=[271],exports.modules={8559:e=>{e.exports={altarin:"style_altarin__pgChe",name:"style_name__q7qdT",titleOrange:"style_titleOrange__xlSvi",titleWhite:"style_titleWhite__DDVM9",value:"style_value__8ArZM"}},6595:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>n});var r=l(997),a=l(6689),s=l(8559),i=l.n(s);let n=(0,a.memo)(({text:e,classname:t,delay:l=0,time:s=500})=>{let[n,_]=(0,a.useState)(""),u=s/e.length;return(0,a.useEffect)(()=>{let t=-1,r=null,a=setTimeout(()=>{r=setInterval(()=>{t++,_(l=>l+e.charAt(t)),t===e.length&&r&&clearInterval(r)},u)},l);return()=>{r&&clearInterval(r),clearTimeout(a)}},[e,u]),r.jsx("div",{className:i()[t],children:n})})}};