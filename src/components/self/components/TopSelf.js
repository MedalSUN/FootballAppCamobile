import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Container, Content, View } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'

// “我的”主页的顶部部分： 用于描述个人基本信息
class TopSelf extends Component {
  render () {
    return (
      <View style={Styles.topStyle}>
        {/* 左半部分展示头像 */}
        <Image style={Styles.myHeaderImg} source={require('../../../../img/logo.png')}/>
        {/* 右半部分展示用户名，以及个性签名（可修改） */}
        <View style={Styles.myInfor}>
          {/* 用户名 */}
          <Text style={Styles.userNameStyle}>胡存浩</Text>
          {/* 个性签名 可修改 (限制字数20) */}
          {/* 在签名前面加一个可修改的笔图 */}
          <View style={Styles.userSpecialText}>
            <Image style={Styles.updateSpecialTextImg} source={require('../../../../img/note.png')}/>
            <Text style={Styles.userSpecialTextStyle}>我来自工程院，我是一个前锋</Text>
          </View>
        </View>
      </View>
    )
  }
}
export default TopSelf
