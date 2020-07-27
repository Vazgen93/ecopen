import React, { Component } from "react";
import './slider2.css'
import Slider from "infinite-react-carousel";
import ParentsImg from './ParentsImg'

class Slider2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
          <div className="slider2">
            <div className="slider2_title">
              <h2>{this.props.title}</h2>
            </div>
          <Slider
      
            slidesToShow={5}
            className='slider_2'
            centerMode={true}
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
          >
            {ParentsImg.map(res => {
              const bg = {
                backgroundImage: `url(${res})`
              }

              return <div className='slider_img' key='slider2'> 
              <img src={res} alt=""/>
              </div>
              
            })}
            
            
           
            
          </Slider>
          </div>
      </div>
    );
  }
}

export default Slider2;