import React, { Component } from "react";
import logo from '../img/logo.png'
import order from '../img/order.png'
import Slider from "infinite-react-carousel";
import SliderImg1 from '../img/1.png';
import SliderImg2 from '../img/2.png';
import SliderImg3 from '../img/3.png';
import move from '../img/move.png';
const HeaderStyle = {
  header:{
    width: '100%',
    height: '96px',
    background: '#e7e7e7',
    display: 'flex',
    alignItems: 'center',
    justifyContent:' space-between',
    padding: '0px 129px',
    borderBottom: '2px solid #7e8182'
  },
  logo:{
    width: '250px',
    height: '50px'
  },
  navigation: {
    height: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    
  },
  navigationLink: {
    margin: '0px 15px'
  },
  link:{
    color:'#87af24',
    fontSize: '18px',
    textTransform: 'uppercase'
  },
  order:{
    width : '15px',
    height: '15px',
    marginLeft: '10px'
  }
}
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header style={HeaderStyle.header}>
          <div className="logo">
            <img src={logo} alt="" style={HeaderStyle.logo}/>
          </div>
          <nav>
            <ul style={HeaderStyle.navigation}>
              <li style={HeaderStyle.navigationLink}>
                <a style={HeaderStyle.link} href="">{this.props.home}</a>
              </li>
              <li style={HeaderStyle.navigationLink}>
                <a style={HeaderStyle.link} href="">{this.props.about}</a>
              </li>
              <li style={HeaderStyle.navigationLink}>
                <a style={HeaderStyle.link} href="">{this.props.library}</a>
              </li>
              <li style={HeaderStyle.navigationLik}>
                <a style={HeaderStyle.link} href="">{this.props.workers}</a>
              </li>
              <li style={HeaderStyle.navigationLink}>
                <a style={HeaderStyle.link} href="">{this.props.order}
                <img style={HeaderStyle.order} src={order} alt=""/>
                </a>
              </li>
            </ul>
          </nav>
          <div></div> 
      </header>
      <Slider 
        className='slider'
        autoplay={true}
        autoplaySpeed={10000}
        >
          <div style={HeaderStyle.sliderContainer}>
            <img src={SliderImg1} alt="" style={HeaderStyle.sliderImg}/>
          </div>
          <div style={HeaderStyle.sliderContainer}>
            <img src={SliderImg2} alt="" style={HeaderStyle.sliderImg}/>
          </div>
          <div style={HeaderStyle.sliderContainer}>
            <img src={SliderImg3} alt="" style={HeaderStyle.sliderImg}/>
          </div>
          
        </Slider>
        <img src={move} alt="" className="move"/>
      </div>
    );
  }
}

export default Header;
