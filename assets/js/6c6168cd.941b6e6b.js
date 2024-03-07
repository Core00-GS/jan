"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7197],{40206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(85893),s=r(11151),a=r(74866),o=r(85162);const i={title:"Something's Amiss",sidebar_position:4,description:"A step-by-step guide to resolve an unspecified or general error."},l=void 0,u={id:"guides/error-codes/something-amiss",title:"Something's Amiss",description:"A step-by-step guide to resolve an unspecified or general error.",source:"@site/docs/guides/error-codes/something-amiss.mdx",sourceDirName:"guides/error-codes",slug:"/guides/error-codes/something-amiss",permalink:"/guides/error-codes/something-amiss",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/error-codes/something-amiss.mdx",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1709776182,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:4,frontMatter:{title:"Something's Amiss",sidebar_position:4,description:"A step-by-step guide to resolve an unspecified or general error."},sidebar:"guidesSidebar",previous:{title:"Undefined Issue",permalink:"/guides/error-codes/undefined-issue"},next:{title:"How to Get Error Logs",permalink:"/guides/error-codes/how-to-get-error-logs"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"When you start a chat with a model and encounter with a Something's Amiss error, here's how to resolve it:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure your OS is up to date."}),"\n",(0,n.jsx)(t.li,{children:"Choose a model smaller than 80% of your hardware's V/RAM. For example, on an 8GB machine, opt for models smaller than 6GB."}),"\n",(0,n.jsxs)(t.li,{children:["Install the latest ",(0,n.jsx)(t.a,{href:"https://jan.ai/install/nightly/",children:"Nightly release"})," or ",(0,n.jsx)(t.a,{href:"https://jan.ai/troubleshooting/stuck-on-broken-build/",children:"clear the application cache"})," when reinstalling Jan."]}),"\n",(0,n.jsx)(t.li,{children:"Confirm your V/RAM accessibility, particularly if using virtual RAM."}),"\n",(0,n.jsxs)(t.li,{children:["Nvidia GPU users should download ",(0,n.jsx)(t.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"CUDA"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Linux users, ensure your system meets the requirements of gcc 11, g++ 11, cpp 11, or higher. Refer to this ",(0,n.jsx)(t.a,{href:"https://jan.ai/guides/troubleshooting/gpu-not-used/#specific-requirements-for-linux",children:"link"})," for details."]}),"\n",(0,n.jsxs)(t.li,{children:["You might use the wrong port when you ",(0,n.jsx)(t.a,{href:"https://jan.ai/troubleshooting/how-to-get-error-logs/",children:"check the app logs"})," and encounter the Bind address failed at 127.0.0.1:3928 error. To check the port status, try use the ",(0,n.jsx)(t.code,{children:"netstat"})," command, like the following:"]}),"\n"]}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(o.Z,{value:"mac",label:"MacOS",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"netstat -an | grep 3928\n"})})}),(0,n.jsx)(o.Z,{value:"windows",label:"Windows",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'netstat -ano | find "3928" \ntasklist /fi "PID eq 3928"\n'})})}),(0,n.jsx)(o.Z,{value:"linux",label:"Linux",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'netstat -anpe | grep "3928" \n'})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Netstat"})," displays the contents of various network-related data structures for active connections"]})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"Jan uses the following ports:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Nitro: ",(0,n.jsx)(t.code,{children:"3928"})]}),"\n",(0,n.jsxs)(t.li,{children:["Jan API Server: ",(0,n.jsx)(t.code,{children:"1337"})]}),"\n",(0,n.jsxs)(t.li,{children:["Jan Documentation: ",(0,n.jsx)(t.code,{children:"3001"})]}),"\n"]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),s=r(36905),a=r(12466),o=r(16550),i=r(20469),l=r(91980),u=r(67392),c=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:r,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=u??f;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==n&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(67294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);