  import React from 'react'; 
//   import { Route,Switch } from 'react-router-dom';
//   import About from "./About";
//   import Contact from "./Contact";

import logo from './logo.svg';
import './App.css';
// import header component
import Header from './components/header';
// import silder component
import Silder from './components/silder';
// import footer component
import Footer from './components/footer';

 var App = () =>{
   return(
<section> 
  <Header memudata="Home"/>
  <Silder/>
   <Footer/>
   {/* <Switch>
<Route exact path="/" compone ={About} />
<Route exact path="/ contact" component={Contact}/>
<Route component={Error}/>
      </Switch>
   <About/>
   <Contact/> */}

</section>

    );
 }
 export default App;
