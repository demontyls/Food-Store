import {Metadata, NextPage} from 'next';
import React from 'react';
import {getData, IProduct} from '@/services/services';
import PageContent from '@/pages/page-content/page-content';

export const metadata: Metadata = {
  title: 'Food Store | Pies',
  description: 'Pies list page',
}
const PiesPage: NextPage<any> = async () => {
  const path: string = '/pies';
  const data: IProduct[] = await getData(path);
  
  return (
    <div>
      <h2 className="h2 mb-3">Пироги</h2>
      <PageContent data={data} />
    </div>
  )
}

export default PiesPage;