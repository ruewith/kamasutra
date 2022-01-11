import React, { useState } from "react";

import styles from "./Pagination.module.sass";

const Pagination = ({ totalCount, pageSize, currentPage, changeCurrentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.pagination}>
            {portionNumber > 1 && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                >
                    PREV
                </button>
            )}

            {pages
                .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return (
                        <span
                            className={page === currentPage && styles.selected}
                            key={page}
                            onClick={() => {
                                changeCurrentPage(page);
                            }}
                        >
                            {page}
                        </span>
                    );
                })}
            {portionCount > portionNumber && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                >
                    NEXT
                </button>
            )}
        </div>
    );
};

export default Pagination;
