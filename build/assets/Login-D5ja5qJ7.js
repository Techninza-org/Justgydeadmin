import{r as i,_ as p,R as u,c as h,d as x,P as t,u as v,j as e,C as w,e as L,f as N,g as f,h as I,i as b,k as R}from"./index-B8WALBmV.js";import{C as j,a as y}from"./CRow-Bq1uL9AB.js";import{C as T,a as k}from"./CCardBody-B1Ohigj7.js";var C=i.forwardRef(function(s,o){var r=s.children,n=s.className,c=p(s,["children","className"]);return u.createElement("div",h({className:x("card-group",n)},c,{ref:o}),r)});C.propTypes={children:t.node,className:t.string};C.displayName="CCardGroup";var d=i.forwardRef(function(s,o){var r,n=s.children,c=s.className,l=s.size,a=p(s,["children","className","size"]);return u.createElement("div",h({className:x("input-group",(r={},r["input-group-".concat(l)]=l,r),c)},a,{ref:o}),n)});d.propTypes={children:t.node,className:t.string,size:t.oneOf(["sm","lg"])};d.displayName="CInputGroup";var m=i.forwardRef(function(s,o){var r=s.children,n=s.as,c=n===void 0?"span":n,l=s.className,a=p(s,["children","as","className"]);return u.createElement(c,h({className:x("input-group-text",l)},a,{ref:o}),r)});m.propTypes={as:t.elementType,children:t.node,className:t.string};m.displayName="CInputGroupText";var E=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"];const V=()=>{const s=v(),[o,r]=i.useState(""),[n,c]=i.useState("");async function l(){try{const a={email:o,password:n},g=await R.post("http://103.189.172.112:5000/auth/adminLogin",a);localStorage.setItem("user",JSON.stringify(g.data.admin)),localStorage.setItem("token",g.data.token),s("/dashboard")}catch{alert("Login Failed!")}}return e.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:e.jsx(w,{children:e.jsx(j,{className:"justify-content-center",children:e.jsx(y,{md:8,children:e.jsx(C,{children:e.jsx(T,{className:"p-4",children:e.jsx(k,{children:e.jsxs(L,{children:[e.jsx("h1",{children:"Login"}),e.jsx("p",{className:"text-body-secondary",children:"Sign In to your account"}),e.jsxs(d,{className:"mb-3",children:[e.jsx(m,{children:e.jsx(N,{icon:E})}),e.jsx(f,{placeholder:"Email",autoComplete:"off",name:"username",onChange:a=>r(a.target.value)})]}),e.jsxs(d,{className:"mb-4",children:[e.jsx(m,{children:e.jsx(N,{icon:I})}),e.jsx(f,{type:"password",placeholder:"Password",name:"password",onChange:a=>c(a.target.value),autoComplete:"current-password"})]}),e.jsx(j,{children:e.jsx(y,{xs:6,children:e.jsx(b,{color:"primary",className:"px-4",onClick:l,children:"Login"})})})]})})})})})})})})};export{V as default};
