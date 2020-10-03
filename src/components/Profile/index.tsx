import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

import * as S from './styles'

const Profile = () => {
  const {
    site: { siteMetadata: { title, position, description } }
  } = useStaticQuery(graphql`
    query MyQuery{
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="#">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <p>{description}</p>
    </S.ProfileWrapper>
  )
}

export default Profile