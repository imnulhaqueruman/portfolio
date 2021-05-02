import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
function App() {
  return (
   <Router>
     <Switch>
       
       <Route path="/aboutMe">
          <About></About>
       </Route>
       <Route path="/contact">
          <Contact></Contact>
       </Route>
       <Route path="/projects">
          <Projects></Projects>
       </Route>
       <Route path="/blogs">
         <Blog></Blog>
       </Route>
       <Route path="/home">
          <Home></Home>
       </Route>
       <Route path="/">
          <Home></Home>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
