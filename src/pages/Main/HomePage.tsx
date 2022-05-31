import React from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { getPizzas } from '../../redux/pizza/slice';
import { setCategoryId, setCurrentPage, setSort } from '../../redux/filter/slice';
import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import { SortType } from '../../redux/filter/types';

import Pagination from '../../components/Pagination';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.pizzas.items);
  const isLoading = useAppSelector((state) => state.pizzas.status);
  const currentPage = useAppSelector((state) => state.filter.currentPage);
  const categoryId = useAppSelector((state) => state.filter.categoryId);
  const sortType = useAppSelector((state) => state.filter.sort);
  const searchValue = useAppSelector((state) => state.filter.searchValue);

  const CurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const CategoryId = (categoryId: number) => {
    dispatch(setCategoryId(categoryId));
  };
  const SortType = (sort: SortType) => {
    dispatch(setSort(sort));
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
        searchValue,
        order,
      }),
    );
  }, [currentPage, categoryId, sortType, searchValue]);

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
          <Categories
            categoryId={categoryId}
            onClickCategory={(categoryId: number) => CategoryId(categoryId)}
          />
          <Sort sortType={sortType} onClickSortType={(sort: SortType) => SortType(sort)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={CurrentPage} />
    </div>
  );
};

export default Main;
