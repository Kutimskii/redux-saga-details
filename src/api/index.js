

export const searchServices = async (id) => {

  const response = await fetch(`http://localhost:7070/api/services${id}`)

  if (!response.ok){
    throw new Error (response.statusText)
  }
  return await response.json()
}