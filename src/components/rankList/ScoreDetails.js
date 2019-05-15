import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Content, View } from 'native-base'
import Styles from './style'
import { Query } from 'react-apollo'
import { ALL_MATCH_SCHEDULE } from '../../gql/queries'

class ScoreDetails extends Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '详情',
        headerTitleStyle: {
          marginLeft: 130
        }
      }
    }
  )

  render () {
    const { navigation } = this.props
    const teamId = navigation.getParam('teamId', '')
    return (
      <Container>
        <Content style={Styles.contentStyle}>
          <View style={Styles.goalDetailsTop}>
            {/* 顶部标题 */}
            <View >
              <Text style={Styles.topTitleText}>轮数</Text>
            </View>
            <View>
              <Text style={Styles.topTitleText}>比赛</Text>
            </View>
            <View>
              <Text style={Styles.topTitleText}>比分</Text>
            </View>
            <View>
              <Text style={Styles.topTitleText}>胜负</Text>
            </View>
          </View>
          {/* 数据区域 */}
          <View style={Styles.goalDetailsContent}>
            <Query query={ALL_MATCH_SCHEDULE} variables={{ orderBy: 'MATCH_DATE_ASC', filter: { or: [ { teamA: { equalTo: teamId } }, { teamB: { equalTo: teamId } } ] } }}>
              {({ data, error, loading }) => {
                if (loading) return <Text>Loading...</Text>
                if (error) return <Text>`Error! ${error.message}`</Text>
                return (
                  <View>
                    {
                      data && data.allMatchSchedules.nodes.map((p, i) => {
                        const wheelNum = p.wheelNumber
                        const teamA = p.footballTeamByTeamA.teamName.substring(0, 2)
                        const teamB = p.footballTeamByTeamB.teamName.substring(0, 2)
                        const teamAId = p.teamA
                        const teamBId = p.teamB
                        const goalA = p.matchGoalById.goalA
                        const goalB = p.matchGoalById.goalB
                        return (
                          <View key={i} style={Styles.goalDetailsItem}>
                            <View><Text>{wheelNum}</Text></View>
                            <View><Text>{teamA} VS {teamB}</Text></View>
                            <View><Text>{goalA} : {goalB}</Text></View>
                            {
                              teamAId === teamId && goalA > goalB && <View><Text>胜</Text></View>
                            }
                            {
                              teamAId === teamId && goalA < goalB && <View><Text>负</Text></View>
                            }
                            {
                              teamBId === teamId && goalA > goalB && <View><Text>负</Text></View>
                            }
                            {
                              teamBId === teamId && goalA < goalB && <View><Text>胜</Text></View>
                            }
                            {
                              goalA === goalB && <View><Text>平</Text></View>
                            }
                          </View>
                        )
                      })
                    }
                  </View>
                )
              }}
            </Query>

          </View>
        </Content>
      </Container>
    )
  }
}
export default ScoreDetails
