import React from 'react'
import { Image, View, TouchableOpacity, Text, Linking } from 'react-native'
// import { Container, Content } from 'native-base'
import Styles from './style'

// 获取新闻接口中的数据
export default class NewsItem extends React.Component {
  openNews =(value) => {
    let url = value
    Linking.openURL(url)
  }

  render () {
    const { title, pic, src, time, url } = this.props
    return (
      <TouchableOpacity onPress={() => { this.openNews(url) }}>
        <View>
          {
            title && <View style={Styles.newsArea}>
              {/* title区域 */}
              <View style={Styles.titleBoxStyle}>
                <Text style={Styles.titleStyle}>{title}</Text>
              </View>
              {/* 图片区域 */}
              {
                pic && <View style={Styles.imgBoxStyle}>
                  <Image style={Styles.newsImg} source={{ uri: pic }}/>
                  {/* <Image style={Styles.newsImg} source={require('../../../img/logo.png')}/> */}
                </View>
              }
              {/* 时间，来源区域 */}
              <View style={[Styles.rowFlex]}>
                {/* 时间 */}
                <View style={Styles.rowFlex}>
                  <Text style={Styles.otherTextColor}>时间:  </Text>
                  <Text style={Styles.timeTextStyle}>{time}</Text>
                </View>
                {/* 来源 */}
                <View style={Styles.rowFlex}>
                  <Text style={Styles.otherTextColor}>来源:  </Text>
                  <Text style={Styles.srcTextStyle}>{src}</Text>
                </View>
              </View>
            </View>
          }
        </View>
      </TouchableOpacity>

    )
  }
}
