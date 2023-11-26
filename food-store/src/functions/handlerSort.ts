import {filterElements, IFilterElement} from "@/components/filters/filter-list";
import {IProduct} from "@/services/services";


const castType = (value: string | number): string | number => {
  return Number(value) ? Number(value) : value;
}

const getActiveFilter = (): IFilterElement => {
  return filterElements.filter(elem => !elem.order && elem.isActive)[0];
}
export const handlerSort = (elem:IFilterElement, data: IProduct[], setData: (value: IProduct[]) => void) => {
  let copyData= [...data];
  const field = elem.field;
  const activeFilterElem = getActiveFilter();

  if (activeFilterElem) {
      copyData = copyData.filter(elem => elem[activeFilterElem.field as keyof typeof elem]);
  }
  
  if (elem.order == "ASC") {
    copyData.sort( (a:any, b:any) => castType(a[field]) < castType(b[field]) ? 1 : -1);
  } else  {
    copyData.sort( (a:any, b:any) => castType(a[field]) > castType(b[field]) ? 1 : -1);
  }
  
  elem.order = elem.order == "ASC" ? "DESC" : "ASC"
  elem.isActive = true
  setData(copyData);
}