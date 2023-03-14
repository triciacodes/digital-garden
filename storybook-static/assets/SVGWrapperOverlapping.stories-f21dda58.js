import{j as r}from"./jsx-runtime-670450c2.js";import{S as m}from"./SVGWrapper-e6bf05e2.js";import{S as u}from"./leaves-fill-a20c1a25.js";import{S as v}from"./leaves-outline-44e5f82e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./colors-69fb553a.js";const a=({colors:t,svgs:o,...n})=>o?r("div",{className:"svgWrapperOverlappingContainer",children:o.map((i,c)=>r(m,{color:t[c],...n,children:i}))}):null;try{a.displayName="SVGWrapperOverlapping",a.__docgenInfo={description:"",displayName:"SVGWrapperOverlapping",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},widthUnit:{defaultValue:null,description:"",name:"widthUnit",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"rem"'},{value:'"px"'},{value:'"%"'}]}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"string[]"}},svgs:{defaultValue:null,description:"",name:"svgs",required:!0,type:{name:"ReactNode[]"}}}}}catch{}const G={title:"Components/SVGWrapperOverlapping",component:a,args:{width:10,widthUnit:"em"}},e={args:{colors:["var(--color-tertiary)","var(--color-primary)"],svgs:[r(u,{}),r(v,{})]}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    colors: ["var(--color-tertiary)", "var(--color-primary)"],
    svgs: [<LeavesFillSVG />, <LeavesOutlineSVG />]
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};e.parameters={storySource:{source:`{
  args: {
    colors: ["var(--color-tertiary)", "var(--color-primary)"],
    svgs: [<LeavesFillSVG />, <LeavesOutlineSVG />]
  }
}`},...e.parameters};const _=["LeavesOverlap"];export{e as LeavesOverlap,_ as __namedExportsOrder,G as default};
//# sourceMappingURL=SVGWrapperOverlapping.stories-f21dda58.js.map
