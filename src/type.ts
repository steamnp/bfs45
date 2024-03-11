export interface IPerson {
  name: string
  age: number
  favNum?: number
}

export type UnknownVariableType = string | number | undefined

interface IPhoto {
  url: string
}

export interface IProduct {
  photo: IPhoto
  _id: string
  category: number
  price: number
  stock: number
  timestamp: string
  name: string
}

export interface IData {
  success: boolean
  products: IProduct[]
  totalPages: number
  message?: string
}
