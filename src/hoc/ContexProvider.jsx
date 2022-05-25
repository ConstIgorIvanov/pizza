import React from 'react';

export const Contex = React.createContext(null);
export const ContexProvider = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const value = { searchValue, setSearchValue };
  return <Contex.Provider value={value}>{children}</Contex.Provider>;
};
