import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";
import { Header } from "../common/Header/Header";
import { VideoPlayer } from "../common/VideoPlayer/VideoPlayer";
import { PageContainer, PageMain, Title } from "../components";
import { Routes } from "../config";
import { useIsLoggedIn, useUserName } from "../contexts/LoginContext";

// exampleVideo is holding the url to a example video,
// you can also download a video, put it to the "public" folder
// of this app and simply reference it here accordingly.
// e.g.: "some_test_video.mp4"
const exampleVideo = "https://vjs.zencdn.net/v/oceans.mp4";

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
        <Title data-qa="title">
          Welcome back <b>{userName}</b>!
        </Title>
        <VideoPlayer
          id="welcome-player"
          src={exampleVideo}
          jumpToPos={22}
          autoplay={true}
        />
      </PageMain>

      <footer></footer>
    </PageContainer>
  );
};

export default Welcome;
