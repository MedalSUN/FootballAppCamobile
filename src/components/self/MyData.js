import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Tabs, Tab } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'
import { ALL_EVENTS, ALL_MATCH_SCHEDULE } from '../../gql/queries'
import MyDataTab from './components/MyDataTab'

export default class MyData extends React.Component {
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
    const personId = navigation.getParam('personId', '')
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab heading="进球" tabStyle={Styles.tabStyle} activeTabStyle={Styles.activeTabStyle} textStyle={Styles.textStyle} activeTextStyle={Styles.activeTextStyle}>
              <MyDataTab usearea={'进球'} personId={personId}/>
            </Tab>
            <Tab heading="助攻" tabStyle={Styles.tabStyle} activeTabStyle={Styles.activeTabStyle} textStyle={Styles.textStyle} activeTextStyle={Styles.activeTextStyle}>
              <MyDataTab usearea={'助攻'} personId={personId}/>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    )
  }
}
