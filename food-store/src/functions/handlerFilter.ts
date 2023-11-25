import {IFilterElement} from "@/components/filters/filter-list";
import {IProduct} from "@/services/services";

export const handlerFilter = (elem: IFilterElement, data: IProduct[], setData: (value: IProduct[]) => void): void => {
  const copyData = [...data];
  const field = elem.field;
  if (elem.isActive) {
    setData(copyData);
  } else  {
    setData(copyData.filter(item => item[field as keyof typeof item] ));
  }
  elem.isActive = !elem.isActive;
}