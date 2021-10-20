import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Login from './Login/Login';
import Register from './Component/Register/Register';
import Services from './Services/Services';
import Doctors from './Component/Doctors/Doctors';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About></About>

          </Route>

          <PrivateRoute path="/contact">
            <Contact></Contact>

          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>


          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>

          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/">
            <Home></Home>

          </Route>


        </Switch>

      </BrowserRouter>

    </div >
  );
}

export default App;
