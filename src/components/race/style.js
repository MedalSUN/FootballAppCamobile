/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  contentStyle: {
    backgroundColor: '#F2F2F2'
  },
  // =======RaceDetails文件
  tabStyle: {
    backgroundColor: '#FFFFFF'
  },
  activeTabStyle: {
    backgroundColor: '#FFFFFF'
  },
  textStyle: {
    color: '#969696'
  },
  activeTextStyle: {
    color: '#646464'
  },
  // =======TeamHomePage文件样式
  teamLogo: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 100
  },
  teamPageTop: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamLogoNameText: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Helvetica Neue',
    fontWeight: '800',
    color: '#FF9933'
  },
  teamAboutText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    color: '#CC6666'
  },
  allPlayerContainer: {
    height: 450
  },
  timeEventBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playerBox: {
    marginLeft: 150,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  marginTop15: {
    marginTop: 15
  },
  playerHeaderImg: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 10
  },
  playerNameText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    color: '#646464'
  },
  bottomBox: {
    marginBottom: 20
  },
  joinTeam: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#66CC66',
    backgroundColor: '#66CC66'
  }
})
