import React, { Component } from 'react'
import Hero from './Hero'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children //This refers to the component we are rendering - App.js
    }
}

export default ErrorBoundary
