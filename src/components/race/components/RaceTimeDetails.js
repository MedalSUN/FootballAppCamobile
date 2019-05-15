import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text, Image } from 'react-native'
import { Container, Content } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'
import RaceEventScore from './RaceEventScore'

export default class RaceTimeDetails extends React.Component {
  render () {
    const { teamAId, teamBId, data } = this.props
    return (
      <View style={Styles.timeDetailsBox}>
        {/* 顶部的时间icon */}
        <View style={Styles.timeIconBox}>
          <Ionicons name={'ios-time'} size={20} />
        </View>
        {/* 时间柱,事件发展 */}
        <View style={Styles.timeEventBox}>
          {/* 左边主队的事件 */}
          <View style={Styles.leftTeamEvent}>
            {
              data && data.allMatchEveryGoals.nodes.map((p, i) => {
                return (
                  p.personByShooterId.personTeamByPersonId.teamId === teamAId &&
                  <RaceEventScore key={i} teamFlag={true} goalTime={p.goalTime}
                    shooterName={p.personByShooterId.playerName} assistName={p.personByAssistId.playerName} />)
              })
            }
          </View>
          {/* 时间条 */}
          <View style={Styles.timeColumn}></View>
          {/* 右边客队事件 */}
          <View style={Styles.rightTeamEvent}>
            {
              data && data.allMatchEveryGoals.nodes.map((p, i) => {
                return (
                  p.personByShooterId.personTeamByPersonId.teamId === teamBId &&
                  <RaceEventScore key={i} teamFlag={false} goalTime={p.goalTime}
                    shooterName={p.personByShooterId.playerName} assistName={p.personByAssistId.playerName} />)
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
