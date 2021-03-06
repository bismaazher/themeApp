import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import CommonStyles from '../CommonStyles';
import images from '../component/Images'
import { Item, Input, Icon } from 'native-base'
import styled, { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTheme, switchLanguage } from "../redux/action";
import { Container, TextContainer, Title, Button, ButtonText } from '../component/stylingComponents'
import LottieView from 'lottie-react-native';

class SecPage extends Component {
    componentDidMount() {
        console.warn(this.props.language.how)

        // this.animation.play();
        // Or set a specific startFrame and endFrame with:

        setTimeout(() => {
            this.animation.play();
        });

    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container>

                    <TextContainer>
                        <Title>{this.props.language.secondpage}</Title>
                    </TextContainer>
                    <LottieView
                        style={{ width: '100%' }}
                        ref={animation => {
                            this.animation = animation;
                        }}
                        source={require('../animations/animation1.json')} autoPlay loop />
                </Container>
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
)(SecPage)

