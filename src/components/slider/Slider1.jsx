import React, { Component } from "react";
import './slider1.css'
import Slider from "infinite-react-carousel";
import prev from '../../img/prev.png';
import img1 from '../../img/order.png'
import Galery from './Galery'

class Slider1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
          <div className="slider1">
            <div className="slider1_title">
              <h2>{this.props.title}</h2>
            </div>
          <Slider
            ref={c => (this.slider = c)}
            slidesToShow={5}
            className='slider_1'
            centerMode={true}
          >
            {Galery.map(res => {
              const bg = {
                backgroundImage: `url(${res})`
              }
              
              return <div className='slider_img' key='slider1'> 
              <img src={res} alt=""/>
              </div>
              
            })}
            
            
           
            
          </Slider>
          </div>
      </div>
    );
  }
}

export default Slider1;