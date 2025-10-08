import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    // console.log(data);

    const singleBook = data.find(book => book.bookId === id);
    console.log(singleBook);

    return (
        <div>
            <h1>This is the Book Details Page</h1>
        </div>
    );
};

export default BookDetails;