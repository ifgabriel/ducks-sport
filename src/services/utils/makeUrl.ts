type MakeUrlType = (endpoint: string, params: any[]) => string

export const makeUrl: MakeUrlType = (endpoint = '', params = []) => (
  `${endpoint}/${params.map((item) => `${item}`).join('/')}`
)
