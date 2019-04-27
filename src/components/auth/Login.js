/* eslint-disable no-lone-blocks */
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import { Button, Input, Image, Text } from 'react-native-elements'

import Styles from './style'

export default class Login extends React.Component {
  render () {
    return (
      <View style={Styles.loginStyle}>
        <Text>登陆页</Text>
      </View>
    )
  }
}

{ /* <Image
source={require( '../../../img/logo.png' )}
style={Styles.logoStyle}
/>
<View style={Styles.loginInputContainer}>
<Input
  placeholder='请输入邮箱'
  inputContainerStyle={Styles.loginInputStyle}
/>
<Input
  placeholder='请输入密码'
  inputContainerStyle={Styles.loginInputStyle}
/>
<View style={Styles.submitButtonStyle}>
  <Button
    title='登录'
    type='solid'
  />
</View>
<TouchableOpacity onPress={() => console.log('欢迎跳到注册页')}>
  <View style={Styles.registerTextContainerStyle}>
    <Text style={Styles.registerTextStyle}>注册</Text>
  </View>
</TouchableOpacity>
</View>
*/ }
