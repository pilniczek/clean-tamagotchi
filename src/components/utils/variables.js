export const v = {
  pink: '#ff6188',
  green: '#a9dc76',
  yellow: '#ffd866',
  orange: '#fc9867',
  violet: '#ab9df2',
  blue: '#78dce8',
  dark: '#282c34',
  grey: '#454952',
  black: '#16171d',
  light: '#F8F8F2',
  purple: '#79589f',
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
    fontSize: '1.7rem',
    cursor: 'pointer',
    ':focus': {
      outline: 'none',
      boxShadow: '0px 0px 5px black',
    },
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

export const b = {
  xs: 480,
  s: 720,
  m: 1080,
  l: 1366,
  xl: 1920,
  xxl: 2560,
}
