import {Metadata, NextPage} from 'next';
import React from 'react';
import { getDetail, IProduct } from '@/services/services';
import PageDetails from '@/pages/page-details/page-details';

export const metadata: Metadata = {
  title: 'Food Store | Pies',
  description: 'Pies details page',
}
const PiesDetails: NextPage<any> = async ({params}) => {
  const data: IProduct = await getDetail('/pies', params.id);
  
  return (
    <div className="d-flex flex-column">
      <h2 className="h2 mb-3 d-flex flex-column">{data.name}</h2>
      <PageDetails data={data} />
    </div>
  )
}

export default PiesDetails;