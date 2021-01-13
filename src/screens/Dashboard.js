import React, { Component } from 'react'
import LocalizedStrings from 'react-native-localization';
import { View, Text, ImageBackground, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import CommonStyles from '../CommonStyles';
import images from '../component/Images'
import { Item, Input, Icon } from 'native-base'
import styled, { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTheme } from "../redux/action";
import { switchLanguage } from '../redux/action';
import { stringsEn, stringsIt } from '../component/Languages'
import crashlytics from '@react-native-firebase/crashlytics';
import { darkTheme, lightTheme } from '../styles/theme'
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, TextContainer, Title, Button, ButtonText } from '../component/stylingComponents'
import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 * 2 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.warn(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })

store.dispatch({ type: 'counter/incremented' })

store.dispatch({ type: 'counter/incremented' })



class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            longPressed: false,
            // progress: new Animated.Value(0),
        }
    }

    componentDidMount() {
        console.warn(this.props.language.how)
        // setTimeout(() => {
        //     this.animation.play();
        // }, 200);

    }

    render() {
        return (
            <ThemeProvider language={this.props.language} theme={this.props.theme}>
                <Container>
                    <TextContainer>
                        <Pressable style={({ pressed }) => ({
                            backgroundColor: pressed ? 'lightskyblue' : 'white'
                        })}
                            onPressIn={() => this.setState({ longPressed: false })} onPressOut={() => console.warn("Press out")} >
                            <Text>I'm pressable!</Text>
                        </Pressable>

                        <Button onPress={() => this.props.navigation.navigate("SecPage")}>
                            <ButtonText>Navigate to second Page</ButtonText>
                        </Button>
                        <Title> {this.props.language.how} </Title>

                    </TextContainer>
                    {this.props.theme.mode === 'light' ? (
                        <Button onPress={() => this.props.switchTheme(darkTheme)}>
                            <ButtonText>Switch to Dark Theme</ButtonText>
                        </Button>
                    ) : (
                            <Button onPress={() => this.props.switchTheme(lightTheme)}>
                                <ButtonText>Switch to Light Theme</ButtonText>
                            </Button>
                        )}
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                    }}>
                        {this.state.longPressed &&
                            <ActivityIndicator size="large" color="#0000ff" />
                        }
                        <View>
                            <Button onPress={() => crashlytics().crash()} >
                                <ButtonText>Test Crash</ButtonText>
                            </Button>
                        </View>


                        <View>
                            {this.props.language.mode === 'english' ? (
                                <Button onPress={() => this.props.switchLanguage(stringsIt)}>
                                    <ButtonText>Switch to Italian</ButtonText>
                                </Button>
                            ) : (
                                    <Button onPress={() => this.props.switchLanguage(stringsEn)}>
                                        <ButtonText>Switch to English</ButtonText>
                                    </Button>
                                )}

                       

                            {/* <View style={{backgroundColor:'yellow'}}> */}

                            {/* </View> */}
                        </View>

                    </View>
                </Container>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme,
    language: state.langReducer.lang,
})

const mapDispatchToProps = dispatch => ({
    switchTheme: bindActionCreators(switchTheme, dispatch),
    switchLanguage: bindActionCreators(switchLanguage, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard)

