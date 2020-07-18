import React, { Component } from "react";
import ecology from '../../img/ecology.png'
import quality from '../../img/quality.png'
import stylish from '../../img/stylish.png'
import './style.css'

class WhyChooseUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
          <div className="WhyChooseUs">
             <div className="title">
                <h2>{this.props.title}</h2>
                <span> {this.props.name}?</span>
             </div>
             <div className="content">
                 <div className="card">
                     <p>{this.props.ecology}</p>
                     <img src={ecology} alt=""/>
                 </div>
                 <div className="card">
                     <p>{this.props.quality}</p>
                     <img src={quality} alt=""/>
                 </div>
                 <div className="card">
                     <p>{this.props.stylish}</p>
                     <img src={stylish} alt=""/>
                 </div>
             </div>
          </div>
      </div>
    );
  }
}

export default WhyChooseUs;
