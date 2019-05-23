import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Styles from './components/style'
import { Mutation } from 'react-apollo'
import { UPDATE_PERSON_ABOUT } from '../../gql/mutation'
import { Container, Content, Toast, Root } from 'native-base'

import UpdateAbout from './components/UpdateAbout'

export default class ChangeSelfAbout extends React.Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '修改签名',
        headerTitleStyle: {
          marginLeft: 110
        },
        headerBackImage: (
          <TouchableOpacity onPress={() => { props.navigation.state.params.backNav() }} >
            <Image style={[Styles.backImg]} source={require('../../../img/icon_back.png')} />
          </TouchableOpacity>
        )
      }
    }
  )
  componentDidMount () {
    this.props.navigation.setParams({ backNav: this.navigationBack })
  }

  navigationBack = () => {
    this.props.navigation.goBack()
    // 向父组件发送信息，执行刷新
    this.props.navigation.getParam('getValueToRefetch', '')(true)
  }

  // 显示提示非模态弹窗
  showToast = (message) => {
    let messOne
    if (message === '修改签名成功') {
      messOne = true
    } else {
      messOne = false
    }
    Toast.show({
      text: message,
      textStyle: { textAlign: 'center' },
      position: 'top',
      type: messOne === true ? 'success' : 'warning',
      duration: 1000
    })
  }

  render () {
    const { navigation } = this.props
    return <Mutation mutation={UPDATE_PERSON_ABOUT}>
      {(changePersonAbout, { data, error, loading }) => (
        <Root>
          <Container>
            <Content>
              <UpdateAbout
                data={data}
                onSubmit={ (value) => {
                  changePersonAbout({ variables: { input: { _about: value.changeAbout } } })
                }}
              />
              {
                data && this.showToast(data.changePersonAbout.string)
              }
            </Content>
          </Container>
        </Root>
      )}
    </Mutation>
  }
}
