export const v = {
  purple: '#79589f',
  blue: '#8cbcf3',
  extSign: '"►"',
  bigPad: '1.7rem 3.4rem',
  basePad: '.85rem 1.7rem',
  fullRad: '9999rem',
  tinyRad: '3px',
}

export const m = {
  btnBase: {
    display: 'inline-block',
    textDecoration: 'none',
    borderRadius: v.fullRad,
    borderStyle: 'solid',
    borderWidth: '1px',
    marginBottom: '1.7rem',
    fontSize: '1.7rem',
    cursor: 'pointer',
  },
  arrowBefore: {
    ':before': {
      content: v.extSign,
      display: 'inline-block',
      paddingRight: '.3rem',
      fontSize: '80%',
    },
  },
}
