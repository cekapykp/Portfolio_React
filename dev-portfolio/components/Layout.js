import Head from "next/head";
import React from "react";
import Header from "../components/Header";

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-10 px-2 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;