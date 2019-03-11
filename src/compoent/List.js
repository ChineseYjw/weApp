import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'

export default class List extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {icon,title}=this.props
    return (
      <View className='list'>
        <View className='icon'><Image src={icon} /></View>
        <View><Text>{title}</Text></View>
      </View>
    )
  }
}

