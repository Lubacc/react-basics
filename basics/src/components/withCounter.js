import React from 'react';

const withCounter = (WrapedComponent, incrementNumber) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState((prevState) => {
                return {count: prevState.count + incrementNumber}
            })
        }
    
        render() {

            console.log(this.props.name)
            return <WrapedComponent 
            count={this.state.count} incrementCount={this.incrementCount}
            {... this.props} //Passing down the rest of the props so name will be accessible in ClickCounter
            />
        }
    }
    return WithCounter
}

export default withCounter