import React from 'react'
import { string, node, func } from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important'
import styles from './styles'

const SmartLink = ({
  className, to, children, type, onClick,
}) => {
  if (type === 'external') {
    return (
      <a
        href={to}
        target="_blank"
        className={[className, css(styles.link, styles[type])].join(' ')}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
  if (type === 'internal') {
    return (
      <Link to={to} className={[className, css(styles.link, styles[type])].join(' ')}>
        {children}
      </Link>
    )
  }
  if (type === 'ui') {
    return (
      <button className={[className, css(styles.link, styles[type])].join(' ')} onClick={onClick}>
        {children}
      </button>
    )
  }
  return null
}

SmartLink.propTypes = {
  to: string,
  className: string,
  children: node,
  type: string,
  onClick: func,
}

SmartLink.defaultProps = {
  to: '/',
  className: '',
  type: 'internal',
  children: 'odkaz',
  onClick: null,
}

export default SmartLink
