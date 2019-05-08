import React from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Container, Content } from 'native-base'
// import { Button, Input, Image, Text } from 'react-native-elements'

import Styles from './style'

const ALL_IMG = gql`
query allImages($condition: ImageCondition){
  allImages(condition: $condition){
    totalCount
    nodes{
      url,
    }
  }
}
`

// 获取新闻接口中的数据
export default class NewsMainPage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props)
  }

  //  getData = async () => {
  //    try {
  //      // 注意这里的await语句，其所在的函数必须有async关键字声明
  //      let response = await fetch(
  //        ' http://api.avatardata.cn/SportsNews/Query?key=91c210b6f0d1442dbcd6e8bc6c47dd34&page=1&rows=10'
  //      )
  //      let responseJson = await response.json()
  //      //  return responseJson.movies
  //      console.log(responseJson)
  //    } catch (error) {
  //      console.error(error)
  //    }
  //  }

  // getData = () => {
  // fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => {
  //       // 获取到网络请求返回的对象
  //       response.json()
  //     })
  //     .then((result) => {
  //       // 网络请求成功，处理请求到的数据
  //       console.log(result)
  //     })
  //     .catch((error) => {
  //       // 网络请求失败，处理错误信息
  //       console.log(error)
  //     })
  //   }

  //  getMoviesFromApi = async () => {
  //    try {
  //      // 注意这里的await语句，其所在的函数必须有async关键字声明
  //      let response = await fetch(
  //        'https://api.avatardata.cn/SportsNews/Query'
  //      )
  //      let responseJson = await response.json()
  //      return responseJson.movies
  //    } catch (error) {
  //      console.error(error)
  //    }
  //  }

  //  componentDidMount () {
  //    let res = this.getMoviesFromApi()
  //    console.log(res)
  //  }

  //  render () {
  //    return (
  //      <View>
  //        <Text>新闻首页</Text>
  //      </View>
  //    )
  //  }

  render () {
    return <Query query={ALL_IMG}
      variables={{ condition: { imgUser: '信电logo' } }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        console.log(data.allImages.nodes[0].url)
        return (
          <Container>
            <Content>
              <Image style={Styles.test} source={{ uri: data.allImages.nodes[0].url }}/>
            </Content>
          </Container>
        )
      }}

    </Query>
  }
}
