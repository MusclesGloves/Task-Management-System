import React, { Component } from 'react'
import {connect} from 'react-redux'

import LoginForm from '../components/LoginForm';

import {login as loginThunk} from '../redux/Users';

import styles from './Login.module.css';

class Login extends Component {
    render() {
        const { login } = this.props

        return (
        <>
            <div className={styles.background} >
                <img className={styles.TaskImg} src='/TaskMainImg.png'></img>
                <LoginForm onSubmit={login}/>
            </div>
        </>
        );
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginThunk(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(Login)