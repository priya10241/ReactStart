import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'

class Test extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { hello : "World!" }; 
    } 

    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 

    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 

    changeState() 
    { 
        this.setState({ hello : "Geek!" }); 
    } 

    render() 
    { 
        return ( 
            <div> 
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
            <h2> 
            <a onClick={this.changeState.bind(this)}>Press Here!</a> 
            </h2> 
            </div>); 
    } 

    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 

    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 

    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
} 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
