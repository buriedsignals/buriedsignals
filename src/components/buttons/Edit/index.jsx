// Styles
import { EditStyle } from "./index.style"
// Icons
import EditIcon from "@/components/icons/Edit"

export default function Edit({ onClickButton, ...props }) {
  return (
    <>
      <EditStyle onClick={ onClickButton } { ...props }>
        <div className="edit-container">
            <EditIcon />
            <p className="typography-11">Edit</p>
        </div>
      </EditStyle>
    </>
  )
}