import React, { Component } from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Quiz from "./Quiz/Quiz";

// form : true,
// isLoggedin: false,
//   quizBoard: false

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      isLoggedin: false,
      quizBoard: false
    }
    this.renderLogin = this.renderLogin.bind(this);
    this.renderSignup = this.renderSignup.bind(this);
    this.redirectQuiz = this.redirectQuiz.bind(this);
  }

  render() {
    const { isLoggedin, quizBoard, form } = this.state;
    return (
      <div>
        {!isLoggedin && form && <Signup renderLogin={this.renderLogin} />}
        {isLoggedin && form && <Login renderSignup={this.renderSignup} redirectQuiz={this.redirectQuiz} />}
        {isLoggedin && !form && quizBoard && <Quiz />}
      </div>
    );
  }

  renderLogin() {
    this.setState({
      isLoggedin: true
    })
  }

  renderSignup() {
    this.setState({
      isLoggedin: false
    })
  }

  redirectQuiz() {
    this.setState({
      quizBoard: true,
      form: false
    })
  }

}

export default App;
