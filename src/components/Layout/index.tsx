import React from 'react'

import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

export default Layout
