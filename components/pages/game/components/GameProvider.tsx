import { useEffect } from 'react';
import { useGameImages } from 'lib/apollo/hooks/state/useGameImages';
import useStartGame from 'lib/apollo/hooks/actions/useStartGame';

const GameProvider = ({
  children,
}: {
  children: ({
    imagesState,
    startGameState,
  }: {
    imagesState: ReturnType<typeof useGameImages>;
    startGameState: ReturnType<typeof useStartGame>[1];
  }) => JSX.Element | null;
}) => {
  const imagesState = useGameImages();

  const [startGame, startGameState] = useStartGame();

  useEffect(() => {
    if (imagesState?.images) startGame();
  }, [imagesState?.images]);

  return children({ imagesState, startGameState });
};

export default GameProvider;
