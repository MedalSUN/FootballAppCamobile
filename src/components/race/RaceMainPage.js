import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Container, Content } from 'native-base'
import RaceItem from './components/RaceItem'

export default class RaceMainPage extends React.Component {
  render () {
    return (
      <Container>
        <Content>
          <RaceItem/>
        </Content>
      </Container>
    )
  }
}
