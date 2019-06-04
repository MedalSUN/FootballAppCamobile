import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Container, Content, Badge } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Query } from 'react-apollo'
import Styles from './style'
import { ALL_EVENTS } from '../../../gql/queries'
import RaceTimeDetails from './RaceTimeDetails'

export default class RaceEventDetails extends React.Component {
  render () {
    const { matchId, teamAId, teamBId, teamAName, teamBName, teamALogo, teamBLogo } = this.props
    return <Query query={ALL_EVENTS} fetchPolicy='cache-and-network' variables={{ condition: { matchId: matchId }, orderBy: 'GOAL_TIME_ASC' }}>
      {({ data, error, loading }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        return (
          <View style={Styles.contentStyle}>
            {/* 主客队名称 */}
            <View style={Styles.teamNameBox}>
              <View style={Styles.teamNameLogoBox}>
                <Image style={Styles.teamLogo} source={{ uri: teamALogo }}/>
                <Text style={Styles.teamNameText}>{teamAName}</Text>
              </View>
              <View style={Styles.teamNameLogoBox}>
                <Text style={Styles.teamNameText}>{teamBName}</Text>
                <Image style={Styles.teamLogo} source={{ uri: teamBLogo }}/>
              </View>
            </View>
            {/* 图示区域 */}
            <View style={Styles.showImgHelp}>
              <View style={Styles.imgHelpTime}>
                <Text>时间:  </Text>
                <Badge info><Text>30</Text></Badge>
              </View>
              <View style={Styles.imgHelpTime}>
                <Text>进球:  </Text>
                <Ionicons name={'ios-football'} size={20} />
              </View>
              <View style={Styles.imgHelpTime}>
                <Text>助攻:  </Text>
                {/* <Ionicons name={'ios-football'} size={20} /> */}
                <Image style={Styles.assistLogo} source={require('../../../../img/assist.png')}/>
              </View>
            </View>
            {/* 时间柱区域 */}
            <RaceTimeDetails data={data} teamAId={teamAId} teamBId={teamBId}/>
          </View>
        )
      }}
    </Query>
  }
}
