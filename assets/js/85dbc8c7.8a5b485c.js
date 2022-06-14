"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9282],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7890:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7378),n(3905)),i=["components"],c={title:"\uc774\ubbf8\uc9c0 \uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},p=void 0,s={unversionedId:"sample/staticmap/staticMap",id:"sample/staticmap/staticMap",isDocsHomePage:!1,title:"\uc774\ubbf8\uc9c0 \uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",description:"\uc774\ubbf8\uc9c0 \uc9c0\ub3c4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/staticmap/staticMap.mdx",sourceDirName:"sample/staticmap",slug:"/sample/staticmap/staticMap",permalink:"/docs/sample/staticmap/staticMap",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/staticmap/staticMap.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\uc774\ubbf8\uc9c0 \uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ub85c\ub4dc\ubdf0\uc640 \uc9c0\ub3c4 \ud1a0\uae00\ud558\uae30",permalink:"/docs/sample/roadview/roadviewToggle"},next:{title:"\uc774\ubbf8\uc9c0 \uc9c0\ub3c4\uc5d0 \ub9c8\ucee4 \ud45c\uc2dc\ud558\uae30",permalink:"/docs/sample/staticmap/staticMapWithMarker"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774\ubbf8\uc9c0 \uc9c0\ub3c4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"original docs : ",(0,o.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/staticMap/"},"https://apis.map.kakao.com/web/sample/staticMap/"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  return (\n    <StaticMap // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n    />\n  );\n}\n')))}m.isMDXComponent=!0}}]);