import React from 'react';

import { useGetPopularityRating } from 'lib/apollo/hooks/state/useGetPopularityRating';
import { TextBold, WrapperPopularityRating, TeamDirectoryImg } from './styled';

const PopularityRating = () => {
  const { popularityRating, loading } = useGetPopularityRating();
  if (loading) {
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
        <TextBold>Статистика вашей фотографии </TextBold>
        <div>{`За последнюю неделю вас узнали ${popularityRating.correctAnswersCount} из ${popularityRating.answersCount}  коллег.`}</div>
      </div>
    </WrapperPopularityRating>
  );
};

export default PopularityRating;
