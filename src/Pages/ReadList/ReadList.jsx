import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import { useLoaderData} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
import { getStoredBook } from '../../assets/Utility/AddtoDB';



const ReadList = () => {

    const [readList, setReadList] = useState([])

    const data = useLoaderData();
    // console.log(data);

    useEffect(()=>{
        const storedBooksData = getStoredBook();
        const convertedStoredBook = storedBooksData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        // console.log(myReadList)
        setReadList(myReadList);
        
        

    },[])


    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book Read {readList.length} </h2>
                    {
                        readList.map(rbook => <Book key={rbook.bookId} singleBook={rbook}></Book> )
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