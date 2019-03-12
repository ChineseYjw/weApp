import Taro, { Component } from '@tarojs/taro'
import { View,Swiper,SwiperItem,Image,ScrollView } from '@tarojs/components'
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
/* import index from "../introduction"; */

export default class index extends Component {

  config = {
    navigationBarTitleText: '圣豪州高端设计'
  }

  constructor(){
    super(...arguments)
    this.state={
      currentNavtab:homeIcon,
    }
  }
  switchTab(item){
    this.setState({
      currentNavtab:item.icon
    })
  }
  skipTo(item){
    Taro.navigateTo({
      url:`/pages/${item.key}/index`
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <ScrollView>
          <View className='index' hidden={this.state.currentNavtab===homeIcon ? false : true}>
            <Swiper indicatorDots autoplay >
              {[img0,img1,img2].map(img=>(<SwiperItem key={img}><Image src={img} /></SwiperItem>))}
            </Swiper>
            <View className='top'>
              {list.map(item=>(<List key={item.key} onClick={this.skipTo.bind(this,item)} icon={item.icon} title={item.title} ></List>))}
            </View>
          </View>
          <View hidden={this.state.currentNavtab===measuringIcon ? false : true}> {'xxsxsxsxsx'} </View>
          <View hidden={this.state.currentNavtab===weIcon ? false : true}> {'dwdddddddddddddd'} </View>
        </ScrollView>
        <View className='foot'>
          {bottomList.map((item)=>(<Bottom key={item} icon={item.icon} title={item.title} onClick={this.switchTab.bind(this,item)} ></Bottom>))}
        </View>
      </View>
    )
  }
}
const list=[
  {icon:introductionIcon,title: '公司简介',key:'introduction'},
  {icon:caseIcon,title:'公司案例',key: 'case'},
  {icon:designerIcon,title:'设计师',key:'designer'},
  {icon:phoneIcon,title:'联系我们',key:'phone'}
]
const bottomList=[
  {icon:homeIcon,title:'首页'},
  {icon:measuringIcon,title:'免费量房'},
  {icon:weIcon,title:'联系我们'}
]

