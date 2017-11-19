import { StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },

  appLogo: {
    animation: 'app-logo-spin infinite 20s linear',
    height: '80px',
  },

  appHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },

  appIntro: {
    fontSize: 'large',
  },
});

export default styles;
