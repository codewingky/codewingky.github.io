import{f as i,h as e,T as m,m as d,g as u,n as p,p as c,q as f,r as t,s as v,t as g}from"./app.8924c0b0.js";import{S as y}from"./SkipLink.d0315b9e.js";var b=i({name:"FadeSlideY",setup(l,{slots:a}){const s=d(),n=s.resolve,r=s.pending;return()=>e(m,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:r},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=i({name:"Layout",setup(){const l=g(),a=u(),s=v(),n=p(),r=c(),o=f(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(y),e(t("CommonWrapper"),{},{default:()=>n.value.home?e(t("HomePage")):e(b,()=>e(t("NormalPage"),{key:s.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(t("BloggerInfo"))}:{},...!r.value&&o.value==="always"?{sidebar:()=>e(t("BloggerInfo"))}:{}})]}});export{S as default};
