import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/user_actions';
import CharactersPage from '../Character/character_page';
import { DeleteButton } from '../public/delete_button';
import { LogoutButton } from '../public/logout_button';
import { UserCard } from '../User/user_card'

class HomePage extends React.Component {

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-12">
            	<div className="col-md-6">
                    <UserCard user={user} />
                    <DeleteButton props={this.handleDeleteUser(user.id)}/>
                    <LogoutButton />
	            </div>
                <div className="col-md-6">
                	<CharactersPage />
            	</div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
	return { user: state.authentication.user, characters: state.authentication.characters }
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };