import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import IGameProcess from 'interfaces/gameProcess';
/**
 * Set initial values when we create cache variables.
 */

const gameProcessInitialValue: IGameProcess = {
  correctAnswersCount: 0,
  answers: [],
};

export const gameProcess: ReactiveVar<IGameProcess> = makeVar<IGameProcess>(gameProcessInitialValue);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        gameProcess: {
          read() {
            return gameProcess();
          },
        },
      },
    },
  },
});
