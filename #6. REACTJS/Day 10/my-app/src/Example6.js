import React, { Component } from 'react';
// loading the react router package
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Demo5 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Sample Single Page Application</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Comtact Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <p>This is the Home Page.</p>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <p>This is the About Us Page.</p>
            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <p>This is the Contact Us Page.</p>
            </div>
        )
    }
}