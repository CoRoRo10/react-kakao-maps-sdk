"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[106],{8974:function(a,e,n){n.r(e),n.d(e,{contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return M},toc:function(){return D}});var t=n(7462),r=n(3366),o=n(7294),s=n(3905),d=n(8086),i=n(1710),l=n(3772),p={src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png",size:[50,45],options:{offset:[15,43]}},c={src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_drag.png",size:[50,64],options:{offset:[15,54]}},g={src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png",size:[50,45],options:{offset:[15,43]}},m={src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png",size:[50,64],options:{offset:[15,54]}},u=function(){var a=(0,i.useKakaoMapsSDK)({apiKey:"6ec8020798deac7ef2f8897ad1c5ccf1"}),e=(0,o.useState)(p),n=e[0],t=e[1],r=(0,o.useState)(g),s=r[0],d=r[1];return o.createElement(l.Map,{loading:a,center:{lat:33.450701,lng:126.570667},style:{width:"100%",height:"450px"},options:{level:3}},o.createElement(l.MapMarker,{position:{lat:33.450701,lng:126.570667},image:n,options:{draggable:!0,onDragStart:function(){return t(c)},onDragEnd:function(){return t(p)}}}),o.createElement(l.MapMarker,{position:{lat:33.450701,lng:126.572667},image:s,options:{draggable:!0,onDragStart:function(){return d(m)},onDragEnd:function(){return d(g)}}}))},k=["components"],b={title:"draggable \ub9c8\ucee4 \uc774\ubca4\ud2b8 \uc801\uc6a9\ud558\uae30",sidebar_position:8},f=void 0,M={unversionedId:"sample/overlay/addDraggableMarkerDragEvent",id:"sample/overlay/addDraggableMarkerDragEvent",isDocsHomePage:!1,title:"draggable \ub9c8\ucee4 \uc774\ubca4\ud2b8 \uc801\uc6a9\ud558\uae30",description:"\ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud55c \ub9c8\ucee4\uc5d0 dragstart, dragend \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ub9c8\ucee4\uc758 \ub4dc\ub798\uadf8\uac00 \uc2dc\uc791\ub420 \ub54c \uc989, dragstart \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c \ub9c8\ucee4\uc758 \uc774\ubbf8\uc9c0\ub97c \ub2e4\ub978\uc774\ubbf8\uc9c0\ub85c \ubcc0\uacbd\ud558\uba70, \ub9c8\ucee4\uc758 \ub4dc\ub798\uadf8\uac00 \ub05d\ub0a0 \ub54c \uc989, dragend \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c \ub9c8\ucee4\uc758 \uc774\ubbf8\uc9c0\ub97c \ucc98\uc74c \uc774\ubbf8\uc9c0\ub85c \uc7ac\ubcc0\uacbd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/sample/overlay/addDraggableMarkerDragEvent.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/addDraggableMarkerDragEvent",permalink:"/docs/sample/overlay/addDraggableMarkerDragEvent",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/addDraggableMarkerDragEvent.mdx",version:"current",sidebarPosition:8,frontMatter:{title:"draggable \ub9c8\ucee4 \uc774\ubca4\ud2b8 \uc801\uc6a9\ud558\uae30",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\ub9c8\ucee4\uc5d0 \ub9c8\uc6b0\uc2a4 \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",permalink:"/docs/sample/overlay/addMarkerMouseEvent"},next:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",permalink:"/docs/sample/overlay/customOverlay1"}},D=[{value:"Source Code",id:"source-code",children:[]}],v={toc:D};function h(a){var e=a.components,n=(0,r.Z)(a,k);return(0,s.kt)("wrapper",(0,t.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud55c \ub9c8\ucee4\uc5d0 dragstart, dragend \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ub9c8\ucee4\uc758 \ub4dc\ub798\uadf8\uac00 \uc2dc\uc791\ub420 \ub54c \uc989, dragstart \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c \ub9c8\ucee4\uc758 \uc774\ubbf8\uc9c0\ub97c \ub2e4\ub978\uc774\ubbf8\uc9c0\ub85c \ubcc0\uacbd\ud558\uba70, \ub9c8\ucee4\uc758 \ub4dc\ub798\uadf8\uac00 \ub05d\ub0a0 \ub54c \uc989, dragend \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c \ub9c8\ucee4\uc758 \uc774\ubbf8\uc9c0\ub97c \ucc98\uc74c \uc774\ubbf8\uc9c0\ub85c \uc7ac\ubcc0\uacbd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(u,{mdxType:"SampleCreateMap"}),(0,s.kt)("h3",{id:"source-code"},"Source Code"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"original docs : ",(0,s.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/addDraggableMarkerDragEvent/"},"https://apis.map.kakao.com/web/sample/addDraggableMarkerDragEvent/"))),(0,s.kt)(d.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React, { useState } from "react";\nimport { useKakaoMapsSDK } from "react-kakao-maps-sdk/hooks";\nimport { Map, MapMarker } from "react-kakao-maps-sdk";\n\nconst startImage = {\n  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png",\n  size: [50, 45] as [number, number],\n  options: {\n    offset: [15, 43] as [number, number],\n  },\n};\n\nconst startDragImage = {\n  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_drag.png",\n  size: [50, 64] as [number, number],\n  options: {\n    offset: [15, 54] as [number, number],\n  },\n};\n\nconst endImage = {\n  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png",\n  size: [50, 45] as [number, number],\n  options: {\n    offset: [15, 43] as [number, number],\n  },\n};\n\nconst endDragImage = {\n  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png",\n  size: [50, 64] as [number, number],\n  options: {\n    offset: [15, 54] as [number, number],\n  },\n};\n\nconst SampleCreateMap = () => {\n  //  script \ub3d9\uc801 \ub85c\ub529\ud558\ub294 hook, HTML\uc5d0 Sciprt \uc0bd\uc785 \ud558\uc5ec \uc0ac\uc6a9\ud558\uc5ec\ub3c4 \uac00\ub2a5\ud568.\n  const loading = useKakaoMapsSDK({\n    apiKey: process.env.KAKAOMAP_API_KEY,\n  });\n\n  const [start, setStart] = useState(startImage);\n  const [end, setEnd] = useState(endImage);\n\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      loading={loading} // useKakaoMapsSDK\ub97c \uc774\uc6a9\ud558\uc5ec script \ub3d9\uc801 \ub85c\ub529 \ud560 \ub54c \uc0ac\uc6a9\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      options={{\n        level: 3, // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      }}\n    >\n      <MapMarker // \ub9c8\ucee4\ub97c \uc0dd\uc131\ud558\uace0 \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4\n        position={{\n          // \ub9c8\ucee4\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        image={start}\n        options={{\n          draggable: true, // \ub9c8\ucee4\ub97c \ud074\ub9ad\ud588\uc744 \ub54c \uc9c0\ub3c4\uc758 \ud074\ub9ad \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n          onDragStart: () => setStart(startDragImage), // \ub9c8\ucee4\uac00 \uc774\ub3d9\ud558\uba74 \uc774\ubbf8\uc9c0\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4\n          onDragEnd: () => setStart(startImage), // \ub9c8\ucee4\uac00 \uc774\ub3d9\ud558\uba74 \uc774\ubbf8\uc9c0\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4\n        }}\n      />\n      <MapMarker // \ub9c8\ucee4\ub97c \uc0dd\uc131\ud558\uace0 \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4\n        position={{\n          // \ub9c8\ucee4\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n          lat: 33.450701,\n          lng: 126.572667,\n        }}\n        image={end}\n        options={{\n          draggable: true, // \ub9c8\ucee4\ub97c \ud074\ub9ad\ud588\uc744 \ub54c \uc9c0\ub3c4\uc758 \ud074\ub9ad \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n          onDragStart: () => setEnd(endDragImage), // \ub9c8\ucee4\uac00 \uc774\ub3d9\ud558\uba74 \uc774\ubbf8\uc9c0\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4\n          onDragEnd: () => setEnd(endImage), // \ub9c8\ucee4\uac00 \uc774\ub3d9\ud558\uba74 \uc774\ubbf8\uc9c0\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4\n        }}\n      />\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}h.isMDXComponent=!0}}]);