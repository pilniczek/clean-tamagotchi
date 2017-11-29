import { css } from 'aphrodite/no-important'
import { func, node, oneOf, string, shape } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'


const SmartLink = ({
  className,
  to,
  children,
  type,
  targetType,
  id,
  ui,
  actions: { toggle },
}) => {
  const handleClick = () => {
    if (ui === 'toggle') {
      return toggle(id)
    }
    return null
  }
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
      <Link to={to} className={[className, css(styles[targetType], styles[type])].join(' ')} onClick={handleClick}>
        {children}
      </Link>
    )
  }
  if (targetType === 'ui') {
    return (
      <button className={[className, css(styles[targetType], styles[type])].join(' ')} onClick={handleClick}>
        {children}
      </button>
    )
  }
  return null
}

SmartLink.propTypes = {
  id: string,
  ui: string,
  to: string,
  className: string,
  children: node,
  targetType: string,
  type: oneOf(['btn', 'btnBig', 'btnInv', 'btnInvBig', 'link']),
  actions: shape({
    toggle: func,
  }),
}

SmartLink.defaultProps = {
  id: 'link',
  ui: null,
  to: '/',
  className: '',
  targetType: 'internal',
  children: 'odkaz',
  type: 'link',
  actions: {},
}

export default SmartLink
