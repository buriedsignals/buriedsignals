// Styles
import { PostsFilterStyle } from "./index.style"
// React
import { useRef, useState } from "react"
// Hooks
import useArray from "@/hooks/useArray"
// Modals
import AwardsModal from "@/components/modals/Awards"

export default function PostsFilter({ posts, categories, awards = false, multiple = false, setPage, ...props }) {
  // Hooks
  const categoriesSelected = useArray([]);
  // State
  const [awardName, setAwardName] = useState('All')
  // Ref
  const filterRef = useRef()
  // Handlers
  const onClickButton = (e) => {
    const category = e.target.dataset.filter || false
    const award = e.target.dataset.award || awardName
    let newCategoriesSelected = [ ...categoriesSelected.array ]
    if (category) {
      if ((newCategoriesSelected.length == 1 && newCategoriesSelected.includes("All")) || category == "All") {
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
        newCategoriesSelected.push("All")
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
    posts.origin()
    if (category != "All" || award != "All") {
      posts.filter(n => {
        const filterCategory = (category == "All") || newCategoriesSelected.includes("All") ? true : newCategoriesSelected.every(categorySelected => {
          return  n.categories.includes(categorySelected)
        });
        const filterAward = (award == "All") ? true : n.awards == award;
        return filterCategory && filterAward;
      })
    }
    categoriesSelected.set(newCategoriesSelected)
    setPage(1)
  }
  return (
    <PostsFilterStyle ref={ filterRef } className="container-module-large" { ...props } >
      <ul className="filters-container">
        <div className="categories-container">
          <li className="filter-container">
            <button className="filter-button is-active" onClick={ onClickButton } data-filter={ "All" }>
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
        { awards && 
          <li className="filter-container filter-awards">
            <AwardsModal 
                buttonName={ awardName }
                listActions={ (() => {
                  const itemsAwards = awards.map(award => {
                    return (() => <button className={ `awards-button ${ awardName == award ? "is-active" : "" }` } onClick={ onClickButton } data-award={ award }>
                      <p className="typography-03">{ award }</p>
                    </button>)()
                  })
                  itemsAwards.unshift((() => <button className={ `awards-button ${ awardName == "All" ? "is-active" : "" }` } onClick={ onClickButton } data-award={ "All" }>
                    <p className="typography-03">All</p>
                  </button>)())
                  return itemsAwards
                })() }
              />
          </li>
        }
      </ul>
    </PostsFilterStyle>
  )
}