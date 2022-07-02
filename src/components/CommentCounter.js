import React from 'react';

export class CommentCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodCommentAdded = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralCommentAdded = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badCommentAdded = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  //   countTotalFeedback()
  // countPositiveFeedbackPercentage()

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>

        {/* feedback */}
        <div>
          <button type="button" onClick={this.goodCommentAdded}>
            Good
          </button>
          <button type="button" onClick={this.neutralCommentAdded}>
            Neutral
          </button>
          <button type="button" onClick={this.badCommentAdded}>
            Bad
          </button>
        </div>

        <h2>Statistic</h2>
        {/* Amount */}
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          {/* <p>Total: { }</p> */}
          {/* <p>Positive feedback: { }%</p> */}
        </div>
      </>
    );
  }
}
