export interface IApiResponce<T>{
	itemsReceived: number;
	curPage: number;
	nextPage: number;
	prevPage: number;
	itemsTotal: number;
	pageTotal: number;
	items:T[];
}
