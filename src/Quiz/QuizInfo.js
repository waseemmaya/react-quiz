import React, { Component } from 'react';

class QuizInfo extends Component {

    render() {
        const { back, quiz, start } = this.props;
        return (
            <div className="container mt-3 text-center">
                <h1 className="display-3">Quiz Info</h1>
                <h3 className="display-5">Quiz Name :  {quiz.name}</h3>
                <h3 className="display-5">Total Marks : {quiz.marks}</h3>
                <button className="btn btn-info btn-lg mt-3" onClick={back}>Back to Quizzes</button>
                <button className="btn btn-dark btn-lg ml-3 mt-3" onClick={start}>Start Quiz</button>
            </div>
        );
    }
}

export default QuizInfo;
