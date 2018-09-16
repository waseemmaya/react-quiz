import React, { Component } from "react";
import swal from 'sweetalert'

class AllQuiz extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }
  render() {
    const { list, quizIndex, back2 } = this.props;
    return (
      <div className="container text-center">
        <h4 className='display-4 mt-3'>Hi! {localStorage.getItem('username')}</h4>

        <button className="btn btn-info btn-lg mt-3" onClick={back2}>Back</button>
        <h1 className="display-3 mb-3">Quiz Test</h1>
        <form>
          {list[quizIndex].eachQuiz.map((data, index) => {
            // console.log("index", index);

            return (
              <div key={"Question" + index}>
                <h1>{data.question}</h1>
                <div className="radio">
                  <label>
                    <input
                      onChange={(event) => this.handleCheck(event, index)}
                      ref={"q" + index}
                      name={"q" + index}
                      type="radio"
                      value={data.answers.ans1}
                    />
                    {data.answers.ans1}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      onChange={event => this.handleCheck(event, index)}

                      ref={"q" + index}
                      name={"q" + index}
                      type="radio"
                      value={data.answers.ans2}
                    />
                    {data.answers.ans2}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      onChange={event => this.handleCheck(event, index)}

                      ref={"q" + index}
                      name={"q" + index}
                      type="radio"
                      value={data.answers.ans3}
                    />
                    {data.answers.ans3}
                  </label>
                </div>
              </div>
            );
          })}
          <button className="btn btn-success btn-lg mt-3" type="submit" onClick={this.handleSubmit}>
            Submit Quiz
          </button>
        </form>


      </div>
    );
  }




  handleCheck(event, index) {
    var { score } = this.state;
    const { list, quizIndex } = this.props;

    // list[quizIndex].eachQuiz
    const val = event.target.value;


    if (val === list[quizIndex].eachQuiz[index].correctAnswer) {
      // console.log('correct');
      score++;
      this.setState({
        score
      })

    }

  }




  handleSubmit(e) {

    e.preventDefault();

    const { list, quizIndex } = this.props;
    // list[quizIndex].eachQuiz

    let result = `
          Your Score is ${this.state.score * 30}/${list[quizIndex].eachQuiz.length * 30}
    `
    // let initScore = 0;
    swal(result);
    // swal("Your Score is " + this.state.score + "/ " + list[quizIndex].eachQuiz.length);
    this.setState({
      score: 0
    })



    return false;


  }
}

export default AllQuiz;
