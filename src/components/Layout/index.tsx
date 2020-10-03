import React from 'react'

import Sidebar from '../Sidebar'
import GlobalStyles from '../../styles/global'

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
    </S.LayoutWrapper>
  )
}

export default Layout
