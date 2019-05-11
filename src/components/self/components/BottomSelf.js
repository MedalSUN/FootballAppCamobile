import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'

// “我的”主页的下半部分： 导航到不同页面的按钮
class BottomSelf extends Component {
  render () {
    return (
      <View style={Styles.bottomStyle}>
        {/* 我的球队 */}
        <TouchableOpacity onPress={() => { console.log('1') }}>
          <View style={Styles.bottomButtonStyle}>
            <Text style={Styles.bottomButtonTextStyle}>我的球队</Text>
          </View>
        </TouchableOpacity>
        {/* 我的数据 */}
        <TouchableOpacity onPress={() => { console.log('2') }}>
          <View style={Styles.bottomButtonStyle}>
            <Text style={Styles.bottomButtonTextStyle}>我的数据</Text>
          </View>
        </TouchableOpacity>
        {/* 退出登录 */}
        <TouchableOpacity onPress={() => { console.log('3') }}>
          <View style={Styles.bottomButtonStyle}>
            <Text style={Styles.bottomButtonTextStyle}>我的预约</Text>
          </View>
        </TouchableOpacity>
        {/* 说明 */}
        <TouchableOpacity onPress={() => { console.log('4') }}>
          <View style={Styles.bottomButtonStyle}>
            <Text style={Styles.bottomButtonTextStyle}>退出登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
export default BottomSelf
