import  { actionTypes }  from './';
import { fromJS } from 'immutable'
import axios from 'axios';


export const getFocusAction = () =>({
    type: actionTypes.SEARCH_FOCUS
})

export const getBLURAction = () =>({
    type: actionTypes.SEARCH_BLUR
})

const getChangeListAction = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})

export const getListFromAjax = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data.list;
            dispatch(getChangeListAction(data))
        }).catch(() => {
            console.log('error');
        });
    }
}