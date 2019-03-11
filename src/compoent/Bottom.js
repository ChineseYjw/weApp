import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import './Bottom.css'

export default class Bottom extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const  {icon,title}=this.props
    return (
      <View className='bottom'>
        <View className='bottomList'><Image className='icon' src={icon} /></View>
        <View><Text>{title}</Text></View>
      </View>
    )
  }
}

