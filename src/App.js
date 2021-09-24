import './App.css';
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Easy from "./Pages/Easy/Easy";
import Moderate from "./Pages/Moderate/Moderate";
import Hard from "./Pages/Hard/Hard";
import Quiz from "./Pages/Quiz/Quiz";

function App() {
  return (
      <div>
          <Navigation/>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/easy">
                  <Easy/>
              </Route>
              <Route path="/moderate">
                  <Moderate/>
              </Route>
              <Route path="/hard">
                  <Hard/>
              </Route>
              <Route path="/quiz/:id">
                  <Quiz/>
              </Route>
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
