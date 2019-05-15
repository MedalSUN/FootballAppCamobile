import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Container, Content, Tabs, Tab, View } from 'native-base'
import Styles from './style'
import { Query } from 'react-apollo'
import { ALL_EVENTS, ALL_MATCH_SCHEDULE } from '../../gql/queries'

class GoalDetails extends Component {
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
    const shooterId = navigation.getParam('shooterId', '')
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
              <Text style={Styles.topTitleText}>进球时间</Text>
            </View>
          </View>
          {/* 数据区域 */}
          <View style={Styles.goalDetailsContent}>
            <Query query={ALL_EVENTS} variables={{ condition: { shooterId: shooterId }, orderBy: 'MATCH_ID_ASC' }}>
              {({ data, error, loading }) => {
                if (loading) return <Text>Loading...</Text>
                if (error) return <Text>`Error! ${error.message}`</Text>
                return (
                  <View>
                    {
                      data && data.allMatchEveryGoals.nodes.map((p, i) => {
                        const wheelNum = p.matchScheduleByMatchId.wheelNumber
                        const goalTime = p.goalTime
                        const matchId = p.matchId
                        return (
                          <View key={i} style={Styles.goalDetailsItem}>
                            <View><Text>{wheelNum}</Text></View>
                            <Query query={ALL_MATCH_SCHEDULE} variables={{ condition: { id: matchId } }}>
                              {({ data, error, loading }) => {
                                if (loading) return <Text>Loading...</Text>
                                if (error) return <Text>`Error! ${error.message}`</Text>
                                console.log(data)
                                const teamA = data.allMatchSchedules.nodes[0].footballTeamByTeamA.teamName
                                const teamB = data.allMatchSchedules.nodes[0].footballTeamByTeamB.teamName
                                return (
                                  <View><Text>{teamA} VS {teamB}</Text></View>
                                )
                              }}
                            </Query>
                            <View><Text>{goalTime}</Text></View>
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
export default GoalDetails
