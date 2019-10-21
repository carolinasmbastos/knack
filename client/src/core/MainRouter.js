import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import ArtworkSearchResult from '../artwork/ArtworkSearchResult'
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
        <Route exact path="/" component={ArtworkSearchResult} />
        <Route path="/discovery" component={Discovery} />
      </Switch>
    </div>)
  }
}

export default MainRouter
