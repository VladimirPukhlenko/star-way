export interface ISubCategory {
  icon?: JSX.Element;
  title: string;
  id: number;
}
export interface ICategory {
  icon?: JSX.Element;
  title: string;
  id: number;
  subCategories: ISubCategory[];
}

export interface IMainCategory {
  icon?: JSX.Element;
  title: string;
  id: number;
  categories: ICategory[];
}

export type CategoryUnion = IMainCategory | ICategory | ISubCategory;
