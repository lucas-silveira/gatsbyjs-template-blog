import React from "react"
import Profile from "../Profile"

import { LayoutWrapper, LayoutMain } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout
