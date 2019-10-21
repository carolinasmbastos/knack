import React from "react";
import Carousel from './Carousel'
import BrowseArtworks from './BrowseArtworks'
import MonthlyArt from './MonthlyArt'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <BrowseArtworks />
        <MonthlyArt />
      </div>
    );
  }
}