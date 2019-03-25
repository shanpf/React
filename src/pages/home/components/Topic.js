import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
    render() {
        return(
            <TopicWrapper>
                <TopicItem>
                <img
                    className='topic-pic'
                    src='//upload-images.jianshu.io/upload_images/5967942-a27900c2cb601e29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
                />
                流浪地球
            </TopicItem>
            <TopicItem>
                <img
                    className='topic-pic'
                    src='//upload-images.jianshu.io/upload_images/5967942-a27900c2cb601e29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
                />
                流浪地球
            </TopicItem>
            <TopicItem>
                <img
                    className='topic-pic'
                    src='//upload-images.jianshu.io/upload_images/5967942-a27900c2cb601e29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
                />
                流浪地球
            </TopicItem>
            <TopicItem>
                <img
                    className='topic-pic'
                    src='//upload-images.jianshu.io/upload_images/5967942-a27900c2cb601e29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
                />
                流浪地球
            </TopicItem>
            </TopicWrapper>
        );
    }
}

export default Topic;