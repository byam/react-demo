import React from 'react';
import './Comment.css'

const Comment = (props) => {
    console.log("RENDERED Comment " + props.comment.id)

    return (
        <div className='Comment'>
            {props.comment.name}
        </div>
    );

}

export default React.memo(Comment);
