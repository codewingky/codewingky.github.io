import{d as i,h as e,T as m,g as d,a as u,i as p,j as c,k as f,r as t,l as v,m as g}from"./app.4aa9a26f.js";import{S as y}from"./SkipLink.f5a1d249.js";var b=i({name:"FadeSlideY",setup(l,{slots:a}){const s=d(),r=s.resolve,n=s.pending;return()=>e(m,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:r,onBeforeLeave:n},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=i({name:"Layout",setup(){const l=g(),a=u(),s=v(),r=p(),n=c(),o=f(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(y),e(t("CommonWrapper"),{},{default:()=>r.value.home?e(t("HomePage")):e(b,()=>e(t("NormalPage"),{key:s.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(t("BloggerInfo"))}:{},...!n.value&&o.value==="always"?{sidebar:()=>e(t("BloggerInfo"))}:{}})]}});export{S as default};