import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "@components/Sidebar/Sidebar";

const Layout = () => {
  return(
    <>
      <SideBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
};

export default Layout;