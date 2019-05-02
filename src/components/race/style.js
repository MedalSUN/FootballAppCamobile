/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    paddingLeft: 20,
    backgroundColor: 'red'
  },
  listRight: {
    height: 100,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'yellow'
  },
  raceLocation: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
  // raceScore: {
  // }
})
