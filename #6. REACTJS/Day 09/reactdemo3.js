function App(props) {
    return <h2>Hello, {props.name}!</h2>;
}

class Student extends React.Component{
    render() {
        return (
            <React.Fragment>
                <App name="Tushar"/>
                <App name="Dhruv"/>
                <App name="Vedant"/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Student/>, document.getElementById("root"));
