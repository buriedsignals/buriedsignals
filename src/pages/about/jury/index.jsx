// Templates
import JuryTemplate from "@/components/templates/About/Jury"

export default function Jury({ jury, ...props }) {
  return (
    <JuryTemplate jury={ jury } />
  )
}

export async function getStaticProps(context) {
  const jury = [
    {
      name: "Tom Vaillant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
      image: {
        url: "/images/img-profil.jpg",
        alt: "Profil image"
      },
    },
    {
      name: "Tom Vaillant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
      image: {
        url: "/images/img-profil.jpg",
        alt: "Profil image"
      },
    },
    {
      name: "Tom Vaillant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
      image: {
        url: "/images/img-profil.jpg",
        alt: "Profil image"
      },
    },
    {
      name: "Tom Vaillant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
      image: {
        url: "/images/img-profil.jpg",
        alt: "Profil image"
      },
    },
    {
      name: "Tom Vaillant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
      image: {
        url: "/images/img-profil.jpg",
        alt: "Profil image"
      },
    },
    {
      name: "Tom Vaillant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
      image: {
        url: "/images/img-profil.jpg",
        alt: "Profil image"
      },
    }
  ]
  if (!jury) {
    return {
      notFound: true,
    }
  }
  return {
    props: { jury }
  }
}