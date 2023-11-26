import {Metadata, NextPage} from 'next';
import React from 'react';
import {getData, IProduct} from '@/services/services';
import PageContent from '@/pages/page-content/page-content';

export const metadata: Metadata = {
  title: 'Food Store | Pizza',
  description: 'Pizza list page',
}
const PizzaPage: NextPage<any> = async () => {
  const data: IProduct[] = await getData('/pizza');
  
  return (
    <div>
      <h2 className="h2 mb-3">Пицца</h2>
      <PageContent data={data} />
    </div>
  )
}

export default PizzaPage;