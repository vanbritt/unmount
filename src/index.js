import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Content from './Content';

class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state= {
            data:0
        };
        this.setNewValue = this.setNewValue.bind(this);
        setTimeout(()=>{
          ReactDOM.unmountComponentAtNode(document.getElementById('root'))
      }, 5000);
    }
    setNewValue(){
        this.setState({
            data : this.state.data + 1
        });
    }
    componentWillUnmount(){
      
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewValue}>Click</button>
                <Content Number= {this.state.data}/>
                
            </div>
        )
    }
}

ReactDOM.render(<LifeCycle/>, document.getElementById('root'));


