import React, { Component } from 'react'
// import { RefreshControl, ScrollView } from 'react-native'
import { Container, Content } from 'native-base'

// import { ALL_IMG } from '../../gql/queries'
import Styles from './style'
import BottomSelf from './components/BottomSelf'
import TopSelf from './components/TopSelf'

class SelfMainPage extends Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '我的',
        headerTitleStyle: {
          marginLeft: 190
        }
      }
    }
  )
  render () {
    const { navigation } = this.props
    return (
      <Container>
        <Content style={Styles.contentStyle}>
          <TopSelf navigation={navigation}/>
          <BottomSelf navigation={navigation}/>
        </Content>
      </Container>
    )
  }
}
export default SelfMainPage
