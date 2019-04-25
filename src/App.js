import React from 'react'

import {View, Text} from 'react-native'



// 与Apollo有关的第三方依赖
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'

// import {Text, View} from 'native-base'


import Login from './components/auth/Login'



export default class App extends React.Component {
  constructor (props) {
    super(props)
  }


  render () {
    return (

      <View>
            <Login></Login>
      </View>
    )
  }
}
