/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Landing, Correct, Incorrect } from '@containers'

const Stack = createStackNavigator()

const options = {
    headerShown: false
}

const App = () => {
    return (
        <NavigationContainer initialRouteName="Landing" header={null}>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing} options={options} />
                <Stack.Screen name="Correct" component={Correct} options={options} />
                <Stack.Screen name="Incorrect" component={Incorrect} options={options} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
