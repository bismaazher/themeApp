import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import CommonStyles from '../CommonStyles';
import images from '../component/Images'
import { Item, Input, Icon } from 'native-base'
import styled, { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTheme , switchLanguage } from "../redux/action";
// import {} from '../redux/action'
import { darkTheme, lightTheme } from '../styles/theme'
import {stringsEn , stringsIt} from '../component/Languages'
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

class SecPage extends Component {
    render() {
        return (
            <ThemeProvider language={this.props.language} theme={this.props.theme}>
                <Container>
                    <TextContainer>
                        <Title>{this.props.language.secondpage}</Title>
                    </TextContainer>
                  

                </Container>
            </ThemeProvider>


        )
    }
}

const mapStateToProps = state => ({
    theme:state.themeReducer.theme,
    language:state.langReducer.lang
})

const mapDispatchToProps = dispatch => ({
    switchTheme : bindActionCreators(switchTheme , dispatch),
    switchLanguage : bindActionCreators(switchLanguage , dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,    
)(SecPage)

