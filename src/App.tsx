import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout/Layout';


const Profile = lazy(() => import('@pages/Profile'));
const Posts = lazy(() => import('@pages/Posts'));


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Profile />}
      />
      <Route path='/posts' element={<Posts />}
      />
      </Route>
    </Routes>
  )
}

export default App
