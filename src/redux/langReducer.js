import { stringsEn } from '../component/Languages'
import { SWITCH_LANGUAGE } from './action'


const initialState = {
    lang: { ...stringsEn }
}


const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            let newState = {
                ...state,
                lang: { ...state.lang, ...action.baseLanguage }
            }
            return newState
        default:
            return state
    }
}


export default langReducer