import * as React from 'react';

class Video extends React.Component<any, any> {
    /*tslint:disable*/
    public render() {
      return (
        <iframe 
          width="320" 
          height="240" 
          src="https://www.youtube.com/embed/8GVNU9oNogE" 
          allow="autoplay; encrypted-media" 
          frameBorder="0"
          allowFullScreen
        ></iframe>
      );
    }
    /*tslint:enable*/
  }

  export default Video;