import React from 'react';

export const Contex = React.createContext(null);
export const ContexProvider = ({ children }) => {
  const category = null;
  const sort = null;
  return <Contex.Provider>{children}</Contex.Provider>;
};
