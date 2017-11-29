import Raven from 'raven-js'

const sentryKey = '8b1814143bc64051b74b0995a6dfd8e2'
const sentryApp = '252397'
export const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context,
  })
  // eslint-disable-line no-unused-expressions
  if (window && window.console && console.error) {
    console.error(ex)
  }
}
