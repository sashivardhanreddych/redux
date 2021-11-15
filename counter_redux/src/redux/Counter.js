import React, { Component } from "react";
import {connect} from 'react-redux';

class Counter extends Component {
  increment = () => {
    this.props.dispatch({type:"INCREMENT"})
  };

  decrement = () => {
    this.props.dispatch({type:"DECREMENT"})
  };

  render() {
    return (
      <div className = "container">
        <h2>Counter</h2>
        <div class="block_con">
          <div className="btn_con">
            <button onClick={this.decrement}>-</button>
          </div>
          <div className="display_con">
            <span>{this.props.count}</span>
          </div>
          <div className="btn_con">
            <button onClick={this.increment}>+</button>
          </div><br/>
          <div>
            <input type="number" min="0" max="100"/>
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
