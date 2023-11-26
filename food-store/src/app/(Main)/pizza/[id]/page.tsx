import {Metadata, NextPage} from 'next';
import React from 'react';
import { getDetail, IProduct } from '@/services/services';
import PageDetails from '@/pages/page-details/page-details';

export const metadata: Metadata = {
  title: 'Food Store | Pizza',
  description: 'Pizza details page',
}
const PizzaDetails: NextPage<any> = async ({params}) => {
  const data: IProduct = await getDetail('/pizza', params.id);
  return (
    <div className="d-flex flex-column">
      <h2 className="h2 mb-3">{data.name}</h2>
      <PageDetails data={data} />
    </div>
  )
}

export default PizzaDetails;