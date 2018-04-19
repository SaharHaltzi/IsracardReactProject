import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getRepositoryDataFromGitHub, setAsBookmark} from '../../actions/gitHubActions';
import './GitHubSearchRepo.css';

class GitHubSearchRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  renderGitHubRepos = () => {
    console.log(this.props);
    if (!this.props.repositories.length) {
      return null;
    }
    return (
      this.props.repositories.map((item, i) => {
        return (
          <div className="card" key={i}>
            <div className="w-25 p-3">
              <img className="card-img-top" src={item.author.avatarUrl} alt="Card image cap"/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.author.username}</p>
              <button onClick={() => this.props.onBookmarkAdded(item)}
                      className="btn btn-primary">
                add to Bookmarks
              </button>
            </div>
          </div>
        )
      })
    )
  };

  render() {
    return (
      <div className="p-2">
        <label>Search for GitHub Repo</label>
        <div className="input-group">
          <input onChange={e => this.setState({inputValue: e.target.value})}
                 type="email"
                 className="form-control"
                 placeholder="Type Repo"/>
          <div className="input-group-append">
            <button onClick={() => this.props.onSearch(this.state.inputValue)}
                    className="btn btn-outline-secondary"
                    type="button">
              Search
            </button>
          </div>
        </div>
        {this.renderGitHubRepos()}
      </div>
    );
  }
}

const mapStateToProps = ({github}) => ({
  repositories: github.repositories
});
const mapDispatchToProps = {
  onSearch: getRepositoryDataFromGitHub,
  onBookmarkAdded: setAsBookmark
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitHubSearchRepo);