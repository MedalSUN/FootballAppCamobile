/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // ======= RankNavigator文件样式
  navLevelStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40
  },
  noTouchTextStyle: {
    fontSize: 20,
    color: '#808080',
    fontFamily: 'Helvetica Neue'
  },
  touchTextStyle: {
    fontSize: 23,
    color: '#0033FF',
    fontFamily: 'Helvetica Neue'
  },
  ViewStyle: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // ========= ShooterList的样式
  titleLevel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleBox: {
    width: '30%',
    height: 50
  },
  titleTextStyle: {
    fontSize: 18,
    color: '#808080',
    fontFamily: 'Helvetica Neue'
  },
  // ========== ShooterListItem的样式
  dataLevel: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataLevelFlexStart: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imgSize: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 15
  },
  listItemBox: {
    width: '30%'
  },
  shooterText: {
    fontSize: 15,
    color: '#969696',
    fontFamily: 'Helvetica Neue'
  },
  bottomLevel: {
    width: 30,
    height: 1,
    backgroundColor: '#808080'
  }
})
