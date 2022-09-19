import { ISector } from "../sectors/models";

export interface IGarden {
  gardenId: number;
  name: string;
  description: string;
  location: string;
  ownerUserId: number;
  createdAt?: string;
  sectors: ISector[];
}

export type GardenAddType = Pick<
  IGarden,
  "name" | "description" | "location" | "sectors"
>;

export type GardenUpdateType = Pick<
  IGarden,
  "gardenId" | "name" | "description" | "location" | "sectors"
>;
