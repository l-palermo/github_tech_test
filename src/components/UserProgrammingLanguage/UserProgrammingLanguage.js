import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FavouriteLanguage from '../FavouriteLanguage/FavouriteLanguage';

class UserProgrammingLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      repos: ''
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleFetchRepos = this.onHandleFetchRepos.bind(this);
  }

  onHandleChangeName(event) {
    let name = event.target.value;
    this.setState({ userName: name });
  };

  async onHandleFetchRepos() {
    let repos = await this.props.fetchUserRepos(this.state.userName);
    this.setState({ repos: repos });
  };

  render() {
    return(
      <div>
      <div>
        <SearchBar
        onHandleChangeName={this.onHandleChangeName}
        onHandleFetchRepos={this.onHandleFetchRepos}
        />
      </div>
      <div>
        <FavouriteLanguage 
        data={this.state.repos}/>
      </div>
      </div>
    )
  }
};

export default UserProgrammingLanguage;
