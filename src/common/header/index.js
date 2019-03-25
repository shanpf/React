import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreactos } from './store'

class Header extends Component{

    getListArea = () => {
        const { focused, list, page, totalPage, mouseIn, handleOnMouseEnter, handleOnMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];

        if(jsList.length) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                if (jsList[i] != null) {
                    pageList.push(
                        <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
                    )
                }
            }
        }

        if(focused || mouseIn) {
            return(
                <SearchInfo onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage( page, totalPage, this.spinIcon)}>
                            <i ref={(icon) =>{this.spinIcon = icon }} className="iconfont spin">&#xe612;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render (){
        const { focused, list, handleInputFocus, handleInputFocusBlur } = this.props;
        return (
            <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>
                    <i className="iconfont">&#xe61c;</i>
                    首页
                </NavItem>
                <NavItem className='left'>
                    <i className="iconfont">&#xe60f;</i>
                    下载APP
                </NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={10000}
                        classNames="slide"
                    >
                        <NavSearch
                            className={!focused ? '': 'focused'}
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputFocusBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={!focused ? 'iconfont zoom': 'focused iconfont zoom'}
                    >
                        &#xe631;
                    </i>
                    {this.getListArea()}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writing'>
                    <i className="iconfont">&#xe617;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(list) {
            if(list.size === 0) {
                dispatch(actionCreactos.getListFromAjax());
            }
            dispatch(actionCreactos.getFocusAction());
        },
        handleInputFocusBlur() {
            dispatch(actionCreactos.getBLURAction());
        },
        handleOnMouseEnter(){
            dispatch(actionCreactos.getMouseEnterAction());
        },
        handleOnMouseLeave(){
            dispatch(actionCreactos.getMouseLeaveAction());
        },
        handleChangePage( page, totalPage, spinIcon){
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if(page+1 < totalPage) {
                dispatch(actionCreactos.getChangePageAction(page + 1));
            }else if(page+1 === totalPage){
                dispatch(actionCreactos.getChangePageAction(0));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);