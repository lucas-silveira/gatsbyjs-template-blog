import React from 'react'

import links from './content'

import * as S from './styles'

const MenuLinks = () => {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map(link => (
          <S.MenuLinksItem key={link.label}>
            <S.MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks