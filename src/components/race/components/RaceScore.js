import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Styles from './style'
import { Query } from 'react-apollo'

import { ALL_MATCH_GOAL } from '../../../gql/queries'

// 描述已完成比赛的进球比分；  如果还没开始，需要显示敬请期待，或者预约
export default class RaceScore extends React.Component {
  render () {
    const { matchId } = this.props
    return <Query query={ALL_MATCH_GOAL} variables={{ condition: { id: matchId } }}>
      {({ data, error, loading }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        console.log(data.allMatchGoals.nodes[0])
        return (
          <View style={Styles.raceScore}>
            <View style={Styles.goalText}>
              <Text >{data.allMatchGoals.nodes[0].goalA}</Text>
            </View>
            <View style={Styles.goalText}>
              <Text>{data.allMatchGoals.nodes[0].goalB}</Text>
            </View>
          </View>
        )
      }}
    </Query>
  }
}
