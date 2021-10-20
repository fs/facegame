import { renderHook } from '@testing-library/react-hooks';

import { ReactiveVar, makeVar } from '@apollo/client';
import { useRouter } from 'next/router';
import IGameProcess from 'interfaces/gameProcess';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';
import useGameProcess from './useGameProcess';

jest.mock('next/router');

const fixtureQuestion = {
  id: 44,
  name: 'Who is',
  fullName: 'Konstantin Konstantin',
  wrongAnswers: ['string[]', 'string[]', 'string[]'],
  options: ['string[]', 'string[]', 'string[]'],
  answer: 'string',
  avatarUrl: 'string',
};

/**
 * Set initial values when we create cache variables.
 */

const gameProcessInitialValue: IGameProcess = {
  correctAnswersCount: 0,
  answers: [],
};

let gameProcess: ReactiveVar<IGameProcess> = makeVar<IGameProcess>(gameProcessInitialValue);

beforeEach(async () => {
  gameProcess = makeVar<IGameProcess>(gameProcessInitialValue);
});

describe('useGameProcess', () => {
  test('increaseCorrectAnswersCount', async () => {
    const {
      result: {
        current: { increaseCorrectAnswersCount },
      },
    } = renderHook(() => useGameProcess(gameProcess), {
      wrapper: MockedProvider,
    });

    increaseCorrectAnswersCount();
    increaseCorrectAnswersCount();
    increaseCorrectAnswersCount();
    expect(gameProcess()).toMatchObject({
      correctAnswersCount: 3,
    });
  });

  test('increaseCorrectAnswersCount and reset', async () => {
    const {
      result: {
        current: { increaseCorrectAnswersCount, resetCorrectAnswersCount },
      },
    } = renderHook(() => useGameProcess(gameProcess), {
      wrapper: MockedProvider,
    });
    increaseCorrectAnswersCount();
    increaseCorrectAnswersCount();
    increaseCorrectAnswersCount();
    resetCorrectAnswersCount();
    expect(gameProcess()).toMatchObject({
      correctAnswersCount: 0,
    });
  });

  test('add  3 Answer', async () => {
    const {
      result: {
        current: { addAnswer },
      },
    } = renderHook(() => useGameProcess(gameProcess), {
      wrapper: MockedProvider,
    });
    addAnswer(fixtureQuestion);
    addAnswer(fixtureQuestion);
    addAnswer(fixtureQuestion);

    expect(gameProcess().answers).toHaveLength(3);
    expect(gameProcess()).toMatchObject({
      answers: [fixtureQuestion, fixtureQuestion, fixtureQuestion],
    });
  });

  test('add  3 Answer and reset', async () => {
    const {
      result: {
        current: { addAnswer, resetAnswers },
      },
    } = renderHook(() => useGameProcess(gameProcess), {
      wrapper: MockedProvider,
    });
    addAnswer(fixtureQuestion);
    addAnswer(fixtureQuestion);
    addAnswer(fixtureQuestion);
    resetAnswers();
    expect(gameProcess()).toMatchObject({
      answers: [],
    });
  });

  // TODO: do test with check redirect
  test.skip('should reset game', () => {
    const mockPush = jest.fn();
    const mockUseRouter = jest.fn(() => ({ push: mockPush }));
    useRouter.mockImplementation(mockUseRouter);

    const {
      result: {
        current: { endGame, addAnswer, increaseCorrectAnswersCount },
      },
    } = renderHook(() => useGameProcess(gameProcess), {
      wrapper: MockedProvider,
    });

    addAnswer(fixtureQuestion);
    increaseCorrectAnswersCount();

    act(() => endGame());

    expect(gameProcess()).toMatchObject({
      correctAnswersCount: 0,
      answers: [],
    });
  });
});
