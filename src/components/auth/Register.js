import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import Styles from './style'
import { Container, Content, Form, Item, Input, Text, View, Root, Toast } from 'native-base'
import { REGISTER_USER } from '../../gql/mutation'
import { client } from '../../shared_client'

export default class Login extends React.Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '注册',
        headerTitleStyle: {
          marginLeft: 135
        }
      }
    }
  )

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      userName: '',
      shirtNum: ''
    }
  }

  // Toast 提示信息
  showToast = (message) => {
    Toast.show({
      text: message,
      textStyle: { textAlign: 'center' },
      position: 'top',
      type: 'warning',
      duration: 1000
    })
  }

  // 获取输入框中的内容
  handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value
    }
    this.setState(newState)
  }

  // 注册成功后跳转到登录页面
  jumpToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  // 点击注册按钮，进行注册
  handleSubmit = () => {
    const { email, password, userName, shirtNum } = this.state
    if (email.length === 0 || password.length < 3 || userName === 0 || shirtNum < 0 || shirtNum > 12 || shirtNum.length === 0) {
      let message = '请按要求填写注册信息'
      this.showToast(message)
    } else {
      let subStr = email.substr(-7)
      console.log((subStr))
      // let emailFlag = reg.test(email)
      if (subStr !== '@qq.com') {
        let message = '邮箱格式错误，请重新填写'
        this.showToast(message)
      } else {
        const shirtNumInt = parseInt(shirtNum)
        client.mutate({
          mutation: REGISTER_USER,
          variables: {
            'input': {
              'playerName': userName,
              'shirtNum': shirtNumInt,
              'email': email,
              'password': password
            }
          }
        }).then((reponse) => {
          console.log(reponse)
          if (reponse.data.registerPerson.person.playerName === userName) {
            let message = '注册成功，开始新的征程吧！'
            this.showToast(message)
          }
        })
      }
    }
  }

  render () {
    return (
      <Root>
        <Container>
          <Content style={Styles.contentStyle}>
            <View style={Styles.columnFlex}>
              <Image style={Styles.registerImg} source={require('../../../img/logo.png')}/>
              <Form style={Styles.registerContent}>
                <Item>
                  <Input placeholder="姓名" onChangeText={value => this.handleInputChange('userName', value)}/>
                </Item>
                <Item>
                  <Input placeholder="注册邮箱(QQ邮箱)" onChangeText={value => this.handleInputChange('email', value)}/>
                </Item>
                <Item>
                  <Input placeholder="密码(>2位)" onChangeText={value => this.handleInputChange('password', value)}/>
                </Item>
                <Item>
                  <Input placeholder="球衣号码（1～12）" onChangeText={value => this.handleInputChange('shirtNum', value)}/>
                </Item>
              </Form>
              <TouchableOpacity onPress={ () => { this.handleSubmit() }}>
                <View style={Styles.registerButton}><Text> 注册 </Text></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => { this.jumpToLogin() }}>
                <Text style={Styles.completeText}> 注册成功？ 点这里去登录 </Text>
              </TouchableOpacity>
            </View>
          </Content>
        </Container>
      </Root>
    )
  }
}
