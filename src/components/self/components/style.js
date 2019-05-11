/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // ======= TopSelf文件
  topStyle: {
    backgroundColor: '#F7F7F7',
    height: 150,
    marginLeft: 10,
    marginTop: 15,
    marginRight: 10,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bottomStyle: {
    height: 300,
    marginLeft: 15,
    marginTop: 20,
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  myHeaderImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 10
  },
  myInfor: {
    height: 100,
    width: 250,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  userNameStyle: {
    fontSize: 20,
    color: 'rgb(235,172,0)',
    fontFamily: 'Helvetica Neue',
    marginBottom: 10
  },
  userSpecialText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  updateSpecialTextImg: {
    height: 10,
    width: 10,
    marginRight: 5
  },
  userSpecialTextStyle: {
    fontSize: 12,
    color: '#424242',
    fontFamily: 'Helvetica Neue'
  },
  // ============BottomSelf文件样式
  bottomButtonStyle: {
    width: 300,
    height: 50,
    backgroundColor: '#C2C2C2',
    borderWidth: 1,
    borderColor: '#B9D3EE',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomButtonTextStyle: {
    fontSize: 20,
    color: '#5C5C5C',
    fontFamily: 'Helvetica Neue'
  },
  // ========= UpdateAbout文件中的样式
  aboutTextLength: {
    height: 22,
    lineHeight: 22,
    marginTop: 11,
    marginRight: 20,
    marginLeft: 308
  },
  textlength: {
    fontSize: 16,
    color: '#c1c1c1'
  },
  profileMarginTop65: {
    marginTop: 50,
    marginLeft: 43,
    marginRight: 43
  },
  // =========ChangeAboutTextArea文件样式
  backImg: {
    width: 24,
    height: 24,
    marginLeft: 20
  },
  textAreaStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 380
  },
  textAreaBoxStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    height: 100,
    width: 380
  },
  errorTextStyle: {
    color: 'rgb(250,122,21)',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(250,122,21)'
  }

})
