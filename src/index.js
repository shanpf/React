import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Iconfont } from  './statics/iconfont/iconfont'
import { ComponentStyle } from './style'

ReactDOM.render(
    <Fragment>
        <Iconfont/>
        <ComponentStyle/>
        <App />
    </Fragment>
    , document.getElementById('root'));

