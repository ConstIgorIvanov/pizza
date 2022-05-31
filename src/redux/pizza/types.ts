export type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};
export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  searchValue: string;
  currentPage: number;
};
export interface PizzaState {
  items: Pizza[];
  status: boolean;
}
