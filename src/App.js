import logo from './logo.svg';
import './App.css';
import { Menu } from './menu/Menu';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Home} from './homePage/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Home}/>
      </Switch>
    </div>
  );
}

export default App;

