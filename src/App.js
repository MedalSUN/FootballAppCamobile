import React from 'react'

import { createStackNavigator } from 'react-navigation'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// 引入登陆相关页面
import Login from './components/auth/Login'
import Register from './components/auth/Register'
// 引入底部导航栏
import BottomTabNavigator from './components/nav/BottomTabNavigator'

import { signIn, signOut, getToken } from './util'
import AV from 'leancloud-storage'
import { AV_APP_ID as appId, AV_APP_KEY as appKey } from './constants'
import { TextMessage, Realtime, Event } from 'leancloud-realtime'
import { TypedMessagesPlugin, ImageMessage } from 'leancloud-realtime-plugin-typed-messages'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  // 172.20.1.12是ip地址  使用IP地址 http://172.20.1.12:5000/graphql  注意： ip地址会经常变，所以要及时更换
  uri: 'http://172.20.0.142:5000/graphql',
  request: async (operation) => {
    const token = await getToken()
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY2FfcGVyc29uIiwicGVyc29uX2lkIjoiMzg0Y2EwYzQtMzEzYi00MGVkLWI1YzEtOGM2MGRmOGUwMzcwIiwiZXhwIjoxNTU3MjgxNDY0LCJpYXQiOjE1NTY2NzY2NjQsImF1ZCI6InBvc3RncmFwaGlsZSIsImlzcyI6InBvc3RncmFwaGlsZSJ9.Zexzwf6JUw512xgfeySXmuXn6Lf3ZrAm1qsBR9UUX80'
    let config = {}
    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`
      }
    }
    operation.setContext(config)
  }
})

// 登录模块
const AuthStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { headerTitle: '登录' } },
  Register: { screen: Register, navigationOptions: { headerTitle: '注册' } }
})

const LoggedInStack = createStackNavigator({
  HomeScreen: { screen: BottomTabNavigator, navigationOptions: { header: null } }
})

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount () {
    AV.initialize(appId, appKey)
    global.AV = AV

    console.log('av is:', AV)

    var realtime = new Realtime({
      appId: appId,
      appKey: appKey,
      plugins: [TypedMessagesPlugin] // 注册富媒体消息插件
    })

    global.realtime = realtime
  }

  handleChangeLoginState = (loggedIn = false, jwt) => {
    this.setState({ loggedIn })
    if (loggedIn) {
      signIn(jwt)
    } else {
      signOut()
    }
  };

  render () {
    return (
      <ApolloProvider client={client}>
        {/* <ChatScreen /> */}
        <Provider store={store}>
          {this.state.loggedIn
            ? <LoggedInStack screenProps={{ changeLoginState: this.handleChangeLoginState }} />
            : <AuthStack screenProps={{ changeLoginState: this.handleChangeLoginState }}/>}
        </Provider>
      </ApolloProvider>
    )
  }
}
