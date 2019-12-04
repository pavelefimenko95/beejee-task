import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/index.sass';

class App extends Component {
    render() {
        return (
            <>
                Hello World
            </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));