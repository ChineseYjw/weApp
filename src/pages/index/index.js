import Taro, { Component } from '@tarojs/taro'
import { View,Swiper,SwiperItem,Image } from '@tarojs/components'
import List from '../../compoent/List'
import img0 from '../../assets/img/image0.jpg'
import img1 from '../../assets/img/image1.jpg'
import img2 from '../../assets/img/image2.jpg'
import caseIcon from '../../assets/iconfont/case.png'
import designerIcon from '../../assets/iconfont/designer.png'
import hornIcon from '../../assets/iconfont/horn.png'
import introductionIcon from '../../assets/iconfont/introduction.png'
import phoneIcon from '../../assets/iconfont/phone.png'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '圣豪州高端设计'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Swiper indicatorDots autoplay >
          {[img0,img1,img2].map(img=>(<SwiperItem key={img}><Image src={img} /></SwiperItem>))}
        </Swiper>
        <List></List>
      </View>
    )
  }
}
const list={
  icon:caseIcon
}
