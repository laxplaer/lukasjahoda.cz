import * as React from 'react';

import SimpleForm from '../chatbot/SimpleForm';

import 'sanitize.css/sanitize.css';
import '../../styles/inject-global';

import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  max-width: 50%;
`;

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <Title>Under construction</Title>
        <SimpleForm />
      </AppWrapper>
    );
  }
}

export default App;
