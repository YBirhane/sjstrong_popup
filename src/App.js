import React from "react";
import PopUp from "./PopUp";

export default class App extends React.Component {
  state = {
    seen: true
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
      <div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
