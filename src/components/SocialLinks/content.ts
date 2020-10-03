type TypeLinkObject = {
  label: string;
  url: string;
}

type TypeLinks = TypeLinkObject[]

const links: TypeLinks = [
  {
    label: 'Github',
    url: 'https://github.com/'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/'
  },
  {
    label: 'Youtube',
    url: 'https://youtube.com/'
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/'
  },
  {
    label: 'Unsplash',
    url: 'https://unsplash.com/'
  },
]

export default links