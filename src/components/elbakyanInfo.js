import React, { Component, Fragment } from "react";
import Header from "./Header/Header";
import Language from "./Language";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Block from './block/block';
import pen1 from '../img/pen1.png';
import pen2 from '../img/pen2.png';
import Slider1 from './slider1/Slider1';

class ElabakyanInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activ: true,
    };
  }
  render() {
    return (
      <Fragment>
        <Header
          home={Language[this.props.len].HeaderNav.home}
          about={Language[this.props.len].HeaderNav.about}
          library={Language[this.props.len].HeaderNav.gallery}
          workers={Language[this.props.len].HeaderNav.partners}
          order={Language[this.props.len].HeaderNav.order}
          activ ={this.props.activ}
          len={Language[this.props.len].HeaderNav.order}
        />
        
        <WhyChooseUs
          name={Language[this.props.len].ecopen}
          title={Language[this.props.len].WhyChooseUs}
          ecology={Language[this.props.len].cardText.ecology}
          quality={Language[this.props.len].cardText.quality}
          stylish={Language[this.props.len].cardText.stylish}
        />
        <Block 
          class='block1'
          img={pen1}
        />
        <Block 
          class='block2'
          img={pen2}
        />
        <Slider1 
          title={Language[this.props.len].HeaderNav.gallery}
        />
      </Fragment>
    );
  }
}

export default ElabakyanInfo;
