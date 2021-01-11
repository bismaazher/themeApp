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
import { Container, TextContainer, Title, Button, ButtonText } from '../component/stylingComponents'
class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            longPressed: false
        }
    }
    componentDidMount() {

        console.warn(this.props.language.how)
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

