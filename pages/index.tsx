import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "../common/Header/Header";
import { LoginMask } from "../common/LoginMask";
import { PageContainer, PageMain, Title } from "../components";
import { Routes } from "../config";
import { useIsLoggedIn } from "../contexts/LoginContext";

const Home: NextPage = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const userLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (userLoggedIn) {
      Router.push(Routes.Welcome);
      return;
    }
  }, [userLoggedIn]);

  return (
    <PageContainer onTransitionEnd={() => setFadeIn(true)}>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Hello world!" />
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {fadeIn && <Header />}

      {fadeIn && (
        <PageMain>
          <Title data-qa="title">Login:</Title>
          <LoginMask />
        </PageMain>
      )}

      <footer></footer>
    </PageContainer>
  );
};

export default Home;
