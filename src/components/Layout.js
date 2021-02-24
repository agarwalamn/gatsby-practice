import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
export default ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
