import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavbarView from './Views/NavbarView';
import Carousel from './components/Carousel';
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <NavbarView />
              <Carousel />
          </Route>
          <Route path='/pricing'>
            <NavbarView />
              <Card />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
