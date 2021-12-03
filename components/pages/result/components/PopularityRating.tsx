import React from 'react';

import { useGetPopularityRating } from 'lib/apollo/hooks/state/useGetPopularityRating';
import { TextBold, WrapperPopularityRating, TeamDirectoryImg } from './styled';

const PopularityRating = () => {
  const { popularityRating, loading } = useGetPopularityRating();
  if (loading || !popularityRating) {
    return <></>;
  }
  return (
    <WrapperPopularityRating>
      <TeamDirectoryImg
        src={`${popularityRating.avatarUrl || `${process.env.ASSET_HOST}/images/default-person.png`}`}
        alt="TeamDirectoryIMG"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src = `${process.env.ASSET_HOST}/images/default-person.png`;
        }}
      />
      <div>
        <TextBold>Statistics of your photo</TextBold>
        {!popularityRating.statistic ? (
          <div>No one recognized you in the last week.</div>
        ) : (
          <div>{`You have been recognized ${popularityRating.statistic} in the last week.`}</div>
        )}
      </div>
    </WrapperPopularityRating>
  );
};

export default PopularityRating;
