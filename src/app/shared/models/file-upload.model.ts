export interface Meta {}

export interface IFileUpload {
	path: string;
	name: string;
	type: string;
	size: number;
	mime: string;
	meta: Meta;
}
