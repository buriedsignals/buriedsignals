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
  const [userVote, setUserVote] = useState(null)
  const [alreadyVoted, setAlreadyVoted] = useState(false)
  // Effects
  useEffect(() => {
    setAlreadyVoted(user.voted["spotlights"].some(spotlight => spotlight.id == postId))
  }, [])
  useEffect(() => {
    if (userVote) {
      metric.votes.push(userVote)
      metric.value = metric.votes.length != 0 ? metric.votes.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue), 0) / metric.votes.length : null
      metric.value = metric.value && Math.round(metric.value * 100) / 100
      setAlreadyVoted(true)
    }
  }, [userVote])
  return (
    <MetrictStyle { ...props }>
      <div className="metric-container">
        <div className="header-container">
          <div className="title-container">
            <p className="title typography-03">{ metric.title }</p>
            { metric.description_information && <InformationModal description={ metric.description_information } />}
          </div>
          { metric.votes && metric.votes.length !== 0 && <p className="typography-03">{ `${ metric.votes.length } votes` }</p>}
          { metric.backlinks && <p className="typography-03">{ `${ metric.backlinks } backlinks` }</p>}
        </div>
        <div className="content-container">
          <p className="typography-20">{ metric.value }<span className="typography-21">/10</span></p>
          { metric.votes && !alreadyVoted && <VoteModal metric={ metric.type } description={ metric.description_vote } postId={ postId } votes={ metric.votes } setUserVote={ setUserVote } /> }
        </div>
      </div>
    </MetrictStyle>
  )
}