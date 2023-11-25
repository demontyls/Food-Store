export interface IFilterElement {
  field: string;
  name: string;
  isActive: boolean;
  order?: string;
}

export const filterElements: IFilterElement[] = [
  {
    field: 'name',
    name: 'По названию',
    isActive: false,
    order: 'DESC'
  },
  {
    field: 'price',
    name: 'По цене',
    isActive: false,
    order: 'DESC'
  },
  {
    field: 'isNew',
    name: 'Новинки',
    isActive: false,
  },
];