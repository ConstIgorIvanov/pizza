import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
