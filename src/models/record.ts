import { IAuthor } from './author';

export interface IRecord {
  Id: number;
  Ydk: string;
  Title: string;
  Date: string;
  Description: string;
  Number?: number;
  Authors: IAuthor[];
  K1: string;
  K2: string;
  K3: string;
  RecommendedBookTitle: string;
  RecommendedBook_Id: number;
  Source_Id: number;
}
