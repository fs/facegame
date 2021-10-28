import React from 'react';
import Link from 'next/link';

import IResultsBoard from 'interfaces/resultsBoard';
import { GAME } from 'config/routes';
import ButtonedLink from 'components/shared/atoms/ButtonedLink';

import Avatar from 'components/shared/atoms/Avatar';
import { useCurrentUser } from 'lib/apollo/hooks/state/currentUser';
import { TextBold, WrapperPopularityRating, TeamDirectoryImg } from './styled';

const PopularityRating = () => {
  const { user } = useCurrentUser(false);
  return (
    <WrapperPopularityRating>
      <TeamDirectoryImg src={`${process.env.ASSET_HOST}/images/default-person.png`} alt="ava" />
      <div>
        <TextBold>Статистика вашей фотографии </TextBold>
        <div>За последнюю неделю вас узнали 3 из 7 коллег.</div>
      </div>
    </WrapperPopularityRating>
  );
};

export default PopularityRating;
