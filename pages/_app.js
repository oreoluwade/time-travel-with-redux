import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/store';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;

// import { Provider } from 'react-redux';
// import { useStore } from 'store';
// import { appWithTranslation } from '../../i18n';
// import Head from 'next/head';

// const MyApp = ({ Component, pageProps }) => {
//

//   return (
//     <Provider store={store}>
//       <Head>
//         <title>Blox</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };

// export default appWithTranslation(MyApp);
