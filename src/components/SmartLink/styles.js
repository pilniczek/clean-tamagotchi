import { StyleSheet } from 'aphrodite/no-important'
import { m, v } from '../utils/variables'


const styles = StyleSheet.create({
  link: {
    display: 'inline',
    fontSize: '1.7rem',
    background: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    ':hover': {
      cursor: 'pointer',
    },
  },
  btn: {
    ...m.btnBase,
    padding: v.basePad,
    color: 'white',
  },
  btnBig: {
    ...m.btnBase,
    padding: v.bigPad,
    color: 'white',
  },
  btnInv: {
    ...m.btnBase,
    padding: v.basePad,
    background: 'transparent',
  },
  btnInvBig: {
    ...m.btnBase,
    padding: v.bigPad,
    background: 'transparent',
  },
  external: {
    color: v.purple,
    borderColor: v.purple,
    backgroundColor: v.purple,
  },
  internal: {
    color: v.blue,
    borderColor: v.blue,
    backgroundColor: v.blue,
  },
  ui: {
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'black',
  },
})

export default styles
