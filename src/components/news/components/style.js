/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // ======= NewsItem文件样式
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  newsImg: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  newsArea: {
    width: 380,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0'
  },
  titleBoxStyle: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 16,
    color: '#5C5C5C',
    fontFamily: 'Helvetica Neue'
  },
  imgBoxStyle: {
    marginBottom: 10
  },
  timeTextStyle: {
    fontSize: 12,
    color: '#FF9900',
    fontFamily: 'Helvetica Neue'
  },
  srcTextStyle: {
    fontSize: 12,
    color: '#FF9900',
    fontFamily: 'Helvetica Neue'
  },
  otherTextColor: {
    fontSize: 12,
    color: '#808080',
    fontFamily: 'Helvetica Neue'
  }
})
