export interface SubCategory {
  title: string;
}
export interface Category {
  title: string;
  subCategories: SubCategory[];
}

export interface MainCategory {
  icon?: JSX.Element;
  id: number;
  title: string;
  categories: Category[];
}
