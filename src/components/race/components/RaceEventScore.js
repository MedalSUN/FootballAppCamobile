import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Badge } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'

export default class RaceEventScore extends React.Component {
  constructor (props) {
    super(props)
    this.top = 0
  }
  // eslint-disable-next-line react/no-deprecated
  componentWillMount = () => {
    const length = this.props.goalTime * 5 - 30
    this.top = length
  }
  render () {
    const { assistName, shooterName, teamFlag, goalTime } = this.props
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ position: 'absolute', top: this.top }}>
        {
          teamFlag === true ? <View style={Styles.teamEventLeftBox}>
            <View style={Styles.teamEventLeftPlayerBox}>
              <View style={Styles.playerRoleBox}>
                <Text style={Styles.playerLeftText}>{shooterName}</Text>
                <Ionicons name={'ios-football'} size={20} />
              </View>
              <View style={Styles.playerRoleBox}>
                <Text style={Styles.playerLeftText}>{assistName}</Text>
                <Ionicons name={'ios-football'} size={20} />
              </View>
            </View>
            <View style={Styles.teamEventLeftTimeBox}>
              <Badge info><Text>{goalTime}</Text></Badge>
            </View>
          </View> : <View style={Styles.teamEventRightBox}>
            <View style={Styles.teamEventRightTimeBox}>
              <Badge info><Text>{goalTime}</Text></Badge>
            </View>
            <View style={Styles.teamEventRightPlayerBox}>
              <View style={Styles.playerRoleBox}>
                <Ionicons name={'ios-football'} size={20} />
                <Text style={Styles.playerRightText}>{shooterName}</Text>
              </View>
              <View style={Styles.playerRoleBox}>
                <Ionicons name={'ios-football'} size={20} />
                <Text style={Styles.playerRightText}>{assistName}</Text>
              </View>
            </View>

          </View>
        }
      </View>

    )
  }
}
