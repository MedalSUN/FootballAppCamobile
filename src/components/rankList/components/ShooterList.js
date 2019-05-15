import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'native-base'
import Styles from './style'
import { Query } from 'react-apollo'
import { ALL_SHOOTER } from '../../../gql/queries'

import ShooterListItem from './ShooterListItem'

class ShooterList extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { navigation } = this.props
    return (
      <View>
        {/* 头部的四个标题： 球员[包含头像和名字]，数据，详情 */}
        <View style={Styles.titleLevel}>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>球员</Text>
          </View>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>进球</Text>
          </View>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>详情</Text>
          </View>
        </View>
        {/* 下方的所有数据 */}
        <Query query={ALL_SHOOTER} variables={{ orderBy: 'GOAL_NUM_DESC' }}>
          {({ data, error, loading }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>`Error! ${error.message}`</Text>
            return (
              <View>
                {data.allShooterLists.nodes.map((p, i) => {
                  return (
                    <ShooterListItem key={i} goalNum={p.goalNum} shooterId={p.shooterId} navigation={navigation}
                      url={p.personByShooterId.imageByPlayerImg.url} shooterName={p.personByShooterId.playerName}
                    />
                  )
                })
                }

              </View>
            )
          }}
        </Query>
      </View>
    )
  }
}
export default ShooterList
