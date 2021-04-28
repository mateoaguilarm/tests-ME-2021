import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Bootstrap from './components/Bootstrap';
import Reactstrap from './components/Reactstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/bootstrap' component={Bootstrap}/>
          <Route path='/reactstrap' component={Reactstrap}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
