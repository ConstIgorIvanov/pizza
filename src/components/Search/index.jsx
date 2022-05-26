import React from 'react';

import styles from './Search.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);
  const SearchValue = (value) => {
    dispatch(setSearchValue(value));
  };

  return (
    <input
      value={searchValue}
      onChange={(e) => SearchValue(e.target.value)}
      className={styles.root}
      placeholder="Поиск пиццы..."></input>
  );
};

export default Search;
