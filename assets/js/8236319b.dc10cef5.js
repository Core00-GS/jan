"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7873],{24664:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=i(85893),r=i(11151);const t={title:"Engine",slug:"/specs/engine"},l=void 0,a={id:"specs/engineering/engine",title:"Engine",description:"Currently Under Development",source:"@site/docs/specs/engineering/engine.md",sourceDirName:"specs/engineering",slug:"/specs/engine",permalink:"/specs/engine",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/engineering/engine.md",tags:[],version:"current",lastUpdatedBy:"Faisal Amir",lastUpdatedAt:1701843039,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{title:"Engine",slug:"/specs/engine"},sidebar:"specsSidebar",previous:{title:"Models",permalink:"/specs/models"},next:{title:"Threads",permalink:"/specs/threads"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Engine Default Parameter Files",id:"engine-default-parameter-files",level:2},{value:"Example",id:"example",level:3},{value:"Adding an Engine",id:"adding-an-engine",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Currently Under Development"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"In the Jan application, engines serve as primary entities with the following capabilities:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Engine will be installed through ",(0,s.jsx)(n.code,{children:"inference-extensions"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Models will depend on engines to do ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Inference_engine",children:"inference"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Engine configuration and required metadata will be stored in a json file."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default parameters for engines are stored in JSON files located in the ",(0,s.jsx)(n.code,{children:"/engines"})," folder."]}),"\n",(0,s.jsxs)(n.li,{children:["These parameter files are named uniquely with ",(0,s.jsx)(n.code,{children:"engine_id"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Engines are referenced directly using ",(0,s.jsx)(n.code,{children:"engine_id"})," in the ",(0,s.jsx)(n.code,{children:"model.json"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"jan/\n    engines/\n        nitro.json\n        openai.json\n        .....\n"})}),"\n",(0,s.jsx)(n.h2,{id:"engine-default-parameter-files",children:"Engine Default Parameter Files"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each inference engine requires default parameters to function in cases where user-provided parameters are absent."}),"\n",(0,s.jsx)(n.li,{children:"These parameters are stored in JSON files, structured as simple key-value pairs."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of an engine file for ",(0,s.jsx)(n.code,{children:"engine_id"})," ",(0,s.jsx)(n.code,{children:"nitro"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n    "ctx_len": 512,\n    "ngl": 100,\n    "embedding": false,\n    "n_parallel": 1,\n    "cont_batching": false\n    "prompt_template": "<|im_start|>system\\n{system_message}<|im_end|>\\n<|im_start|>user\\n{prompt}<|im_end|>\\n<|im_start|>assistant"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For detailed engine parameters, refer to: ",(0,s.jsx)(n.a,{href:"https://nitro.jan.ai/features/load-unload#table-of-parameters",children:"Nitro's Model Settings"})]}),"\n",(0,s.jsx)(n.h2,{id:"adding-an-engine",children:"Adding an Engine"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Engine parameter files are automatically generated upon installing an ",(0,s.jsx)(n.code,{children:"inference-extension"})," in the Jan application."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var s=i(67294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);