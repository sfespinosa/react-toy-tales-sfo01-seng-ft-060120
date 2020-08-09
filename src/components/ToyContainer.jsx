import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.displayedToys.map(toy => {
        return <ToyCard toy={toy} key={toy.id} donateToGoodwill={props.donateToGoodwill} likeToy={props.likeToy}/>
      })}
    </div>
  );
}

export default ToyContainer;
