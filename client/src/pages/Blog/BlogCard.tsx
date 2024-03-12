import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className='space-y-1 border-b border-slate-200 py-4 max-w-md cursor-pointer'>
        <div className='flex items-center space-x-2'>
          <Avatar name={authorName} />
          <div>{authorName}</div>
          <div>
            <div className='w-1 h-1 bg-slate-400 rounded-full'></div>
          </div>
          <div className='text-slate-500 font-extralight'>{publishedDate}</div>
        </div>
        <div className='font-bold text-xl pt-2'>{title}</div>
        <div className='text-slate-500'>{content.slice(0, 100) + '...'}</div>
        <div className='text-slate-400 pt-4'>{`${Math.ceil(
          content.length / 100
        )} minutes`}</div>
        <div className=''></div>
      </div>
    </Link>
  );
};

export default BlogCard;

export const Avatar = ({
  name,
  size = 'small',
}: {
  name: string;
  size?: 'small' | 'big';
}) => {
  const avatarSize = size === 'small' ? 'w-6 h-6' : 'w-8 h-8';
  const fontSize = size === 'small' ? 'text-xs' : 'text-sm';

  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center ${avatarSize} overflow-hidden bg-gray-500 rounded-full `}
      >
        <span
          className={`${fontSize} font-medium text-gray-600 dark:text-gray-300`}
        >
          {name[0]}
        </span>
      </div>
    </div>
  );
};
