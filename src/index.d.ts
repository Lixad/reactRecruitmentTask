export type RawLocationsData = {
  id: number,
  name: string,
  createdAt: string,
  userCount: number,
  description: string,
}

export type LocationsData = RawLocationsData & {
  views: number,
}
