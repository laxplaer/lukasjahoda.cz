import * as React from 'react';

import ChatBot from 'react-simple-chatbot';
import chatData from './ChatData';

import { ThemeProvider } from 'styled-components';

// all available props
const theme = {
  background: '#f5f8fb',
  botBubbleColor: '#000',
  botFontColor: '#fff',
  fontFamily: 'Roboto Condensed',
  headerBgColor: '#000',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


class SimpleForm extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          floating={true}
          recognitionEnable={true}
          steps={chatData}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;