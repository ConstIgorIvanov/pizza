import styles from './Search.module.scss';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { setSearchValue } from '../../redux/filter/slice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.filter.searchValue);
  const SearchValue = (value: string) => {
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
