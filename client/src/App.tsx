import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/auth/Signup/Signup';
import Signin from './pages/auth/Signin/Signin';
import Blogs from './pages/Blog/Blogs';
import Blog from './pages/Blog/Blog';
import Publish from './pages/Publish';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/publish' element={<Publish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
