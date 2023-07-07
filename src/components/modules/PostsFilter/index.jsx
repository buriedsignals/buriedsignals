// Styles
import { PostsFilterStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Next
import { useRouter } from "next/router"
// Hooks
import useArray from "@/hooks/useArray"
// Modals
import AwardsModal from "@/components/modals/Awards"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

export default function PostsFilter({ posts, categories, awards = false, geographies = false, multiple = false, setPage, ...props }) {
  // Router
  const router = useRouter()
  // Hooks
  const categoriesSelected = useArray([]);
  const categoriesWidth = useArray([]);
  // State
  const [awardName, setAwardName] = useState(router.query.award ? awards.find(a => a.slug === router.query.award) : { title: "Award", slug: "award" })
  const [geographyName, setGeographyName] = useState(router.query.geography ? geographies.find(g => g.slug === router.query.geography) : { title: "World", slug: "world" })
  const [indexCategoriesSlider, setIndexCategoriesSlider] = useState(0)
  const [translateCategoriesSlider, setTranslateCategoriesSlider] = useState(0)
  const [hideButtonsSlider, setHideButtonsSlider] = useState(false)
  const [hidePreviousButtonSlider, setHidePreviousButtonSlider] = useState(true)
  const [hideNextButtonSlider, setHideNextButtonSlider] = useState(false)
  const [maxWidthSlider, setMaxWidthSlider] = useState(0)
  // Ref
  const filterRef = useRef()
  const sliderRef = useRef()
  const sliderContainerRef = useRef()
  // Effect
  useEffect(() => {
    getWidthsSlider()
    window.addEventListener('resize', onResizeWindow) 
    return () => {
      window.removeEventListener('resize', onResizeWindow)
    }
  }, [])
  useEffect(() => {        
    sliderRef.current.style.transform = `translate3D(${ translateCategoriesSlider }px, 0, 0)`
  }, [translateCategoriesSlider])
  // Functions
  const getWidthsSlider = () => {
    setTimeout(() => {
      const categoriesEl = sliderRef.current.querySelectorAll('.filter-container')
      const newCategoriesWidth = []
      const widthAllSlide = 0
      categoriesEl.forEach(categoryEl => {
        const widthEl = categoryEl.getBoundingClientRect().width
        widthAllSlide += widthEl
        newCategoriesWidth.push(widthEl)
      })
      setMaxWidthSlider(widthAllSlide - sliderContainerRef.current.getBoundingClientRect().width)
      categoriesWidth.set(newCategoriesWidth)
      setHideButtonsSlider(widthAllSlide > sliderContainerRef.current.getBoundingClientRect().width ? false : true)
    }, 0);
  }
  // Handlers
  const onClickButton = (e) => {
    let category
    if (e.target.dataset.filter) {
      if (e.target.dataset.filter == "all") {
        category = null
      } else {
        if (router.query.category) {
          if (Array.isArray(router.query.category)) {
            if (router.query.category.includes(e.target.dataset.filter)) {
              router.query.category.splice(router.query.category.indexOf(e.target.dataset.filter), 1)
              category = [...router.query.category]
            } else {
              category = [...router.query.category, e.target.dataset.filter]
            }
          } else {
            if (router.query.category !== e.target.dataset.filter) {
              category = [router.query.category, e.target.dataset.filter]
            }
          }
        } else {
          category = e.target.dataset.filter
        }
      }
    } else {
      if (router.query.category) {
        category = router.query.category
      } else {
        category = null
      }
    }
    const award = e.target.dataset.award || router.query.award || null
    const geography = e.target.dataset.geography || router.query.geography || null
    const query = { ...router.query, category, award, geography, page: 1 }
    for (let key in query) {
      if (query[key] === null || query[key] === "award" || query[key] === "world") {
        delete query[key];
      }
    }
    router.push({ pathname: router.pathname, query }, undefined, { shallow: true }).then(() => router.reload())
    if (query.award) {
      setAwardName(query.award ? awards.find(a => a.slug === query.award) : { title: "Award", slug: "award" })
    }
    if (query.geography) {
      setGeographyName(query.geography ? geographies.find(a => a.slug === query.geography) : { title: "World", slug: "world" })
    }
  }
  const onClickButtonSlider = (e) => {
    const direction = e.target.dataset.direction
    if (direction === "Previous") {
      if (indexCategoriesSlider !== 0) {
        const translateSlider = translateCategoriesSlider + categoriesWidth.array[indexCategoriesSlider - 1]
        setTranslateCategoriesSlider(translateSlider)
        setIndexCategoriesSlider(indexCategoriesSlider - 1)
        setHidePreviousButtonSlider((indexCategoriesSlider - 1) == 0)
        setHideNextButtonSlider(translateSlider < -maxWidthSlider ? true : false)
      }
    } else if (direction === "Next") {
      if (indexCategoriesSlider !== categoriesWidth.array.length - 1) {
        const translateSlider = translateCategoriesSlider - categoriesWidth.array[indexCategoriesSlider]
        setTranslateCategoriesSlider(translateSlider)
        setIndexCategoriesSlider(indexCategoriesSlider + 1)
        setHidePreviousButtonSlider(false)
        setHideNextButtonSlider(translateSlider < -maxWidthSlider ? true : false)
      }
    }
  } 
  const onResizeWindow = (e) => {
    getWidthsSlider()
    setTranslateCategoriesSlider(0)
    setIndexCategoriesSlider(0)
    setHidePreviousButtonSlider(true)
    setHideNextButtonSlider(false)
  }
  const onScrollSlider = (e) => {
    if (e.target.scrollLeft <= 1) {
      setHidePreviousButtonSlider(true)
    } else if (e.target.scrollLeft > 0) {
      setHidePreviousButtonSlider(false)
    }
    const scrollMaxWidthSlider = maxWidthSlider - 1
    if (e.target.scrollLeft >= scrollMaxWidthSlider) {
      setHideNextButtonSlider(true)
    } else if (e.target.scrollLeft < scrollMaxWidthSlider) {
      setHideNextButtonSlider(false)
    }
  }
  return (
    <PostsFilterStyle ref={ filterRef } className="container-module-large" { ...props } >
      <ul className="filters-container">
        <div className="categories-slider-container">
          <div ref={ sliderContainerRef } className="categories-container" onScroll={ onScrollSlider }>
            <div ref={ sliderRef } className="slider-container">
              <li className="filter-container">
                <button className={ `filter-button ${ !router.query.category ? "is-active" : "" }` } onClick={ onClickButton } data-filter={ "all" }>
                  <p className="typography-05">All</p>
                </button>
              </li>
              { categories.map((category, index) => {  
                return <li key={ `category-${ index }` } className="filter-container">
                  <button className={ `filter-button ${ router.query.category == category.slug ||( router.query.category && router.query.category.includes(category.slug)) ? "is-active" : "" }` } onClick={ onClickButton } data-filter={ category.slug }>
                    <p className="typography-05">{ category.title }</p>
                  </button>
                </li>
              }) }
            </div>
          </div>
          <div className="buttons-container">
            {
              !hideButtonsSlider && !hidePreviousButtonSlider &&
              <button className="button-slider button-slider-previous typography-05" onClick={ onClickButtonSlider } data-direction={ "Previous" }>
                <ArrowIcon />
                <span>Previous</span>
              </button>
            }
            {
              !hideButtonsSlider && !hideNextButtonSlider &&
              <button className="button-slider button-slider-next typography-05" onClick={ onClickButtonSlider } data-direction={ "Next" }>
                <span>Next</span>
                <ArrowIcon />
              </button>
            }
          </div>
        </div>
        <div className="specific-container">
          { geographies && 
            <li className="filter-container filter-geographies">
              <AwardsModal 
                  buttonName={ geographyName.title }
                  listActions={ (() => {
                    const itemsGeographies = geographies.map((geography, index) => {
                      return (() => <button key={ `geography-${ index }` } className={ `geographies-button ${ geographyName.slug == geography.slug ? "is-active" : "" }` } onClick={ onClickButton } data-geography={ geography.slug }>
                        <p className="typography-03">{ geography.title }</p>
                      </button>)()
                    })
                    itemsGeographies.unshift((() => <button className={ `geographies-button ${ geographyName.slug == "world" ? "is-active" : "" }` } onClick={ onClickButton } data-geography={ "world" }>
                      <p className="typography-03">World</p>
                    </button>)())
                    return itemsGeographies
                  })() }
                />
            </li>
          }
          { awards && 
            <li className="filter-container filter-awards">
              <AwardsModal 
                  buttonName={ awardName.title }
                  listActions={ (() => {
                    const itemsAwards = awards.map((award, index) => {
                      return (() => <button key={ `award-${ index }` } className={ `awards-button ${ awardName.slug == award.slug ? "is-active" : "" }` } onClick={ onClickButton } data-award={ award.slug }>
                        <p className="typography-03">{ award.title }</p>
                      </button>)()
                    })
                    itemsAwards.unshift((() => <button className={ `awards-button ${ awardName.slug == "award" ? "is-active" : "" }` } onClick={ onClickButton } data-award={ "award" }>
                      <p className="typography-03">All</p>
                    </button>)())
                    return itemsAwards
                  })() }
                />
            </li>
          }
        </div>
      </ul>
    </PostsFilterStyle>
  )
}