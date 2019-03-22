import  { actionTypes }  from './';


export const getFocusAction = () =>({
    type: actionTypes.SEARCH_FOCUS
})

export const getBLURAction = () =>({
    type: actionTypes.SEARCH_BLUR
})