import React, { Component } from 'react';
import swal from 'sweetalert';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <div className="container text-center">
                <button className="btn btn-dark mt-3" onClick={this.props.renderLogin}>
                    Login
            </button>
                <h3 className="display-4 mb-3 text-center">Signup</h3>

                <div className="form-group">
                    <input
                        required
                        defaultValue={this.state.username}
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="User Name"
                        onChange={this.handleName}
                    />
                </div>
                <div className="form-group">
                    <input
                        required
                        defaultValue={this.state.email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleEmail}
                    />
                </div>
                <div className="form-group">
                    <input
                        required
                        defaultValue={this.state.password}
                        type="password"
                        name="password"
                        className="form-control"
                        id="password1"
                        placeholder="Password"
                        onChange={this.handlePassword}
                    />
                </div>
                <button className="btn btn-primary" onClick={this.HandleSignup}>
                    Signup
            </button>
            </div>
        );
    }

    handleEmail = email => {
        this.setState({
            email: email.target.value
        });
    };

    handleName = username => {
        this.setState({
            username: username.target.value
        });
    };

    handlePassword = password => {
        this.setState({
            password: password.target.value
        });
    };

    HandleSignup = () => {
        const { username, email, password } = this.state;
        const { renderLogin } = this.props;
        if (username.length < 1 && email.length < 1 && password.length < 1) {
            swal("Error", "Please fill out required fields", "warning")
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("email", email);
            swal("Good job!", "Sign Up", "success").then((val) => {
                renderLogin();
            })

        }

    };



}

export default Signup;