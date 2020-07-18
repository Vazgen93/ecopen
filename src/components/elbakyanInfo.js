import React, { Component, Fragment } from "react";
import Header from "./Header/Header";

import Language from "./Language";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

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
        />
        
        <WhyChooseUs
          name={Language[this.props.len].ecopen}
          title={Language[this.props.len].WhyChooseUs}
          ecology={Language[this.props.len].cardText.ecology}
          quality={Language[this.props.len].cardText.quality}
          stylish={Language[this.props.len].cardText.stylish}
        />
      </Fragment>
    );
  }
}

export default ElabakyanInfo;
