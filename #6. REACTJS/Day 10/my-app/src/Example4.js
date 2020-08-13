import React, { Component } from 'react'

export default class Example4 extends Component {
    state = {
        users: [
            {name: "Vedant", city: "Hyderabad"},
            {name: "Tushar", city: "Kolkata"},
            {name: "Dhruv", city: "Delhi"}
        ] 
    }
    render() {
        var l = this.state.users.map((n)=> {
            return <ul>
                        <li>{n.name}, {n.city}</li>
                    </ul>
            
        })
        return (
            <div>
                {l}
            </div>
        )
    }
}
