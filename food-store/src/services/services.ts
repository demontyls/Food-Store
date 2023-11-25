const baseURL = 'https://655ca67025b76d9884fdb3e2.mockapi.io/api';

export interface IProduct{
  avatar: string;
  id: string;
  isNew: boolean;
  name: string;
  price: string;
  description: string;
  prodId: string
}

export const getData = async (api_name: string): Promise<IProduct[] | any > => {
  try {
    const response = await fetch(baseURL + api_name, {cache: 'no-store'});
    return await response.json();
  } catch (error) {
    console.error(error)
  }
}

export const getDetail = async (pathName: string, id: string): Promise<IProduct> => {
  return await getData(`${pathName}/${id}`)
}

