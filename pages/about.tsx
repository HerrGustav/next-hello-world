import { NextPage } from "next";
import { Header } from "../common/Header";
import { Main } from "../components/Main";
import { PageContainer } from "../components/PageContainer";
import { Title } from "../components/Title";

/**
 * Build another page here....
 */
const About: NextPage = () => {
  return (
    <PageContainer>
      <Header></Header>

      <Main>
        <Title data-qa="title">About</Title>
      </Main>

      <footer></footer>
    </PageContainer>
  );
};

export default About;
