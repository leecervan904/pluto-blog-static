interface IResponse<T = any> {
  status: string
  message: string
  result: T
}

interface IPagination {
  current_page: number
  per_page: number
  total: number
  total_page: number
}

interface ICategoryItem {
  id: number
  name: string
  slug: string
  update_at: string
}

type IResponseCategory = IResponse<{
  data: ICategoryItem[]
  pagination: IPagination
}>

export default defineEventHandler(async (event) => {
  const data = await fetch('http://localhost:8000/category').then(res => res.json())
  return {
    ...data,
  } as IResponseCategory
})
