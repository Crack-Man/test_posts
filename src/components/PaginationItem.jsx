import React from 'react';
import "../styles/scss/post-pagination.scss";

const PaginationItem = ({pagination, page, onChangePage, ...props}) => {
    return (
        <div className="pagination">
            {
                pagination.map(index =>
                    <div
                        className={'item' + (page === index ? ' current' : '')}
                        onClick={() => onChangePage(index)}
                        key={index}>
                        {index}
                    </div>
                )
            }
        </div>
    );
};

export default PaginationItem;