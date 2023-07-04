// Styles
import { MetrictStyle } from "./index.style"
// Modals
import InformationModal from "@/components/modals/Information"

export default function Metric({ metric, ...props }) {
  return (
    <MetrictStyle { ...props }>
      <div className="metric-container">
        <p className="typography-03">{ metric.title }</p>
        <div className="content-container">
          <p className="typography-20">{ metric.value }<span className="typography-21">/10</span></p>
          <InformationModal information={ metric.information } />
        </div>
      </div>
    </MetrictStyle>
  )
}