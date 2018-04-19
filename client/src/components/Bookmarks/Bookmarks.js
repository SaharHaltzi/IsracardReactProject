import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../GitHub/GitHubSearchRepo.css'
import {getBookmarksUser} from '../../actions/BookmarksActions';


class Bookmarks extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue : ''
    };
  }

  componentDidMount() {
    this.props.onInit();
  }

  renderBookmarkRepos = ()=> {
    if (this.props.bookmarks.length === 0) {
      return null;
    }

    return this.props.bookmarks.map(item => {
      return (
        <div className="card">
          <div className="w-25 p-3">
            <img className="card-img-top" src={item.author.avatarUrl} alt="Card image cap"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.author.username}</p>
          </div>
        </div>
      )
    });
  };

  render() {
    return (
      <div className={"p-2"}>
        <label>Your Bookmarks</label>
          <div className="input-group-append">
            {this.renderBookmarkRepos()}
          </div>
      </div>
    );
  }
}

const mapStateToProps =({bookmarks}) => ({bookmarks: bookmarks.bookmarks});
const mapDispatchToProps = {onInit: getBookmarksUser};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks); //map reducer state to component props
