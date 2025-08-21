import { IoBookmark } from "react-icons/io5";

const Blog = ({ blog, addBookmark }) => {

    const { title, author, profile_img, cover_img, reading_time, hashtags, posted_date } = blog;

    return (
        <div>
            <img className="rounded-lg w-full" src={cover_img} alt="" />
            <div>
                <div className="flex justify-between items-center mt-8">
                    <div className="flex items-center gap-4 my-4">
                        <div>
                            <img className="w-12 h-12 rounded-full" src={profile_img} alt="" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-xl font-semibold">{author}</h2>
                            <p className="text-gray-500">{posted_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <p>{reading_time} min read</p>
                        <button onClick={() => addBookmark(blog)}><IoBookmark className="text-red-500" /></button>
                    </div>
                </div>
                <div className="pb-4">
                    <h1 className="text-2xl font-bold text-left">{title}</h1>
                    <div className="text-left text-gray-500 mt-4">
                        {hashtags.map(tag => <span key={tag}>{tag} </span>)}
                    </div>
                    <button className="flex underline text-blue-700 mt-4">Make as Read</button>
                </div>
            </div>
            <hr className="my-4 border-gray-300 border-1 mb-10" />


        </div>
    );
};

export default Blog;