import React, { Component } from 'react'

export default class Example extends Component {

    // creating the state inside the class constructor
    constructor(props) {
        super(props)
        this.state={
            qualification:"B.Sc",
            city: "Kolkata"
        }
    }
    // directly creating state inside the class 
    // state={
    //     qualification:"B.Sc"
    // }

    render() {
        return (
            <div>
                <h1>Welcome{this.props.children} is {this.props.name}</h1>
            <h2>{this.state.qualification} {this.state.city}</h2>
            </div>
        )
    }
}
