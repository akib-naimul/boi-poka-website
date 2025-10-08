import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    // const [allBooks, setAllBooks] = useState([]);

    const bookPromise = fetch("booksData.json")
     .then(res => res.json())


    return (
        <div className=' text-3xl text-center p-6'>
            <h1>This is the Books Page</h1>
            <Suspense fallback={<p>Loadding....</p>}>
                <Book bookPromise ={bookPromise} ></Book>
            </Suspense>
        </div>
    );
};

export default Books;