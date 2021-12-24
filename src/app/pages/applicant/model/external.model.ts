export interface IExternal{
  page:number|undefined;
  sort:ISort[];
}

export interface ISort{
  sortBy:string|undefined;
  orderBy:string|undefined;
}
