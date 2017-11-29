import { get } from 'lodash'

const getToggle = (state) => get(state, 'ui.toggle', [])

const getTabbed = (state) => get(state, 'ui.tabbed', [])

const getErrorBoundary = (state) => get(state, 'ui.errorBoundary', [])

export default {
  getToggle,
  getTabbed,
  getErrorBoundary,
}
