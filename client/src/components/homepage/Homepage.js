import React, { Component } from 'react';
import './Homepage.css';
import Rating from './rating/rating';
import frog from '../../Assets/frog.png';
import dog from '../../Assets/dog.png';
import hedgehog from '../../Assets/porcupine.png';
import cat from '../../Assets/Untitled-2.png';


class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
      
        <div className="hContainer">          
          <div className="hHeadText">
            <h2 id="bgMotto">
              Rain or Shine we will keep your pets safe, happy and healthy!
            </h2>
            <p id="mottoBld">Get a pet insurance quote today, as low as $5!</p>            
          </div>
          <div className="hBtn">
            <a href="#" className="myButton">GET STARTED</a>
          </div>
          <div className="hCharImg">
            <img id="cat" src={cat} className="App-cat" alt="cat" />            
            <img id="frog" src={frog} className="App-frog" alt="frog" />
            <img id="hedgehog" src={hedgehog} className="App-hedgehog" alt="hedgehog" />
            <img id="dog" src={dog} className="App-dog" alt="dog" />
          </div>
          <div className="press">
            
          </div>
        </div>   
        
      </div>
    );
  }
}

export default Homepage;
