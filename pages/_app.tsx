import type { AppProps } from "next/app";
import { Login } from "../contexts/LoginContext";
import { GlobalStyles } from "../styles/global";
import { Theming } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Login>
      <Theming>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theming>
    </Login>
  );
};

export default App;
