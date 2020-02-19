import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: "" };
    // }


    //States can be created this way too
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //Using setState to update the state
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    //React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

//                                             Rules of Class Components
//  * Must be a Javascript Class
//  * Must extend (subclass) React.Component
//  * Must define a "render" method that returns some amount of JSX

// -----------------------------------------------------------------------------------------------------

//                                                  Rules of State
//  * Only usable with class components (technically can be used with functional components using "hooks" systems)
//  * You will confuse props with state :(
//  * "State" is a JS object that contains data relevant to a component
//  * Updating "state" on a component cuses the component to (almost) instantly rerender
//  * State must be initializzed when a component is created
//  * STATE CAN ONLY BE UPDATED USING THE FUNCTION "setState"!!!!
