import { css } from 'aphrodite/no-important'
import { node, oneOf, string } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'


const SmartLink = ({
  className,
  to,
  children,
  type,
  targetType,
}) => {
  if (targetType === 'external') {
    return (
      <a
        href={to}
        target="_blank"
        className={[className, css(styles[targetType], styles[type])].join(' ')}
      >
        {children}
      </a>
    )
  }
  if (targetType === 'internal') {
    return (
      <Link to={to} href={to} className={[className, css(styles[targetType], styles[type])].join(' ')}>
        {children}
      </Link>
    )
  }
  if (targetType === 'ui') {
    return (
      <button
        className={[className, css(styles[targetType], styles[type])].join(' ')}
        onClick={() => console.log(window.user.wtf)}
      >
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
  targetType: string,
  type: oneOf(['btn', 'btnBig', 'btnInv', 'btnInvBig', 'link']),
}

SmartLink.defaultProps = {
  to: '/',
  className: '',
  targetType: 'internal',
  children: 'odkaz',
  type: 'link',
}

export default SmartLink
