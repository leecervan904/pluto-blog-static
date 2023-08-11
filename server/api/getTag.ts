export default defineEventHandler(async (event) => {
  const data = await fetch('http://localhost:8000/tag').then(res => res.json())
  return {
    ...data,
  }
})
