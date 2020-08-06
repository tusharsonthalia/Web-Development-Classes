class App extends React.Component {
    render() {
        var name = "Tushar";
        return <h1>Hello, {name}</h1>;
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"))
