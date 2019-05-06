
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

// 获取所有赛事
