import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import ResultsBoard from 'graphql/queries/resultsBoard.graphql';
import { useGetResultsBoard } from './useGetResultsBoard';

describe('useGetResultsBoard', () => {
  test('should return result board data', async () => {
    // Arrange
    const topResultsMock = [
      {
        rate: 1,
        fullName: 'Name',
        score: 1,
        avatarUrl: 'test',
      },
    ];
    const currentUserResultMock = {
      avatarUrl: 'test',
      correctAnswersCount: 1,
      fullName: 'Name',
      questionsCount: 1,
      rate: 1,
      score: 1,
    };

    const expectedDataMock = {
      topResults: topResultsMock,
      currentUserResult: currentUserResultMock,
    };

    const mocks = [
      {
        request: {
          query: ResultsBoard,
        },
        result: {
          data: { resultsBoard: expectedDataMock },
        },
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useGetResultsBoard(), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.topResults).toEqual(topResultsMock);
    expect(result.current.currentUserResult).toEqual(currentUserResultMock);
  });
  test('should return error', async () => {
    // Arrange
    const error = new Error();
    const mocks = [
      {
        request: {
          query: ResultsBoard,
        },
        error,
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useGetResultsBoard(), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.error).toBeDefined();
  });
});
