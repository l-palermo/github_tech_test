import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

class UserProgrammingLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(event) {
    let name = event.target[0].value;
    this.setState({ userName: name })
  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    )
  }
};

export default UserProgrammingLanguage;
