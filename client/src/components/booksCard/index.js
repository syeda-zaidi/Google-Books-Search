import React from "react";

function BooksCard (props) {
    return (
        <div className="booksCard"> 
            <li className="list-group-item">
                <p className="booktitle"> {props.title} </p>
                <p className="book-author"> {props.authors} </p>
                <p className="book-description"> {props.description} </p>
            </li>
        </div>
    )
}

export default BooksCard;