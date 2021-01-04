export const SWITCH_THEME = 'SWITCH_THEME'
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'

export const switchTheme = BaseTheme => {
    return dispatch => {
        dispatch({
            type : SWITCH_THEME,
            baseTheme : BaseTheme
        })
    }
}



export const switchLanguage = BaseLanguage =>{
    return dispatch => {
        dispatch({
            type : SWITCH_LANGUAGE,
            baseLanguage : BaseLanguage
        })
    }
}