import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ReadStory from './Screens/ReadStory';
import WriteStories from './Screens/WriteStories';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator({
  ReadStory: { screen: ReadStory },
  WriteStories: { screen: WriteStories },},
{
    defaultNavigationOptions: ({navigation})=>({
        tabBarIcon : () =>{
          const routeName = navigation.state.routeName
          if(routeName === 'WriteStories'){
            return(
              <Image 
                  source ={require('./assets/write.png')}
                  style={{width:40,height:40}}
              />
            )
          }
          else if(routeName==='ReadStory'){
            return(
              <Image 
                  source ={require('./assets/read.png')}
                  style={{width:40,height:40}}
              />
            )
          }
        }
    })
  }
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



