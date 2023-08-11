export default defineEventHandler(async (event) => {
  const data = await fetch('http://localhost:8000/article').then(res => res.json())
  return {
    ...data,
  }
})
