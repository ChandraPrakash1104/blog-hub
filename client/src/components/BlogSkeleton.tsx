const BlogSkeleton = () => {
  return (
    <div role='status' className='max-w-sm animate-pulse mx-auto mt-20'>
      <div className='space-y-1 border-b border-slate-200 py-4 max-w-md cursor-pointer'>
        <div className='flex items-center space-x-2'>
          <div>
            <div
              className={`relative inline-flex items-center justify-center h-6 w-6 overflow-hidden bg-gray-500 rounded-full `}
            ></div>
          </div>
          <div className='h-2.5 bg-gray-200 rounded-full '></div>
          <div>
            <div className='w-1 h-1 bg-slate-400 rounded-full'></div>
          </div>
          <div className='text-slate-500 font-extralight'>
            <div className='h-2.5 bg-gray-200 rounded-full '></div>
          </div>
        </div>
        <div className='font-bold text-xl pt-2'>
          <div className='h-2.5 bg-gray-200 rounded-full '></div>
        </div>
        <div className='text-slate-500'>
          <div className='h-2.5 bg-gray-200 rounded-full '></div>
        </div>
        <div className='text-slate-400 pt-4'>
          <div className='h-2.5 bg-gray-200 rounded-full '></div>
        </div>
        <div className=''></div>
      </div>
      <div className='h-2.5 bg-gray-200 rounded-full '></div>
    </div>
  );
};

export default BlogSkeleton;
