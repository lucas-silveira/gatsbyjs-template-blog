import React from "react"
import Profile from "../Profile"

import GlobalStyles from '../../styles/global'
import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

export default Layout
