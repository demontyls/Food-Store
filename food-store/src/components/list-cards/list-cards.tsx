import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import Card from '@/components/card/card';
import { IProduct } from '@/services/services';
import './style.scss';

interface IListCards {
  products: IProduct[];
}
const ListCards: FC<IListCards> = ({ products }) => {
  const pathname = usePathname();
  return (
    <div className="list-cards">
      {products.map(product => <Card key={product.id} data={product} path={pathname ?? ''} />)}
    </div>
  );
};

export default ListCards;