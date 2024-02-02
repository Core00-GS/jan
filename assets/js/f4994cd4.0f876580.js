"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[628],{9184:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(85893),s=o(11151);const i={title:"Permission Denied",slug:"/troubleshooting/permission-denied",description:"Permission denied.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","troubleshooting","permission denied"]},r=void 0,a={id:"guides/troubleshooting/permission-denied",title:"Permission Denied",description:"Permission denied.",source:"@site/docs/guides/08-troubleshooting/05-permission-denied.mdx",sourceDirName:"guides/08-troubleshooting",slug:"/troubleshooting/permission-denied",permalink:"/troubleshooting/permission-denied",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/08-troubleshooting/05-permission-denied.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1706839425,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:5,frontMatter:{title:"Permission Denied",slug:"/troubleshooting/permission-denied",description:"Permission denied.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","troubleshooting","permission denied"]},sidebar:"guidesSidebar",previous:{title:"How to Get Error Logs",permalink:"/troubleshooting/how-to-get-error-logs"},next:{title:"Unexpected Token",permalink:"/troubleshooting/unexpected-token"}},d={},c=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"When you run Jan, you may encounter the following error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Uncaught (in promise) Error: Error invoking layout-480796bff433a3a3.js:538 remote method 'installExtension':\nError Package /Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-assistant-extension-1.0.0.tgz does not contain a valid manifest:\nError EACCES: permission denied, mkdtemp '/Users/username/.npm/_cacache/tmp/ueCMn4'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This error indicates a permission issue during the installation process. To fix this issue, you can run the following command to change ownership of the ",(0,t.jsx)(n.code,{children:"~/.npm"})," directory to the current user:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo chown -R $(whoami) ~/.npm\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(67294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);