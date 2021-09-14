
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Camps from './Pages/Camps';
import About from './Pages/About';

function App() {
  return (
      <div>
          <BrowserRouter>
              <div>

                  <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/Home" component={Home} exact />
                      <Route path="/Camps" component={Camps} />
                      <Route path="/About" component={About} />
                    
                      <Route component={Error} />
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
  );
}

export default App;
