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
import { darkTheme, lightTheme } from '../styles/theme'
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.View`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.PRIMARY_TEXT_COLOR};
`

const Title = styled.Text`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: ${props => props.theme.SECONDARY_BUTTON_COLOR};
  border-radius: 5px;
  padding: 10px;
`

const ButtonText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`
const BackgroundImage = styled.ImageBackground`
flex: 1;
justify-content: center;
align-items: center;
`
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
                {/* <BackgroundImage source={require('../assets/img/mainbg.png')}> */}
                <Container>

                    <TextContainer>
                        <Pressable style={({ pressed }) => ({
                            backgroundColor: pressed ? 'lightskyblue' : 'white'
                        })}
                            // onLongPress={() => console.warn("Long presssed"), strings.setLanguage('it')}
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
                {/* </BackgroundImage> */}
            </ThemeProvider>




        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme,
    language: state.langReducer.lang
})

const mapDispatchToProps = dispatch => ({
    switchTheme: bindActionCreators(switchTheme, dispatch),
    switchLanguage: bindActionCreators(switchLanguage, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard)

