import Taro, { Component } from '@tarojs/taro'
import { View,Swiper,SwiperItem,Image } from '@tarojs/components'
import List from '../../compoent/List'
import Bottom from '../../compoent/Bottom'
import img0 from '../../assets/img/image0.jpg'
import img1 from '../../assets/img/image1.jpg'
import img2 from '../../assets/img/image2.jpg'
import caseIcon from '../../assets/iconfont/case.png'
import designerIcon from '../../assets/iconfont/designer.png'
/* import hornIcon from '../../assets/iconfont/horn.png' */
import introductionIcon from '../../assets/iconfont/introduction.png'
import phoneIcon from '../../assets/iconfont/phone.png'
import homeIcon from '../../assets/iconfont/home.png'
import measuringIcon from '../../assets/iconfont/measuring.png'
import weIcon from '../../assets/iconfont/we.png'
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
        <View className='top'>
          {list.map(item=>(<List key={item} icon={item.icon} title={item.title} ></List>))}
        </View>
        <View className='foot'>
          {bottomList.map(item=>(<Bottom key={item} icon={item.icon} title={item.title} ></Bottom>))}
        </View>

      </View>
    )
  }
}
const list=[
  {icon:introductionIcon,title: '公司简介'},
  {icon:caseIcon,title:'公司案例'},
  {icon:designerIcon,title:'设计师'},
  {icon:phoneIcon,title:'联系我们'}
]
const bottomList=[
  {icon:homeIcon,title:'首页'},
  {icon:measuringIcon,title:'免费量房'},
  {icon:weIcon,title:'联系我们'}
]

