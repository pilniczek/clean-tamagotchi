import React from 'react'
import { string, number } from 'prop-types'

const Paths = ({ pathName, width, height }) => {
  const config = {
    doubleArrow: <path d={`M 0,0 ${width},0 ${width},${height} 0,${height} 20,100 10,100 30,75 10,50 20,50`} />,
    leftV: <path d={`M 0,0 ${width},0 ${width},${height} 0,${height} 20,150`} />,
    rightV: <path d={`M 20,0 ${width},0 ${width},${height} 20,300 0,150`} />,
  }
  const path = config[pathName]
  return (
    path
  )
}

Paths.propTypes = {
  pathName: string,
  width: number,
  height: number,
}

Paths.defaultProps = {
  pathName: 'leftV',
  width: 300,
  height: 300,
}

export default Paths
