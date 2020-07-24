import React, { Component } from "react";
import './block.css'


class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
       <div className={this.props.class}>
           <img src={this.props.img} alt=""/>
           <div className="content">
                {this.props.text}
           </div>
       </div>
      </div>
    );
  }
}

export default Block;
