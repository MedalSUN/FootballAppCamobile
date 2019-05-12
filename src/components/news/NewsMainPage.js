import React from 'react'
// import { Image, View, TouchableOpacity, Text, Linking, ScrollView, RefreshControl } from 'react-native'
import { Container, Content } from 'native-base'
import Styles from './style'
import NewsItem from './components/NewsItem'

// 获取新闻接口中的数据
export default class NewsMainPage extends React.Component {
  static navigationOptions = (
    (props) => {
      return {
        headerTitle: '新闻',
        headerTitleStyle: {
          marginLeft: 190
        }
      }
    }
  )
  constructor (props) {
    super(props)
    this.state = {
      newsList: []
    }
  }
   getFootballNews = async () => {
     try {
       // 注意这里的await语句，其所在的函数必须有async关键字声明
       await fetch(
         'https://api.jisuapi.com/news/search?keyword=校园足球&appkey=204301153e6c8f53'
       ).then(response => {
         response.json()
           .then(res => {
             this.setState({
               newsList: res.result.list
             })
           })
       })
     } catch (error) {
       console.error(error)
     }
   }

   componentDidMount () {
     this.getFootballNews()
   }

   render () {
     return (
     //  <ScrollView
     //    refreshControl={
     //      <RefreshControl
     //        refreshing={this.state.refreshing}
     //        onRefresh={this.testRefresh}
     //        title={'正在加载中'}
     //      />
     //    }
     //  >
       <Container>
         <Content style={Styles.contentStyle}>
           {
             this.state.newsList && console.log(this.state.newsList)
           }
           {
             this.state.newsList && this.state.newsList.map((p, i) => {
               return <NewsItem key={i} title={p.title} pic={p.pic} src={p.src} time={p.time} url={p.url}/>
             })
           }
           <NewsItem/>
         </Content>
       </Container>
     //  </ScrollView>
     )
   }
}
