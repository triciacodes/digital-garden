import{j as t}from"./jsx-runtime-670450c2.js";import{S as y}from"./SVGWrapper-e6bf05e2.js";const g={left:"flex-start",right:"flex-end",center:"center",stretch:"space-between"},r=({alignment:a="center",color:l,gap:n,offsetLeft:u=0,offsetRight:i=0,offsetTop:o=0,offsetBottom:m=0,offsetUnit:e="%",opacity:s=1,quantity:d,svg:p,svgWidth:f,svgWidthUnit:c})=>{const v=[...Array(d).keys()];return t("div",{className:"floralGroupContainer",style:{gap:`${n}rem`,justifyContent:`${g[a]}`,marginLeft:`${u}${e}`,marginRight:`${i}${e}`,marginTop:`${o}${e}`,marginBottom:`${m}${e}`,opacity:s},children:v.map(h=>t(y,{color:l,width:f,widthUnit:c,children:p}))})};try{r.displayName="FloralGroup",r.__docgenInfo={description:"",displayName:"FloralGroup",props:{alignment:{defaultValue:{value:"center"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"stretch"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},offsetLeft:{defaultValue:{value:"0"},description:"",name:"offsetLeft",required:!1,type:{name:"number"}},offsetRight:{defaultValue:{value:"0"},description:"",name:"offsetRight",required:!1,type:{name:"number"}},offsetTop:{defaultValue:{value:"0"},description:"",name:"offsetTop",required:!1,type:{name:"number"}},offsetBottom:{defaultValue:{value:"0"},description:"",name:"offsetBottom",required:!1,type:{name:"number"}},offsetUnit:{defaultValue:{value:"%"},description:"",name:"offsetUnit",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"rem"'},{value:'"px"'},{value:'"%"'}]}},opacity:{defaultValue:{value:"1"},description:"",name:"opacity",required:!1,type:{name:"number"}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"ReactNode"}},svgWidth:{defaultValue:null,description:"",name:"svgWidth",required:!1,type:{name:"number"}},svgWidthUnit:{defaultValue:null,description:"",name:"svgWidthUnit",required:!1,type:{name:"enum",value:[{value:'"em"'},{value:'"rem"'},{value:'"px"'},{value:'"%"'}]}}}}}catch{}export{r as F};
//# sourceMappingURL=FloralGroup-404bca6e.js.map
