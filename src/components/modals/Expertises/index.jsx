// Styles
import { useRef } from "react"
import { ExpertisesStyle } from "./index.style"
// Hooks
import useToggle from "@/hooks/useToggle"


export default function Expertises({ expertises, ...props }) {
  // Refs
  const expertisesRef = useRef()
  // Hooks
  const [modal, setModal] = useToggle(false)
  // Handlers
  const onClickButtonExpertises = () => {
    setModal(!modal)
  }
  const onClickCheckbox = (e) => {
    const value = e.currentTarget.querySelector("p").innerHTML
    const id = e.currentTarget.dataset.id
    let dataset = expertisesRef.current.dataset.value.length ? expertisesRef.current.dataset.value.split(',') : []
    const inputEl = e.currentTarget.querySelector("input")
    const checked = inputEl.checked
    inputEl.checked = !checked
    if (checked) {
      e.currentTarget.classList.remove("is-checked")
      const exist = dataset.indexOf(id)
      if (exist != -1) {
        dataset.splice(exist, 1)
      }
    } else {
      e.currentTarget.classList.add("is-checked")
      dataset.push(id)
    }
    expertisesRef.current.dataset.value = dataset.toString()
  }
  return (
    <ExpertisesStyle ref={ expertisesRef } className={ `input-expertises ${ modal ? "is-open" : "" }` } data-value={ expertises.filter(expertise => expertise.checked).map(expertise => expertise.id).toString() }  { ...props }>
      <div className="expertises-container">
        { expertises.map((expertise, index) => {
          return <button key={ `expertise-${ index }` } className={ `input input-checkbox ${ expertise.checked ? "is-checked" : "" }` }  data-id={ expertise.id } onClick={ onClickCheckbox }>
            <p className="typography-01">{ expertise.title }</p>
            <input className="typography-01" type="checkbox" name="checkbox" defaultChecked={ expertise.checked } />
          </button>
        }) }
      </div>
      <button className="button-modal" onClick={ onClickButtonExpertises }></button>
    </ExpertisesStyle>
  )
}