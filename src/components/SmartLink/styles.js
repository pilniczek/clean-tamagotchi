import { StyleSheet } from 'aphrodite/no-important'
import { m, v } from '../utils/variables'


const styles = StyleSheet.create({
  link: {
    display: 'inline',
    fontSize: '1.7rem',
    background: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    padding: '0',
    ':hover': {
      cursor: 'pointer',
    },
  },
  btn: {
    ...m.btnBase,
    padding: v.basePad,
    color: 'white',
    marginBottom: '.85rem',
  },
  btnBig: {
    ...m.btnBase,
    padding: v.bigPad,
    color: 'white',
    marginBottom: '1.7rem',
  },
  btnInv: {
    ...m.btnBase,
    padding: v.basePad,
    background: 'transparent',
    marginBottom: '.85rem',
  },
  btnInvBig: {
    ...m.btnBase,
    padding: v.bigPad,
    background: 'transparent',
    marginBottom: '1.7rem',
  },
  external: {
    color: v.violet,
    borderColor: v.violet,
    backgroundColor: v.violet,
  },
  internal: {
    color: v.blue,
    borderColor: v.blue,
    backgroundColor: v.blue,
  },
  ui: {
    color: v.dark,
    borderColor: v.dark,
    backgroundColor: v.dark,
  },
})

export default styles
