import React from 'react'
import { string, bool, number } from 'prop-types'
import { css } from 'aphrodite/no-important'
import styles from './styles'
import CropPaths from './CropPaths'

const Image = ({
  src,
  alt,
  isCropped,
  pathName,
  width,
  height,
  className,
}) => (
  isCropped ?
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      className={css(styles[className])}
    >
      <clipPath id="clip-path">
        <CropPaths name={pathName} width={width} height={height} />
      </clipPath>
      <image
        xlinkHref={src}
        src={src}
        alt={alt}
        clipPath="url(#clip-path)"
        width="100%"
        height={height}
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
    :
    <img className={css(styles[className])} src={src} alt={alt} />
)

Image.propTypes = {
  src: string,
  alt: string,
  isCropped: bool,
  pathName: string,
  width: number,
  height: number,
  className: string,
}

Image.defaultProps = {
  src: '',
  alt: 'obrazek',
  isCropped: false,
  pathName: 'leftV',
  width: null,
  height: null,
  className: null,
}

export default Image
