import { IResume, Ijob } from ".";

export interface IApplicant {
	id: number;
	created_at: string;
	job_id: number;
	name: string;
	phone: string;
	email: string;
	status: string;
	resume: IResume;
	_job: Ijob;
}
