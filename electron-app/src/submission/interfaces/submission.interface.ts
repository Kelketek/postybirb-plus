import { SubmissionType } from 'src/submission/enums/submission-type.enum';
import { EntityIntf } from '../../database/interfaces/entity.interface';
import { SubmissionSchedule } from './submission-schedule.interface';

export interface Submission extends EntityIntf {
  isPosting?: boolean;
  isQueued?: boolean;
  schedule: SubmissionSchedule;
  sources: string[];
  title: string;
  type: SubmissionType;
  order: number;
}
