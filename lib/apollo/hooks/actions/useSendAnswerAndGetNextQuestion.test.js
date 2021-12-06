import { renderHook, act } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import SendAnswerAndGetNextQuestion from 'graphql/mutations/sendAnswerAndGetNextQuestion.graphql';

import { useNotifier } from 'contexts/NotifierContext';

import useSendAnswerAndGetNextQuestion from './useSendAnswerAndGetNextQuestion';

jest.mock('contexts/NotifierContext');

describe('useSendAnswerAndGetNextQuestion', () => {
  useNotifier.mockImplementation(jest.fn(() => ({ setError: jest.fn(), setSuccess: jest.fn() })));

  test('should mutate state', async () => {
    // Arrange
    const data = { gameId: 1, value: 'test' };
    const mockResponse = {
      correctAnswerValue: 1,
      question: {
        answerOptions: {},
        avatarUrl: 'test',
      },
      correctAnswersCount: 1,
      pendingQuestion: {
        avatarUrl: 'test',
      },
    };

    const mocks = [
      {
        request: {
          query: SendAnswerAndGetNextQuestion,
          variables: {
            input: data,
          },
        },
        result: {
          data: { sendAnswerAndGetNextQuestion: mockResponse },
        },
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useSendAnswerAndGetNextQuestion(), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });
    act(() => {
      result.current[0](data);
    });
    await waitForNextUpdate();

    // Assert
    expect(result.current[1].data.sendAnswerAndGetNextQuestion).toEqual(mockResponse);
  });
});
