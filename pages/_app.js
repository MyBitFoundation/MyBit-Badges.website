import React from 'react'
import App, { Container } from 'next/app'
import AppInfo from '../components/context/AppInfo'
import MainWrapper from '../components/mainWrapper'
import AppInfoContext from '../components/context/AppInfoContext'
import Head from '../components/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <React.Fragment>
          <Head />
          <AppInfo>
            <AppInfoContext.Consumer>
              {({ mobileMenu, handleClickMobileMenu }) => (
                <MainWrapper mobileMenu={mobileMenu}>
                  <Component {...pageProps} />
                </MainWrapper>
              )}
            </AppInfoContext.Consumer>
          </AppInfo>
        </React.Fragment>
      </Container>
    )
  }
}
