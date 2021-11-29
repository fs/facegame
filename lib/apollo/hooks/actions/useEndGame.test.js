import { renderHook, act } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import EndGame from 'graphql/mutations/endGame.graphql';

import { useNotifier } from 'contexts/NotifierContext';

import useEndGame from './useEndGame';

jest.mock('contexts/NotifierContext');

describe('useEndGame', () => {
  useNotifier.mockImplementation(jest.fn(() => ({ setError: jest.fn(), setSuccess: jest.fn() })));

  test('should mutate state', async () => {
    // Arrange
    const responseMock = { score: 1, __typename: 'Result' };
    const gameId = '1';
    const endGameInput = {
      gameId,
    };

    const mocks = [
      {
        request: {
          query: EndGame,
          variables: { input: endGameInput },
        },
        result: {
          data: {
            endGame: responseMock,
          },
        },
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useEndGame(), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });
    act(() => {
      result.current[0](endGameInput);
    });
    await waitForNextUpdate();

    // Assert
    expect(result.current[1].data.endGame).toEqual(responseMock);
  });
});
