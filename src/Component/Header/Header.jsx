import profile from '../../assets/images/profile.png'
const Header = () => {

    return (
        <div className='flex items-center justify-between border-b-2 border-gray-300 sticky top-0 bg-white z-10 pb-8'>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img className='w-12 h-12 rounded-full' src={profile} alt="Profile" />
        </div>
    );
};

export default Header;