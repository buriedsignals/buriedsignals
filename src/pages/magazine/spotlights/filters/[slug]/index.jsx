// Middlewares
import { getPageSpotlights } from '@/middlewares/librairies/pages/spotlights';
import { getPostsSpotlights } from '@/middlewares/librairies/posts/spotlights';
// Templates
import SpotlightsTemplate from "@/components/templates/Spotlights"
import { forEach } from 'lodash';

export default function SpotlightsFitlers({ spotlights, ...props }) {
  return (
    <></>
    // <SpotlightsTemplate spotlights={ spotlights } />
  )
}

export async function getStaticPaths() {
  // const pageSize = 42
  // const spotlights = await getPostsSpotlights()
  // const paths = spotlights.posts.filter((post) => post.slug !== null).filter((post, index) => index % pageSize == 0).map((post, index) => ({
  //   params: { slug: (index + 1).toString(), pageSize: pageSize },
  // }))
  // return { paths, fallback: "blocking" }

  /*
    - 01 : Récupérer toutes les spotlights
    - 02 : Déterminer par le nombre de spotlights le nombre de pages sans filtres
    - 03 : Récupérer les listes de catégories, awards et geographies
    - 04 : Créer toutes les combinaisons de filtres
    - 05 : Pour chaque combinaison de filtres créer une nouvelle liste de spotlights correspondante
    - 06 : Pour chaque nouvelle liste de spotlights filtrées déterminer par le nombre de spotlights le nombre de pages
  */

  // Variables nécessaires
  let paths = []
  const pageSize = 3
  const datas = {
    posts: [
      {
        id: 217,
        awards: '',
        categories: ["Audio"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'North America',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: '',
        categories: ["3D", "Audio"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'North America',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: '',
        categories: ["3D", "Audio"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'North America',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: '',
        categories: ["3D"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'North America',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: 'Week',
        categories: ["3D"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'North America',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: 'Week',
        categories: ["3D"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'Asia',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: 'Week',
        categories: ["3D", "Audio"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'North America',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: 'Week',
        categories: ["3D"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'North America',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },{
        id: 217,
        awards: '',
        categories: ["Map", "Audio"],
        description: 'World-leading authority on global security, political risk and military conflict.',
        geography: 'Europe',
        slug: 'dashboard-iiss-myanmar-conflict-map',
        title: 'Dashboard - IISS Myanmar Conflict Map',
      },
    ],
    categories: [
      'Dataviz',
      'Long-form',
      'Illustration',
      'Interactive',
      '3D',
      'Maps',
      'Documentary',
      'Cinematic',
      'Audio'
    ],
    awards: [ 'Month', 'Week' ],
    geographies: [ 'North America', 'Asia', 'Europe', 'Africa' ],
    pageMax: 99999
  }
  const { posts, categories, awards, geographies} = datas
  // const getPages = (posts, pageSize) => posts.filter((post, index) => index % pageSize == 0).map((post, index) => `page=${ index + 1 }`)
  function getCombinations(valuesArray) {
    var combi = [];
    var temp = [];
    var slent = Math.pow(2, valuesArray.length);
    for (var i = 0; i < slent; i++) {
      temp = [];
      for (var j = 0; j < valuesArray.length; j++) {
          if ((i & Math.pow(2, j))) {
            console.log(i)
            temp.push(valuesArray[j]);
          }
      }
      if (temp.length > 0) {
        // console.log(i)
        combi.push(temp);
      }
    }
    combi.sort((a, b) => a.length - b.length);
    return combi;
  }
  function getCombinationsB(values, truc = true) {
    console.log(!truc && values)
    var combi = [];
    var temp = [];
    var slent = Math.pow(2, values.length);
    for (var i = 0; i < slent; i++) {
      temp = [];
      for (var j = 0; j < values.length; j++) {
          if ((i & Math.pow(2, j))) {
            temp.push(values[j]);
          }
      }
      if (temp.length > 0) {
        // console.log('temp', temp.length)
        if (temp.length > 1) {
          if (truc) {
            console.log(getCombinationsB(temp, false))
          }
        } else {
          temp[0].forEach(el => {
            combi.push(el);
          })
        }
        // temp.forEach(t => {
        //   if (temp.length > 1) {
        //     // combi.push(getCombinationsB(t))
        //   } else {
        //     if (typeof t == 'array') {
        //       t.forEach(tt => {
        //         combi.push(tt);
        //       })
        //     } else {
        //       combi.push(t);
        //     }
        //   }
        // });
        // // console.log(temp)
        // // combi.push(temp);
      }
    }
    combi.sort((a, b) => a.length - b.length);
    return combi;
  }
  const toto = getCombinationsB([ categories, awards, geographies ])
  // console.log(toto)
  
  
  


  // paths = [...paths, ...posts.filter((post, index) => index % pageSize == 0).map((post, index) => `page=${ index + 1 }`)]
  // paths = [...paths, ...posts.filter((post, index) => categories.filter((category) => post.categories.includes(category)).includes(true)).map((post, index) => `page=${ index + 1 }`)]
  // posts.filter((post, index) => {
  //     console.log(categories.filter((category) => post.categories.includes(category)))
  //     return true
  //   }
  // )
  /* 

  */
  const pathsExemple = [
    'page=...',
    'category=...',
    'award=...',
    'geography=...',

    'page=...&category=...',
    'page=...&award=...',
    'page=...&geography=...',
    'category=...&award=...',
    'category=...&geography=...',
    'award=...&geography=...',

    'page=...&category=...&award=...',
    'page=...&category=...&geography=...',
    'page=...&award=...&geography=...',
    'category=...&award=...&geography=...',

    'page=...&category=...&award=...&geography=...',
  ]

  // const spotlights = new Array(500)
  // const categories = ["Dataviz", "Map", "Webdoc"]
  // const awards = ["Week", "Month"]
  // const geographies = ["Europe", "Asia", "America"]
  // const filters = [
  //   {
  //     slugFilter: "category",
  //     items: categories,
  //     multiple: true
  //   },
  //   {
  //     slugFilter: "award",
  //     items: awards,
  //     multiple: false
  //   },
  //   {
  //     slugFilter: "geography",
  //     items: geographies,
  //     multiple: false
  //   }
  // ]

  // const paths = []
  // const toSlug = (value) => value.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')

  // categories.forEach(category => {
  //   paths.push({ params: { slug: `category=${ toSlug(category) }` } })
  //   awards.forEach(award => {
  //     paths.push({ params: { slug: `category=${ toSlug(category) }&award=${ toSlug(award) }` } })
  //     geographies.forEach(geography => {
  //       paths.push({ params: { slug: `category=${ toSlug(category) }&award=${ toSlug(award) }&geography=${ toSlug(geography) }` } })
  //     });
  //   });
  //   geographies.forEach(geography => {
  //     paths.push({ params: { slug: `category=${ toSlug(category) }&geography=${ toSlug(geography) }` } })
  //   });
  // });
  // awards.forEach(award => {
  //   paths.push({ params: { slug: `award=${ toSlug(award) }` } })
  //   geographies.forEach(geography => {
  //     paths.push({ params: { slug: `award=${ toSlug(award) }&geography=${ toSlug(geography) }` } })
  //   });
  // })
  // geographies.forEach(geography => {
  //   paths.push({ params: { slug: `geography=${ toSlug(geography) }` } })
  // })

  return { paths: [{ params: { slug: 'category=webdoc&award=month&geography=europe&page=1' } }], fallback: "blocking" }
}

export async function getStaticProps({params, ...context}) {
  const filters = JSON.parse('{"' + params.slug.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { 
    return typeof value == "string" && value.includes(',') ? value.split(',') : value
  })
  // const spotlights = await getPostsSpotlights({ page: {
  //   index: params.slug,
  //   pageSize: params.pageSize || 2
  // } })
  // const page = await getPageSpotlights()
  // if (!spotlights || !page) {
  //   return {
  //     notFound: true,
  //   }
  // }
  // spotlights.page = page
  return {
    props: { },
    revalidate: 1
  }
}


/*
  Comporte toi comme un expert en javascript.
  J'ai ces données suivantes :
  const postsPerPage = 3;
  const posts = [
    { titre: 'Post 1', ID: 1, categories: ['blog', 'site'], tag: 'new', continent: 'europe' },
    { titre: 'Post 2', ID: 2, categories: ['blog'], tag: '', continent: 'europe' },
    { titre: 'Post 3', ID: 3, categories: ['blog'], tag: 'old', continent: 'europe' },
    { titre: 'Post 4', ID: 4, categories: ['youtube', 'site'], tag: 'new', continent: 'asia' },
    { titre: 'Post 5', ID: 5, categories: ['blog', 'youtube'], tag: 'old', continent: 'asia' },
    { titre: 'Post 6', ID: 6, categories: [], tag: 'new', continent: 'america' },
    { titre: 'Post 7', ID: 7, categories: ['youtube'], tag: 'new', continent: 'america' },
    { titre: 'Post 8', ID: 8, categories: ['blog'], tag: '', continent: 'america' },
    { titre: 'Post 9', ID: 9, categories: ['site'], tag: '', continent: 'america' },
    { titre: 'Post 10', ID: 10, categories: ['blog', 'site', 'youtube'], tag: '', continent: 'europe' },
    { titre: 'Post 11', ID: 11, categories: [], tag: 'normal', continent: 'europe' },
    { titre: 'Post 12', ID: 12, categories: ['site'], tag: 'normal', continent: 'europe' },
  ]
  const categories = ['blog', 'site', 'youtube']
  const tags = ['new', 'old', 'normal']
  const continents = ['europe', 'asia', 'america']
  Je veux avoir un tableau avec toutes les combinaisons possibles entre categories, tags et continents et pages comme l'exemple suivant :
  const combinaisons = [
    'page=1', 'page=2', 'page=3',
    'categories=blog', 'categories=site', 'categories=youtube', 'categories=blog,site', 'categories=youtube,site', 'categories=blog,youtube', 'categories=blog,site,youtube',
    'tag=new', 'tag=old', 'tag=normal',
    'continent=europe', 'continent=asia', 'continent=america',
    'page=1&categories=blog', 'page=1&categories=blog,site', 'page=1&tag=new', 'page=1&continent=europe'
    'page=1&categories=blog&tag=new', 'page=1&categories=blog,site&tag=old', 'page=1&continent=europe&tag=normal'
    'page=1&categories=blog&tag=new&continent=europe',
  ]
  J'ai des contraintes :
   - Si il y a plusieurs valeurs pour la propriété categories alors les valeurs doivent être rassemblé ensemble et séparé par une virgule
   - Les propriétés tag et continent n'ont le droit qu'à une valeur par combinaison
   - l'indexation des pages dois être recalculé en fonction du filtre des posts à partir des combinaisons ou non des catégories, tags et continents
  Rédige moi le code en javascript qui me permet de réaliser ça.
*/