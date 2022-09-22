// Styles
import { CommentsStyle } from "./index.style"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
import ThirstyButton from "@/components/buttons/Thirsty"

export default function Comments({ comments, ...props }) {
  return (
    <CommentsStyle { ...props }>
      <div className="container-module-medium comments-container">
        <h3 className="typography-09">8 comments</h3>
        <div className="search-container">
          <div className="search-form">
            <div className="photo-container">
              <img src="/images/img-profil.jpg" alt="" />
            </div>
            <div className="input-container">
              <input className="typography-12" type="text" placeholder="Add a comment..." />
            </div>
            <PrimaryButton color="blue" onClick="/profiles/signup">
              <p className="typography-03">Send</p>
            </PrimaryButton>
          </div>
        </div>
        <div className="panel-container">
          <div className="comment-card">
            <div className="comment-header">
              <div className="header-user">
                <div className="photo-container">
                  <img src="/images/img-profil.jpg" alt="" />
                </div>
                <p className="name typography-12">amyrobson</p>
                <p className="date typography-12">1 week ago</p>
              </div>
              <div className="header-actions">
                <button className="button-delete">Delete</button>
                <button className="button-edit">Edit</button>
                <button className="button-reply">Reply</button>
              </div>
            </div>
            <p className="comment-content typography-12"><span className="username">@ramsesmiron</span> I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.</p>
          </div>
        </div>
        <div className="more-posts">
          <ThirstyButton onClickButton={ () => {} }>Load more</ThirstyButton>
        </div>
      </div>
    </CommentsStyle>
  )
}