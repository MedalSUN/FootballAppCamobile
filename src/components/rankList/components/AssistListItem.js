import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'native-base'
import Styles from './style'

// 射手榜里每一项
class AssistListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { navigation } = this.props
    const { assistNum, assistId, url, assistName } = this.props
    return (
      <View style={[Styles.dataLevel, Styles.item]}>
        <View style={[Styles.listItemBox, Styles.dataLevelFlexStart]}>
          <Image style={Styles.imgSize} source={{ uri: url }}/>
          <Text style={Styles.shooterText}>{assistName}</Text>
        </View>
        <View style={[Styles.listItemBox, Styles.dataLevel]}>
          <Text style={Styles.shooterText}>{assistNum}</Text>
        </View>
        <View style={[Styles.listItemBox, Styles.dataLevel]}>
          <TouchableOpacity onPress={ () => navigation.navigate('AssistDetails', { assistId: assistId })}>
            <Text style={Styles.shooterText}>详情</Text>
            <View style={Styles.bottomLevel}></View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default AssistListItem
