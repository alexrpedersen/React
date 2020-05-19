  
import React from "react";
import ReactDOM from "react-dom";
import "../app.scss";
import App from "../src/app.js";

class Main extends React.Component {

    render() {
        return <App />
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);