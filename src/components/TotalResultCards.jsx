import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function TotalResultCards(props) {
  const { facebook, twitter, instagram, youtube } = props;

  return (
    <>
      <div id="facebook-total-card" className="facebook-card card">
        <div className="facebook-card-header card-header">
          <p className="facebook-card-text card-text">
            <span className="social-media facebook">
              <FontAwesomeIcon icon={facebook.logo} />
            </span>
            {facebook.user}
          </p>
        </div>
        <div className="card-body">
          <h3 className="facebook-card-total card-title">
            {Math.abs(facebook.totalFollowers) > 9999
              ? `${(Math.abs(facebook.totalFollowers) / 1000).toFixed(0)}k`
              : Math.abs(facebook.totalFollowers)}
          </h3>
          <p className="facebook-card-text card-text">Followers</p>
        </div>
        <div className="facebook-card-footer card-footer">
          <p
            className={`facebook-card-text card-text ${
              facebook.newFollowers > 0 ? 'positive' : 'negative'
            }`}
          >
            <span>
              {facebook.newFollowers > 0 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </span>
            {`${
              facebook.newFollowers > 0
                ? facebook.newFollowers
                : -facebook.newFollowers
            } Today`}
          </p>
        </div>
      </div>
      <div id="twitter-total-card" className="twitter-card card">
        <div className="twitter-card-header card-header">
          <p className="twitter-card-text card-text">
            <span className="social-media twitter">
              <FontAwesomeIcon icon={twitter.logo} />
            </span>
            {twitter.user}
          </p>
        </div>
        <div className="card-body">
          <h3 className="twitter-card-total card-title">
            {Math.abs(twitter.totalFollowers) > 9999
              ? `${(Math.abs(twitter.totalFollowers) / 1000).toFixed(0)}k`
              : Math.abs(twitter.totalFollowers)}
          </h3>
          <p className="twitter-card-text card-text">Followers</p>
        </div>
        <div className="twitter-card-footer card-footer">
          <p
            className={`twitter-card-text card-text ${
              twitter.newFollowers > 0 ? 'positive' : 'negative'
            }`}
          >
            <span>
              {twitter.newFollowers > 0 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </span>
            {`${
              twitter.newFollowers > 0
                ? twitter.newFollowers
                : -twitter.newFollowers
            } Today`}
          </p>
        </div>
      </div>
      <div id="instagram-total-card" className="instagram-card card">
        <div className="instagram-card-header card-header">
          <p className="instagram-card-text card-text">
            <span className="social-media instagram">
              <FontAwesomeIcon icon={instagram.logo} />
            </span>
            {instagram.user}
          </p>
        </div>
        <div className="card-body">
          <h3 className="instagram-card-total card-title">
            {Math.abs(instagram.totalFollowers) > 9999
              ? `${(Math.abs(instagram.totalFollowers) / 1000).toFixed(0)}k`
              : Math.abs(instagram.totalFollowers)}
          </h3>
          <p className="instagram-card-text card-text">Followers</p>
        </div>
        <div className="instagram-card-footer card-footer">
          <p
            className={`instagram-card-text card-text ${
              instagram.newFollowers > 0 ? 'positive' : 'negative'
            }`}
          >
            <span>
              {instagram.newFollowers > 0 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </span>
            {`${
              instagram.newFollowers > 0
                ? instagram.newFollowers
                : -instagram.newFollowers
            } Today`}
          </p>
        </div>
      </div>
      <div id="youtube-total-card" className="youtube-card card">
        <div className="youtube-card-header card-header">
          <p className="youtube-card-text card-text">
            <span className="social-media youtube">
              <FontAwesomeIcon icon={youtube.logo} />
            </span>
            {youtube.user}
          </p>
        </div>
        <div className="card-body">
          <h3 className="youtube-card-total card-title">
            {Math.abs(youtube.totalSubscribers) > 9999
              ? `${(Math.abs(youtube.totalSubscribers) / 1000).toFixed(0)}k`
              : Math.abs(youtube.totalSubscribers)}
          </h3>
          <p className="youtube-card-text card-text">Subscribers</p>
        </div>
        <div className="youtube-card-footer card-footer">
          <p
            className={`youtube-card-text card-text ${
              youtube.newFollowers > 0 ? 'positive' : 'negative'
            }`}
          >
            <span>
              {youtube.newSubscribers > 0 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </span>
            {`${
              youtube.newSubscribers > 0
                ? youtube.newSubscribers
                : -youtube.newSubscribers
            } Today`}
          </p>
        </div>
      </div>
    </>
  );
}
