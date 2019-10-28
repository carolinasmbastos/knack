import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'

import Artwork from '../artwork/Artwork'

import Home from '../home/Home'
import BrowseArtworks from '../home/BrowseArtworks'

import Discovery from '../discovery/Discovery'

class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/discovery" component={Discovery} />
        <Route path="/browse/:searchString" component={BrowseArtworks} />
        <Route path="/artwork/:id" component={Artwork} />
      </Switch>
      <Footer />
    </div>)
  }
}

export default MainRouter
