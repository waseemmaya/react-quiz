import React, { Component } from 'react';

class AllQuiz extends Component {
    constructor() {
        super();
        this.state = {
            allQuiz: [
                {
                    question: "Who is the strongest?",
                    answers: {
                        a: "Superman",
                        b: "The Terminator",
                        c: "Waluigi, obviously"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "What is the best site ever created?",
                    answers: {
                        a: "SitePoint",
                        b: "Simple Steps Code",
                        c: "Trick question; they're both the best"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Where is Waldo really?",
                    answers: {
                        a: "Antarctica",
                        b: "Exploring the Pacific Ocean",
                        c: "Sitting in a tree",
                        d: "Minding his own business, so stop asking"
                    },
                    correctAnswer: "d"
                }
            ]
        }
    }
    render() {
        return (
            <div className="container text-center">
                <h1 className="display-3 mb-3">Quiz Test</h1>
                {this.buildQuiz()}
            </div>
        )
    }

    buildQuiz() {
        const { allQuiz } = this.state;
        return (
            allQuiz.map((data, qNum) => {
                return (
                    <div className="container float-left" key={qNum}>
                        <h5 className="display-5">{data.question}</h5>
                        <div className="form-check-inline">
                            <label className="form-check-inline">
                                <input type="radio" className="form-check-input" name="optradio" />{data.answers.a}
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-inline">
                                <input type="radio" className="form-check-input" name="optradio" />{data.answers.b}
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-inline">
                                <input type="radio" className="form-check-input" name="optradio" />{data.answers.c}
                            </label>
                        </div>
                    </div>

                )
            })
        )
    }


}

export default AllQuiz;