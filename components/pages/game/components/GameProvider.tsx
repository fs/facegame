import { useEffect } from 'react';
import useStartGame from 'lib/apollo/hooks/actions/useStartGame';

const GameProvider = ({
  children,
}: {
  children: ({ startGameState }: { startGameState: ReturnType<typeof useStartGame>[1] }) => JSX.Element | null;
}) => {
  const [startGame, startGameState] = useStartGame();

  useEffect(() => {
    startGame();
  }, [startGame]);

  return children({ startGameState });
};

export default GameProvider;
