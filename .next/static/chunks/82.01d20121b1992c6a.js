(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{6082:function(e,t,i){"use strict";i.r(t);var n=i(5893),r=i(2233),a=i(7687),l=i(245),s=i.n(l),o=i(7294),c=i(8357),d=i(6830),u=i(3271),h=i(2884),v=i(5152);let f=i.n(v)()(()=>Promise.all([i.e(828),i.e(271)]).then(i.bind(i,167)),{loadableGenerated:{webpack:()=>[167]}});function _(e,t,i,n){let r=(n-90)*Math.PI/180;return{x:e+i*Math.cos(r),y:t+i*Math.sin(r)}}t.default=(0,o.memo)(()=>{let{scrolling:e}=(0,u.C)(),{windowWidth:t}=(0,h.Z)(),i=(0,d.GX)(108,t,28.4),l=(0,d.GX)(240,t,80.6),v=(0,o.useRef)(null),[m,p]=(0,c.YD)({triggerOnce:!1,threshold:1}),[y,g]=(0,c.YD)({triggerOnce:!1,threshold:1}),[b,j]=(0,c.YD)({triggerOnce:!1,threshold:1}),[x,w]=(0,c.YD)({triggerOnce:!1,threshold:1}),[E,k]=(0,c.YD)({triggerOnce:!1}),O=(0,r._)();(0,o.useEffect)(()=>{!e&&k&&O.start("visible")},[k,e]);let G=(0,r._)(),V=(0,r._)(),B=(0,r._)(),N=(0,r._)(),C=(0,r._)(),[X,S,R,A]=[(0,r._)(),(0,r._)(),(0,r._)(),(0,r._)()],[M,W,Y,I]=[(0,r._)(),(0,r._)(),(0,r._)(),(0,r._)()],[L,T,D,P]=[(0,r._)(),(0,r._)(),(0,r._)(),(0,r._)()],[F,z,q,J]=[(0,r._)(),(0,r._)(),(0,r._)(),(0,r._)()],[$,H]=(0,o.useState)({first:{percent:X,title:S,line:R,dot:A,isValue:!1},second:{percent:M,title:W,line:Y,dot:I,isValue:!1},third:{percent:L,title:T,line:D,dot:P,isValue:!1},fourth:{percent:F,title:z,line:q,dot:J,isValue:!1}}),K=(e,t)=>{e.animate.start({pathLength:1,transition:{duration:1.5}}),t.percent.start("visible"),t.title.start("visible"),t.line.start("visible"),t.dot.start("visible")},U={Orange:{color:"#C3A46550",rotation:-50,degrees:270,percent:"80%",lineWidth:(0,d.GX)(800,t),title:"Ecosystem",value:"2 000 000 000",animate:G,ref:m},Green:{color:"#BF777B50",rotation:221.5,degrees:5,percent:"10%",lineWidth:(0,d.GX)(650,t),title:"Presale",value:"250 000 000",animate:N,ref:x},Yellow:{color:"#E3E1D950",rotation:228,degrees:38.5,percent:"9%",lineWidth:(0,d.GX)(650,t),title:"Liquidity",value:"225 000 000",animate:B,ref:b},Red:{color:"#A2B79550",rotation:268,degrees:40.5,percent:"1%",lineWidth:(0,d.GX)(690,t),title:"Airdrop",value:"25 000 000",animate:V,ref:y}};return(0,o.useEffect)(()=>{let t={...$};e||(p&&(K(U.Orange,$.first),t.first.isValue=!0),g&&(K(U.Green,$.fourth),t.fourth.isValue=!0),j&&(K(U.Yellow,$.third),t.third.isValue=!0),w&&(K(U.Red,$.second),t.second.isValue=!0,C.start("visible")),H(t))},[p,g,j,w,e]),(0,n.jsxs)("div",{className:s().container,ref:v,children:[(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",position:"absolute",left:0,top:0,width:"100%"},children:[(0,n.jsx)(a.E.svg,{width:"".concat((0,d.GX)(595,t,195)),height:"".concat((0,d.GX)(595,t,195)),viewBox:"0 0 ".concat((0,d.GX)(595,t,195)," ").concat((0,d.GX)(595,t,195)),className:s().motionSvg,children:Object.values(U).map((e,r)=>(0,n.jsx)(a.E.path,{fill:"none",strokeWidth:i,stroke:e.color,d:function(e,t,i,n,r){let a=_(e,t,i,r),l=_(e,t,i,n),s=r-n<=180?"0":"1";return["M",l.x,l.y,"A",i,i,0,s,1,a.x,a.y].join(" ")}((0,d.GX)(297.5,t,97.5),(0,d.GX)(297.5,t,97.5),l,e.rotation,e.rotation+e.degrees),initial:{pathLength:0},animate:e.animate,custom:r},r))}),(0,n.jsxs)(a.E.div,{className:s().mainTitleValue,animate:C,initial:"hidden",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,delay:1.5}}},children:[(0,n.jsx)("div",{className:s().title,children:"Total supply"}),(0,n.jsx)("div",{className:s().value,children:"2\xa0500\xa0000\xa0000 "})]})]}),(0,n.jsxs)("div",{className:s().infoBlock,children:[(0,n.jsx)(a.E.div,{className:s().titleBlock,ref:E,animate:O,initial:"hidden",variants:{hidden:{opacity:0,transform:"translateY(".concat((0,d.GX)("-25px",t),")")},visible:{opacity:1,transform:"translateY(0)",transition:{duration:.8}}},children:"TOKENOMICS"}),(0,n.jsx)("div",{className:s().content,children:Object.values(U).map((e,i)=>(0,n.jsxs)("div",{className:s().eachBlock,ref:e.ref,children:[(0,n.jsxs)("div",{className:s().info,children:[(0,n.jsx)(a.E.div,{className:s().percent,animate:Object.values($)[i].percent,initial:"hidden",variants:{hidden:{opacity:0,fontSize:"0",marginRight:"0"},visible:{opacity:1,fontSize:(0,d.GX)("28px",t),marginRight:(0,d.GX)("10px",t),transition:{duration:.8,delay:1.1}}},children:e.percent}),(0,n.jsx)(a.E.div,{animate:Object.values($)[i].title,initial:"hidden",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,delay:.3}}},className:s().title,children:e.title})]}),(0,n.jsxs)("div",{className:s().lineBlock,children:[(0,n.jsx)(a.E.div,{animate:Object.values($)[i].line,initial:"hidden",variants:{hidden:{width:0},visible:{width:e.lineWidth,transition:{duration:.8,delay:.5}}},className:s().line,style:{width:e.lineWidth}}),(0,n.jsx)(a.E.div,{className:s().dot,animate:Object.values($)[i].dot,initial:"hidden",variants:{hidden:{width:0,height:0},visible:{width:(0,d.GX)(8,t),height:(0,d.GX)(8,t),transition:{duration:.1,delay:1}}}})]}),(0,n.jsx)("div",{className:s().value,children:Object.values($)[i].isValue&&(0,n.jsx)(f,{text:e.value,classname:"value",time:500,delay:500})})]},i))})]})]})})},245:function(e){e.exports={container:"style_container___h3gF",mainTitleValue:"style_mainTitleValue__s2s_T",value:"style_value__MLUHa",title:"style_title__nL4P_",titleBlock:"style_titleBlock__CCVud",infoBlock:"style_infoBlock__5OeB1",content:"style_content__yGLB8",eachBlock:"style_eachBlock__F5L7h",info:"style_info__zCiwP",lineBlock:"style_lineBlock__M0FuJ",dot:"style_dot__wIGJT",line:"style_line__7xluq",percent:"style_percent__WFj2E",motionSvg:"style_motionSvg__3bOWT"}},2233:function(e,t,i){"use strict";i.d(t,{_:function(){return d}});var n=i(5487),r=i(6803),a=i(6432);function l(e,t){[...t].reverse().forEach(i=>{let n=e.getVariant(i);n&&(0,r.C)(e,n),e.variantChildren&&e.variantChildren.forEach(e=>{l(e,t)})})}function s(){let e=!1,t=new Set,i={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(i,r){(0,n.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let l=[];return t.forEach(e=>{l.push((0,a.d)(e,i,{transitionOverride:r}))}),Promise.all(l)},set:i=>((0,n.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(i)?l(e,i):"string"==typeof i?l(e,[i]):(0,r.C)(e,i)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,i.stop()})};return i}var o=i(6681),c=i(8868);let d=function(){let e=(0,o.h)(s);return(0,c.L)(e.mount,[]),e}},8357:function(e,t,i){"use strict";i.d(t,{YD:function(){return c}});var n=i(7294),r=Object.defineProperty,a=new Map,l=new WeakMap,s=0,o=void 0;function c({threshold:e,delay:t,trackVisibility:i,rootMargin:r,root:c,triggerOnce:d,skip:u,initialInView:h,fallbackInView:v,onChange:f}={}){var _;let[m,p]=n.useState(null),y=n.useRef(),[g,b]=n.useState({inView:!!h,entry:void 0});y.current=f,n.useEffect(()=>{let n;if(!u&&m)return n=function(e,t,i={},n=o){if(void 0===window.IntersectionObserver&&void 0!==n){let r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:r,observer:c,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var i;return`${t}_${"root"===t?(i=e.root)?(l.has(i)||(s+=1,l.set(i,s.toString())),l.get(i)):"0":e[t]}`}).toString(),i=a.get(t);if(!i){let n;let r=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var i;let a=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(i=r.get(t.target))||i.forEach(e=>{e(a,t)})})},e);n=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:l,elements:r},a.set(t,i)}return i}(i),u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(t),c.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),a.delete(r))}}(m,(e,t)=>{b({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&d&&n&&(n(),n=void 0)},{root:c,rootMargin:r,threshold:e,trackVisibility:i,delay:t},v),()=>{n&&n()}},[Array.isArray(e)?e.toString():e,m,c,r,d,u,i,v,t]);let j=null==(_=g.entry)?void 0:_.target,x=n.useRef();m||!j||d||u||x.current===j||(x.current=j,b({inView:!!h,entry:void 0}));let w=[p,g.inView,g.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}n.Component}}]);