import React from 'react';

const PostItem = ({post, onSelectedPost, onDelete, ...props}) => {
    return (
        <div className="item">
            <h4 className="title">
                {post.id}. {post.title}
            </h4>
            <div className="panel">
                <button className="view" onClick={() => onSelectedPost(post)}>
                    Просмотр
                </button>
                <button className="delete" onClick={() => onDelete(post.id)}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default PostItem;