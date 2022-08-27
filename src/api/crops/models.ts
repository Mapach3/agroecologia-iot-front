export interface ICrop {
  cropId: number;
  name: string;
  ownerUserId: number;
  createdAt: string;
  editedAt?: string;
  editedBy?: number;
}

export type CropAddType = Pick<ICrop, "name">;

export type CropUpdateType = Pick<ICrop, "cropId" | "name">;
