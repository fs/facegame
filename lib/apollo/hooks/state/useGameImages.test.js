import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import Images from 'graphql/queries/images.graphql';

import { useGameImages } from './useGameImages';

describe('useCurrentUser', () => {
  test('should return current user data', async () => {
    // Arrange
    const expectedDataImagesMock = {
      images: ['test', 'test'],
    };

    const mocks = [
      {
        request: {
          query: Images,
        },
        result: {
          data: expectedDataImagesMock,
        },
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useGameImages({}), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.images).toEqual(expectedDataImagesMock);
  });

  test('should return error', async () => {
    // Arrange
    const error = new Error();
    const mocks = [
      {
        request: {
          query: Images,
        },
        error,
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useGameImages({}), {
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
