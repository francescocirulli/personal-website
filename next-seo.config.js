const title = 'Frank - personal website'
const description = 'Hey this is Frank personal website'
const url = 'https://frank.lol'
const image = `${url}/static/images/banner.png`

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    images: [
      {
        url: image,
        alt: 'Frank',
        type: 'image/png',
      },
    ],
  },
}

export default SEO
