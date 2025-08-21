import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    // Define bookmarks as an empty array or with sample data

    return (
        <div className="w-1/3 bg-blue-100 sticky top-20 h-screen overflow-y-auto p-4">
            <h1 className="text-xl font-semibold">Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                key={idx} bookmark={bookmark}
                
                ></Bookmark>)
            }

        </div>
    );
};

export default Bookmarks;