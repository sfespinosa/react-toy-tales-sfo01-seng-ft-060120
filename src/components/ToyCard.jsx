import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    let {id, name, image, likes} = this.props.toy 

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={() => this.props.likeToy(id)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.props.donateToGoodwill(id)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
