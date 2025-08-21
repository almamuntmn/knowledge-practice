const Bookmark = ({bookmark}) => {
const{title}= bookmark

    return (
        <div className="p-2 bg-white shadow-sm rounded-md m-4">
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmark;