import React from 'react';
import { dumpLogs } from './Utils';
import classes from './BlogCard.module.css';
// import './BlogCard.css'


const BlogCard = (props) => {

    // onLikeBtnClick = () => {
    //     this.setState((prevState, prevProp) => {
    //         return {likeCount : prevState.likeCount+1}})
    // }


    dumpLogs(props);
    return (
        <div className={classes.box1style}>
            <h3> {props.title}</h3>
            <p> {props.description} </p>

            <p>Like Count:
                 <span className={classes.likeCount}> {props.likeCount} </span>
            </p>
            <button onClick={props.onLikeButtonClick}> Like </button>
        </div>
    )

}

export default BlogCard;