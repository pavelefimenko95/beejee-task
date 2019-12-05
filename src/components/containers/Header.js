import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import Button from '../UI/Button';
import { logout } from '../../actions/auth';

class Header extends Component {
    render() {
        let { auth, actions } = this.props;

        return (
            <div className="header">
                <div className="row container">
                    <nav className="col-8">
                        <Link className="header__link" to="/">
                            <Button
                                text="Home"
                                style="dark"
                            />
                        </Link>
                        {!auth.isAuthenticated &&
                            <Link to="/login">
                                <Button
                                    text="Sign in"
                                    style="dark"
                                />
                            </Link>
                        }
                    </nav>
                    <div className="header__logout-icon col-4">
                        {auth.isAuthenticated && <IoIosLogOut onClick={() => actions.logout()} size={30} className="header__logout-icon__icon" />}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        logout
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);