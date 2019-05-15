import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Content, Text, View } from 'native-base'

// import { ALL_IMG } from '../../gql/queries'
import Styles from './style'

class DefaultTeamPage extends Component {
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
    render () {
      const { navigation } = this.props
      const status = navigation.getParam('status', '')
      return (
        <Container>
          <Content style={Styles.contentStyle}>
            {
              status === '已申请' && <View style={Styles.defaultBox}>
                <Image style={Styles.defaultImg} source={require('../../../img/logo.png')}/>
                <Text style={Styles.text}>已经申请入队</Text>
                <Text style={Styles.text}>请耐心等待审核！</Text>
              </View>
            }
            {
              status === '未申请' && <View style={Styles.defaultBox}>
                <Image style={Styles.defaultImg} source={require('../../../img/logo.png')}/>
                <Text style={Styles.text}>还没参加任何球队</Text>
                <Text style={Styles.text}>快去申请入队参加比赛吧！</Text>
              </View>
            }
          </Content>
        </Container>
      )
    }
}
export default DefaultTeamPage
