import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import axios from 'axios'
import { 
  HomeWrapper, 
  HomeLeft, 
  HomeRight 
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4581/14d959ff757f21616baa933fd3bdbfcf52fd512a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action)
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)