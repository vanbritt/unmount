import React, { Component } from 'react'
import Content from './Content';

class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state= {
            data:0
        };
        this.setNewValue = this.setNewValue.bind(this);
    }
    setNewValue(){
        this.setState({
            data : this.state.data + 1
        });
    }
    componentWillUnmount(){
        setInterval(()=>{
            ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        }, 5000);
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewValue}></button>
                <Content Number= {this.state.data}/>
                
            </div>
        )
    }
}

export default LifeCycle
