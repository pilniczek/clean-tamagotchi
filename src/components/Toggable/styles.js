import { StyleSheet } from 'aphrodite/no-important'
import { v } from '../utils/variables'

const styles = StyleSheet.create({
  toggableWrap: {
    borderRadius: v.tinyRad,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: v.purple,
    marginBottom: '2rem',
  },
  toggableTop: {
    padding: '1rem 2rem 1rem 2rem',
    ':hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 5px #79589f',
    },
  },
  toggableBottom: {
    padding: '2rem 2rem 1rem 2rem',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: v.purple,
  },
  menuWrap: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    paddingBottom: '6.2rem',
    width: '6.2rem',
  },
  menuTop: {
    position: 'absolute',
    bottom: '0px',
  },
  toggleSVG: {
    float: 'right',
    transform: 'rotate(45deg)',
    marginTop: '.3rem',
    transition: 'margin-top .5s',
  },
  toggleSVGOpened: {
    marginTop: '1.1rem',
  },
  toggleIcon: {
    fill: 'none',
    strokeWidth: '3px',
    stroke: v.purple,
    strokeDasharray: '200%',
    strokeDashoffset: '-100%',
    transition: 'stroke-dashoffset .5s',
  },
  toggleIconOpened: {
    strokeDashoffset: '100%',
  },
})

export default styles
