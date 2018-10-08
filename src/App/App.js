import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/NavBar/navbar'
import { history } from '../_helpers/history';
import { alertActions } from '../_actions/alert_actions';
import { PrivateRoute } from '../components/private_route';
import { RegisterPage } from '../components/RegisterPage/register_page';
import { LoginPage } from '../components/LoginPage/login_page'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
                        <Router history={history}>
                            <div>
                            	<Navbar />
                            	<h1>NovelRPG</h1>
                                <Route path="/signup" component={RegisterPage} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);; 
