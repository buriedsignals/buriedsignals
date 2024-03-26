// Styles
import { InsightTemplateStyle } from "./index.style"
// React
import { useEffect, useState } from "react"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import FlexibleContentModule from "@/components/modules/FlexibleContent"
// Banners
import InsightBanner from "@/components/banners/Insight"
// Buttons
import SecondaryButton from "@/components/buttons/Secondary"
// Links
import SecondaryLink from "@/components/links/Secondary"
// Icons
import FacebookIcon from "@/components/icons/Facebook"
import TwitterIcon from "@/components/icons/Twitter"
import LinkIcon from "@/components/icons/Link"
import ArrowIcon from "@/components/icons/Arrow"

const post = {
  slug: "toto",
  author: "Matt Conlen",
  categories: ["Research"],
  title: "Can You Recall What Brings You Joy?",
  description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
  image: {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    alt: "Default image"
  },
  published_at: "2022-08-24T09:54:04.908Z",
  content: `
    <p>Notion, an app that every YouTuber is bragging about. YouTube is filled with productivity setups, tutorials and videos on how to use it efficiently. As someone who’s used the app for several years, I will explain why I decided to move on and find a better productivity system that works for me.</p>
    <p>I initially started using <a>Notion</a> for the final year of my undergraduate course at university. I found it so useful that I also used it during my master’s degree. However, I finally made the decision to move away from it once and for all. The reason? There were actually many reasons and all of them are discussed in this article in greater detail. But let’s start with the positive side…</p>
    <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80" alt="Image not described" />
    <h2>Why do I like Notion?</h2>
    <p>You may be surprised to see this section in a post titled “ Reasons I don’t use Notion”. But it will make sense later in this article.</p>
    <p>I find that being organised is an important part of my life. That’s why I rely on a good ecosystem that helps me keep on top of things, no I’m not talking about the Apple ecosystem, which by the way is something I can’t live without. I’m talking about a productivity ecosystem. I need an ecosystem that helps me track the progress of my projects such as Tech With Dom, my working life and my social life. I find it better to live an organised lifestyle, it’s just who I am, I can’t really explain it.</p> 
    <p>Nevertheless, Notion is one of those tools that helps people like me stay on top of things. The possibilities are endless! I used it as my content management system for filing my lecture notes, powerpoints and even making notes. I used it to plan out my blog articles, YouTube videos and even to keep track of my social and professional life.</p> 
    <p>I absolutely love Notion and think that it’s an amazing tool with endless uses. It’s is great for managing projects, it has so many tools built-in, you can do anything you want on it, customise it however you want. You can spend hours perfecting it to work for you. But that’s the thing, in my view, the productivity system should work for you, not the other way around. You shouldn’t have to spend a great deal of time perfecting your productivity system, especially since it can cause you to procrastinate. Now, one can argue that once you’ve perfected it will work well or if you use a template it will work well, but that just brings me to the next section, the reasons I don’t use Notion.</p>
  `
}

export default function InsightTemplate({ insight, ...props }) {
  // State
  const [url, setUrl] = useState('')
  // Effects
  useEffect(() => {
    setUrl(window.location.protocol + "//" + window.location.host + window.location.pathname)
  }, [])
  return (
    <Layout>
      <InsightTemplateStyle { ...props }>
        <div className="container-module-large links-container">
          <SecondaryLink href="/insights" intern={ true }>
            <ArrowIcon className="arrow" />
            <p className="typography-03">Back to list</p>
          </SecondaryLink>
          <ul className="share-container">
            <li>
              <SecondaryLink href={ `https://www.facebook.com/sharer/sharer.php?p[url]=${ url }` }>
                <FacebookIcon />
              </SecondaryLink>
            </li>
            <li>
              <SecondaryLink href={ `https://twitter.com/intent/tweet?url=${ url }` }>
                <TwitterIcon size="small" />
              </SecondaryLink>
            </li>
            <li>
              <SecondaryButton onClickButton={ () => copyClipboard(url) } >
                <LinkIcon />
              </SecondaryButton>
            </li>
          </ul>
        </div>
        <div className="container-module-large banner-container">
          <InsightBanner post={ insight } />
        </div>
        <FlexibleContentModule content={ insight.flexible_content } />
        <div className="back-container">
          <div className="container-module-medium">
            <div className="interact-container">
              <SecondaryLink href="/insights" intern={ true }>
                <ArrowIcon className="arrow" />
                <p className="typography-03">Back to list</p>
              </SecondaryLink>
            </div>
            <ul className="share-container">
              <li>
                <SecondaryLink href={ `https://www.facebook.com/sharer/sharer.php?p[url]=${ url }` }>
                  <FacebookIcon />
                </SecondaryLink>
              </li>
              <li>
                <SecondaryLink href={ `https://twitter.com/intent/tweet?url=${ url }` }>
                  <TwitterIcon size="small" />
                </SecondaryLink>
              </li>
              <li>
                <SecondaryButton onClickButton={ () => copyClipboard(url) } >
                  <LinkIcon />
                </SecondaryButton>
              </li>
            </ul>
          </div>
        </div>
      </InsightTemplateStyle>
    </Layout>
  )
}