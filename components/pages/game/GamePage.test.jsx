import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import renderWithApolloClient from '__tests__/helpers/renderWithApolloClient';
import renderWithTheme from '__tests__/helpers/renderWithTheme';

import useStartGame from '../../../lib/apollo/hooks/actions/useStartGame';

import GamePage from '.';

jest.mock('lib/apollo/hooks/actions/useStartGame');
jest.mock('next/image');
jest.mock('next/image', () => 'img');

describe('Game page', () => {
  test('should show answer options if useStartGame returned data', () => {
    // Arrange
    const startGame = jest.fn();
    const startGameState = {
      error: undefined,
      loading: null,
      data: {
        startGame: {
          question: {
            avatarUrl: 'testUrl',
            answerOptions: ['option1', 'option2', 'option3', 'option4'],
          },
          gameId: '1',
          pendingQuestion: {
            avatarUrl: 'testPendingUrl',
          },
        },
      },
    };
    useStartGame.mockImplementation(() => [startGame, startGameState]);

    // Act
    render(renderWithTheme(renderWithApolloClient(<GamePage />)));

    const answerOption = screen.getByText('option1');

    // Assert
    expect(useStartGame).toHaveBeenCalled();
    expect(answerOption).toBeInTheDocument();
  });
  test('should show loader if is loading', () => {
    // Arrange
    const startGame = jest.fn();
    const startGameState = {
      error: undefined,
      loading: true,
      data: {},
    };
    useStartGame.mockImplementation(() => [startGame, startGameState]);

    // Act
    render(renderWithTheme(renderWithApolloClient(<GamePage />)));

    const loader = screen.getByTestId('profile-updating-loader');

    // Assert
    expect(useStartGame).toHaveBeenCalled();
    expect(loader).toBeInTheDocument();
  });
});
