import{r as c,_ as C,R as f,c as g,d as u,P as t,j as s,k as h}from"./index-CxG8xqsQ.js";import{C as p,a as x}from"./CCardBody-BZq6w71j.js";var i=c.forwardRef(function(e,n){var o=e.children,a=e.as,d=a===void 0?"div":a,r=e.className,l=C(e,["children","as","className"]);return f.createElement(d,g({className:u("card-header",r)},l,{ref:n}),o)});i.propTypes={as:t.elementType,children:t.node,className:t.string};i.displayName="CCardHeader";var m=c.forwardRef(function(e,n){var o=e.children,a=e.as,d=a===void 0?"h5":a,r=e.className,l=C(e,["children","as","className"]);return f.createElement(d,g({className:u("card-title",r)},l,{ref:n}),o)});m.propTypes={as:t.elementType,children:t.node,className:t.string};m.displayName="CCardTitle";const v=()=>{const[e,n]=c.useState(0),[o,a]=c.useState(0);return c.useEffect(()=>{async function d(){const r=localStorage.getItem("token"),l=await h.get("http://103.189.172.112:5000/admin/getAllUsers",{headers:{Authorization:`Bearer ${r}`}});console.log(),n(l.data.users.length);const N=await h.get("http://103.189.172.112:5000/admin/getAllVendors",{headers:{Authorization:`Bearer ${r}`}});a(N.data.vendors.length)}d()},[]),s.jsxs(s.Fragment,{children:[s.jsxs(p,{textBgColor:"primary",className:"mb-4 mt-3",style:{maxWidth:"18rem"},children:[s.jsx(i,{children:"Vendors"}),s.jsx(x,{children:s.jsxs(m,{children:["Vendors: ",o]})})]}),s.jsxs(p,{textBgColor:"secondary",className:"mb-3",style:{maxWidth:"18rem"},children:[s.jsx(i,{children:"Users"}),s.jsx(x,{children:s.jsxs(m,{children:["Users: ",e," "]})})]})]})};export{v as default};
