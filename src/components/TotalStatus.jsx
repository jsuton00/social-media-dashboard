import React from 'react';
import TotalResultCards from './TotalResultCards';

const TotalStatusRow = (props) => {
  const { totalResults } = props;

  console.log(totalResults);

  return (
    <div id="total-results-row" className="total-results row">
      {totalResults.length > 0 &&
        totalResults.map((result, index) => {
          return (
            <TotalResultCards
              key={index}
              facebook={result.facebook}
              twitter={result.twitter}
              instagram={result.instagram}
              youtube={result.youtube}
            />
          );
        })}
    </div>
  );
};

export default TotalStatusRow;
