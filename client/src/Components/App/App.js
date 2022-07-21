import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; 
import Home from '../Home/Home';
import Info from '../Info/Info'; 
import Donate from '../Donate/Donate';  
import Donated from '../Donated/Donated';  
import History from '../Exhibitions/History'; 
import Art from '../Exhibitions/Art'; 
import NaturalHistory from '../Exhibitions/NaturalHistory'; 
import Science from '../Exhibitions/Science'; 

class App extends React.Component {

  render(){return (
    <Router>
      <Route>
      <link href="https://fonts.googleapis.com/css?family=Ovo|Quattrocento+Sans&display" rel="stylesheet"></link>
        <h1>Wellsbury Museum</h1>
        <nav>
          <NavLink className = 'NavLink' activeClassName='activeNavLink' exact to="/">Home</NavLink>
          <NavLink className = 'NavLink' activeClassName='activeNavLink' exact to="/info">Info</NavLink>
          <NavLink className = 'NavLink' activeClassName='activeNavLink' exact to="/donate">Donate</NavLink> 
        </nav>
      </Route>
      <Route exact path='/'>
        < Home/>
      </Route>
      <Route exact path='/info'>
        < Info/>
      </Route>  
      <Route exact path='/donate'>
        < Donate/>
      </Route>
      <Route exact path='/donated'>
        < Donated/>
      </Route>
      <Route exact path='/history'>
        <History />
      </Route>   
      <Route exact path='/art'>
        < Art />
      </Route>  
      <Route exact path='/natural-history'>
        < NaturalHistory />
      </Route>  
      <Route exact path='/science'>
        < Science />
      </Route>  
      <Route>
        <footer>
          <p>&copy; Charles Davis Web Development - 2022</p>
        </footer>
      </Route>
    </Router>
  );
  }
}

export default App;
