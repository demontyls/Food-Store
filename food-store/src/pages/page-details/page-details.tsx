'use client'
import React, {FC} from 'react';
import {IProduct} from '@/services/services';
import Card from '@/components/card/card';
import { usePathname } from 'next/navigation';
import './style.scss';

interface IPageDetails {
  data: IProduct;
}
const PageDetails: FC<IPageDetails> = ({data}) => {
  const pathname = usePathname();
  return (
    <div className="details-page rounded-5 shadow">
      <Card data={data} path={pathname ?? ''}/>
    </div>
  );
};

export default PageDetails;