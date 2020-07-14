import React, { Component } from "react";

import './btns.css'

class Btn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn">
          <button>{this.props.name}</button>
      </div>
    );
  }
}

export default Btn;
