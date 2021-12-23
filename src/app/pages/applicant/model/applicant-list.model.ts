import { IApplicant } from ".";

export interface IApplicantList {
  itemsReceived: number;
  curPage: number;
  nextPage: number;
  prevPage: number;
  itemsTotal: number;
  pageTotal: number;
  items: IApplicant[];
}


