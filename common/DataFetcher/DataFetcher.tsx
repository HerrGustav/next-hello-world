import React, { useState } from "react";
import { Button, Text } from "../../components";
import { Section, ContentBox } from "./styles";

type BackendResponse = { msg: string } | undefined;

type DataFetcherState = {
  data: BackendResponse | null;
  isLoading: boolean;
  fetchedData: boolean;
};

const initialState: DataFetcherState = {
  data: null,
  isLoading: false,
  fetchedData: false,
};

type ContentProps = { data: BackendResponse | null };
const Content: React.FC<ContentProps> = ({ data }): JSX.Element => {
  const noDataAvailable = "No Data available.";
  return (
    <ContentBox>
      {data && data.msg ? (
        <Text data-qa="fetched-data">{data.msg}</Text>
      ) : (
        <Text data-qa="no-data">{noDataAvailable}</Text>
      )}
    </ContentBox>
  );
};

const DataFetcher: React.FC = (): JSX.Element => {
  const [state, setState] = useState<DataFetcherState>(initialState);

  const fetchData = () => {
    setState({ ...state, isLoading: true, fetchedData: false, data: null });

    fetch("/api/hello-data")
      .then((res) => res.json())
      .then((data) =>
        setState({
          ...state,
          isLoading: false,
          data: data,
          fetchedData: true,
        })
      );
  };

  return (
    <Section>
      <Button data-qa="fetch-data" onClick={fetchData}>
        Fetch Data
      </Button>
      <div>
        {state.isLoading && <Text data-qa="loader">Loading...</Text>}
        {state.fetchedData && <Content data={state.data} />}
      </div>
    </Section>
  );
};

export { DataFetcher };
