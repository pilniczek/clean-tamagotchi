import { StyleSheet } from 'aphrodite/no-important'
import v from '../utils/variables'

const styles = StyleSheet.create({
  link: {
    display: 'inline-block',
    fontSize: '1.7rem',
  },
  btn: {
    padding: v.semiPad,
    textDecoration: 'none',
    borderRadius: v.fullRad,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: v.purple,
    marginBottom: '1.7rem',
  },
  inv: {
    color: v.blue,
    borderColor: v.blue,
  },
  external: {
    ':before': {
      content: v.extSign,
      display: 'inline-block',
      paddingRight: '.3rem',
    },
  },
  internal: {
    color: v.blue,
  },
  ui: {
    color: 'black',
  },
})

export default styles
