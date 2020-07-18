import React, { Component, Fragment } from 'react';
import Header from './Header/Header';
import Btn from './btns/Order';
import Language from './Language';


class ElabakyanInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            activ:true
        }
    }
    render(){
        return(
            <Fragment>
                <Header 
                    home={Language[this.props.len].HeaderNav.home}
                    about={Language[this.props.len].HeaderNav.about}
                    library={Language[this.props.len].HeaderNav.labrary}
                    workers={Language[this.props.len].HeaderNav.workers}
                    order={Language[this.props.len].HeaderNav.order}
                
                />
                <Btn startActiv={this.props.activ} name={Language[this.props.len].HeaderNav.order}/>
              </Fragment>
        )
    }
}

export default ElabakyanInfo;