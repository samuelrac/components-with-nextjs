import '../styles/globals.css'

import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const titulo = "Loja do Samuel"

/*     if (router.pathname.startsWith('/produto')) {
      return (
        <>
          <PageHeader titulo="Single do Produto" />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )
    } */

    return (
      <>
        <Layout>
          <Component titulo={titulo} {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
