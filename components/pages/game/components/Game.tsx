// import React, { useEffect, useState } from 'react';

import ImageType from 'domain/Image';

// import GameStep from './GameStep';

interface StartGameQuestion {
  answerOptions: string;
  avatarUrl: string;
}

const Game = ({ images, initialQuestion }: { images: ImageType[]; initialQuestion: StartGameQuestion }) => {
  // const [step, setStep] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  // const [answer, setAnswer] = useState('');
  // useEffect(() => {
  //   {mutate, mutationState} = useAddAnswerGetQuestion();
  //   await mutate(answer)
  // }, [answer]);
  // const handleAddAnswer = () => {
  //   setAnswer(answer)
  // };
  // return currentQuestion ? <GameStep question={currentQuestion} addAnswer={handleAddAnswer} /> : <>Нет вопросов</>;
  return null;
};

export default Game;
