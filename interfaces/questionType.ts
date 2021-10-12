import { Colors } from 'public/styles/theme';

export default interface IQuestion {
  id: number;
  name: string;
  fullName: string;
  wrongAnswers: string[];
  answerStatusColor: Colors;
  options: string[];
}
