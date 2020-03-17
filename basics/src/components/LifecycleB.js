import React, { Component } from 'react'
class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Lubo'
        }
        console.log('LifecycleB constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
    }
    
    componentDidUpdate() {
        console.log('ComponentDidUpdate')
    }

    render() {
        console.log('Render')
        return <div>LifecycleB</div>
        
    }
}

export default LifecycleB
