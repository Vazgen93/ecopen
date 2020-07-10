import React,{Component, Fragment} from 'react';

class Test extends Component{
    constructor(props){
        super(props)

        this.state = {
            obj:this.props.data,
            x:'hi'
        }
    }
    
        componentDidUpdate(a,b,c){
            // console.log(a,b,c);
            // console.log(a.data !==b.obj);
            
            if(a.data !== b.obj){
                this.setState(data=>({obj:a.data}))
                // this.setState(inf =>({}))
            }
            // console.log(b);
            
            
        }

        shouldComponentUpdate(nextProps, nextState){
            if(this.state.obj !== nextState.obj){
                console.log('state');
                return true
            }

            if(this.props.data !== nextProps.data){
                console.log('props');
                return true
                
            }
            // console.log(nextProps);
            console.log('false');
            
            return false 
        
        }

    render(){
        return(
            <Fragment>
            <h1>{this.state.obj}</h1>
            <h1>{this.props.data}</h1>
            </Fragment>
        )
    }
}

export default Test;