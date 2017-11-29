import { connect } from 'react-redux'
import { toggle } from '../../store/actions/uiActions'
import uiSelectors from '../../store/selectors/uiSelectors'
import SmartLink from './SmartLink'

const componentDidCatch = (error, info) => {
  // Display fallback UI
  // this.setState({ hasError: true });
  // You can also log the error to an error reporting service
  // logErrorToMyService(error, info);
  return {}
}

const mapStateToProps = (state, locals) => {
  if (locals.ui === 'toggle') {
    return ({
      isOpen: locals.isOpen
        ? uiSelectors.getToggle(state).indexOf(locals.id) === -1
        : uiSelectors.getToggle(state).indexOf(locals.id) !== -1,
    })
  }
  return {}
}

const mapDispatchToProps = (locals, dispatch) => {
  if (locals.ui === 'toggle') {
    return ({
      actions: {
        toggle: (id) => dispatch(toggle(id)),
      },
    })
  }
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SmartLink);
