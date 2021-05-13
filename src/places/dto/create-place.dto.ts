export class CreatePlaceDto {
  placeName: string;
  placeAddress: string;
  placeRoadAddress: string;
  placeMapX: number;
  placeMapY: number;
  placeCreatedAt: number;
  placeUpdatedAt: number;
  userIdx: number;
  placeReview: string;
  categoryIdx: number;
  groupIdx: number;
}
