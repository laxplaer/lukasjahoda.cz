import * as React from 'react';

class Review extends React.Component<any, any> {
    constructor(props:any) {
      super(props);
  
      this.state = {
          age: '',
          company: '',
          gender: '',
          name: '',
      };
    }
    
    public componentWillMount() {
      const { steps } = this.props;
      const { company, name, gender, age } = steps;
  
      this.setState({ company, name, gender, age });
    }
  
    public render() {
      const { company, name, gender, age } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <span>This is all I do know about you so far.</span>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{gender.value}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{age.value}</td>
              </tr>
              <tr>
                <td>Company:</td>
                <td>{company.value}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <span>Do not worry I will not share this information anywhere. ;)</span>
        </div>
      );
    }
  }

  export default Review;