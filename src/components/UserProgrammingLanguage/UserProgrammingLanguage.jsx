import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import FavouriteLanguage from '../FavouriteLanguage/FavouriteLanguage';
import selectLanguage from '../../modules/selectLanguage/selectLanguage';

class UserProgrammingLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onHandleFetchRepos = this.onHandleFetchRepos.bind(this);
  }

  async onHandleFetchRepos(userName) {
    if (userName === '') { return; }
    // eslint-disable-next-line react/destructuring-assignment
    const repos = await this.props.fetchUserRepos(userName);
    this.setState({ repos });
  }

  render() {
    const { state } = this;
    return (
      <div>
        <div>
          <SearchBar
            onHandleFetchRepos={this.onHandleFetchRepos}
          />
        </div>
        <div>
          {state.repos !== undefined
          && (
          <FavouriteLanguage
            repos={state.repos}
            selectLanguage={selectLanguage}
          />
          )}
        </div>
      </div>
    );
  }
}

UserProgrammingLanguage.propTypes = {
  fetchUserRepos: PropTypes.func.isRequired,
};

export default UserProgrammingLanguage;
