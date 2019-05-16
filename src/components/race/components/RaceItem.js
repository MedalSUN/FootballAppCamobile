import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Styles from './style'
import RaceScore from './RaceScore'

export default class RaceItem extends React.Component {
  render () {
    const { navigation } = this.props
    const { matchId, teamAName, teamBName, teamALogo, teamBLogo, matchDate, matchLocation, wheelNumber, teamAId, teamBId } = this.props
    return (
      <View>
        <TouchableOpacity style={Styles.list} onPress={ () => navigation.navigate('RaceDetails',
          { matchId: matchId,
            teamAId: teamAId,
            teamBId: teamBId,
            teamAName: teamAName,
            teamBName: teamBName,
            teamALogo: teamALogo,
            teamBLogo: teamBLogo })}>
          {/* 左边模块：比赛球队 */}
          <View style={Styles.listLift}>
            <View style={Styles.teamInfo}>
              <TouchableOpacity onPress={ () => navigation.navigate('TeamHomePage', { teamId: teamAId })}>
                <Image style={Styles.teamImgSize} source={{ uri: teamALogo }}/>
              </TouchableOpacity>
              <Text>{teamAName}</Text>
            </View>
            <View style={Styles.teamInfo}>
              <TouchableOpacity onPress={ () => navigation.navigate('TeamHomePage', { teamId: teamBId })}>
                <Image style={Styles.teamImgSize} source={{ uri: teamBLogo }}/>
              </TouchableOpacity>
              <Text>{teamBName}</Text>
            </View>
          </View>
          {/* 右边模块：时间，比分 */}
          <View style={Styles.listRight}>
            {/* 比赛轮数，时间，地点 */}
            <View style={Styles.raceLocation}>
              <Text style={Styles.raceText}>{matchDate}</Text>
              <Text style={Styles.raceText}>{matchLocation}</Text>
              <Text style={Styles.raceText}>山甲联赛第{wheelNumber}轮</Text>
            </View>
            {/* 比赛是否完成 ？出现比分 ： 敬请期待提示 */}
            <RaceScore matchId={matchId}/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
