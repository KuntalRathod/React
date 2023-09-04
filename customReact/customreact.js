function customRender(reactElement, container) {
 /*   
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

 */
    
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        }
    container.appendChild(domElement);
    
}    
    //container.appendChild(domElement);


    
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern:'Clicked me to visit Google'
}



const MainContainer = document.querySelector('#root');

customRender(reactElement,MainContainer)

