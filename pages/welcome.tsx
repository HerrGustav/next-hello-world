import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";
import { Header } from "../common/Header/Header";
import { VideoPlayer } from "../common/VideoPlayer/VideoPlayer";
import { PageContainer, PageMain, Title } from "../components";
import { Routes } from "../config";
import { useIsLoggedIn, useUserName } from "../contexts/LoginContext";

const Welcome: NextPage = () => {
  const userName = useUserName();
  const userLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (!userLoggedIn) {
      Router.push(Routes.Home);
      return;
    }
  }, [userLoggedIn]);

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
        <Title data-qa="title">Welcome back {userName}!</Title>
        <VideoPlayer id="welcome-player" src="/oceans_test_video.mp4" />
      </PageMain>

      <footer></footer>
    </PageContainer>
  );
};

export default Welcome;
