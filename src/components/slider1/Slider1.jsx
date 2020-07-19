import React, { Component } from "react";
import './slider1.css'
import Slider from "infinite-react-carousel";
import prev from '../../img/prev.png';
import img1 from '../../img/order.png'
const SliderImg =[
  img1,
  img1,
  img1,
  img1,
  img1,
  img1
]

class Slider1 extends Component {
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
            ref={c => (this.slider = c)}
            slidesToShow={5}
            className='slider_2'
            centerMode={true}
            centerPadding={0}
          >
            {SliderImg.map(res => {
              const bg = {
                backgroundImage: `url(${res})`
              }
              console.log(bg.backgroundImage);
              
              return <div className='slider_img'> 
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