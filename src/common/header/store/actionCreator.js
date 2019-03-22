import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes'

export const getFocusAction = () =>({
    type: SEARCH_FOCUS
})

export const getBLURAction = () =>({
    type: SEARCH_BLUR
})