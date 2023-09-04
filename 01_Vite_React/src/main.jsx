/* eslint-disable no-undef */
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
import React from 'react'

function MyApp() {
    return (
        <div>
           <h1>Custom APP</h1> 
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     childern: 'Clicked me to visit Google'
// }


const anotherElement = (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href="https://google.com" target='_blank'>
        Visit Google
    </a>
)

const anotherUser = "chai aur React@@@";


// eslint-disable-next-line no-unused-vars
const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to visit google',
     anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
       reactElement
    // anotherElement
    // ReactElement
    //  <MyApp />
    // MyApp()
    // <App />

)
