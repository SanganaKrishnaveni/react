import React,{Component} from 'react';
 import birds from '../birds.jpg';
// import Footer from '../footer';

class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      message:" subscribe to Welcome",
    sub:"subscribe",
    imageURL:birds
  };
  }
  styles={
    fontStyle:"italic",
    color:"purple"
  };
  Buttonchnage=()=>{
    this.setState({
      message:"Hii Welcome to the my world",
      sub:"subscribed"

    });
  };
  imagechange=()=>{
    this.setState({
      imageURL:birds,
      message:"Thankyou! happy!"
    })
  }
  render(){
     return(
      <div className="App">
        <h1 style={this.styles}>{this.state.message}</h1>
        <button>{this.state.sub}</button>
     <p>
{/* <img style={{width:"300px",height:"300px"}}
src={this.state.imageURL}
onClick={this.imagechange} alt=""/> */}
     </p>
     
      </div>
  );
    }
}
export default Footer;
