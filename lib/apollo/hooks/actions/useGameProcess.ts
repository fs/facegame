import IGameProcess from 'interfaces/gameProcess';
import { ReactiveVar, useMutation } from '@apollo/client';
import IQuestion from 'interfaces/questionType';
import { useRouter } from 'next/router';
import { RESULT } from 'config/routes';
import CreateResult from 'graphql/mutations/сreateResult.graphql';

const useGameProcess = (gameProcessVar: ReactiveVar<IGameProcess>) => {
  const router = useRouter();

  const [mutationCreateResult] = useMutation(CreateResult);

  const increaseCorrectAnswersCount = () => {
    const gameProcess = gameProcessVar();
    const result = {
      ...gameProcess,
      correctAnswersCount: gameProcess.correctAnswersCount + 1,
    };
    gameProcessVar(result);
  };

  const resetCorrectAnswersCount = () => {
    const gameProcess = gameProcessVar();
    const result = { ...gameProcess, correctAnswersCount: 0 };
    gameProcessVar(result);
  };

  const addAnswer = (answer: IQuestion) => {
    const gameProcess = gameProcessVar();
    const result = {
      ...gameProcess,
      answers: [...gameProcess.answers, answer],
    };
    gameProcessVar(result);
  };
  const resetAnswers = () => {
    const gameProcess = gameProcessVar();
    const result = { ...gameProcess, answers: [] };
    gameProcessVar(result);
  };

  const endGame = async () => {
    const gameProcess = gameProcessVar();
    const results = gameProcess.answers.map(({ id, answer }) => ({
      questionId: Number(id),
      value: answer,
    }));
    await mutationCreateResult({ variables: { input: { answers: results } } });

    router.push(RESULT);
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
