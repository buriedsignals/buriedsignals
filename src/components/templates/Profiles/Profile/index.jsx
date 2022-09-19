// Styles
import { ProfileTemplateStyle } from "./index.style"
// Scripts
import { copyClipboard } from "@/scripts/utils"
// Hooks
import useStore from "@/hooks/useStore"
// Layouts
import Layout from "@/components/layouts"
// Modules
import AccordionModule from "@/components/modules/Accordion"
// Modals
import Edit from "@/components/modals/Edit"
// Buttons
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"
import MailIcon from "@/components/icons/Mail"

// const member = {
//   name: "Tom Vaillant",
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
//   image: {
//     url: "/images/img-profil.jpg",
//     alt: "Profil image"
//   },
//   socials: {
//     twitter: "@tomvllnt",
//     mail: "tom@buriedsignals.com"
//   },
//   bookmarks: {
//     spotlights: [
//       {
//         slug: "toto",
//         author: "The new york times",
//         categories: ["3D", "Dataviz", "Geomapping"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is making her Olympic debut after the. Uncover the truth about the legal fishing industry. A challenging year. Her versatility...",
//         image: {
//           url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "week",
//         likes: 0,
//         comments: 10,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "titi",
//         author: "The new york times",
//         categories: ["3D", "Dataviz"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry. A challenging year. Her versatility",
//         image: {
//           url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
//           alt: "Default image"
//         },
//         awards: null,
//         likes: 10100,
//         comments: 0,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Sunisa Lee - The Gymnast",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       },
//       {
//         slug: "tata",
//         author: "The new york times",
//         categories: ["3D"],
//         title: "Fin",
//         description: "Lee, 18, is makingtry",
//         image: {
//           url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         awards: "honors",
//         likes: 152,
//         comments: 30,
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         submited_by: {
//           name: "Amelia Wattenberger",
//           image: {
//             url: "/images/img-profil.jpg",
//             alt: "Profil image"
//           }
//         }
//       }
//     ],
//     insights: [
//       {
//         slug: "toto",
//         author: "Matt Conlen",
//         categories: ["Research"],
//         title: "Can You Recall What Brings You Joy?",
//         description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
//         image: {
//           url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         published_at: "2022-08-24T09:54:04.908Z"
//       },
//       {
//         slug: "titi",
//         author: "Matt Conlen",
//         categories: ["Interviews"],
//         title: "Can You Recall What Brings You Joy? Can You Recall What Brings You Joy?",
//         description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
//         image: {
//           url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         published_at: "2022-08-24T09:54:04.908Z"
//       },
//       {
//         slug: "titi",
//         author: "Matt Conlen",
//         categories: ["Interviews"],
//         title: "Can You Recall What Brings You Joy? Can You Recall What Brings You Joy?",
//         description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
//         image: {
//           url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//           alt: "Default image"
//         },
//         source: {
//           title: "articleurl.com",
//           url: "https://www.google.fr"
//         },
//         published_at: "2022-08-24T09:54:04.908Z"
//       },
//     ]
//   }
// }

export default function ProfileTemplate({ member, ...props }) {
  // Hooks
  const [user] = useStore((state) => [state.user])
  // Handlers
  const onClickButtonSignout = () => {}
  return (
    <Layout>
      <ProfileTemplateStyle { ...props }>
        <div className="profile-container">
          { user.connected &&
              <div className="container-module-large buttons-container">
                <ul className="action-container">
                  <li>
                    <Edit user={ member } />
                  </li>
                  <li>
                    <SecondaryButton onClickButton={ onClickButtonSignout } >
                      <p className="typography-03">Sign out</p>
                    </SecondaryButton>
                  </li>
                </ul>
              </div>
          }
          <h1 className="name container-module-large typography-04">{ member.name }</h1>
          <div className="container-module-large extras-container">
            <ul className="social-container">
              <li>
                <SecondaryButton onClickButton={ () => copyClipboard(member.twitter_account) } >
                  <TwitterIcon size="small" />
                </SecondaryButton>
                <p className="typography-05">{ member.twitter_account }</p>
              </li>
              <li>
                <SecondaryButton onClickButton={ () => copyClipboard(member.email) } >
                  <MailIcon size="small" />
                </SecondaryButton>
                <p className="typography-05">{ member.email }</p>
              </li>
            </ul>
          </div>
          <div className="container-module-large description-container">
            <p className="typography-07">{ member.description }</p>
          </div>
        </div>
        <AccordionModule panels={ member.bookmarked } />
      </ProfileTemplateStyle>
    </Layout>
  )
}