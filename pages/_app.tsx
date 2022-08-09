import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { Theming } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Theming>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theming>
  );
};

export default App;
