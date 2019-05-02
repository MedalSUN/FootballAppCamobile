import { Button } from 'native-base' // 2.3.3
import React, { Component } from 'react'
import { Image, View, ImageBackground } from 'react-native'
import Styles from '../style'

class GenderRadioButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      maleSelected: true
    }
    this.toggleMaleSelected = this.toggleMaleSelected.bind(this)
  }

  toggleMaleSelected () {
    this.setState(prevState => ({
      maleSelected: !prevState.maleSelected
    }))
  }

  render () {
    return (
      <View>
        {/* <ImageBackground style={Styles.genderButtonView} source={require('../../../../img/register-top.png')} resizeMode="contain" >
          <View style={Styles.genderButtonVie}>
            <ImageBackground transparent style={Styles.genderButtonHeight100} source={require('../../../../img/head-man.png')} resizeMode="contain" >
              {this.state.maleSelected
                ? <Image style={Styles.genderButtonHeight100} source={require('../../../../img/head-man.png')} />
                : <Image style={Styles.genderButtonHeight100} source={require('../../../../img/head-femle.png')} />}
              <View style={Styles.genderButtonAlignItems}>
                <Image style={Styles.regNexHeight30} source={require('../../../../img/head-selection.png')} resizeMode="contain" />
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
        <View style={Styles.regNexTop80} >
          <Button transparent style={Styles.rightIcon} onPress={this.toggleMaleSelected}>
            {this.state.maleSelected
              ? <Image style={Styles.genderImage} source={require('../../../../img/manicon-yes.png')} />
              : <Image style={Styles.genderImage} source={require('../../../../img/manicon-no.png')} />}
          </Button>

          <Button transparent style={Styles.rigMagin} onPress={this.toggleMaleSelected}>
            {this.state.maleSelected
              ? <Image style={Styles.genderImage} source={require('../../../../img/femaleicon-no.png')} />
              : <Image style={Styles.genderImage} source={require('../../../../img/femaleicon-yes.png')} />}
          </Button>
        </View> */}
      </View>
    )
  }
}
export default GenderRadioButton
