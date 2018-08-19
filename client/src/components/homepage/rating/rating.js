import React, { Component } from 'react';
import "./rating.css";
class Rating extends Component {
    
  state = {rating: []}

  componentDidMount() {
    fetch('/rating')
      .then(res => res.json())
      .then(rating => this.setState({ rating }));
  }

  render() {
    return (
      <div className="Rating">      
        <div className="rContainer">
            {this.state.rating.map(rating =>
                <div className="mainRate" key={rating.id}>
                  <div className="insideRate">
                    <p id="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p id="rName">{rating.name }:</p>
                    <p id="review">{rating.review}</p>
                  </div>                  
                </div>
            )}
        </div>
      </div>
    );
  }
}

export default Rating;
