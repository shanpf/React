import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreactos } from './store'

const getListArea = (show) => {
    if(show) {
        return(
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    }else {
        return null;
    }
}

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
                    {getListArea(props.focused)}
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
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(){
            const action = actionCreactos.getFocusAction();
            dispatch(action);
        },
        handleInputFocusBlur() {
            const action = actionCreactos.getBLURAction();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);