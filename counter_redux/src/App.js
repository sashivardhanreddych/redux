/**
 * @author Sashi Vardhan Reddy
 * @date 15/11/2021
 * 
 */


import './App.css';
// import from npm 
import React from 'react';
// import store from './app/store'
import {createStore} from 'redux';
import { Provider } from 'react-redux';

// import the internal components
import Counter from './redux/Counter';
import Reducer from './redux/Reducer';


// create a store
const store = createStore(Reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
