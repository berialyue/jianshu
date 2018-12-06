import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
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
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route>
            </div>
            </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App