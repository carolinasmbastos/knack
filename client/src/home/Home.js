import React from "react";
import CarouselContainer from './CarouselContainer'
import BrowseArtworks from './BrowseArtworks'
import MonthlyArt from './MonthlyArt'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <CarouselContainer />
        <BrowseArtworks />
        <MonthlyArt />
      </div>
    );
  }
}