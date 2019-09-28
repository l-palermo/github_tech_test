import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FavouriteLanguage from '../FavouriteLanguage/FavouriteLanguage';
import languagesRate from '../../modules/languagesRate/languagesRate';
import selectLanguage from '../../modules/selectLanguage/selectLanguage';

class UserProgrammingLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      repos: [],
    };
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleFetchRepos = this.onHandleFetchRepos.bind(this);
  }

  onHandleChangeName(event) {
    const name = event.target.value;
    this.setState({ userName: name });
  }

  async onHandleFetchRepos() {
    const repos = await this.props.fetchUserRepos(this.state.userName);
    if(repos.length === 0) { return this.setState({ repos: '' }) }
    this.setState({ repos });
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar
            onHandleChangeName={this.onHandleChangeName}
            onHandleFetchRepos={this.onHandleFetchRepos}
          />
        </div>
        <div>
         {this.state.repos === '' &&
          <p>The user has no repos</p>
         }
          {this.state.repos.length > 0
        && (
        <FavouriteLanguage
          repos={this.state.repos}
          languagesRate={languagesRate}
          selectLanguage={selectLanguage}
        />
        )}
        </div>
      </div>
    );
  }
}

export default UserProgrammingLanguage;
