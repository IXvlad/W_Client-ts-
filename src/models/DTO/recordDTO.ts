import { IAuthor } from '../author';

export interface IRecordDTO {
  Id: number;
  YDK: string;
  Title: string;
  Description: string;
  Number?: number;
  Authors: IAuthor[];
  RecommendedBookTitle: string;
  RecommendedBook_Id: number;
  Source_Id: number;
}
