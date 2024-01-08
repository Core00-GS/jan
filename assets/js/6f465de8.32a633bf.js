"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3306],{3500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=t(85893),l=t(11151),r=t(74866),s=t(85162);const o={title:"Import Models Manually",slug:"/guides/using-models/import-manually",description:"Guide to manually import a local model into Jan.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","local model"]},i=void 0,d={id:"guides/using-models/import-manually",title:"Import Models Manually",description:"Guide to manually import a local model into Jan.",source:"@site/docs/guides/04-using-models/02-import-manually.mdx",sourceDirName:"guides/04-using-models",slug:"/guides/using-models/import-manually",permalink:"/guides/using-models/import-manually",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/04-using-models/02-import-manually.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1704688352,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:2,frontMatter:{title:"Import Models Manually",slug:"/guides/using-models/import-manually",description:"Guide to manually import a local model into Jan.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","local model"]},sidebar:"guidesSidebar",previous:{title:"Install Models from the Hub",permalink:"/guides/using-models/install-from-hub"},next:{title:"Integrate With a Remote Server",permalink:"/guides/using-models/integrate-with-remote-server"}},c={},u=[{value:"Steps to Manually Import a Local Model",id:"steps-to-manually-import-a-local-model",level:2},{value:"1. Create a Model Folder",id:"1-create-a-model-folder",level:3},{value:"2. Create a Model JSON",id:"2-create-a-model-json",level:3},{value:"3. Download the Model",id:"3-download-the-model",level:3},{value:"Assistance and Support",id:"assistance-and-support",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This is currently under development."})}),"\n","\n","\n","\n",(0,a.jsx)(n.h2,{id:"steps-to-manually-import-a-local-model",children:"Steps to Manually Import a Local Model"}),"\n",(0,a.jsxs)(n.p,{children:["In this section, we will show you how to import a GGUF model from ",(0,a.jsx)(n.a,{href:"https://huggingface.co/",children:"HuggingFace"}),", using our latest model, ",(0,a.jsx)(n.a,{href:"https://huggingface.co/janhq/trinity-v1-GGUF",children:"Trinity"}),", as an example."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"We are fast shipping a UI to make this easier, but it's a bit manual for now. Apologies."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"1-create-a-model-folder",children:"1. Create a Model Folder"}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"~/jan/models"})," folder. You can find this folder by going to ",(0,a.jsx)(n.code,{children:"App Settings"})," > ",(0,a.jsx)(n.code,{children:"Advanced"})," > ",(0,a.jsx)(n.code,{children:"Open App Directory"}),"."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"operating-systems",children:[(0,a.jsx)(s.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/models\n"})})}),(0,a.jsx)(s.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"C:/Users/<your_user_name>/jan/models\n"})})}),(0,a.jsx)(s.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/models\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"models"})," folder, create a folder with the name of the model."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"operating-systems",children:[(0,a.jsx)(s.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})}),(0,a.jsx)(s.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})}),(0,a.jsx)(s.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir trinity-v1-7b\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"2-create-a-model-json",children:"2. Create a Model JSON"}),"\n",(0,a.jsxs)(n.p,{children:["Jan follows a folder-based, ",(0,a.jsx)(n.a,{href:"/docs/engineering/models",children:"standard model template"})," called a ",(0,a.jsx)(n.code,{children:"model.json"})," to persist the model configurations on your local filesystem."]}),"\n",(0,a.jsx)(n.p,{children:"This means that you can easily reconfigure your models, export them, and share your preferences transparently."}),"\n",(0,a.jsxs)(r.Z,{groupId:"operating-systems",children:[(0,a.jsx)(s.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd trinity-v1-7b\ntouch model.json\n"})})}),(0,a.jsx)(s.Z,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd trinity-v1-7b\necho {} > model.json\n"})})}),(0,a.jsx)(s.Z,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd trinity-v1-7b\ntouch model.json\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Edit ",(0,a.jsx)(n.code,{children:"model.json"})," and include the following configurations:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Ensure the filename must be ",(0,a.jsx)(n.code,{children:"model.json"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the ",(0,a.jsx)(n.code,{children:"id"})," property matches the folder name you created."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the GGUF filename should match the ",(0,a.jsx)(n.code,{children:"id"})," property exactly."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the ",(0,a.jsx)(n.code,{children:"source_url"})," property is the direct binary download link ending in ",(0,a.jsx)(n.code,{children:".gguf"}),". In HuggingFace, you can find the direct links in the ",(0,a.jsx)(n.code,{children:"Files and versions"})," tab."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure you are using the correct ",(0,a.jsx)(n.code,{children:"prompt_template"}),". This is usually provided in the HuggingFace model's description page."]}),"\n",(0,a.jsxs)(n.li,{children:["Ensure the ",(0,a.jsx)(n.code,{children:"state"})," property is set to ",(0,a.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="model.json"',children:'{\n  // highlight-start\n  "source_url": "https://huggingface.co/janhq/trinity-v1-GGUF/resolve/main/trinity-v1.Q4_K_M.gguf",\n  "id": "trinity-v1-7b",\n  // highlight-end\n  "object": "model",\n  "name": "Trinity-v1 7B Q4",\n  "version": "1.0",\n  "description": "Trinity is an experimental model merge of GreenNodeLM & LeoScorpius using the Slerp method. Recommended for daily assistance purposes.",\n  "format": "gguf",\n  "settings": {\n    "ctx_len": 4096,\n    // highlight-next-line\n    "prompt_template": "{system_message}\\n### Instruction:\\n{prompt}\\n### Response:"\n  },\n  "parameters": {\n    "max_tokens": 4096\n  },\n  "metadata": {\n    "author": "Jan",\n    "tags": ["7B", "Merged"],\n    "size": 4370000000\n  },\n  "engine": "nitro",\n  // highlight-next-line\n  "state": "ready"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"3-download-the-model",children:"3. Download the Model"}),"\n",(0,a.jsxs)(n.p,{children:["Restart Jan and navigate to the Hub. Locate your model and click the ",(0,a.jsx)(n.code,{children:"Download"})," button to download the model binary."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image-01",src:t(69213).Z+"",width:"3456",height:"2234"})}),"\n",(0,a.jsx)(n.p,{children:"Your model is now ready to use in Jan."}),"\n",(0,a.jsx)(n.h2,{id:"assistance-and-support",children:"Assistance and Support"}),"\n",(0,a.jsxs)(n.p,{children:["If you have questions or are looking for more preconfigured GGUF models, please feel free to join our ",(0,a.jsx)(n.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const l={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),l=t(36905),r=t(12466),s=t(16550),o=t(20469),i=t(91980),d=t(67392),c=t(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=p({queryString:t,groupId:l}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Nk)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),x=(()=>{const e=d??g;return m({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),l=o[t].value;l!==a&&(d(n),s(l))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...r,className:(0,l.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,l.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},69213:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/02-manually-import-local-model-05b03efea213c6cba1cb9e50b049b6fa.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(67294);const l={},r=a.createContext(l);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);