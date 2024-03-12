import axios from 'axios';
import Appbar from '../components/Appbar';
import { url } from '../api';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Publish = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />

      <div className='flex justify-center '>
        <div className='max-w-screen-lg w-full pt-10 space-y-4'>
          <input
            type='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <div className='flex items-center justify-start mt-2'>
            <button
              type='submit'
              className='px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-2xl focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'
              onClick={async () => {
                const response = await axios.post(
                  `${url}/blog`,
                  {
                    title,
                    content: description,
                    published: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem('token'),
                    },
                  }
                );

                navigate(`/blog/${response.data.id}`);
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;

const TextEditor = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className='w-full'>
      <textarea
        onChange={onChange}
        id='comment'
        rows={4}
        className='w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg'
        placeholder='Content'
        required
      />
    </div>
  );
};
