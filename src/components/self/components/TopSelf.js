import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Container, Content, View } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'
import { CURRENT_PERSON } from '../../../gql/queries'

// “我的”主页的顶部部分： 用于描述个人基本信息
class TopSelf extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refetched: false
    }
  }

  // 用于控制重新获取数据
  getValueToRefetch = (value) => {
    if (value) {
      this.setState({
        refetched: true
      })
    }
  }
  render () {
    const { navigation } = this.props
    return <Query query={CURRENT_PERSON}>
      {({ data, loading, error, refetch }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        return (<View style={Styles.topStyle}>
          {
            this.state.refetched === true && refetch() && this.setState({ refetched: false })
          }
          {/* 左半部分展示头像 */}
          <Image style={Styles.myHeaderImg} source={{ uri: data.currentPerson.imageByPlayerImg.url }}/>
          {/* 右半部分展示用户名，以及个性签名（可修改） */}
          <View style={Styles.myInfor}>
            {/* 用户名 */}
            <Text style={Styles.userNameStyle}>{data.currentPerson.playerName}</Text>
            {/* 个性签名 可修改 (限制字数20) */}
            {/* 在签名前面加一个可修改的笔图 */}
            <View style={Styles.userSpecialText}>
              <TouchableOpacity onPress={() => navigation.navigate('ChangeSelfAbout', { getValueToRefetch: this.getValueToRefetch })}>
                <Image style={Styles.updateSpecialTextImg} source={require('../../../../img/note.png')}/>
              </TouchableOpacity>
              {
                data.currentPerson.about === null ? <Text style={Styles.userSpecialTextStyle}>快去设置个性签名吧</Text> : <Text style={Styles.userSpecialTextStyle}>{data.currentPerson.about}</Text>
              }
            </View>
          </View>
        </View>)
      }}
    </Query>
  }
}
export default TopSelf
