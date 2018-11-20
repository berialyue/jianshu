import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFont />
        <Header></Header>
      </Fragment>
    )
  }
}

export default App