import React from 'react'

import Icons from './Icons'
import links from './content'

import * as S from './styles'

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map(link => {
          const Icon = Icons[link.label]

          return (
            <S.SocialLinksItem key={link.label}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

export default SocialLinks