import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'native-base'
import Styles from './style'

// 射手榜里每一项
class ScoreListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { teamScore, teamId, teamLogo, teamName } = this.props
    return (
      <View style={Styles.dataLevel}>
        <View style={[Styles.listItemBox, Styles.dataLevelFlexStart]}>
          <Image style={Styles.imgSize} source={{ uri: teamLogo }}/>
          <Text style={Styles.shooterText}>{teamName}</Text>
        </View>
        <View style={[Styles.listItemBox, Styles.dataLevel]}>
          <Text style={Styles.shooterText}>{teamScore}</Text>
        </View>
        <View style={[Styles.listItemBox, Styles.dataLevel]}>
          <TouchableOpacity onPress={ () => { console.log('11') }}>
            <Text style={Styles.shooterText}>详情</Text>
            <View style={Styles.bottomLevel}></View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default ScoreListItem
