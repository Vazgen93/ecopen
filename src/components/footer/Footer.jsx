import React, { Component } from "react";
import './footer.css'
import footerBg from '../../img/footer.png'


class F extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer>
            <img src={footerBg} alt=""/>
            <div className="footer_contacts">
          <h2>{this.props.addres}</h2>
              <p>Rafu 19</p>
              <h2>{this.props.mail} </h2>
              <p>info@ecopen.am</p>
              <h2>{this.props.tel}</h2>
              <p>+374 33 88 88 34</p>
              
            </div>
        </footer>
    );
  }
}

export default F;