import React from 'react';

const PostItem = ({post, onSelectedPost, onDelete, ...props}) => {
    return (
        <div className="item">
            <h4 className="title">
                {post.id}. {post.title}
            </h4>
            <div className="panel">
                <div className="view" onClick={() => onSelectedPost(post)}>
                    Просмотр
                </div>
                <div className="delete" onClick={() => onDelete(post.id)}>
                    Удалить
                </div>
            </div>
        </div>
    );
};

export default PostItem;