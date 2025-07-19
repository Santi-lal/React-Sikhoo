//import { Children } from "react"
function customRender(reactElement,container){
   /* const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);
    */
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    for(const prop in reactElement.props){//for in loop better for key value pairs [for (let key in object)]
        if(prop==='Children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
         href:'https://google.com',
         target: '_blank',     
    },
    Children:'click me to visit Google'

}

const mainContainer=document.getElementById('root')
customRender(reactElement,mainContainer)
