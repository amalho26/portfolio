import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import ResumePage from './pages/resume';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/resume" exact component = {ResumePage} />
      </Switch>
    </Router>
  );
}
export default App;
