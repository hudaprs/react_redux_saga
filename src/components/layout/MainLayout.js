import React from "react"

// Components
import Header from "../include/Header"

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
