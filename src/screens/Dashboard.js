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

let strings = new LocalizedStrings({
    "en-US": {
        how: "How do you want your egg today?",
        boiledEgg: "Boiled egg",
        softBoiledEgg: "Soft-boiled egg",
        choice: "How to choose the egg"
    },
    en: {
        how: "How do you want your egg today?",
        boiledEgg: "Boiled egg",
        softBoiledEgg: "Soft-boiled egg",
        choice: "How to choose the egg"
    },
    it: {
        how: "Come vuoi il tuo uovo oggi?",
        boiledEgg: "Uovo sodo",
        softBoiledEgg: "Uovo alla coque",
        choice: "Come scegliere l'uovo"
    }
});






class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            longPressed: false
        }
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                {/* <BackgroundImage source={require('../assets/img/mainbg.png')}> */}
                <Container>

                    <TextContainer>
                        <Pressable style={({ pressed }) => ({
                            backgroundColor: pressed ? 'lightskyblue' : 'white'
                        })}
                            onLongPress={() => console.warn("Long presssed") ,strings.setLanguage('it')}
                            onPressIn={() => this.setState({ longPressed: false })} onPressOut={() => console.warn("Press out")} >
                            <Text>I'm pressable!</Text>
                        </Pressable>

                        <Button onPress={() => this.props.navigation.navigate("SecPage")}>
                            <ButtonText>Navigate to second Page</ButtonText>
                        </Button>
                        <Title>  {strings.how} </Title>
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
                    </View>

                </Container>
                {/* </BackgroundImage> */}
            </ThemeProvider>

            //         <View style={[CommonStyles.container, { backgroundColor: this.state.switch == false ?"black":"purple" }]}>
            //             <ImageBackground style={[CommonStyles.container]}
            //                 source={images.mainbg}
            //             >

            //                 <View style={[CommonStyles.container, { marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' }]}>
            //                 <View  style={{alignSelf:'flex-end'}}>
            //                     <TouchableOpacity onPress={() => this.swithColors()} style={{backgroundColor:'green' ,paddingHorizontal:10 ,paddingVertical:10 ,borderRadius:4}}>
            //                         <Text style={{color:'white'}}>Swith to black mode</Text>
            //                         </TouchableOpacity>
            //                     </View>
            //                     <Item style={[CommonStyles.commonGreenText, { borderBottomColor: 'rgb(0, 177, 127)', marginVertical: 10 }]}>
            //                         <View style={[CommonStyles.commonGreen, { paddingHorizontal: 10, height: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginLeft: -8 }]}>
            //                             <Icon
            //                                 style={{ flex: 1, color: 'white', justifyContent: 'center', alignItems: 'center', marginVertical: 12, marginLeft: 5 }}
            //                                 name="mail"
            //                                 type="Feather"
            //                             />
            //                         </View>
            //                         <Input
            //                             style={CommonStyles.commonGrayText}
            //                             placeholder="Email Id"
            //                             placeholderTextColor={CommonStyles.commonGrayText}
            //                         />
            //                     </Item>

            //                     <Item style={[CommonStyles.commonGreenText, { borderBottomColor: 'rgb(0, 177, 127)', marginVertical: 10 }]}>
            //                         <View style={[CommonStyles.commonGreen, { paddingHorizontal: 10, height: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginLeft: -8 }]}>
            //                             <Icon
            //                                 style={{ flex: 1, color: 'white', justifyContent: 'center', alignItems: 'center', marginVertical: 12, marginLeft: 5 }}
            //                                 name="lock"
            //                                 type="Foundation"
            //                             />
            //                         </View>
            //                         <Input
            //                             style={CommonStyles.commonGrayText}
            //                             placeholder="Password"
            //                             placeholderTextColor={CommonStyles.commonGrayText}
            //                         />
            //                     </Item>


            //                     <TouchableOpacity style={[ CommonStyles.commonGreen, { paddingHorizontal: 40,marginVertical:30,borderRadius:5, paddingVertical:20}]}>
            //                         <Text style={[CommonStyles.textColorWhite]}>
            //                             Sign In
            // </Text>
            //                     </TouchableOpacity>

            //                 </View>
            //             </ImageBackground>
            //         </View>


        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
})

const mapDispatchToProps = dispatch => ({
    switchTheme: bindActionCreators(switchTheme, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard)

