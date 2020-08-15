import React from 'react';

const BlogCard = (props) => {
    console.log(props);
    return (
        <div className="box1style">
            <h3> {props.title}</h3>
            <p> {props.description} </p>
        </div>
    )
}

export default BlogCard;