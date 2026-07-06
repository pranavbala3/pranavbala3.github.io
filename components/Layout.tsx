import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './NavBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Pranav Balabhadra' }: Props) => (
  <div style={{ overflowX: 'hidden' }}>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="description" content="Pranav Balabhadra's portfolio website" />
    </Head>
    <Navbar />
    <main>{children}</main>
  </div>
)

export default Layout
