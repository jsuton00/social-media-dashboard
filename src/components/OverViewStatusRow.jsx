import React from 'react';
import OverViewResults from './OverViewResults';

const OverViewStatusRow = (props) => {
  const { overViewResults } = props;
  console.log(overViewResults);
  return (
    <div
      id="overview-results"
      className="overview-results container-fluid no-gutter"
    >
      <div id="overview-results-title" className="overview-results-title row">
        <h2>Overview - Today</h2>
      </div>
      <div id="overview-results-data" className="overview-results-data">
        {overViewResults.length > 0 &&
          overViewResults.map((result, index) => {
            return (
              <OverViewResults
                key={index}
                facebook={result.facebook}
                twitter={result.twitter}
                instagram={result.instagram}
                youtube={result.youtube}
              />
            );
          })}
      </div>
    </div>
  );
};

export default OverViewStatusRow;
