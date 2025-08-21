import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const addBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs addBookmark={addBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
