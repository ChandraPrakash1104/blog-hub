import { useParams } from 'react-router-dom';
import { useBlog } from '../../hooks/useBlog';
import BlogDetail from '../../components/BlogDetail';
import Appbar from '../../components/Appbar';

const Blog = () => {
  const { id } = useParams();
  const [loading, blog] = useBlog({ id: id || '' });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Appbar />
      <BlogDetail blog={blog} />
    </div>
  );
};

export default Blog;
