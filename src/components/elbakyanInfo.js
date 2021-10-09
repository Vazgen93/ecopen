import React, { Component, Fragment } from "react";
import Header from "./Header/Header";
import Language from "./Language";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Block from './block/block';
import pen1 from '../img/pen1.png';
import pen2 from '../img/pen2.png';
import pen3 from '../img/pen3.png';
import pen4 from '../img/pen4.png';
import Slider1 from './slider/Slider1';
import Slider2 from './slider/Slider2';
import Footer from './footer/Footer'

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
        {/*<Block */}
        {/*  class='block-1'*/}
        {/*  img={pen1}*/}
        {/*  text={Language[this.props.len].text1}*/}
        {/*/>*/}
        <Block 
          class='block-2'
          img={pen2}
          text={Language[this.props.len].text2}
        />
        
        <Slider1 
          title={Language[this.props.len].HeaderNav.gallery}
        />
        <Block 
          class='block-3'
          img={pen3}
          text={Language[this.props.len].text2}
        />
        <Block 
          class='block-4'
          img={pen4}
          text={Language[this.props.len].text2}
        />
        <Slider2 
          title={Language[this.props.len].HeaderNav.partners}
        />
        <Footer 
          addres={Language[this.props.len].addres}
          mail={Language[this.props.len].mail}
          tel={Language[this.props.len].tel}
        />
      </Fragment>
    );
  }
}

export default ElabakyanInfo;
