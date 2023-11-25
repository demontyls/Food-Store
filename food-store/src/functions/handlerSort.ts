import {IFilterElement} from "@/components/filters/filter-list";
import {IProduct} from "@/services/services";


const castType = (value: string | number): string | number => {
  return Number(value) ? Number(value) : value;
}
export const handlerSort = (elem:IFilterElement, data: IProduct[], setData: (value: IProduct[]) => void) => {
  const copyData = [...data];
  const field = elem.field;
  
  if (elem.order == "ASC") {
    copyData.sort( (a:any, b:any) => castType(a[field]) < castType(b[field]) ? 1 : -1);
    // elem.order = "DESC";
  } else  {
    copyData.sort( (a:any, b:any) => castType(a[field]) > castType(b[field]) ? 1 : -1);
    // elem.order = "ASC";
  }
  
  elem.order = elem.order == "ASC" ? "DESC" : "ASC"
  elem.isActive = true
  setData(copyData);
}