import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

const handleReadingTime = (id, time) => {
  setReadingTime(readingTime + time);
  // remove bookmark
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks);
};


  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs addBookmark={addBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
