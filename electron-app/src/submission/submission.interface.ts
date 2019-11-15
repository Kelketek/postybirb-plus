export interface Submission {
  created: number;
  id: string;
  order: number;
  schedule: SubmissionSchedule;
  title: string;
  type: SubmissionType;
}

export enum SubmissionType {
  FILE = 'FILE',
  STATUS = 'STATUS',
}
export interface SubmissionSchedule {
  isScheduled?: boolean;
  postAt?: number;
}
