import{x as I,l as S,r as d,n as $,G as ne,U as R,j as e,B as A,H as re,a as ie,I as q,i as oe,u as ce,b as le,P as N,J as de,K as ue,d as C,e as me,k as P}from"./index-DO3DbUou.js";import{I as w}from"./input-CAULtHap.js";import{C as F,a as k,b as D,d as M,c as V,e as G,B}from"./card-D73sUMwx.js";import{E as v,c as H,a as y,b as pe}from"./index.esm-B0aQJtQe.js";const ge=()=>{let[s]=I();const t=s.get("createNew"),n=S(),[a,r]=d.useState({}),[u,i]=d.useState({email:"",password:""}),l=x=>{const{name:p,value:b}=x.target;i(j=>({...j,[p]:b}))},{loading:g,error:o,fn:m,data:c}=$(ne,u),{fetchUser:f}=R();d.useEffect(()=>{o===null&&c&&(f(),n(`/dashboard?${t?`createNew=${t}`:""}`))},[o,c]);const h=async()=>{var x;r([]);try{await H().shape({email:y().email("Invalid email").required("Email is required"),password:y().min(6,"Password must be at least 6 characters").required("Password is required")}).validate(u,{abortEarly:!1}),await m()}catch(p){const b={};(x=p==null?void 0:p.inner)==null||x.forEach(j=>{b[j.path]=j.message}),r(b)}};return e.jsxs(F,{children:[e.jsxs(k,{children:[e.jsx(D,{children:"Login"}),e.jsx(M,{children:"to your account if you already have one"}),o&&e.jsx(v,{message:o.message})]}),e.jsxs(V,{className:"space-y-2",children:[e.jsx("div",{className:"space-y-1",children:e.jsx(w,{name:"email",type:"email",placeholder:"Enter Email",onChange:l})}),a.email&&e.jsx(v,{message:a.email}),e.jsx("div",{className:"space-y-1",children:e.jsx(w,{name:"password",type:"password",placeholder:"Enter Password",onChange:l})}),a.password&&e.jsx(v,{message:a.password})]}),e.jsx(G,{children:e.jsx(A,{onClick:h,children:g?e.jsx(B,{size:10,color:"#36d7b7"}):"Login"})})]})},fe=()=>{let[s]=I();const t=s.get("createNew"),n=S(),[a,r]=d.useState({}),[u,i]=d.useState({name:"",email:"",password:"",profile_pic:null}),l=h=>{const{name:x,value:p,files:b}=h.target;i(j=>({...j,[x]:b?b[0]:p}))},{loading:g,error:o,fn:m,data:c}=$(re,u);d.useEffect(()=>{o===null&&c&&n(`/dashboard?${t?`createNew=${t}`:""}`)},[o,g]);const f=async()=>{r([]);try{await H().shape({name:y().required("Name is required"),email:y().email("Invalid email").required("Email is required"),password:y().min(6,"Password must be at least 6 characters").required("Password is required"),profile_pic:pe().required("Profile picture is required")}).validate(u,{abortEarly:!1}),await m()}catch(h){const x={};h!=null&&h.inner?(h.inner.forEach(p=>{x[p.path]=p.message}),r(x)):r({api:h.message})}};return e.jsxs(F,{children:[e.jsxs(k,{children:[e.jsx(D,{children:"Signup"}),e.jsx(M,{children:"Create a new account if you haven’t already"}),o&&e.jsx(v,{message:o==null?void 0:o.message})]}),e.jsxs(V,{className:"space-y-2",children:[e.jsx("div",{className:"space-y-1",children:e.jsx(w,{name:"name",type:"text",placeholder:"Enter Name",onChange:l})}),a.name&&e.jsx(v,{message:a.name}),e.jsx("div",{className:"space-y-1",children:e.jsx(w,{name:"email",type:"email",placeholder:"Enter Email",onChange:l})}),a.email&&e.jsx(v,{message:a.email}),e.jsx("div",{className:"space-y-1",children:e.jsx(w,{name:"password",type:"password",placeholder:"Enter Password",onChange:l})}),a.password&&e.jsx(v,{message:a.password}),e.jsx("div",{className:"space-y-1",children:e.jsx("input",{name:"profile_pic",type:"file",accept:"image/*",onChange:l})}),a.profile_pic&&e.jsx(v,{message:a.profile_pic})]}),e.jsx(G,{children:e.jsx(A,{onClick:f,children:g?e.jsx(B,{size:10,color:"#36d7b7"}):"Create Account"})})]})};var _="Tabs",[he,Ce]=ie(_,[q]),K=q(),[xe,L]=he(_),z=d.forwardRef((s,t)=>{const{__scopeTabs:n,value:a,onValueChange:r,defaultValue:u,orientation:i="horizontal",dir:l,activationMode:g="automatic",...o}=s,m=oe(l),[c,f]=ce({prop:a,onChange:r,defaultProp:u});return e.jsx(xe,{scope:n,baseId:le(),value:c,onValueChange:f,orientation:i,dir:m,activationMode:g,children:e.jsx(N.div,{dir:m,"data-orientation":i,...o,ref:t})})});z.displayName=_;var U="TabsList",J=d.forwardRef((s,t)=>{const{__scopeTabs:n,loop:a=!0,...r}=s,u=L(U,n),i=K(n);return e.jsx(de,{asChild:!0,...i,orientation:u.orientation,dir:u.dir,loop:a,children:e.jsx(N.div,{role:"tablist","aria-orientation":u.orientation,...r,ref:t})})});J.displayName=U;var O="TabsTrigger",Q=d.forwardRef((s,t)=>{const{__scopeTabs:n,value:a,disabled:r=!1,...u}=s,i=L(O,n),l=K(n),g=Y(i.baseId,a),o=Z(i.baseId,a),m=a===i.value;return e.jsx(ue,{asChild:!0,...l,focusable:!r,active:m,children:e.jsx(N.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":o,"data-state":m?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:g,...u,ref:t,onMouseDown:C(s.onMouseDown,c=>{!r&&c.button===0&&c.ctrlKey===!1?i.onValueChange(a):c.preventDefault()}),onKeyDown:C(s.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&i.onValueChange(a)}),onFocus:C(s.onFocus,()=>{const c=i.activationMode!=="manual";!m&&!r&&c&&i.onValueChange(a)})})})});Q.displayName=O;var W="TabsContent",X=d.forwardRef((s,t)=>{const{__scopeTabs:n,value:a,forceMount:r,children:u,...i}=s,l=L(W,n),g=Y(l.baseId,a),o=Z(l.baseId,a),m=a===l.value,c=d.useRef(m);return d.useEffect(()=>{const f=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(f)},[]),e.jsx(me,{present:r||m,children:({present:f})=>e.jsx(N.div,{"data-state":m?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":g,hidden:!f,id:o,tabIndex:0,...i,ref:t,style:{...s.style,animationDuration:c.current?"0s":void 0},children:f&&u})})});X.displayName=W;function Y(s,t){return`${s}-trigger-${t}`}function Z(s,t){return`${s}-content-${t}`}var ve=z,ee=J,ae=Q,se=X;const be=ve,te=d.forwardRef(({className:s,...t},n)=>e.jsx(ee,{ref:n,className:P("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",s),...t}));te.displayName=ee.displayName;const E=d.forwardRef(({className:s,...t},n)=>e.jsx(ae,{ref:n,className:P("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",s),...t}));E.displayName=ae.displayName;const T=d.forwardRef(({className:s,...t},n)=>e.jsx(se,{ref:n,className:P("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...t}));T.displayName=se.displayName;function Ee(){let[s]=I();const t=S(),{isAuthenticated:n,loading:a}=R(),r=s.get("createNew");return d.useEffect(()=>{n&&!a&&t(`/dashboard?${r?`createNew=${r}`:""}`)},[n,a,t]),e.jsxs("div",{className:"mt-36 flex flex-col items-center gap-10",children:[e.jsx("h1",{className:"text-5xl font-extrabold",children:s.get("createNew")?"Hold up! Let's login first..":"Login / Signup"}),e.jsxs(be,{defaultValue:"login",className:"w-[400px]",children:[e.jsxs(te,{className:"grid w-full grid-cols-2",children:[e.jsx(E,{value:"login",children:"Login"}),e.jsx(E,{value:"signup",children:"Signup"})]}),e.jsx(T,{value:"login",children:e.jsx(ge,{})}),e.jsx(T,{value:"signup",children:e.jsx(fe,{})})]})]})}export{Ee as default};
