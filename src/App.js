import { useState } from 'react';
import Dashboard from "./components/Dashboard";
import {Switch, Route} from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  const [timeIsUp, setTimeIsUp] = useState(false);
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact >
          <Dashboard timeIsUp={timeIsUp} setTimeIsUp={setTimeIsUp} />
        </Route>
        <Route path='/cart' component={Cart} exact />
      </Switch>
    </div>
  );
}

export default App;
