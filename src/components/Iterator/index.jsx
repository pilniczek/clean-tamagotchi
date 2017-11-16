import React from 'react'
import propTypes from 'prop-types'
import uniId from '../../utils'

const Iterator = ({ Component, items, className }) => {
  const iteration = (iterationItems, IterationComponent) => {
    let total = 0
    if (iterationItems && iterationItems.length) {
      total = iterationItems.length;
      return iterationItems.map((iterationItem, index) => (
        <IterationComponent
          key={uniId()}
          {...iterationItem}
          index={index}
          total={total}
          first={index === 0}
          last={index === total - 1}
        />
      ));
    }
    return null
  }
  return (
    <div className={className}>
      {iteration(items, (props) => <Component {...props} />)}
    </div>
  )
}

Iterator.propTypes = {
  Component: propTypes.func.isRequired,
  items: propTypes.array.isRequired,
  className: propTypes.string,
}

Iterator.defaultProps = {
  className: '',
}

export default Iterator
