import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from '../styles/themed-components';
import { OnlyMobile, Hood } from '../components/base';
import theme from '../styles/theme';

class ReactApp extends App<any> {
  public static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
    };
  }

  constructor(props: any) {
    super(props);
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Hood/>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
          <OnlyMobile>
            <Component {...pageProps}/>
          </OnlyMobile>
        </ThemeProvider>
      </Container>
    );
  }
}

export default ReactApp;
