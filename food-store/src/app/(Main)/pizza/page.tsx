import { NextPage } from 'next';
import React from 'react';
import {getData, IProduct} from '@/services/services';
import PageContent from "@/pages/page-content/page-content";

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