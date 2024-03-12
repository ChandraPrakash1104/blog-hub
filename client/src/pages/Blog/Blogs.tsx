import Appbar from '../../components/Appbar';
import BlogSkeleton from '../../components/BlogSkeleton';
import { Blog, useBlogs } from '../../hooks/useBlogs';
import BlogCard from './BlogCard';

const Blogs = () => {
  const [loading, blogs] = useBlogs();

  if (loading) {
    return (
      <div>
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Appbar />

      <div className='flex justify-center'>
        <div className='flex flex-col max-w-xl'>
          {blogs.map((blog: Blog) => (
            <BlogCard
              id={blog.id}
              key={blog.id}
              authorName={blog.author.name || 'Anonymous'}
              title='This is a blog title'
              content='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt '
              publishedDate='Dec 3, 2023'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
