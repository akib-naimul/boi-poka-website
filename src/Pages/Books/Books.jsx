import React, { Suspense} from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);

    // const bookPromise = fetch("booksData.json")
    //  .then(res => res.json())


    return (
        <div className=' text-3xl text-center p-6'>
            <h1>This is the Books Page</h1>
            <Suspense fallback={<p>Loadding....</p>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6'>
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;