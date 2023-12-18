"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4325],{42821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(85893),a=n(11151),l=n(74866),s=n(85162);const i={title:"Quickstart",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},o=void 0,u={id:"guides/quickstart",title:"Quickstart",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/quickstart.mdx",sourceDirName:"guides",slug:"/guides/quickstart",permalink:"/guides/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/quickstart.mdx",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1702892102,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"Quickstart",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"guidesSidebar",previous:{title:"Introduction",permalink:"/guides"},next:{title:"Overview",permalink:"/install/overview"}},c={},d=[{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Working with Models",id:"working-with-models",level:3},{value:"Importing Models",id:"importing-models",level:3},{value:"Working with the Local Server",id:"working-with-the-local-server",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In this quickstart we'll show you how to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Download the Jan Desktop client - Mac, Windows, Linux, (and toaster) compatible"}),"\n",(0,r.jsx)(t.li,{children:"Download and customize models"}),"\n",(0,r.jsx)(t.li,{children:"Import custom models"}),"\n",(0,r.jsxs)(t.li,{children:["Use the local server at port ",(0,r.jsx)(t.code,{children:"1337"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To download the latest stable release: ",(0,r.jsx)(t.a,{href:"https://jan.ai/",children:"https://jan.ai/"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To download a nightly release (highly unstable but lots of new features): ",(0,r.jsx)(t.a,{href:"https://github.com/janhq/jan/releases",children:"https://github.com/janhq/jan/releases"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"For a detailed installation guide for your operating system, see the following:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(l.Z,{groupId:"operating-systems",children:[(0,r.jsx)(s.Z,{value:"mac",label:"macOS",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/install/mac",children:"Mac installation guide"})})}),(0,r.jsx)(s.Z,{value:"win",label:"Windows",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/install/windows",children:"Windows installation guide"})})}),(0,r.jsx)(s.Z,{value:"linux",label:"Linux",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/install/linux",children:"Linux installation guide"})})})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"To build Jan Desktop from scratch (and have the right to tinker!)"}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"/install/from-source",children:"Build from Source"})," guide."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"working-with-models",children:"Working with Models"}),"\n",(0,r.jsx)(t.p,{children:"Jan provides a list of recommended models to get you started.\nYou can find them in the in-app Hub."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"cmd + k"}),' and type "hub" to open the Hub.']}),"\n",(0,r.jsx)(t.li,{children:"Download your preferred models."}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"cmd + k"}),' and type "chat" to open the conversation UI and start chatting.']}),"\n",(0,r.jsx)(t.li,{children:"Your model may take a few seconds to start up."}),"\n",(0,r.jsx)(t.li,{children:"You can customize the model settings, at each conversation thread level, on the right panel."}),"\n",(0,r.jsxs)(t.li,{children:["To change model defaults globally, edit the ",(0,r.jsx)(t.code,{children:"model.json"})," file. See the ",(0,r.jsx)(t.a,{href:"/guides/models",children:"Models"})," guide."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"importing-models",children:"Importing Models"}),"\n",(0,r.jsx)(t.p,{children:"Jan is compatible with all GGUF models."}),"\n",(0,r.jsxs)(t.p,{children:["For more information on how to import custom models, not found in the Hub, see the ",(0,r.jsx)(t.a,{href:"/guides/models",children:"Models"})," guide."]}),"\n",(0,r.jsx)(t.h2,{id:"working-with-the-local-server",children:"Working with the Local Server"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This feature is currently under development. So expect bugs!"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Jan runs a local server on port ",(0,r.jsx)(t.code,{children:"1337"})," by default."]}),"\n",(0,r.jsx)(t.p,{children:"The endpoints are OpenAI compatible."}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"/guides/server",children:"API server guide"})," for more information."]}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),a=n(36905),l=n(12466),s=n(16550),i=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function k(e){const t=(0,x.Z)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);