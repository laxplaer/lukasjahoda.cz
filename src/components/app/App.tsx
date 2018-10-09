import * as React from 'react';

import SimpleForm from '../chatbot/SimpleForm';

import 'sanitize.css/sanitize.css';
import '../../styles/inject-global';

class App extends React.Component {
  public render() {
    return (
      <div>
        <SimpleForm />
      </div>
    );
  }
}

export default App;
