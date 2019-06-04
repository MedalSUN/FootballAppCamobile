import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Tabs, Tab, Toast, Root } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'
import { ALL_TEAM_MESSAGE, ALL_TEAM_PLAYER, ALL_MATCH_SCHEDULE } from '../../gql/queries'
import { JOIN_TEAM } from '../../gql/mutation'
import RaceItem from './components/RaceItem'
import { client } from '../../shared_client'
export default class TeamHomePage extends React.Component {
    static navigationOptions = (
        (props) => {
          return {
            headerTitle: '球队主页',
            headerTitleStyle: {
              marginLeft: 110
            }
          }
        }
      )
    // 函数： 参加球队
      joinTeam = (value) => {
        client.mutate({
          mutation: JOIN_TEAM,
          variables: {
            'input': {
              '_teamName': value
            }
          }
        }).then((reponse) => {
          console.log(reponse)
          this.showToast(reponse.data.joinTeam.string)
        })
      }

      // 显示提示非模态弹窗
    showToast = (message) => {
      let messOne
      if (message === '已成功申请，请耐心等待') {
        messOne = true
      } else {
        messOne = false
      }
      Toast.show({
        text: message,
        textStyle: { textAlign: 'center' },
        position: 'top',
        type: messOne === true ? 'success' : 'warning',
        duration: 1000
      })
    }

    render () {
      const { navigation } = this.props
      const teamId = navigation.getParam('teamId', '')
      return <Query query={ALL_TEAM_MESSAGE} variables={{ condition: { id: teamId } }}>
        {({ data, error, loading }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>`Error! ${error.message}`</Text>
          const teamLogoUrl = data.allFootballTeams.nodes[0].imageByTeamLogo.url
          const teamName = data.allFootballTeams.nodes[0].teamName
          const teamAbout = data.allFootballTeams.nodes[0].teamAbout
          return (
            <Root>
              <Container>
                <Content>
                  <View style={Styles.contentStyle}>
                    {/* 头部logo，球队名，口号 */}
                    <View style={Styles.teamPageTop}>
                      <Image style={Styles.teamLogo} source={{ uri: teamLogoUrl }}/>
                      <View>
                        <Text style={Styles.teamLogoNameText}>{teamName}</Text>
                      </View>
                      <View>
                        <Text style={Styles.teamAboutText}>{teamAbout}</Text>
                      </View>
                    </View>
                    {/* 成员和战绩 */}
                    <View>
                      <Tabs>
                        <Tab heading="成员" tabStyle={Styles.tabStyle} activeTabStyle={Styles.activeTabStyle} textStyle={Styles.textStyle} activeTextStyle={Styles.activeTextStyle}>
                          {/* 展示球队的所有球员 */}
                          <Query query={ALL_TEAM_PLAYER} variables={{ condition: { teamId: teamId, checked: true } }}>
                            {({ data, error, loading }) => {
                              if (loading) return <Text>Loading...</Text>
                              if (error) return <Text>`Error! ${error.message}`</Text>
                              return (
                                <View style={[Styles.allPlayerContainer, Styles.contentStyle]}>
                                  {
                                    data.allPersonTeams.nodes.map((p, i) => {
                                      return (
                                        <View key={i} style={[Styles.playerBox, Styles.marginTop15]}>
                                          <Image style={Styles.playerHeaderImg} source={{ uri: p.personByPersonId.imageByPlayerImg.url }}/>
                                          <Text style={Styles.playerNameText}>{p.personByPersonId.playerName}</Text>
                                        </View>
                                      )
                                    })
                                  }
                                </View>
                              )
                            }}
                          </Query>
                        </Tab>
                        <Tab heading="赛程" tabStyle={Styles.tabStyle} activeTabStyle={Styles.activeTabStyle} textStyle={Styles.textStyle} activeTextStyle={Styles.activeTextStyle}>
                          <Query query={ALL_MATCH_SCHEDULE} variables={{ orderBy: 'MATCH_DATE_ASC', filter: { or: [ { teamA: { equalTo: teamId } }, { teamB: { equalTo: teamId } } ] } }}>
                            {({ data, error, loading }) => {
                              if (loading) return <Text>Loading...</Text>
                              if (error) return <Text>`Error! ${error.message}`</Text>
                              return (
                                <View style={[Styles.allPlayerContainer, Styles.contentStyle]}>
                                  {
                                    data.allMatchSchedules.nodes.map((p, i) => {
                                      return (
                                      // 组件中的点击球队头像跳转到球队主页失效，因为无法自己跳转到自己，自动失效
                                        <RaceItem key={i} teamAName={p.footballTeamByTeamA.teamName} teamBName={p.footballTeamByTeamB.teamName}
                                          teamAId={p.teamA} teamBId={p.teamB}
                                          teamALogo={p.footballTeamByTeamA.imageByTeamLogo.url} matchId={p.id}
                                          teamBLogo={p.footballTeamByTeamB.imageByTeamLogo.url} navigation={ navigation }
                                          matchDate={p.matchDate} matchLocation={p.footballCourtByMatchLocation.courtName} wheelNumber={p.wheelNumber}/>
                                      )
                                    })
                                  }
                                </View>
                              )
                            }}
                          </Query>
                        </Tab>
                      </Tabs>
                    </View>
                    {/* 底部参加球队按钮 */}
                    <View style={[Styles.timeEventBox, Styles.bottomBox]}>
                      <View>
                        <Text>还没有加入球队？</Text>
                      </View>
                      <TouchableOpacity onPress={() => { this.joinTeam(teamName) }}>
                        <View style={[Styles.joinTeam, Styles.timeEventBox]}>
                          <Text>点击参加球队</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Content>
              </Container>
            </Root>
          )
        }}
      </Query>
    }
}
