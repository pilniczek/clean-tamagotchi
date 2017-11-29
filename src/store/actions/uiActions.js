export const types = {
  TOGGLE: 'TOGGLE',
  TABBED: 'TABBED',
  ERRORBOUNDARY: 'ERRORBOUNDARY',
}

export const toggle = (id) => ({
  type: types.TOGGLE,
  id,
})

export const tabbed = (id) => ({
  type: types.TABBED,
  id,
})

export const errorBoundary = (hasError) => ({
  type: types.ERRORBOUNDARY,
  hasError,
})
