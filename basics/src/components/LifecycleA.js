import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Lubo'
        }
        console.log('Lifecycle A constructor')
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

    changeState = () => {
        this.setState({
            name: 'Coder'
        })
    }
    
    render() {
        console.log('Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        ) 
        
    }
}

export default LifecycleA
