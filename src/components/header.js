import { Link as GatLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "tachyons"

const classes = {
  header: "sans-serif",
  navWrapper: "bg-black-80",
  nav: "dt w-100 mw8 center",
  homeWrapper: "dtc w2 v-mid pa3",
  linksWrapper: "dtc v-mid tr pa3",
  link: "f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3",
}

const Link = ({ to, children, rest }) => (
  <GatLink to={to} className={classes.link} {...rest}>
    {children}
  </GatLink>
)

const Header = ({ siteTitle, links }) => (
  <header className={classes.header}>
    <div className={classes.navWrapper}>
      <nav className={classes.nav}>
        <div className={classes.homeWrapper}>
          <Link to="/">{siteTitle}</Link>
        </div>
        <div className={classes.linksWrapper}>
          <Link to="/">Music</Link>
          <Link to="/">Portfolio</Link>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
