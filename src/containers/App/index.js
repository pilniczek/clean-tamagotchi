import { css } from 'aphrodite/no-important'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SmartLink from '../../components/SmartLink'
import Image from '../../components/Image'
import uniId from '../../utils'
import { getAPIData } from './actions'
import logo from './images/logo.svg'
import product from './images/product.jpg';
import { selectApiData } from './selectors'
import styles from './styles'
import ErrorBoundary from '../../components/ErrorBoundary'


const getMyIp = (apiData) => (
  (apiData && apiData.origin) && apiData.origin.split(', ')[1]
)

class App extends Component {
  componentWillMount() {
    this.props.actions.getAPIData()
  }

  render() {
    return (
      <div className={css(styles.app)}>
        <div className={css(styles.appHeader)} id={uniId()} >
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={css(styles.appIntro)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={css(styles.appIntro)}>
          Your IP is: {getMyIp(this.props.apiData)}
        </p>

        <Image src={product} alt="product" />
        <Image
          src={product}
          alt="product"
          isCropped
          pathName="leftV"
          width={300}
          height={300}
        />
        <ErrorBoundary>
          <SmartLink targetType="ui" ui="toggle" id="uiFunc1">
            ui
          </SmartLink>
        </ErrorBoundary>

        <table>
          <tbody>
            <tr>
              <td>
                <SmartLink targetType="external">
                  external
                </SmartLink>
                <br />
                <SmartLink targetType="internal">
                  internal
                </SmartLink>
                <br />
                <SmartLink targetType="ui">
                  ui
                </SmartLink>
              </td>
              <td>
                <SmartLink targetType="external" type="btn">
                  external
                </SmartLink>
                <br />
                <SmartLink targetType="internal" type="btn">
                  internal
                </SmartLink>
                <br />
                <SmartLink targetType="ui" type="btn">
                  ui
                </SmartLink>
              </td>
              <td>
                <SmartLink targetType="external" type="btnInv">
                  external
                </SmartLink>
                <br />
                <SmartLink targetType="internal" type="btnInv">
                  internal
                </SmartLink>
                <br />
                <SmartLink targetType="ui" type="btnInv">
                  ui
                </SmartLink>
              </td>
              <td>
                <SmartLink targetType="external" type="btnBig">
                  external
                </SmartLink>
                <br />
                <SmartLink targetType="internal" type="btnBig">
                  internal
                </SmartLink>
                <br />
                <SmartLink targetType="ui" type="btnBig">
                  ui
                </SmartLink>
              </td>
              <td>
                <SmartLink targetType="external" type="btnInvBig">
                  external
                </SmartLink>
                <br />
                <SmartLink targetType="internal" type="btnInvBig">
                  internal
                </SmartLink>
                <br />
                <SmartLink targetType="ui" type="btnInvBig">
                  ui
                </SmartLink>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

App.defaultProps = {
  apiData: {},
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.object,
}

const mapStateToProps = (state) => ({
  apiData: selectApiData(state),
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
