import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, RefreshControl } from 'react-native'
import { Container, Content, Root } from 'native-base'
import RaceItem from './components/RaceItem'
import { Query } from 'react-apollo'
import Styles from './style'
import { ALL_MATCH_SCHEDULE } from '../../gql/queries'

/**
 * 注意加上ScrollView之后，只能放六块，要解决！！
 *  */

export default class RaceMainPage extends React.Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '赛事',
        headerTitleStyle: {
          marginLeft: 190
        }
      }
    }
  )
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      isRefetch: false
    }
  }

  testRefresh = () => {
    // 更改state，让其执行refetch
    this.setState({
      refreshing: true,
      isRefetch: true
    })
  }

  finishedRefresh = () => {
    this.setState({ refreshing: false, isRefetch: false })
  }
  render () {
    const { navigation } = this.props
    return <Query query={ALL_MATCH_SCHEDULE} fetchPolicy='cache-and-network' variables={{ orderBy: 'ORDER_NUMBER_ASC' }}>
      {({ data, error, loading, refetch }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        return (
          <Root>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.testRefresh}
                  title={'正在加载中'}
                />
              }
            >
              <Container>
                <Content style={[Styles.contentStyle, Styles.matchScheduleBox]}>
                  {
                    this.state.isRefetch === true && refetch() && this.finishedRefresh()
                  }
                  <View>
                    {data.allMatchSchedules.nodes.map((p, i) => {
                      return (
                        <RaceItem key={i} teamAName={p.footballTeamByTeamA.teamName} teamBName={p.footballTeamByTeamB.teamName}
                          teamAId={p.teamA} teamBId={p.teamB}
                          teamALogo={p.footballTeamByTeamA.imageByTeamLogo.url} matchId={p.id}
                          teamBLogo={p.footballTeamByTeamB.imageByTeamLogo.url} navigation={ navigation }
                          matchDate={p.matchDate} matchLocation={p.footballCourtByMatchLocation.courtName} wheelNumber={p.wheelNumber}/>
                      )
                    })
                    }

                  </View>
                </Content>
              </Container>
            </ScrollView>
          </Root>
        )
      }}
    </Query>
  }
}
