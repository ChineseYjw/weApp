import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import './List.css'

export default class List extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {icon,title,onClick}=this.props
    return (
      <View className='list' onClick={onClick}>
        <View className='iconList'><Image className='icon' src={icon} /></View>
        <View><Text>{title}</Text></View>
      </View>
    )
  }
}

