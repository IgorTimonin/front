import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconsNames } from "@/shared/types/icon.types"
import { FC } from "react"


const MaterialIcon:FC<{name: TypeMaterialIconsNames}> = ({name}) => {
  const IconComponent = MaterialIcons[name]

  return <IconComponent/> || <MaterialIcons.MdDragIndicator/>
}

export default MaterialIcon 