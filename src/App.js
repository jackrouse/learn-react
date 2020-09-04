import React from 'react';
// import logo from './logo.svg';
import {
  Route,
  // Switch,
  Link,
  // withRouter,
  useLocation
} from 'react-router-dom'
// import {Calculator} from './components/calculator/Calculator'
// import {ProvideTest} from './components/provideTest/ProvideTest'
import Home from '@/components/home'
import {NewsList} from '@/components/newslist/newsList'
import {MyNewButtom} from '@/components/hoc/hoc.js'
import {AntdTest} from '@/components/antdTest'
// import {HookTest,Counter,Counter1} from '@/components/hookTest/hookTest'
import './App.css';

function App(props) {
  const location =  useLocation();
  console.log(location)
  console.log(props)
  console.log(this)
  return (
    <div className="App">
      {
        location.pathname!=='/' && 
        <>
            <div>{location.pathname}</div>
            <Link to="/news">news</Link><br/>
            <Link to="/login">login</Link><br/>
            <Link to="/antdTest">antdTest</Link>
          </>
      }

      {/* <Switch> */}
        <Route exact path="/" component={Home}></Route>
        <Route path="/news" component={NewsList}></Route>
        <Route path="/login/" component={MyNewButtom}></Route>
        <Route path="/antdTest/" component={AntdTest}></Route>
      {/* </Switch> */}
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
      {/* <div>
        <Calculator/>
        <ProvideTest/>
        <NewsList/>
        <MyNewButtom color="pink"/>
        <HookTest></HookTest>
        <Counter initialCount={3}/>
        <Counter1/>
      </div> */}
    </div>
  );
}

// export default withRouter(App);

export default App