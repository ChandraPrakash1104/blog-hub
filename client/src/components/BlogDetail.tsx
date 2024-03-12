import { Blog } from '../hooks/useBlogs';
import { Avatar } from '../pages/Blog/BlogCard';

const BlogDetail = ({ blog }: { blog: Blog }) => {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-12 px-10 max-w-screen-2xl w-full pt-12 '>
        <div className='col-span-8 '>
          <div className='text-5xl font-bold'>{blog.title}</div>
          <div className='text-slate-500 pt-2'>Posted on 2nd Dec. 2023</div>
          <div className='text-slate-50pt-4'>{blog.content}</div>
        </div>
        <div className='col-span-4 '>
          <div className='text-slate-600 pb-2'>Author</div>
          <div className='flex space-x-2'>
            <div className='flex items-center pr-2'>
              <Avatar name={blog.author.name || 'Anonymous'} size='big' />
            </div>
            <div>
              <div className='text-xl font-bold'>
                {blog.author.name || 'Anonymous'}
              </div>
              <div className='text-slate-500 pt-2'>
                This is random catch phase about the author
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
