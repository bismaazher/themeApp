import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon, Left } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/Dashboard'
import SecPage from './screens/secPage'
const Stack = createStackNavigator();
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import themeReducer from './redux/themeReducer'

const store = createStore(
    combineReducers({ themeReducer }),
    applyMiddleware(thunk)
)

class Routes extends Component {
    render() {

        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Dashboard">
                        {/* <Provider store={store}> */}
                        <Stack.Screen

                            name="Dashboard"
                            component={Dashboard}
                            options={{
                                headerShown: false,
                                title: "Dashboard",
                                headerTitleAlign: 'center',
                                navigationOptions: {

                                    header: ({ goBack }) => ({
                                        left: <Left onPress={goBack} />,
                                    }),
                                    cardStyle: {
                                        backgroundColor: 'transparent',
                                    },
                                },
                            }}
                        />

                        <Stack.Screen

                            name="SecPage"
                            component={SecPage}
                            options={{
                                headerShown: false,
                                title: "SecPage",
                                headerTitleAlign: 'center',
                                navigationOptions: {

                                    header: ({ goBack }) => ({
                                        left: <Left onPress={goBack} />,
                                    }),
                                    cardStyle: {
                                        backgroundColor: 'transparent',
                                    },
                                },
                            }}
                        />

                        {/* </Provider> */}


                    </Stack.Navigator>


                </NavigationContainer>

            </Provider>

        )
    }
}


export default Routes