import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Header, Left, Button, Icon, Body, Title, Right, Segment, Tabs, Tab } from 'native-base'
import RaceItem from './components/RaceItem'
import { Query } from 'react-apollo'
import Styles from './style'
import RaceEventDetails from './components/RaceEventDetails'
import TeamPlayer from './components/TeamPlayer'
import { ALL_MATCH_SCHEDULE } from '../../gql/queries'

export default class RaceDetails extends React.Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '比赛详情',
        headerTitleStyle: {
          marginLeft: 110
        }
      }
    }
  )
  render () {
    const { navigation } = this.props
    const matchId = navigation.getParam('matchId', '')
    const teamAId = navigation.getParam('teamAId', '')
    const teamBId = navigation.getParam('teamBId', '')
    const teamAName = navigation.getParam('teamAName', '')
    const teamBName = navigation.getParam('teamBName', '')
    const teamALogo = navigation.getParam('teamALogo', '')
    const teamBLogo = navigation.getParam('teamBLogo', '')
    return <Query query={ALL_MATCH_SCHEDULE} fetchPolicy='cache-and-network' variables={{ orderBy: 'ORDER_NUMBER_ASC' }}>
      {({ data, error, loading }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        return (
          <Container>
            <Content style={Styles.contentStyle}>
              <Tabs>
                <Tab heading="事件" tabStyle={Styles.tabStyle} activeTabStyle={Styles.activeTabStyle} textStyle={Styles.textStyle} activeTextStyle={Styles.activeTextStyle}>
                  <RaceEventDetails matchId={matchId} teamAId={teamAId} teamBId={teamBId}
                    teamAName={teamAName} teamBName={teamBName} teamALogo={teamALogo} teamBLogo={teamBLogo}/>
                </Tab>
                <Tab heading="主队球员" tabStyle={Styles.tabStyle} activeTabStyle={Styles.activeTabStyle} textStyle={Styles.textStyle} activeTextStyle={Styles.activeTextStyle}>
                  <TeamPlayer teamId={teamAId} teamName={teamAName} teamLogo={teamALogo}/>
                </Tab>
                <Tab heading="客队球员" tabStyle={Styles.tabStyle} activeTabStyle={Styles.activeTabStyle} textStyle={Styles.textStyle} activeTextStyle={Styles.activeTextStyle}>
                  <TeamPlayer teamId={teamBId} teamName={teamBName} teamLogo={teamBLogo}/>
                </Tab>
              </Tabs>
            </Content>
          </Container>
        )
      }}
    </Query>
  }
}
