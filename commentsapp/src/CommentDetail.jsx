import React from 'react';
// import faker from 'faker';


const CommentDetail = (props) => {
    // console.log(props);

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img className="avatar" alt="Avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a className="author" href="/">
                    {/* {faker.name.firstName()} */}
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {/* Today at 6:00 PM */}
                        {/* {faker.date.recent().toString()} */}
                        {props.timeAgo}
                    </span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>

    );
};


export default CommentDetail;