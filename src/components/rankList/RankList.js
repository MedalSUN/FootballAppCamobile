import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Container, Content, View } from 'native-base'
import RankNavigator from './components/RankNavigator'
import Styles from './style'

// 引入三个榜单组件
import ShooterList from './components/ShooterList'
import AssistList from './components/AssistList'
import ScoreList from './components/ScoreList'

class RankList extends Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: <RankNavigator navigation={props.navigation}/>
      }
    }
  )
  constructor (props) {
    super(props)
    this.state = {
      showItem: 'A'
    }
  }

  // 函数：获取标题组件的点击的标题
  getNavItem = (value) => {
    console.log(value)
    this.setState({
      showItem: value
    })
  }

  componentDidMount = () => {
    this.props.navigation.setParams({ getNavItem: this.getNavItem })
  }

  render () {
    return (
      <Container>
        <Content style={Styles.contentStyle}>
          <View>
            {this.state.showItem === 'A' && <ShooterList/> }
            {this.state.showItem === 'B' && <AssistList/> }
            {this.state.showItem === 'C' && <ScoreList/> }
          </View>
        </Content>
      </Container>
    )
  }
}
export default RankList
