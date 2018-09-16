import React, { Component } from "react";
import QuizList from "./QuizList";
import QuizInfo from "./QuizInfo";
// import swal from 'sweetalert'
// import AddForm from "./Components/AddForm"
// import Search from "./Search/Search"
// import swal from 'sweetalert';
import AllQuiz from "./AllQuiz";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizIndex: null,
      showList: true,
      showInfo: false,
      quiz: null,
      enableQuiz: false,
      list: [
        {
          name: "AngularJS",
          marks: 60,
          eachQuiz: [
            {
              question: "What is AngularJS?",
              answers: {
                ans1: "Library",
                ans2: "Backend Scripting",
                ans3: "Frond End Programing"
              },
              correctAnswer: "Library"
            },
            {
              question: "Who created Angular?",
              answers: {
                ans1: "Sir Kashif",
                ans2: "Microsoft",
                ans3: "Me"
              },
              correctAnswer: "Sir Kashif"
            }
          ]
        },
        {
          name: "React",
          marks: 90,
          eachQuiz: [
            {
              question: "What is React?",
              answers: {
                ans1: "Programming Language",
                ans2: "Framework",
                ans3: "View Library"
              },
              correctAnswer: "View Library"
            },
            {
              question: "React is mostly used for?",
              answers: {
                ans1: "PWA",
                ans2: "SPA",
                ans3: "MPA"
              },
              correctAnswer: "SPA"
            },
            {
              question: "Who created React?",
              answers: {
                ans1: "Google",
                ans2: "Microsoft",
                ans3: "Facebook"
              },
              correctAnswer: "Facebook"
            }
          ]
        },
        {
          name: "Javascript",
          marks: 60,
          eachQuiz: [
            {
              question: "What is Javascript?",
              answers: {
                ans1: "API",
                ans2: "Compiler",
                ans3: "Scripting Language"
              },
              correctAnswer: "Scripting Language"
            },
            {
              question: "Who created Javascript?",
              answers: {
                ans1: "Google",
                ans2: "Robert Henry",
                ans3: "MDN"
              },
              correctAnswer: "MDN"
            }
          ]
        }
      ],
    };
    this.enterQuiz = this.enterQuiz.bind(this);
    this.back = this.back.bind(this);
    this.back2 = this.back2.bind(this);

    this.start = this.start.bind(this);
  }

  render() {
    const { showList, list, quiz, showInfo, enableQuiz, quizIndex } = this.state;
    return (
      <div>
        {showList &&
          !showInfo && <QuizList list={list} logout={this.logout} enterQuiz={this.enterQuiz} />}
        {!showList &&
          showInfo && (
            <QuizInfo quiz={quiz} list={list} quizIndex={quizIndex} back={this.back} start={this.start} />
          )}
        {!showList && !showInfo && enableQuiz && <AllQuiz back2={this.back2} quizIndex={quizIndex} list={list} />}
      </div>
    );
  }

  enterQuiz(index) {
    const { list } = this.state;
    this.setState({
      showList: false,
      showInfo: true,
      quiz: list[index],
      quizIndex: index
    });
  }


  back() {
    this.setState({
      showList: true,
      showInfo: false,
      enableQuiz: false
    });
  }

  back2() {
    // console.log('back2');

    this.setState({
      showList: false,
      showInfo: true,
      enableQuiz: false
    });
  }

  start() {
    this.setState({
      showList: false,
      showInfo: false,
      enableQuiz: true
    });

    // console.log("quiz Index", this.state.quizIndex);
  }
}

export default App;
