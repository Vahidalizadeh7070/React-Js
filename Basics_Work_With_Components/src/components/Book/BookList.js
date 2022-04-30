import React from "react";
import BookItem from "../Book/BookItem";

const BookList = props => {
    if (props.items.length === 0) {

        return <p className="text-danger text-center pt-5 pb-5">The book list is empty</p>
    }
    return (
        <div>
            {
                props.items.map((book) =>
                    <BookItem
                        key={book.id}
                        bookName={book.bookName}
                        date={book.date}
                        author={book.author}
                        amount={book.amount} />
                )
            }
        </div>
    )
}
export default BookList;