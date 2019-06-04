import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text, Image } from 'react-native'
import { Container, Content } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'
import { ALL_TEAM_PLAYER } from '../../../gql/queries'

export default class TeamPlayer extends React.Component {
  render () {
    const { teamId, teamName, teamLogo } = this.props
    return <Query query={ALL_TEAM_PLAYER} fetchPolicy='cache-and-network' variables={{ condition: { teamId: teamId, checked: true } }}>
      {({ data, error, loading }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        return (
          <View style={Styles.contentStyle}>
            {/* 球队logo以及球队名称 */}
            <View style={Styles.teamLogoBox}>
              <Image style={Styles.teamLogoSize} source={{ uri: teamLogo }}/>
              <Text style={Styles.teamLogoNameText}>{teamName}</Text>
            </View>
            {/* 球队成员 */}
            <View>
              <View style={Styles.timeEventBox}>
                <Text style={Styles.otherText}>球队成员</Text>
              </View>
              {/* 展示球队的所有球员 */}
              <View style={Styles.allPlayerContainer}>
                {
                  data.allPersonTeams.nodes.map((p, i) => {
                    return (
                      <View key={i} style={[Styles.timeEventBox, Styles.marginTop15]}>
                        <Image style={Styles.playerHeaderImg} source={{ uri: p.personByPersonId.imageByPlayerImg.url }}/>
                        <Text style={Styles.playerNameText}>{p.personByPersonId.playerName}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </View>
        )
      }}
    </Query>
  }
}
