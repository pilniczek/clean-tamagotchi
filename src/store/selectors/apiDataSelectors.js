import { get } from 'lodash'

const getWhat = (state) => get(state, 'api.data.what', [])

export default {
  getWhat,
}
