"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[727],{53839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(85893),o=t(11151);const s={title:"Integrate With a Remote Server",slug:"/guides/using-models/integrate-with-remote-server",description:"Guide to integrate with a remote server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","remote server","OAI compatible"]},r=void 0,a={id:"guides/using-models/integrate-with-remote-server",title:"Integrate With a Remote Server",description:"Guide to integrate with a remote server.",source:"@site/docs/guides/04-using-models/03-integrate-with-remote-server.mdx",sourceDirName:"guides/04-using-models",slug:"/guides/using-models/integrate-with-remote-server",permalink:"/guides/using-models/integrate-with-remote-server",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/04-using-models/03-integrate-with-remote-server.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1706839425,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:3,frontMatter:{title:"Integrate With a Remote Server",slug:"/guides/using-models/integrate-with-remote-server",description:"Guide to integrate with a remote server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","remote server","OAI compatible"]},sidebar:"guidesSidebar",previous:{title:"Import Models Manually",permalink:"/guides/using-models/import-manually"},next:{title:"Customize Engine Settings",permalink:"/guides/using-models/customize-engine-settings"}},l={},d=[{value:"OpenAI Platform Configuration",id:"openai-platform-configuration",level:2},{value:"1. Create a Model JSON",id:"1-create-a-model-json",level:3},{value:"2. Configure OpenAI API Keys",id:"2-configure-openai-api-keys",level:3},{value:"3. Start the Model",id:"3-start-the-model",level:3},{value:"Engines with OAI Compatible Configuration",id:"engines-with-oai-compatible-configuration",level:2},{value:"1. Configure a Client Connection",id:"1-configure-a-client-connection",level:3},{value:"2. Create a Model JSON",id:"2-create-a-model-json",level:3},{value:"3. Start the Model",id:"3-start-the-model-1",level:3},{value:"Assistance and Support",id:"assistance-and-support",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This is currently under development."})}),"\n",(0,i.jsx)(n.p,{children:"In this guide, we will show you how to configure Jan as a client and point it to any remote & local (self-hosted) API server."}),"\n",(0,i.jsx)(n.h2,{id:"openai-platform-configuration",children:"OpenAI Platform Configuration"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we will show you how to configure with OpenAI Platform, using the OpenAI GPT 3.5 Turbo 16k model as an example."}),"\n",(0,i.jsx)(n.h3,{id:"1-create-a-model-json",children:"1. Create a Model JSON"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"~/jan/models"})," folder. Create a folder named ",(0,i.jsx)(n.code,{children:"gpt-3.5-turbo-16k"})," and create a ",(0,i.jsx)(n.code,{children:"model.json"})," file inside the folder including the following configurations:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure the filename must be ",(0,i.jsx)(n.code,{children:"model.json"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"id"})," property matches the folder name you created."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"format"})," property is set to ",(0,i.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"engine"})," property is set to ",(0,i.jsx)(n.code,{children:"openai"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"state"})," property is set to ",(0,i.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/gpt-3.5-turbo-16k/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "openai",\n      "url": "https://openai.com"\n    }\n  ],\n  // highlight-next-line\n  "id": "gpt-3.5-turbo-16k",\n  "object": "model",\n  "name": "OpenAI GPT 3.5 Turbo 16k",\n  "version": "1.0",\n  "description": "OpenAI GPT 3.5 Turbo 16k model is extremely good",\n  // highlight-start\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "author": "OpenAI",\n    "tags": ["General", "Big Context Length"]\n  },\n  "engine": "openai"\n  // highlight-end\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can find the list of available models in the ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/models/overview",children:"OpenAI Platform"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Please note that the ",(0,i.jsx)(n.code,{children:"id"})," property need to match the model name in the list. For example, if you want to use the ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo",children:"GPT-4 Turbo"}),", you need to set the ",(0,i.jsx)(n.code,{children:"id"})," property as ",(0,i.jsx)(n.code,{children:"gpt-4-1106-preview"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"2-configure-openai-api-keys",children:"2. Configure OpenAI API Keys"}),"\n",(0,i.jsxs)(n.p,{children:["You can find your API keys in the ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI Platform"})," and set the OpenAI API keys in ",(0,i.jsx)(n.code,{children:"~/jan/engines/openai.json"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  "full_url": "https://api.openai.com/v1/chat/completions",\n  // highlight-next-line\n  "api_key": "sk-<your key here>"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-start-the-model",children:"3. Start the Model"}),"\n",(0,i.jsx)(n.p,{children:"Restart Jan and navigate to the Hub. Then, select your configured model and start the model."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-01",src:t(62112).Z+"",width:"3456",height:"2234"})}),"\n",(0,i.jsx)(n.h2,{id:"engines-with-oai-compatible-configuration",children:"Engines with OAI Compatible Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["In this section, we will show you how to configure a client connection to a remote/local server, using Jan's API server that is running model ",(0,i.jsx)(n.code,{children:"mistral-ins-7b-q4"})," as an example."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Please note that at the moment, you can only connect to one OpenAI compatible endpoint at a time."}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"1-configure-a-client-connection",children:"1. Configure a Client Connection"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"~/jan/engines"})," folder and modify the ",(0,i.jsx)(n.code,{children:"openai.json"})," file. Please note that at the moment the code that supports any openai compatible endpoint only reads ",(0,i.jsx)(n.code,{children:"engine/openai.json"})," file, thus, it will not search any other files in this directory."]}),"\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"full_url"})," properties with the endpoint server that you want to connect. For example, if you want to connect to Jan's API server, you can configure it as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  // highlight-start\n  // "full_url": "https://<server-ip-address>:<port>/v1/chat/completions"\n  "full_url": "https://<server-ip-address>:1337/v1/chat/completions"\n  // highlight-end\n  // Skip api_key if your local server does not require authentication\n  // "api_key": "sk-<your key here>"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-create-a-model-json",children:"2. Create a Model JSON"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"~/jan/models"})," folder. Create a folder named ",(0,i.jsx)(n.code,{children:"mistral-ins-7b-q4"})," and create a ",(0,i.jsx)(n.code,{children:"model.json"})," file inside the folder including the following configurations:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure the filename must be ",(0,i.jsx)(n.code,{children:"model.json"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"id"})," property matches the folder name you created."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"format"})," property is set to ",(0,i.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"engine"})," property is set to ",(0,i.jsx)(n.code,{children:"openai"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"state"})," property is set to ",(0,i.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/mistral-ins-7b-q4/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "janai",\n      "url": "https://jan.ai"\n    }\n  ],\n  // highlight-next-line\n  "id": "mistral-ins-7b-q4",\n  "object": "model",\n  "name": "Mistral Instruct 7B Q4 on Jan API Server",\n  "version": "1.0",\n  "description": "Jan integration with remote Jan API server",\n  // highlight-next-line\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "author": "MistralAI, The Bloke",\n    "tags": ["remote", "awesome"]\n  },\n  // highlight-start\n  "engine": "openai"\n  // highlight-end\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-start-the-model-1",children:"3. Start the Model"}),"\n",(0,i.jsx)(n.p,{children:"Restart Jan and navigate to the Hub. Locate your model and click the Use button."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-02",src:t(17543).Z+"",width:"3456",height:"2234"})}),"\n",(0,i.jsx)(n.h2,{id:"assistance-and-support",children:"Assistance and Support"}),"\n",(0,i.jsxs)(n.p,{children:["If you have questions or are looking for more preconfigured GGUF models, please feel free to join our ",(0,i.jsx)(n.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},17543:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/03-oai-compatible-configuration-73faf13e67b1ab00076f2cc32b000d32.png"},62112:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/03-openai-platform-configuration-6c6e435b23d85d062dfe3a2d02f9a573.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);