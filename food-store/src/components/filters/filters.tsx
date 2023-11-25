'use client'
import React, { FC } from 'react';
import { IProduct } from '@/services/services';
import {filterElements } from '@/components/filters/filter-list';
import {applySortOrFilter, unSetActive} from '@/components/filters/functions';
import './style.scss'

interface IFilters {
  data: IProduct[];
  setVisibleData: (value: IProduct[]) => void;
}
const Filters: FC<IFilters> = ({data, setVisibleData}) => {
  const isDisabled = () => !Boolean(filterElements.filter(elem => elem.isActive).length);
  const resetDara = () => {
    setVisibleData(data);
    unSetActive(true);
  }
  
  return (
      <div className="filters mb-3">
        <div>
          {filterElements.map((elem, index)=> {
            return (
              <button
                key={index}
                className={`btn btn-sm rounded-5 ${elem.isActive ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => applySortOrFilter(elem, data, setVisibleData)}
              >
                {elem.name}
                {elem.isActive && elem.order && <i className="icon-sort"  data-order={elem.order} />}
              </button>
            )
          })}
        </div>
        
        <div>
          <button
            disabled={isDisabled()}
            className={`btn btn-sm btn-primary`}
            onClick={resetDara}>Сбросить</button>
        </div>
      </div>
  );
};

export default Filters;