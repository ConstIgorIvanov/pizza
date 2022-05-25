import React from 'react';

import styles from './Search.module.scss';

import { useContext } from '../../hook/useContext';

const Search = () => {
  const { searchValue, setSearchValue } = useContext();

  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className={styles.root}
      placeholder="Поиск пиццы..."></input>
  );
};

export default Search;
