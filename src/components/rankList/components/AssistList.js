import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'native-base'
import Styles from './style'
import { Query } from 'react-apollo'
import { ALL_ASSIST } from '../../../gql/queries'

import AssistListItem from './AssistListItem'

// 描述助攻榜数据
class AssistList extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View>
        {/* 头部的四个标题： 球员[包含头像和名字]，数据，详情 */}
        <View style={Styles.titleLevel}>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>球员</Text>
          </View>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>助攻</Text>
          </View>
          <View style={[Styles.titleBox, Styles.titleLevel]}>
            <Text style={Styles.titleTextStyle}>详情</Text>
          </View>
        </View>
        {/* 下方的所有数据 */}
        <Query query={ALL_ASSIST} variables={{ orderBy: 'ASSIST_NUM_DESC' }}>
          {({ data, error, loading }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>`Error! ${error.message}`</Text>
            return (
              <View>
                {data.allAssistLists.nodes.map((p, i) => {
                  return (
                    <AssistListItem key={i} assistNum={p.assistNum} assistId={p.assistId}
                      url={p.personByAssistId.imageByPlayerImg.url} assistName={p.personByAssistId.playerName}
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
export default AssistList
