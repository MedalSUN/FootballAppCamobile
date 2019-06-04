/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // =========== RaceItem 文件样式
  list: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 380,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0'
  },
  listLift: {
    height: 100,
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  listRight: {
    height: 100,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
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
    height: 60,
    width: 30
  },
  goalText: {
    width: '50%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  warnText: {
    fontFamily: 'Helvetica Neue',
    color: '#CC9933'

  },
  // ======= RaceEventDetails文件样式
  contentStyle: {
    backgroundColor: '#F2F2F2'
  },
  assistLogo: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5
  },
  teamNameBox: {
    height: 60,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  teamNameText: {
    fontWeight: '800',
    fontFamily: 'Helvetica Neue'
  },
  teamNameLogoBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamLogo: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 30
  },
  showImgHelp: {
    height: 50,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imgHelpTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // ================ RaceEventItem文件样式
  teamEventLeftBox: {
    width: 150,
    height: 55,
    marginLeft: 30,
    paddingRight: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C0C0C0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamEventLeftTimeBox: {
    width: 45,
    height: 55,
    paddingRight: 5,
    marginLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  teamEventLeftPlayerBox: {
    width: 100,
    height: 55,
    paddingRight: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  teamEventRightTimeBox: {
    width: 45,
    height: 55,
    paddingLeft: 15,
    marginRight: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  teamEventRightBox: {
    width: 150,
    height: 55,
    paddingLeft: 5,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C0C0C0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  teamEventRightPlayerBox: {
    width: 100,
    height: 55,
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  playerRoleBox: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playerLeftText: {
    fontFamily: 'Helvetica Neue',
    color: '#969696',
    fontSize: 15,
    marginRight: 10
  },
  playerRightText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    color: '#969696',
    marginLeft: 10
  },
  // ===== RaceTimeDetails文件样式
  timeDetailsBox: {
    height: 550,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative'
  },
  timeIconBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeColumn: {
    marginTop: 10,
    width: 1,
    height: 450,
    backgroundColor: 'blue'
  },
  timeEventBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftTeamEvent: {
    width: '48%',
    height: '98%',
    position: 'relative'
  },
  rightTeamEvent: {
    width: '48%',
    height: '98%',
    position: 'relative'
  },
  // =========== TeamPlayer文件样式
  teamLogoSize: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 60
  },
  teamLogoBox: {
    marginTop: 30,
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
  otherText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#CCCC00'
  },
  playerHeaderImg: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 10
  },
  marginTop15: {
    marginTop: 15
  },
  playerNameText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    color: '#646464'
  },
  allPlayerContainer: {
    height: 450
  }
})
