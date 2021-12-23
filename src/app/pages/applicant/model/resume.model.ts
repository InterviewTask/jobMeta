import { IMeta } from ".";

export interface IResume {
	path: string;
	name: string;
	type: string;
	size: number;
	mime: string;
	meta: IMeta;
	url: string;
}
