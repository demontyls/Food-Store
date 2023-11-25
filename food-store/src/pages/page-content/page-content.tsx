'use client'
import React, { useState } from 'react';
import {IProduct} from '@/services/services';
import Filters from '@/components/filters/filters';
import TileCards from '@/components/tile-cards/tail-cards';
interface IPageContent {
  data: any
}
const PageContent:React.FC<IPageContent> = ({data}) => {
  const [visibleData, setVisibleData] = useState<IProduct[]>(data);
  
  return (
    <div className="bg-white p-4 rounded-3 shadow-sm">
      <Filters data={data} setVisibleData={setVisibleData} />
      <TileCards products={visibleData} />
    </div>
  );
};

export default PageContent;