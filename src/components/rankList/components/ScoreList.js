import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'native-base'
import Styles from './style'
import { Query } from 'react-apollo'
import { ALL_SCORE } from '../../../gql/queries'

import ScoreListItem from './ScoreListItem'

class ScoreList extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View>
        {/* 头部的四个标题： 球员[包含头像和名字]，数据，详情 */}
        <View style={Styles.titleLevel}>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>球队</Text>
          </View>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>积分</Text>
          </View>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>详情</Text>
          </View>
        </View>
        {/* 下方的所有数据 */}
        <Query query={ALL_SCORE} variables={{ orderBy: 'TEAM_SCORE_DESC' }}>
          {({ data, error, loading }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>`Error! ${error.message}`</Text>
            return (
              <View>
                {data.allScores.nodes.map((p, i) => {
                  return (
                    <ScoreListItem key={i} teamScore={p.teamScore} teamId={p.teamId}
                      teamLogo={p.footballTeamByTeamId.imageByTeamLogo.url} teamName={p.footballTeamByTeamId.teamName}
                    />
                  )
                })
                }

              </View>
            )
          }}
        </Query>
      </View>
    )
  }
}
export default ScoreList
