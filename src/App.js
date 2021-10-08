
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Camps from './Pages/Camps';
import About from './Pages/About';
import Links from './Pages/Links';
import Contact from './Pages/Contact';
import { init } from 'emailjs-com';
init("user_g4oYOtObrTqkhRVkjkxKh");

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
                      <Route path="/Links" component={Links} />
                      <Route path="/Contact" component={Contact} />
                    
                      <Route component={Error} />
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
  );
}

export default App;
//init("service_morningstardance");
