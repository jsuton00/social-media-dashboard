import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const FaceBookOverview = (props) => {
  const { facebook } = props;
  return (
    <>
      <div
        id="facebook-overview-page-views"
        className="overview-results-box facebook-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Page Views</h5>
            <span className="overview-results-icons facebook">
              <FontAwesomeIcon icon={facebook.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(facebook.pageViews) > 9999
                ? `${(Math.abs(facebook.pageViews) / 1000).toFixed(0)}k`
                : Math.abs(facebook.pageViews)}
            </p>
            <span
              className={`overview-results-indicators ${
                facebook.newPageViews > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {facebook.newPageViews > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {facebook.newPageViews > 0
                ? `${facebook.newPageViews}%`
                : `${-facebook.newPageViews}%`}
            </span>
          </div>
        </div>
      </div>
      <div
        id="facebook-overview-likes"
        className="overview-results-box facebook-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Likes</h5>
            <span className="overview-results-icons facebook">
              <FontAwesomeIcon icon={facebook.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(facebook.likes) > 9999
                ? `${(Math.abs(facebook.likes) / 1000).toFixed(0)}k`
                : Math.abs(facebook.likes)}
            </p>
            <span
              className={`overview-results-indicators ${
                facebook.newLikes > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {facebook.newLikes > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {facebook.newLikes > 0
                ? `${facebook.newLikes}%`
                : `${-facebook.newLikes}%`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const InstagramOverview = (props) => {
  const { instagram } = props;
  return (
    <>
      <div
        id="instagram-overview-likes"
        className="overview-results-box instagram-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Likes</h5>
            <span className="overview-results-icons instagram">
              <FontAwesomeIcon icon={instagram.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(instagram.likes) > 9999
                ? `${(Math.abs(instagram.likes) / 1000).toFixed(0)}k`
                : Math.abs(instagram.likes)}
            </p>
            <span
              className={`overview-results-indicators ${
                instagram.newLikes > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {instagram.newLikes > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {instagram.newLikes > 0
                ? `${instagram.newLikes}%`
                : `${-instagram.newLikes}%`}
            </span>
          </div>
        </div>
      </div>
      <div
        id="instagram-overview-profile-views"
        className="overview-results-box instagram-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Profile Views</h5>
            <span className="overview-results-icons instagram">
              <FontAwesomeIcon icon={instagram.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(instagram.profileViews) > 9999
                ? `${(Math.abs(instagram.profileViews) / 1000).toFixed(0)}k`
                : Math.abs(instagram.profileViews)}
            </p>
            <span
              className={`overview-results-indicators ${
                instagram.newProfileViews > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {instagram.newProfileViews > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {instagram.newProfileViews > 0
                ? `${instagram.newProfileViews}%`
                : `${-instagram.newProfileViews}%`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const TwitterOverview = (props) => {
  const { twitter } = props;
  return (
    <>
      <div
        id="twitter-overview-retweets"
        className="overview-results-box twitter-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Retweets</h5>
            <span className="overview-results-icons twitter">
              <FontAwesomeIcon icon={twitter.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(twitter.retweets) > 9999
                ? `${(Math.abs(twitter.retweets) / 1000).toFixed(0)}k`
                : Math.abs(twitter.retweets)}
            </p>
            <span
              className={`overview-results-indicators ${
                twitter.newRetweets > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {twitter.newRetweets > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {twitter.newRetweets > 0
                ? `${twitter.newRetweets}%`
                : `${-twitter.newRetweets}%`}
            </span>
          </div>
        </div>
      </div>
      <div
        id="twitter-overview-likes"
        className="overview-results-box twitter-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Likes</h5>
            <span className="overview-results-icons twitter">
              <FontAwesomeIcon icon={twitter.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(twitter.likes) > 9999
                ? `${(Math.abs(twitter.likes) / 1000).toFixed(0)}k`
                : Math.abs(twitter.likes)}
            </p>
            <span
              className={`overview-results-indicators ${
                twitter.newLikes > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {twitter.newLikes > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {twitter.newLikes > 0
                ? `${twitter.newLikes}%`
                : `${-twitter.newLikes}%`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const YoutubeOverview = (props) => {
  const { youtube } = props;
  return (
    <>
      <div
        id="youtube-overview-likes"
        className="overview-results-box youtube-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Likes</h5>
            <span className="overview-results-icons youtube">
              <FontAwesomeIcon icon={youtube.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(youtube.likes) > 9999
                ? `${(Math.abs(youtube.likes) / 1000).toFixed(0)}k`
                : Math.abs(youtube.likes)}
            </p>
            <span
              className={`overview-results-indicators ${
                youtube.newLikes > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {youtube.newLikes > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {youtube.newLikes > 0
                ? `${youtube.newLikes}%`
                : `${-youtube.newLikes}%`}
            </span>
          </div>
        </div>
      </div>
      <div
        id="youtube-overview-views"
        className="overview-results-box youtube-box"
      >
        <div className="overview-results-body">
          <div className="overview-results-overall row">
            <h5>Total Views</h5>
            <span className="overview-results-icons youtube">
              <FontAwesomeIcon icon={youtube.logo} />
            </span>
          </div>
          <div className="overview-results-overall row">
            <p>
              {Math.abs(youtube.totalViews) > 9999
                ? `${(Math.abs(youtube.totalViews) / 1000).toFixed(0)}k`
                : Math.abs(youtube.totalViews)}
            </p>
            <span
              className={`overview-results-indicators ${
                youtube.views > 0 ? 'positive' : 'negative'
              }`}
            >
              <span>
                {youtube.views > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </span>
              {youtube.views > 0 ? `${youtube.views}%` : `${-youtube.views}%`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
