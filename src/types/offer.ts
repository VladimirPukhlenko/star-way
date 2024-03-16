export interface ICategory {
  id: number;
  slug: string;
  href: string;
  path: string;
  is_maincategory: boolean;
  is_secondarycategory: boolean;
  title: string;
  title_en: string;
}

export interface IOffer {
  id: number;
  slug: string;
  title: string;
  category: ICategory;
  description: string | null;
  path: string;
  rating: number;
  tags: string[];
}
