import gql from 'graphql-tag'

// 用于修改个性签名
export const UPDATE_PERSON_ABOUT = gql`
mutation changePersonAbout($input: ChangePersonAboutInput!){
    changePersonAbout(input: $input){
      string
    }
  }
`
