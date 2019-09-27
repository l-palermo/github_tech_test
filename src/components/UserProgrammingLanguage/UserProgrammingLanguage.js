import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FavouriteLanguage from '../FavouriteLanguage/FavouriteLanguage';

class UserProgrammingLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
    this.onHandleSubmitName = this.onHandleSubmitName.bind(this);
  }

  onHandleSubmitName(event) {
    let name = event.target[0].value;
    this.setState({ userName: name })
  }

  render() {
    return(
      <div>
      <div>
        <SearchBar
        onHandleSubmitName={this.onHandleSubmitName}
        />
      </div>
      <div>
        <FavouriteLanguage />
      </div>
      </div>
    )
  }
};

export default UserProgrammingLanguage;
