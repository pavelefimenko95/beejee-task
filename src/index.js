import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import store from './store';
import Header from './components/containers/Header';
import IndexRoutes from './routes';
import '../assets/styles/index.sass';
import 'react-notifications/lib/notifications.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <IndexRoutes />
                    <NotificationContainer />
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));