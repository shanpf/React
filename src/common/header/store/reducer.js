
const defaultState = {
    focused: false
};

export const headerReducer = (state = defaultState, action) =>{
    if(action.type === 'search_focus'){
        return {
            focused: true
        }
    }else if(action.type === 'search_blur'){
        return {
            focused: false
        }
    }
    return state;
}
