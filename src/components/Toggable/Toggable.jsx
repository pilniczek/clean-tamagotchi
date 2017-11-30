import React from 'react'
import AnimateHeight from 'react-animate-height'
import { string, shape, object, bool, number, oneOfType } from 'prop-types'
import { css } from 'aphrodite/no-important'
import styles from './styles'

const Toggable = ({
  id,
  isOpen,
  actions:{ toggle },
  myClass,
  children,
  visible,
  icon,
  duration,
  ...rest,
}) => {
  const handleClick = () => toggle(id)
  const animateHeight = (isOpen ? 'auto' : 0)
  return (
    <div className={css(styles[myClass+'Wrap'])}>
      <button className={css(styles[myClass+'Top'])} onClick={handleClick}>
        { visible }
        { icon &&
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 17 17"
            width="17"
            height="17"
            className={
              isOpen
              ? css(styles.toggleSVG, styles.toggleSVGOpened)
              : css(styles.toggleSVG)
            }
          >
            <rect
              x="0"
              y="0"
              width="17"
              height="17"
              className={
                isOpen
                ? css(styles.toggleIcon, styles.toggleIconOpened)
                : css(styles.toggleIcon)
              }
            />
          </svg>
        }
      </button>
      <AnimateHeight duration={ duration } height={ animateHeight }>
        <div className={css(styles[myClass+'Bottom'])}>
          { children }
          {console.log(window.user.wtf)}
        </div>
      </AnimateHeight>
    </div>
  )
}

Toggable.propTypes = {
  id: oneOfType([
      string,
      number
  ]).isRequired,
  myClass: string,
  isOpen: bool,
  duration: number,
  action: shape({
      toggle: object.isRequired
  })
}

Toggable.defaultProps = {
  duration: 500,
  myClass: ''
}

export default Toggable
