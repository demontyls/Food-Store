import {Metadata, NextPage} from 'next';
import React from 'react';
import {getData, IProduct} from '@/services/services';
import PageContent from '@/pages/page-content/page-content';

export const metadata: Metadata = {
  title: 'Food Store | New',
  description: 'New products list page',
}
const PizzaPage: NextPage<any> = async () => {
  const data: IProduct[] = await getData('/pies');
  const newProducts = data.filter(product => product.isNew);
  
  return (
    <div>
      <h2 className="h2 mb-3">Новинки</h2>
      <PageContent data={newProducts} />
    </div>
  )
}

export default PizzaPage;