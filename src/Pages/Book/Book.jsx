import React, { use } from 'react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise)
    // console.log(singleBook);
    const { bookId, bookName, image } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border">
                <figure className='px-10 pt-10 bg-grey-200'>
                    <img className='h-72 '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{bookId}</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;