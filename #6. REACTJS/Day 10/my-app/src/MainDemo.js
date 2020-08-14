import React, { Component } from 'react'
import UserDemo from './UserDemo'

export default class MainDemo extends Component {
    state = {
        toggle: true
    }
    show=()=> {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    render() {
        return (
            <div>
                {this.state.toggle?<UserDemo/>:null}
                <button onClick={this.show}>Delete User</button>
            </div>
        )
    }
}
