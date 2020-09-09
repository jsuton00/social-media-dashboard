import React from 'react';
import {
  FaceBookOverview,
  InstagramOverview,
  TwitterOverview,
  YoutubeOverview,
} from './OverViewCards';

export default function OverViewResults(props) {
  const { facebook, twitter, instagram, youtube } = props;

  return (
    <>
      <FaceBookOverview facebook={facebook} />
      <InstagramOverview instagram={instagram} />
      <TwitterOverview twitter={twitter} />
      <YoutubeOverview youtube={youtube} />
    </>
  );
}
