import React from 'react';
import "../styles/scss/modal-post.scss";

const ModalPostBody = ({post, onClosed, ...props}) => {
    return (
        <div className="overlay">
            <div className="modal-post">
                <button className="modal-post__close" onClick={onClosed}>X</button>
                <h1 className="modal-post__title">
                    {post.id}. {post.title}
                </h1>
                <div className="modal-post__body">
                    {post.body}
                </div>
            </div>
        </div>
    );
};

export default ModalPostBody;