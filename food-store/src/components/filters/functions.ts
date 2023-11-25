import {filterElements, IFilterElement} from "@/components/filters/filter-list";
import {IProduct} from "@/services/services";
import {handlerSort} from "@/functions/handlerSort";
import {handlerFilter} from "@/functions/handlerFilter";

export const unSetActive = (isAll?: boolean) => {
  if (isAll) {
    filterElements.forEach((elem)=> elem.isActive = false);
  } else {
    filterElements.forEach((elem)=> elem.order && (elem.isActive = false));
  }
}

export const applySortOrFilter = (elem:IFilterElement, data: IProduct[], setData: (value: IProduct[]) => void) => {
  if (elem.order) {
    unSetActive();
    handlerSort(elem, data, setData);
  }  else {
    handlerFilter(elem, data, setData)
  }
}