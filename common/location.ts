import { Activity } from "./activity";

export interface Location {
  activities: Activity[];
  name: string;
  address: string;
  phoneNumber: string;
  email?: string;
  lat?: number;
  lng?: number;
}
