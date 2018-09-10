import React, { Component } from 'react';


class QuizList extends Component {


    render() {
        const { list, enterQuiz } = this.props;
        return (
            <div className="text-center">
                <h3 className='display-3'>Quiz List</h3>
                {list.map((data, index) => {
                    return <div key={index}>
                        <li className="list-group list-group" key={index}>
                        <h4 className='display-5'>{data.name}</h4>
                        </li>
                        <button className="btn btn-success btn-sm" onClick={() => enterQuiz(index)}>
                            Enter the Quiz
                      </button>
                      <br/>
                      <br/>
                    </div>

                })}
            </div>
        );
    }
}

export default QuizList;
