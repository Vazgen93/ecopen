import React, { Component } from "react";
import logo from '../img/logo.png'
import order from '../img/order.png'
import Slider from "infinite-react-carousel";
const HeaderStyle = {
  header:{
    width: '100%',
    height: '96px',
    background: '#e7e7e7',
    display: 'flex',
    'align-items': 'center',
    'justify-content':' space-between',
    padding: '0px 129px'
  },
  logo:{
    width: '280px',
    height: '66px'
  },
  navigation: {
    height: '100%',
    display: 'flex',
    'justify-content':'center',
    'align-items': 'center',
    
  },
  navigationLink: {
    margin: '0px 15px'
  },
  link:{
    color:'#83ad1d',
    'font-size': '18px',
    'text-transform': 'uppercase'
  },
  order:{
    width : '15px',
    height: '15px',
    'margin-left': '10px'
  }
}
class Header extends Component {
  constructor(props) {
    super(props);

    this.state={
      leng:0
    }
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
          <div className="langauge">
            <select name="" id="">
              <option id="0" value="AM">AM</option>
              <option id="1" value="EN">EN</option>
              <option id="2" value="RU">RUS</option>
            </select>
          </div>
      </header>
      <Slider 
        className='slider'
        dots 
        autoplay='true'
        autoplaySpeed='10000'

        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Header;
