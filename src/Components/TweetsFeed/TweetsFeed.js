import React, {Component} from 'react';
import Tweet from '../Tweet/Tweet';
import './tweets-feed.css';

class TweetsFeed extends Component {
  render() {
    const userAvatar = this.props.userAvatar;
    return(
      <div className="tweets-feed">
        <div className="tweets-feed__input-wrapper">
          <img src={ userAvatar } alt="" className="tweets-feed__avatar"/>
          <input type="text" className="tweets-feed__input" placeholder="Что нового?"/>
        </div>
        <Tweet/>
      </div>
    )
  }
}

export default TweetsFeed;