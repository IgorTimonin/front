import { IMenu } from "./menu.interface";

const firstMenu: IMenu = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home'
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Каталог'
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Новинки'
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Популярное'
    },
  ]
}
export const userMenu: IMenu = {
  title: 'Управление',
  item: []
}

export const menus: IMenu[] = [firstMenu, userMenu]