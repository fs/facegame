export default interface IQuestion {
  id: number;
  name: string;
  fullName: string;
  wrongAnswers: string[];
  options: string[];
  answer?: string;
}
