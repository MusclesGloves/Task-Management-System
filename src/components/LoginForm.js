import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {reduxForm , Field} from 'redux-form';
import styles from './loginForm.module.css';


class LoginForm extends Component {
    render() {
        const {handleSubmit } = this.props
        return (
            <form className={styles.FormCard} onSubmit={handleSubmit}>
                <h3 className={styles.Login}>LOGIN</h3>
                <div className="form-group p-2">
                    <label>EMAIL ADDRESS</label>
                    <Field type="email" name="email" placeholder="Enter your email" className="form-control" component="input"/>
                </div>
                <div className="form-group p-2">
                    <label>PASSWORD</label>
                    <Field type="password" name="password" placeholder="Enter your password" className="form-control" component="input"/>
                </div>
                <div className={styles.Submit}>
                    <button type="submit" className="btn btn-primary btn-block mb-3">Submit</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        )
    }
}


export default reduxForm({
    form:'login',
})(LoginForm)