import React, {FC} from 'react';
import {IProduct} from '@/services/services';
import Card from '@/components/card/card';
import { usePathname } from 'next/navigation';
import './style.scss'

interface ITileCards {
  products: IProduct[];
}
const TileCards: FC<ITileCards> = ({ products }) => {
  const pathname = usePathname();
  return (
    <div className="cards">
      {products.map(product => <Card key={product.id} data={product} path={pathname ?? ''} />)}
    </div>
  );
};

export default TileCards;