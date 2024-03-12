import { useEffect, useState } from 'react';
import { Blog } from './useBlogs';
import axios from 'axios';
import { url } from '../api';

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${url}/blog/${id}`, {
        headers: { Authorization: localStorage.getItem('token') },
      })
      .then((response) => {
        console.log(response);

        setBlog(response.data.blog);
        setLoading(false);
      });
  }, []);

  return [loading, blog];
};
