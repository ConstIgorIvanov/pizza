import React from 'react';

export const Contex = React.createContext<IContexProvider>(null!);

interface IContexProvider {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContexProvider = ({ children }: React.ReactNode | any) => {
  const [dark, setDark] = React.useState<boolean>(true);
  const value = { dark, setDark };
  return <Contex.Provider value={value}>{children}</Contex.Provider>;
};
