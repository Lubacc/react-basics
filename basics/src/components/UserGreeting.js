import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }

    //Extended the exercise with a toggle button
    clickToggle = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {

        return(
            <div>
                <div>{this.state.isLoggedIn ? <div>Welcome Lubo</div> :
                <div>Welcome User</div>}</div>
                <button onClick={() => this.clickToggle()}>Log In</button>
            </div>
            
        )

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Lubo</div>
        // }
        // else {
        //     message =  <div>Welcome User</div>
        // }

        // return(
        //         <div>
                    
        //             <div>{message}</div>
        //             <button onClick={() => this.clickToggle()}>Log In</button>
        //         </div>
        //      )
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //              <button onClick={() => this.clickToggle()}>Log In</button>
        //             <div>Welcome Lubo</div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <button onClick={() => this.clickToggle()}>Log In</button>
        //             <div>Welcome User</div>
        //         </div>
        //     )
        // }
       
    }
}

export default UserGreeting
