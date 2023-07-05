// Styles
import { MetrictStyle } from "./index.style"
// Scripts
import { getUserCookies } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Modals
import InformationModal from "@/components/modals/Information"
import VoteModal from "@/components/modals/Vote"

export default function Metric({ metric, postId, ...props }) {
  // Cookies
  const user = getUserCookies()
  // States
  const [alreadyVoted, setAlreadyVoted] = useState(false)
  useEffect(() => {
    setAlreadyVoted(user.voted["spotlights"].some(spotlight => spotlight.id == postId))
  }, [])
  return (
    <MetrictStyle { ...props }>
      <div className="metric-container">
        <div className="header-container">
          <div className="title-container">
            <p className="title typography-03">{ metric.title }</p>
            { metric.description.information && <InformationModal description={ metric.description.information } />}
          </div>
          { metric.votes && metric.votes.length !== 0 && <p className="typography-03">{ `${ metric.votes.length } votes` }</p>}
          { metric.backlinks && <p className="typography-03">{ `${ metric.backlinks } backlinks` }</p>}
        </div>
        <div className="content-container">
          <p className="typography-20">{ metric.value }<span className="typography-21">/10</span></p>
          { metric.votes && !alreadyVoted && <VoteModal metric={ metric.slug } description={ metric.description.vote } postId={ postId } votes={ metric.votes } /> }
        </div>
      </div>
    </MetrictStyle>
  )
}