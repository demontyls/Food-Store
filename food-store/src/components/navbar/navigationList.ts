export interface INavLink {
  name: string,
  path: string,
}
export const NavigationList: INavLink[] = [
  {
    name: "Пицца",
    path: '/pizza'
  },
  {
    name: "Пироги",
    path: '/pies'
  },
  {
    name: "Новинки",
    path: '/new'
  },
]