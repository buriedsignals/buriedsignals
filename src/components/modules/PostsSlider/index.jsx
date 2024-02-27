// Styles
import { PostsSliderStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Cards
import ExpertsCard from "@/components/cards/Experts"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

export default function PostsSlider({ type, posts, meta, ...props }) {
  // States
  const [currentIndexSlider, setCurrentIndexSlider] = useState(0)
  const [show, setShow] = useState(true)
  // Datas
  const maxBySlide = meta && parseInt(meta.sectionSize) || 6
  const totalSlides = meta && parseInt(meta.totalPages) || 1
  let currentPosts = posts.slice(currentIndexSlider * maxBySlide, (currentIndexSlider + 1) * maxBySlide)
  // Effects
  useEffect(() => {
    currentPosts = posts.slice(currentIndexSlider * maxBySlide, (currentIndexSlider + 1) * maxBySlide)
  }, [currentIndexSlider])
  useEffect(() => {
    if (show) {
      document.querySelector('main').classList.add("is-show")
    } else {
      document.querySelector('main').classList.remove("is-show")
    }
  }, [show]) 
  // Handlers
  const onClickButtonPreviousPosts = () => {
    setShow(false)
    setTimeout(() => {
      setCurrentIndexSlider(currentIndexSlider - 1)
    }, 100);
    setTimeout(() => {
      window.scrollTo(0, 0)
      setShow(true)
    }, 500);
  }
  const onClickButtonNextPosts = () => {
    setShow(false)
    setTimeout(() => {
      setCurrentIndexSlider(currentIndexSlider + 1)
    }, 100);
    setTimeout(() => {
      window.scrollTo(0, 0)
      setShow(true)
    }, 500);
  }
  return (
    <PostsSliderStyle { ...props } >
      <ul className={ `container-module-large list-container type-${ type } ${ posts.length == 0 ? 'no-result-container' : '' }` }>
        { currentPosts.length != 0 && currentPosts.map((post, index) => {
              return <><li key={ `post-${ index }` } className="item-container">
                {(() => {
                  switch (type) {
                    case 'experts':
                      return <ExpertsCard post={ post } />
                  }
                })()}
              </li>
              </>
          }) }
      </ul>
      <div className="container-module-large more-slides">
        { currentIndexSlider !== 0 && 
          <button onClick={ onClickButtonPreviousPosts } className="slide typography-01">
              <p className="typography-01 arrow-left"><ArrowIcon />{ "Previous" }</p> 
          </button>
        }
        { currentIndexSlider !== totalSlides - 1 &&
          <button onClick={ onClickButtonNextPosts } className="slide typography-01">
              <p className="typography-01 arrow-right">{ "Next" }<ArrowIcon /></p> 
          </button>
        }
      </div>
    </PostsSliderStyle>
  )
}