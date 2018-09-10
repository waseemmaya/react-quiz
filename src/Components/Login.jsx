import React, { Component } from 'react';
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

    }
    render() {
        return (
            <div className="container text-center">
            <button className="btn btn-dark mt-3" onClick={this.props.renderSignup}>
                    Signup
            </button>
                <h3 className="display-4 mb-3 text-center">Login</h3>

                <div className="form-group">
                    <input
                        required
                        value={this.state.email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="email"
                        onChange={this.handleEmail}
                    />
                </div>
                <div className="form-group">
                    <input
                        required
                        value={this.state.password}
                        type="password"
                        name="password"
                        className="form-control"
                        id="password1"
                        placeholder="Password"
                        onChange={this.handlePassword}
                    />
                </div>
                <button className="btn btn-primary" onClick={this.HandleLogin}>
                    Login
            </button>
            </div>
        );
    }

    handleEmail = email => {
        // const { email } = this.state;

        this.setState({
            email: email.target.value
        });
        console.log(this.state.email);
    };

    handlePassword = password => {
        // const { password } = this.state;



        this.setState({
            password: password.target.value
        });
        console.log(this.state.password);
    };

    HandleLogin = () => {
        const { email, password } = this.state;
        const { redirectQuiz } = this.props;
        let localPassword = localStorage.getItem('password');
        let localEmail = localStorage.getItem('email');
        if (email === localEmail && password === localPassword) {
            swal("Good job!", "Log in Successfully", "success").then((val) => {
                redirectQuiz();
            })
        } else {
            swal("", "Failed", "error");
        }
    };



}

export default Login;