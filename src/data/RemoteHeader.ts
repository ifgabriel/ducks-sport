export interface RemoteHeader {
  genders: {
    name: string,
    slug: string,
    categories?: {
      id: string,
      name: string,
      filters?: {
        name: string,
        slug: string,
      }[]
    }[]
  }[]
}
