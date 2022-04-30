import React, { useState } from "react";

import BookList from "../Book/BookList";
import DateFilter from "../Book/DateFilter";
import BookChart from "./BookChart";

function Book(props) {
    const [date, setDate] = useState('2020');
    const filterDate = (selectYear) => {
        setDate(selectYear);
    };

    const bookdata = props.item.filter((book) => {
        return book.date.getFullYear().toString() === date;
    })

    


    return (
        <div>
            <div className="row pb-3">
                <div className="col-8">
                    <h2 className="text-secondary">Books</h2>
                </div>
                <div className="col-4">
                    <DateFilter selected={date} onChangeDateFilter={filterDate} />
                    
                </div>
            </div>
            <div className="pb-3 pt-3">
            <BookChart bookdata={bookdata} />
            </div>
            <BookList items={bookdata}/>
        </div>
    )
}

export default Book; 