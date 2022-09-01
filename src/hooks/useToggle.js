// React
import { useState } from "react"

export default function useToggle(defaultValue) {
  // State
  const [value, setValue] = useState(defaultValue)
  // Handlers
  const toggleValue = (value) => {
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    )
  }
  // ->
  return [value, toggleValue]
}