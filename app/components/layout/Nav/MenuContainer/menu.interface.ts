import { TypeMaterialIconsNames } from "@/shared/types/icon.types"

export interface IMenuItem {
  icon: TypeMaterialIconsNames
  title: string
  link: string
}

export interface IMenu {
  title: string
  items: IMenuItem[]
}