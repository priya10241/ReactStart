let rootElement = document.querySelector("#root");

function rendorElement(reactElement,rootElement){
    let newElement = document.createElement(reactElement.tag);
    // newElement.setAttribute('href',reactElement.props.href);
    //newElement.setAttribute('target',reactElement.props.target);
    // newElement.innerHTML = reactElement.children;

    for(prop in reactElement.props){
        newElement.setAttribute(prop,reactElement.props[prop]);
    }
    newElement.innerHTML = reactElement.children;
    rootElement.appendChild(newElement);
}


const reactElement = {
    tag : 'a',
    props:{
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'click me!'
};

rendorElement(reactElement,rootElement);