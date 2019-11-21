import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

import Artwork from "../artwork/Artwork";
import Confirmation from "../artwork/Confirmation";

import Home from "../home/Home";
import BrowseArtworks from "../artwork/BrowseArtworks";

import Discovery from "../discovery/Discovery";
import Explore from "../explore/Explore";

import Artist from "../artist/Artist";
import ContactUs from "../contact/ContactUs";

import MonthlyArt from "../monthlyArt/MonthlyArt";

class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/discovery" component={Discovery} />
            <Route path="/explore" component={Explore} />
            <Route path="/monthlyArt" component={MonthlyArt} />
            <Route path="/browse/:searchString" component={BrowseArtworks} />
            <Route path="/artwork/:id" component={Artwork} />
            <Route path="/confirmation/:orderId" component={Confirmation} />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}

export default MainRouter;
