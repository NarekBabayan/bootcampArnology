import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Home} from './homePage/Home'
import { Login } from './login/Login';
import { Register } from './register/Register';
import { Major } from './major.js/Major';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/login" exact component = {Login}/>
        <Route path = "/register" exact component = {Register}/>
        <Route path = "/major" exact component = {Major}/>
      </Switch>
    </div>
  );
}

export default App;

