import React from 'react';
import { Contex } from '../hoc/ContexProvider';

export const useContext = () => {
  return React.useContext(Contex);
};
