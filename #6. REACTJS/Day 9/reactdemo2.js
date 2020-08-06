class App extends React.Component {
    render() {
        var name = "Tushar", city = "Kolkata";
        return (
            <React.Fragment>
                <h1>Hello, {name}</h1>
                <h2>Hello, {city}</h2>
            </React.Fragment>
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"))
