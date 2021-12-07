import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import renderWithApolloClient from '__tests__/helpers/renderWithApolloClient';
import renderWithTheme from '__tests__/helpers/renderWithTheme';

import useStartGame from 'lib/apollo/hooks/actions/useStartGame';
import useSendAnswerAndGetNextQuestion from 'lib/apollo/hooks/actions/useSendAnswerAndGetNextQuestion';
import useEndGame from 'lib/apollo/hooks/actions/useEndGame';
import useTimer from './useTimer';

import GamePage from '.';

jest.mock('lib/apollo/hooks/actions/useStartGame');
jest.mock('lib/apollo/hooks/actions/useSendAnswerAndGetNextQuestion');
jest.mock('./useTimer');
jest.mock('lib/apollo/hooks/actions/useEndGame');
jest.mock('next/image');
jest.mock('next/image', () => 'img');

describe('Game page', () => {
  describe('should render correctly if useStartGame returned data', () => {
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

    const sendAnswerAndGetNextQuestion = jest.fn();
    useSendAnswerAndGetNextQuestion.mockImplementation(() => [sendAnswerAndGetNextQuestion, {}]);

    const currentSecond = 45;
    useTimer.mockImplementation(() => currentSecond);

    const endGameState = {
      error: undefined,
      loading: null,
      endGame: {
        score: 1,
      },
    };
    const endGame = jest.fn();
    useEndGame.mockImplementation(() => [endGame, endGameState]);

    test('should show answer options', () => {
      // Act
      render(renderWithTheme(renderWithApolloClient(<GamePage />)));
      const answerOption = screen.getByText('option1');

      // Assert
      expect(useStartGame).toHaveBeenCalled();
      expect(answerOption).toBeInTheDocument();
    });

    test('should start game timer', () => {
      // Act
      render(renderWithTheme(renderWithApolloClient(<GamePage />)));

      // Assert
      expect(useTimer).toHaveBeenCalledTimes(1);
      expect(screen.getByText(currentSecond)).toBeInTheDocument();
    });

    test('should end game after clicking on end game icon in header', () => {
      // Act
      render(renderWithTheme(renderWithApolloClient(<GamePage />)));
      fireEvent.click(screen.getByTestId('exit-game-icon'));

      // Assert
      expect(endGame).toHaveBeenCalledTimes(1);
      // more detail of the useTimer is tested in useTimer.test.js
    });

    test('should call sendAnswerAndGetNextQuestion after answer', () => {
      // Act
      render(renderWithTheme(renderWithApolloClient(<GamePage />)));
      fireEvent.click(screen.getByText('option1'));

      // Assert
      expect(sendAnswerAndGetNextQuestion).toHaveBeenCalledTimes(1);
    });
  });
  test('should show loader if is loading', () => {
    // Arrange
    const startGame = jest.fn();
    const startGameState = {
      error: undefined,
      loading: true,
      data: null,
    };
    useStartGame.mockImplementation(() => [startGame, startGameState]);

    // Act
    render(renderWithTheme(renderWithApolloClient(<GamePage />)));

    const loader = screen.getByTestId('profile-updating-loader');

    // Assert
    expect(useStartGame).toHaveBeenCalled();
    expect(loader).toBeInTheDocument();
    expect(screen.queryByText('option1')).not.toBeInTheDocument();
  });

  test('should show nothing if is error', () => {
    // Arrange
    const startGame = jest.fn();
    const startGameState = {
      error: new Error(),
      loading: null,
      data: undefined,
    };
    useStartGame.mockImplementation(() => [startGame, startGameState]);

    // Act
    render(renderWithTheme(renderWithApolloClient(<GamePage />)));

    // Assert
    expect(useStartGame).toHaveBeenCalled();
    expect(screen.queryByText('option1')).not.toBeInTheDocument();
  });

  test('should show "No questions" if questions is not exists', () => {
    // Arrange
    const startGame = jest.fn();
    const startGameState = {
      error: null,
      loading: false,
      data: {
        startGame: {
          question: null,
          gameId: '1',
          pendingQuestion: undefined,
        },
      },
    };
    useStartGame.mockImplementation(() => [startGame, startGameState]);

    // Act
    render(renderWithTheme(renderWithApolloClient(<GamePage />)));

    // Assert
    expect(useStartGame).toHaveBeenCalled();
    expect(screen.getByText('No questions')).toBeInTheDocument();
  });
});
