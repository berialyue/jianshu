import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '故事',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '简书电影',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '如何将字写的好看|超详细的练字疑惑解答',
    desc: '某天接到佳楠学长的微信：“老王，你最擅长什么呀？整理整理拿出来分享一下呗～”当时脑中第一闪现的是“写字”，但又马上的否定和怀疑自己，不停地...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/4177038-898476cf0823dd92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '从月薪3000，到单篇稿费5000，她用2个月完胜过去10年……',
    desc: '没错，标题中的那个“她”，就是我自己。 有朋友说，我这样的女人本身就是一个传奇。我觉得这世界上本没有什么传奇，如果非说有，那能成就你的只有你自己...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/2954983-29ab8fc33c6beae7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '三行情书｜我还是喜欢你',
    desc: '我还是很喜欢你 像海上的波浪 一波未平一波又起 我还是很喜欢你 像孤城狼烟四起 千军万马也要奔向你 我还是很喜欢你 像日月轮回交替 情不知所起 ...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/1696764-9196364e85a27a6b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    
    default:
      return state
  }
}