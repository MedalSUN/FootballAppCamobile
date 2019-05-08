import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Container, Content, View } from 'native-base'
import Styles from './style'

class RankNavigator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textTouchA: false, // 标识标题A是否被点击过
      textTouchB: false, // 标识标题B是否被点击过
      textTouchC: false // 标识标题C是否被点击过
    }
  }
  componentDidMount = () => {

  }

  changeTextStyle = (value) => {
    if (value === 'A') {
      if (this.state.textTouchA === false) {
        this.setState({
          textTouchA: true,
          textTouchB: false,
          textTouchC: false

        })
      }
    } else if (value === 'B') {
      if (this.state.textTouchB === false) {
        this.setState({
          textTouchB: true,
          textTouchA: false,
          textTouchC: false

        })
      }
    } else {
      if (this.state.textTouchC === false) {
        this.setState({
          textTouchC: true,
          textTouchB: false,
          textTouchA: false

        })
      }
    }
  }

  render () {
    return (
      <View style={Styles.navLevelStyle}>
        <TouchableOpacity onPress={() => this.changeTextStyle('A')}>
          <View style={Styles.ViewStyle}>
            <Text style={ this.state.textTouchA === false ? Styles.noTouchTextStyle : Styles.touchTextStyle}>射手榜</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeTextStyle('B')}>
          <View style={Styles.ViewStyle}>
            <Text style={ this.state.textTouchB === false ? Styles.noTouchTextStyle : Styles.touchTextStyle}>助攻榜</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeTextStyle('C')}>
          <View style={Styles.ViewStyle}>
            <Text style={ this.state.textTouchC === false ? Styles.noTouchTextStyle : Styles.touchTextStyle}>积分榜</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
export default RankNavigator
