import { wrapper } from "redux/store";
import GlobalStyle from "components/styles/Global";
import Page from "components/layout/Page";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default wrapper.withRedux(MyApp);
