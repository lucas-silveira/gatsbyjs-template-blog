import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  margin: 2rem auto;
`

export const SocialLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #8899a6;
  transition: color 500ms;

  &:hover {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`