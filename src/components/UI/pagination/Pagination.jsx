import React from 'react';
import usePagination from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className="pagination__wrapper">
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? "pagination__btn_current pagination__btn" : "pagination__btn"}>
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;