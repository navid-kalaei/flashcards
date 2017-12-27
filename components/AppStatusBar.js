import React from 'react'
import {View} from 'react-native'
import {Constants} from 'expo'
import {StatusBar} from 'react-native'


const AppStatusBar = ({backgroundColor, ...props}) => (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
)

export default AppStatusBar