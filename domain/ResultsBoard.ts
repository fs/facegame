interface IUserResult {
  rate: number;
  fullName: string;
  score: number;
  avatarUrl: string;
}
interface ICurrentUserResult extends IUserResult {
  questionsCount: number;
  correctAnswersCount: number;
}
export default interface IResultsBoard {
  topResults: IUserResult[];
  currentUserResult: ICurrentUserResult;
}
