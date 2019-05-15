/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  contentStyle: {
    backgroundColor: '#F2F2F2'
  },
  // ======== 三个Details样式
  goalDetailsTop: {
    height: 60,
    paddingLeft: 50,
    paddingRight: 20,
    backgroundColor: '#C0C0C0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topTitleText: {
    fontSize: 20,
    color: '#808080',
    fontFamily: 'Helvetica Neue'
  },
  goalDetailsContent: {
    marginTop: 30
  },
  goalDetailsItem: {
    height: 60,
    paddingLeft: 50,
    paddingRight: 20,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
