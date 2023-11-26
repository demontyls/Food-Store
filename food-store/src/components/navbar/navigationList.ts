export interface INavLink {
  name: string;
  path: string;
  imgName: string;
  imgPath: string;
}
export const NavigationList: INavLink[] = [
  {
    name: "Пицца",
    path: '/pizza',
    imgName: 'pizza',
    imgPath: '/img/pizza.jpg'
  },
  {
    name: "Пироги",
    path: '/pies',
    imgName: 'pie',
    imgPath: '/img/pie.jpg'
  },
  {
    name: "Новинки",
    path: '/new',
    imgName: 'new',
    imgPath: '/img/new.jpg'
  },
]