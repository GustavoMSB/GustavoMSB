import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { AppThemeProvider } from '../contexts/ThemeContext';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}

export default appWithTranslation(MyApp);
