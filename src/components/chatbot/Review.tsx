import * as React from 'react';

class Review extends React.Component<any, any> {
    constructor(props:any) {
      super(props);
  
      this.state = {
          age: '',
          gender: '',
          name: '',
      };
    }
    
    public componentWillMount() {
      const { steps } = this.props;
      const { name, gender, age } = steps;
  
      this.setState({ name, gender, age });
    }
  
    public render() {
      const { name, gender, age } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{gender.value}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{age.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default Review;