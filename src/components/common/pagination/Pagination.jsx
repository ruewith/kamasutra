import React from "react";

import styles from "./Pagination.module.sass";

const Pagination = ({ totalCount, pageSize, currentPage, changeCurrentPage }) => {
    const pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {pages.map((page) => (
                <span
                    className={page === currentPage && styles.selected}
                    onClick={() => {
                        changeCurrentPage(page);
                    }}
                >
                    {page}
                </span>
            ))}
        </div>
    );
};

export default Pagination;
