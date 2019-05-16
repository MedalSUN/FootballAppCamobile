import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'native-base'
// import { Query } from 'react-apollo'
import Styles from './style'
import { ALL_TEAM_PLAYER, CURRENT_PERSON } from '../../../gql/queries'
import { client } from '../../../shared_client'
// “我的”主页的下半部分： 导航到不同页面的按钮
class BottomSelf extends Component {
  constructor (props) {
    super(props)
    this.personId = ''
  }

  joinTeam = () => {
    client.query({
      query: ALL_TEAM_PLAYER,
      fetchPolicy: 'network-only',
      variables: {
        'condition': {
          'personId': this.personId
        }
      }
    }).then((reponse) => {
      let arr = reponse.data.allPersonTeams.nodes[0]
      if (arr) {
        let checked = arr.checked
        let teamId = arr.teamId
        if (checked) {
          this.props.navigation.navigate('TeamHomePage', { teamId: teamId })
        } else {
          this.props.navigation.navigate('DefaultTeamPage', { status: '已申请' })
        }
      } else {
        this.props.navigation.navigate('DefaultTeamPage', { status: '未申请' })
      }
    })
  }

  componentDidMount () {
    client.query({
      query: CURRENT_PERSON
    }).then((reponse) => {
      this.personId = reponse.data.currentPerson.id
    })
  }

  // 退出登录函数
  logOut = () => {
    this.props.screenProps.changeLoginState(false)
  }

  render () {
    const { navigation } = this.props
    return (
      <View style={Styles.bottomStyle}>
        {/* 我的球队 */}
        <TouchableOpacity onPress={() => this.joinTeam()}>
          <View style={Styles.bottomButtonStyle}>
            <Text style={Styles.bottomButtonTextStyle}>我的球队</Text>
          </View>
        </TouchableOpacity>
        {/* 我的数据 */}
        <TouchableOpacity onPress={() => navigation.navigate('MyData', { personId: this.personId })}>
          <View style={Styles.bottomButtonStyle}>
            <Text style={Styles.bottomButtonTextStyle}>我的数据</Text>
          </View>
        </TouchableOpacity>
        {/* 退出登录 */}
        <TouchableOpacity onPress={() => this.logOut() }>
          <View style={Styles.bottomButtonStyle}>
            <Text style={Styles.bottomButtonTextStyle}>退出登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
export default BottomSelf
