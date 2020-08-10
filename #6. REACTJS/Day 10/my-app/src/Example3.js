import React, { Component } from 'react'

export default class Example3 extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: "Tushar",
            city: "Kolkata"
        }
        // Ref to constructor by using the bind method
        this.show = this.show.bind(this);
    }
    // Reference to the constructor and the user defined by using the arrow function
    // show=()=> {
    //     this.setState({
    //         city: "Mumbai"
    //     });
    //     console.log("Hi" + this.state.name + ", welcome to" + this.state.city);
    // }

    show() {
        this.setState({
            city: "Mumbai"
        });
        console.log("Hi" + this.state.name + ", welcome to" + this.state.city);
    }    

    render() {
        return (
            <div>
                <button onClick={this.show}>Click Me!</button>
            </div>
        )
    }
}
