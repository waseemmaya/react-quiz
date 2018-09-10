import React, { Component } from 'react';
import QuizList from "./QuizList"
import QuizInfo from "./QuizInfo"
// import AddForm from "./Components/AddForm"
// import Search from "./Search/Search"
// import swal from 'sweetalert';
import AllQuiz from "./AllQuiz";

class App extends Component {

  constructor() {
    super();
    this.state = {
      showList: true,
      showInfo: false,
      quiz: null,
      enableQuiz: false,
      list: [
        { name: "AngularJS", marks: 30 },
        { name: "React", marks: 90 },
        { name: "Javascript", marks: 50 },
        { name: "BitCoin", marks: 40 },
        { name: "Firebase", marks: 100 }
      ]
    }
    this.enterQuiz = this.enterQuiz.bind(this);
    this.back = this.back.bind(this);
    this.start = this.start.bind(this);
  }

  render() {
    const { showList, list, quiz, showInfo, enableQuiz } = this.state;
    return (
      <div>
        {showList && !showInfo && <QuizList list={list} enterQuiz={this.enterQuiz} />}
        {!showList && showInfo && <QuizInfo quiz={quiz} back={this.back} start={this.start} />}
        {!showList && !showInfo && enableQuiz && <AllQuiz />}
      </div>
    );
  }

  enterQuiz(index) {
    const { list } = this.state
    this.setState({
      showList: false,
      showInfo: true,
      quiz: list[index]
    })
  }

  back() {
    this.setState({
      showList: true,
      showInfo:false,
      enableQuiz: false
    })
  }

  start() {
    this.setState({
      showList: false,
      showInfo: false,
      enableQuiz: true
    })
  }

}

export default App;
