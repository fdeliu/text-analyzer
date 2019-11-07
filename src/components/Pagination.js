import React from 'react';
import classNames from 'classnames';

export default function Pagination({wordsPerPage, totalWords, paginate, currentPage}) {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalWords/wordsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
          <ul className="pagination">
            {pageNumbers.map(number =>(
                <li key={number} className={classNames("page-item",{
                    "active": number === currentPage
                })}>
                  <button onClick={()=> paginate(number)} className="page-link">
                   {number}
                  </button>
                </li>
            ))

            }
          </ul>
        </nav>
    )
}
