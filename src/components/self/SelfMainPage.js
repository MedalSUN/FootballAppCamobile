// import React from 'react'
// import { View, TouchableOpacity, Text } from 'react-native'
// // import { Button, Input, Image, Text } from 'react-native-elements'

// // import Styles from './style'

// export default class SelfMainPage extends React.Component {
//   render () {
//     return (
//       <View>
//         <Text>我的主页</Text>
//       </View>
//     )
//   }
// }

import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Container, Content, View } from 'native-base'
import { Query } from 'react-apollo'
import Styles from './style'

import { ALL_IMG } from '../../gql/queries'

class SelfMainPage extends Component {
  render () {
    return < Query query={ALL_IMG} >
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>
        return (
          <Container>
            <Content>
              <View>
                {
                  console.log(data)
                }
                {
                  data.allImages.nodes.map((p, i) => {
                    return (
                      <View key={i} >
                        <View>
                          <Image source={{ uri: p.url }} style={Styles.imgSize}/>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </Content>
          </Container>
        )
      }
      }
    </Query>
  }
}
export default SelfMainPage
