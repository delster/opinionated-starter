import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => (
  <header id="main-header" style={{
    background: `rebeccapurple`,
    marginBottom: `1.45rem`,
  }}>
    <div style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `white`,
            textDecoration: `none`,
        }}>
          {siteTitle}
        </Link>
      </h1>
      <a href="https://github.com/delster"><FontAwesomeIcon icon="code" /></a>
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
