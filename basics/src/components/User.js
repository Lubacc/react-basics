import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    toggleLog = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    
    render() {
        return (
            <div>
                {this.props.render(this.state.isLoggedIn)}{<br></br>}
                <button onClick={this.toggleLog}>Log In</button>
            </div>
        )
    }
}

export default User
