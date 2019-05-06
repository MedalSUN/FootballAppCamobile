import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Style from '../style'

export default class RaceItem extends React.Component {
  render () {
    return (
      <View>
        <TouchableOpacity style={Style.list} onPress={ () => { console.log('11') }}>
          {/* 左边模块：比赛球队 */}
          <View style={Style.listLift}>
            <Text>主场球队区域</Text>
            <Text>客场球队区域</Text>
          </View>
          {/* 右边模块：时间，比分 */}
          <View style={Style.listRight}>
            {/* 比赛轮数，时间，地点 */}
            <View style={Style.raceLocation}>
              <Text>2019-05-06</Text>
              <Text>山商诺坎普</Text>
              <Text>山甲联赛第5轮</Text>
            </View>
            {/* 比赛是否完成 ？出现比分 ： 敬请期待提示 */}
            <View style={Style.raceScore}>
              <Text>0</Text>
              <Text>1</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
