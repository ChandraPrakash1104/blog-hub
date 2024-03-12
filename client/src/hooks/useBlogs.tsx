import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../api';

export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${url}/blog/bulk`, {
        headers: { Authorization: localStorage.getItem('token') },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);

  return [loading, blogs];
};
