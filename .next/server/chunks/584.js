exports.id=584,exports.ids=[584],exports.modules={6941:t=>{t.exports={input:"style_input__Z0K6J",vector:"style_vector__Z4Y2W",textBlock:"style_textBlock__l_4I_",divide:"style_divide__bOGQJ",text:"style_text___8ReP",active:"style_active__3I8ic"}},947:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});let s={src:"/_next/static/media/vector.717de505.svg",height:14,width:14,blurWidth:0,blurHeight:0}},6584:(t,e,i)=>{"use strict";i.a(t,async(t,s)=>{try{i.r(e),i.d(e,{default:()=>u});var a=i(997),d=i(6689),c=i(6197),l=i(4009),r=i(947),n=i(6941),o=i.n(n),v=i(3271),_=i(5675),h=i.n(_),x=t([c,l]);[c,l]=x.then?(await x)():x;let u=(0,d.memo)(({title:t,description:e,index:i,setActive:s,active:n})=>{let{scrolling:_}=(0,v.C)(),x=(0,c.useAnimation)(),[u,m]=(0,d.useState)(!0),[y,p]=(0,l.useInView)({triggerOnce:!1,threshold:1}),g=(0,d.useMemo)(()=>({hidden:{opacity:0,height:"0",transition:{duration:.75}},visible:{opacity:1,height:"auto",transition:{duration:.75}}}),[]);return(0,d.useEffect)(()=>{_||(p&&n===i?(m(!1),x.start("visible")):x.start("hidden"))},[p,n,i,_,u,x]),(0,a.jsxs)("div",{className:`${n===i&&o().active}`,children:[(0,a.jsxs)("div",{className:o().input,onClick:()=>s(n===i?-1:i),children:[t,a.jsx("div",{className:o().vector,children:a.jsx(h(),{src:r.Z,loading:"lazy",alt:"vector icon"})})]}),(0,a.jsxs)(c.motion.div,{ref:y,className:o().textBlock,animate:x,initial:"hidden",variants:g,children:[a.jsx("div",{className:o().divide}),a.jsx("div",{className:o().text,children:e}),a.jsx("div",{className:o().divide})]})]})});s()}catch(t){s(t)}})}};