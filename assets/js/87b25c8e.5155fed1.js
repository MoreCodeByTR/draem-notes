"use strict";(self.webpackChunkdream_notes=self.webpackChunkdream_notes||[]).push([[275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(y,p(p({ref:t},s),{},{components:n})):r.createElement(y,p({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},p="TS \u5c0f\u8bb0",l={permalink:"/draem-notes/blog/TS\u5b66\u4e60",editUrl:"https://github.com/MoreCodeByTR/draem-notes/tree/master/blog/TS\u5b66\u4e60.md",source:"@site/blog/TS\u5b66\u4e60.md",title:"TS \u5c0f\u8bb0",description:"Ts \u5b98\u7f51",date:"2023-04-24T16:15:16.000Z",formattedDate:"2023\u5e744\u670824\u65e5",tags:[],readingTime:.73,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"React-Hooks",permalink:"/draem-notes/blog/React-Hooks"},nextItem:{title:"Mac \u76f8\u5173",permalink:"/draem-notes/blog/Mac\u4f7f\u7528"}},c={authorsImageUrls:[]},i=[{value:"keyof",id:"keyof",level:2},{value:"typeof",id:"typeof",level:2}],s={toc:i},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/zh/"},"Ts \u5b98\u7f51")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7096869746481561608"},"\u8be6\u89e3 TypeScript \u4e2d\u7684 typeof \u548c keyof")),(0,o.kt)("h2",{id:"keyof"},"keyof"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Point {\n  a: string;\n  b: string;\n}\n\ntype Pk = keyof Point;\n\nconst age: Pk = 'b';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type OptionsFlags<T> = {\n  [key in keyof T]: boolean;\n};\n\ntype Name = OptionsFlags<{ name: 1; age: 11 }>;\n\n// type Name = {\n//     name: boolean;\n//     age: boolean;\n// }\n")),(0,o.kt)("p",null,"keyof \u4f5c\u7528\u4e8e object \u7684\u7c7b\u578b\uff0c\u5e76\u5c06\u5176 key \u503c\u8f6c\u6362\u4e3a\u8054\u5408\u7c7b\u578b"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"typeof"},"typeof"),(0,o.kt)("p",null,"\u7528\u6237\u83b7\u53d6\u53d8\u91cf\u7684\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function showName() {\n  return {\n    name: 133,\n  };\n}\n\ntype P = ReturnType<typeof showName>;\n\n// type P = {\n//   name: number;\n// };\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const info = ['school', 'age'] as const;\ntype Info = typeof info[number];\n// type Info = \"school\" | \"age\"\n")))}f.isMDXComponent=!0}}]);