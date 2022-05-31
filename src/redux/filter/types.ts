export type SortType = {
  name: string;
  sortProperty: string;
};

export interface FilterState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: SortType;
}
