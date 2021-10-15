import IGameProcess from 'interfaces/gameProcess';
import { ReactiveVar } from '@apollo/client';
import IQuestion from 'interfaces/questionType';
import { useRouter } from 'next/router';
import { RESULT } from 'config/routes';

const useGameProcess = (gameProcessVar: ReactiveVar<IGameProcess>) => {
  const router = useRouter();

  // const [mutation, mutationState] = useMutation(SendResult, {

  // });

  const increaseCorrectAnswersCount = () => {
    const gameProcess = gameProcessVar();
    const result = { ...gameProcess, correctAnswersCount: gameProcess.correctAnswersCount + 1 };
    gameProcessVar(result);
  };

  const resetCorrectAnswersCount = () => {
    const gameProcess = gameProcessVar();
    const result = { ...gameProcess, correctAnswersCount: 0 };
    gameProcessVar(result);
  };

  const addAnswer = (answer: IQuestion) => {
    const gameProcess = gameProcessVar();
    const result = { ...gameProcess, answers: [...gameProcess.answers, answer] };
    gameProcessVar(result);
  };
  const resetAnswers = () => {
    const gameProcess = gameProcessVar();
    const result = { ...gameProcess, answers: [] };
    gameProcessVar(result);
  };

  const endGame = () => {
    const gameProcess = gameProcessVar();
    router.push(RESULT);
    console.log('место вызова мутации', gameProcess.answers);
    resetAnswers();
    resetCorrectAnswersCount();
  };

  return {
    increaseCorrectAnswersCount,
    resetCorrectAnswersCount,
    addAnswer,
    resetAnswers,
    endGame,
  };
};

export default useGameProcess;
