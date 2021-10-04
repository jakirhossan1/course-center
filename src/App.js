import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Courses from './Courses/Courses';
import Teachers from './Component/Teachers/Teachers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/contact">
            <Contact></Contact>

          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/teacher">
            <Teachers></Teachers>

          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
