"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8867],{47165:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=n(85893),t=n(11151);const l={title:"Files",slug:"/specs/files",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]},r=void 0,o={id:"specs/engineering/files",title:"Files",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/specs/engineering/files.md",sourceDirName:"specs/engineering",slug:"/specs/files",permalink:"/specs/files",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/engineering/files.md",tags:[],version:"current",lastUpdatedBy:"Faisal Amir",lastUpdatedAt:1701843039,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{title:"Files",slug:"/specs/files",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]}},c={},a=[{value:"Files Object",id:"files-object",level:2},{value:"File API",id:"file-api",level:2},{value:"List Files",id:"list-files",level:3},{value:"Upload file",id:"upload-file",level:3},{value:"Delete file",id:"delete-file",level:3},{value:"Retrieve file",id:"retrieve-file",level:3},{value:"Retrieve file content",id:"retrieve-file-content",level:3},{value:"Files Filesystem",id:"files-filesystem",level:2}];function d(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"Draft Specification: functionality has not been implemented yet."})}),"\n",(0,s.jsxs)(i.p,{children:["Files can be used by ",(0,s.jsx)(i.code,{children:"threads"}),", ",(0,s.jsx)(i.code,{children:"assistants"})," and ",(0,s.jsx)(i.code,{children:"fine-tuning"})]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["Equivalent to: ",(0,s.jsx)(i.a,{href:"https://platform.openai.com/docs/api-reference/files",children:"https://platform.openai.com/docs/api-reference/files"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"files-object",children:"Files Object"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Equivalent to: ",(0,s.jsx)(i.a,{href:"https://platform.openai.com/docs/api-reference/files",children:"https://platform.openai.com/docs/api-reference/files"})]}),"\n",(0,s.jsx)(i.li,{children:"Note: OAI's struct doesn't seem very well designed"}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"files.json"})}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:'{\n  // Public properties (OpenAI Compatible: https://platform.openai.com/docs/api-reference/files/object)\n  "id": "file-BK7bzQj3FfZFXr7DbL6xJwfo",\n  "object": "file",\n  "bytes": 120000,\n  "created_at": 1677610602,\n  "filename": "salesOverview.pdf",\n  "purpose": "assistants"\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"file-api",children:"File API"}),"\n",(0,s.jsx)(i.h3,{id:"list-files",children:"List Files"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(i.a,{href:"https://platform.openai.com/docs/api-reference/files/list",children:"https://platform.openai.com/docs/api-reference/files/list"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"upload-file",children:"Upload file"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(i.a,{href:"https://platform.openai.com/docs/api-reference/files/create",children:"https://platform.openai.com/docs/api-reference/files/create"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"delete-file",children:"Delete file"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(i.a,{href:"https://platform.openai.com/docs/api-reference/files/delete",children:"https://platform.openai.com/docs/api-reference/files/delete"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"retrieve-file",children:"Retrieve file"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(i.a,{href:"https://platform.openai.com/docs/api-reference/files/retrieve",children:"https://platform.openai.com/docs/api-reference/files/retrieve"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"retrieve-file-content",children:"Retrieve file content"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(i.a,{href:"https://platform.openai.com/docs/api-reference/files/retrieve-contents",children:"https://platform.openai.com/docs/api-reference/files/retrieve-contents"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"files-filesystem",children:"Files Filesystem"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Files can exist in several parts of Jan's filesystem"}),"\n",(0,s.jsxs)(i.li,{children:["TODO: are files hard copied into these folders? Or do we define a ",(0,s.jsx)(i.code,{children:"files.json"})," and only record the relative filepath?"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"/files                  # root `/files` for finetuning, etc\n/assistants\n    /jan\n        /files          # assistant-specific files\n/threads\n    /jan-12938912\n        /files          # thread-specific files\n"})})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>r});var s=n(67294);const t={},l=s.createContext(t);function r(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);