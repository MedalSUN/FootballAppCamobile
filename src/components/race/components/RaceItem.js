import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Styles from './style'
import RaceScore from './RaceScore'

export default class RaceItem extends React.Component {
  render () {
    const { matchId, teamAName, teamBName, teamALogo, teamBLogo, matchDate, matchLocation, wheelNumber } = this.props
    return (
      <View>
        <TouchableOpacity style={Styles.list} onPress={ () => { console.log('11') }}>
          {/* 左边模块：比赛球队 */}
          <View style={Styles.listLift}>
            <View style={Styles.teamInfo}>
              <Image style={Styles.teamImgSize} source={{ uri: teamALogo }}/>
              <Text>{teamAName}</Text>
            </View>
            <View style={Styles.teamInfo}>
              <Image style={Styles.teamImgSize} source={{ uri: teamBLogo }}/>
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
        {/* 底部分割线 */}
        <View style={Styles.bottomLine}></View>

      </View>
    )
  }
}
