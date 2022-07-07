import React from 'react';
import "../styles/scss/modal-post.scss";

const ModalPostBody = ({post, onClosed, ...props}) => {
    return (
        <div className="overlay">
            <div className="modal-post">
                <div className="close" onClick={onClosed}>X</div>
                <h1 className="title">
                    {post.id}. {post.title}
                </h1>
                <div className="body">
                    {post.body}
                </div>
            </div>
        </div>
    );
};

export default ModalPostBody;