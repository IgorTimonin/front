import { IMenu } from "./menu.interface";

export const firstMenu: IMenu = {
  title: 'Меню',
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Главная'
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Каталог'
    },
    {
      icon: 'MdFiberNew',
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
  items: []
}

export const menus: IMenu[] = [firstMenu, userMenu]