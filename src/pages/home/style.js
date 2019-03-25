import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-top: 30px;
    margin-left: 15px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 240px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    padding-right: 10px;
    margin-left: 18px;
    height: 32px;
    line-height:32px;
    font-size: 14px;
    color: #000;
    border:1px  solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        height: 32px;
        width: 32px;
        margin-right: 10px;
        margin-bottom: 18px;
    }
`;