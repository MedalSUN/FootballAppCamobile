import gql from 'graphql-tag'

// 用于修改个性签名
export const UPDATE_PERSON_ABOUT = gql`
mutation changePersonAbout($input: ChangePersonAboutInput!){
    changePersonAbout(input: $input){
      string
    }
  }
`
// 用于注册用户参加球队
export const JOIN_TEAM = gql`
mutation joinTeam($input: JoinTeamInput!){
  joinTeam(input: $input){
    string
  }
}
`
// 用户注册操作
export const REGISTER_USER = gql`
mutation registerPerson($input:RegisterPersonInput!){
  registerPerson(input: $input){
    person{
      playerName
      playerImg
    }
  }
}
`
