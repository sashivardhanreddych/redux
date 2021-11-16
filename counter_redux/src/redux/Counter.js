// imports from external dependencies
import React, { Component } from "react";
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props)
            this.state={addNum: ""}
    }
    // Dispatch is used to update the data instantly for the increment counter
  increment = () => {
    this.props.dispatch({type:"INCREMENT"})
  };
    // Dispatch is used to update the data instantly for the increment counter
  decrement = () => {
    this.props.dispatch({type:"DECREMENT"})
  };
  incrementByAmount = () => {
    this.props.dispatch({type:"INCREMENTBYAMOUNT",payload:this.state.addNum})
  };

    // custom increment by using useState
    changeHandler = (e) => {
        this.setState({ [e.target.name]: Number(e.target.value) });
    }

    

  render() {
    //   console.log(".......",(this.state.addNum))
    return (
      <div className = "container">
        <h2>Counter</h2>
        <div class="block_con">
          <div className="block_con">
            <button onClick={this.decrement}>-</button>
          </div>
          <div className="block_con">
            <span>{this.props.count}</span>
          </div>
          <div className="block_con">
            <button onClick={this.increment}>+</button>
          </div><br/>
          <div class="input_con">
            <input type="number" min="0" max="100" name="addNum" value={this.state.addNum} onChange={(e)=>this.changeHandler(e)}/>
          </div>
          <div className="btn_down_con">
            <button onClick={this.incrementByAmount}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
    console.log(state);
    return{
        count:state.count
    }
}
export default connect(mapStateToProps)(Counter)
