import React, { use } from 'react';

const Book = ({singleBook}) => {
    // const data = use(bookPromise)
    console.log(singleBook);
    return (
        <div>
            <h1>This is the Book Page</h1>
        </div>
    );
};

export default Book;