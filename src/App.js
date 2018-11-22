import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <IconFont />
          <Header></Header>
        </Fragment>
      </Provider>
    )
  }
}

export default App