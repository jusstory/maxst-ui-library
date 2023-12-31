// import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import '@maxst-designsystem/maxst-design-system/src/styles/scss/base/global-style.scss';
import { useState } from 'react';
import '@maxst-designsystem/maxst-design-system/src/styles/scss/main.scss';
import BodyHeader from '@/components/BodyHeader';
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
        {/* <Switch id="mode-change" label={'mode'} onClick={onClickSwitch} /> */}
        <BodyHeader />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}
