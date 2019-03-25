import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreactos } from './store'

class Header extends Component{

    getListArea = () => {
        const { focused, list} = this.props;
        if(focused) {
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render (){
        const { focused, handleInputFocus, handleInputFocusBlur } = this.props;
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
                <SearchWapper>
                    <CSSTransition
                        in={focused}
                        timeout={10000}
                        classNames="slide"
                    >
                        <NavSearch
                            className={!focused ? '': 'focused'}
                            onFocus={handleInputFocus}
                            onBlur={handleInputFocusBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={!focused ? 'iconfont': 'focused iconfont'}
                    >
                        &#xe631;
                    </i>
                    {this.getListArea()}
                </SearchWapper>
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
        list: state.getIn(['header', 'list'])
    }
}

const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus() {
            dispatch(actionCreactos.getListFromAjax());
            dispatch(actionCreactos.getFocusAction());
        },
        handleInputFocusBlur() {
            dispatch(actionCreactos.getBLURAction());
        }
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);