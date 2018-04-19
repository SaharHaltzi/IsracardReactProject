import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import GitHubSearchRepo from "./components/GitHub/GitHubSearchRepo";
import Bookmarks from "./components/Bookmarks/Bookmarks";

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={GitHubSearchRepo}/>
        <Route exact path="/gitHubSearchRepo" component={GitHubSearchRepo}/>
        <Route exact path="/bookmarks" component={Bookmarks}/>
      </Switch>
    );
  }
}
