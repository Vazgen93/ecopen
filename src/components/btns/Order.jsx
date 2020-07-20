import React, { Component } from "react";
// import App from '../../App';
import './btns.css'

class Btn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activ:false
    }
  }

  render() {
    return (
      <div className="bttn">
          <button onClick={this.props.startActiv}>{this.props.name}</button>
         
      </div>
    );
  }
}

export default Btn;
