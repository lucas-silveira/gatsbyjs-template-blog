import React from "react"
import Profile from "../Profile"

import GlobalStyles from '../../styles/global'
import { LayoutWrapper, LayoutMain } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout
