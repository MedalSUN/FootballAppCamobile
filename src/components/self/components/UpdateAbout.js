import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import Styles from './style'
import ChangeAboutTextArea from './ChangeAboutTextArea'
import { Text, Form as NativeBaseForm, Button, View, Container, Content } from 'native-base'
import { UpdateAboutValidate } from '../../../validate/self/UpdateAboutValidate'

class UpdateAbout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitted: false,
      length: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
  }
  handleTextAreaChange = (value) => {
    this.setState({
      length: value.length
    })
  }
  handleSubmit = (value) => {
    this.props.onSubmit(value)
    return this.setState({ submitted: true })
  }
  renderchangeAboutTextArea = ({ input, placeholder, meta, meta: { touched, error, warning }, handleTextAreaChange }) => {
    var hasError = false
    if (error !== undefined && touched) {
      hasError = true
    }
    return (
      <ChangeAboutTextArea placeholder={placeholder} TextAreaError={hasError} textAreaChange={handleTextAreaChange} meta={meta} input={input} />
    )
  }
  render () {
    return (
      <Form
        onSubmit={this.props.onSubmit}
        validate={UpdateAboutValidate}
        render={({ pristine, value, invalid, handleSubmit, submitting }) => (
          <NativeBaseForm>
            <Field name="changeAbout" component={this.renderchangeAboutTextArea} handleTextAreaChange={this.handleTextAreaChange} placeholder="快介绍一下自己吧" />
            <View style={[Styles.aboutTextLength]}>
              <Text style={[Styles.textlength]}>{this.state.length}/20</Text>
            </View>
            <View style={[Styles.profileMarginTop65]}>
              <Button block warning onPress={() => handleSubmit(value)} disabled={pristine || invalid || this.state.submitted}>
                <Text> 提交 </Text>
              </Button>
            </View>
          </NativeBaseForm>
        )} />
    )
  }
}

export default UpdateAbout
