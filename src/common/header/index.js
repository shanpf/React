import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWapper } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFocusAction, getBLURAction } from './store/actionCreator';

const Header = (props) =>{
    return(
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
                        in={props.focused}
                        timeout={10000}
                        classNames="slide"
                    >
                        <NavSearch
                            className={!props.focused ? '': 'focused'}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputFocusBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={!props.focused ? 'iconfont': 'focused iconfont'}
                    >
                        &#xe631;
                    </i>
                </SearchWapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className="iconfont">&#xe617;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}

const mapStateToProps = (state) => {
    return{
        focused: state.header.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(){
            const action = getFocusAction();
            dispatch(action);
        },
        handleInputFocusBlur() {
            const action = getBLURAction();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);