// Styles
import { PostsFilterStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useArray from "@/hooks/useArray"
// Modals
import AwardsModal from "@/components/modals/Awards"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

export default function PostsFilter({ posts, categories, awards = false, geographies = false, multiple = false, setPage, ...props }) {
  // Hooks
  const categoriesSelected = useArray([]);
  const categoriesWidth = useArray([]);
  // State
  const [awardName, setAwardName] = useState('Award')
  const [geographyName, setGeographyName] = useState('World')
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
    const category = e.target.dataset.filter || false
    const award = e.target.dataset.award || awardName
    const geography = e.target.dataset.geography || geographyName
    let newCategoriesSelected = [ ...categoriesSelected.array ]
    if (category) {
      if ((newCategoriesSelected.length == 1 && newCategoriesSelected.includes("Award")) || category == "Award") {
        newCategoriesSelected = []
      }
      if (newCategoriesSelected.includes(category)) {
        newCategoriesSelected.splice(newCategoriesSelected.indexOf(category), 1)
      } else {
        if (multiple) {
          newCategoriesSelected.push(category)
        } else {
          newCategoriesSelected = [category]
        }
      }
      if (newCategoriesSelected.length == 0) {
        newCategoriesSelected.push("Award")
      }
      const filterButtons = filterRef.current.querySelectorAll(".filter-button")
      filterButtons.forEach(filterButton => {
        filterButton.classList.remove("is-active")
        if (newCategoriesSelected.includes(filterButton.dataset.filter)) {
          filterButton.classList.add("is-active")
        }
      });
    }
    if (award) {
      setAwardName(award)
    }
    if (geography) {
      setGeographyName(geography)
    }
    posts.origin()
    if (category != "Award" || award != "Award" || award != "World") {
      posts.filter(n => {
        const filterCategory = (category == "Award") || newCategoriesSelected.includes("Award") ? true : newCategoriesSelected.every(categorySelected => {
          return  n.categories.includes(categorySelected)
        });
        const filterAward = (award == "Award") ? true : n.awards == award;
        const filterGeography = (geography == "World") ? true : n.geography == geography;
        return filterCategory && filterAward && filterGeography;
      })
    }
    categoriesSelected.set(newCategoriesSelected)
    setPage(1)
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
          <div ref={ sliderContainerRef } className="categories-container"  onScroll={ onScrollSlider }>
            <div ref={ sliderRef } className="slider-container">
              <li className="filter-container">
                <button className="filter-button is-active" onClick={ onClickButton } data-filter={ "Award" }>
                  <p className="typography-05">All</p>
                </button>
              </li>
              { categories.map((category, index) => {
                return <li key={ `category-${ index }` } className="filter-container">
                  <button className="filter-button" onClick={ onClickButton } data-filter={ category }>
                    <p className="typography-05">{ category }</p>
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
                  buttonName={ geographyName }
                  listActions={ (() => {
                    const itemsGeographies = geographies.map((geography, index) => {
                      return (() => <button key={ `geography-${ index }` } className={ `geographies-button ${ geographyName == geography ? "is-active" : "" }` } onClick={ onClickButton } data-geography={ geography }>
                        <p className="typography-03">{ geography }</p>
                      </button>)()
                    })
                    itemsGeographies.unshift((() => <button className={ `geographies-button ${ geographyName == "World" ? "is-active" : "" }` } onClick={ onClickButton } data-geography={ "World" }>
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
                  buttonName={ awardName }
                  listActions={ (() => {
                    const itemsAwards = awards.map((award, index) => {
                      return (() => <button key={ `award-${ index }` } className={ `awards-button ${ awardName == award ? "is-active" : "" }` } onClick={ onClickButton } data-award={ award }>
                        <p className="typography-03">{ award }</p>
                      </button>)()
                    })
                    itemsAwards.unshift((() => <button className={ `awards-button ${ awardName == "Award" ? "is-active" : "" }` } onClick={ onClickButton } data-award={ "Award" }>
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