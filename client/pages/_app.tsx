import React, { useState, createContext } from "react";

import { AppProps } from "next/app";
import Head from "next/head";

import SearchBox from "../components/search-box/search_box";

import "../styles/globals.scss";

const Header = () => {
  return (
    <Head>
      {/* Gral tags */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="origin" />
      <title>Mercado Libre Challenge</title>
      <link rel="icon" type="image/png" href="/Logo_ML.png" />
      {/* Bootstrap */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      {/* Seo tags */}
      <meta
        name="description"
        content="La comunidad de compra y venta online más grande de América Latina."
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:description"
        content="La comunidad de compra y venta online más grande de América Latina."
      />
      <meta property="og:image" content="/Logo_ML@2x.png.png.png" />
      <meta property="og:title" content="Mercado Libre" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mercadolibre.com.ar/" />
    </Head>
  );
};

const MeliApp = ({ Component, pageProps }: AppProps) => {
  const [categories, setCategories] = useState([]);

  const newProps = {
    ...pageProps,
    setCategories: setCategories,
    categories: categories,
  };

  return (
    <>
      <Header />
      <SearchBox />
      <Component {...newProps} />
    </>
  );
};

export default MeliApp;
