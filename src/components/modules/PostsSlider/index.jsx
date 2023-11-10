// Styles
import { PostsSliderStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Modules
import PostsFilterModule from "../PostsFilter"
import NewsletterModule from "../Newsletter"
// Cards
import SpotlightCard from "@/components/cards/Inspiration"
import InsightCard from "@/components/cards/Insight"
import ResourceCard from "@/components/cards/Resource"
import JuryCard from "@/components/cards/Jury"
import DirectoryCard from "@/components/cards/Directory"
// Buttons
import ThirstyButton from "@/components/buttons/Thirsty"

export default function PostsSlider({ type, posts, ...props }) {
  // States
  const [currentIndexSlider, setCurrentIndexSlider] = useState(0)
  // Datas
  const maxBySlide = 6
  const totalSlides = Math.floor(posts.length / 6)
  let currentPosts = posts.slice(currentIndexSlider * maxBySlide, (currentIndexSlider + 1) * maxBySlide)
  // Effects
  useEffect(() => {
    currentPosts = posts.slice(currentIndexSlider * maxBySlide, (currentIndexSlider + 1) * maxBySlide)
  }, [currentIndexSlider])
  // Handlers
  const onClickButtonPreviousPosts = () => {
    setCurrentIndexSlider(currentIndexSlider - 1)
  }
  const onClickButtonNextPosts = () => {
    setCurrentIndexSlider(currentIndexSlider + 1)
  }
  return (
    <PostsSliderStyle { ...props } >
      <ul className={ `container-module-large list-container type-${ type } ${ posts.length == 0 ? 'no-result-container' : '' }` }>
        { currentPosts.length != 0 && currentPosts.map((post, index) => {
              return <><li key={ `post-${ index }` } className="item-container">
                {(() => {
                  switch (type) {
                    case 'directory':
                      return <DirectoryCard post={ post } />
                  }
                })()}
              </li>
              </>
          }) }
      </ul>
      
        <div className="container-module-large more-slides">
          { currentIndexSlider !== 0 && 
            <button onClick={ onClickButtonPreviousPosts } className="slide typography-01">
                <p className="typography-01 arrow-left">{ "< Previous" }</p> 
            </button>
          }
          { currentIndexSlider !== totalSlides &&
            <button onClick={ onClickButtonNextPosts } className="slide typography-01">
                <p className="typography-01 arrow-right">{ "Next >" }</p> 
            </button>
          }
        </div>
    </PostsSliderStyle>
  )
}