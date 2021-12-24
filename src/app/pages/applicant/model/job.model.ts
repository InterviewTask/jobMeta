export interface Ijob {
	id: number;
	created_at: string;
	title: string;
	type: string;
	location: string;
  description?:string;
  category?:IJobCategory[]
}
export interface IJobCategory{
  category:string;
  category_id:number;
}

