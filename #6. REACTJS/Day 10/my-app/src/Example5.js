import React, { Component } from 'react'

export default class Example5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'user'
        }
    }

    handlefun=(e)=> {
        this.setState({
            name: e.target.value
        })
    } 

    show=()=> {
        console.log("Value is:", this.state.name);
    }
    
    render() {
        return (
            <div>
                <label>Enter Name</label>
                <input name="uname" type="text" onChange={this.handlefun}/>
                <button onClick={this.show}>Submit!</button>
                <h1>Hi, {this.state.name}</h1>
            </div>
        )
    }
}
