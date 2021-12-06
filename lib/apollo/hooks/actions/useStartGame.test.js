import { renderHook, act } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import StartGame from 'graphql/mutations/startGame.graphql';

import { useNotifier } from 'contexts/NotifierContext';

import useStartGame from './useStartGame';

jest.mock('contexts/NotifierContext');

describe('useStartGame', () => {
  useNotifier.mockImplementation(jest.fn(() => ({ setError: jest.fn(), setSuccess: jest.fn() })));

  test('should mutate state & call localStorage.setItem', async () => {
    // Arrange
    const data = { gameId: 'test', pendingQuestion: { avatarUrl: 'test.jpg' } };

    const mocks = [
      {
        request: {
          query: StartGame,
        },
        result: {
          data: { startGame: data },
        },
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useStartGame(), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });
    act(() => {
      result.current[0]();
    });
    await waitForNextUpdate();

    // Assert
    expect(result.current[1].data.startGame).toEqual(data);
  });
});
