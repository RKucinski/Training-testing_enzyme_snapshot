import React, { Component } from "react";

class Newbutton extends Component {
  render() {
    const { actualize } = this.props;
    return (
      <div>
        <button onClick={actualize}>New advice</button>
      </div>
    );
  }
}

export default Newbutton;
