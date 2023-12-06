"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[366],{77106:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=i(85893),r=i(11151);const o={title:"Overview",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]},a=void 0,t={id:"install/overview",title:"Overview",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/install/overview.md",sourceDirName:"install",slug:"/install/overview",permalink:"/install/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/install/overview.md",tags:[],version:"current",lastUpdatedBy:"Louis",lastUpdatedAt:1701868978,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{title:"Overview",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]},sidebar:"guidesSidebar",previous:{title:"How Jan Works",permalink:"/intro/how-jan-works"},next:{title:"Windows",permalink:"/install/windows"}},l={},c=[{value:"Cross platform",id:"cross-platform",level:2},{value:"Requirements for Jan",id:"requirements-for-jan",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Disk space",id:"disk-space",level:4},{value:"Random Access Memory (RAM) and Graphics Processing Unit Video Random Access Memory (GPU VRAM)",id:"random-access-memory-ram-and-graphics-processing-unit-video-random-access-memory-gpu-vram",level:4},{value:"Relationship between RAM and VRAM Sizes in Relation to LLM Models",id:"relationship-between-ram-and-vram-sizes-in-relation-to-llm-models",level:4},{value:"Architecture",id:"architecture",level:3},{value:"CPU",id:"cpu",level:4},{value:"GPU",id:"gpu",level:4}];function d(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Getting up and running open-source AI models on your own computer with Jan is quick and easy. Jan is lightweight and can run on a variety of hardware and platform versions. Specific requirements tailored to your platform are outlined below."}),"\n",(0,s.jsx)(n.h2,{id:"cross-platform",children:"Cross platform"}),"\n",(0,s.jsx)(n.p,{children:"A free, open-source alternative to OpenAI that runs on the Linux, macOS, and Windows operating systems. Please refer to the specific guides below for your platform"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/install/linux",children:"Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/install/mac",children:"MacOS (Mac Intel Chip and Mac Apple Silicon Chip)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/install/windows",children:"Windows"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"requirements-for-jan",children:"Requirements for Jan"}),"\n",(0,s.jsx)(n.h3,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsx)(n.p,{children:"Jan is a lightweight platform designed for seamless download, storage, and execution of open-source Large Language Models (LLMs). With a small download size of less than 200 MB and a disk footprint of under 300 MB, Jan is optimized for efficiency and should run smoothly on modern hardware."}),"\n",(0,s.jsx)(n.p,{children:"To ensure optimal performance while using Jan and handling LLM models, it is recommended to meet the following system requirements:"}),"\n",(0,s.jsx)(n.h4,{id:"disk-space",children:"Disk space"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Minimum requirement","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"At least 5 GB of free disk space is required to accommodate the download, storage, and management of open-source LLM models."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Recommended","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For an optimal experience and to run most available open-source LLM models on Jan, it is recommended to have 10 GB of free disk space."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"random-access-memory-ram-and-graphics-processing-unit-video-random-access-memory-gpu-vram",children:"Random Access Memory (RAM) and Graphics Processing Unit Video Random Access Memory (GPU VRAM)"}),"\n",(0,s.jsx)(n.p,{children:"The amount of RAM on your system plays a crucial role in determining the size and complexity of LLM models you can effectively run. Jan can be utilized on traditional computers where RAM is a key resource. For enhanced performance, Jan also supports GPU acceleration, utilizing the VRAM of your graphics card."}),"\n",(0,s.jsx)(n.h4,{id:"relationship-between-ram-and-vram-sizes-in-relation-to-llm-models",children:"Relationship between RAM and VRAM Sizes in Relation to LLM Models"}),"\n",(0,s.jsx)(n.p,{children:"The RAM and GPU VRAM requirements are dependent on the size and complexity of the LLM models you intend to run. The following are some general guidelines to help you determine the amount of RAM or VRAM you need to run LLM models on Jan"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"8 GB of RAM: Suitable for running smaller models like 3B models or quantized 7B models"}),"\n",(0,s.jsx)(n.li,{children:'16 GB of RAM(recommended): This is considered the "minimum usable models" threshold, particularly for 7B models (e.g Mistral 7B, etc)'}),"\n",(0,s.jsx)(n.li,{children:"Beyond 16GB of RAM: Required for handling larger and more sophisticated model, such as 70B models."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.p,{children:"Jan is designed to run on muptiple architectures, versatility and widespread usability. The supported architectures include:"}),"\n",(0,s.jsx)(n.h4,{id:"cpu",children:"CPU"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"x86: Jan is well-suited for systems with x86 architecture, which is commonly found in traditional desktops and laptops. It ensures smooth performance on a variety of devices using x86 processors."}),"\n",(0,s.jsx)(n.li,{children:"ARM: Jan is optimized to run efficiently on ARM-based systems, extending compatibility to a broad range of devices using ARM processors."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"gpu",children:"GPU"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NVIDIA: Jan optimizes the computational capabilities of NVIDIA GPUs, achieving efficiency through the utilization of llama.cpp. This strategic integration enhances the performance of Jan, particularly in resource-intensive Language Model (LLM) tasks. Users can expect accelerated processing and improved responsiveness when leveraging the processing capabilities inherent in NVIDIA GPUs."}),"\n",(0,s.jsx)(n.li,{children:"AMD: Users with AMD GPUs can seamlessly integrate Jan's GPU acceleration, offering a comprehensive solution for diverse hardware configurations and preferences."}),"\n",(0,s.jsx)(n.li,{children:"ARM64 Mac: Jan seamlessly supports ARM64 architecture on Mac systems, leveraging Metal for efficient GPU operations. This ensures a smooth and efficient experience for users with Apple Silicon Chips, utilizing the power of Metal for optimal performance on ARM64 Mac devices."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>a});var s=i(67294);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);