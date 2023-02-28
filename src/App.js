import React from 'react';
import Router from './router/router';
import { Provider } from 'react-redux';
import store from './redux/index';
import './App.css';

function App() {
  return (
    <div className='px-2 md:px-4 lg:px-8 xl:px-16 py-10 '>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
