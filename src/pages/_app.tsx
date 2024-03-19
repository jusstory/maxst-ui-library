// import '@/styles/globals.css'
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import BodyHeader from '@/components/BodyHeader';
import Header from '@layout/header';
import { GlobalStyle } from '@styles/global-style';
import Footers from '@layout/footer';
// import { Switch } from '@maxst-designsystem/maxst-design-system';

export default function App({ Component, pageProps }: AppProps) {
  // const [mode, setMode] = useState<string>('light');

  // const onClickSwitch = (on: boolean) => {
  //   console.log(on);
  //   if (on) {
  //     setMode('dark');
  //   } else {
  //     setMode('light');
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <Switch id="mode-change" label={'mode'} onClick={onClickSwitch} /> */}
        <Header />

        <BodyHeader />
        <Component {...pageProps} />
        <Footers />
      </>
    </ThemeProvider>
  );
}
