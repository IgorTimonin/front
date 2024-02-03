import { FC } from "react"
import ReduxToastrLib from "react-redux-toastr"

const ReduxToastr: FC = () => {
  return (
    <ReduxToastrLib
      position="top-center"
      newestOnTop={false}
      preventDuplicates
      progressBar
      closeOnToastrClick
      timeOut={2000}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  )
}

export default ReduxToastr