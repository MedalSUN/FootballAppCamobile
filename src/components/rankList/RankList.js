import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Container, Content, View } from 'native-base'
import RankNavigator from './components/RankNavigator'

class RankList extends Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: <RankNavigator/>
      }
    }
  )

  render () {
    return (
      <Container>
        <Content>
          <View>
            <Text>榜单</Text>
          </View>
        </Content>
      </Container>
    )
  }
}
export default RankList
