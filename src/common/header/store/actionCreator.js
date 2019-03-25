import  { actionTypes }  from './';
import { fromJS } from 'immutable'
import axios from 'axios';

const getChangeListAction = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const getFocusAction = () =>({
    type: actionTypes.SEARCH_FOCUS
});

export const getBLURAction = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const getMouseEnterAction = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const getMouseLeaveAction = () => ({
    type: actionTypes.MOUSE_LEAVE
});
export const getChangePageAction = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page: page
});

export const getListFromAjax = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data.list;
            dispatch(getChangeListAction(data))
        }).catch(() => {
            console.log('error');
        });
    }
};