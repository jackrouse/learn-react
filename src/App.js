import React from 'react';
// import logo from './logo.svg';
import {Calculator} from './components/calculator/Calculator'
import {ProvideTest} from './components/provideTest/ProvideTest'
import {NewsList} from '@/components/newslist/newsList'
import {MyNewButtom} from '@/components/hoc/hoc.js'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <Calculator/>
        <ProvideTest/>
        <NewsList/>
        <MyNewButtom color="pink"/>
      </div>
    </div>
  );
}

export default App;
