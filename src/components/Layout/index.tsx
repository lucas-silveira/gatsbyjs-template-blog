import React from "react"
import Profile from "../Profile"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </>
  )
}

export default Layout
