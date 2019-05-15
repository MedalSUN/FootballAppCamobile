
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

// 获取所有的赛程
export const ALL_MATCH_SCHEDULE = gql`
query allMatchSchedules($orderBy: [MatchSchedulesOrderBy!], $condition: MatchScheduleCondition, $filter: MatchScheduleFilter){
  allMatchSchedules(orderBy: $orderBy, condition: $condition, filter: $filter){
    totalCount
    nodes{
      id,
      orderNumber,
      wheelNumber,
      matchDate,
      teamA,
      footballTeamByTeamA{
        teamName,
        imageByTeamLogo{
          url
        }
      },
      teamB,
      footballTeamByTeamB{
        teamName,
        imageByTeamLogo{
          url
        }
      },
      footballCourtByMatchLocation{
        courtName
      },
      matchGoalById{
        goalA,
        goalB
      }
    }
  }
}
`

// 获取相应比赛的进球比分数据
export const ALL_MATCH_GOAL = gql`
query allMatchGoals($condition: MatchGoalCondition) {
  allMatchGoals(condition: $condition){
    totalCount
    nodes{
      goalA,
      goalB
    }
  }
}
`
// 获取当前登录人的信息
export const CURRENT_PERSON = gql`
query currentPerson{
  currentPerson{
    playerName,
    id,
    about,
    imageByPlayerImg{
      url
    }
  }
}
`

// 获取某一场比赛中的所有的进球细节
export const ALL_EVENTS = gql`
query allMatchEveryGoals($condition: MatchEveryGoalCondition, $orderBy: [MatchEveryGoalsOrderBy!] ){
  allMatchEveryGoals(condition: $condition, orderBy: $orderBy){
    totalCount
    nodes{
      matchId,
      goalTime,
      matchScheduleByMatchId{
        wheelNumber
      },
      personByShooterId{
        playerName,
        personTeamByPersonId{
            teamId
        }
      },
      personByAssistId{
         playerName
      }
    }
  }
}
`

// 获取主客队所有球员的数据
export const ALL_TEAM_PLAYER = gql`
query allPersonTeams($condition: PersonTeamCondition){
  allPersonTeams(condition: $condition){
    totalCount
    nodes{
      checked,
      teamId,
      personByPersonId{
        playerName,
        shirtNum,
        imageByPlayerImg{
          url
        }
      }
    }
  }
}
`
// 获取特定球队的所有数据
export const ALL_TEAM_MESSAGE = gql`
query allFootballTeams($condition: FootballTeamCondition){
  allFootballTeams(condition: $condition){
    totalCount
    nodes{
      id,
      teamName,
      teamAbout,
      teamLogo,
      imageByTeamLogo{
        url
      }
      memberNumber,
    }
  }
}
`
