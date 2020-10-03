type TypeLinkObject = {
  label: string;
  url: string;
}
type TypeLinks = TypeLinkObject[];

const links: TypeLinks = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Sobre mim',
    url: '/about/'
  }
]

export default links