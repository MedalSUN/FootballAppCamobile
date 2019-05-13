import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Container, Content } from 'native-base'
import RaceItem from './components/RaceItem'
import { Query } from 'react-apollo'
import Styles from './style'
import { ALL_MATCH_SCHEDULE } from '../../gql/queries'

export default class RaceMainPage extends React.Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '新闻',
        headerTitleStyle: {
          marginLeft: 190
        }
      }
    }
  )
  render () {
    const { navigation } = this.props
    return <Query query={ALL_MATCH_SCHEDULE} variables={{ orderBy: 'ORDER_NUMBER_ASC' }}>
      {({ data, error, loading }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        return (
          <Container>
            <Content style={Styles.contentStyle}>
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

        )
      }}
    </Query>
  }
}
