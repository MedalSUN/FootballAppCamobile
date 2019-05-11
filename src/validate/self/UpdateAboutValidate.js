export const UpdateAboutValidate = value => {
  const error = {}
  if (!value.changeAbout) {
    error.changeAbout = '不能为空哦'
  }
  if (value.changeAbout && value.changeAbout.length > 20) {
    error.changeAbout = '超出字数限制'
  }
  return error
}
