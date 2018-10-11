import * as React from 'react';

import { Loading } from 'react-simple-chatbot';

class WikiSearch extends React.Component<any, any> {
    constructor(props:any) {
      super(props);
  
      this.state = {
        loading: true,
        result: '',
      };
  
    }
  
    public componentWillMount() {
      const self = this;
      const { steps, triggerNextStep } = this.props;

      let search = steps.searchCustom ? steps.searchCustom.value : steps.company.value;
      if (search.toLowerCase().indexOf('adecco') !== -1) {
          search = 'Adecco Group';
      }

      const query = encodeURI(`select * where {?x rdfs:label "${search}"@en . ?x rdfs:comment ?comment . FILTER (lang(?comment) = 'en') } LIMIT 100`);
      const queryUrl = `https://dbpedia.org/sparql/?query=${query}&format=json`;
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener('readystatechange', readyStateChange);
  
      function readyStateChange(this:any) {
        if (this.readyState === 4) {
          const data = JSON.parse(this.responseText);
          const bindings = data.results.bindings;
          if (bindings && bindings.length > 0) {
            self.setState({ loading: false, result: bindings[0].comment.value });
          } else {
            self.setState({ loading: false, result: `That is strange, but I can not find anything related to: ${search}.`});
          }
          triggerNextStep();
        }
      }
  
      xhr.open('GET', queryUrl);
      xhr.send();
    }
  
    public render() {
      const { loading, result } = this.state;
  
      return (
        <div>
          { loading ? <Loading /> : result }
        </div>
      );
    }
  }

  export default WikiSearch;