import { Activity } from "./activity";

export interface Location {
  activities: Activity[];
  name: string;
  address: string;
  phoneNumber: string;
  email?: string;
}

export const mockLocation: Location = {
  activities: [],
  name: "Chez marcus",
  address: "environ",
  phoneNumber: "+1 514 322 4221",
  email: "marcus.phan@polymtl.ca"
};
