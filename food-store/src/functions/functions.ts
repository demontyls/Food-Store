import {IProduct} from "@/services/services";

export const getLocalData = (keyName:string) => {
  if (localStorage.getItem(keyName)) {
    return JSON.parse(localStorage.getItem(keyName) ?? '');
  } else {
    return [];
  }
}

export const setLocalData = (product:IProduct, keyName: string) => {
  if (localStorage.getItem(keyName)) {
    const products = JSON.parse(localStorage.getItem(keyName) ?? '');
    products.push(product);
    localStorage.setItem(keyName, JSON.stringify(products));
  } else {
    localStorage.setItem(keyName, JSON.stringify([product]));
  }
}