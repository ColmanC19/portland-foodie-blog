import React from 'react';

const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            <b>{comment.username}</b> <p>wrote: </p>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;