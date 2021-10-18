import IQuestion from 'interfaces/questionType';

export default interface IGameProcess {
  correctAnswersCount: number;
  answers: IQuestion[];
}
