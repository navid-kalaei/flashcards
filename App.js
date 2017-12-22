import React from 'react'
import {View, StatusBar} from 'react-native'
import {Constants} from 'expo'
import {purple} from './utils/colors'


const AppStatusBar = ({backgroundColor, ...props}) => (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
)


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={purple} barStyle='light-content'/>
      </View>
    );
  }
}
