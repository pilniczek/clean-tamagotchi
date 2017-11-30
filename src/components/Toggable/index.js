import { connect } from 'react-redux'
import { toggle } from '../../store/actions/uiActions'
import uiSelectors from '../../store/selectors/uiSelectors'
import Toggable from './Toggable'

const mapStateToProps = (state, locals) => ({
  isOpen: locals.isOpen
    ? uiSelectors.getToggle(state).indexOf(locals.id) === -1
    : uiSelectors.getToggle(state).indexOf(locals.id) !== -1,
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    toggle: (id) => dispatch(toggle(id)),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Toggable)
