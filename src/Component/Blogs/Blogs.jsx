import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ addBookmark, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("Blogs.json")
            .then((response) => response.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="w-2/3 pr-4">
            <h1 className="mb-2">Blogs: {blogs.length}</h1>
            {
                blogs.map((blog, index) => <Blog key={index} blog={blog}
                addBookmark={addBookmark}
                handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;