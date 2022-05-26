import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPizzas } from '../../redux/pizza/slice';
import { setCategoryId, setCurrentPage, setSort } from '../../redux/filter/slice';
import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import Pagination from '../../components/Pagination';

const Main = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.pizzas.items);
  const isLoading = useSelector((state) => state.pizzas.status);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const searchValue = useSelector((state) => state.filter.searchValue);

  const CurrentPage = (i) => {
    dispatch(setCurrentPage(i));
  };
  const CategoryId = (i) => {
    dispatch(setCategoryId(i));
  };
  const SortType = (i) => {
    dispatch(setSort(i));
  };

  React.useEffect(() => {
    const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `${categoryId}` : '';

    dispatch(
      getPizzas({
        currentPage,
        category,
        sortBy,

        order,
      }),
    );
  }, [currentPage, categoryId, sortType]);

  const pizzas = items
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    // Сортировка статики, mokapi не хочет работать с несколькими параметрами сортировки
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={(i) => CategoryId(i)} />
          <Sort value={sortType} onClickSortType={(i) => SortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      </div>
      <Pagination setCurrentPage={CurrentPage} />
    </div>
  );
};

export default Main;
