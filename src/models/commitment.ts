//import {household} from ./household
import { Time } from "@angular/common";

export interface Commitment {
  commitment_id: number;
  commintment_name: string;
  commitment_location: string;
  commitment_day: string;
  commitment_time: Time;
  commitment_description: string;
  household_id: number;
}