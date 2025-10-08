import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
import { getStoredBook } from '../../assets/Utility/AddtoDB';



const ReadList = () => {

    const [sort, setSort] = useState("");

    const [readList, setReadList] = useState([])

    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        const storedBooksData = getStoredBook();
        const convertedStoredBook = storedBooksData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        // console.log(myReadList)
        setReadList(myReadList);
    }, [])

     const handleSort = (e) =>{
        setSort(e);
        if(e === "Pages"){
            const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (e === "Ratings"){
            const sortedByRatings = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedByRatings);
        }
    }





    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By:{sort? sort : ""} </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book Read {readList.length} </h2>
                    {
                        readList.map(rbook => <Book key={rbook.bookId} singleBook={rbook}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;