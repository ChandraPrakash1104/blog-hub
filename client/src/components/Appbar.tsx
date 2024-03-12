import { Link } from 'react-router-dom';
import { Avatar } from '../pages/Blog/BlogCard';

const Appbar = () => {
  return (
    <div className='border-b border-slate-200 flex justify-between px-10 py-4'>
      <div className='flex items-center font-semibold text-lg cursor-pointer'>
        <Link to='/blogs'>Medium</Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link to={'/publish'}>
          <button
            type='button'
            className='text-white mr-5 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center '
          >
            New Blog
          </button>
        </Link>

        <Avatar name='Abc' size='big' />
      </div>
    </div>
  );
};

export default Appbar;
