import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Get Out and Vote!</h3>
            <label>
              Today’s the day to use your civic voice. San José strong encourages you to vote and stay engaged in local, state and national politics!
            </label>
            < br />
            <a href='https://www.sccgov.org/sites/rov/VBM/Pages/VoteEarly.aspx#SJ'>Find local voting sites and official ballot drop off locations here</a>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
