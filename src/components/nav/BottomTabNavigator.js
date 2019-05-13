
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// 首页模块页面引入
import NewsMainPage from '../../components/news/NewsMainPage'

// 赛事模块页面引入
import RaceMainPage from '../../components/race/RaceMainPage'
import RaceDetails from '../../components/race/RaceDetails'

// 榜单模块页面引入
import RankList from '../../components/rankList/RankList'

// 我的模块页面引入
import SelfMainPage from '../../components/self/SelfMainPage'
import ChangeSelfAbout from '../../components/self/ChangeSelfAbout'

// 创建BottomTabNavigator的几个stack
// 1: 创建首页模块
const NewsStack = createStackNavigator({
  NewsMainPage: { screen: NewsMainPage, navigationOptions: { headerTitle: '新闻' } }
})

// 2: 创建赛事模块
const RaceStack = createStackNavigator({
  RaceMainPage: { screen: RaceMainPage, navigationOptions: { headerTitle: '赛事' } },
  RaceDetails: { screen: RaceDetails }
})

// 3:创建榜单模块
const RankStack = createStackNavigator({
  RankList: { screen: RankList }
})

// 4: 创建我的模块
const SelfStack = createStackNavigator({
  SelfMainPage: { screen: SelfMainPage, navigationOptions: { headerTitle: '我的' } },
  ChangeSelfAbout: { screen: ChangeSelfAbout, navigationOptions: { headerTitle: '修改签名' } }
})
const BottomTabNavigator = createBottomTabNavigator(
  {
    首页: { screen: NewsStack },
    赛事: { screen: RaceStack },
    榜单: { screen: RankStack },
    我的: { screen: SelfStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ focused, tintColor }) => {
      // console.log(99,navigation.state.routes[navigation.state.routes.length - 1].params.routeName)
      //  console.log(99,navigation.state.routes[navigation.state.routes.length - 1].routeName)
      //  const aa = navigation.state.routes[navigation.state.routes.length - 1].routeName !== 'IdolInfo'
        const { routeName } = navigation.state
        let iconName
        if (routeName === '首页') {
          iconName = `ios-home${focused ? '' : ''}`
        } else if (routeName === '赛事') {
          iconName = `ios-baseball${focused ? '' : ''}`
        } else if (routeName === '榜单') {
          iconName = `ios-list${focused ? '' : ''}`
        } else if (routeName === '我的') {
          iconName = `ios-person${focused ? '' : ''}`
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />
      },
      tabBarVisible: !navigation.state.index > 0
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)

export default BottomTabNavigator
