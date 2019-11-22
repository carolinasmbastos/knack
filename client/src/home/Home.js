import React from "react";
import CarouselContainer from './CarouselContainer'
import BrowseArtworks from '../artwork/BrowseArtworks'
import MonthlyArtBanner from './MonthlyArtBanner'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <CarouselContainer />
        <BrowseArtworks featured='true' />
        <MonthlyArtBanner />
      </div>
    );
  }
}