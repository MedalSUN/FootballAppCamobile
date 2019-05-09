/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // =========== RaceItem 文件样式
  list: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EAE9D9'
  },
  listLift: {
    height: 100,
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20
    // backgroundColor: 'red'
  },
  listRight: {
    height: 100,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
    // backgroundColor: 'yellow'
  },
  raceLocation: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  teamImgSize: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 15
  },
  teamInfo: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  raceText: {
    marginBottom: 2,
    fontSize: 15,
    color: '#808080'
  },
  bottomLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#4B4B4B'
  },
  // ========RaceScore样式
  raceScore: {
    marginRight: 10,
    height: 60,
    width: 30
  },
  goalText: {
    width: '50%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
