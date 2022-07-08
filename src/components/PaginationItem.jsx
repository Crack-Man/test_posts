import React from 'react';
import "../styles/scss/post-pagination.scss";

const PaginationItem = ({pagination, page, onChangePage, ...props}) => {
    return (
        <div className="pagination">
            {
                pagination.map(index =>
                    <button
                        className={'pagination__item' + (page === index ? ' pagination__item_current' : '')}
                        onClick={() => onChangePage(index)}
                        key={index}>
                        {index}
                    </button>
                )
            }
        </div>
    );
};

export default PaginationItem;