import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { DataFetcher } from "../common/DataFetcher";
import { Header } from "../common/Header/Header";
import { PageContainer, PageMain, Title } from "../components";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Hello world!" />
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <PageMain>
        <Title data-qa="title">Hello World.</Title>
        <DataFetcher />
      </PageMain>

      <footer></footer>
    </PageContainer>
  );
};

export default Home;
