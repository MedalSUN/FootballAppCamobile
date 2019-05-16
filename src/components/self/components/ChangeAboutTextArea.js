import { Item, Text, Textarea } from 'native-base'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Styles from './style'

export default class ChangeAboutTextArea extends Component {
  render () {
    const { TextAreaError, placeholder, input, meta, textAreaChange } = this.props

    return (
      <Item error={TextAreaError} style={[Styles.textAreaBoxStyle]}>
        <Textarea
          style={[Styles.textAreaStyle]}
          placeholder={placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          allowFontScaling
          bordered
          {...input}
          onChangeText={value => textAreaChange(value)}
        />
        {meta.error && meta.touched && <Text style={Styles.errorTextStyle} >{meta.error}</Text>}
      </Item>
    )
  }
}

ChangeAboutTextArea.propTypes = {
  placeholder: PropTypes.string
}
