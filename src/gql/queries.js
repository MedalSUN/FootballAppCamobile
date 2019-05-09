
import gql from 'graphql-tag'

// 获取所有的图片信息，用于测试使用
export const ALL_IMG = gql`
query allImages{
  allImages{
    nodes{
      url
    }
  }
}
`

// 获取射手榜的数据
export const ALL_SHOOTER = gql`
query allShooterLists($orderBy: [ShooterListsOrderBy!] ){
  allShooterLists(orderBy: $orderBy){
    nodes{
      shooterId
      goalNum
      personByShooterId{
        playerName,
        imageByPlayerImg{
          url
        }
      }
    }
  }
}`

// 获取助攻榜的数据
export const ALL_ASSIST = gql`
query allAssistLists($orderBy: [AssistListsOrderBy!] ){
  allAssistLists(orderBy: $orderBy){
    nodes{
      assistId,
      assistNum,
      personByAssistId{
        playerName,
        imageByPlayerImg{
          url
        }
      }
    }
  }
}
`

// 获取积分榜的数据
export const ALL_SCORE = gql`
query allScores($orderBy: [ScoresOrderBy!]){
  allScores(orderBy: $orderBy){
    nodes{
      teamScore,
      teamId,
      footballTeamByTeamId{
        id,
        teamName,
        imageByTeamLogo{
          url
        }
      }
    }
  }
}
`
