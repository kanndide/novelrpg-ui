import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/user_actions';

class HomePage extends React.Component {

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.email}!</h1>
                <p>You're logged in with React!!</p>
                <button onClick={this.handleDeleteUser(user.id)}>Delete</button>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return { user: state.authentication.user }
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };