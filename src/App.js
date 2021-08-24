
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
      <div>
          <BrowserRouter>
              <div>

                  <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/Home" component={Home} exact />
                    
                      <Route component={Error} />
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
  );
}

export default App;
