import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <IconFont />
          <BrowserRouter> 
            <div>
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
            </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App