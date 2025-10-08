import React from 'react';
import { useLoaderData, useParams } from 'react-router';

// import AddtoDB from '../../assets/Utility/AddtoDB';
import { addToStoredDB } from '../../assets/Utility/AddtoDB';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    // console.log(data);

    const singleBook = data.find(book => book.bookId === id);
    // console.log(singleBook);
    const { bookId: singleBookId, bookName, image } = singleBook;

    const handleMarkAsRead = bookId => {
        MySwal.fire({
            title: <p>Hello World</p>,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
        }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })


        addToStoredDB(bookId);

    }

    return (
        <div className='text-center mt-20 p-5 w-2/3' >
            <img className='mx-auto' src={image} alt="" />
            <h4>{bookName}</h4>

            <button onClick={() => handleMarkAsRead(singleBookId)} className="btn btn-active btn-accent">Mark as Read</button>
            <button className="btn btn-active btn-success">Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;